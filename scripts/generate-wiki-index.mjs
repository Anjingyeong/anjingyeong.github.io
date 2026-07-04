import { mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { basename, extname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = fileURLToPath(new URL("..", import.meta.url));
const outputDir = join(repoRoot, "public", "wiki");
const sourceDirs = [repoRoot, join(repoRoot, "docs"), join(repoRoot, "docs", "wiki")];
const allowedRootDocs = new Set([
  "llm-wiki-rag-case-study.md",
  "smart-safety-ai-case-study.md",
  "resume-project-bullets.md",
  "portfolio-summary-2026-ai-engineer.md",
]);
const defaultUpdatedAt = "2026-07-04";
const requiredIncidentFields = ["title", "category", "updatedAt", "incidentAt", "cameraId", "eventType", "severity"];

const toSlug = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9가-힣]+/g, "-")
    .replace(/^-|-$/g, "");

const parseScalar = (value) => value.replace(/^["']|["']$/g, "").trim();

const parseList = (value) =>
  value
    .replace(/^\[|\]$/g, "")
    .split(",")
    .map((item) => parseScalar(item))
    .filter(Boolean);

const parseFrontmatter = (raw) => {
  if (!raw.startsWith("---\n")) return { metadata: {}, content: raw };
  const end = raw.indexOf("\n---", 4);
  if (end === -1) return { metadata: {}, content: raw };

  const metadata = Object.fromEntries(
    raw
      .slice(4, end)
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.includes(":"))
      .map((line) => {
        const [key, ...rest] = line.split(":");
        const value = rest.join(":").trim();
        return [key.trim(), value.startsWith("[") ? parseList(value) : parseScalar(value)];
      }),
  );

  return { metadata, content: raw.slice(end + 4).trim() };
};

const titleFromContent = (content, filePath) => {
  const heading = content.match(/^#\s+(.+)$/m);
  return heading ? heading[1].trim() : basename(filePath, extname(filePath));
};

const collectMarkdownFiles = () => {
  const files = [];
  const visit = (dir) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const fullPath = join(dir, entry.name);
      const relPath = relative(repoRoot, fullPath).replaceAll("\\", "/");
      if (entry.isDirectory()) {
        if (![".git", "dist", "node_modules", ".omo"].includes(entry.name)) visit(fullPath);
        continue;
      }
      if (extname(entry.name) !== ".md") continue;
      if (dir === repoRoot && !allowedRootDocs.has(entry.name)) continue;
      files.push({ fullPath, relPath });
    }
  };

  for (const dir of sourceDirs) visit(dir);
  return [...new Map(files.map((file) => [file.relPath, file])).values()].sort((a, b) =>
    a.relPath.localeCompare(b.relPath),
  );
};

const tokenize = (text) =>
  [...text.toLowerCase().matchAll(/[a-z0-9가-힣_./:-]+/g)].map(([token]) => token);

const termFrequency = (tokens) =>
  tokens.reduce((counts, token) => {
    counts[token] = (counts[token] ?? 0) + 1;
    return counts;
  }, {});

const hashVector = (tokens, dimensions = 64) => {
  const vector = Array.from({ length: dimensions }, () => 0);
  for (const token of tokens) {
    let hash = 0;
    for (const char of token) hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
    vector[hash % dimensions] += 1;
  }
  const magnitude = Math.hypot(...vector) || 1;
  return vector.map((value) => Number((value / magnitude).toFixed(6)));
};

const buildDocument = ({ fullPath, relPath }, order) => {
  const raw = readFileSync(fullPath, "utf8").replace(/\r\n/g, "\n");
  const { metadata, content } = parseFrontmatter(raw);
  const title = String(metadata.title ?? titleFromContent(content, fullPath));
  const category = String(metadata.category ?? (relPath.includes("incident") ? "incident-event" : "portfolio-evidence"));
  const updatedAt = String(metadata.updatedAt ?? defaultUpdatedAt);
  const tags = Array.isArray(metadata.tags) ? metadata.tags.map(String) : [];
  const text = content.replace(/^---[\s\S]*?---/m, "").trim();
  const tokens = tokenize(`${title} ${category} ${tags.join(" ")} ${text}`);

  const searchableMetadata = {
    title,
    category,
    updatedAt,
    incidentAt: metadata.incidentAt ? String(metadata.incidentAt) : null,
    cameraId: metadata.cameraId ? String(metadata.cameraId) : null,
    eventType: metadata.eventType ? String(metadata.eventType) : null,
    severity: metadata.severity ? String(metadata.severity) : null,
    tags,
    sourcePath: relPath,
  };

  return {
    id: `${toSlug(title)}-${order + 1}`,
    title,
    category,
    updatedAt,
    incidentAt: searchableMetadata.incidentAt,
    cameraId: searchableMetadata.cameraId,
    eventType: searchableMetadata.eventType,
    severity: searchableMetadata.severity,
    tags,
    order,
    sourcePath: relPath,
    sectionTitle: title,
    summary: String(metadata.summary ?? text.slice(0, 180)),
    metadata: searchableMetadata,
    tokens,
    termFrequency: termFrequency(tokens),
    text,
  };
};

const validateIncidentMetadata = (documents) => {
  const incidentDocs = documents.filter((document) => document.category === "incident-event");
  for (const document of incidentDocs) {
    const missing = requiredIncidentFields.filter((field) => document[field] === null || document[field] === undefined);
    if (missing.length > 0) {
      throw new Error(`${document.sourcePath} is missing incident metadata: ${missing.join(", ")}`);
    }
  }
};

const documents = collectMarkdownFiles().map(buildDocument);
validateIncidentMetadata(documents);
const generatedAt = `${documents.map((document) => document.updatedAt).sort().at(-1)}T00:00:00.000Z`;

mkdirSync(outputDir, { recursive: true });
writeFileSync(
  join(outputDir, "search-index.json"),
  `${JSON.stringify(
    {
      generatedAt,
      strategy: ["metadata filtering", "BM25 keyword search", "vector search", "RRF ranking", "optional re-ranking"],
      graphRag: "later-candidate-after-document-relations-and-scale",
      documents,
    },
    null,
    2,
  )}\n`,
);
writeFileSync(
  join(outputDir, "rag-vector-index.json"),
  `${JSON.stringify(
    {
      generatedAt,
      embeddingMode: "deterministic-local-hash-vector-fallback",
      dimensions: 64,
      documents: documents.map((document) => ({
        id: document.id,
        title: document.title,
        category: document.category,
        metadata: document.metadata,
        sourcePath: document.sourcePath,
        vector: hashVector(document.tokens),
      })),
    },
    null,
    2,
  )}\n`,
);

console.log(`Generated ${documents.length} wiki documents in ${relative(repoRoot, outputDir).replaceAll("\\", "/")}`);

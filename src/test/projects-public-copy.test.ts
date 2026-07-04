import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const publicProjectSources = [
  readFileSync(
  resolve(process.cwd(), "src/components/ProjectsSection.tsx"),
  "utf8",
  ),
  readFileSync(resolve(process.cwd(), "src/data/projects.ts"), "utf8"),
].join("\n");

const packageJson = readFileSync(resolve(process.cwd(), "package.json"), "utf8");
const searchIndex = JSON.parse(readFileSync(resolve(process.cwd(), "public/wiki/search-index.json"), "utf8"));
const ragVectorIndex = JSON.parse(readFileSync(resolve(process.cwd(), "public/wiki/rag-vector-index.json"), "utf8"));

describe("ProjectsSection public copy", () => {
  it("does not expose internal analysis labels", () => {
    expect(publicProjectSources).not.toMatch(
      /STAR-RN|2026 트렌드|구현 상태|실험 중|구현됨|향후 계획|Next Step|확인 필요|면접|감독판/,
    );
  });

  it("presents Smart Safety before LLM Wiki as public representative work", () => {
    const smartSafetyIndex = publicProjectSources.indexOf("스마트 안전 관제");
    const llmWikiIndex = publicProjectSources.indexOf("LLM Wiki");

    expect(smartSafetyIndex).toBeGreaterThanOrEqual(0);
    expect(llmWikiIndex).toBeGreaterThan(smartSafetyIndex);
  });

  it("keeps LLM Wiki claims aligned with lightweight static index generation", () => {
    expect(packageJson).toContain("\"wiki:index\"");
    expect(publicProjectSources).toContain("Metadata Filtering");
    expect(publicProjectSources).toContain("BM25");
    expect(publicProjectSources).toContain("Vector Search");
    expect(publicProjectSources).toContain("RRF");
    expect(publicProjectSources).toContain("GraphRAG");
    expect(publicProjectSources).not.toMatch(/\/api\/rag\/ask|LLM API key|구현했습니다/);
  });

  it("describes incident-search metadata needed for safety event questions", () => {
    for (const metadataField of ["incidentAt", "cameraId", "eventType", "severity"]) {
      expect(publicProjectSources).toContain(metadataField);
    }
  });

  it("generates searchable incident metadata for the wiki indexes", () => {
    const incidentDocument = searchIndex.documents.find(
      (document: { metadata?: { category?: string } }) => document.metadata?.category === "incident-event",
    );
    const incidentVector = ragVectorIndex.documents.find(
      (document: { metadata?: { category?: string } }) => document.metadata?.category === "incident-event",
    );

    expect(searchIndex.strategy).toEqual([
      "metadata filtering",
      "BM25 keyword search",
      "vector search",
      "RRF ranking",
      "optional re-ranking",
    ]);
    expect(searchIndex.graphRag).toBe("later-candidate-after-document-relations-and-scale");
    expect(incidentDocument?.metadata).toMatchObject({
      title: "Smart Safety Incident Event Metadata",
      category: "incident-event",
      updatedAt: "2026-07-04",
      incidentAt: "2026-07-04T09:30:00+09:00",
      cameraId: "demo-camera-rtsp-01",
      eventType: "fall-risk-review",
      severity: "medium",
    });
    expect(incidentVector?.metadata?.cameraId).toBe("demo-camera-rtsp-01");
    expect(incidentVector?.vector).toHaveLength(64);
  });
});

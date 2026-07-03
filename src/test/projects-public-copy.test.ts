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

describe("ProjectsSection public copy", () => {
  it("does not expose internal analysis labels", () => {
    expect(publicProjectSources).not.toMatch(/STAR-RN|2026 트렌드|구현 상태|실험 중|구현됨|향후 계획|Next Step/);
  });

  it("presents Smart Safety before LLM Wiki as public representative work", () => {
    const smartSafetyIndex = publicProjectSources.indexOf("스마트 안전 관제");
    const llmWikiIndex = publicProjectSources.indexOf("LLM Wiki");

    expect(smartSafetyIndex).toBeGreaterThanOrEqual(0);
    expect(llmWikiIndex).toBeGreaterThan(smartSafetyIndex);
  });
});

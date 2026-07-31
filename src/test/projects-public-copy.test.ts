import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { render, screen } from "@testing-library/react";
import { createElement } from "react";
import { describe, expect, it } from "vitest";
import ProjectsSection from "@/components/ProjectsSection";

const readText = (path: string) =>
  readFileSync(resolve(process.cwd(), path), "utf8");

const publicProjectSources = [
  readText("src/components/ProjectsSection.tsx"),
  readText("src/data/projects.ts"),
].join("\n");

const packageJson = readText("package.json");
const searchIndex = JSON.parse(readText("public/wiki/search-index.json"));
const ragVectorIndex = JSON.parse(
  readText("public/wiki/rag-vector-index.json"),
);
const portfolioPublicCopy = [
  publicProjectSources,
  readText("src/components/AboutSection.tsx"),
  readText("src/pages/PortfolioPrint.tsx"),
  readText("docs/portfolio-submission-audit.md"),
  readText("docs/resume/ai-engineer-resume.md"),
].join("\n");

describe("ProjectsSection public copy", () => {
  it("describes Smart Safety as a real-time event pipeline with caveated metrics", () => {
    expect(publicProjectSources).toContain("실시간 이상행동 탐지 및 안전 관제 AI 시스템");
    expect(publicProjectSources).toContain("29/29건 위험 이벤트 1초 내 관제 도달");
    expect(publicProjectSources).toContain("YOLO26n-pose");
    expect(publicProjectSources).toContain("RTSP 영상에서 YOLO26n-pose로");
    expect(publicProjectSources).toContain("LSTM");
    expect(publicProjectSources).toContain("MQTT");
  });

  it("does not contain bracketed evidence labels in public copy", () => {
    expect(publicProjectSources).not.toMatch(
      /\[측정 완료\]|\[내부 대리지표\]|\[정성적 확인\]|\[근거 확인 필요\]|\[추가 실험 필요\]/,
    );
  });

  it("describes the RF-DETR colonoscopy assistant within the verified role scope", () => {
    expect(publicProjectSources).toContain(
      "RF-DETR 기반 대장 내시경 용종 검출 애플리케이션",
    );
    expect(publicProjectSources).toContain("Kvasir Dataset");
    expect(publicProjectSources).toContain("Train 70% / Val 20% / Test 10%");
    expect(publicProjectSources).toContain("Elastic Deformation");
    expect(publicProjectSources).toContain("Grid Distortion");
    expect(publicProjectSources).toContain("fine-tuning");
    expect(publicProjectSources).toContain("OpenCV");
    expect(publicProjectSources).toContain("mAP@50");
    expect(publicProjectSources).toContain("/images/rf-detr-polyp-detection.png");
    expect(publicProjectSources).toContain("/images/rf_detr_aug.png");
    expect(publicProjectSources).toContain("/images/rf_detr_gold.jpg");
    expect(publicProjectSources).not.toContain("전후 4초 영상 클립");
    expect(publicProjectSources).not.toContain("임상 검증이 완료");
  });

  it("keeps VAE responsibilities aligned to preprocessing and dynamic threshold post-processing", () => {
    expect(portfolioPublicCopy).toContain("유방 초음파");
    expect(portfolioPublicCopy).toContain("Dynamic Threshold");
    expect(portfolioPublicCopy).toContain("Reconstruction Error Map");
    expect(portfolioPublicCopy).not.toMatch(
      /Custom Loss 설계|커스텀 Loss|커스텀 손실 함수.*구현|KLD\+MSE 커스텀 손실 함수/,
    );
  });

  it("does not expose internal analysis or trend-first labels in public project copy", () => {
    expect(publicProjectSources).not.toMatch(
      /STAR-RN|2026 트렌드|실험 중|구현은 향후 계획|Next Step|면접|감독판|GraphRAG|Agentic AI/,
    );
  });

  it("presents Smart Safety before LLM Wiki as public representative work", () => {
    const allSources = [
      publicProjectSources,
      readText("src/data/fullstackProjects.ts"),
    ].join("\n");
    const smartSafetyIndex = allSources.indexOf("스마트 안전 관제");
    const llmWikiIndex = allSources.indexOf("LLM Wiki");

    expect(smartSafetyIndex).toBeGreaterThanOrEqual(0);
    expect(llmWikiIndex).toBeGreaterThan(smartSafetyIndex);
  });

  it("shows Smart Safety problem, role, decisions, and results without opening a dialog", () => {
    render(createElement(ProjectsSection));

    expect(screen.getAllByText("해결한 문제").length).toBeGreaterThan(0);
    expect(screen.getAllByText("개인 기여 · 직접 담당").length).toBeGreaterThan(0);
    expect(screen.getAllByText("문제를 어떻게 판단하고 개선했는지").length).toBeGreaterThan(0);
    expect(screen.getAllByText("AI 시스템 구조").length).toBeGreaterThan(0);
    expect(screen.getAllByText("자세 좌표만으로 부족했던 낙상 전이를 특징으로 추가했습니다").length).toBeGreaterThan(0);
    expect(screen.getAllByText("최신 프레임 정책과 TensorRT로 실시간성을 확보했습니다").length).toBeGreaterThan(0);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("shows VAE responsibility evidence directly on the page", () => {
    render(createElement(ProjectsSection));

    expect(screen.getByText("VAE 기반 유방 초음파 이상 탐지")).toBeInTheDocument();
    expect(screen.getAllByText(/Reconstruction Error Map/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Dynamic Threshold/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/라벨 부족 문제 재정의/).length).toBeGreaterThan(0);
    expect(screen.queryByText(/커스텀 손실 함수를 단독 설계/)).not.toBeInTheDocument();
  });

  it("keeps LLM Wiki claims aligned with the evaluated hybrid search and Elasticsearch scope", () => {
    expect(packageJson).toContain('"wiki:index"');
    expect(publicProjectSources).toContain("50개 Wiki 문서 / 737개 Chunk");
    expect(publicProjectSources).toContain("61개 Golden Query 평가셋");
    expect(publicProjectSources).toContain("Hybrid Hit@5 82.14%");
    expect(publicProjectSources).toContain("BM25");
    expect(publicProjectSources).toContain("Vector Search");
    expect(publicProjectSources).toContain("RRF");
    expect(publicProjectSources).toContain("Elasticsearch");
    expect(publicProjectSources).toContain("dense_vector");
    expect(publicProjectSources).toContain("HNSW");
    expect(publicProjectSources).toContain("Legacy 검색 유지");
    expect(publicProjectSources).not.toMatch(
      /\/api\/rag\/ask|LLM API key|GraphRAG/,
    );
  });

  it("describes incident-search metadata needed for safety event questions", () => {
    for (const metadataField of [
      "incidentAt",
      "cameraId",
      "eventType",
      "severity",
    ]) {
      expect(publicProjectSources).toContain(metadataField);
    }
  });

  it("generates searchable incident metadata for the wiki indexes", () => {
    const incidentDocument = searchIndex.documents.find(
      (document: { metadata?: { category?: string } }) =>
        document.metadata?.category === "incident-event",
    );
    const incidentVector = ragVectorIndex.documents.find(
      (document: { metadata?: { category?: string } }) =>
        document.metadata?.category === "incident-event",
    );

    expect(searchIndex.strategy).toEqual([
      "metadata filtering",
      "BM25 keyword search",
      "vector search",
      "RRF ranking",
      "optional re-ranking",
    ]);
    expect(searchIndex.graphRag).toBe(
      "later-candidate-after-document-relations-and-scale",
    );
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

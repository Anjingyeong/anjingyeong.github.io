import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { fireEvent, render, screen } from "@testing-library/react";
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
    expect(publicProjectSources).toContain("스마트 안전 관제 시스템");
    expect(publicProjectSources).toContain("RTSP → AI 추론 → MQTT → WebSocket");
    expect(publicProjectSources).toContain("RTSP → MediaMTX → AI 추론 서버");
    expect(publicProjectSources).toContain("frameId, timestamp, cameraLoginId, confidence");
    expect(publicProjectSources).toContain("YOLO Pose + ByteTrack + LSTM");
    expect(publicProjectSources).toContain("검증해 나갈 예정");
  });

  it("describes the RF-DETR colonoscopy assistant within the verified role scope", () => {
    expect(publicProjectSources).toContain(
      "RF-DETR 기반 실시간 대장 내시경 용종 검출 시스템",
    );
    expect(publicProjectSources).toContain("Kvasir Dataset");
    expect(publicProjectSources).toContain("Train 70% / Validation 20% / Test 10%");
    expect(publicProjectSources).toContain("Elastic Deformation");
    expect(publicProjectSources).toContain("Grid Distortion");
    expect(publicProjectSources).toContain("object query");
    expect(publicProjectSources).toContain("Multi-scale feature");
    expect(publicProjectSources).toContain("데이터 전처리");
    expect(publicProjectSources).toContain("fine-tuning");
    expect(publicProjectSources).toContain("OpenCV 기반 GUI");
    expect(publicProjectSources).toContain("실험 설정 기준 약 7% 개선");
    expect(publicProjectSources).toContain("의료영상 데이터 전처리");
    expect(publicProjectSources).toContain("의료진 판독을 보조");
    expect(publicProjectSources).toContain("/images/rf-detr-polyp-detection.png");
    expect(publicProjectSources).toContain("/images/rf-detr-dataset-sample.png");
    expect(publicProjectSources).toContain("/images/rf-detr-model-paper.png");
    expect(publicProjectSources).toContain("/images/rf_detr_aug.png");
    expect(publicProjectSources).toContain("/images/rf-detr-model-comparison.jpg");
    expect(publicProjectSources).toContain("/images/rf-detr-fps-comparison.png");
    expect(publicProjectSources).not.toContain("전후 4초 영상 클립");
    expect(publicProjectSources).not.toContain("/images/rf-detr-auto-save-clip.png");
    expect(publicProjectSources).not.toContain("/images/rf-detr-auto-save-folder.png");
    expect(publicProjectSources).not.toContain("임상 검증이 완료");
  });

  it("keeps VAE responsibilities aligned to preprocessing and dynamic threshold post-processing", () => {
    expect(portfolioPublicCopy).toContain("유방 초음파 이미지");
    expect(portfolioPublicCopy).toContain("Dynamic Threshold 후처리 알고리즘");
    expect(portfolioPublicCopy).toContain("Reconstruction Error Map");
    expect(portfolioPublicCopy).toContain("MSE + KLD Loss");
    expect(portfolioPublicCopy).not.toMatch(
      /Custom Loss 설계|커스텀 Loss|커스텀 손실 함수.*구현|KLD\+MSE 커스텀 손실 함수/,
    );
  });

  it("does not expose internal analysis or trend-first labels in public project copy", () => {
    expect(publicProjectSources).not.toMatch(
      /STAR-RN|2026 트렌드|실험 중|구현은 향후 계획|Next Step|면접|감독판|GraphRAG|Agentic AI|VLM/,
    );
  });

  it("presents Smart Safety before LLM Wiki as public representative work", () => {
    const smartSafetyIndex = publicProjectSources.indexOf("스마트 안전 관제");
    const llmWikiIndex = publicProjectSources.indexOf("LLM Wiki");

    expect(smartSafetyIndex).toBeGreaterThanOrEqual(0);
    expect(llmWikiIndex).toBeGreaterThan(smartSafetyIndex);
  });

  it("opens project details from a card with submission-ready sections", () => {
    render(createElement(ProjectsSection));

    fireEvent.click(screen.getByText("스마트 안전 관제 시스템"));

    expect(screen.getByRole("dialog")).toHaveTextContent("문제 정의");
    expect(screen.getByRole("dialog")).toHaveTextContent("맡은 역할");
    expect(screen.getByRole("dialog")).toHaveTextContent("한계 및 개선 방향");
  });

  it("opens VAE details with the corrected responsibility scope", () => {
    render(createElement(ProjectsSection));

    fireEvent.click(screen.getByText("VAE 기반 유방 초음파 이상 탐지"));

    expect(screen.getByRole("dialog")).toHaveTextContent(
      "유방 초음파 이미지를 VAE 학습·추론 입력에 맞게 정리",
    );
    expect(screen.getByRole("dialog")).toHaveTextContent(
      "Dynamic Threshold 후처리 알고리즘",
    );
    expect(screen.getByRole("dialog")).toHaveTextContent(
      "손실 함수 자체를 직접 설계한 역할로 표현하지 않고",
    );
    expect(screen.getByRole("dialog")).not.toHaveTextContent(
      "커스텀 손실 함수를 단독 설계",
    );
  });

  it("keeps LLM Wiki claims aligned with lightweight static index generation", () => {
    expect(packageJson).toContain('"wiki:index"');
    expect(publicProjectSources).toContain("Metadata Filtering");
    expect(publicProjectSources).toContain("BM25");
    expect(publicProjectSources).toContain("Vector Search");
    expect(publicProjectSources).toContain("RRF");
    expect(publicProjectSources).toContain("정적 JSON");
    expect(publicProjectSources).toContain("8종 메타데이터");
    expect(publicProjectSources).not.toMatch(
      /\/api\/rag\/ask|LLM API key|구현했습니다|GraphRAG/,
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

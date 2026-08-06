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

const submissionUiSources = [
  publicProjectSources,
  readText("src/data/fullstackProjects.ts"),
  readText("src/components/HeroSection.tsx"),
  readText("src/components/AboutSection.tsx"),
  readText("src/pages/PortfolioPrint.tsx"),
  readText("src/pages/FullstackPortfolioPrint.tsx"),
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
    expect(publicProjectSources).toContain("29/29건 위험 이벤트 1초 내 MQTT Subscriber 도달");
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
    expect(publicProjectSources).toContain("팀 구현");
    expect(publicProjectSources).toContain("OpenCV");
    expect(publicProjectSources).toContain("데이터 증강 적용 · 증강 후 bbox 정합성 검토");
    expect(publicProjectSources).not.toContain("영상 입력 애플리케이션 구현");
    expect(publicProjectSources).toContain("mAP@50");
    expect(publicProjectSources).toContain("/images/rf-detr-polyp-detection.png");
    expect(publicProjectSources).toContain("/images/rf_detr_aug.png");
    expect(publicProjectSources).toContain("/images/rf_detr_gold.jpg");
    expect(publicProjectSources).not.toContain("전후 4초 영상 클립");
    expect(publicProjectSources).not.toContain("임상 검증이 완료");
  });

  it("keeps VAE responsibilities aligned to augmentation and difference-image ideation", () => {
    expect(portfolioPublicCopy).toContain("유방 초음파");
    expect(publicProjectSources).toContain("초음파 영상 데이터 증강");
    expect(publicProjectSources).toContain("차영상 기반 이상 후보 시각화 아이디어");
    expect(publicProjectSources).toContain("VAE 모델과 후처리 구현은 팀 작업");
    expect(publicProjectSources).not.toContain("VAE 비지도 이상탐지 및 Dynamic Threshold 후처리");
    expect(portfolioPublicCopy).not.toMatch(
      /Custom Loss 설계|커스텀 Loss|커스텀 손실 함수.*구현|KLD\+MSE 커스텀 손실 함수/,
    );
  });

  it("does not expose internal analysis or trend-first labels in public project copy", () => {
    expect(publicProjectSources).not.toMatch(
      /STAR-RN|2026 트렌드|실험 중|구현은 향후 계획|Next Step|면접|감독판|GraphRAG|Agentic AI/,
    );
  });

  it("uses submission-ready project labels without addressing the evaluator", () => {
    expect(submissionUiSources).not.toMatch(
      /채용담당자 요약|이 프로젝트로 보여주는 역량|프로젝트에서 보여준 역량|원인·구현·검증|지원 포트폴리오|지원 직무|표현 원칙|포트폴리오 \(제출용\)|기술 나열보다 현장 문제, 개인 기여, 판단 근거와 검증 결과가 먼저 보이도록 구성했습니다\./,
    );
    expect(submissionUiSources).toContain("프로젝트 요약");
    expect(submissionUiSources).toContain("핵심 기술 역량");
    expect(submissionUiSources).toContain("프로젝트 배경과 기술 선택");
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

  it("opens Smart Safety details from the same card interaction as the other projects", () => {
    render(createElement(ProjectsSection));

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(screen.queryByText("AI 시스템 구조")).not.toBeInTheDocument();
    expect(screen.getAllByText("대표 프로젝트").length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByText("기술 확장")).toHaveLength(3);
    expect(screen.queryByText("Main")).not.toBeInTheDocument();
    expect(screen.queryByText("Supporting")).not.toBeInTheDocument();

    fireEvent.click(screen.getByText("실시간 이상행동 탐지 및 안전 관제 AI 시스템"));

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("문제 정의와 목표")).toBeInTheDocument();
    expect(screen.getByText("담당 범위와 협업")).toBeInTheDocument();
    expect(screen.getByText("AI 시스템 구조")).toBeInTheDocument();
    expect(screen.getByText("자세 좌표만으로 부족했던 낙상 전이를 특징으로 추가했습니다")).toBeInTheDocument();
    expect(screen.getByText("최신 프레임 정책과 TensorRT로 실시간성을 확보했습니다")).toBeInTheDocument();
  });

  it("shows VAE responsibility evidence directly on the page", () => {
    render(createElement(ProjectsSection));

    expect(screen.getByText("VAE 기반 유방 초음파 이상 탐지")).toBeInTheDocument();
    expect(screen.getAllByText(/초음파 영상 데이터 증강/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/차영상 기반 후보 시각화 아이디어/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/VAE 재구성 · 팀 흐름/).length).toBeGreaterThan(0);
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
    expect(publicProjectSources).toContain("Elasticsearch 학습·확장 구현");
    expect(publicProjectSources).toContain("실제 Elasticsearch 전체 질의 실측은 후속 검증");
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

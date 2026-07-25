import { readFileSync } from "fs";
import { resolve } from "path";
import { describe, expect, it } from "vitest";

function readDoc(relativePath: string): string {
  return readFileSync(resolve(process.cwd(), relativePath), "utf-8");
}

describe("Print, Case Study, and Summary document synchronization", () => {
  const portfolioPrint = readDoc("src/pages/PortfolioPrint.tsx");
  const fullstackPrint = readDoc("src/pages/FullstackPortfolioPrint.tsx");
  const caseStudy = readDoc("smart-safety-ai-case-study.md");
  const portfolioSummary = readDoc("portfolio-summary-2026-ai-engineer.md");

  it("verifies AI performance metrics in relevant documents", () => {
    const aiDocs = [
      { name: "PortfolioPrint.tsx", content: portfolioPrint },
      { name: "smart-safety-ai-case-study.md", content: caseStudy },
      { name: "portfolio-summary-2026-ai-engineer.md", content: portfolioSummary },
    ];

    aiDocs.forEach(({ name, content }) => {
      expect(content, `${name} missing F1 89.29% -> 93.49%`).toMatch(/89\.29%.*93\.49%/s);
      expect(content, `${name} missing ID Switch 8건 -> 1건`).toMatch(/8건.*1건/s);
      expect(content, `${name} missing Track Coverage 35.76% -> 49.70%`).toMatch(/35\.76%.*49\.70%/s);
      expect(content, `${name} missing YOLO latency 9.454ms -> 4.723ms`).toMatch(/9\.454ms.*4\.723ms/s);
      expect(content, `${name} missing total latency 11.789ms -> 6.101ms`).toMatch(/11\.789ms.*6\.101ms/s);
    });
  });

  it("verifies event pipeline metrics in relevant documents", () => {
    const pipelineDocs = [
      { name: "FullstackPortfolioPrint.tsx", content: fullstackPrint },
      { name: "smart-safety-ai-case-study.md", content: caseStudy },
      { name: "portfolio-summary-2026-ai-engineer.md", content: portfolioSummary },
    ];

    pipelineDocs.forEach(({ name, content }) => {
      expect(content, `${name} missing E2E 20.931ms`).toContain("20.931ms");
      expect(content, `${name} missing p95 26ms`).toContain("26ms");
      expect(content, `${name} missing 29건`).toContain("29");
      expect(content, `${name} missing 1초`).toContain("1초");
    });
  });

  it("verifies AI PortfolioPrint copy specific rules", () => {
    expect(portfolioPrint).toContain("대장 내시경 용종 검출");
    expect(portfolioPrint).not.toContain("ABEEK 공학인증 우수");
  });

  it("verifies Full-Stack PortfolioPrint role boundary copy", () => {
    expect(fullstackPrint).toContain("전체 백엔드와 프론트엔드를 단독 구현한 것이 아니라");
  });

  it("verifies Smart Safety Case Study copy rules and qualifications", () => {
    expect(caseStudy).not.toContain("현재성을 보장");
    expect(caseStudy).toContain("분석 결과의 현재성 저하를 완화했습니다");
    expect(caseStudy).toContain("자체 테스트");
    expect(caseStudy).toContain("MOTA/HOTA");
  });

  it("verifies Portfolio Summary positioning copy", () => {
    expect(portfolioSummary).toContain(
      "이 포트폴리오는 컴퓨터비전 AI 엔지니어와 실시간 영상 AI 시스템 개발자 직무를 중심으로 구성했습니다"
    );
    expect(portfolioSummary).toContain(
      "Full-Stack 경험은 AI 결과를 실제 이벤트·데이터·관제 화면으로 연결할 수 있다는 시스템 통합 역량의 근거로 제시합니다"
    );
  });
});

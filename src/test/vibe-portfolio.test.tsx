import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import {
  engineeringBackground,
  vibeBuilds,
  vibeWorkflow,
} from "@/data/vibePortfolio";
import VibePortfolio from "@/pages/VibePortfolio";
import VibePortfolioPrint from "@/pages/VibePortfolioPrint";

const readText = (path: string) => readFileSync(resolve(process.cwd(), path), "utf8");

describe("vibe portfolio", () => {
  it("keeps LLM Wiki as the RAG quality case and two shipped vibe-coding products", () => {
    expect(vibeWorkflow.map((step) => step.title)).toEqual([
      "Requirement",
      "LLM-assisted Build",
      "Human Decision",
      "QA",
      "Deploy",
      "Iterate",
    ]);
    expect(vibeBuilds.map((build) => build.title)).toEqual(["LLM Wiki", "SongSong", "마음이음"]);
    expect(vibeBuilds[0].proof).toContain("61개 Golden Query");
    expect(vibeBuilds[0].proof).toContain("Hybrid Hit@5 82.14%");
    expect(vibeBuilds.slice(1).map((build) => build.title)).toEqual(["SongSong", "마음이음"]);
    expect(engineeringBackground.proof).toContain("Tracking ID Switch 8 → 1");
  });

  it("positions the web portfolio around LLM automation, RAG quality, then vibe coding", () => {
    const { container } = render(
      <MemoryRouter>
        <VibePortfolio />
      </MemoryRouter>,
    );

    const text = container.textContent ?? "";
    expect(text).toContain("LLM을 업무에 맞게 다듬고");
    expect(text).toContain("실제 자동화로 연결합니다");
    expect(text).toContain("JK — ChatGPT 실행을 로컬·OCI로 연결한 Thin Harness");
    expect(text).toContain("별도 LLM/API 호출을 중복하지 않도록");
    expect(text).toContain("LLM Wiki — 검색 품질을 측정하며 개선한 RAG 시스템");
    expect(text).toContain("Retrieval · Context · Evaluation");
    expect(text).toContain("모델 weight가 아니라 retrieval과 context 구성");
    expect(text).toContain("System tuning / human decisions");
    expect(text).toContain("Vibe Coding — 빠르게 만들고 실제로 배포한 제품");
    expect(text).toContain("SongSong");
    expect(text).toContain("마음이음");
    expect(text).toContain("Engineering Background");
  });

  it("renders exactly three print pages with JK first, RAG second, vibe products third", () => {
    const { container } = render(
      <MemoryRouter>
        <VibePortfolioPrint />
      </MemoryRouter>,
    );

    const pages = container.querySelectorAll(".print-page");
    expect(pages).toHaveLength(3);
    const page1 = pages[0].textContent ?? "";
    const page2 = pages[1].textContent ?? "";
    const page3 = pages[2].textContent ?? "";

    expect(page1).toContain("JK · ChatGPT 실행을 로컬·OCI로 연결한 Thin Harness");
    expect(page1).toContain("별도 코딩 에이전트나 LLM을 다시 호출하는 중복");
    expect(page1).toContain("Context / Role / Permission / Approval");
    expect(page2).toContain("LLM Wiki · 검색 품질을 측정하며 개선한 RAG 시스템");
    expect(page2).toContain("61개 Golden Query");
    expect(page2).toContain("Hybrid Hit@5 82.14%");
    expect(page2).toContain("What I Tune");
    expect(page3).toContain("빠르게 만들고 실제로 배포한 제품");
    expect(page3).toContain("SongSong");
    expect(page3).toContain("마음이음");
    expect(page3).toContain("Smart Safety");
  });

  it("exposes clean vibe browser and print routes without replacing existing variants", () => {
    const appSource = readText("src/App.tsx");
    expect(appSource).toContain('path="/vibe"');
    expect(appSource).toContain('path="/print/vibe"');
    expect(appSource).toContain('import.meta.env.MODE === "vibe"');
    expect(appSource).toContain('path="/ai"');
    expect(appSource).toContain('path="/fullstack"');
  });
});

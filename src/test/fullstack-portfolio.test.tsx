import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import AboutSection from "@/components/AboutSection";
import Header from "@/components/Header";
import ProjectsSection from "@/components/ProjectsSection";
import { projects } from "@/data/projects";
import { fullstackProjects } from "@/data/fullstackProjects";
import FullstackPortfolioPrint from "@/pages/FullstackPortfolioPrint";

const readText = (path: string) => readFileSync(resolve(process.cwd(), path), "utf8");

describe("full-stack portfolio", () => {
  it("keeps exactly three requested projects with grounded ownership copy", () => {
    expect(fullstackProjects.map((project) => project.title)).toEqual([
      "개인정보 최소 수집형 자가체크 및 결과 리포트 웹서비스",
      "AI 이벤트 수신부터 사고 검색까지 연결한 실시간 안전 관제 플랫폼",
      "BM25·Vector Search·RRF 기반 프로젝트 지식 검색 시스템",
    ]);
    expect(fullstackProjects).toHaveLength(3);
    expect(fullstackProjects.some((project) => project.title.includes("포트폴리오 웹사이트"))).toBe(false);
    expect(fullstackProjects[0].meta?.period).toBe("약 2주");
    expect(fullstackProjects[0].meta?.role).toContain("1인 개발");
    expect(fullstackProjects[1].description).toContain("위험 이벤트를 화면에 띄우는 데서 끝내지 않고");
    expect(JSON.stringify(fullstackProjects)).not.toContain("직접 구현한 것으로 표현하지 않습니다");

    render(<ProjectsSection items={fullstackProjects} grouped={false} />);
    const headings = screen.getAllByRole("heading", { level: 3 }).map((heading) => heading.textContent);
    expect(headings).toEqual(fullstackProjects.map((project) => project.title));
  });

  it("switches About copy without changing the AI variant", () => {
    const { rerender } = render(<AboutSection variant="fullstack" />);
    expect(screen.getByText("Full-Stack Developer 소개")).toBeInTheDocument();
    expect(screen.getByText("Full-Stack Development")).toBeInTheDocument();
    expect(screen.getByText("Production-ready Full-Stack Developer")).toBeInTheDocument();
    expect(screen.getByText("Full-Stack Development Focus")).toBeInTheDocument();
    expect(screen.queryByText("AI Engineer 소개")).not.toBeInTheDocument();

    rerender(<AboutSection variant="ai" />);
    expect(screen.getByText("AI Engineer 소개")).toBeInTheDocument();
    expect(screen.getByText("AI Engineering")).toBeInTheDocument();
    expect(screen.getByText("Production-ready AI Engineer")).toBeInTheDocument();
    expect(screen.getByText("AI Engineering Focus")).toBeInTheDocument();
  });

  it("marks the AI role active on the root variant", () => {
    render(<MemoryRouter initialEntries={["/"]}><Header variant="ai" /></MemoryRouter>);
    expect(screen.getByRole("link", { name: "AI Engineer" })).toHaveClass("bg-primary");
    expect(screen.getByRole("link", { name: "Full-Stack Developer" })).not.toHaveClass("bg-primary");
  });

  it("uses the stated project periods", () => {
    expect(fullstackProjects.map((project) => project.meta?.period)).toEqual([
      "약 2주",
      "2026.05–2026.07",
      "2026",
    ]);
  });

  it("defines AI, full-stack, and print routes without replacing existing routes", () => {
    const appSource = readText("src/App.tsx");
    for (const route of ['path="/"', 'path="/ai"', 'path="/fullstack"', 'path="/print"', 'path="/print/fullstack"']) {
      expect(appSource).toContain(route);
    }
  });

  it("renders the A4 full-stack resume with exactly three representative projects", () => {
    render(<MemoryRouter><FullstackPortfolioPrint /></MemoryRouter>);
    expect(screen.getByText("Full-Stack Developer")).toBeInTheDocument();
    expect(screen.getByText(/사용자의 한 번의 입력이 화면, API, 데이터와 결과까지 막힘없이 이어지도록 만드는 개발자입니다/)).toBeInTheDocument();
    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(3);
    expect(screen.getByText(/Python AI Worker의 위험 이벤트 생성과 MQTT 발행을 담당/)).toBeInTheDocument();
    expect(screen.getByText("2026.05 - 2026.07")).toBeInTheDocument();
    expect(screen.getByText(/약 2주 · 개인 프로젝트 · 1인 개발/)).toBeInTheDocument();
    expect(document.body.textContent).not.toContain("Spring Boot 백엔드와 React 프론트엔드 전체가 아닌");
  });

  it("ships the matching full-stack developer resume document", () => {
    const resume = readText("docs/resume-fullstack-developer.md");
    expect(resume).toContain("Full-Stack Developer 이력서");
    expect(resume).toContain("직접 구현");
    expect(resume).toContain("MQTT 메시지를 발행");
    expect(resume.indexOf("마음이음")).toBeLessThan(resume.indexOf("스마트 안전 관제"));
    expect(resume.indexOf("스마트 안전 관제")).toBeLessThan(resume.indexOf("LLM Wiki·RAG"));
    expect(resume).toContain("약 2주 · 개인 프로젝트 · 1인 개발");
    expect(resume).not.toContain("직접 구현한 것으로 표현하지 않습니다");
    expect(resume).toContain("건양대학교 의공학과 학사, 2026.02 졸업");
    expect(resume).toContain("SK쉴더스 지능형 애플리케이션 개발 부트캠프 5기, 2026.05–2026.07");
  });

  it("connects smart safety project visual assets correctly for both AI and Full-Stack pages", () => {
    const aiSmartSafety = projects.find((p) => p.title.includes("실시간 이상행동 탐지"));
    const fullstackSmartSafety = fullstackProjects.find((p) => p.title.includes("AI 이벤트 수신부터 사고 검색"));

    expect(aiSmartSafety?.heroImage?.src).toBe("/images/smart-safety/dashboard-and-search.jpg");
    expect(fullstackSmartSafety?.heroImage?.src).toBe("/images/smart-safety/dashboard-and-search.jpg");

    const aiImageSources = aiSmartSafety?.details.flatMap((d) => d.images?.map((i) => i.src) ?? []) ?? [];
    const fullstackImageSources = fullstackSmartSafety?.details.flatMap((d) => d.images?.map((i) => i.src) ?? []) ?? [];

    expect(aiImageSources).toContain("/images/smart-safety/tracking-recovery.png");
    expect(fullstackImageSources).toContain("/images/smart-safety/incident-merge-before-after.svg");

    [...aiImageSources, ...fullstackImageSources].forEach((src) => {
      expect(src).toMatch(/^\/images\/smart-safety\//);
    });
  });
});

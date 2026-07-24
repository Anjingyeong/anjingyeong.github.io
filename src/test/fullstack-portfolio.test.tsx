import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import AboutSection from "@/components/AboutSection";
import Header from "@/components/Header";
import ProjectsSection from "@/components/ProjectsSection";
import { fullstackProjects } from "@/data/fullstackProjects";
import FullstackPortfolioPrint from "@/pages/FullstackPortfolioPrint";

const readText = (path: string) => readFileSync(resolve(process.cwd(), path), "utf8");

describe("full-stack portfolio", () => {
  it("keeps the requested project order and contribution boundaries", () => {
    expect(fullstackProjects.map((project) => project.title)).toEqual([
      "개인정보 최소 수집형 자가체크 및 결과 리포트 웹서비스",
      "MQTT·Spring Boot·WebSocket 기반 실시간 안전 관제 플랫폼",
      "BM25·Vector Search·RRF 기반 프로젝트 지식 검색 시스템",
      "React·TypeScript 기반 직무별 포트폴리오 웹사이트",
    ]);

    render(<ProjectsSection items={fullstackProjects} grouped={false} />);
    const headings = screen.getAllByRole("heading", { level: 3 }).map((heading) => heading.textContent);
    expect(headings).toEqual(fullstackProjects.map((project) => project.title));
    expect(fullstackProjects[1].details.some((detail) => detail.body?.includes("Spring Boot 백엔드 전체와 React 프론트엔드 전체를 직접 구현한 것으로 표현하지 않습니다."))).toBe(true);
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

  it("uses verified project periods and leaves unknown periods unspecified", () => {
    expect(fullstackProjects.map((project) => project.meta?.period)).toEqual([
      "기간 미기재",
      "2026.05–2026.07",
      "2026",
      "기간 미기재",
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
    expect(screen.getByText(/React와 TypeScript 기반 사용자 화면부터 Spring Boot·Cloudflare 기반 API/)).toBeInTheDocument();
    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(3);
    expect(screen.getByText(/Spring Boot 백엔드와 React 프론트엔드 전체가 아닌/)).toBeInTheDocument();
    expect(screen.getByText("2026.05 - 2026.07")).toBeInTheDocument();
  });

  it("ships the matching full-stack developer resume document", () => {
    const resume = readText("docs/resume-fullstack-developer.md");
    expect(resume).toContain("Full-Stack Developer 이력서");
    expect(resume).toContain("직접 구현");
    expect(resume).toContain("연동 기여");
    expect(resume.indexOf("마음이음")).toBeLessThan(resume.indexOf("스마트 안전 관제"));
    expect(resume.indexOf("스마트 안전 관제")).toBeLessThan(resume.indexOf("LLM Wiki·RAG"));
    expect(resume).toContain("건양대학교 의공학과 학사, 2026.02 졸업");
    expect(resume).toContain("SK쉴더스 지능형 애플리케이션 개발 부트캠프 5기, 2026.05–2026.07");
  });
});

import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
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
  });

  it("ships the matching full-stack developer resume document", () => {
    const resume = readText("docs/resume-fullstack-developer.md");
    expect(resume).toContain("Full-Stack Developer 이력서");
    expect(resume).toContain("직접 구현");
    expect(resume).toContain("연동 기여");
    expect(resume.indexOf("마음이음")).toBeLessThan(resume.indexOf("스마트 안전 관제"));
    expect(resume.indexOf("스마트 안전 관제")).toBeLessThan(resume.indexOf("LLM Wiki·RAG"));
  });
});

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
      "AI 이벤트 수신부터 사고 검색까지 연결한 실시간 안전 관제 플랫폼",
      "개인정보 최소 수집형 자가체크 및 결과 리포트 웹서비스",
      "LLM Wiki · Hybrid Search 지식 시스템",
    ]);
    expect(fullstackProjects).toHaveLength(3);
    expect(fullstackProjects.some((project) => project.title.includes("포트폴리오 웹사이트"))).toBe(false);
    expect(fullstackProjects.map((project) => project.badge)).toEqual(["Main", "Supporting", "Supporting"]);
    expect(fullstackProjects[0].meta?.period).toBe("2026.05–2026.07");
    expect(fullstackProjects[0].meta?.role).toContain("5인 팀장");
    expect(fullstackProjects[0].description).toContain("비동기로 도착하는 경보와 증거 데이터를 하나의 사고로 유지하고");
    expect(fullstackProjects[1].meta?.period).toBe("약 2주");
    expect(fullstackProjects[1].meta?.role).toContain("1인 개발");
    expect(fullstackProjects[2].description).toContain("61개 Golden Query");
    expect(fullstackProjects[2].description).toContain("실제 Elasticsearch 전체 질의 실측은 후속 검증");
    expect(JSON.stringify(fullstackProjects)).not.toContain("직접 구현한 것으로 표현하지 않습니다");

    render(<ProjectsSection items={fullstackProjects} grouped={false} />);
    const headings = screen.getAllByRole("heading", { level: 3 }).map((heading) => heading.textContent);
    expect(headings).toEqual(fullstackProjects.map((project) => project.title));
  });

  it("places projects immediately after the hero and exposes the submission positioning", () => {
    const indexSource = readText("src/pages/Index.tsx");
    const heroSource = readText("src/components/HeroSection.tsx");

    expect(indexSource.indexOf("<ProjectsSection")).toBeLessThan(indexSource.indexOf("<AboutSection"));
    expect(heroSource).toContain("FM·안전관리 플랫폼 연계 · 융합보안 · 지능형 영상관제");
    expect(heroSource).toContain("showLocalPortfolioSwitcher = !import.meta.env.PROD");
    expect(heroSource).toContain("대표 프로젝트 보기");
    expect(heroSource).toContain("시연 영상");
  });

  it("switches About copy without changing the AI variant", () => {
    const { rerender } = render(<AboutSection variant="fullstack" />);
    expect(screen.getByText("기능의 앞뒤 흐름까지 책임지는 개발자")).toBeInTheDocument();
    expect(screen.getByText("Full-Stack Developer")).toBeInTheDocument();
    expect(screen.getByText("흐름으로 설계")).toBeInTheDocument();
    expect(screen.queryByText("문제를 수치로 좁히고 관제 흐름까지 검증하는 개발자")).not.toBeInTheDocument();

    rerender(<AboutSection variant="ai" />);
    expect(screen.getByText("문제를 수치로 좁히고 관제 흐름까지 검증하는 개발자")).toBeInTheDocument();
    expect(screen.getByText("융합보안·AI 안전관제 플랫폼")).toBeInTheDocument();
    expect(screen.getByText("구간을 나눠 측정")).toBeInTheDocument();
  });

  it("marks the AI role active on the root variant", () => {
    render(<MemoryRouter initialEntries={["/"]}><Header variant="ai" /></MemoryRouter>);
    expect(screen.getByRole("link", { name: "융합보안·AI 관제" })).toHaveClass("bg-primary");
    expect(screen.getByRole("link", { name: "Full-Stack Developer" })).not.toHaveClass("bg-primary");
  });

  it("uses the stated project periods", () => {
    expect(fullstackProjects.map((project) => project.meta?.period)).toEqual([
      "2026.05–2026.07",
      "약 2주",
      "2026",
    ]);
  });

  it("uses clean browser routes and mode-based root rendering", () => {
    const appSource = readText("src/App.tsx");
    for (const route of ['path="/"', 'path="/ai"', 'path="/fullstack"', 'path="/print"', 'path="/print/fullstack"']) {
      expect(appSource).toContain(route);
    }
    expect(appSource).toContain("BrowserRouter");
    expect(appSource).toContain('import.meta.env.MODE === "fullstack"');
    expect(appSource).not.toContain("HashRouter");
  });

  it("renders the A4 full-stack resume with exactly two print pages and exact project sequence", () => {
    const { container } = render(
      <MemoryRouter>
        <FullstackPortfolioPrint />
      </MemoryRouter>
    );

    // 1. Full-Stack 인쇄 페이지가 정확히 2개의 print-page를 렌더링
    const printPages = container.querySelectorAll(".print-page");
    expect(printPages).toHaveLength(2);

    // 2. 지원 직무 문구가 Full-Stack Developer 방향인지
    expect(
      screen.getByText("AI 이벤트를 실제 서비스 흐름으로 연결해 온 풀스택 개발자")
    ).toBeInTheDocument();

    // 3 & 4 & 5. 스마트 안전 관제가 1번째, 마음이음이 2번째, LLM Wiki가 3번째(Supporting Project)인지
    const projectHeadings = Array.from(
      printPages[1].querySelectorAll("h3")
    ).map((h) => h.textContent);
    expect(projectHeadings[0]).toContain("1. 스마트 안전 관제");
    expect(projectHeadings[1]).toContain("2. 마음이음");
    expect(projectHeadings[2]).toContain("3. LLM Wiki·RAG");
    expect(screen.getByText("Supporting Project")).toBeInTheDocument();

    // 6. 마음이음에 약 2주 · 개인 프로젝트 · 1인 개발 포함
    expect(
      screen.getByText("약 2주 · 개인 프로젝트 · 1인 개발")
    ).toBeInTheDocument();

    // 7. 스마트 안전 관제에 29건, 20.931ms, p95 26ms 포함
    const printText = container.textContent ?? "";
    expect(printText).toContain("29건");
    expect(printText).toContain("20.931ms");
    expect(printText).toContain("p95 26ms");

    // 8. originalEventId와 Incident가 포함되는지
    expect(printText).toContain("originalEventId");
    expect(printText).toContain("Incident");
    expect(printText).toContain("Hit@5 82.14%");
    expect(printText).toContain("후속 검증");

    // 9. 전체 백엔드와 프론트엔드를 단독 구현하지 않았다는 역할 경계 포함
    expect(printText).toContain(
      "전체 백엔드와 프론트엔드를 단독 구현한 것이 아니라"
    );

    // 10. AI 전용 F1·ID Switch·TensorRT 모델 성과가 Full-Stack 상단 핵심 성과로 사용되지 않는지
    // Page 1 Header/Core Skills should not have F1-score or TensorRT model claims
    const page1Text = printPages[0].textContent ?? "";
    expect(page1Text).not.toContain("F1-score");
    expect(page1Text).not.toContain("ID Switch");
    expect(page1Text).not.toContain("TensorRT 적용으로");

    // 11. AI PortfolioPrint.tsx가 변경되지 않았는지
    const aiPortfolioPrintSrc = readText("src/pages/PortfolioPrint.tsx");
    expect(aiPortfolioPrintSrc).toContain(
      "영상 속 위험을 1초 안에 관제 알림으로 연결한 컴퓨터비전 엔지니어"
    );
    expect(aiPortfolioPrintSrc).toContain("Computer Vision");
  });

  it("ships the matching full-stack developer resume document", () => {
    const resume = readText("docs/resume-fullstack-developer.md");
    expect(resume).toContain("Full-Stack Developer 이력서");
    expect(resume).toContain("직접 구현");
    expect(resume).toContain("MQTT 메시지를 발행");
    expect(resume.indexOf("### 스마트 안전 관제")).toBeLessThan(resume.indexOf("### 마음이음"));
    expect(resume.indexOf("### 마음이음")).toBeLessThan(resume.indexOf("### LLM Wiki·RAG"));
    expect(resume).toContain("약 2주 · 개인 프로젝트 · 1인 개발");
    expect(resume).toContain("Legacy Hybrid Hit@5 82.14%");
    expect(resume).toContain("실제 Elasticsearch 전체 질의 실측은 후속 검증");
    expect(resume).not.toContain("직접 구현한 것으로 표현하지 않습니다");
    expect(resume).toContain("건양대학교 의공학과 학사, 2026.02 졸업");
    expect(resume).toContain("SK쉴더스 지능형 애플리케이션 개발 부트캠프 5기, 2026.05–2026.07");
  });

  it("connects smart safety project visual assets correctly for both AI and Full-Stack pages", () => {
    const aiSmartSafety = projects.find((p) => p.title.includes("실시간 이상행동 탐지"));
    const fullstackSmartSafety = fullstackProjects.find((p) => p.title.includes("AI 이벤트 수신부터 사고 검색"));

    expect(aiSmartSafety?.heroImage?.src).toBe("/images/smart-safety/ai-pipeline.jpg");
    expect(fullstackSmartSafety?.heroImage?.src).toBe("/images/smart-safety/dashboard-and-search.jpg");

    const aiImageSources = aiSmartSafety?.details.flatMap((d) => d.images?.map((i) => i.src) ?? []) ?? [];
    const fullstackImageSources = fullstackSmartSafety?.details.flatMap((d) => d.images?.map((i) => i.src) ?? []) ?? [];

    expect(aiImageSources).not.toContain("/images/smart-safety/model-performance.jpg");
    expect(aiImageSources).not.toContain("/images/smart-safety/inference-optimization.jpg");
    expect(fullstackImageSources).toContain("/images/smart-safety/incident-merge-before-after.svg");
    expect(fullstackImageSources).toContain("/images/smart-safety/vlm-pipeline.jpg");

    [...aiImageSources, ...fullstackImageSources].forEach((src) => {
      expect(src).toMatch(/^\/images\/smart-safety\//);
    });
  });

  it("supports demoUrl, githubUrl, lazy loading, and whitespace-pre-line in smart safety project views", () => {
    const aiSmartSafety = projects.find((p) => p.title.includes("실시간 이상행동 탐지"));
    const fullstackSmartSafety = fullstackProjects.find((p) => p.title.includes("AI 이벤트 수신부터 사고 검색"));

    expect(aiSmartSafety?.githubUrl).toBe("https://github.com/strangeRookies/ai");
    expect(aiSmartSafety?.demoUrl).toBe("https://www.youtube.com/watch?v=O1-JNhcpvDQ");
    expect(fullstackSmartSafety?.githubUrl).toBe("https://github.com/strangeRookies");
    expect(fullstackSmartSafety?.demoUrl).toBe("https://www.youtube.com/watch?v=O1-JNhcpvDQ");

    const projectsSectionSrc = readText("src/components/ProjectsSection.tsx");
    expect(projectsSectionSrc).toContain("시연 영상 보기");
    expect(projectsSectionSrc).toContain('loading="lazy"');
    expect(projectsSectionSrc).toContain('decoding="async"');
    expect(projectsSectionSrc).toContain("whitespace-pre-line");
    expect(projectsSectionSrc).toContain("object-contain");
  });

  it("does not include removed Canva presentation images in AI or Full-Stack projects", () => {
    // Canva images removed from AI project
    expect(JSON.stringify(projects)).not.toContain(
      "/images/smart-safety/canva/problem-cctv-workload.png"
    );
    expect(JSON.stringify(projects)).not.toContain(
      "/images/smart-safety/canva/problem-fall-risk.png"
    );
    expect(JSON.stringify(projects)).not.toContain(
      "/images/smart-safety/canva/backpressure-before-after.png"
    );
    // Canva images removed from Full-Stack project
    expect(JSON.stringify(fullstackProjects)).not.toContain(
      "/images/smart-safety/canva/service-definition.png"
    );
    expect(JSON.stringify(fullstackProjects)).not.toContain(
      "/images/smart-safety/canva/target-users.png"
    );
    expect(JSON.stringify(projects)).not.toContain(
      "final-system-evaluation"
    );
    expect(JSON.stringify(fullstackProjects)).not.toContain(
      "scalability-roadmap"
    );

    // Unverified terms removed per 03-smart-safety-fullstack.md spec
    const fullstackJson = JSON.stringify(fullstackProjects);
    expect(fullstackJson).not.toContain("기존 HTTP 동기 요청 구조");
    expect(fullstackJson).not.toContain("브라우저 폴링 간격");
    expect(fullstackJson).not.toContain("네트워크 지연 시 경보 누락");
    expect(fullstackJson).not.toContain("동일 사고 카드 3~4건");
    expect(fullstackJson).not.toContain("사고 중복 생성률 0%");
    expect(fullstackJson).not.toContain("수 초~수십 초");
    expect(fullstackJson).not.toContain("서비스 수준 합약");
  });

  it("includes a substantive '판단과 배운 점' section in all projects", () => {
    for (const project of projects) {
      const reflection = project.details.find(
        (detail) => detail.title === "판단과 배운 점"
      );

      expect(reflection).toBeDefined();
      expect(reflection?.items?.length).toBeGreaterThanOrEqual(2);
    }

    for (const project of fullstackProjects) {
      const reflection = project.details.find(
        (detail) => detail.title === "판단과 배운 점"
      );

      expect(reflection).toBeDefined();
      expect(reflection?.items?.length).toBeGreaterThanOrEqual(2);
    }
  });

  it("unifies AI portfolio section structure across all 4 AI projects", () => {
    expect(projects).toHaveLength(4);

    for (const project of projects) {
      const reflection = project.details.find(
        (detail) => detail.title === "판단과 배운 점"
      );

      const capabilities = project.details.find(
        (detail) => detail.title === "핵심 기술 역량"
      );

      expect(reflection).toBeDefined();
      expect(reflection?.items?.length).toBeGreaterThanOrEqual(2);
      expect(capabilities).toBeDefined();

      expect(project.details.indexOf(reflection!)).toBeLessThan(
        project.details.indexOf(capabilities!)
      );
    }

    const smartSafety = projects.find(
      (project) =>
        project.title === "실시간 이상행동 탐지 및 안전 관제 AI 시스템"
    );

    expect(smartSafety).toBeDefined();

    expect(smartSafety?.details.map((detail) => detail.title)).toEqual([
      "문제 정의와 목표",
      "AI 시스템 구조",
      "낙상 순간 끊기는 Tracking ID의 원인을 추적했습니다",
      "자세 좌표만으로 부족했던 낙상 전이를 특징으로 추가했습니다",
      "최신 프레임 정책과 TensorRT로 실시간성을 확보했습니다",
      "운영 안정화와 검증 범위",
      "담당 범위와 협업",
      "판단과 배운 점",
      "핵심 기술 역량",
    ]);

    const titles = smartSafety?.details.map((detail) => detail.title) ?? [];

    expect(titles).not.toContain("프로젝트 개요");
    expect(titles).not.toContain("담당 역할");
    expect(titles).not.toContain("기술 스택");
    expect(titles).not.toContain("이벤트 후처리 및 운영 관찰");

    const reflection = smartSafety?.details.find(
      (detail) => detail.title === "판단과 배운 점"
    );

    expect(reflection?.items).toHaveLength(2);

    const aiProblemTitles = [
      "낙상 순간 끊기는 Tracking ID의 원인을 추적했습니다",
      "자세 좌표만으로 부족했던 낙상 전이를 특징으로 추가했습니다",
      "최신 프레임 정책과 TensorRT로 실시간성을 확보했습니다",
    ];

    const expectedLabels = [
      "측정 현상",
      "원인 분석",
      "의사결정",
      "구현",
      "결과",
      "배운 점",
    ];

    for (const title of aiProblemTitles) {
      const detail = smartSafety?.details.find(
        (item) => item.title === title
      );

      expect(detail?.problemSolving?.map((step) => step.label)).toEqual(
        expectedLabels
      );
    }

    const projectJson = JSON.stringify(smartSafety);

    expect(projectJson).not.toContain("약 19.7%");
    expect(smartSafety?.heroImage?.src).toBe(
      "/images/smart-safety/ai-pipeline.jpg"
    );

    const systemStructure = smartSafety?.details.find(
      (detail) => detail.title === "AI 시스템 구조"
    );

    expect(systemStructure?.body).toContain("Recall·F1과 시퀀스 생성 안정성");

    // Canva images replaced by Mermaid diagrams — not present in AI project
    expect(projectJson).not.toContain("/images/smart-safety/canva/problem-cctv-workload.png");
    expect(projectJson).not.toContain("/images/smart-safety/canva/backpressure-before-after.png");
    // Images replaced by Mermaid diagrams & clean tables — not present in AI project
    expect(projectJson).not.toContain("/images/smart-safety/model-performance.jpg");
    expect(projectJson).not.toContain("/images/smart-safety/inference-optimization.jpg");
  });

  it("validates fullstack smart safety project details and problem solving structure", () => {
    const fullstackSmartSafety = fullstackProjects.find(
      (project) =>
        project.title ===
        "AI 이벤트 수신부터 사고 검색까지 연결한 실시간 안전 관제 플랫폼"
    );

    expect(fullstackSmartSafety?.details.map((detail) => detail.title)).toEqual([
      "문제 정의와 서비스 목표",
      "End-to-End 서비스 구조",
      "AI 이벤트가 관제 화면까지 도달하는 시간을 측정했습니다",
      "화면의 중복이 아니라 사고 식별 구조를 수정했습니다",
      "경보 이후의 증거 확인 흐름",
      "실시간 알림과 VLM 분석을 서로 다른 처리 경로로 분리했습니다",
      "운영 안정성과 검증 범위",
      "담당 범위와 협업",
      "판단과 배운 점",
      "핵심 기술 역량",
    ]);

    const problemTitles = [
      "AI 이벤트가 관제 화면까지 도달하는 시간을 측정했습니다",
      "화면의 중복이 아니라 사고 식별 구조를 수정했습니다",
      "실시간 알림과 VLM 분석을 서로 다른 처리 경로로 분리했습니다",
    ];

    const expectedLabels = [
      "측정 현상",
      "원인 분석",
      "의사결정",
      "구현",
      "결과",
      "배운 점",
    ];

    for (const title of problemTitles) {
      const detail = fullstackSmartSafety?.details.find(
        (item) => item.title === title
      );

      expect(detail?.problemSolving?.map((step) => step.label)).toEqual(
        expectedLabels
      );
    }

    const collaboration = fullstackSmartSafety?.details.find(
      (detail) => detail.title === "담당 범위와 협업"
    );

    expect(collaboration?.groups).toHaveLength(2);
    expect(collaboration?.groups?.[0].title).toBe("직접 구현·검증");
    expect(collaboration?.groups?.[1].title).toBe("협업·통합");
  });
});

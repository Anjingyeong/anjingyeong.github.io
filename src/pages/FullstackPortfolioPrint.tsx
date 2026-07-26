import { Link } from "react-router-dom";
import { Mail, Github, Globe } from "lucide-react";
import "@/styles/print.css";

export interface FullstackPrintProject {
  id: string;
  title: string;
  subtitle?: string;
  category?: string;
  periodRole: string;
  stack: string;
  problem: string;
  decision: string;
  process: string;
  role: string;
  result: string;
  link?: string;
}

export const fullstackPrintProjects: FullstackPrintProject[] = [
  {
    id: "maumium",
    title: "1. 마음이음 · 개인정보 최소 수집형 자가체크 웹서비스",
    periodRole: "약 2주 · 개인 프로젝트 · 1인 개발",
    stack: "React · TypeScript · Vite · Cloudflare Pages · Workers · D1",
    problem:
      "개인정보 부담을 줄이면서 사용자가 모바일에서 자가체크를 완료하고 결과와 다음 행동을 확인할 수 있는 서비스가 필요했습니다.",
    decision:
      "짧은 기간 안에 운영 가능한 서비스를 완성하기 위해 React·TypeScript로 화면과 위험도 로직을 분리하고, 별도 서버 관리가 필요 없는 Cloudflare Pages·Workers·D1 조합을 선택했습니다.",
    process:
      "사용자 흐름과 최소 수집 항목을 먼저 정의한 뒤 모바일 화면과 저장 API를 연결했습니다. 공통 위험도 기준을 결과 화면과 관리자 통계에서 함께 사용하고, 동일한 결과 데이터를 해석 리포트와 PDF에도 연결했습니다. 마지막에는 동의 문구·SEO·배포 환경까지 점검했습니다.",
    role: "기획, 모바일 우선 UI, 위험도 계산, Workers API, D1 저장, 관리자 통계, PDF 리포트와 운영 배포까지 전체 라이프사이클을 직접 구현했습니다.",
    result:
      "사용자 체크부터 결과 저장, 관리자 통계와 PDF 리포트까지 이어지는 1인 웹서비스를 실제 배포 환경에 완성했습니다.",
    link: "https://maumium.pages.dev/",
  },
  {
    id: "smart-safety",
    title: "2. 스마트 안전 관제 · 실시간 이벤트 및 Incident 플랫폼",
    periodRole: "2026.05 – 2026.07 · 5인 팀장",
    stack:
      "Java 21 · Spring Boot · JPA · PostgreSQL · MQTT · WebSocket / STOMP · React · AWS S3",
    problem:
      "AI 위험 이벤트와 이후 도착하는 스냅샷·사고 클립·VLM 설명을 하나의 사고로 유지하고 관제 화면에 빠르게 전달해야 했습니다.",
    decision:
      "영상 추론과 서비스 처리를 분리하기 위해 MQTT를 이벤트 계약으로 사용하고, Spring Boot에서 저장·병합한 뒤 WebSocket / STOMP로 관제 화면에 전달했습니다. PostgreSQL은 Incident 정합성, S3는 증거 자산 보관에 사용했습니다.",
    process:
      "이벤트 스키마와 originalEventId를 먼저 합의하고, 수신→DB 저장→Incident 병합→실시간 브로드캐스트→VLM 후처리 순서로 통합했습니다. 각 단계의 완료 기준과 로그를 맞춘 뒤 2카메라 환경에서 End-to-End 지연을 측정했습니다.",
    role: "AI 이벤트 계약, originalEventId 기반 Incident 정합성, VLM 비동기 작업 흐름과 파트 간 통합 검증을 담당했습니다. 전체 백엔드와 프론트엔드를 단독 구현한 것이 아니라 각 담당자와 데이터 계약과 완료 기준을 맞췄습니다.",
    result:
      "2카메라 TensorRT 환경에서 위험 이벤트 29건의 End-to-End 평균 지연 20.931ms, p95 26ms를 확인했으며 29건 모두 1초 이내에 전달됐습니다. originalEventId를 기준으로 경보·스냅샷·클립·VLM 설명을 하나의 Incident에 병합했습니다.",
  },
  {
    id: "llm-wiki",
    title: "3. LLM Wiki·RAG · 프로젝트 지식 검색 시스템",
    category: "Supporting Project",
    periodRole: "Supporting Project · 개인 개발",
    stack:
      "TypeScript · Cloudflare Pages Functions · BM25 · Vector Search · RRF · JSON Index",
    problem:
      "프로젝트 문서와 사고 기록이 여러 파일에 흩어져 필요한 근거와 구현 내용을 빠르게 찾기 어려웠습니다.",
    decision:
      "운영 비용과 배포 복잡도를 낮추기 위해 문서를 JSON 인덱스로 정적화하고, 정확한 키워드 검색을 위한 BM25와 의미 검색을 위한 Vector Search를 RRF로 결합했습니다.",
    process:
      "문서 구조를 수집·정규화한 뒤 청크와 출처 메타데이터를 생성하고, BM25와 벡터 검색 결과를 각각 계산해 RRF로 재정렬했습니다. 이후 인증 API와 답변 근거 표시까지 연결했습니다.",
    role: "문서를 정적 JSON 인덱스로 변환하고 BM25와 Vector Search 결과를 RRF로 결합했습니다. 인증 API와 문서 출처·섹션 정보를 포함하는 검색 구조를 구현했습니다.",
    result:
      "프로젝트 지식을 검색 가능한 정적 구조로 정리하고, 코드·테스트·문서 관계를 2,057개 노드와 2,803개 관계로 구조화했습니다. 명시 관계와 AI 추론 관계를 분리해 근거를 다시 확인할 수 있게 했습니다.",
  },
];

const FullstackPortfolioPrint = () => {
  return (
    <div className="print-body">
      {/* Print Control Toolbar */}
      <div className="print-btn-container mx-auto px-4">
        <Link
          to="/fullstack"
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-semibold border border-slate-200 transition-colors"
        >
          ← 풀스택 포트폴리오로
        </Link>
        <button
          onClick={() => window.print()}
          className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg text-sm font-semibold shadow-sm transition-colors"
        >
          PDF로 인쇄 / 저장 (Ctrl + P)
        </button>
      </div>

      {/* ── PAGE 1: Full-Stack Developer Resume ── */}
      <div className="print-page">
        {/* Header */}
        <div className="print-header">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                안진경 <span className="text-slate-400 font-normal">| An Jin Gyeong</span>
              </h1>
              <p className="text-sky-600 font-semibold text-sm mt-1 uppercase tracking-wide">
                AI 이벤트를 실제 서비스 흐름으로 연결해 온 풀스택 개발자
              </p>
            </div>
            <div className="text-right space-y-1">
              <div className="flex items-center justify-end gap-1.5 text-xs">
                <Mail size={12} className="text-sky-600" />
                <a href="mailto:anjin0910@gmail.com">anjin0910@gmail.com</a>
              </div>
              <div className="flex items-center justify-end gap-1.5 text-xs">
                <Globe size={12} className="text-sky-600" />
                <a
                  href="https://anjingyeong.github.io/#/fullstack"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  anjingyeong.github.io/#/fullstack
                </a>
              </div>
              <div className="flex items-center justify-end gap-1.5 text-xs">
                <Github size={12} className="text-sky-600" />
                <a
                  href="https://github.com/Anjingyeong"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/Anjingyeong
                </a>
              </div>
            </div>
          </div>
          <div className="mt-3 pt-2.5 border-t border-slate-100 flex flex-wrap gap-2 text-xs font-semibold text-slate-500">
            <span>Java 21</span> &middot;
            <span>Spring Boot</span> &middot;
            <span>React</span> &middot;
            <span>TypeScript</span> &middot;
            <span>PostgreSQL</span>
          </div>
        </div>

        {/* Profile Summary */}
        <div className="print-section">
          <h2 className="print-section-title">Profile Summary</h2>
          <p className="text-[8.5pt] text-slate-700 leading-relaxed">
            사용자의 입력과 AI 이벤트가 화면, API, 데이터 저장과 결과까지 끊기지 않도록 만드는 풀스택 개발자입니다. 1인 웹서비스를 기획부터 배포까지 완성하고, 팀 프로젝트에서는 MQTT·Spring Boot·WebSocket을 연결하며 비동기 데이터의 식별자와 완료 기준을 맞췄습니다.
          </p>
        </div>

        {/* Core Skills */}
        <div className="print-section">
          <h2 className="print-section-title">Core Skills</h2>
          <div className="space-y-1 text-[8.5pt] leading-relaxed text-slate-700">
            <p>
              <strong>Backend &amp; API:</strong> Java 21, Spring Boot, Spring Data JPA, Cloudflare Workers
            </p>
            <p>
              <strong>Frontend:</strong> React, TypeScript, Tailwind CSS, Vite
            </p>
            <p>
              <strong>Data &amp; Search:</strong> PostgreSQL, pgvector, Cloudflare D1
            </p>
            <p>
              <strong>Realtime &amp; Deployment:</strong> MQTT, WebSocket / STOMP, AWS S3, Docker / Cloudflare Pages
            </p>
          </div>
        </div>

        {/* Experience */}
        <div className="print-section">
          <h2 className="print-section-title">Experience</h2>
          <div className="flex justify-between items-baseline mb-0.5">
            <h3 className="text-xs font-bold text-slate-800">
              SK쉴더스 지능형 애플리케이션 개발 과정
            </h3>
            <span className="text-xs text-slate-500 font-mono">2026.05 – 2026.07</span>
          </div>
          <p className="text-[7.8pt] text-sky-600 font-semibold mb-1">SK쉴더스 / 교육 이수 중</p>
          <p className="text-[8pt] text-slate-700 leading-relaxed">
            AI 기반 실시간 영상 분석, 백엔드 이벤트 처리와 클라우드 인프라 연동 중심의 시스템 설계 및 프로젝트 수행
          </p>
        </div>

        {/* Education */}
        <div className="print-section">
          <h2 className="print-section-title">Education</h2>
          <div className="flex justify-between items-baseline">
            <h3 className="text-xs font-bold text-slate-800">건양대학교 의공학과 공학사</h3>
            <span className="text-xs text-slate-500 font-mono">2020.03 – 2026.02</span>
          </div>
        </div>

        {/* Awards & Certifications */}
        <div className="print-section">
          <h2 className="print-section-title">Awards &amp; Certifications</h2>
          <div className="print-grid-2">
            <div>
              <h4 className="text-xs font-bold text-slate-800 mb-1">Awards (수상 내역)</h4>
              <ul className="print-bullet-list">
                <li>2025 성균관대학교 컨소시엄 창의적 종합설계 경진대회 동상</li>
                <li>2025 캡스톤디자인 경진대회 금상</li>
                <li>2024 창의혁신 DNA 산학협력 공학혁신상</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-800 mb-1">Certifications (역량 인증)</h4>
              <ul className="print-bullet-list">
                <li>우수 소프트웨어 활용역량</li>
                <li>의공학 전문 실무역량</li>
                <li>정보처리기사 필기 합격 · 실기 준비 중</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Page 1 Footer */}
        <div className="text-[7pt] text-slate-400 font-mono mt-auto pt-3 border-t border-slate-100 flex justify-between">
          <span>안진경 풀스택 개발자 이력서</span>
          <span>1 / 2 페이지</span>
        </div>
      </div>

      {/* ── PAGE 2: Representative Project Portfolio ── */}
      <div className="print-page">
        <div className="print-section">
          <h2 className="print-section-title">PROJECT PORTFOLIO</h2>
        </div>

        <div className="space-y-4">
          {fullstackPrintProjects.map((project) => (
            <div key={project.id} className="print-section">
              <div className="flex justify-between items-baseline mb-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-slate-800">{project.title}</h3>
                  {project.category && (
                    <span className="text-[7pt] px-1.5 py-0.5 bg-slate-100 text-slate-600 rounded font-semibold border border-slate-200">
                      {project.category}
                    </span>
                  )}
                </div>
                <span className="text-xs text-slate-500 font-mono">{project.periodRole}</span>
              </div>
              <p className="text-[7.5pt] text-sky-600 font-semibold mb-2">{project.stack}</p>

              <div className="print-grid-2 gap-x-5 gap-y-2">
                <div>
                  <h4 className="text-[7.5pt] font-bold text-sky-600 mb-0.5">Why / Problem</h4>
                  <p className="text-[7.5pt] text-slate-700 leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <h4 className="text-[7.5pt] font-bold text-sky-600 mb-0.5">Why This Stack</h4>
                  <p className="text-[7.5pt] text-slate-700 leading-relaxed">{project.decision}</p>
                </div>
                <div>
                  <h4 className="text-[7.5pt] font-bold text-sky-600 mb-0.5">Development Process</h4>
                  <p className="text-[7.5pt] text-slate-700 leading-relaxed">{project.process}</p>
                </div>
                <div>
                  <h4 className="text-[7.5pt] font-bold text-sky-600 mb-0.5">Contribution / Outcome</h4>
                  <p className="text-[7.5pt] text-slate-700 leading-relaxed">{project.role}</p>
                  <p className="mt-0.5 text-[7.5pt] text-slate-700 leading-relaxed"><strong>결과:</strong> {project.result}</p>
                </div>
              </div>

              {project.link && (
                <div className="mt-1.5 text-[7pt] text-slate-500 font-mono">
                  서비스 링크:{" "}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 hover:underline"
                  >
                    {project.link}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Page 2 Footer */}
        <div className="text-[7pt] text-slate-400 font-mono mt-auto pt-3 border-t border-slate-100 flex justify-between">
          <div className="flex gap-4">
            <span>
              Portfolio:{" "}
              <a
                href="https://anjingyeong.github.io/#/fullstack"
                target="_blank"
                rel="noopener noreferrer"
              >
                anjingyeong.github.io/#/fullstack
              </a>
            </span>
            <span>
              GitHub:{" "}
              <a
                href="https://github.com/Anjingyeong"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/Anjingyeong
              </a>
            </span>
          </div>
          <span>2 / 2 페이지</span>
        </div>
      </div>
    </div>
  );
};

export default FullstackPortfolioPrint;

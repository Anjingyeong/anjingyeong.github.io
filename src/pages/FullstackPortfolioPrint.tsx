import { Link } from "react-router-dom";
import { Github, Globe, Mail } from "lucide-react";
import "@/styles/print.css";

const projectRows = [
  {
    title: "1. 마음이음 · 개인정보 최소 수집형 자가체크 웹서비스 (https://maumium.pages.dev/)",
    stack: "약 2주 · 개인 프로젝트 · 1인 개발 · React · TypeScript · Vite · Cloudflare Pages · Workers · D1",
    body: "개인적인 문제의식에서 시작해 기획, 설계, 모바일 우선 화면, 위험도 계산 로직, Workers API, D1 저장, 관리자 통계, PDF 리포트와 배포까지 직접 완성했습니다.",
  },
  {
    title: "2. 스마트 안전 관제 · 실시간 이벤트 파이프라인",
    stack: "Python · MQTT · Spring Boot · WebSocket · STOMP · React · Docker · RTSP",
    body: "Python AI Worker의 위험 이벤트 생성과 MQTT 발행을 담당하고, Spring Boot의 이벤트 수신·저장 및 WebSocket·STOMP 관제 알림으로 이어지는 실시간 데이터 흐름을 연동·검증했습니다.",
  },
  {
    title: "3. LLM Wiki·RAG · 프로젝트 지식 검색 시스템",
    stack: "TypeScript · Cloudflare Pages Functions · BM25 · Vector Search · RRF · JSON Index · RAG",
    body: "프로젝트 문서를 정적 JSON 인덱스로 변환하고 BM25와 Vector Search 결과를 RRF로 결합했습니다. 검색 API, 인증 흐름, 문서 출처와 섹션 정보를 포함하는 검색 구조를 구현했습니다.",
  },
] as const;

const FullstackPortfolioPrint = () => (
  <div className="print-body">
    <div className="print-btn-container mx-auto px-4">
      <Link to="/fullstack" className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-semibold border border-slate-200 transition-colors">
        ← 풀스택 포트폴리오로
      </Link>
      <button onClick={() => window.print()} className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg text-sm font-semibold shadow-sm transition-colors">
        PDF로 인쇄 / 저장 (Ctrl + P)
      </button>
    </div>

    <div className="print-page">
      <div className="print-header">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">안진경 <span className="text-slate-400 font-normal">| An Jin Gyeong</span></h1>
            <p className="text-sky-600 font-semibold text-sm mt-1 uppercase tracking-wide">Full-Stack Developer</p>
            <p className="text-[8pt] text-slate-600 mt-1">AI 기능을 실제 서비스 흐름으로 연결해 온 풀스택 개발자</p>
          </div>
          <div className="text-right space-y-1">
            <div className="flex items-center justify-end gap-1.5 text-xs"><Mail size={12} className="text-sky-600" /><a href="mailto:anjin0910@gmail.com">anjin0910@gmail.com</a></div>
            <div className="flex items-center justify-end gap-1.5 text-xs"><Globe size={12} className="text-sky-600" /><a href="https://anjingyeong.github.io/#/fullstack">anjingyeong.github.io/#/fullstack</a></div>
            <div className="flex items-center justify-end gap-1.5 text-xs"><Github size={12} className="text-sky-600" /><a href="https://github.com/Anjingyeong">github.com/Anjingyeong</a></div>
          </div>
        </div>
      </div>

      <section className="print-section">
        <h2 className="print-section-title">Profile Summary</h2>
        <p className="text-[8.5pt] text-slate-700 leading-relaxed">사용자의 입력과 AI 이벤트가 화면, API, 데이터 저장과 결과까지 끊기지 않도록 만드는 풀스택 개발자입니다. 1인 웹서비스를 기획부터 배포까지 완성하고, 팀 프로젝트에서는 MQTT·Spring Boot·WebSocket을 연결하며 비동기 데이터의 식별자와 완료 기준을 맞췄습니다.</p>
      </section>

      <section className="print-section">
        <h2 className="print-section-title">Core Skills</h2>
        <div className="space-y-1 text-[8.5pt] leading-relaxed text-slate-700">
          <p><strong>Backend &amp; API:</strong> Java 21, Spring Boot, Spring Data JPA, Cloudflare Workers, REST API</p>
          <p><strong>Frontend:</strong> React, TypeScript, Tailwind CSS, Vite</p>
          <p><strong>Data &amp; Search:</strong> PostgreSQL, pgvector, Redis, Cloudflare D1, SQL</p>
          <p><strong>Realtime &amp; Deployment:</strong> MQTT, WebSocket, STOMP, AWS S3, Docker, Cloudflare Pages, Git, GitHub</p>
        </div>
      </section>

      <section className="print-section">
        <h2 className="print-section-title">Representative Projects</h2>
        <div className="space-y-4">
          <article>
            <h3 className="text-xs font-bold text-slate-800">1. 마음이음 · 개인정보 최소 수집형 자가체크 웹서비스 (https://maumium.pages.dev/)</h3>
            <p className="text-[7.5pt] text-sky-600 font-semibold my-1">약 2주 · 개인 프로젝트 · 1인 개발 · React · TypeScript · Vite · Cloudflare Pages · Workers · D1</p>
            <p className="text-[8pt] text-slate-700 leading-relaxed">개인적인 문제의식에서 시작해 기획, 설계, 모바일 우선 화면, 위험도 계산 로직, Workers API, D1 저장, 관리자 통계, PDF 리포트와 배포까지 직접 완성했습니다.</p>
          </article>
          <article>
            <h3 className="text-xs font-bold text-slate-800">2. 스마트 안전 관제 · 실시간 이벤트 파이프라인 (5인 팀장)</h3>
            <p className="text-[7.5pt] text-sky-600 font-semibold my-1">2026.05–2026.07 · Python · MQTT · Java 21 · Spring Boot · WebSocket · STOMP · React · Docker</p>
            <p className="text-[8pt] text-slate-700 leading-relaxed">2카메라 TensorRT 환경에서 위험 이벤트 29건의 End-to-End 평균 지연 20.931ms, p95 26ms를 확인했으며 29건 모두 1초 이내에 전달됐습니다. originalEventId를 공통 사고 식별자로 사용해 실시간 경보와 이후 도착한 스냅샷·사고 클립·VLM 설명을 하나의 Incident에 병합했습니다.</p>
          </article>
          <article>
            <h3 className="text-xs font-bold text-slate-800">3. LLM Wiki·RAG · 프로젝트 지식 검색 시스템</h3>
            <p className="text-[7.5pt] text-sky-600 font-semibold my-1">TypeScript · Cloudflare Pages Functions · BM25 · Vector Search · RRF · JSON Index · RAG</p>
            <p className="text-[8pt] text-slate-700 leading-relaxed">프로젝트 문서를 정적 JSON 인덱스로 변환하고 BM25와 Vector Search 결과를 RRF로 결합했습니다. 검색 API, 인증 흐름, 문서 출처와 섹션 정보를 포함하는 검색 구조를 구현했습니다.</p>
          </article>
        </div>
      </section>

      <section className="print-section">
        <h2 className="print-section-title">Education</h2>
        <div className="flex justify-between text-[8pt] text-slate-700"><strong>건양대학교 의공학과 학사</strong><span>2026.02 졸업</span></div>
        <div className="flex justify-between text-[8pt] text-slate-700 mt-2"><strong>SK쉴더스 지능형 애플리케이션 개발 부트캠프 5기</strong><span>2026.05 - 2026.07</span></div>
      </section>

      <section className="print-section">
        <h2 className="print-section-title">Awards</h2>
        <ul className="print-bullet-list">
          <li>공학혁신상 (2024 창의혁신 DNA 산학협력)</li>
          <li>금상 (2025 캡스톤디자인 경진대회)</li>
          <li>동상 (2025 성균관대학교 컨소시엄 창의적 종합설계 경진대회)</li>
        </ul>
      </section>

      <div className="text-[7pt] text-slate-400 font-mono mt-auto pt-3 border-t border-slate-100 flex justify-between"><span>안진경 풀스택 개발자 이력서</span><span>anjingyeong.github.io/#/fullstack</span></div>
    </div>
  </div>
);

export default FullstackPortfolioPrint;

import { Link } from "react-router-dom";
import { Github, Globe, Mail } from "lucide-react";
import "@/styles/print.css";

const projectRows = [
  {
    title: "1. 마음이음 · 개인정보 최소 수집형 자가체크 웹서비스",
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
        <p className="text-[8.5pt] text-slate-700 leading-relaxed">사용자의 한 번의 입력이 화면, API, 데이터와 결과까지 막힘없이 이어지도록 만드는 개발자입니다. 마음이음 웹서비스를 기획부터 배포까지 1인 개발하고, 스마트 안전 관제에서는 AI 이벤트가 MQTT·백엔드·WebSocket을 거쳐 관제 화면에 도달하는 실시간 흐름을 연결했습니다. 화면과 서버를 따로 구현하기보다, 데이터가 이동하는 과정과 예외 상황을 함께 살피며 서비스를 완성합니다. 특정 기술에 갇히기보다 요구사항에 필요한 구조를 빠르게 파악하고, 아이디어를 실제로 작동하는 제품으로 바꿀 수 있는 사람입니다.</p>
      </section>

      <section className="print-section">
        <h2 className="print-section-title">Core Skills</h2>
        <div className="space-y-1 text-[8.5pt] leading-relaxed text-slate-700">
          <p><strong>Backend & Database:</strong> Spring Boot, Spring Data JPA, Node.js, REST API, WebSocket, STOMP, MySQL, SQL, Cloudflare Workers, D1</p>
          <p><strong>Frontend:</strong> React, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, Vite</p>
          <p><strong>Integration & Deployment:</strong> MQTT, Docker, Git, GitHub, GitHub Pages, Cloudflare Pages</p>
          <p><strong>AI & Data:</strong> Python, PyTorch, OpenCV, Computer Vision, RAG, Vector Search</p>
        </div>
      </section>

      <section className="print-section">
        <h2 className="print-section-title">Representative Projects</h2>
        <div className="space-y-4">
          {projectRows.map((project) => (
            <article key={project.title}>
              <h3 className="text-xs font-bold text-slate-800">{project.title}</h3>
              <p className="text-[7.5pt] text-sky-600 font-semibold my-1">{project.stack}</p>
              <p className="text-[8pt] text-slate-700 leading-relaxed">{project.body}</p>
            </article>
          ))}
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

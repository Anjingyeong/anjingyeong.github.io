import { Link } from "react-router-dom";
import { Mail, Github, Globe } from "lucide-react";
import "@/styles/print.css";

const PortfolioPrint = () => {
  return (
    <div className="print-body">
      {/* Print Control Toolbar */}
      <div className="print-btn-container mx-auto px-4">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-semibold border border-slate-200 transition-colors"
        >
          ← 포트폴리오 메인으로
        </Link>
        <button
          onClick={() => window.print()}
          className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg text-sm font-semibold shadow-sm transition-colors"
        >
          PDF로 인쇄 / 저장 (Ctrl + P)
        </button>
      </div>

      {/* ── PAGE 1: Resume Summary ── */}
      <div className="print-page">
        {/* Header */}
        <div className="print-header">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                안진경 <span className="text-slate-400 font-normal">| An Jin Gyeong</span>
              </h1>
              <p className="text-sky-600 font-semibold text-sm mt-1 uppercase tracking-wide">
                Full-Stack &amp; AI Application Developer
              </p>
            </div>
            <div className="text-right space-y-1">
              <div className="flex items-center justify-end gap-1.5 text-xs">
                <Mail size={12} className="text-sky-600" />
                <a href="mailto:anjin0910@gmail.com">anjin0910@gmail.com</a>
              </div>
              <div className="flex items-center justify-end gap-1.5 text-xs">
                <Globe size={12} className="text-sky-600" />
                <a href="https://anjingyeong.github.io" target="_blank" rel="noopener noreferrer">
                  anjingyeong.github.io
                </a>
              </div>
              <div className="flex items-center justify-end gap-1.5 text-xs">
                <Github size={12} className="text-sky-600" />
                <a href="https://github.com/Anjingyeong" target="_blank" rel="noopener noreferrer">
                  github.com/Anjingyeong
                </a>
              </div>
            </div>
          </div>
          <div className="mt-3 pt-2.5 border-t border-slate-100 flex flex-wrap gap-2 text-xs font-semibold text-slate-500">
            <span>React</span> &middot;
            <span>Spring Boot</span> &middot;
            <span>PyTorch</span> &middot;
            <span>Computer Vision</span> &middot;
            <span>Real-Time Monitoring</span>
          </div>
        </div>

        {/* Profile Summary */}
        <div className="print-section">
          <h2 className="print-section-title">Profile Summary</h2>
          <p className="text-[8.5pt] text-slate-700 leading-relaxed">
            의공학 기반의 의료 AI/컴퓨터 비전 개발 경험과 React, Spring Boot 기반 웹 풀스택 역량을 결합해,
            AI 모델이 실제 서비스 화면과 백엔드 이벤트 흐름 안에서 동작하는 구조를 구현하는 개발자를 지향합니다.
            <strong> Train/Val/Test 분할, Dynamic Threshold 후처리, RTSP-MQTT-WebSocket 연동</strong>처럼
            실시간 데이터 흐름과 알림 파이프라인을 안정적으로 연결하는 데 관심이 있습니다.
          </p>
        </div>

        {/* Core Skills */}
        <div className="print-section">
          <h2 className="print-section-title">Core Skills</h2>
          <div className="print-grid-4">
            <div className="print-card">
              <h3 className="text-xs font-bold text-sky-600 mb-1.5 uppercase">Frontend</h3>
              <ul className="print-bullet-list">
                <li>React, TypeScript</li>
                <li>JavaScript, HTML/CSS</li>
                <li>Tailwind CSS</li>
                <li>Streamlit</li>
              </ul>
            </div>
            <div className="print-card">
              <h3 className="text-xs font-bold text-sky-600 mb-1.5 uppercase">Backend</h3>
              <ul className="print-bullet-list">
                <li>Spring Boot</li>
                <li>Spring Data JPA</li>
                <li>REST API</li>
                <li>WebSocket, STOMP</li>
              </ul>
            </div>
            <div className="print-card">
              <h3 className="text-xs font-bold text-sky-600 mb-1.5 uppercase">AI &amp; CV</h3>
              <ul className="print-bullet-list">
                <li>Python, PyTorch</li>
                <li>TensorFlow, VAE</li>
                <li>RF-DETR, OpenCV</li>
                <li>Data Augmentation</li>
              </ul>
            </div>
            <div className="print-card">
              <h3 className="text-xs font-bold text-sky-600 mb-1.5 uppercase">Infra &amp; Data</h3>
              <ul className="print-bullet-list">
                <li>MySQL Database</li>
                <li>MQTT Message Broker</li>
                <li>RTSP Video Stream</li>
                <li>Docker, Git / GitHub</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="print-section">
          <h2 className="print-section-title">Experience</h2>
          <div className="flex justify-between items-baseline mb-0.5">
            <h3 className="text-xs font-bold text-slate-800">
              SK쉴더스 지능형 애플리케이션 개발 부트캠프 5기
            </h3>
            <span className="text-xs text-slate-500 font-mono">2026.05 – 2026.07</span>
          </div>
          <p className="text-[7.8pt] text-sky-600 font-semibold mb-1">SK쉴더스 / AI Application Development Trainee</p>
          <p className="text-[8pt] text-slate-700 leading-relaxed">
            AI 기반 스마트 애플리케이션 설계 및 산학협력 프로젝트를 진행했습니다.
            지능형 시스템 설계, RTSP/MQTT 연계 실시간 관제 시스템 파이프라인 개발, 백엔드와 프론트엔드 연동 경험을 쌓았습니다.
          </p>
        </div>

        {/* Education */}
        <div className="print-section">
          <h2 className="print-section-title">Education</h2>
          <div className="flex justify-between items-baseline">
            <div>
              <h3 className="text-xs font-bold text-slate-800">건양대학교 (Konyang University)</h3>
              <p className="text-[7.8pt] text-slate-500 font-semibold">의공학 학사 (Biomedical Engineering | Bachelor's Degree)</p>
            </div>
            <span className="text-xs text-slate-500 font-mono">2026년 졸업</span>
          </div>
        </div>

        {/* Awards / Certifications */}
        <div className="print-section">
          <h2 className="print-section-title">Awards / Certifications</h2>
          <div className="print-grid-2">
            <div>
              <h4 className="text-xs font-bold text-slate-800 mb-1">Awards (수상 내역)</h4>
              <ul className="print-bullet-list">
                <li>공학혁신상 (2024 창의혁신 DNA 산학협력)</li>
                <li>금상 (2025 캡스톤디자인 경진대회)</li>
                <li>동상 (2025 성균관대학교 컨소시엄 창의적 종합설계 경진대회)</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-800 mb-1">Certifications (역량 인증)</h4>
              <ul className="print-bullet-list">
                <li>의공학 전문 실무역량 (ABEEK 공학인증 우수)</li>
                <li>우수 소프트웨어 활용역량 (건양대학교 의공학심화 인증)</li>
                <li>정보처리기사 필기 합격</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Page 1 Footer */}
        <div className="text-[7pt] text-slate-400 font-mono mt-auto pt-3 border-t border-slate-100 flex justify-between">
          <span>안진경 포트폴리오 (제출용)</span>
          <span>1 / 2 페이지</span>
        </div>
      </div>

      {/* ── PAGE 2: Project Portfolio ── */}
      <div className="print-page">
        <div className="print-section">
          <h2 className="print-section-title">Project Portfolio</h2>
        </div>

        {/* Project 1 */}
        <div className="print-section">
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="text-sm font-bold text-slate-800">
              1. AI 기반 스마트 안전 관제 시스템 (SK쉴더스 5기)
            </h3>
            <span className="text-xs text-slate-500 font-mono">2026.05 – 2026.07</span>
          </div>
          <p className="text-[7.5pt] text-slate-500 font-semibold mb-1.5">
            FastAPI, Docker, MQTT, WebSocket, RTSP, Spring Boot, React, TypeScript
          </p>
          <div className="print-grid-3 gap-x-4">
            <div>
              <h4 className="text-[7.5pt] font-bold text-sky-600 mb-0.5">Problem / Context</h4>
              <p className="text-[7.5pt] text-slate-700 leading-relaxed">
                CCTV 실시간 영상 스트림(RTSP)을 분석하고, 감지 이벤트를 대시보드 알림으로 안정적으로 전달해야 했습니다.
              </p>
            </div>
            <div>
              <h4 className="text-[7.5pt] font-bold text-sky-600 mb-0.5">Role / Contribution</h4>
              <p className="text-[7.5pt] text-slate-700 leading-relaxed">
                RTSP 영상 AI 추론 결과 전송 파이프라인과 MQTT, Spring Boot, WebSocket 기반 알림 흐름을 연결했습니다.
              </p>
            </div>
            <div>
              <h4 className="text-[7.5pt] font-bold text-sky-600 mb-0.5">Result / Outcome</h4>
              <p className="text-[7.5pt] text-slate-700 leading-relaxed">
                고정 cam1~cam4 구조를 cameraLoginId 기반으로 개선하여 동적 카메라 등록 흐름에 대응했습니다. RTSP &rarr; AI 추론 &rarr; MQTT &rarr; Spring Boot &rarr; WebSocket으로 이어지는 이벤트 전달 흐름을 정리하고 연동 검증했습니다.
              </p>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="print-section">
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="text-sm font-bold text-slate-800">
              2. RF-DETR 기반 실시간 대장 내 용종 검출 시스템
            </h3>
            <span className="text-xs text-slate-500 font-mono">2025.03 – 2025.11</span>
          </div>
          <p className="text-[7.5pt] text-slate-500 font-semibold mb-1.5">
            Python, PyTorch, RF-DETR, DINOv2, OpenCV, Kvasir Dataset
          </p>
          <div className="print-grid-3 gap-x-4">
            <div>
              <h4 className="text-[7.5pt] font-bold text-sky-600 mb-0.5">Problem / Context</h4>
              <p className="text-[7.5pt] text-slate-700 leading-relaxed">
                대장 내시경 환경에서 점막 왜곡과 실시간 추론 제약을 고려한 용종 검출이 필요했습니다.
              </p>
            </div>
            <div>
              <h4 className="text-[7.5pt] font-bold text-sky-600 mb-0.5">Role / Contribution</h4>
              <p className="text-[7.5pt] text-slate-700 leading-relaxed">
                Kvasir Dataset을 Train 70% / Validation 20% / Test 10%로 분할하고, RF-DETR 학습과 fine-tuning을 담당했습니다.
              </p>
            </div>
            <div>
              <h4 className="text-[7.5pt] font-bold text-sky-600 mb-0.5">Result / Outcome</h4>
              <p className="text-[7.5pt] text-slate-700 leading-relaxed">
                mAP@50 86.2% (베이스라인 대비 약 7%p 개선) 및 22+ FPS 실시간 추론 달성. 건양대 금상 · 전국 컨소시엄 동상.
              </p>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="print-section">
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="text-sm font-bold text-slate-800">
              3. VAE 기반 비지도 학습 유방암 병변 검출 시스템
            </h3>
            <span className="text-xs text-slate-500 font-mono">2024.03 – 2024.10</span>
          </div>
          <p className="text-[7.5pt] text-slate-500 font-semibold mb-1.5">
            Python, TensorFlow, VAE, Reconstruction Error, Dynamic Threshold
          </p>
          <div className="print-grid-3 gap-x-4">
            <div>
              <h4 className="text-[7.5pt] font-bold text-sky-600 mb-0.5">Problem / Context</h4>
              <p className="text-[7.5pt] text-slate-700 leading-relaxed">
                라벨링 데이터가 부족한 의료영상 환경에서 정상 패턴 학습 기반 병변 이상 탐지가 필요했습니다.
              </p>
            </div>
            <div>
              <h4 className="text-[7.5pt] font-bold text-sky-600 mb-0.5">Role / Contribution</h4>
              <p className="text-[7.5pt] text-slate-700 leading-relaxed">
                유방 초음파 데이터 전처리와 Reconstruction Error Map 생성, Dynamic Threshold 후처리 알고리즘 개발을 담당했습니다.
              </p>
            </div>
            <div>
              <h4 className="text-[7.5pt] font-bold text-sky-600 mb-0.5">Result / Outcome</h4>
              <p className="text-[7.5pt] text-slate-700 leading-relaxed">
                Dice Coefficient 약 90% 수준의 병변 분할 성능 달성. 2024 창의혁신 DNA 산학협력 공학혁신상 수상.
              </p>
            </div>
          </div>
        </div>

        {/* Page 2 Footer */}
        <div className="text-[7pt] text-slate-400 font-mono mt-auto pt-3 border-t border-slate-100 flex justify-between">
          <div className="flex gap-4">
            <span>Portfolio: <a href="https://anjingyeong.github.io" target="_blank" rel="noopener noreferrer">anjingyeong.github.io</a></span>
            <span>GitHub: <a href="https://github.com/Anjingyeong" target="_blank" rel="noopener noreferrer">github.com/Anjingyeong</a></span>
          </div>
          <span>2 / 2 페이지</span>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPrint;

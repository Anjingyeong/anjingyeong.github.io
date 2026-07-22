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
                실시간 영상 AI의 정확도와 지연을 함께 개선한 컴퓨터비전 엔지니어<br />
                정답에도 유효시간이 있습니다.
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
            트랙 단절, 순간 자세 오탐, 프레임 적체를 모델 입력·트래킹·처리 구조의 문제로 분리해 개선한 신입 컴퓨터비전 엔지니어입니다.
            의료영상 AI에서 시작해 CCTV 객체 추적·행동 분석과 실시간 관제 시스템까지 경험했습니다.
            정확도뿐 아니라 지연과 서비스 전달까지 고려해 AI 결과를 관제 애플리케이션으로 연결하는 데 강점이 있습니다.
          </p>
        </div>

        {/* Core Skills */}
        <div className="print-section">
          <h2 className="print-section-title">Core Skills</h2>
          <div className="space-y-1 text-[8.5pt] leading-relaxed text-slate-700">
            <p><strong>Computer Vision:</strong> YOLO Pose, ByteTrack, RF-DETR, DINOv2, LSTM, VAE, OpenCV</p>
            <p><strong>Modeling &amp; Optimization:</strong> PyTorch, TensorFlow, TensorRT, Data Augmentation, Threshold Tuning, Post-processing</p>
            <p><strong>Real-time Video:</strong> RTSP, Frame Queue, MQTT, WebSocket, MJPEG, MediaMTX</p>
            <p><strong>Development:</strong> Python, Java, Spring Boot, Docker</p>
          </div>
        </div>

        {/* Experience */}
        <div className="print-section">
          <h2 className="print-section-title">Experience</h2>
          <div className="flex justify-between items-baseline mb-0.5">
            <h3 className="text-xs font-bold text-slate-800">
              SK쉴더스 지능형 애플리케이션 개발 부트캠프 5기
            </h3>
            <span className="text-xs text-slate-500 font-mono">2026.01 - 2026.07</span>
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
              <h3 className="text-xs font-bold text-slate-800">건양대학교 의공학과 학사 | 2026.02 졸업</h3>
              <p className="text-[7.8pt] text-slate-500 font-semibold"></p>
            </div>
            <span className="text-xs text-slate-500 font-mono"></span>
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
            <span className="text-xs text-slate-500 font-mono">2026.05 - 2026.07</span>
          </div>
          <p className="text-[7.5pt] text-slate-500 font-semibold mb-1.5">
            FastAPI, Docker, MQTT, WebSocket, RTSP, Spring Boot, React, TypeScript
          </p>
          <p className="text-[7.5pt] text-slate-700 leading-relaxed mb-1.5">
            행동 분석 정확도, 트랙 연속성, 프레임 처리 지연을 각각 측정하고 개선
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
                담당 역할: 행동 분석 특징 설계, 트래킹·프레임 처리 개선, 추론 성능 비교 및 관제 연동
              </p>
            </div>
            <div>
              <h4 className="text-[7.5pt] font-bold text-sky-600 mb-0.5">Result / Outcome</h4>
              <p className="text-[7.5pt] text-slate-700 leading-relaxed">
                F1-score를 89.29%에서 93.49%로 높이고, FP 38.6% 감소, FN 38.9% 감소를 확인했습니다.
              </p>
            </div>
          </div>
          <div className="mt-2 space-y-1 text-[7.5pt] text-slate-700 leading-relaxed">
            <p>모든 프레임을 보존하면 현재 상황 전달이 늦어진다고 판단해 최신 프레임 중심 처리 구조를 적용했습니다. 동일 다중 카메라 입력에서 측정한 프레임 처리 지연을 평균 11.789ms에서 6.101ms로 줄이고, 최악 카메라의 p95 지연을 14.719ms에서 7.159ms로 줄였습니다.</p>
            <p>실시간 처리 비용을 고려해 외형 기반 Re-ID 대신 예측 위치·정규화 중심점 거리·후보 수 조건을 순차 적용했습니다. 그 결과 ID Switch를 8건에서 1건으로 줄이고, 동일 인물의 추적 유지 비율로 사용한 Track Coverage를 35.76%에서 49.70%로 높였습니다.</p>
            <p>동일한 1,800프레임 영상에서 PyTorch와 TensorRT의 추론 지연과 처리량을 비교했습니다. 평균 추론 지연은 7.022ms에서 3.839ms로 감소했고, 처리량은 84.278 FPS에서 119.544 FPS로 증가했습니다.</p>
            <p>Python AI Worker의 낙상·실신 이벤트를 MQTT로 전달하고, Spring Boot·WebSocket 기반 관제 화면에 연동했습니다.</p>
          </div>
        </div>

        {/* Project 2 */}
        <div className="print-section">
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="text-sm font-bold text-slate-800">
              2. RF-DETR 기반 대장 내 용종 검출 애플리케이션
            </h3>
            <span className="text-xs text-slate-500 font-mono">2025.03 - 2025.11</span>
          </div>
          <p className="text-[7.5pt] text-slate-500 font-semibold mb-1.5">
            Python, PyTorch, RF-DETR, DINOv2, OpenCV, Kvasir Dataset
          </p>
          <p className="text-[7.5pt] text-slate-700 leading-relaxed mb-1.5">
            데이터 증강과 bbox 정합성 검증으로 내시경 영상의 형태 편차에 대응한 용종 검출 프로젝트
          </p>
          <div className="print-grid-3 gap-x-4">
            <div>
              <h4 className="text-[7.5pt] font-bold text-sky-600 mb-0.5">Problem / Context</h4>
              <p className="text-[7.5pt] text-slate-700 leading-relaxed">
                대장 내시경 환경에서 점막 왜곡과 영상 입력 조건을 고려한 용종 검출이 필요했습니다.
              </p>
            </div>
            <div>
              <h4 className="text-[7.5pt] font-bold text-sky-600 mb-0.5">Role / Contribution</h4>
              <p className="text-[7.5pt] text-slate-700 leading-relaxed">
                Elastic Deformation과 Grid Distortion 적용 및 증강 후 bbox 정합성 검증을 담당했습니다.
              </p>
            </div>
            <div>
              <h4 className="text-[7.5pt] font-bold text-sky-600 mb-0.5">Result / Outcome</h4>
              <p className="text-[7.5pt] text-slate-700 leading-relaxed">
                팀 모델은 Kvasir 내부 테스트셋에서 mAP@50 86.2%를 기록했으며, OpenCV 기반 애플리케이션에서 영상·웹캠 입력의 탐지 결과를 시각화했습니다.
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
            <span className="text-xs text-slate-500 font-mono">2024.03 - 2024.10</span>
          </div>
          <p className="text-[7.5pt] text-slate-500 font-semibold mb-1.5">
            Python, TensorFlow, VAE, Reconstruction Error, Dynamic Threshold
          </p>
          <p className="text-[7.5pt] text-slate-700 leading-relaxed mb-1.5">
            라벨 부족 문제를 비지도 이상탐지로 재정의하고, 영상별 밝기와 노이즈에 따른 고정 임계값 편차를 줄이기 위해 이미지별 오차 분포 기반 Dynamic Threshold를 구현
          </p>
          <div className="print-grid-3 gap-x-4">
            <div>
              <h4 className="text-[7.5pt] font-bold text-sky-600 mb-0.5">Problem / Context</h4>
              <p className="text-[7.5pt] text-slate-700 leading-relaxed">
                라벨링 데이터가 부족한 의료영상 환경에서 정상 패턴 학습 기반 이상 탐지가 필요했습니다.
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
                고정 임계값이 영상 밝기와 노이즈에 따라 달라지는 문제를 확인하고, 이미지별 오차 분포를 반영하는 Dynamic Threshold를 구현했습니다.
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

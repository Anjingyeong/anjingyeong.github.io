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
                영상 속 위험을 1초 안에 관제 알림으로 연결한 컴퓨터비전 엔지니어
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
            <span>Python</span> &middot;
            <span>PyTorch</span> &middot;
            <span>Computer Vision</span> &middot;
            <span>TensorRT</span> &middot;
            <span>RTSP</span>
          </div>
        </div>

        {/* Profile Summary */}
        <div className="print-section">
          <h2 className="print-section-title">Profile Summary</h2>
          <p className="text-[8.5pt] text-slate-700 leading-relaxed">
            RTSP 입력부터 Pose·Tracking·행동 분류, TensorRT 최적화와 MQTT 관제 연동까지 구현한 컴퓨터비전 엔지니어입니다. 2개 카메라 내부 테스트에서 위험 이벤트 29건을 모두 1초 안에 MQTT Subscriber까지 전달했으며, Spring Boot·STOMP·React 화면 표시는 별도 통합 테스트로 확인했고, 행동 분류 F1 93.49%와 YOLO 추론 지연 50.0% 감소를 달성했습니다. 모델 성능뿐 아니라 Tracking 단절, 프레임 적체와 이벤트 전달 지연을 구간별로 측정해 실제 서비스 흐름을 완성하는 데 강점이 있습니다.
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
          <p className="text-[7.8pt] text-sky-600 font-semibold mb-1">SK쉴더스 / 지능형 애플리케이션 개발 과정 수료</p>
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
                <li>의공학 전문 실무역량</li>
                <li>우수 소프트웨어 활용역량 (건양대학교 의공학심화 인증)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Page 1 Footer */}
        <div className="text-[7pt] text-slate-400 font-mono mt-auto pt-3 border-t border-slate-100 flex justify-between">
          <span>안진경 · AI Software Engineer</span>
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
              1. AI 기반 스마트 안전 관제 시스템 (SK쉴더스 5기, 5인 팀장)
            </h3>
            <span className="text-xs text-slate-500 font-mono">2026.05 - 2026.07</span>
          </div>
          <p className="text-[7.5pt] text-slate-500 font-semibold mb-1.5">
            Python, YOLO Pose, ByteTrack, PyTorch, TensorRT, MQTT, RTSP, Docker
          </p>
          <p className="text-[7.5pt] text-slate-700 leading-relaxed mb-1.5">
            RTSP 영상에서 위험 행동을 감지해 1초 안에 MQTT Subscriber까지 전달하고, 관제 화면 연동을 별도 통합 확인한 실시간 영상 AI 시스템
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
                5인 팀장 · Pose 모델 비교, LSTM 특징 설계, Tracking·프레임 처리 개선, MQTT 연동
              </p>
            </div>
            <div>
              <h4 className="text-[7.5pt] font-bold text-sky-600 mb-0.5">Result / Outcome</h4>
              <p className="text-[7.5pt] text-slate-700 leading-relaxed">
                29/29건 1초 내 MQTT Subscriber 도달, F1 93.49%, TensorRT YOLO 지연 50.0% 감소
              </p>
            </div>
          </div>
          <div className="mt-2 space-y-1 text-[7.5pt] text-slate-700 leading-relaxed">
            <p>2개 카메라 내부 테스트에서 위험 이벤트 29건을 모두 1초 안에 MQTT Subscriber까지 전달했습니다. Spring Boot 저장·STOMP·React 화면 표시는 별도 통합 테스트로 확인했습니다.</p>
            <p>54D 행동 특징을 적용해 F1-score를 89.29%에서 93.49%로 높이고, False Positive를 38.6%, False Negative를 38.9% 줄였습니다.</p>
            <p>자체 테스트 영상에서 ID Switch를 8건에서 1건으로 줄이고 Mean Track Coverage를 35.76%에서 49.70%로 높였습니다.</p>
            <p>TensorRT를 적용해 YOLO 평균 지연을 9.454ms에서 4.723ms로 줄였습니다. 전체 처리 지연 11.789ms에서 6.101ms로의 감소는 TensorRT와 최신 프레임 처리 정책이 함께 적용된 통합 결과입니다.</p>
            <p>Python AI Worker의 낙상·실신 이벤트를 MQTT로 전달하고, Spring Boot·WebSocket 기반 관제 화면에 연동했습니다.</p>
          </div>
        </div>

        {/* Project 2 */}
        <div className="print-section">
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="text-sm font-bold text-slate-800">
              2. RF-DETR 기반 대장 내시경 용종 검출 애플리케이션
            </h3>
            <span className="text-xs text-slate-500 font-mono">2025.03 - 2025.11</span>
          </div>
          <p className="text-[7.5pt] text-slate-500 font-semibold mb-1.5">
            Python, PyTorch, RF-DETR, DINOv2, OpenCV, Kvasir Dataset
          </p>
          <p className="text-[7.5pt] text-slate-700 leading-relaxed mb-1.5">
            기하학적 데이터 증강으로 내시경 영상의 형태·시야 편차를 보완한 용종 검출 팀 프로젝트
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
                Elastic Deformation과 Grid Distortion 기반 데이터 증강을 설계하고 적용했습니다.
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
              3. VAE 기반 유방 초음파 이상 후보 시각화 프로젝트
            </h3>
            <span className="text-xs text-slate-500 font-mono">2024.03 - 2024.10</span>
          </div>
          <p className="text-[7.5pt] text-slate-500 font-semibold mb-1.5">
            Python, TensorFlow, VAE, Reconstruction Error, Dynamic Threshold
          </p>
          <p className="text-[7.5pt] text-slate-700 leading-relaxed mb-1.5">
            라벨 부족 환경에서 팀의 VAE 재구성 흐름과 차영상을 활용해 이상 후보를 확인한 프로젝트
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
                원본 영상과 팀의 VAE 재구성 결과 사이의 차영상을 생성하고 비교·시각화했습니다. VAE 모델과 후처리는 팀 구현입니다.
              </p>
            </div>
            <div>
              <h4 className="text-[7.5pt] font-bold text-sky-600 mb-0.5">Result / Outcome</h4>
              <p className="text-[7.5pt] text-slate-700 leading-relaxed">
                팀의 VAE 재구성 결과를 차영상으로 비교해 이상 후보를 사람이 검토하기 쉬운 형태로 표현했습니다.
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

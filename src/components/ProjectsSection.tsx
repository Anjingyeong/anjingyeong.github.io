import { useState } from "react";
import ScrollAnimator from "./ScrollAnimator";
import { Microscope, Eye, LineChart, ArrowUpRight, X, Database, Server, RefreshCw } from "lucide-react";

type ProjectType = {
  icon: React.ElementType;
  title: string;
  description: string;
  longDescription?: React.ReactNode;
  highlights: string[];
  tags: string[];
  gradient: string;
  images?: { src: string; caption: string }[];
  videoUrl?: string;
  githubUrl?: string;
  hasAwards?: boolean;
};

const projects: ProjectType[] = [
  {
    icon: Server,
    title: "FullCount (실시간 야구 커뮤니티)",
    description: "스포츠 커뮤니티 특성상 경기 시간에 트래픽과 데이터 갱신이 급증할 것을 선제적으로 가정하고, 이를 견딜 수 있는 튼튼한 풀스택 웹 인프라 설계에 집중한 아키텍처 시뮬레이션 프로젝트입니다.",
    longDescription: (
      <div className="space-y-6 text-base text-foreground/90">
        <div className="bg-muted/30 p-4 rounded-xl border border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div><strong className="text-foreground">기간:</strong> 2026.03.27 ~ 2026.04.08 (약 2주)</div>
            <div className="md:col-span-2"><strong className="text-foreground">역할:</strong> 팀 리더 / 풀스택 시스템 아키텍처 설계 및 총괄 (5인 팀)</div>
            <div className="md:col-span-2"><strong className="text-foreground">기술 스택:</strong> React, Spring Boot, MySQL, JPA, WebSockets, STOMP</div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-slate-500 rounded-full inline-block"></span> Project Background
          </h4>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            <strong className="text-foreground/90">SK 쉴더스 지능형 애플리케이션 개발 과정 중 진행한 심화 프로젝트:</strong><br />
            대규모 트래픽 환경에서 프론트엔드와 백엔드가 어떻게 유기적으로 맞물려야 안정적인 서비스를 제공할 수 있는지 시뮬레이션하는 데 목적을 두었습니다. 조장으로서 서비스 전체 아키텍처를 설계하며, 실시간성 데이터 처리와 시스템 안정성을 확보하는 훈련에 집중했습니다.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-rose-500 rounded-full inline-block"></span> Problem
          </h4>
          <ul className="list-disc pl-8 space-y-2 text-muted-foreground">
            <li><strong className="text-foreground/80">전체 시스템의 병목 현상:</strong> 실시간 채팅과 에스크로 결제가 동시에 일어날 때, 프론트엔드의 잦은 요청이 백엔드와 DB에 막대한 부하를 주어 서비스 전체가 느려질 위험을 식별했습니다.</li>
            <li><strong className="text-foreground/80">인증 무결성과 사용자 경험의 충돌:</strong> 보안을 강화하면서도 페이지 이동 시 흐름이 끊기지 않는 매끄러운 사용자 경험을 확보해야 하는 설계상의 과제가 있었습니다.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span> Solution
          </h4>
          <ul className="list-disc pl-8 space-y-3 text-muted-foreground">
            <li><strong className="text-foreground/80">풀스택 최적화 파이프라인 설계:</strong> 백엔드에 Redis와 WebSocket을 도입해 DB 부하를 줄이고, 프론트엔드에는 비동기 상태 관리 로직을 적용해 서버 데이터 변경이 화면에 즉시 반영되도록 전체 파이프라인을 설계했습니다.</li>
            <li><strong className="text-foreground/80">하이브리드 보안 및 라우팅 제어:</strong> 클라이언트 사이드의 무상태 통신 효율을 유지하면서, 서버 사이드(SSR) 권한 검증이 필요한 경로에는 HttpOnly Cookie를 브릿징하여 보안성과 성능의 균형을 맞췄습니다.</li>
            <li><strong className="text-foreground/80">통합 트랜잭션 관리:</strong> 조장으로서 프론트엔드와 백엔드 간의 데이터 ACID 특성이 유지되도록 예외 처리 및 낙관적 업데이트 로직 전반을 조율했습니다.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-emerald-500 rounded-full inline-block"></span> Result
          </h4>
          <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10 ml-4">
            <ul className="list-disc pl-4 space-y-2 text-sm leading-relaxed text-foreground/80">
              <li>서비스 전체의 데이터 흐름을 설계하는 아키텍트로서, 팀원들의 파트를 조율하며 마감 기한 내에 안정적인 시스템 시뮬레이션을 완료했습니다.</li>
              <li>백엔드 최적화가 프론트엔드 성능 향상으로 이어지는 유기적인 풀스택 개발 프로세스를 주도했습니다.</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    highlights: ["풀스택 파이프라인 설계", "하이브리드 보안", "무결성 기반 에스크로"],
    tags: ["React", "Spring Boot", "STOMP/WebSockets", "Redis Pub/Sub", "JWT"],
    gradient: "from-emerald-500/10 to-teal-500/10",
    githubUrl: "https://github.com/Rookies5-MiniPj2-Team5",
    images: [
      { src: "https://github.com/user-attachments/assets/b20b91f3-1c1a-4f1a-a44d-3177ebf97409", caption: "KBO 경기 일정 및 실시간 경기 현황 조회 화면" },
      { src: "https://github.com/user-attachments/assets/5fa43941-2a73-484a-b7fc-c33f4d93a604", caption: "이메일 기반 회원가입 · JWT 인증 및 KBO 팀 기반 사용자 경험" },
      { src: "https://github.com/user-attachments/assets/caa7a281-eebc-4065-800d-4dba9bb2b996", caption: "경기 일정·좌석 정보 기반 직관 메이트 및 크루 모집 게시글" },
      { src: "https://github.com/user-attachments/assets/6bb97012-44c6-451d-9990-97fee92362c9", caption: "에스크로 기반 안전한 1:1 티켓 양도 및 거래 상태 관리" },
      { src: "https://github.com/user-attachments/assets/56a4fab8-effd-448b-9f43-319d185d548a", caption: "WebSocket · STOMP 기반 실시간 1:1 및 그룹 채팅" },
    ],
    hasAwards: false,
  },
  {
    icon: LineChart,
    title: "Lumina Capital (금융 데이터 서빙 아키텍처 시뮬레이션)",
    description: "외부 API를 통해 대량의 금융 데이터를 수집하는 환경을 설계할 때, 동기식 스크래핑으로 인한 렌더 타임아웃을 예방하는 비동기 캐시 파이프라인 시뮬레이션 프로젝트입니다.",
    longDescription: (
      <div className="space-y-6 text-base text-foreground/90">
        <div className="bg-muted/30 p-4 rounded-xl border border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div><strong className="text-foreground">기간:</strong> 2026.02.23 ~ 2026.02.27 (1주)</div>
            <div className="md:col-span-2"><strong className="text-foreground">역할:</strong> 풀스택 개발 (데이터 스크래핑 파이프라인 및 프론트엔드 시각화 전담 / 5인 팀)</div>
            <div className="md:col-span-2"><strong className="text-foreground">기술 스택:</strong> Python, Streamlit, MySQL, BeautifulSoup4, pykrx</div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-slate-500 rounded-full inline-block"></span> Project Background
          </h4>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            <strong className="text-foreground/90">SK 쉴더스 지능형 애플리케이션 개발 과정 중 진행한 기초 프로젝트:</strong><br />
            외부 데이터 수집부터 프론트엔드 서빙까지의 전 과정을 경험하며 데이터 파이프라인의 기초를 다졌습니다. 실제 상용 서비스 수준의 방대한 데이터 스크래핑 환경을 가정하고 시스템의 가용성을 테스트하는 데 집중했습니다.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-rose-500 rounded-full inline-block"></span> Problem
          </h4>
          <ul className="list-disc pl-8 space-y-2 text-muted-foreground">
            <li><strong className="text-foreground/80">데이터 수집 지연에 따른 UX 저하:</strong> 외부 사이트 데이터를 실시간으로 스크래핑하여 출력할 경우, 수집 과정의 지연이 프론트엔드 렌더링을 멈추게 하거나 타임아웃을 유발하는 구조적 병목이 예상되었습니다.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span> Solution
          </h4>
          <ul className="list-disc pl-8 space-y-3 text-muted-foreground">
            <li><strong className="text-foreground/80">엔드 투 엔드(End-to-End) 데이터 설계:</strong> 스크래핑-백엔드 캐싱-프론트엔드 시각화로 이어지는 데이터의 흐름을 직접 설계하고 구현했습니다.</li>
            <li><strong className="text-foreground/80">비동기 스케줄링 기반 수집 최적화:</strong> 서버에서 주기적으로 스크래핑을 수행하고 메모리에 데이터를 캐싱하는 비동기 CRON 스케줄러를 구축하여 클라이언트 요청과의 의존성을 분리했습니다.</li>
            <li><strong className="text-foreground/80">데이터 기반 대시보드 구현:</strong> 서버에 최적화되어 저장된 데이터를 프론트엔드에서 즉시 호출하도록 설계하여, 외부 서버 상태와 무관한 쾌적한 렌더링 환경을 조성했습니다.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-emerald-500 rounded-full inline-block"></span> Result
          </h4>
          <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/10 ml-4">
            <ul className="list-disc pl-4 space-y-2 text-sm leading-relaxed text-foreground/80">
              <li>팀 내 데이터 수집과 서빙 전반을 책임지며, 1주일이라는 짧은 기간 내에 안정적인 데이터 파이프라인 시뮬레이션을 완료했습니다.</li>
              <li>외부 지연 요소를 구조적으로 차단하는 설계를 통해 시스템 가용성을 높이는 풀스택 개발 역량을 증명했습니다.</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    highlights: ["비동기 캐시 시스템", "End-to-End 데이터 설계", "렌더링 지연 차단"],
    tags: ["Python", "Streamlit", "MySQL", "CRON Scheduling"],
    gradient: "from-amber-500/10 to-orange-500/10",
    images: [
      { src: "/images/lumina_dashboard.png", caption: "관리자를 위한 대시보드 뷰" },
      { src: "/images/lumina_signup.png", caption: "암호화를 거친 안전한 사용자 인증 및 세션 관리 체계" },
      { src: "/images/lumina_terms.png", caption: "초보자를 위해 제공되는 인터랙티브 금융 용어 사전 인터페이스" },
      { src: "/images/lumina_survey.png", caption: "사용자 페르소나를 측정하는 다단계 자동화 투자 프로파일링" },
      { src: "/images/lumina_chart.png", caption: "시계열 캔들스틱 분석 및 AI 알고리즘 기반 가격 시각화 엔진" },
      { src: "/images/lumina_news.png", caption: "시장에 흐르는 주요 소식을 포착하는 비동기 실시간 뉴스 수집 파이프라인" },
      { src: "/images/lumina_newsletter.png", caption: "투자자의 성향과 일치하는 맞춤형 뉴스레터 인텔리전스 발송 시스템" }
    ],
    githubUrl: "https://github.com/kimgeon0802/1team_mini_PJT",
    hasAwards: false,
  },
  {
    icon: Microscope,
    title: "의료 영상 실시간 병변 검출 시스템 (Capstone)",
    description: "RF-DETR 논문을 직접 읽고 9개 아키텍처를 비교 실험해 Deformable Cross-Attention 구조를 선택, 학습 데이터 600→2,100장 증강과 비동기 추론 파이프라인까지 End-to-End로 구축한 대장 내시경 실시간 용종 검출 시스템입니다.",
    longDescription: (
      <div className="space-y-6 text-base text-foreground/90">
        <div className="bg-muted/30 p-4 rounded-xl border border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div><strong className="text-foreground">기간:</strong> 2025.04~2025.10 (Team Project)</div>
            <div className="md:col-span-2">
              <strong className="text-foreground">역할:</strong> AI 모델 최적화 및 학습 파이프라인 설계<br />
              <span className="text-foreground/80 mt-1 inline-block">데이터 정규화부터 모델 프루닝(Pruning)까지, 실시간 추론 속도 향상을 위한 데이터 전처리 및 경량화 알고리즘 설계를 주도했습니다.</span>
            </div>
            <div className="md:col-span-2 mt-1"><strong className="text-foreground">기술 스택:</strong> Python, PyTorch, RF-DETR, DINOv2, OpenCV</div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-slate-500 rounded-full inline-block"></span> Project Background
          </h4>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            학부 캡스톤 디자인으로 진행한 프로젝트로, 엣지 디바이스 환경에서의 상용화를 목표로 실시간 의료 영상 검출 AI 모델을 최적화했습니다. (교내 캡스톤 대회 금상 및 공학교육 컨소시엄 경진대회 동상)
          </p>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-rose-500 rounded-full inline-block"></span> Problem
          </h4>
          <ul className="list-disc pl-8 space-y-2 text-muted-foreground">
            <li><strong className="text-foreground/80">내시경 특화 탐지 환경의 복합 과제:</strong> 내시경 특유의 움직임 노이즈와 불규칙한 조명 환경에서 소형 병변까지 안정적으로 탐지하려면, 지역적 특징을 넘어 전역적 문맥을 함께 처리하는 모델 구조가 필요했습니다.</li>
            <li><strong className="text-foreground/80">소형 병변 데이터 부족:</strong> 소형 병변 샘플이 절대적으로 부족하다는 것을 데이터 분포 분석으로 확인했고, 이로 인한 Recall 저하와 과적합 리스크가 컸습니다.</li>
            <li><strong className="text-foreground/80">추론 파이프라인 UI 멈춤 현상:</strong> PyQt5 UI와 딥러닝 추론을 같은 스레드에서 실행하자 화면 멈춤과 FPS 급감이 발생했습니다.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span> Solution
          </h4>
          <ul className="list-disc pl-8 space-y-3 text-muted-foreground">
            <li><strong className="text-foreground/80">논문 기반 모델 선택 및 비교 검증:</strong> RF-DETR 논문을 직접 읽고 Deformable Cross-Attention 구조의 전역 문맥 처리 능력을 선택 근거로 삼았습니다. 이를 검증하기 위해 YOLO 계열부터 Transformer 기반까지 총 <strong>9개 모델</strong>을 동일한 Kvasir 데이터셋으로 학습·비교했고, RF-DETR이 <strong>mAP@50 0.862, Precision 0.91</strong>로 최고 성능을 기록했습니다.</li>
            <li><strong className="text-foreground/80">의료 데이터 특화 증강:</strong> Elastic Deformation과 Grid Distortion을 적용해 학습 데이터를 <strong>600장에서 2,100장</strong>으로 확장했습니다. Recall이 유의미하게 개선되었고, 파인튜닝으로 성능을 추가로 약 7% 향상시켰습니다.</li>
            <li><strong className="text-foreground/80">비동기 추론 파이프라인 구축:</strong> 추론 스레드와 UI 업데이트 스레드를 분리하는 비동기 처리를 구현해 화면 멈춤 문제를 해결했습니다. 병변 감지 시 OpenCV로 프레임을 캡처하고 탐지 결과를 자동 녹화·저장하는 I/O 로직까지 완성했습니다.</li>
            <li><strong className="text-foreground/80">구조적 가지치기:</strong> 모델 결과 기여도가 낮은 가중치를 제거하는 Pruning으로 연산량을 최적화하여 엣지 환경 실시간 추론을 달성했습니다.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-emerald-500 rounded-full inline-block"></span> Result
          </h4>
          <div className="p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/10 ml-4">
            <ul className="list-disc pl-4 space-y-2 text-sm leading-relaxed text-foreground/80">
              <li>9개 모델 비교 실험에서 RF-DETR이 <strong>mAP@50 0.862, Precision 0.91</strong>로 최고 성능 달성</li>
              <li>파인튜닝으로 기존 대비 <strong>약 7% 추가 성능 향상</strong>, <strong>22 FPS 이상</strong> 실시간 추론 확보</li>
              <li>모델 선택 → 데이터 증강 → 비동기 파이프라인까지 End-to-End 시스템 완성, 임상 환경 적용 가능성 검증</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    highlights: ["9개 모델 비교·mAP 0.862", "600→2,100장 데이터 증강", "비동기 추론 파이프라인", "캡스톤 금상"],
    tags: ["Python", "PyTorch", "RF-DETR", "Computer Vision"],
    gradient: "from-blue-500/10 to-indigo-500/10",
    videoUrl: "https://www.youtube.com/embed/n6xKcYq7bWE",
    githubUrl: "https://github.com/anjin0910-afk/RF-DETR-project",
    images: [
      { src: "/images/rf_detr_aug.png", caption: "다양한 장 내 환경 모사를 위한 Elastic Deform 및 Grid Distortion 데이터 증강 기법 적용" },
      { src: "/images/rf_detr_gold.jpg", caption: "🏆 금상 (대상) — 제17회 건양대학교 캡스톤디자인 경진대회" },
      { src: "/images/rf_detr_bronze.jpg", caption: "🏆 동상 — 전국 공학교육혁신 컨소시엄 창의적 종합설계 경진대회" }
    ],
    hasAwards: true,
  },
  {
    icon: Eye,
    title: "유방암 검출 비지도학습 AI 설계",
    description: "정상 데이터만으로 학습된 VAE에 고정 임계값 적용 시 오탐률이 급증하는 문제를 발견하고, 재구성 오차의 통계적 분포를 분석해 동적 임계값 이진화 알고리즘을 직접 설계하여 Dice 0.8325 → 0.9094로 향상시킨 비지도학습 이상 탐지 시스템입니다.",
    longDescription: (
      <div className="space-y-6 text-base text-foreground/90">
        <div className="bg-muted/30 p-4 rounded-xl border border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div><strong className="text-foreground">기간:</strong> 2024.03~2024.11 (Team Project)</div>
            <div className="md:col-span-2">
              <strong className="text-foreground">역할:</strong> AI 모델링 및 커스텀 손실 함수(Loss) 설계<br />
              <span className="text-foreground/80 mt-1 inline-block">프레임워크의 저수준 API를 활용하여 비지도학습 모델의 핵심 로직을 직접 구현하고, 학습 데이터의 무결성을 검증했습니다.</span>
            </div>
            <div className="md:col-span-2 mt-1"><strong className="text-foreground">기술 스택:</strong> Python, TensorFlow, VAE, Computer Vision</div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-slate-500 rounded-full inline-block"></span> Project Background
          </h4>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            유방암 데이터셋을 활용하여 암세포의 미세한 특징을 스스로 군집화하고 탐지하는 비지도학습 기반의 AI 모델 설계 프로젝트입니다.(2024 DNA 공학혁신상 수상)
          </p>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-rose-500 rounded-full inline-block"></span> Problem
          </h4>
          <ul className="list-disc pl-8 space-y-2 text-muted-foreground">
            <li><strong className="text-foreground/80">고정 임계값의 오탐률 급증:</strong> 정상 데이터만으로 학습된 모델에 고정된 임계값을 일괄 적용하자, 영상마다 다르게 나타나는 기저 노이즈 차이로 오탐률이 급증했습니다. 단순한 하이퍼파라미터 튜닝만으로는 해결에 명확한 한계가 있었습니다.</li>
            <li><strong className="text-foreground/80">프레임워크 블랙박스 의존의 한계:</strong> 기존 라이브러리의 기본 손실 함수만으로는 암세포 특유의 미세한 픽셀 이질감을 학습시키는 데 구조적인 한계가 있었습니다.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span> Solution
          </h4>
          <ul className="list-disc pl-8 space-y-3 text-muted-foreground">
            <li><strong className="text-foreground/80">동적 임계값 이진화 알고리즘 설계:</strong> 재구성 오차 데이터의 통계적 분포를 직접 분석했습니다. 각 영상의 오차 평균과 표준편차를 도출하고, 이를 기반으로 기준선이 영상마다 유동적으로 변하는 동적 임계값 수식을 알고리즘에 직접 설계했습니다.</li>
            <li><strong className="text-foreground/80">저수준 API 제어 및 손실 함수 커스텀:</strong> 프레임워크의 저수준 API를 활용해 분포 오차와 재구성 오차의 텐서 가중치를 데이터 특성에 맞게 세밀하게 조작하는 커스텀 손실 함수를 설계했습니다.</li>
            <li><strong className="text-foreground/80">정확도의 함정 검증:</strong> 98%라는 비정상적인 조기 정확도가 도출되었을 때 이에 안주하지 않고, 편향된 데이터 공간을 전수 조사하여 평가 로직의 오류를 바로잡았습니다.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-emerald-500 rounded-full inline-block"></span> Result
          </h4>
          <div className="p-4 rounded-xl bg-violet-500/5 border border-violet-500/10 ml-4">
            <ul className="list-disc pl-4 space-y-2 text-sm leading-relaxed text-foreground/80">
              <li>동적 임계값 적용 후 병변이 비교적 큰 케이스에서 <strong>Dice 0.9094</strong> 달성 (적용 전 <strong>0.8325</strong> 대비 유의미한 향상)</li>
              <li>겉보기 성능에 의존하지 않고 정상·이상 데이터 간 경계를 명확히 학습시켜 치명적인 배포 리스크를 사전에 차단</li>
              <li>영상 데이터 특성 분석과 이상 탐지 역량은 헬스케어 품질 검증·이상 프레임 탐지에도 동일하게 전이 가능</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    highlights: ["동적 임계값 알고리즘 설계", "Dice 0.8325 → 0.9094", "로우레벨 API 제어"],
    tags: ["Python", "TensorFlow", "VAE", "Unsupervised Learning"],
    gradient: "from-violet-500/10 to-purple-500/10",
    images: [
      { src: "/images/vae_diff.png", caption: "Phase 1: 이상치 격리를 위한 차영상 연산 과정" },
      { src: "/images/vae_threshold.png", caption: "Phase 2: 노이즈를 제거하고 정밀한 분할 마스크를 추출하는 동적 임계값 적용" },
      { src: "/images/vae_result.png", caption: "Phase 3: 최종 바운딩 박스 생성 및 수치적 신뢰도 스코어링" },
      { src: "/images/vae_award.jpg", caption: "🏆 공학혁신상 (창의혁신 DNA 산학협력 우수사례)" }
    ],
    githubUrl: "https://github.com/anjin0910-afk/vae-breast-cancer-anomaly",
    hasAwards: true,
  },
  {
    icon: RefreshCw,
    title: "CycleGAN 기반 CT→MRI 의료 영상 변환 모델",
    description: "표준 CycleGAN 아키텍처를 직접 수정하여 의료 영상의 지역적 패턴 학습을 강화한 CT→MRI 변환 모델입니다. PatchGAN 적용과 Residual Block 확장으로 변환 품질을 개선하고 SSIM·PSNR로 정량 검증했습니다.",
    longDescription: (
      <div className="space-y-6 text-base text-foreground/90">
        <div className="bg-muted/30 p-4 rounded-xl border border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div><strong className="text-foreground">기간:</strong> 학부 전공 수업 팀 프로젝트</div>
            <div className="md:col-span-2">
              <strong className="text-foreground">역할:</strong> 모델 아키텍처 수정 및 학습 파이프라인 구축<br />
              <span className="text-foreground/80 mt-1 inline-block">PatchGAN Discriminator 도입과 Residual Block 확장을 주도하고, 1,100장 이상의 CT/MRI 데이터 전처리 및 학습 파이프라인 전반을 설계했습니다.</span>
            </div>
            <div className="md:col-span-2 mt-1"><strong className="text-foreground">기술 스택:</strong> Python, PyTorch, CycleGAN, PatchGAN, NumPy, Matplotlib</div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-slate-500 rounded-full inline-block"></span> Project Background
          </h4>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            MRI는 CT보다 풍부한 연부조직 정보를 제공하지만, 비용이 높고 촬영 시간이 길어 접근성이 제한됩니다. CT 영상을 MRI로 변환하는 생성 모델을 통해 의료 비용 절감과 방사선 노출 감소 가능성을 탐색하고자 했습니다.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-rose-500 rounded-full inline-block"></span> Problem
          </h4>
          <ul className="list-disc pl-8 space-y-2 text-muted-foreground">
            <li><strong className="text-foreground/80">글로벌 패턴 학습의 한계:</strong> 표준 CycleGAN의 Discriminator는 이미지 전체를 단일 판별값으로 평가해, 의료 영상이 요구하는 세밀한 지역적 텍스처 변환에 취약했습니다.</li>
            <li><strong className="text-foreground/80">모델 표현력 부족:</strong> 기본 9개의 Residual Block으로는 CT와 MRI 간의 복잡한 도메인 격차를 충분히 학습하지 못해 변환 이미지의 디테일이 흐릿했습니다.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span> Solution
          </h4>
          <ul className="list-disc pl-8 space-y-3 text-muted-foreground">
            <li><strong className="text-foreground/80">PatchGAN Discriminator 적용:</strong> 이미지 전체가 아닌 N×N 패치 단위로 진위를 판별하도록 Discriminator를 교체했습니다. 모델이 전역적 구조뿐 아니라 지역적 텍스처 패턴까지 정밀하게 학습하도록 유도했습니다.</li>
            <li><strong className="text-foreground/80">Residual Block 확장 (9→12개):</strong> Generator의 Residual Block 수를 늘려 피처 추출 및 도메인 간 매핑 능력을 강화하고, 변환 이미지의 선명도를 향상시켰습니다.</li>
            <li><strong className="text-foreground/80">데이터 전처리 및 학습 파이프라인 구축:</strong> 1,100장 이상의 CT/MRI 쌍 데이터를 정규화·리사이징 전처리하고, 안정적인 GAN 학습을 위한 파이프라인을 직접 설계했습니다.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-emerald-500 rounded-full inline-block"></span> Result
          </h4>
          <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/10 ml-4">
            <ul className="list-disc pl-4 space-y-2 text-sm leading-relaxed text-foreground/80">
              <li>PatchGAN 도입 및 Residual Block 확장으로 기존 대비 <strong>Loss 감소</strong> 및 변환 이미지 품질 향상 확인</li>
              <li><strong>SSIM·PSNR</strong> 측정을 통한 정량적 품질 검증으로 아키텍처 수정의 효과를 객관적으로 입증</li>
              <li>CT→MRI 변환 모델을 통해 의료 비용 절감 및 방사선 노출 감소 가능성 제시</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    highlights: ["PatchGAN Discriminator 적용", "Residual Block 9→12 확장", "SSIM·PSNR 정량 검증"],
    tags: ["Python", "PyTorch", "CycleGAN", "PatchGAN", "Medical Imaging"],
    gradient: "from-rose-500/10 to-pink-500/10",
    images: [
      { src: "/images/ct.png", caption: "Phase 1: 학습 데이터 품질 기준 설계 — 동일 축(Axial) 뇌 단면 슬라이스만 선별하고 불량 품질·오정렬 데이터를 직접 필터링하여 1,100장 이상의 정제 데이터셋 구성" },
      { src: "/images/loss.png", caption: "Phase 2: 학습 초기(epoch 0→2) Loss 수렴 과정 — Discriminator Loss와 Generator Loss가 안정적으로 감소하며 모델이 MRI 도메인 패턴을 학습하는 과정 시각화" },
      { src: "/images/final.png", caption: "Phase 3: 최종 변환 결과 및 정량 평가 — SSIM 0.27~0.55, PSNR 12~15dB 측정. CycleGAN 비쌍(Unpaired) 학습 특성상 동일 슬라이스 재현보다 MRI 도메인 스타일 변환 자체를 학습하며, 아키텍처 수정(PatchGAN·Residual Block 확장)의 효과를 SSIM·PSNR로 객관적으로 검증" },
    ],
    hasAwards: false,
  }
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  // Close modal when pressing escape key
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") setSelectedProject(null);
  };

  return (
    <section id="projects" className="section-alt py-24 md:py-32" onKeyDown={handleKeyDown}>
      <div className="container relative">
        <ScrollAnimator>
          <div className="section-header">
            <h2>프로젝트</h2>
          </div>
        </ScrollAnimator>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
          {projects.map((project, i) => (
            <ScrollAnimator key={i}>
              <div
                className="minimal-card-accent group cursor-pointer h-full transition-transform hover:-translate-y-1"
                onClick={() => setSelectedProject(project)}
              >
                {/* Gradient header area */}
                <div className={`bg-gradient-to-br ${project.gradient} p-8 pb-6`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="icon-container">
                      <project.icon size={22} />
                    </div>
                    <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground leading-snug">{project.title}</h3>
                </div>

                {/* Content */}
                <div className="p-8 pt-5">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{project.description}</p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.highlights.map((h) => (
                      <span key={h} className="inline-flex items-center gap-1 text-xs font-semibold text-primary bg-primary/8 px-2.5 py-1 rounded-md">
                        ✦ {h}
                      </span>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimator>
          ))}
        </div>

        {/* Modal Overlay */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6" onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedProject(null);
          }}>
            {/* Backdrop */}
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm pointer-events-none" />

            {/* Modal Content */}
            <div
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-xl shadow-2xl p-6 md:p-8 animate-in fade-in zoom-in-95 duration-200"
              role="dialog"
              aria-modal="true"
            >
              <button
                className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pr-8">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${selectedProject.gradient}`}>
                    <selectedProject.icon size={32} className="text-foreground" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold leading-tight">{selectedProject.title}</h3>
                </div>
                {selectedProject.githubUrl && (
                  <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-muted border border-border text-foreground hover:bg-muted/80 transition-colors shrink-0">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    GitHub
                  </a>
                )}
              </div>

              {selectedProject.longDescription ? (
                <div className="mb-8 overflow-hidden rounded-xl border border-border bg-card/50 p-6 md:p-8">
                  {selectedProject.longDescription}
                </div>
              ) : (
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed whitespace-pre-line">
                  {selectedProject.description}
                </p>
              )}

              {selectedProject.videoUrl && (
                <div className="mb-8 rounded-xl overflow-hidden shadow-lg border border-border bg-black">
                  <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={selectedProject.videoUrl}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}

              {selectedProject.images && selectedProject.images.length > 0 && (
                <div className="space-y-8 mt-8 border-t border-border pt-8">
                  <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-primary rounded-full inline-block"></span>
                    {selectedProject.hasAwards ? "프로젝트 갤러리 및 수상 내역" : "프로젝트 갤러리"}
                  </h4>
                  {selectedProject.images.map((img, idx) => (
                    <div key={idx} className="flex flex-col gap-4 mb-8 last:mb-0">
                      <div className="rounded-xl overflow-hidden border border-border bg-muted/20 flex items-center justify-center p-2">
                        <img
                          src={img.src}
                          alt={img.caption}
                          className="w-full h-auto object-contain max-h-[70vh] rounded-lg shadow-sm"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/placeholder.svg';
                            (e.target as HTMLImageElement).alt = 'Image not found - please add ' + img.src;
                          }}
                        />
                      </div>
                      <p className="text-center text-sm md:text-base text-foreground/80 font-medium">
                        {img.caption}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;

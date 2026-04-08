import { useState } from "react";
import ScrollAnimator from "./ScrollAnimator";
import { Microscope, Eye, LineChart, ArrowUpRight, X, Database, Server } from "lucide-react";

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
    title: "FullCount: 실시간 KBO 라이브 커뮤니티 플랫폼",
    description: "고빈도 실시간 데이터 동기화와 복잡한 관계형 상태 머신 제어 역량을 검증하기 위해 구축한 풀스택 플랫폼입니다. (기간: 2026.03, 팀: 5인) 조장 및 리드 풀스택 엔지니어로서 에스크로 도메인을 독립적으로 분리해 트랜잭션 무결성을 확보하고, Redis Pub/Sub 및 WebSocket 기반 실시간 양방향 통신망을 구축했습니다. 전역 알림 폴링 지연 체계로 DB I/O 부하를 80% 이상 절감했으며, JWT와 HttpOnly Cookie를 통합한 하이브리드 무상태(Stateless) 인증 체계로 보안 라우팅 충돌을 해결했습니다.",
    longDescription: (
      <div className="space-y-6 text-base text-foreground/90">
        <div className="bg-muted/30 p-4 rounded-xl border border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div><strong className="text-foreground">기간 및 규모:</strong> 2026.03 (Team Project, 5인)</div>
            <div><strong className="text-foreground">역할:</strong> Team Leader & Lead Full-Stack Engineer</div>
            <div className="md:col-span-2"><strong className="text-foreground">기술 스택:</strong> React, Spring Boot, MySQL, JPA, WebSockets, STOMP</div>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-primary rounded-full inline-block"></span> Impact & Contribution
          </h4>
          <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/10 ml-4">
            <h5 className="font-semibold text-rose-500 mb-2 flex items-center gap-2">⚡ DB I/O 부하 80% 이상 혁신적 절감</h5>
            <p className="text-sm leading-relaxed text-foreground/80">
              30초 지연 분산 오프로딩(Off-loading)을 구축하여 불필요한 서버 폴링 오버헤드와 DB 부하를 차단하고, 웹소켓 리소스를 미션 크리티컬 컴포넌트에 확보했습니다.
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-primary rounded-full inline-block"></span> What I Did (주요 수행 업무)
          </h4>
          <ul className="list-disc pl-8 space-y-2 text-muted-foreground">
            <li><strong className="text-foreground/80">Tech Lead 및 풀스택 연동:</strong> 5인 팀 코어 아키텍트로서 요구사항 분석, 스키마 설계, Spring Boot 기반 백엔드 아키텍처 연동 전체 리드.</li>
            <li><strong className="text-foreground/80">핵심 비즈니스 로직 제어:</strong> 무결성이 중요한 에스크로 상태 머신(State Machine)과 실시간 라이브 채팅 생태계의 관계형 데이터베이스 의존성 단독 모델링.</li>
            <li><strong className="text-foreground/80">백엔드 장애 대응 인프라:</strong> 클라이언트에게 24시간 끊김 없는 데이터 제공을 위해 내결함성(Fault-tolerant) 비동기 스크래핑 인프라 구축 매핑.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-primary rounded-full inline-block"></span> Tech Rationale (기술 채택 의사결정)
          </h4>
          <ul className="list-disc pl-8 space-y-3 text-muted-foreground">
            <li><strong className="text-foreground/80">WebSockets + STOMP 도입:</strong> 고빈도 에스크로 트랜잭션에서 단순 API Polling은 막대한 DB 병목을 유발합니다. 이에 TCP 연결 기반의 양방향 통신망과 직관적인 Publish-Subscribe 패턴의 메시지 브로커(STOMP) 계층을 도입, 타 클라이언트의 상태 전이를 0.1초 지연 없이 브로드캐스팅했습니다.</li>
            <li><strong className="text-foreground/80">Spring Boot + JPA 구조:</strong> 실시간 채팅, 상태 변경, 조회 로직이 동시다발적으로 발생하는 환경에서 트랜잭션의 철저한 상태 일관성과 롤백 통제를 보장해야 했고, 영속성 컨텍스트를 안정적으로 지원하는 Spring 생태계가 백엔드 핵심으로 가장 적합했습니다.</li>
            <li><strong className="text-foreground/80">JWT + HttpOnly Cookie 브릿징:</strong> React UI의 무상태 접근성을 극대화하기 위해 JWT를 채택하되, 가장 리스크가 큰 SSR 권한 관리 라우팅(403) 영역에 대해서는 HttpOnly 쿠키 방식을 브릿징 결합하여 보안을 보완했습니다.</li>
          </ul>
        </div>
      </div>
    ),
    highlights: ["DB I/O 80% 절감", "하이브리드 인증 체계", "에스크로 무결성 제어"],
    tags: ["React", "Spring Boot", "STOMP/WebSockets", "Redis Pub/Sub", "JWT", "Thymeleaf"],
    gradient: "from-emerald-500/10 to-teal-500/10",
    githubUrl: "https://github.com/Rookies5-MiniPj2-Team5",
    hasAwards: false,
  },
  {
    icon: Eye,
    title: "VAE 기반 비지도 학습 유방암 병변 검출 시스템",
    description: "초음파 영상에서 유방암 병변을 자동으로 식별하기 위해 동적 임계값을 생성하는 비지도 학습(Unsupervised Learning) 파이프라인. VAE(Variational AutoEncoder)를 활용하여 정답(Label) 데이터 없이도 구조적 이상 지점을 독자적으로 격리해 냅니다.",
    longDescription: (
      <div className="space-y-6 text-base text-foreground/90">
        <div className="bg-muted/30 p-4 rounded-xl border border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div><strong className="text-foreground">기간 및 규모:</strong> 2024.03~2024.11 (Team Project)</div>
            <div><strong className="text-foreground">역할:</strong> Generative AI & Vision Pipeline Engineer</div>
            <div className="md:col-span-2"><strong className="text-foreground">기술 스택:</strong> Python, TensorFlow, VAE, Computer Vision</div>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-primary rounded-full inline-block"></span> Impact & Contribution
          </h4>
          <div className="flex flex-col sm:flex-row gap-4 pl-4">
            <div className="flex-1 p-4 rounded-xl bg-violet-500/5 border border-violet-500/10">
              <p className="font-semibold text-violet-500 mb-1">안정적 분할 정밀도 달성</p>
              <p className="text-2xl font-bold text-foreground hidden sm:block">Max 90% Dice</p>
              <p className="text-sm text-foreground sm:hidden font-bold">Max 90% Dice Coefficient</p>
              <p className="text-sm text-muted-foreground mt-1 hidden sm:block">일관성이 부족한 비지도 의료 검출 환경 내 정밀도 상시 유지</p>
            </div>
            <div className="flex-1 p-4 rounded-xl bg-primary/5 border border-primary/10">
              <p className="font-semibold text-primary mb-1">창의혁신 DNA 산학협력 (수상)</p>
              <p className="text-xl sm:text-lg lg:text-xl font-bold text-foreground leading-tight">공학혁신상 (산업부 주관)</p>
              <p className="text-sm text-muted-foreground mt-1">공학적 설계 우수성 단독 인정</p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-primary rounded-full inline-block"></span> What I Did (주요 수행 업무)
          </h4>
          <ul className="list-disc pl-8 space-y-2 text-muted-foreground">
            <li><strong className="text-foreground/80">생성형 비전 아키텍처 설계:</strong> 기성 모델 파인튜닝 수준에서 그치지 않고, 건강한 유방 조직 데이터셋만으로 병리학적 정상 토폴로지를 인코딩 및 시각화하는 AutoEncoder 프레임워크 베이스라인 구축.</li>
            <li><strong className="text-foreground/80">수학적 차영상 파이프라인 개발:</strong> 병원 환자의 실제 스캔 데이터와 모델의 '정상의 경우 예측 데이터' 간의 재구성 오차(Reconstruction Error)를 정밀 연산하여 이상성 바운딩 박스를 렌더링.</li>
            <li><strong className="text-foreground/80">동적 임계값 단독 개발:</strong> 모델 정밀도를 급상승시키는 핵심 공학 요소로서, 이미지 내 픽셀 분포 비율을 실시간 계산하고 1차원적인 하드코딩 마스킹의 한계를 극복하는 동적 노이즈 클리닝 로직 구현.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-primary rounded-full inline-block"></span> Tech Rationale (기술 채택 의사결정)
          </h4>
          <ul className="list-disc pl-8 space-y-3 text-muted-foreground">
            <li><strong className="text-foreground/80">비지도 학습(Unsupervised) VAE 인프라 선호:</strong> 모든 악성 종양 케이스에 대해 철저히 라벨링(Label)된 정답 데이터를 수급하는 것은 천문학적 자본과 데이터 편향을 발생시킵니다. 따라서 구하기 용이한 '정상 조직 이미지'만으로 모델 스스로 수학적 편차 규칙을 학습하게 구성한 VAE 아키텍처가 당면한 임상 문제를 풀 가장 비용 효율적 대안이었습니다.</li>
            <li><strong className="text-foreground/80">TensorFlow 기반 텐서 컨트롤:</strong> 심층 신경망의 난해한 잠재 공간(Latent Space) 디버깅 및 차영상 오차 손실 함수(Loss Function) 계산을 직관적 그래프로 시각화 통제할 수 있도록 저수준 API 제어가 뛰어난 프레임워크를 선택했습니다.</li>
          </ul>
        </div>
      </div>
    ),
    highlights: ["Dice 40-90% 달성", "비지도 학습 모델 구축", "창의혁신 DNA 산학협력 동상 수상"],
    tags: ["Python", "TensorFlow", "VAE", "Deep Learning", "Medical Imaging"],
    gradient: "from-violet-500/10 to-purple-500/10",
    images: [
      { src: "/images/vae_diff.png", caption: "Phase 1: 이상치 격리를 위한 차영상(Difference Matrix) 연산 과정" },
      { src: "/images/vae_threshold.png", caption: "Phase 2: 노이즈를 제거하고 정밀한 분할 마스크를 추출하는 동적 임계값 적용" },
      { src: "/images/vae_result.png", caption: "Phase 3: 최종 바운딩 박스 생성 및 수치적 신뢰도 스코어링" },
      { src: "/images/vae_award.jpg", caption: "🏆 공학혁신상 (창의혁신 DNA 산학협력 우수사례)" }
    ],
    githubUrl: "https://github.com/anjin0910-afk/vae-breast-cancer-anomaly",
    hasAwards: true,
  },
  {
    icon: Microscope,
    title: "RF-DETR 실시간 대장 내 용종 검출 시스템",
    description: "Transformer 아키텍처 기반의 고성능 실시간 의료 객체 탐지 서비스입니다. 극단적인 의료 데이터 불균형 문제를 해결하기 위해 국소적(Localized) 데이터 증강 파이프라인을 구축하였으며, 상용 엣지(Edge) 환경에서도 22 FPS 이상의 견고한 추론 속도를 달성했습니다.",
    longDescription: (
      <div className="space-y-6 text-base text-foreground/90">
        <div className="bg-muted/30 p-4 rounded-xl border border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div><strong className="text-foreground">기간 및 규모:</strong> 2025.04~2025.10 (Team Project)</div>
            <div><strong className="text-foreground">역할:</strong> Data Engineer & Vision Engineer</div>
            <div className="md:col-span-2"><strong className="text-foreground">기술 스택:</strong> Python, PyTorch, RF-DETR, DINOv2, OpenCV</div>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-primary rounded-full inline-block"></span> Impact & Contribution
          </h4>
          <div className="flex flex-col md:flex-row flex-wrap gap-4 pl-4">
            <div className="flex-1 min-w-[200px] p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/10">
              <p className="font-semibold text-indigo-500 mb-1">상용 Edge Inference Throughput</p>
              <p className="text-2xl font-bold text-foreground">22+ FPS</p>
            </div>
            <div className="flex-1 min-w-[200px] p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
              <p className="font-semibold text-blue-500 mb-1">기존 대비 정밀도 상승 (mAP)</p>
              <p className="text-2xl font-bold text-foreground">+7% mAP</p>
            </div>
            <div className="flex-1 min-w-[200px] p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
              <p className="font-semibold text-amber-500 mb-1 flex items-center gap-1">🏆 캡스톤 대상 및 수상</p>
              <p className="text-[13px] font-bold text-foreground leading-snug pt-1">제17회 캡스톤디자인 <span>대상 (금상)</span><br />성균관대학교 컨소시엄 창의적 종합설계 경진대회 <span>동상</span></p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-primary rounded-full inline-block"></span> What I Did (주요 수행 업무)
          </h4>
          <ul className="list-disc pl-8 space-y-2 text-muted-foreground">
            <li><strong className="text-foreground/80">실패 기반 파이프라인 피봇(Pivot) 주도:</strong> 초기엔 CenterNet과 RetinaNet의 장점을 결합해 독자적인 퓨전 모델 개발을 시도했으나 정확도 한계에 직면했습니다. 이 실패를 분석하며 텐서 연산에 대한 높은 이해도를 확보했고, 의료 도메인에 걸맞는 '생명과 직결된 정밀도'를 위해 고집을 버리고 SOTA 모델(RF-DETR) 파인튜닝 파이프라인으로 전격 전환했습니다.</li>
            <li><strong className="text-foreground/80">Data-Centric AI 기반 훈련 리드:</strong> 커스텀 아키텍처 구축에 집착하는 대신, Foundational Model을 수용하고 극도로 부족한 의료 도메인 데이터의 병목을 타개하기 위한 데이터 중심(Data-Centric) 증강 파이프라인 정제에 총력을 기울였습니다.</li>
            <li><strong className="text-foreground/80">오버피팅 방어 및 도메인 특화 증강 구현:</strong> 턱없이 부족한 라벨링 데이터를 만회하기 위해, 점막 표면이 움직이며 왜곡되는 물리적 현상을 반영한 Grid Distortion 및 Elastic Deform 증강 모듈을 도입하고 파인튜닝 스크립트를 최적화했습니다.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-primary rounded-full inline-block"></span> Tech Rationale (기술 채택 의사결정)
          </h4>
          <ul className="list-disc pl-8 space-y-3 text-muted-foreground">
            <li><strong className="text-foreground/80">자체 모델 결함 통찰과 SOTA 채택의 교훈:</strong> 초기 모델링 실패를 통해 "의료 영상 검출 생태계에서는 어설픈 구조적 새로움(Novelty)보다, 가장 최상위 검증력을 갖춘 프레임워크를 도메인에 완벽히 적응(Fine-tuning)시키는 것이 진짜 엔지니어링이다"라는 실전적 확신을 얻고 검증된 글로벌 어텐션(RF-DETR) 구조를 적극 수용했습니다.</li>
            <li><strong className="text-foreground/80">단순 회전/반전이 아닌 기하학적 증강(Distortion)의 이유:</strong> 기본 증강만으로는 점막 내장벽의 질감을 모사할 수 없었습니다. 장벽 자체의 탄력과 왜곡을 반영할 수 있는 Elastic Deform을 채택, 모델이 '동적 빛 반사'에 현혹되지 않고 용종 본연의 형태학적 피처(Feature)를 학습하도록 강제하여 +7% mAP 향상을 유도했습니다.</li>
          </ul>
        </div>
      </div>
    ),
    highlights: ["mAP 7% 향상 달성", "22 FPS 실시간 추론", "End-to-end 인터페이스 배포", "캡스톤 대상(금상)"],
    tags: ["Python", "PyTorch", "RF-DETR", "DINOv2", "Computer Vision"],
    gradient: "from-blue-500/10 to-indigo-500/10",
    videoUrl: "https://www.youtube.com/embed/n6xKcYq7bWE",
    images: [
      { src: "/images/rf_detr_aug.png", caption: "다양한 장 내 환경 모사를 위한 Elastic Deform 및 Grid Distortion 데이터 증강 기법 적용" },
      { src: "/images/rf_detr_gold.jpg", caption: "🏆 금상 (대상) — 제17회 건양대학교 캡스톤디자인 경진대회" },
      { src: "/images/rf_detr_bronze.jpg", caption: "🏆 동상 — 전국 공학교육혁신 컨소시엄 창의적 종합설계 경진대회" }
    ],
    githubUrl: "https://github.com/anjin0910-afk/RF-DETR-project",
    hasAwards: true,
  },
  {
    icon: LineChart,
    title: "Lumina Capital: 퀀트 투자 분석 대시보드",
    description: "방대한 실시간 금융 데이터 및 기술적 지표를 집계하는 풀스택 데이터 기반 금융 대시보드입니다. 퀀트 기반 상태 관리(State Management) 로직과 매핑되는 백엔드 자동 데이터 수집 레이어를 설계하여 개인화된 알고리즘 투자 프로파일을 매끄럽게 렌더링합니다.",
    longDescription: (
      <div className="space-y-6 text-base text-foreground/90">
        <div className="bg-muted/30 p-4 rounded-xl border border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div><strong className="text-foreground">기간 및 규모:</strong> 2026.02 (Team Project, 6인)</div>
            <div><strong className="text-foreground">역할:</strong> Data Pipeline & Full-Stack Architect</div>
            <div className="md:col-span-2"><strong className="text-foreground">기술 스택:</strong> Python, Streamlit, MySQL, BeautifulSoup4, pykrx, Seaborn</div>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-primary rounded-full inline-block"></span> Impact & Contribution
          </h4>
          <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/10 ml-4">
            <h5 className="font-semibold text-orange-500 mb-2 flex items-center gap-2">⚡ DB 타임아웃 붕괴 0% 달성 및 렌더 딜레이 타파</h5>
            <p className="text-sm leading-relaxed text-foreground/80">
              과다 접속 트래픽 중 동기식 스크래핑으로 인해 유발되는 심각한 렌더 대기 시간 문제를 식별하고, 로컬 캐시를 경유하는 1시간 단위 비동기(Asynchronous) CRON 아키텍처로 스크래핑 체계를 전면 교체하여 타임 아웃을 근절했습니다.
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-primary rounded-full inline-block"></span> What I Did (주요 수행 업무)
          </h4>
          <ul className="list-disc pl-8 space-y-2 text-muted-foreground">
            <li><strong className="text-foreground/80">백엔드 아키텍처 및 크롤링 파이프라인 설계:</strong> 파편화된 외부 투자 데이터를 자율 스케줄러로 실시간 폴링하고 안전하게 정규화된 형태의 데이터베이스로 적재 및 영속화하는 백그라운드 DAQ 계층 개발.</li>
            <li><strong className="text-foreground/80">다단계 풀스택 통합 인터페이스 연동:</strong> 알고리즘 Risk Scoring 연산 결과를 다단계 사용자 설문 뷰와 빈틈없이 매핑시켜, 완전히 개인화된 맞춤형 핀테크 시그널 대시보드로 플로우 제어 수행.</li>
            <li><strong className="text-foreground/80">시스템 렌더링 병목 트러블슈팅:</strong> 트래픽 스파이크 시 필연적으로 동반되는 치명적 동기식 렌더 지연 및 API 타임아웃 오류 병목 원인을 진단하고 인프라 교체 전격 시행.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-primary rounded-full inline-block"></span> Tech Rationale (기술 채택 의사결정)
          </h4>
          <ul className="list-disc pl-8 space-y-3 text-muted-foreground">
            <li><strong className="text-foreground/80">동기식 스크래핑에서 비동기 CRON 캐싱으로 구조 상향:</strong> 다중 웹 요청 시점마다 라이브 스크래핑을 일으키면 타겟 서버 측에서 의심 요청으로 판단해 강력한 통신 드랍을 유발했습니다. 이를 막기 위해 웹 접속자는 단지 빠르게 구축된 로컬망 DB를 조회할 수 있도록 '서버 내부에서만 1시간 단위 비동기 백그라운드 캐시 최적화' 구조로 아키텍처를 뒤집어 API 타임아웃 지표를 0% 근처로 타파했습니다.</li>
            <li><strong className="text-foreground/80">Streamlit session_state 기반 캐시-락(Cache-lock) 적용:</strong> 복잡한 금융 설문 로직 상 화면 상태가 핫 로딩될 때마다 사용자가 입력 중이던 데이터가 증발하는 치명적인 Streamlit UI 결함이 잦았습니다. 이를 원초적인 영구 세션 잠금(Cache-lock) 테크닉으로 제어함으로써 복합적인 데이터 업데이트 속에서도 매끄러운 UX 진행을 통제해 냈습니다.</li>
          </ul>
        </div>
      </div>
    ),
    highlights: ["풀스택 아키텍처 구축", "비동기(Asynchronous) DAQ", "지표기반 상태 관리 설계"],
    tags: ["Python", "Streamlit", "MySQL", "BeautifulSoup4", "pykrx", "Seaborn"],
    gradient: "from-amber-500/10 to-orange-500/10",
    images: [
      { src: "/images/lumina_dashboard.png", caption: "관리자를 위한 실시간 시장 집계 프론트엔드 뷰" },
      { src: "/images/lumina_signup.png", caption: "암호화를 거친 안전한 사용자 인증 및 세션 관리 체계" },
      { src: "/images/lumina_terms.png", caption: "초보자를 위해 제공되는 인터랙티브 금융 용어 사전 인터페이스" },
      { src: "/images/lumina_survey.png", caption: "사용자 페르소나를 측정하는 다단계 자동화 투자 프로파일링" },
      { src: "/images/lumina_chart.png", caption: "시계열 캔들스틱 분석 및 AI 알고리즘 기반 가격 시각화 엔진" },
      { src: "/images/lumina_news.png", caption: "시장에 흐르는 주요 소식을 포착하는 비동기 실시간 뉴스 수집 파이프라인" },
      { src: "/images/lumina_newsletter.png", caption: "투자자의 성향과 일치하는 맞춤형 뉴스레터 인텔리전스 발송 시스템" }
    ],
    githubUrl: "https://github.com/kimgeon0802/1team_mini_PJT",
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

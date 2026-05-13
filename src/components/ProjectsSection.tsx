import { useState } from "react";
import ScrollAnimator from "./ScrollAnimator";
import { Microscope, Eye, LineChart, ArrowUpRight, X, Server, ShieldCheck } from "lucide-react";
import Mermaid from "./Mermaid";

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
    title: "[티켓 에스크로 도메인] 실시간 고빈도 트랜잭션 DB I/O 80% 절감 및 동시성 제어",
    description: "에스크로 상태 전이와 다자간 실시간 채팅이 동시다발적으로 발생하는 환경에서, STOMP 기반 메시지 브로커를 도입하여 불필요한 API Polling을 제거하고 DB I/O 부하를 80% 절감한 프로젝트입니다.",
    longDescription: (
      <div className="space-y-6 text-base text-foreground/90">
        <div className="bg-muted/30 p-4 rounded-xl border border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="md:col-span-2"><strong className="text-foreground">문제 해결 기술 스택:</strong> Spring Boot, WebSockets (STOMP), JPA, MySQL</div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-slate-500 rounded-full inline-block"></span> Problem (문제 상황)
          </h4>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            에스크로 상태 전이와 다자간 실시간 채팅이 동시다발적으로 발생하는 환경에서, 단순 API Polling 방식은 막대한 DB 병목과 서버 오버헤드를 유발했습니다.
          </p>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span> Action (해결 과정)
          </h4>
          <ul className="list-disc pl-8 space-y-3 text-muted-foreground">
            <li>TCP 연결 기반의 양방향 통신망과 Publish-Subscribe 패턴의 메시지 브로커(STOMP) 계층을 도입했습니다.</li>
            <li>30초 지연 분산 오프로딩(Off-loading)을 설계하여 트랜잭션과 실시간 상태 전이를 효과적으로 분리했습니다.</li>
            <li>Spring Boot와 JPA를 활용해 트랜잭션의 철저한 상태 일관성과 롤백 통제를 보장했습니다.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-emerald-500 rounded-full inline-block"></span> Result (해결 결과)
          </h4>
          <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10 ml-4">
            <ul className="list-disc pl-4 space-y-2 text-sm leading-relaxed text-foreground/80">
              <li>불필요한 서버 폴링을 제거하여 DB I/O 부하를 80% 이상 혁신적으로 절감하였습니다.</li>
              <li>타 클라이언트의 상태 전이를 0.1초 지연 없이 브로드캐스팅해 냈습니다.</li>
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-indigo-500 rounded-full inline-block"></span> Architecture Sequence
          </h4>
          <Mermaid chart={`sequenceDiagram
    autonumber
    
    participant Client as Client (Web/App)
    participant Broker as STOMP Broker (WS)
    participant Spring as Spring Boot Server
    participant DB as MySQL (JPA)

    rect rgb(241, 245, 249)
        note right of Client: 1. TCP/WebSocket 연결 유지
        Client->>Broker: Subscribe /topic/escrow/{id}
    end
    
    rect rgb(248, 250, 252)
        Client->>Spring: Send Transaction
        Spring->>DB: UPDATE Escrow State
        DB-->>Spring: Tx Commit
        
        note right of Spring: 2. No DB Polling, Broadcast Event
        Spring->>Broker: Publish Event (Escrow Transferred)
    end
    
    rect rgb(241, 245, 249)
        Broker-->>Client: Broadcast State Change (Latency < 0.1s)
        note right of Client: 3. UI 즉시 렌더링
    end`} />
        </div>
      </div>
    ),
    highlights: ["DB I/O 80% 절감", "STOMP 브로커 연동", "지연시간 < 0.1초"],
    tags: ["Spring Boot", "WebSockets", "JPA", "MySQL"],
    gradient: "from-emerald-500/10 to-teal-500/10",
    githubUrl: "https://github.com/Rookies5-MiniPj2-Team5",
    images: [
      { src: "https://github.com/user-attachments/assets/6bb97012-44c6-451d-9990-97fee92362c9", caption: "에스크로 기반 안전한 1:1 티켓 양도 및 거래 상태 관리" },
      { src: "https://github.com/user-attachments/assets/56a4fab8-effd-448b-9f43-319d185d548a", caption: "WebSocket · STOMP 기반 실시간 1:1 및 그룹 채팅" }
    ],
    hasAwards: false,
  },
  {
    icon: LineChart,
    title: "[금융 시그널 도메인] 트래픽 스파이크 시 API 타임아웃 0% 달성을 위한 비동기 파이프라인 구축",
    description: "동기식 스크래핑으로 인한 타겟 서버 차단과 렌더 지연을 해결하기 위해 자율 스케줄러 기반 비동기 수집 파이프라인과 Cache-lock을 적용한 프로젝트입니다.",
    longDescription: (
      <div className="space-y-6 text-base text-foreground/90">
        <div className="bg-muted/30 p-4 rounded-xl border border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="md:col-span-2"><strong className="text-foreground">문제 해결 기술 스택:</strong> Python, BeautifulSoup4, Streamlit (session_state)</div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-slate-500 rounded-full inline-block"></span> Problem (문제 상황)
          </h4>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            다중 접속 시 외부 금융 데이터 API에 동기식 라이브 스크래핑을 요청하면서 타겟 서버의 IP Block과 심각한 API 타임아웃이 발생했습니다. 또한, Streamlit 핫 로딩으로 사용자의 데이터가 증발하는 결함이 있었습니다.
          </p>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span> Action (해결 과정)
          </h4>
          <ul className="list-disc pl-8 space-y-3 text-muted-foreground">
            <li><strong>비동기 캐싱 구조 도입:</strong> 외부 스크래핑을 유저 요청(동기)과 분리하여, 자율 스케줄러를 통한 1시간 단위 비동기 수집(DAQ)을 수행하도록 아키텍처를 뒤집었습니다.</li>
            <li><strong>영구 세션 잠금(Cache-lock):</strong> Streamlit의 <code>session_state</code>를 활용하여 화면이 재랜더링 되더라도 사용자의 데이터 입력 상태를 영속적으로 보존했습니다.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-emerald-500 rounded-full inline-block"></span> Result (해결 결과)
          </h4>
          <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/10 ml-4">
            <ul className="list-disc pl-4 space-y-2 text-sm leading-relaxed text-foreground/80">
              <li>트래픽 집중 시 렌더 대기 시간을 극적으로 단축시켰습니다.</li>
              <li>DB 타임아웃 오류 발생 확률을 0%에 가깝게 완벽히 방어했습니다.</li>
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-indigo-500 rounded-full inline-block"></span> Data Flow
          </h4>
          <Mermaid chart={`flowchart LR
    subgraph Background [자율 스케줄러 비동기 수집]
        Ext(🌐 External API) -->|1. Async Request| DAQ(⏱️ DAQ Scheduler)
        DAQ -->|2. Data Normalization| DB[(🗄️ Local DB)]
    end

    subgraph UserSession [사용자 세션 영역]
        User(👤 User Client) -->|3. Fast Query| DB
        User -->|4. session_state| Lock(🔒 Cache-Lock Guard)
    end
    
    style Background fill:#f8fafc,stroke:#cbd5e1,stroke-width:2px
    style UserSession fill:#f8fafc,stroke:#cbd5e1,stroke-width:2px`} />
        </div>
      </div>
    ),
    highlights: ["API 타임아웃 0%", "비동기 캐싱 구조", "session_state 세션 락"],
    tags: ["Python", "Streamlit", "BeautifulSoup4"],
    gradient: "from-amber-500/10 to-orange-500/10",
    images: [
      { src: "/images/lumina_survey.png", caption: "사용자 페르소나를 측정하는 다단계 자동화 투자 프로파일링" },
      { src: "/images/lumina_chart.png", caption: "시계열 캔들스틱 분석 및 가격 시각화 엔진" }
    ],
    githubUrl: "https://github.com/kimgeon0802/1team_mini_PJT",
    hasAwards: false,
  },
  {
    icon: ShieldCheck,
    title: "[알고리즘 트레이딩 도메인] Fail-safe 기반 중복 주문 차단 및 매매 안전장치 고도화",
    description: "불확실한 상태에서의 신규 매수를 막아 자본 손실 취약점을 해결하고, 주문 직전 방어선(Guard) 구축으로 '잘못된 주문 0건'을 보장하는 자동매매 안전 시스템 프로젝트입니다.",
    longDescription: (
      <div className="space-y-6 text-base text-foreground/90">
        <div className="bg-muted/30 p-4 rounded-xl border border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="md:col-span-2"><strong className="text-foreground">문제 해결 기술 스택:</strong> Python, KIS Open API, PyTest, 객체 지향 상태 관리</div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-slate-500 rounded-full inline-block"></span> Problem (문제 상황)
          </h4>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            자동매매 시스템에서 계좌 상태 파악에 실패하거나 이전 주문이 미체결된 불확실한 상태에서 신규 매수가 발생할 경우, 자본의 막대한 손실로 이어질 수 있는 치명적인 취약점이 존재했습니다.
          </p>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span> Action (해결 과정)
          </h4>
          <ul className="list-disc pl-8 space-y-3 text-muted-foreground">
            <li><strong>주문 추적 Guard 배치:</strong> 단일 주문 한도와 일일 손실 한도, 그리고 동일 종목 미체결 주문 여부를 Broker API 호출 직전에 다시 확인하는 방어선을 구축했습니다.</li>
            <li><strong>Fail-safe 우선 설계:</strong> 계좌 평가금액 조회 실패 시 신규 매수 수량을 즉시 0으로 처리하고, <code>ENABLE_REAL_TRADING</code> 플래그 누락 시 매수를 원천 차단하되 '청산 목적 매도'는 별도 허용 플래그로 분리했습니다.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-emerald-500 rounded-full inline-block"></span> Result (해결 결과)
          </h4>
          <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/10 ml-4">
            <ul className="list-disc pl-4 space-y-2 text-sm leading-relaxed text-foreground/80">
              <li>수익률 최적화 이전에 '잘못된 주문 발생 0건'을 보장하는 고도의 안전성을 확보했습니다.</li>
              <li>실제 API 비호출 검증 및 monkeypatch 테스트로 설계의 안정성을 입증했습니다.</li>
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-indigo-500 rounded-full inline-block"></span> Guard Flow
          </h4>
          <Mermaid chart={`flowchart TD
    classDef node fill:#eff6ff,stroke:#3b82f6,stroke-width:2px,color:#1e293b
    classDef error fill:#fef2f2,stroke:#ef4444,stroke-width:2px,color:#7f1d1d
    classDef success fill:#f0fdf4,stroke:#22c55e,stroke-width:2px,color:#14532d

    A(🚀 Order Request Trigger):::node --> B{🛡️ 1. Real Trading Flag?}:::node
    
    B -- Missing/False --> C(🚫 Block Buy & Allow Exit Sell Only):::error
    B -- Enabled --> D{🛡️ 2. Check Pending Orders}:::node
    
    D -- Exists --> E(🚫 Block Duplicate Order):::error
    D -- Clear --> F{🛡️ 3. Account Balance Check}:::node
    
    F -- API Fail/Timeout --> G(🚫 Set Buy Qty to 0):::error
    F -- Success --> H(✅ Execute KIS API Order):::success
    
    subgraph Guard [Fail-safe Guard Pipeline]
        B
        D
        F
    end
    style Guard fill:#f8fafc,stroke:#cbd5e1,stroke-width:2px`} />
        </div>
      </div>
    ),
    highlights: ["Fail-safe 설계", "중복 주문 차단", "실전투자 Kill Switch"],
    tags: ["Python", "KIS Open API", "PyTest", "Risk Control"],
    gradient: "from-cyan-500/10 to-blue-500/10",
    hasAwards: false,
  },
  {
    icon: Microscope,
    title: "[의료 엣지 비전 도메인] 조명 왜곡 환경 극복 및 mAP 7% 향상 실시간 객체 탐지 시스템",
    description: "내장벽의 점막 왜곡을 보완하기 위해 Data-Centric 증강(Elastic Deform)과 SOTA 아키텍처 피봇팅을 단행해 엣지 환경에서 실시간 22+ FPS를 달성한 비전 파이프라인입니다.",
    longDescription: (
      <div className="space-y-6 text-base text-foreground/90">
        <div className="bg-muted/30 p-4 rounded-xl border border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="md:col-span-2"><strong className="text-foreground">문제 해결 기술 스택:</strong> PyTorch, RF-DETR, Data-Centric AI (Elastic Deform)</div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-slate-500 rounded-full inline-block"></span> Problem (문제 상황)
          </h4>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            내시경 점막 표면의 동적 빛 반사와 왜곡된 물리적 현상으로 인해, 자체 구축한 퓨전 모델(CenterNet+RetinaNet)이 정확도 한계와 오버피팅에 직면했습니다.
          </p>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span> Action (해결 과정)
          </h4>
          <ul className="list-disc pl-8 space-y-3 text-muted-foreground">
            <li><strong>아키텍처 피봇팅:</strong> 독자적 구조 설계에 대한 집착을 버리고, 검증된 SOTA 어텐션 기반 모델인 RF-DETR 파인튜닝으로 전격 전환했습니다.</li>
            <li><strong>Data-Centric AI:</strong> 단순 회전/반전이 아닌, 내장벽의 질감을 모사하는 <code>Elastic Deform</code>과 <code>Grid Distortion</code> 등의 기하학적 증강 모듈을 전격 도입하여 형태학적 피처 학습을 유도했습니다.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-emerald-500 rounded-full inline-block"></span> Result (해결 결과)
          </h4>
          <div className="p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/10 ml-4">
            <ul className="list-disc pl-4 space-y-2 text-sm leading-relaxed text-foreground/80">
              <li>기존 베이스라인 대비 +7% mAP 정밀도 상승을 이뤄냈습니다.</li>
              <li>가중치 제약 통제를 통해 엣지 환경에서 병목 없는 22+ FPS 영상 쓰루풋을 입증했습니다. (🏆 제17회 캡스톤디자인 대상 수상)</li>
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-indigo-500 rounded-full inline-block"></span> Pipeline Flow
          </h4>
          <Mermaid chart={`flowchart TD
    classDef data fill:#f8fafc,stroke:#64748b,stroke-width:2px,color:#0f172a
    classDef aug fill:#fff7ed,stroke:#ea580c,stroke-width:2px,color:#7c2d12
    classDef model fill:#eff6ff,stroke:#2563eb,stroke-width:2px,color:#1e3a8a
    classDef result fill:#ecfdf5,stroke:#059669,stroke-width:2px,color:#064e3b

    Raw(📸 Raw Endoscopy Data):::data
    
    subgraph Aug [🧬 Data-Centric Augmentation]
        E(Elastic Deform):::aug
        G(Grid Distortion):::aug
    end
    
    Raw -->|1. 점막 질감 모사| E
    Raw -->|1. 점막 질감 모사| G
    
    E -->|2. 강화된 피처| RF(🧠 RF-DETR SOTA Model):::model
    G -->|2. 강화된 피처| RF
    
    RF -->|3. Edge Inference| Detect(🎯 Robust Polyp Detection - mAP +7% / 22+ FPS):::result
    
    style Aug fill:#f8fafc,stroke:#cbd5e1,stroke-width:2px`} />
        </div>
      </div>
    ),
    highlights: ["mAP 7% 향상", "Data-Centric 증강", "22+ FPS 추론", "캡스톤 대상"],
    tags: ["PyTorch", "RF-DETR", "Data-Centric AI", "Computer Vision"],
    gradient: "from-blue-500/10 to-indigo-500/10",
    videoUrl: "https://www.youtube.com/embed/n6xKcYq7bWE",
    githubUrl: "https://github.com/anjin0910-afk/RF-DETR-project",
    images: [
      { src: "/images/rf_detr_aug.png", caption: "다양한 장 내 환경 모사를 위한 Elastic Deform 및 Grid Distortion 데이터 증강 기법 적용" },
      { src: "/images/rf_detr_gold.jpg", caption: "🏆 금상 (대상) — 제17회 건양대학교 캡스톤디자인 경진대회" }
    ],
    hasAwards: true,
  },
  {
    icon: Eye,
    title: "[비지도 의료 검출 도메인] 라벨링 없이 병변을 탐지하는 재구성 오차 기반 검출 파이프라인",
    description: "라벨링 데이터 부재라는 한계를 극복하기 위해, 정상 조직 데이터 기반 VAE 설계 및 수학적 재구성 오차 동적 마스킹을 개발한 비지도 검출 시스템입니다.",
    longDescription: (
      <div className="space-y-6 text-base text-foreground/90">
        <div className="bg-muted/30 p-4 rounded-xl border border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="md:col-span-2"><strong className="text-foreground">문제 해결 기술 스택:</strong> TensorFlow, VAE (Variational AutoEncoder), 차영상 오차 함수</div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-slate-500 rounded-full inline-block"></span> Problem (문제 상황)
          </h4>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            의료 환경에서 악성 종양에 대해 철저히 라벨링(Label)된 정답 데이터를 대량 수급하는 것은 천문학적 자본과 데이터 편향을 발생시킵니다.
          </p>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span> Action (해결 과정)
          </h4>
          <ul className="list-disc pl-8 space-y-3 text-muted-foreground">
            <li><strong>비지도 학습 인프라 구축:</strong> 구하기 쉬운 '건강한 정상 조직 이미지'만으로 정상 토폴로지를 인코딩 및 시각화하는 VAE 프레임워크를 설계했습니다.</li>
            <li><strong>수학적 차영상 및 동적 임계값:</strong> 환자 데이터와 모델의 '정상 예측 결과' 간의 재구성 오차(Reconstruction Error)를 연산하고, 1차원적 하드코딩 마스킹 대신 픽셀 분포 비율을 실시간 계산하는 '동적 노이즈 클리닝' 로직을 자체 개발했습니다.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-emerald-500 rounded-full inline-block"></span> Result (해결 결과)
          </h4>
          <div className="p-4 rounded-xl bg-violet-500/5 border border-violet-500/10 ml-4">
            <ul className="list-disc pl-4 space-y-2 text-sm leading-relaxed text-foreground/80">
              <li>값비싼 라벨링 데이터 없이도 알고리즘 분할 정밀도를 상시 90% (Dice Coefficient) 수준으로 안정화했습니다.</li>
              <li>노이즈 오탐지율을 대폭 하향 조정하며, 비지도 의료 검출의 가능성을 입증하여 공학혁신상을 수상했습니다.</li>
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-indigo-500 rounded-full inline-block"></span> Architecture
          </h4>
          <Mermaid chart={`flowchart TD
    classDef data fill:#f8fafc,stroke:#475569,stroke-width:2px,color:#0f172a
    classDef train fill:#eff6ff,stroke:#3b82f6,stroke-width:2px,color:#1e3a8a
    classDef infer fill:#f5f3ff,stroke:#8b5cf6,stroke-width:2px,color:#4c1d95
    classDef core fill:#fff1f2,stroke:#e11d48,stroke-width:2px,color:#9f1239
    classDef result fill:#ecfdf5,stroke:#10b981,stroke-width:2px,color:#064e3b

    subgraph Phase1 [Phase 1: 비지도 학습 모델 구축]
        Norm(🟢 Normal Tissue Data):::data -->|1. Train| VAE_T(🧠 Train VAE Model):::train
        VAE_T -->|2. Encode Topology| Topo(🌐 Learn Normal Topology):::train
    end

    subgraph Phase2 [Phase 2: 환자 데이터 추론 및 오차 검출]
        Pat(🔴 Patient Scan Data):::data -->|3. Input| VAE_I(🧠 VAE Inference):::infer
        VAE_I -->|4. Reconstruct| Recon(💡 Reconstructed Normal Image):::infer
        
        Pat -->|5. Diff| Diff{⚖️ Reconstruction Error}:::core
        Recon -->|5. Diff| Diff
        
        Diff -->|6. 통계적 오차 분석| Mask(🛠️ Dynamic Threshold Masking):::core
        Mask -->|7. Anomaly Isolated| BBox(🎯 Anomaly Bounding Box):::result
    end
    
    Topo -.->|Weights| VAE_I
    
    style Phase1 fill:#f8fafc,stroke:#cbd5e1,stroke-width:2px
    style Phase2 fill:#f8fafc,stroke:#cbd5e1,stroke-width:2px`} />
        </div>
      </div>
    ),
    highlights: ["동적 임계값 노이즈 제거", "Dice Coef 90% 달성", "비지도 학습 모델 구축"],
    tags: ["TensorFlow", "VAE", "Unsupervised Learning"],
    gradient: "from-violet-500/10 to-purple-500/10",
    images: [
      { src: "/images/vae_threshold.png", caption: "노이즈를 제거하고 정밀한 분할 마스크를 추출하는 동적 임계값 적용" },
      { src: "/images/vae_result.png", caption: "최종 바운딩 박스 생성 및 수치적 신뢰도 스코어링" },
      { src: "/images/vae_award.jpg", caption: "🏆 공학혁신상 (창의혁신 DNA 산학협력 우수사례)" }
    ],
    githubUrl: "https://github.com/anjin0910-afk/vae-breast-cancer-anomaly",
    hasAwards: true,
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
                className="minimal-card-accent group cursor-pointer flex flex-col h-full"
                style={{ transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s ease" }}
                onClick={() => setSelectedProject(project)}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 48px rgba(0,0,0,0.13), 0 0 0 1px hsl(220 70% 50% / 0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "";
                }}
              >
                {/* Gradient header area */}
                <div className={`bg-gradient-to-br ${project.gradient} p-8 pb-6`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="icon-container">
                      <project.icon size={22} />
                    </div>
                    <ArrowUpRight size={20} strokeWidth={2.5} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground leading-snug">{project.title}</h3>
                </div>

                {/* Content */}
                <div className="p-8 pt-5 flex flex-col flex-1 justify-between">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{project.description}</p>

                  <div>
                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.highlights.map((h) => (
                        <span key={h} className="inline-flex items-center gap-1 text-xs font-semibold text-primary bg-primary/8 px-2.5 py-1 rounded-md">
                          ✦ {h}
                        </span>
                      ))}
                    </div>

                    {/* Tags - static, non-clickable */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tech-tag">{tag}</span>
                      ))}
                    </div>
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

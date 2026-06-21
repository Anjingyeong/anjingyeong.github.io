import { useState } from "react";
import ScrollAnimator from "./ScrollAnimator";
import { Microscope, Eye, ArrowUpRight, X, Shield } from "lucide-react";
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
    icon: Microscope,
    title: "[의료 엣지 비전 도메인] RF-DETR 기반 실시간 대장 내 용종 검출 시스템",
    description: "내장벽의 점막 왜곡을 보완하기 위해 Data-Centric 증강(Elastic Deform)과 SOTA 아키텍처 피봇팅을 단행해 엣지 환경에서 실시간 22+ FPS를 달성한 비전 파이프라인입니다.",
    longDescription: (
      <div className="space-y-6 text-base text-foreground/90">
        <div className="bg-muted/30 p-4 rounded-xl border border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div><strong className="text-foreground">기간:</strong> 2025.03 ~ 2025.11</div>
            <div className="md:col-span-2"><strong className="text-foreground">역할:</strong> 모델 실험, 데이터 증강 파이프라인 설계, 모델 경량화 및 추론 검증</div>
            <div className="md:col-span-2"><strong className="text-foreground">기술 스택:</strong> Python, PyTorch, RF-DETR, DINOv2, OpenCV</div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-slate-500 rounded-full inline-block"></span> Situation / Problem
          </h4>
          <ul className="list-disc pl-8 space-y-2 text-muted-foreground">
            <li>대장 내시경 영상은 조명 변화, 반사광, 장벽 왜곡, 병변 형태 다양성으로 인해 일반 객체 탐지 모델만으로는 용종 검출 정확도가 낮아지는 문제가 있었습니다.</li>
            <li>실제 의료 환경 적용을 고려하면 고성능 서버가 아닌 <strong>Edge 환경</strong>에서도 실시간 추론이 가능해야 했기 때문에, 정확도와 속도를 동시에 확보해야 했습니다.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span> Approach / Task
          </h4>
          <ul className="list-disc pl-8 space-y-2 text-muted-foreground">
            <li>단순히 더 큰 모델을 사용하는 방식이 아니라, 의료 영상의 비정형 왜곡은 데이터 단계에서 보완하고, Edge 제약은 모델 경량화로 해결하는 방향을 선택했습니다.</li>
            <li><strong>PyTorch</strong>, <strong>RF-DETR</strong>, <strong>DINOv2</strong> 기반 특징 표현을 활용해 파인튜닝 실험을 수행했습니다.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-orange-500 rounded-full inline-block"></span> Action
          </h4>
          <ul className="list-disc pl-8 space-y-3 text-muted-foreground">
            <li>내시경 시야 변화와 장벽 굴곡을 반영하기 위해 <strong>Grid Distortion</strong>, <strong>Elastic Deform</strong> 기반 기하학적 데이터 증강 파이프라인을 설계했습니다.</li>
            <li>Edge 환경의 연산 리소스 제약을 고려해 <strong>Structural Pruning</strong>을 적용하여 불필요한 파라미터와 연산량을 줄였습니다.</li>
            <li><strong>OpenCV</strong> 기반 후처리 및 추론 시각화 흐름을 구성해 실제 영상 입력에서 탐지 결과를 검증했습니다.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-emerald-500 rounded-full inline-block"></span> Result
          </h4>
          <div className="p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/10 ml-4">
            <ul className="list-disc pl-4 space-y-2 text-sm leading-relaxed text-foreground/80">
              <li>베이스라인 대비 <strong>mAP 약 7%p 개선</strong>.</li>
              <li>저사양 Edge 환경에서 <strong>22 FPS 이상</strong>의 실시간 추론 성능 확보.</li>
              <li>제17회 건양대학교 캡스톤디자인 경진대회 <strong>금상</strong>, 전국 공학교육혁신 컨소시엄 창의적 종합설계 경진대회 <strong>동상</strong> 수상.</li>
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
    highlights: ["mAP 약 7%p 개선", "22+ FPS 추론", "건양대 금상 수상"],
    tags: ["PyTorch", "RF-DETR", "Data-Centric AI", "Computer Vision"],
    gradient: "from-blue-500/10 to-indigo-500/10",
    videoUrl: "https://www.youtube.com/embed/n6xKcYq7bWE",
    githubUrl: "https://github.com/Anjingyeong/RF-DETR-project",
    images: [
      { src: "/images/rf_detr_aug.png", caption: "다양한 장 내 환경 모사를 위한 Elastic Deform 및 Grid Distortion 데이터 증강 기법 적용" },
      { src: "/images/rf_detr_gold.jpg", caption: "🏆 금상 — 제17회 건양대학교 캡스톤디자인 경진대회" }
    ],
    hasAwards: true,
  },
  {
    icon: Eye,
    title: "[비지도 의료 검출 도메인] VAE 기반 비지도 학습 유방암 병변 검출 시스템",
    description: "라벨링 데이터 부재라는 한계를 극복하기 위해, 정상 조직 데이터 기반 VAE 설계 및 수학적 재구성 오차 동적 마스킹을 개발한 비지도 검출 시스템입니다.",
    longDescription: (
      <div className="space-y-6 text-base text-foreground/90">
        <div className="bg-muted/30 p-4 rounded-xl border border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div><strong className="text-foreground">기간:</strong> 2024.03 ~ 2024.10</div>
            <div className="md:col-span-2"><strong className="text-foreground">역할:</strong> 이상 탐지 파이프라인 설계, 커스텀 손실 함수 구현, 재구성 오차 기반 후처리</div>
            <div className="md:col-span-2"><strong className="text-foreground">기술 스택:</strong> Python, TensorFlow, VAE (Variational AutoEncoder), 차영상 오차 함수</div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-slate-500 rounded-full inline-block"></span> Situation / Problem
          </h4>
          <ul className="list-disc pl-8 space-y-2 text-muted-foreground">
            <li>유방 초음파 영상은 전문가가 병변 경계를 직접 주석 처리해야 하므로 라벨링 비용이 높고, 충분한 정답 데이터를 확보하기 어려웠습니다.</li>
            <li>병변과 정상 조직의 차이가 미세해 단순 분류나 일반적인 지도학습 segmentation 방식만으로는 안정적인 병변 후보 검출에 한계가 있었습니다.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span> Approach / Task
          </h4>
          <ul className="list-disc pl-8 space-y-2 text-muted-foreground">
            <li>병변 라벨을 대량으로 확보하는 방식 대신, 정상 조직 분포를 먼저 학습한 뒤 정상 패턴에서 벗어나는 영역을 병변 후보로 탐지하는 <strong>비지도 이상 탐지</strong> 방식으로 문제를 재정의했습니다.</li>
            <li><strong>TensorFlow</strong> 저수준 API를 활용해 <strong>β-VAE</strong> 기반 학습 구조를 설계했습니다.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-orange-500 rounded-full inline-block"></span> Action
          </h4>
          <ul className="list-disc pl-8 space-y-3 text-muted-foreground">
            <li>정상 조직 영상을 잠재 공간으로 압축한 뒤 복원하는 <strong>β-VAE</strong> 학습 파이프라인을 구성했습니다.</li>
            <li>정상 분포를 제어하는 <strong>KLD</strong> 항과 이미지 재구성 품질을 결정하는 <strong>MSE</strong> 항의 균형이 병변 검출 성능에 중요하다고 판단하여, 두 손실 항의 텐서 가중치를 조절하는 <strong>커스텀 Loss Function</strong>을 구현했습니다.</li>
            <li>입력 이미지와 재구성 이미지의 차이를 계산해 <strong>Reconstruction Error Map</strong>을 생성했습니다.</li>
            <li>영상별 밝기와 노이즈 편차를 보정하기 위해 <strong>Dynamic Threshold</strong> 기반 후처리 로직을 적용했습니다.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-emerald-500 rounded-full inline-block"></span> Result
          </h4>
          <div className="p-4 rounded-xl bg-violet-500/5 border border-violet-500/10 ml-4">
            <ul className="list-disc pl-4 space-y-2 text-sm leading-relaxed text-foreground/80">
              <li>라벨이 없는 환경에서도 <strong>Dice Coefficient 약 90% 수준</strong>의 병변 분할 및 검출 성능 달성.</li>
              <li>산업통상자원부 장관 주관 <strong>공학혁신상</strong> 수상.</li>
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
    githubUrl: "https://github.com/Anjingyeong/vae-breast-cancer-anomaly",
    hasAwards: true,
  },
  {
    icon: Shield,
    title: "[지능형 관제 도메인] SK쉴더스 AI 기반 스마트 안전 관제 시스템",
    description: "CCTV 실시간 스트림(RTSP)에서 AI가 이상행동을 감지하고, MQTT와 WebSocket으로 실시간 경보를 전송하는 지능형 안전 관제 시스템입니다.",
    longDescription: (
      <div className="space-y-6 text-base text-foreground/90">
        <div className="bg-muted/30 p-4 rounded-xl border border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div><strong className="text-foreground">기간:</strong> 2026.05 ~ 2026.07 (예정)</div>
            <div className="md:col-span-2"><strong className="text-foreground">역할:</strong> 시스템 아키텍처 통합, RTSP 기반 AI 추론 파이프라인 연동, MQTT·WebSocket 이벤트 흐름 설계, Hermes agent·Codex 기반 개발 워크플로우 개선</div>
            <div className="md:col-span-2"><strong className="text-foreground">기술 스택:</strong> Python, FastAPI, Docker, MQTT, WebSockets, RTSP, Hermes Agent, Codex</div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-slate-500 rounded-full inline-block"></span> Situation / Problem
          </h4>
          <ul className="list-disc pl-8 space-y-2 text-muted-foreground">
            <li>해당 프로젝트는 <strong>RTSP</strong> 기반 CCTV 영상을 실시간으로 수신하고, AI 모델이 낙상·실신 등 이상행동을 감지하면 <strong>MQTT</strong>를 통해 백엔드로 이벤트를 전달한 뒤, 프론트엔드 대시보드와 알림 시스템에서 즉시 표시하는 구조입니다.</li>
            <li>프론트엔드, 백엔드, AI 추론 서버, <strong>Docker</strong> 기반 실행 환경이 함께 맞물려야 했기 때문에 API 계약, 포트 구성, 실시간 이벤트 흐름, 배포 환경을 동시에 고려해야 했습니다.</li>
            <li>5인 팀 프로젝트 특성상 반복적인 Boilerplate 코드, Dockerfile 및 Docker Compose 구성, API 연동 초안, 문서 정리에 시간이 많이 소요되어 핵심 서비스 품질 개선에 집중하기 어려운 병목이 있었습니다.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span> Approach / Task
          </h4>
          <ul className="list-disc pl-8 space-y-2 text-muted-foreground">
            <li>저는 팀 내에서 시스템 아키텍처와 연동 흐름을 정리하는 통합자 역할을 맡아, AI 추론 결과가 실제 서비스 이벤트로 이어지는 흐름을 구조화했습니다.</li>
            <li><strong>Hermes agent</strong>와 <strong>Codex</strong>를 단순 코드 생성 도구가 아니라, 작업 목표와 검증 기준을 명확히 정의하는 AI 기반 개발 협업 도구로 활용했습니다.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-orange-500 rounded-full inline-block"></span> Action
          </h4>
          <ul className="list-disc pl-8 space-y-3 text-muted-foreground">
            <li>기능 수정이나 구조 개선 작업을 요청할 때 <strong><code>/goal</code> 기반 프롬프트 구조</strong>를 사용해 작업 목표, 완료 기준, 제약 조건, 검증 명령을 명확히 정의했습니다.</li>
            <li>AI가 생성한 코드는 그대로 반영하지 않고, <strong>RTSP 입력 흐름</strong>, <strong>MQTT 이벤트 전달 구조</strong>, <strong>WebSocket 실시간 알림 구조</strong>, API 계약, 테스트 결과와 충돌하지 않는지 검토한 뒤 적용했습니다.</li>
            <li>반복 구현과 초기 설정은 AI 에이전트를 통해 효율화하고, 팀은 동적 카메라 등록 구조, 실시간 알림 흐름, 비동기 이벤트 처리, 배포 안정화처럼 서비스 품질에 직접 영향을 주는 핵심 아키텍처 설계에 집중할 수 있도록 했습니다.</li>
            <li>이 과정에서 API 계약을 명확히 정리하고, 인프라 설정 병목을 줄여 프론트엔드·백엔드·AI 추론 서버 간 연동 오류를 줄이는 방향으로 개발 흐름을 개선했습니다.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-emerald-500 rounded-full inline-block"></span> Result
          </h4>
          <div className="p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/10 ml-4">
            <ul className="list-disc pl-4 space-y-2 text-sm leading-relaxed text-foreground/80">
              <li>반복 구현과 초기 인프라 설정에 투입되는 시간을 줄이고, 5인 팀이 핵심 서비스 품질 개선에 집중할 수 있는 개발 흐름을 만들었습니다.</li>
              <li><strong>RTSP → AI 추론 → MQTT 이벤트 → 백엔드 저장/브로드캐스트 → WebSocket 알림</strong>으로 이어지는 실시간 관제 파이프라인을 안정적으로 설계·검증하고 있습니다.</li>
              <li>생성형 AI를 단순 질의응답 도구가 아니라, 요구사항 정의·검증 기준·코드 리뷰가 결합된 개발 워크플로우로 활용한 경험을 쌓고 있습니다.</li>
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-indigo-500 rounded-full inline-block"></span> Event Flow
          </h4>
          <Mermaid chart={`flowchart LR
    C(CCTV Stream - RTSP) -->|1. Real-time Frame| AI(🧠 AI Inference Server)
    AI -->|2. Behavior Detected| MQTT(📡 MQTT Broker)
    MQTT -->|3. Publish Event| BE(⚙️ Backend Server)
    BE -->|4. Push Broadcast| WS(💬 WebSocket Client)
    WS -->|5. Instant Alert| Alert(🚨 Security Dashboard)
    
    style AI fill:#eff6ff,stroke:#3b82f6,stroke-width:2px
    style MQTT fill:#fff7ed,stroke:#ea580c,stroke-width:2px
    style WS fill:#fdf4ff,stroke:#d946ef,stroke-width:2px`} />
        </div>
      </div>
    ),
    highlights: ["RTSP 실시간 추론", "MQTT/WebSocket 연동", "AI 에이전트 협업"],
    tags: ["FastAPI", "Docker", "MQTT", "WebSockets", "RTSP"],
    gradient: "from-blue-600/10 to-indigo-600/10",
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

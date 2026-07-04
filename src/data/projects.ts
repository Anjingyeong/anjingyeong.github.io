import type { ElementType } from "react";
import { BarChart2, Brain, Microscope, Shield } from "lucide-react";

// allow: SIZE_OK - portfolio project data table kept together to preserve card/modal ordering.
export type ProjectBadge = "Main" | "Supporting";

export type ProjectGalleryImage = {
  readonly src: string;
  readonly caption: string;
};

export type ProjectDetail = {
  readonly title: string;
  readonly body?: string;
  readonly items?: readonly string[];
  readonly diagram?: string;
  readonly image?: string;
  readonly imageAlt?: string;
  readonly images?: readonly ProjectGalleryImage[];
};

export type Project = {
  readonly icon: ElementType;
  readonly badge: ProjectBadge;
  readonly title: string;
  readonly description: string;
  readonly highlights: readonly string[];
  readonly tags: readonly string[];
  readonly gradient: string;
  readonly githubUrl?: string;
  readonly hasAwards?: boolean;
  readonly details: readonly ProjectDetail[];
};

export const projects: readonly Project[] = [
  {
    icon: Shield,
    badge: "Main",
    title: "스마트 안전 관제 시스템",
    description:
      "CCTV 관제 상황에서 낙상·위험 행동을 빠르게 포착하고, 이벤트 증거와 알림 흐름을 대시보드까지 연결하는 실시간 AI 관제 보조 시스템입니다.",
    highlights: ["대표 프로젝트", "실시간 영상 AI", "이벤트 증거 설계"],
    tags: ["Computer Vision", "YOLO Pose", "LSTM", "MQTT", "WebSocket", "React", "FastAPI", "Docker"],
    gradient: "from-rose-500/10 to-orange-500/10",
    hasAwards: false,
    details: [
      {
        title: "한 줄 소개",
        body: "영상 AI 탐지 결과가 운영자가 판단할 수 있는 알림과 증거로 이어지도록, 모델 추론과 이벤트 전달 구조를 함께 설계한 프로젝트입니다.",
      },
      {
        title: "문제 배경",
        body: "CCTV를 사람이 계속 지켜보는 방식은 사고 순간을 놓치기 쉽고, 단순 탐지 결과만으로는 관제자가 왜 알림이 발생했는지 확인하기 어렵습니다. '낙상 탐지 모델'을 구현하는 문제가 아니라, AI 이벤트가 증거와 함께 관제 화면까지 신뢰성 있게 전달되는 구조가 핵심 과제입니다.",
      },
      {
        title: "RTSP → AI → MQTT → 대시보드 파이프라인",
        diagram: `flowchart LR
    Cam["📷 CCTV / RTSP Stream"] --> MTX["MediaMTX\nStream Relay"]
    MTX --> AI["🧠 AI Inference Server\nrun_registered_cameras.py"]
    AI --> Pose["YOLO Pose\nKeypoints"]
    Pose --> Seq["LSTM Behavior\nClassifier"]
    Seq --> Event["⚡ Event Metadata\nframeId · timestamp · confidence"]
    Event --> MQTT["📡 MQTT Broker\nsafety/events"]
    MQTT --> Backend["⚙️ FastAPI Backend"]
    Backend --> WS["💬 WebSocket\nBroadcast"]
    WS --> Dashboard["🚨 Monitoring\nDashboard"]
    Event --> Evidence["🔍 Evidence Chain\ncameraLoginId · frameId · eventType"]`,
      },
      {
        title: "주요 역할",
        items: [
          "RTSP → MediaMTX → AI 추론 서버 → MQTT safety/events → FastAPI → WebSocket → 대시보드 파이프라인 구조 설계.",
          "탐지 결과가 frameId, timestamp, cameraLoginId, confidence 같은 증거 단서와 함께 전달되도록 Evidence Chain 데이터 흐름을 설계했습니다.",
          "YOLO Pose 기반 자세 추정 + ByteTrack 추적 + LSTM 시계열 행동 분류(낙상·실신) 구조를 프로젝트 AI 파트의 핵심 흐름으로 정리했습니다.",
          "오탐과 미탐을 줄이기 위한 hard negative 후보, faint reinforcement, threshold sweep, tracker 상태 분석 방향을 문서화했습니다.",
        ],
      },
      {
        title: "기술 접근",
        items: [
          "영상 스트림과 이벤트 메타데이터를 같은 경로로 처리하면 overlay 동기화와 알림 상태 관리가 복잡해집니다. MQTT는 event metadata 전파, WebSocket은 대시보드 알림을 담당하도록 분리해 운영 안정성을 높였습니다.",
          "관제 이벤트는 '감지됨'만으로 충분하지 않습니다. incidentAt · frameId · timestamp · cameraId · eventType · severity · confidence 같은 증거가 함께 남아야 오탐/미탐 분석과 사후 검증이 가능합니다.",
          "Hermes Agent · Codex를 목표 · 완료 기준 · 제약 조건 · 검증 명령을 포함한 /goal 구조로 활용해 반복 설정을 자동화했습니다.",
        ],
      },
      {
        title: "결과와 개선점",
        body: "프로젝트의 핵심 가치는 모델 하나를 만드는 데 그치지 않고, 실시간 관제 환경에서 AI 판단이 화면·알림·증거 흐름으로 연결되는 구조를 제시한 점입니다. FPS · latency 등 정량 수치는 검증 완료 후 업데이트 예정입니다.",
      },
      {
        title: "배운 점",
        body: "실시간 AI 서비스에서는 정확도만큼 이벤트 동기화, 설명 가능한 증거, 운영자가 신뢰할 수 있는 알림 흐름이 중요하다는 점을 배웠습니다.",
      },
    ],
  },
  {
    icon: Microscope,
    badge: "Main",
    title: "RF-DETR 기반 대장 내 용종 검출",
    description:
      "대장 내시경 영상의 왜곡과 조명 변화를 데이터 증강으로 보완하고, RF-DETR 기반 탐지 모델을 경량화 관점에서 개선한 의료 비전 프로젝트입니다. mAP 약 7%p 개선, 22+ FPS 달성.",
    highlights: ["mAP 약 7%p 개선", "22+ FPS Edge 추론", "🏆 금상 수상"],
    tags: ["PyTorch", "RF-DETR", "DINOv2", "OpenCV", "Structural Pruning", "Albumentations"],
    gradient: "from-blue-500/10 to-indigo-500/10",
    githubUrl: "https://github.com/Anjingyeong/RF-DETR-project",
    hasAwards: true,
    details: [
      {
        title: "프로젝트 소개",
        body: "대장 내시경 영상에서 용종 후보를 빠르게 찾기 위해 RF-DETR 기반 객체 탐지 모델을 학습하고, 의료 영상 특성에 맞는 데이터 증강과 추론 속도 개선을 적용했습니다. 더 큰 모델 대신, 의료 영상 왜곡은 데이터 단계에서 보완하고 Edge 제약은 경량화로 해결하는 Data-centric 전략을 선택했습니다.",
      },
      {
        title: "문제 배경",
        body: "대장 내시경 영상 특유의 조명 변화·반사광·장벽 왜곡·병변 형태 다양성으로 일반 객체 탐지 모델의 정확도가 정체되고 오버피팅이 발생했습니다. 실제 의료 환경에서는 고성능 서버 없이 Edge 디바이스에서 실시간 작동이 요구됩니다.",
      },
      {
        title: "Data-Centric 증강 파이프라인",
        diagram: `flowchart LR
    Raw["📸 Raw Endoscopy Data"] --> Aug["Data-Centric Augmentation"]
    subgraph Aug ["🧬 Data-Centric Augmentation"]
        E["Elastic Deform\n점막 변형 모사"]
        G["Grid Distortion\n조명·반사 왜곡"]
    end
    Aug --> RF["🧠 RF-DETR + DINOv2\nFine-Tuning"]
    RF --> Prune["✂️ Structural Pruning\n경량화"]
    Prune --> Result["🎯 Polyp Detection\nmAP +7%p · 22+ FPS"]`,
      },
      {
        title: "데이터 증강 실험 결과",
        image: "/images/rf_detr_aug.png",
        imageAlt: "RF-DETR Elastic Deform · Grid Distortion 데이터 증강 파이프라인 시각화",
      },
      {
        title: "주요 작업",
        items: [
          "Grid Distortion과 Elastic Deform 기하학적 증강 파이프라인 설계 — 내시경 점막 왜곡 패턴을 학습 단계에서 반영했습니다.",
          "Structural Pruning 적용으로 불필요한 파라미터를 제거해 Edge 환경 실시간 추론이 가능하도록 경량화했습니다.",
          "OpenCV 기반 후처리 · 추론 시각화 흐름으로 실제 영상 입력 탐지 결과를 반복 검증했습니다.",
          "RF-DETR + DINOv2 특징 표현 기반 파인튜닝으로 SOTA 구조를 의료 도메인에 적용했습니다.",
        ],
      },
      {
        title: "성과",
        body: "기존 포트폴리오 기준 mAP 약 7%p 개선과 22 FPS 이상 추론을 달성했으며, 관련 경진대회 수상 경험으로 이어졌습니다.",
      },
      {
        title: "🏆 수상 내역 및 수상 사진",
        images: [
          { src: "/images/rf_detr_gold.jpg", caption: "🏆 금상 — 제17회 건양대학교 캡스톤디자인 경진대회" },
          { src: "/images/rf_detr_bronze.jpg", caption: "🥉 동상 — 전국 공학교육혁신 컨소시엄 창의적 종합설계 경진대회" },
        ],
      },
      {
        title: "배운 점",
        body: "의료 비전에서는 모델 구조만큼 데이터 특성에 맞춘 증강과 평가 기준 설계가 중요하다는 점을 배웠습니다. 모델을 키우는 것보다 Data-centric 개선이 결정적임을 확인했습니다.",
      },
    ],
  },
  {
    icon: BarChart2,
    badge: "Main",
    title: "VAE 기반 유방 초음파 이상 탐지",
    description:
      "라벨이 부족한 의료 영상 문제를 비지도 이상 탐지로 재정의하고, 재구성 오차와 동적 임계값으로 병변 후보를 찾은 프로젝트입니다. 공학혁신상 수상.",
    highlights: ["비지도 이상 탐지", "Dice Coefficient 90%", "🏆 공학혁신상"],
    tags: ["TensorFlow", "VAE", "Anomaly Detection", "Custom Loss", "Dynamic Threshold", "Computer Vision"],
    gradient: "from-violet-500/10 to-purple-500/10",
    githubUrl: "https://github.com/Anjingyeong/vae-breast-cancer-anomaly",
    hasAwards: true,
    details: [
      {
        title: "프로젝트 소개",
        body: "전문 라벨 확보가 어려운 유방 초음파 영상에서 정상 패턴을 먼저 학습하고, 정상에서 벗어나는 영역을 이상 후보로 찾는 방식으로 접근했습니다. 지도학습 데이터를 늘리는 방식 대신, 비지도 이상 탐지(Anomaly Detection)로 문제를 재정의했습니다.",
      },
      {
        title: "문제 배경",
        body: "유방 초음파 병변 라벨링에는 전문의가 직접 주석 처리해야 하는 높은 비용이 발생합니다. 지도학습 성능을 키우기보다 정상 조직 분포를 먼저 학습한 뒤 정상 패턴에서 벗어나는 영역을 병변 후보로 탐지하는 비지도 방식으로 문제를 재정의했습니다.",
      },
      {
        title: "VAE 비지도 이상 탐지 파이프라인",
        diagram: `flowchart TD
    Norm["🟢 Normal Tissue Data"] --> Train["🧠 β-VAE Training\nCustom KLD+MSE Loss"]
    Train --> Topo["잠재 공간\n정상 분포 학습"]
    Pat["🔴 Patient Scan"] --> Infer["🧠 VAE Inference"]
    Infer --> Recon["재구성 이미지"]
    Pat --> Diff["⚖️ Reconstruction\nError Map"]
    Recon --> Diff
    Diff --> Mask["🛠️ Dynamic Threshold\n픽셀 분포 기반 보정"]
    Mask --> BBox["🎯 Anomaly Detection\nBounding Box"]
    Topo -.-> Infer`,
      },
      {
        title: "재구성 오차 및 차영상 검출 결과",
        image: "/images/vae_diff.png",
        imageAlt: "VAE 차영상 및 병변 검출 시각화 — Reconstruction Error Map 기반 이상 탐지",
      },
      {
        title: "Dynamic Threshold 적용 결과",
        image: "/images/vae_threshold.png",
        imageAlt: "Dynamic Threshold 적용 이상 영역 분할 시각화",
      },
      {
        title: "이상 탐지 최종 결과",
        image: "/images/vae_result.png",
        imageAlt: "VAE 기반 유방 초음파 병변 후보 탐지 최종 결과",
      },
      {
        title: "주요 작업",
        items: [
          "TensorFlow 저수준 API로 KLD + MSE 텐서 가중치를 조작하는 커스텀 손실 함수를 단독 설계했습니다.",
          "입력 이미지와 재구성 이미지 차이로 Reconstruction Error Map을 생성해 이상 영역을 시각화했습니다.",
          "영상별 픽셀 분포 비율을 실시간 계산하는 Dynamic Threshold 후처리 알고리즘을 개발했습니다.",
          "초음파 영상별 밝기·노이즈 편차에 적응적으로 대응하는 동적 임계값 보정으로 오탐(False Positive)을 줄였습니다.",
        ],
      },
      {
        title: "성과",
        body: "라벨 없는 환경에서 Dice Coefficient 약 90% 수준을 달성했고, 공학혁신상(산업통상자원부 장관 주관) 수상 경험으로 이어졌습니다.",
      },
      {
        title: "🏆 수상 — 공학혁신상",
        images: [
          { src: "/images/vae_award.jpg", caption: "🏆 공학혁신상 — 산업통상자원부 장관 주관 전국 공학교육혁신 컨소시엄" },
        ],
      },
      {
        title: "배운 점",
        body: "라벨이 부족한 문제에서는 지도학습 성능 경쟁보다 문제를 다시 정의하고 평가 방식을 세우는 역량이 중요했습니다. 의료 AI에서는 모델 구조만큼 후처리와 평가 기준이 결과 품질을 좌우합니다.",
      },
    ],
  },
  {
    icon: Brain,
    badge: "Supporting",
    title: "LLM Wiki · RAG 기반 프로젝트 지식 및 하이브리드 검색 시스템",
    description:
      "실험 기록, 트러블슈팅, 의사결정 근거를 검색 가능한 지식 자산으로 전환하고, BM25, Vector Search, Metadata Filtering, RRF 기반 Hybrid RAG 구조로 고도화한 프로젝트입니다.",
    highlights: ["Evidence Wiki", "Hybrid RAG", "Metadata Filtering", "Cloudflare Workers"],
    tags: ["RAG", "Vector Search", "BM25", "Hybrid Search", "TypeScript", "Cloudflare", "LLM"],
    gradient: "from-violet-500/10 to-fuchsia-500/10",
    hasAwards: false,
    details: [
      {
        title: "한 줄 소개",
        body: "프로젝트 과정의 실험 기록과 의사결정 근거를 Evidence Wiki로 구조화하고, 키워드 검색과 벡터 검색을 결합한 하이브리드 RAG 검색 엔진으로 고도화한 지식 관리 시스템입니다.",
      },
      {
        title: "문제 배경",
        body: "AI 프로젝트는 최종 코드만으로 설명하기 어렵습니다. 모델 선택 이유, 실패한 실험, 오류 해결 기록이 흩어지면 다시 활용하기 어려우며, 단순 벡터 검색만으로는 cameraLoginId, frameId, MQTT, YOLO26n 같은 정확한 코드 식별자와 운영 키워드를 안정적으로 찾지 못하는 문제가 있었습니다.",
      },
      {
        title: "하이브리드 검색 파이프라인",
        diagram: `flowchart LR
    Query["🔍 Search Query"] --> MetaFilter["📌 Metadata Filtering\ntitle / category / tags"]
    MetaFilter --> BM25["📝 BM25\nKeyword Search"]
    MetaFilter --> Vector["🧠 Vector Search\nSemantic Similarity"]
    BM25 --> RRF["⚖️ RRF\nReciprocal Rank Fusion"]
    Vector --> RRF
    RRF --> Context["📄 LLM Context\nTitle / Category / Section / SourcePath"]
    Context --> Answer["✅ Answer + Source Evidence"]`,
      },
      {
        title: "주요 역할 및 고도화 내용",
        items: [
          "개발 기록을 문서 단위로 정규화하고 title, category, updatedAt, summary, tags, order, sourcePath, sectionTitle 메타데이터를 RAG 청크에 포함해 출처와 문맥을 추적할 수 있도록 정리했습니다.",
          "사고 기록과 이벤트 문서는 incidentAt, cameraId, eventType, severity를 함께 색인해 '언제 어떤 사고가 났는지'를 필터링할 수 있는 구조로 점검했습니다.",
          "단순 Vector Search 구조에서 BM25 Keyword Search, Vector Search, Metadata Filtering, RRF(Reciprocal Rank Fusion) 기반 결과 병합 구조로 고도화하는 방향을 유지했습니다.",
          "최종 LLM context에는 문서 제목, 카테고리, 섹션, 수정일, source path, 본문 chunk를 함께 전달해 답변 근거 확인이 가능하도록 설계했습니다.",
          "GraphRAG는 문서 관계와 규모가 충분해진 뒤의 확장 후보로만 두고, 현재는 Cloudflare Pages/Workers 기반 정적 배포와 맞는 lightweight Hybrid RAG 구조를 우선했습니다.",
        ],
      },
      {
        title: "결과 및 검증",
        body: "search-index와 rag-vector-index를 정적 JSON으로 생성해 배포 경로 문제를 줄였고, npm test, npm run lint, npm run build, wiki:index 명령으로 색인 생성과 포트폴리오 회귀를 함께 검증하는 구조를 마련했습니다.",
      },
      {
        title: "배운 점",
        body: "AI Engineer 포트폴리오에서는 모델 자체뿐 아니라 실험 근거와 의사결정 기록을 자산화하고, 서비스 환경 및 도메인 특성에 맞는 검색 파이프라인을 설계하는 역량이 중요하다는 점을 확인했습니다.",
      },
    ],
  },
];

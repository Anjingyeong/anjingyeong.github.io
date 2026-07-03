import type { ElementType } from "react";
import { BarChart2, Brain, Microscope, Shield } from "lucide-react";

export type ProjectBadge = "Main" | "Supporting";

export type ProjectDetail = {
  readonly title: string;
  readonly body?: string;
  readonly items?: readonly string[];
  readonly diagram?: string;
  readonly image?: string;
  readonly imageAlt?: string;
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
    tags: ["Computer Vision", "YOLO Pose", "LSTM", "MQTT", "WebSocket", "React"],
    gradient: "from-rose-500/10 to-orange-500/10",
    details: [
      {
        title: "한 줄 소개",
        body: "영상 AI 탐지 결과가 운영자가 판단할 수 있는 알림과 증거로 이어지도록, 모델 추론과 이벤트 전달 구조를 함께 설계한 프로젝트입니다.",
      },
      {
        title: "문제 배경",
        body: "CCTV를 사람이 계속 지켜보는 방식은 사고 순간을 놓치기 쉽고, 단순 탐지 결과만으로는 관제자가 왜 알림이 발생했는지 확인하기 어렵습니다.",
      },
      {
        title: "아키텍처 파이프라인",
        diagram: `flowchart LR
    CCTV[CCTV / RTSP Stream] --> AI[AI Inference Server]
    AI --> Pose[YOLO Pose Keypoints]
    Pose --> Seq[LSTM Behavior Classifier]
    Seq --> Event[Event Metadata]
    Event --> MQTT[MQTT Broker]
    MQTT --> Backend[Backend Event API]
    Backend --> WS[WebSocket Broadcast]
    WS --> Dashboard[Monitoring Dashboard]
    Event --> Evidence[frameId / timestamp / evidence chain]`,
      },
      {
        title: "주요 역할",
        items: [
          "실시간 영상 입력, AI 추론, 이벤트 발행, 대시보드 알림으로 이어지는 전체 흐름을 정리했습니다.",
          "탐지 결과가 frameId와 timestamp 같은 증거 단서와 함께 전달되도록 데이터 흐름을 설계했습니다.",
          "오탐과 미탐을 줄이기 위한 threshold, tracker 상태, hard negative 분석 방향을 문서화했습니다.",
        ],
      },
      {
        title: "기술 접근",
        items: [
          "YOLO Pose 기반 자세 추정과 시계열 판단 모델을 조합하는 구조를 중심으로 실험 방향을 잡았습니다.",
          "MQTT와 WebSocket을 이용해 추론 이벤트가 관제 화면까지 지연 없이 전달되는 흐름을 설계했습니다.",
          "AI 모델 성능뿐 아니라 알림의 근거, 재현 가능한 로그, 운영 안정성을 함께 고려했습니다.",
        ],
      },
      {
        title: "결과와 개선점",
        body: "프로젝트의 핵심 가치는 모델 하나를 만드는 데 그치지 않고, 실시간 관제 환경에서 AI 판단이 화면·알림·증거 흐름으로 연결되는 구조를 제시한 점입니다. 세부 성능 지표는 Git 기록과 실험 로그 확인 후 보강할 예정입니다.",
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
      "대장 내시경 영상의 왜곡과 조명 변화를 데이터 증강으로 보완하고, RF-DETR 기반 탐지 모델을 경량화 관점에서 개선한 의료 비전 프로젝트입니다.",
    highlights: ["mAP 개선", "22+ FPS", "의료 영상 증강"],
    tags: ["PyTorch", "RF-DETR", "DINOv2", "OpenCV", "Structural Pruning"],
    gradient: "from-blue-500/10 to-indigo-500/10",
    githubUrl: "https://github.com/Anjingyeong/RF-DETR-project",
    details: [
      {
        title: "프로젝트 소개",
        body: "대장 내시경 영상에서 용종 후보를 빠르게 찾기 위해 RF-DETR 기반 객체 탐지 모델을 학습하고, 의료 영상 특성에 맞는 데이터 증강과 추론 속도 개선을 적용했습니다.",
      },
      {
        title: "파이프라인 아키텍처",
        diagram: `flowchart LR
    A[Raw Endoscopy Data] --> B[Data-Centric Augmentation]
    subgraph Augmentation Pipeline
        B --> C[Elastic Deform]
        B --> D[Grid Distortion]
    end
    C --> E[RF-DETR SOTA Model]
    D --> E
    E -->|Fine-Tuning| F[Robust Polyp Detection]`,
      },
      {
        title: "데이터 증강 실험 결과",
        image: "/images/rf_detr_aug.png",
        imageAlt: "RF-DETR 데이터 증강 파이프라인 시각화",
      },
      {
        title: "주요 작업",
        items: [
          "Grid Distortion과 Elastic Deform으로 내시경 영상의 왜곡 패턴을 학습 데이터에 반영했습니다.",
          "Structural Pruning을 적용해 저사양 환경에서도 추론 속도를 확보하는 방향으로 개선했습니다.",
          "OpenCV 기반 후처리와 시각화로 탐지 결과를 반복 검증했습니다.",
        ],
      },
      {
        title: "성과",
        body: "기존 포트폴리오 기준 mAP 약 7%p 개선과 22 FPS 이상 추론을 달성했으며, 관련 경진대회 수상 경험으로 이어졌습니다.",
      },
      {
        title: "배운 점",
        body: "의료 비전에서는 모델 구조만큼 데이터 특성에 맞춘 증강과 평가 기준 설계가 중요하다는 점을 배웠습니다.",
      },
    ],
  },
  {
    icon: BarChart2,
    badge: "Main",
    title: "VAE 기반 유방 초음파 이상 탐지",
    description:
      "라벨이 부족한 의료 영상 문제를 비지도 이상 탐지로 재정의하고, 재구성 오차와 동적 임계값으로 병변 후보를 찾은 프로젝트입니다.",
    highlights: ["비지도 이상 탐지", "Dynamic Threshold", "공학혁신상"],
    tags: ["TensorFlow", "VAE", "Anomaly Detection", "Custom Loss", "Computer Vision"],
    gradient: "from-violet-500/10 to-purple-500/10",
    githubUrl: "https://github.com/Anjingyeong/vae-breast-cancer-anomaly",
    details: [
      {
        title: "프로젝트 소개",
        body: "전문 라벨 확보가 어려운 유방 초음파 영상에서 정상 패턴을 먼저 학습하고, 정상에서 벗어나는 영역을 이상 후보로 찾는 방식으로 접근했습니다.",
      },
      {
        title: "이상 탐지 파이프라인",
        diagram: `flowchart TD
    A[Normal Tissue Data] --> B[Train VAE Model]
    B --> C[Learn Normal Topology]
    D[Patient Scan Data] --> E[VAE Inference]
    E --> F[Reconstructed Normal Image]
    D --> G[Diff/Reconstruction Error Map]
    F --> G
    G --> H[Dynamic Threshold Masking]
    H --> I[Anomaly Bounding Box]`,
      },
      {
        title: "재구성 오차 및 차영상 검출 결과",
        image: "/images/vae_diff.png",
        imageAlt: "VAE 차영상 및 병변 검출 시각화",
      },
      {
        title: "주요 작업",
        items: [
          "VAE 기반 재구성 모델을 구성하고 KLD와 MSE를 조합한 손실 함수를 설계했습니다.",
          "입력 이미지와 재구성 이미지의 차이를 Reconstruction Error Map으로 변환했습니다.",
          "영상마다 다른 밝기와 노이즈 편차를 줄이기 위해 Dynamic Threshold 후처리를 적용했습니다.",
        ],
      },
      {
        title: "성과",
        body: "기존 포트폴리오 기준 Dice Coefficient 약 90% 수준을 달성했고, 공학혁신상 수상 경험으로 이어졌습니다.",
      },
      {
        title: "배운 점",
        body: "라벨이 부족한 문제에서는 지도학습 성능 경쟁보다 문제를 다시 정의하고 평가 방식을 세우는 역량이 중요했습니다.",
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
    Query[Search Query] --> MetaFilter[Metadata Filtering]
    MetaFilter --> BM25[BM25 Keyword Search]
    MetaFilter --> Vector[Vector Search]
    BM25 --> RRF[RRF Reciprocal Rank Fusion]
    Vector --> RRF
    RRF --> Context[LLM Context with Title / Category / Section]`,
      },
      {
        title: "주요 역할 및 고도화 내용",
        items: [
          "개발 기록을 문서 단위로 정규화하고 title, category, updatedAt, summary, tags, order, sourcePath, sectionTitle 메타데이터를 RAG 청크에 포함해 출처와 문맥을 추적할 수 있도록 개선했습니다.",
          "단순 Vector Search 구조에서 BM25 Keyword Search, Vector Search, Metadata Filtering, RRF(Reciprocal Rank Fusion) 기반 결과 병합 구조로 고도화했습니다.",
          "최종 LLM context에 문서 제목, 카테고리, 섹션, 수정일, source path, 본문 chunk를 함께 전달해 답변 근거 확인이 가능하도록 구성했습니다.",
          "GraphRAG나 Elasticsearch 같은 무거운 인프라 없이 기존 Cloudflare Pages/Workers 기반 정적 배포 구조와 호환되는 lightweight Hybrid RAG 구조로 구현했습니다.",
        ],
      },
      {
        title: "결과 및 검증",
        body: "exact keyword 검색 정확도 및 LLM 답변의 출처/섹션 추적성을 향상시켰으며, npm test, npm run lint, npm run build, 샘플 질의 5종 검색 검증, HTTP /api/rag/ask QA를 통해 동작을 검증했습니다.",
      },
      {
        title: "배운 점",
        body: "AI Engineer 포트폴리오에서는 모델 자체뿐 아니라 실험 근거와 의사결정 기록을 자산화하고, 서비스 환경 및 도메인 특성에 맞는 검색 파이프라인을 설계하는 역량이 중요하다는 점을 확인했습니다.",
      },
    ],
  },
];

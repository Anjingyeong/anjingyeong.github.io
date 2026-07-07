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
  readonly heroImage?: ProjectGalleryImage;
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
      "CCTV 영상에서 위험 상황 후보를 감지하고, **RTSP → AI 추론 → MQTT → WebSocket** 흐름으로 이벤트를 관제 화면까지 연결한 실시간 AI 관제 보조 시스템입니다.",
    highlights: ["4단계 이벤트 흐름", "Evidence Chain", "FastAPI & MQTT & WS"],
    tags: ["Computer Vision", "YOLO Pose", "LSTM", "MQTT", "WebSocket", "React", "FastAPI", "Docker"],
    gradient: "from-rose-500/10 to-orange-500/10",
    hasAwards: false,
    details: [
      {
        title: "한 줄 소개",
        body: "영상 AI 탐지 결과가 운영자가 판단할 수 있는 알림과 증거로 이어지도록, **RTSP 입력 → AI 추론 → MQTT 이벤트 → WebSocket 알림** 구조를 설계한 프로젝트입니다.",
      },
      {
        title: "문제 정의",
        body: "CCTV를 사람이 계속 지켜보는 방식은 사고 순간을 놓치기 쉽고, 단순 탐지 결과만으로는 관제자가 왜 알림이 발생했는지 확인하기 어렵습니다. 이 프로젝트의 과제는 모델 탐지 자체보다 AI 이벤트가 증거와 함께 관제 화면까지 일관되게 전달되는 구조를 만드는 것이었습니다.",
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
        title: "맡은 역할",
        items: [
          "**RTSP → MediaMTX → AI 추론 서버 → MQTT safety/events → FastAPI → WebSocket → 대시보드** 파이프라인 구조를 설계했습니다.",
          "탐지 결과가 **frameId, timestamp, cameraLoginId, confidence** 같은 증거 단서와 함께 전달되도록 Evidence Chain 데이터 흐름을 설계했습니다.",
          "**YOLO Pose + ByteTrack + LSTM** 조합으로 자세 추정, 객체 추적, 시계열 행동 분류를 연결하는 AI 파이프라인 흐름을 정리했습니다.",
          "오탐과 미탐을 줄이기 위한 hard negative 후보, threshold sweep, tracker 상태 점검 항목을 운영 개선 과제로 분리했습니다.",
        ],
      },
      {
        title: "기술 선택 이유",
        items: [
          "영상 스트림과 이벤트 메타데이터를 같은 경로로 처리하면 overlay 동기화와 알림 상태 관리가 복잡해집니다. MQTT는 event metadata 전파, WebSocket은 대시보드 알림을 담당하도록 분리해 운영 안정성을 높였습니다.",
          "관제 이벤트는 '감지됨'만으로 충분하지 않습니다. incidentAt · frameId · timestamp · cameraId · eventType · severity · confidence 같은 증거가 함께 남아야 오탐/미탐 분석과 사후 검증이 가능합니다.",
        ],
      },
      {
        title: "성과와 검증 기준",
        body: "모델 결과가 화면, 알림, 증거 메타데이터로 이어지는 **실시간 관제 이벤트 파이프라인**을 구현 관점에서 정리했습니다. Precision, Recall, F1-score, FPS, latency 등 세부 성능 지표는 다중 카메라 환경에서의 지속적인 실험을 통해 검증해 나갈 예정입니다.",
      },
      {
        title: "한계 및 개선 방향",
        body: "운영 환경별 threshold 정책, hard negative 재학습, 지연 시간 측정은 완료 기능이 아니라 개선 과제로 분리했습니다. 실시간 AI 서비스에서는 정확도만큼 이벤트 동기화와 설명 가능한 증거 흐름이 중요하다는 점을 확인했습니다.",
      },
    ],
  },
  {
    icon: Microscope,
    badge: "Main",
    title: "RF-DETR 기반 실시간 대장 내시경 용종 검출 시스템",
    description:
      "Kvasir 용종 데이터를 **Train 70% / Validation 20% / Test 10%**로 분할해 RF-DETR을 fine-tuning하고, OpenCV GUI로 실시간 판독 보조 흐름을 구성한 프로젝트입니다.",
    heroImage: {
      src: "/images/rf-detr-polyp-detection.png",
      caption: "대장 내시경 용종 검출 대표 화면",
    },
    highlights: ["mAP@50 86.2% (+7%p)", "22+ FPS 실시간 추론", "금상·동상"],
    tags: ["Python", "RF-DETR", "DINOv2", "OpenCV", "Kvasir Dataset", "Data Augmentation"],
    gradient: "from-blue-500/10 to-indigo-500/10",
    githubUrl: "https://github.com/Anjingyeong/RF-DETR-project",
    hasAwards: true,
    details: [
      {
        title: "문제 정의",
        body: "현재 의료영상 판독은 의료진의 육안 판독과 임상 경험에 크게 의존하기 때문에, 판독자의 피로도와 숙련도에 따라 진단 일관성이 달라질 수 있습니다. 특히 크기가 작거나 형태가 비정형적인 용종은 조기 발견이 어려워 오진이나 진단 지연 위험이 있습니다. 이 프로젝트는 Kvasir 대장 내 용종 데이터를 활용해 실시간 병변 검출 모델을 학습하고, 웹캠·외부 카메라 및 동영상 파일 입력에서 의료진의 판독을 보조하는 시스템을 목표로 했습니다.",
      },
      {
        title: "대표 이미지",
        image: "/images/rf-detr-polyp-detection.png",
        imageAlt: "대장 내시경 영상에서 용종 후보를 bounding box로 검출한 대표 화면",
      },
      {
        title: "사용 데이터와 분할",
        body: "Kvasir Dataset의 대장 내 용종 내시경 이미지를 사용했고, **Train 70% / Validation 20% / Test 10%** 비율로 분할해 학습, 검증, 평가 흐름을 구성했습니다. 의료영상 데이터는 일반 이미지보다 수가 적고 클래스 불균형이 발생하기 쉬우며 병변 크기와 형태도 다양하기 때문에, 데이터 단계의 보완이 중요했습니다.",
      },
      {
        title: "실제 학습 데이터 예시",
        image: "/images/rf-detr-dataset-sample.png",
        imageAlt: "RF-DETR fine-tuning에 사용한 대장 내시경 용종 데이터 예시",
      },
      {
        title: "해결 목표와 모델 선택 이유",
        body: "RF-DETR은 CNN/Transformer 기반 feature extraction 이후 **object query**로 객체 후보를 직접 예측하는 DETR 계열 객체 탐지 모델입니다. **Multi-scale feature**를 활용해 다양한 크기의 객체를 다루고, anchor 기반 detector와 달리 end-to-end 방식으로 bounding box를 예측합니다. 대장 내시경 용종은 크기와 형태가 다양하기 때문에 작은 병변과 비정형 병변 검출에 유리하다고 판단했습니다.",
      },
      {
        title: "DETR 계열 모델 이해",
        image: "/images/rf-detr-model-paper.png",
        imageAlt: "DETR 계열 객체 탐지 모델 구조를 설명하는 논문 기반 참고 이미지",
      },
      {
        title: "증강 및 학습 전략",
        items: [
          "**Train 70% / Validation 20% / Test 10%** 분할로 평가 누수를 줄이고 실험 기준을 분리했습니다.",
          "의료영상 데이터 부족과 불균형 문제를 보완하기 위해 **Elastic Deformation, Grid Distortion** 등 고급 데이터 증강을 적용했습니다.",
          "점막 변형, 조명 변화, 화면 왜곡처럼 내시경 입력에서 자주 발생하는 상황을 학습 데이터에 반영해 입력 조건 변화에 대한 강건성을 높였습니다.",
          "RF-DETR을 Kvasir 용종 데이터셋에 맞게 fine-tuning해 작은 병변과 복잡한 장면에서의 탐지 안정성을 개선했습니다.",
        ],
      },
      {
        title: "데이터 증강 기법",
        image: "/images/rf_detr_aug.png",
        imageAlt: "RF-DETR 학습에 적용한 Elastic Deformation과 Grid Distortion 데이터 증강 예시",
      },
      {
        title: "RF-DETR 학습 흐름",
        diagram: `flowchart LR
    Raw["Kvasir Dataset"] --> Split["Train 70% / Validation 20% / Test 10%"]
    Split --> Aug["Data Augmentation"]
    subgraph Aug ["Augmentation"]
        E["Elastic Deformation\n점막 변형 대응"]
        G["Grid Distortion\n조명·반사 왜곡"]
    end
    Aug --> RF["RF-DETR + DINOv2\nFine-tuning"]
    RF --> Eval["Validation / Test\n실험 설정 기준 평가"]
    Eval --> Result["Polyp Detection\nmAP@50 86.2% (+7%p) · 22+ FPS"]`,
      },
      {
        title: "모델 및 성능 비교",
        body: "RF-DETR 적용 전후의 후보 모델과 처리 속도 지표를 함께 비교해, 검출 성능뿐 아니라 실시간 판독 보조 흐름에 필요한 처리 속도도 함께 점검했습니다.",
        images: [
          { src: "/images/rf-detr-model-comparison.jpg", caption: "비교 실험에 사용한 후보 모델 및 설정" },
          { src: "/images/rf-detr-fps-comparison.png", caption: "후보 모델별 FPS 성능 비교" },
        ],
      },
      {
        title: "맡은 역할",
        items: [
          "Kvasir Dataset 기반 데이터 전처리와 **Train 70% / Validation 20% / Test 10%** 분할 구성을 담당했습니다.",
          "RF-DETR 모델 학습과 fine-tuning을 수행하여 최고 성능 **mAP@50 86.2%** 및 **22+ FPS**의 실시간 추론 성능을 확인했습니다. (실험 설정 기준 약 7% 개선)",
          "데이터 증강과 후보 모델/FPS 비교를 통해 의료영상 입력 조건에서의 탐지 안정성을 점검했습니다.",
        ],
      },
      {
        title: "구현 내용",
        body: "모델 성능 평가에 그치지 않고 **OpenCV 기반 GUI**를 제작해 실제 사용 흐름을 고려한 시스템으로 확장했습니다. 웹캠 또는 외부 카메라 입력과 녹화된 내시경 동영상 파일 업로드, 2가지 입력 흐름에서 병변 검출을 확인할 수 있도록 구성했습니다.",
      },
      {
        title: "주요 기능",
        items: [
          "검출된 병변 위치를 bounding box로 시각화했습니다.",
          "환자 정보 입력 기능을 제공해 검사 영상과 환자 기준 저장 흐름을 연결했습니다.",
          "현재 영상 상태를 하단 메시지로 출력해 사용자가 입력과 검출 상태를 확인할 수 있게 했습니다.",
        ],
      },
      {
        title: "성과 및 의의",
        body: "이 프로젝트에서 맡은 핵심 범위는 **의료영상 데이터 전처리, RF-DETR 학습 및 fine-tuning, 데이터 증강, 후보 모델과 FPS 비교, 검출 결과 시각화**였습니다. 실제 임상 검증 완료를 의미하지 않으며, 의료진 판독을 보조하기 위한 프로토타입의 AI 모델링과 검증 경험으로 정리했습니다.",
      },
      {
        title: "한계 및 개선 방향",
        items: [
          "GUI 개선으로 검사 중 조작 흐름과 시각적 피드백을 더 명확히 정리할 예정입니다.",
          "웹서비스 적용을 통해 검사 결과 조회와 공유 흐름을 확장할 수 있습니다.",
          "용종 외 병변 종류를 확대해 다중 병변 탐지 문제로 발전시킬 수 있습니다.",
          "검사 이력 DB를 구축하고 PACS/병원 시스템 연동 가능성을 검토할 계획입니다.",
        ],
      },
      {
        title: "수상 내역 및 수상 사진",
        images: [
          { src: "/images/rf_detr_gold.jpg", caption: "금상 - 제17회 건양대학교 캡스톤디자인 경진대회" },
          { src: "/images/rf_detr_bronze.jpg", caption: "동상 - 전국 공학교육혁신 컨소시엄 창의적 종합설계 경진대회" },
        ],
      },
      {
        title: "운영 관점에서 배운 점",
        body: "의료영상 AI에서는 모델 구조 선택만큼 데이터 가공, 평가 기준, 실제 사용 흐름을 함께 설계하는 역량이 중요하다는 점을 배웠습니다. 특히 검출 결과를 실시간 영상 시스템으로 연결하면서 AI 모델을 서비스 형태의 보조 시스템으로 확장하는 과정을 경험했습니다.",
      },
    ],
  },
  {
    icon: BarChart2,
    badge: "Main",
    title: "VAE 기반 유방 초음파 이상 탐지",
    description:
      "라벨이 부족한 의료 영상 문제를 비지도 이상 탐지로 재정의하고, **Reconstruction Error Map + Dynamic Threshold**로 Dice Coefficient 약 90% 수준의 병변 후보 탐지를 수행한 프로젝트입니다.",
    highlights: ["비지도 이상 탐지", "Dice Coefficient 약 90%", "공학혁신상"],
    tags: ["TensorFlow", "VAE", "Anomaly Detection", "Reconstruction Error", "Dynamic Threshold", "Computer Vision"],
    gradient: "from-violet-500/10 to-purple-500/10",
    githubUrl: "https://github.com/Anjingyeong/vae-breast-cancer-anomaly",
    hasAwards: true,
    details: [
      {
        title: "문제 정의",
        body: "전문 라벨 확보가 어려운 유방 초음파 영상에서 정상 패턴을 먼저 학습하고, 정상에서 벗어나는 영역을 이상 후보로 찾는 방식으로 접근했습니다. 지도학습 데이터를 늘리는 방식 대신, **비지도 이상 탐지(Anomaly Detection)**로 문제를 재정의했습니다.",
      },
      {
        title: "해결 목표",
        body: "유방 초음파 병변 라벨링에는 전문의가 직접 주석 처리해야 하는 높은 비용이 발생합니다. 지도학습 성능을 키우기보다 정상 조직 분포를 먼저 학습한 뒤 정상 패턴에서 벗어나는 영역을 병변 후보로 탐지하는 비지도 방식으로 문제를 재정의했습니다.",
      },
      {
        title: "VAE 비지도 이상 탐지 파이프라인",
        diagram: `flowchart TD
    Norm["🟢 Normal Tissue Data"] --> Train["🧠 β-VAE Training\nMSE + KLD Loss"]
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
        title: "맡은 역할",
        items: [
          "유방 초음파 이미지를 VAE 학습·추론 입력에 맞게 정리하는 데이터 전처리를 담당했습니다.",
          "입력 이미지와 재구성 이미지의 차이를 기반으로 **Reconstruction Error Map**을 생성하고 이상 후보 영역을 시각화했습니다.",
          "영상별 픽셀 분포 비율을 실시간 계산하는 **Dynamic Threshold 후처리 알고리즘**을 개발했습니다.",
          "초음파 영상별 밝기·노이즈 편차에 적응적으로 대응하는 동적 임계값 보정으로 오탐(False Positive)을 줄였습니다.",
        ],
      },
      {
        title: "모델 구조 이해",
        body: "VAE 학습에는 **재구성 오차(MSE)**와 **잠재 공간 정규화 항(KLD)**이 함께 사용됩니다. 이 손실 함수 자체를 직접 설계한 역할로 표현하지 않고, 프로젝트에서는 전처리와 Reconstruction Error Map 기반 후처리, Dynamic Threshold 보정 알고리즘 개발 범위를 중심으로 정리했습니다.",
      },
      {
        title: "성과 및 검증 결과",
        body: "라벨 없는 환경에서 **Dice Coefficient 약 90% 수준**을 달성했고, **2024 창의혁신 DNA 산학협력 공학혁신상** 수상 경험으로 이어졌습니다.",
      },
      {
        title: "수상 내역",
        images: [
          { src: "/images/vae_award.jpg", caption: "공학혁신상 - 산업통상자원부 장관 주관 전국 공학교육혁신 컨소시엄" },
        ],
      },
      {
        title: "한계 및 개선 방향",
        body: "라벨이 부족한 문제에서는 지도학습 성능 경쟁보다 문제를 다시 정의하고 평가 방식을 세우는 역량이 중요했습니다. 의료 AI에서는 모델 구조만큼 후처리와 평가 기준이 결과 품질을 좌우합니다.",
      },
    ],
  },
  {
    icon: Brain,
    badge: "Supporting",
    title: "LLM Wiki · RAG 기반 프로젝트 지식 및 하이브리드 검색 시스템",
    description:
      "프로젝트 문서와 사고 기록을 정적 JSON 인덱스로 구조화하고, **BM25 + Vector Search + Metadata Filtering + RRF** 검색 흐름을 설계한 지식 관리 프로젝트입니다.",
    highlights: ["4단계 Hybrid Search", "8종 메타데이터", "정적 JSON 인덱스"],
    tags: ["RAG", "Vector Search", "BM25", "Hybrid Search", "TypeScript", "Cloudflare", "LLM"],
    gradient: "from-violet-500/10 to-fuchsia-500/10",
    hasAwards: false,
    details: [
      {
        title: "한 줄 소개",
        body: "프로젝트 과정의 실험 기록과 의사결정 근거를 Evidence Wiki로 구조화하고, **BM25 + Vector Search + Metadata Filtering + RRF**를 결합한 검색 흐름으로 정리한 지식 관리 시스템입니다.",
      },
      {
        title: "문제 정의",
        body: "AI 프로젝트는 최종 코드만으로 설명하기 어렵습니다. 모델 선택 이유, 실패한 실험, 오류 해결 기록이 흩어지면 다시 활용하기 어렵고, 단순 의미 검색만으로는 cameraLoginId, frameId, MQTT 같은 정확한 코드 식별자와 운영 키워드를 안정적으로 찾기 어렵습니다.",
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
          "개발 기록을 문서 단위로 정규화하고 **title, category, updatedAt, summary, tags, order, sourcePath, sectionTitle** 8종 메타데이터를 RAG 청크에 포함해 출처와 문맥을 추적할 수 있도록 정리했습니다.",
          "사고 기록과 이벤트 문서는 **incidentAt, cameraId, eventType, severity** 4종 필드를 함께 색인해 '언제 어떤 사고가 났는지'를 필터링할 수 있는 구조로 점검했습니다.",
          "단순 Vector Search보다 정확한 식별자 검색에 강한 **BM25 Keyword Search, Vector Search, Metadata Filtering, RRF** 4단계 구조로 설계했습니다.",
          "최종 LLM context에는 문서 제목, 카테고리, 섹션, 수정일, source path, 본문 chunk를 함께 전달해 답변 근거 확인이 가능하도록 설계했습니다.",
          "현재 구현 범위는 Cloudflare Pages/Workers 기반 정적 배포와 맞는 lightweight 검색 인덱스 생성에 두고, 대규모 문서 관계 분석은 화면에서 완료 기능처럼 표현하지 않았습니다.",
        ],
      },
      {
        title: "결과 및 검증",
        body: "**search-index와 rag-vector-index**를 정적 JSON으로 생성해 배포 경로 문제를 줄였고, **npm test, npm run lint, npm run build, wiki:index** 4개 명령으로 색인 생성과 포트폴리오 회귀를 함께 검증하는 구조를 마련했습니다.",
      },
      {
        title: "배운 점",
        body: "AI Engineer 포트폴리오에서는 모델 자체뿐 아니라 실험 근거와 의사결정 기록을 자산화하고, 서비스 환경 및 도메인 특성에 맞는 검색 파이프라인을 설계하는 역량이 중요하다는 점을 확인했습니다.",
      },
    ],
  },
];

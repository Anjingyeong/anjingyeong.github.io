import type { ElementType } from "react";
import { BarChart2, Brain, Microscope, Shield } from "lucide-react";

// allow: SIZE_OK - portfolio project data table kept together to preserve card/modal ordering.
export type ProjectBadge = "Main" | "Supporting";

export type ProjectGalleryImage = {
  readonly src: string;
  readonly caption: string;
};

export type ProjectDetailTable = {
  readonly headers: readonly string[];
  readonly rows: readonly (readonly string[])[];
};

export type ProjectDetail = {
  readonly title: string;
  readonly body?: string;
  readonly items?: readonly string[];
  readonly groups?: readonly {
    readonly title: string;
    readonly items: readonly string[];
  }[];
  readonly diagram?: string;
  readonly note?: string;
  readonly image?: string;
  readonly imageAlt?: string;
  readonly images?: readonly ProjectGalleryImage[];
  readonly table?: ProjectDetailTable;
};

export type Project = {
  readonly icon: ElementType;
  readonly badge: ProjectBadge;
  readonly title: string;
  readonly summaryLine: string;
  readonly description: string;
  readonly meta?: {
    readonly period: string;
    readonly role: string;
    readonly service: string;
  };
  readonly heroImage?: ProjectGalleryImage;
  readonly highlights: readonly string[];
  readonly tags: readonly string[];
  readonly gradient: string;
  readonly githubUrl?: string;
  readonly liveUrl?: string;
  readonly hasAwards?: boolean;
  readonly details: readonly ProjectDetail[];
};

export const projects: readonly Project[] = [
  {
    icon: Shield,
    badge: "Main",
    title: "실시간 이상행동 탐지 및 안전 관제 AI 시스템",
    summaryLine:
      "실제 Faint 판단 성능을 기준으로 YOLO Pose 모델을 선정하고, RTSP 추론부터 LSTM 행동 분류·이벤트 후처리·MQTT 전달까지 구현한 실시간 영상 AI 시스템",
    description:
      "**모델의 정확도만 비교하지 않고, 실제 위험 상황을 얼마나 안정적으로 감지하고 전달하는지를 기준으로 AI 파이프라인을 설계했습니다.**",
    meta: {
      period: "2026.05–2026.07",
      role: "AI 파이프라인 설계, YOLO Pose 벤치마크, LSTM 행동 분류, 실시간 추론·후처리, MQTT 연동",
      service: "실시간 영상 AI 관제 시스템",
    },
    heroImage: {
      src: "/images/smart-safety/dashboard-and-search.jpg",
      caption: "실시간 영상 분석 결과와 위험 이벤트를 확인하는 스마트 안전 관제 대시보드",
    },
    highlights: ["YOLO Pose 벤치마크", "LSTM 행동 분류", "MQTT 이벤트 연동"],
    tags: ["Python", "PyTorch", "YOLO26n-pose", "LSTM", "OpenCV", "RTSP", "MQTT"],
    gradient: "from-rose-500/10 to-orange-500/10",
    hasAwards: false,
    details: [
      {
        title: "프로젝트 개요",
        body: "RTSP 영상에서 사람의 자세와 움직임을 분석해 낙상·실신 위험을 감지하고, 위험 이벤트를 관제 시스템으로 전달하는 실시간 영상 AI 시스템입니다.",
      },
      {
        title: "담당 역할",
        items: [
          "AI 파이프라인 설계 및 구현",
          "YOLO Pose 모델 벤치마크",
          "LSTM 행동 분류 및 임계값 조정",
          "실시간 추론·이벤트 후처리",
          "MQTT 이벤트 연동 및 지연 분석",
        ],
      },
      {
        title: "기술 스택",
        body: "Python · PyTorch · YOLO26n-pose · LSTM · OpenCV · RTSP · MQTT",
      },
      {
        title: "AI 판단 파이프라인",
        body: "RTSP 영상에서 YOLO26n-pose로 사람의 17개 관절을 추출하고, 시계열 특징을 LSTM으로 분석해 위험 이벤트를 생성했습니다. 단일 프레임의 자세만 판단하지 않고 하강, 쓰러짐, 누움으로 이어지는 시간적 변화를 분석했습니다.",
        images: [
          {
            src: "/images/smart-safety/ai-pipeline.jpg",
            caption: "RTSP 영상에서 위험 이벤트까지 이어지는 AI 판단 파이프라인",
          },
        ],
      },
      {
        title: "낙상 구간의 트래킹 단절 문제 해결",
        items: [
          "**문제**: 낙상 순간 자세와 Bounding Box 형태가 급변하면서 ByteTrack ID가 끊기고, 동일 인물의 LSTM 입력 시퀀스가 분리되었습니다.",
          "**판단**: 단순히 매칭 범위를 넓히면 서로 다른 인물이 잘못 연결될 수 있어, 확실한 매칭과 제한적인 재연결을 분리해야 한다고 판단했습니다.",
          "**구현**: IoU와 중심점 거리를 활용한 Hard Match, frame gap·center ratio·velocity를 활용한 Soft Relink, Sole Candidate Match와 Grace Period를 적용했습니다.",
          "**결과**: 자체 평가 기준 Track 연속성과 재연결 품질을 약 19.7% 개선했습니다.",
        ],
        images: [
          {
            src: "/images/smart-safety/tracking-recovery.png",
            caption: "낙상 구간의 ID 단절을 보완한 트래킹 재연결 전략",
          },
        ],
      },
      {
        title: "51D에서 54D로 확장한 행동 특징",
        body: "17개 관절의 좌표와 신뢰도로 구성한 51차원 입력에 center_drop, velocity, torso_angle을 추가해 낙상 전이 정보를 직접 표현했습니다.",
        images: [
          {
            src: "/images/smart-safety/model-performance.jpg",
            caption: "51D 대비 54D 특징 확장 모델 성능 비교",
          },
        ],
        table: {
          headers: ["평가 지표", "51D 모델", "최종 54D 모델", "개선"],
          rows: [
            ["Accuracy", "89.20%", "93.45%", "+4.25%p"],
            ["Precision", "88.10%", "92.80%", "+4.70%p"],
            ["Recall", "90.50%", "94.20%", "+3.70%p"],
            ["F1-score", "89.29%", "93.49%", "+4.20%p"],
            ["False Positive", "132건", "81건", "38.6% 감소"],
            ["False Negative", "108건", "66건", "38.9% 감소"],
          ],
        },
      },
      {
        title: "TensorRT 기반 실시간 추론 최적화",
        body: "동일한 카메라 입력 조건에서 PyTorch와 TensorRT 추론을 비교하고, 모델 추론뿐 아니라 전체 처리 지연과 Dropped Frame을 함께 측정했습니다.",
        images: [
          {
            src: "/images/smart-safety/inference-optimization.jpg",
            caption: "PyTorch와 TensorRT 적용 전후 추론 지연 비교",
          },
        ],
        table: {
          headers: ["검증 항목", "PyTorch", "TensorRT", "개선"],
          rows: [
            ["YOLO 평균 지연", "9.454ms", "4.723ms", "50.0% 감소"],
            ["최악 카메라 p95 지연", "14.719ms", "7.159ms", "51.4% 감소"],
            ["전체 처리 지연", "11.789ms", "6.101ms", "48.2% 감소"],
            ["Dropped Frames", "40건", "34건", "15.0% 감소"],
          ],
        },
        note: "End-to-End 알림 지연은 평균 20.9ms, 최대 27ms로 측정되었습니다.",
      },
      {
        title: "이벤트 후처리 및 운영 관찰",
        items: [
          "**불균형 데이터 고려**: Normal 데이터가 압도적으로 많은 환경에서 클래스 균형 샘플링, 임계값별 성능 비교와 반복 시드 평가를 적용해 재현 가능한 모델 선택 근거를 만들었습니다.",
          "**순간 예측의 위험 이벤트 변환**: 17개 관절 좌표를 시계열로 구성하고, 연속 위험 판단 횟수와 카메라별 cooldown을 적용해 순간적 오탐이 경보로 이어지지 않도록 설계했습니다.",
          "**운영 문제 추적 가능성**: 프레임 번호, 관절 검출 수, 생성 시퀀스, 예측 확률과 이벤트 발생 수를 기록하고, 영상 위 오버레이와 디버그 로그로 탐지 누락과 지연 원인을 추적 가능하게 구성했습니다.",
          "**실제 서비스 이벤트 변환**: 모델 추론 결과를 MQTT·WebSocket·Spring Boot 기반 관제 시스템으로 연결해 실제 운영 서비스 이벤트로 전환했습니다.",
        ],
      },
      {
        title: "이 프로젝트로 보여주는 역량",
        items: [
          "영상 AI 모델을 동일 조건에서 비교하고 선택하는 능력",
          "불균형 데이터에 맞는 실험과 평가 기준 설계",
          "객체 검출과 시계열 행동 분류를 결합한 파이프라인 구현",
          "오탐·미탐·지연 원인을 로그와 지표로 추적하는 능력",
          "모델 출력을 실제 서비스 이벤트로 변환하는 시스템 설계",
        ],
      },
    ],
  },
  {
    icon: Microscope,
    badge: "Main",
    title: "RF-DETR 기반 대장 내시경 용종 검출 애플리케이션",
    summaryLine: "데이터 증강과 bbox 정합성 검증으로 내시경 영상의 형태 편차에 대응한 용종 검출 프로젝트",
    description:
      "Kvasir 용종 데이터를 **Train 70% / Val 20% / Test 10%**로 분할하고, Data-Centric 증강과 bbox 정합성 검증으로 영상·웹캠 입력 탐지 애플리케이션을 구현한 프로젝트입니다.",
    meta: {
      period: "2025.03–2025.11",
      role: "데이터 증강 및 bbox 정합성 검증",
      service: "대장 내시경 용종 검출 애플리케이션",
    },
    heroImage: {
      src: "/images/rf-detr-polyp-detection.png",
      caption: "대장 내시경 용종 검출 대표 화면",
    },
    highlights: ["mAP@50 86.2%", "Kvasir 7:2:1", "Data Augmentation"],
    tags: ["Python", "RF-DETR", "DINOv2", "OpenCV", "Kvasir Dataset", "Data Augmentation"],
    gradient: "from-blue-500/10 to-indigo-500/10",
    githubUrl: "https://github.com/Anjingyeong/RF-DETR-project",
    hasAwards: true,
    details: [
      {
        title: "문제와 목표",
        body: "대장 내시경 검사는 육안 판독 시 의사의 피로도와 숙련도에 따라 미세 용종을 놓칠 위험이 있습니다. 특히 비정형적이거나 크기가 작은 병변은 조기 발견이 어렵습니다. 본 프로젝트는 Kvasir 대장 내시경 데이터를 활용해 병변 검출 모델을 fine-tuning하고, 카메라·동영상 입력 환경에서 의료진의 판독을 보조하는 애플리케이션을 구축하는 것을 목표로 했습니다.",
      },
      {
        title: "시스템 플로우",
        diagram: `flowchart LR
    Raw["Kvasir Dataset\\n(Polyp Images)"] --> Split["Data Split\\nTrain 70% / Val 20% / Test 10%"]
    Split --> Aug["Data Augmentation"]
    subgraph Augment ["Data-Centric Augmentation"]
        E["Elastic Deformation\\n비선형 조직 형태 변형 모사"]
        G["Grid Distortion\\n국소적 기하학적 왜곡 모사"]
    end
    Aug --> RF["RF-DETR + DINOv2\\nFine-tuning"]
    RF --> GUI["OpenCV GUI\\nReal-time Inference"]
    GUI --> Result["Video/Webcam Detection\\nmAP@50 86.2%"]`,
      },
      {
        title: "핵심 문제 해결",
        items: [
          "**문제**: 내시경 영상의 조명 변화와 병변 형태 편차로 인해 일반화가 어려웠습니다.",
          "**판단**: 모델을 교체하기보다 데이터 다양성과 증강 후 bbox 정합성 확보를 우선했습니다.",
          "**해결**: Elastic Deformation과 Grid Distortion을 적용하고, 변환된 bbox가 실제 용종 영역과 일치하는지 확인했습니다. RF-DETR fine-tuning과 OpenCV GUI의 카메라·영상 입력 연동도 구성했습니다.",
          "**결과**: 팀 모델은 Kvasir 내부 테스트셋에서 mAP@50 86.2%를 기록했습니다.",
        ],
        images: [
          { src: "/images/rf-detr-polyp-detection.png", caption: "대장 내시경 용종 검출 시각화" },
          { src: "/images/rf_detr_aug.png", caption: "Elastic Deformation 및 Grid Distortion 데이터 증강 예시" },
        ],
      },
      {
        title: "적용 전후 비교",
        body: "Kvasir 테스트 데이터셋(10% split)에서 평가된 검출 성능 및 추론 속도 측정 결과입니다.",
        table: {
          headers: ["평가 항목 (Metric)", "측정 결과", "조건 및 상세 설명"],
          rows: [
            ["데이터셋 분할", "Train 70% / Val 20% / Test 10%", "Kvasir Dataset 1,000장 기준 평가 분할"],
            ["mAP@50 검출 성능", "86.2%", "Kvasir 10% Test set 평가 수치"],
            ["베이스라인 대비 검출 성능", "mAP@50 약 +7%p 향상", "기본 퓨전/초기 모델 설정 대비 검출 성능 비교"],
            ["추론 속도", "22+ FPS", "OpenCV GUI 렌더링 및 디스플레이 포함 처리 속도"],
          ],
        },
      },
      {
        title: "검증 범위와 한계",
        items: [
          "**베이스라인 비교 조건**: mAP@50 +7%p 향상 결과는 초기 퓨전/기본 모델 설정 대비 측정되었으며, 대조군의 세부 하드웨어 환경과 파라미터는 비교 문서로 보완 및 관리하고 있습니다.",
          "**추론 속도 하드웨어 환경**: 22+ FPS 측정 결과는 OpenCV GUI 환경 기준이며, 실제 임상 장비 도입 시 타겟 디바이스의 GPU 모델 및 입출력 해상도에 따른 세부 벤치마크가 지속 필요합니다.",
          "**임상 검증과의 구분**: 본 프로젝트는 의료진 판독 보조용 AI 프로토타입 개발 및 성능 검증 경험이며, 실제 의료기기 인허가나 임상 검증 완료를 의미하지 않습니다.",
        ],
        images: [
          { src: "/images/rf_detr_gold.jpg", caption: "🏆 금상 (대상) — 제17회 건양대학교 캡스톤디자인 경진대회" },
          { src: "/images/rf_detr_bronze.jpg", caption: "🏆 동상 — 전국 공학교육혁신 컨소시엄 창의적 종합설계 경진대회" },
        ],
      },
      {
        title: "이 경험으로 수행할 수 있게 된 기술 업무",
        items: [
          "의료/비전 데이터셋 분할(Train/Val/Test) 및 Geometric Data Augmentation 파이프라인 구축",
          "Object Detection 모델(RF-DETR) Fine-tuning 및 mAP 기반 정밀도 평가",
          "OpenCV 기반 영상·웹캠 입력 탐지 및 Bounding Box 시각화 GUI 프로토타입 작성",
        ],
      },
    ],
  },
  {
    icon: BarChart2,
    badge: "Main",
    title: "VAE 기반 유방 초음파 이상 탐지",
    summaryLine: "라벨이 부족한 유방 초음파에서 정상 분포를 학습해 이상 후보를 시각화한 비지도 이상탐지 프로젝트",
    description:
      "라벨링 비용 문제를 정상 조직 분포를 학습하는 비지도 이상 탐지로 재정의하고, **Reconstruction Error Map**과 적응형 **Dynamic Threshold** 후처리를 개발한 프로젝트입니다.",
    meta: {
      period: "2024.03–2024.10",
      role: "VAE 비지도 이상탐지 및 Dynamic Threshold 후처리",
      service: "유방 초음파 이상 후보 영역 시각화",
    },
    highlights: ["Unsupervised", "Error Map", "Dynamic Threshold"],
    tags: ["TensorFlow", "VAE", "Anomaly Detection", "Reconstruction Error", "Dynamic Threshold", "Computer Vision"],
    gradient: "from-violet-500/10 to-purple-500/10",
    githubUrl: "https://github.com/Anjingyeong/vae-breast-cancer-anomaly",
    hasAwards: true,
    details: [
      {
        title: "문제와 목표",
        body: "유방 초음파 영상은 전문의 주석 라벨링 비용이 매우 높아 대규모 지도학습 데이터셋 확보가 어렵습니다. 본 프로젝트의 목표는 라벨이 부족한 환경에서 정상 조직 분포를 먼저 학습한 후, 정상 패턴에서 벗어나는 차영상 오차를 추적하는 비지도 이상 탐지(Unsupervised Anomaly Detection) 접근법을 구축하는 것이었습니다.",
      },
      {
        title: "시스템 플로우",
        diagram: `flowchart TD
    Norm["🟢 Normal Tissue Data"] --> Train["🧠 β-VAE Training\\nMSE + KLD Loss"]
    Train --> Topo["정상 조직\\n잠재 공간 학습"]
    Pat["🔴 Patient Scan"] --> Infer["🧠 VAE Inference"]
    Infer --> Recon["재구성 정상 이미지"]
    Pat --> Diff["⚖️ Reconstruction\\nError Map"]
    Recon --> Diff
    Diff --> Mask["🛠️ Dynamic Threshold\\n픽셀 오차 분포 기반 적응형 보정"]
    Mask --> BBox["🎯 Anomaly Detection\\nCandidate Region"]`,
      },
      {
        title: "핵심 문제 해결",
        items: [
          "**문제**: 병변 위치 라벨 확보가 제한적이었습니다.",
          "**판단**: 지도학습 대신 정상 영상의 분포를 학습하는 비지도 이상탐지를 선택했습니다.",
          "**해결**: VAE Reconstruction Error Map을 생성하고 이미지별 오차 분포 기반 Dynamic Threshold를 구현했습니다.",
          "**결과**: 이상 후보 영역을 시각화하고, 영상별 밝기와 노이즈에 따라 고정 threshold의 오탐 수준이 달라지는 문제를 완화했습니다.",
        ],
        images: [
          { src: "/images/vae_diff.png", caption: "Reconstruction Error Map 기반 오차 시각화" },
          { src: "/images/vae_threshold.png", caption: "Dynamic Threshold 분할 적용 결과" },
          { src: "/images/vae_result.png", caption: "최종 병변 후보 영역 시각화" },
        ],
      },
      {
        title: "적용 전후 비교",
        body: "고정 임계값 방식 대비 Dynamic Threshold 적용에 따른 특성 및 정량 평가 보완 사항입니다.",
        table: {
          headers: ["비교 항목", "고정 임계값 (Fixed Threshold)", "동적 임계값 (Dynamic Threshold)", "비고 및 검증 특성"],
          rows: [
            ["밝기/노이즈 변형 대응", "영상별 밝기 차이에 취약 (FP 증가)", "영상별 픽셀 분포 반영 적응형 보정", "정성적 오탐 감소 확인"],
            ["분할 정밀도 수치 검증", "과거 문서상 Dice 약 90% 언급", "평가 데이터 분할 및 세부 조건 명시 필요", "수치 공개 대신 세부 검증 항목 지정"],
            ["지도학습 성능 비교", "지도학습 직접 대조군 부재", "지도학습 성능 우위 주장 지양", "지도학습 직접 대조군 부재를 한계로 명시"],
          ],
        },
      },
      {
        title: "검증 범위와 한계",
        items: [
          "**Dice Coefficient 평가 조건 명시**: 과거 문서의 Dice 약 90% 수치는 데이터셋 분할, Ground-Truth 마스크 출처, 평균 산정 방식이 엄밀히 확정되지 않아 카드 하이라이트에서 제외하고 내부 평가 보완 항목으로 지정했습니다.",
          "**지도학습 모델과의 직접 비교 한계**: 비지도학습 방식이 동일한 데이터 조건에서 지도학습(U-Net 등)보다 우수하다고 단정하지 않았으며, 지도학습 대조군과의 직접 비교 부재를 본 연구의 한계로 명시했습니다.",
          "**Dynamic Threshold 세부 수식 파라미터**: percentile, mean/std, Otsu 알고리즘 등 구체적인 픽셀 분포 수식 파라미터와 경계값 조건은 추후 연구 문서로 체계화하고 있습니다.",
        ],
        images: [
          { src: "/images/vae_award.jpg", caption: "🏆 공학혁신상 — 2024 창의혁신 DNA 산학협력 공학혁신상" },
        ],
      },
      {
        title: "이 경험으로 수행할 수 있게 된 기술 업무",
        items: [
          "VAE 기반 비지도 이상 탐지(Anomaly Detection) 데이터 전처리 및 재구성 오차 맵(Reconstruction Error Map) 추출",
          "이미지 픽셀 통계 분포를 활용한 적응형 동적 임계값(Dynamic Threshold) 후처리 산출",
          "라벨 부족 문제 환경에서의 문제 재정의 및 한계점 명시 능력",
        ],
      },
    ],
  },
  {
    icon: Brain,
    badge: "Supporting",
    title: "LLM Wiki · RAG 기반 프로젝트 지식 및 하이브리드 검색 시스템",
    summaryLine: "프로젝트 문서와 사고 기록을 검색 가능한 정적 지식으로 구조화한 하이브리드 검색 시스템",
    description:
      "프로젝트 문서와 사고 기록을 정적 JSON 인덱스로 구조화하고, **8종 메타데이터**와 **BM25 + Vector + Metadata + RRF 4단계 검색 아키텍처**를 설계한 지식 관리 프로젝트입니다.",
    highlights: ["4단계 Hybrid Search", "8종 메타데이터", "정적 JSON 인덱스"],
    tags: ["RAG", "Vector Search", "BM25", "Hybrid Search", "TypeScript", "Cloudflare", "LLM"],
    gradient: "from-violet-500/10 to-fuchsia-500/10",
    hasAwards: false,
    details: [
      {
        title: "문제와 목표",
        body: "AI 개발 과정의 의사결정 기록, 실패한 실험, 오탐 원인 분석 문서는 시간이 지나면 파편화되어 다시 찾기 어렵습니다. 또한 단순 의미론적 벡터 검색(Vector Search)만으로는 cameraLoginId, frameId, MQTT 토픽 같은 코드 식별자와 키워드를 정밀하게 검색하기 어렵습니다. 본 프로젝트는 8종 메타데이터와 BM25 + Vector Search + RRF 랭킹 파이프라인을 구축하여 의사결정 근거를 추적할 수 있는 지식 파이프라인을 설계하는 것을 목표로 했습니다.",
      },
      {
        title: "시스템 플로우",
        diagram: `flowchart LR
    Query["🔍 Search Query"] --> MetaFilter["📌 Metadata Filtering\\ntitle / category / tags / incidentAt"]
    MetaFilter --> BM25["📝 BM25\\nKeyword Search"]
    MetaFilter --> Vector["🧠 Vector Search\\nSemantic Similarity"]
    BM25 --> RRF["⚖️ RRF\\nReciprocal Rank Fusion"]
    Vector --> RRF
    RRF --> Context["📄 LLM Context\\nTitle / Category / Section / SourcePath"]
    Context --> Answer["✅ Answer + Source Evidence"]`,
      },
      {
        title: "핵심 문제 해결 사례",
        items: [
          "**메타데이터 추적 구조 설계**: title, category, updatedAt, summary, tags, order, sourcePath, sectionTitle 등 8종 메타데이터를 텍스트 청크와 함께 색인하여 출처 문맥을 추적할 수 있게 했습니다.",
          "**관제 사고 문서 메타데이터 포함**: incidentAt, cameraId, eventType, severity 4종 필드를 추가하여 특정 카메라 및 사고 시점 기반의 정밀 필터링 구조를 수립했습니다.",
          "**하이브리드 검색 (BM25 + Vector + RRF) 파이프라인**: 식별자 키워드 검색에 강한 BM25와 문맥 의미 검색에 강한 Vector Search를 조합하고, RRF(Reciprocal Rank Fusion)로 순위를 종합하는 4단계 파이프라인을 설계했습니다.",
          "**정적 배포 환경 부하 절감**: Cloudflare Pages 정적 환경에 맞게 search-index 및 rag-vector-index를 빌드 타임 정적 JSON 파일로 생성하여 런타임 서버 오버헤드를 절감했습니다.",
        ],
      },
      {
        title: "적용 전후 비교",
        body: "단순 Vector Search 대비 4단계 하이브리드 검색 설계 특성 비교입니다.",
        table: {
          headers: ["구분", "단순 벡터 검색 (Vector Search)", "하이브리드 검색 (BM25 + Vector + RRF)", "비고 및 특성"],
          rows: [
            ["정확한 키워드/ID 검색", "cameraLoginId 등 정확 식별자 누락 위험", "BM25 키워드 매칭으로 식별자 검색 보완", "키워드 정밀도 보완"],
            ["의미론적 유사도", "문맥 및 의도 기반 유사 문서 검색 지원", "Vector Search로 문맥 검색 지원", "의미 유사도 보존"],
            ["검증 지표 (Recall@k, MRR)", "정량 대조군 수치 미비", "검색 품질 정량 대조군 측정 진행 예정", "후속 검증 과제로 관리"],
          ],
        },
      },
      {
        title: "검증 범위와 한계",
        items: [
          "**검색 품질 정량 평가**: BM25 단독 대비 하이브리드 검색의 Recall@k, MRR, 식별자 검색 성공률 및 응답 지연시간에 대한 정량 대조군 측정은 후속 평가 과제로 남겨두었습니다.",
          "**아키텍처 완성도와 정량 성과의 구분**: 4단계 필터링 및 정적 인덱싱 아키텍처 구현 자체와 최종 검색 품질 향상 성과를 분리하여 설명했습니다.",
        ],
      },
      {
        title: "이 경험으로 수행할 수 있게 된 기술 업무",
        items: [
          "RAG 시스템 구축을 위한 문서 정규화 및 메타데이터 색인 파이프라인 설계",
          "BM25 및 Vector Search 결합 RRF(Reciprocal Rank Fusion) 하이브리드 검색 아키텍처 구축",
          "빌드 타임 정적 JSON 인덱스 생성(Node.js/TypeScript) 및 CI/CD 테스트 회귀 자동화",
        ],
      },
    ],
  },
];

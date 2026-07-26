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

export type ProblemSolvingStep = {
  readonly label: "측정 현상" | "원인 분석" | "의사결정" | "구현" | "적용" | "결과" | "배운 점";
  readonly text: string;
};

export type ProjectDetail = {
  readonly title: string;
  readonly body?: string;
  readonly problemSolving?: readonly ProblemSolvingStep[];
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
  readonly imageLayout?: "stack" | "grid";
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
  readonly demoUrl?: string;
  readonly hasAwards?: boolean;
  readonly details: readonly ProjectDetail[];
};

export const projects: readonly Project[] = [
  {
    icon: Shield,
    badge: "Main",
    title: "실시간 이상행동 탐지 및 안전 관제 AI 시스템",
    summaryLine:
      "RTSP 영상 입력부터 Pose·Tracking·LSTM·TensorRT·MQTT 관제 알림까지 연결해, 위험 이벤트를 실제 서비스 흐름으로 완성한 실시간 컴퓨터비전 프로젝트",
    description:
      "2개 카메라 내부 테스트에서 위험 이벤트 29건을 모두 1초 안에 관제 서비스까지 전달했습니다. 이후 행동 분류, Tracking 단절과 추론 병목을 구간별 수치로 개선했습니다.",
    meta: {
      period: "2026.05–2026.07",
      role: "5인 팀장 · 실시간 영상 AI 파이프라인 담당",
      service: "스마트 안전 관제 AI 시스템",
    },
    heroImage: {
      src: "/images/smart-safety/ai-pipeline.jpg",
      caption:
        "RTSP 입력부터 Pose·Tracking·LSTM·상태 후처리·MQTT 이벤트까지 연결한 AI 판단 파이프라인",
    },
    highlights: [
      "29/29건 위험 이벤트 1초 내 관제 도달",
      "행동 분류 F1 89.29% → 93.49%",
      "TensorRT YOLO 지연 50.0% 감소",
    ],
    tags: ["Python", "PyTorch", "YOLO26n-pose", "LSTM", "OpenCV", "RTSP", "MQTT"],
    gradient: "from-rose-500/10 to-orange-500/10",
    githubUrl: "https://github.com/strangeRookies/ai",
    demoUrl: "https://www.youtube.com/watch?v=O1-JNhcpvDQ",
    hasAwards: false,
    details: [
      {
        title: "문제 정의와 목표",
        body:
          "다수의 CCTV를 소수의 관제 인력이 동시에 확인하는 환경에서는 모든 위험 상황을 즉시 발견하기 어렵습니다. 특히 낙상과 실신은 사고 직후의 발견과 대응 속도가 중요합니다.\n\n이를 해결하기 위해 RTSP 영상에서 사람의 자세와 움직임을 분석하고, 위험 가능성이 높은 장면을 실시간으로 선별해 MQTT 이벤트로 관제 서비스까지 전달하는 AI 시스템을 구현했습니다. 내부 2개 카메라 테스트에서는 발생한 위험 이벤트 29건이 모두 1초 안에 관제 서비스에 도달했습니다.\n\n이후 모델 정확도만 높이는 것이 아니라 사람별 시계열이 끊기지 않는지, 분석 결과가 현재 영상보다 늦어지지 않는지, 순간적인 오판이 실제 경보로 이어지지 않는지까지 구간별 지표로 개선했습니다.",
      },
      {
        title: "AI 시스템 구조",
        body:
          "RTSP 영상에서 YOLO26n-pose로 사람의 Bounding Box와 17개 관절을 추출하고, Tracking ID별로 자세와 움직임의 시계열 특징을 구성했습니다. Pose 모델은 단독 속도보다 동일한 LSTM 조건에서의 Recall·F1과 시퀀스 생성 안정성을 기준으로 선택했습니다.\n\nLSTM 예측 결과에 연속 위험 판단, 자세 조건과 Cooldown을 적용해 한 프레임의 오판을 걸러낸 뒤 최종 위험 이벤트를 MQTT로 관제 시스템에 전달했습니다.",
        diagram: `flowchart LR
    RTSP["📹 RTSP Video Stream"] --> Pose["👤 YOLO26n-pose\\nBounding Box & 17 Keypoints"]
    Pose --> Tracking["🆔 Multi-Object Tracking\\nTracking ID Maintain & Relink"]
    Tracking --> Feature["📊 Time-series Feature Extractor\\n54D Pose/Motion Features"]
    Feature --> LSTM["🧠 LSTM Classifier\\nAction & Fall/Faint Prediction"]
    LSTM --> Post["⚙️ Post-Processing\\nConsecutive Threshold & Cooldown"]
    Post --> MQTT["📡 MQTT Event Publisher\\nReal-time Alert to Control Center"]`,
      },
      {
        title: "낙상 순간 끊기는 Tracking ID의 원인을 추적했습니다",
        problemSolving: [
          {
            label: "측정 현상",
            text: "자체 낙상 테스트 영상에서 동일 인물의 ID Switch가 8건 발생했고, Mean Track Coverage는 35.76%에 머물렀습니다. Tracking ID가 바뀔 때마다 해당 인물의 LSTM 입력 시퀀스도 중간에 분리됐습니다.",
          },
          {
            label: "원인 분석",
            text: "사람이 서 있는 자세에서 바닥에 누운 자세로 전환되면서 Bounding Box의 종횡비와 중심점이 급격히 바뀌었습니다. 기존 IoU 중심 매칭이 이 변화를 동일 인물로 연결하지 못한 것이 원인이었습니다.",
          },
          {
            label: "의사결정",
            text: "매칭 허용 범위를 무조건 넓히면 주변의 다른 사람과 잘못 연결될 수 있었습니다. 신뢰도가 높은 기본 매칭을 먼저 수행하고, 실패한 경우에만 제한적인 조건으로 재연결하기로 결정했습니다.",
          },
          {
            label: "구현",
            text: "IoU와 중심점 거리를 활용한 Hard Match 이후 frame gap·center ratio·velocity를 확인하는 Soft Relink를 적용했습니다. 단독 후보일 때만 연결하는 Sole Candidate Match와 Grace Period도 함께 적용했습니다.",
          },
          {
            label: "결과",
            text: "자체 테스트 영상에서 ID Switch를 8건에서 1건으로 줄였고, Mean Track Coverage를 35.76%에서 49.70%로 높였습니다.",
          },
          {
            label: "배운 점",
            text: "행동 분류 오류처럼 보이는 문제도 모델 자체가 아니라 검출·Tracking·시퀀스 생성 과정에서 시작될 수 있으므로 입력 흐름부터 확인해야 한다는 점을 배웠습니다.",
          },
        ],
        diagram: `flowchart LR
    A["FALL 진행 중\\nTrack ID 12"] --> B["자세 급변·검출 누락"]
    B --> C["재탐지\\nTrack ID 27"]
    C --> D{"동일 인물 조건 확인"}
    D -->|"Hard Match"| E["기존 시퀀스 유지"]
    D -->|"Soft·Sole Match"| E
    D -->|"조건 불충족"| F["새 Track 생성"]`,
        note: "ID Switch와 Track Coverage는 자체 테스트 시나리오의 내부 평가 결과입니다. 객관적인 추적 성능을 주장하려면 MOTA·HOTA·Fragmentation 등의 추가 평가가 필요합니다.",
      },
      {
        title: "자세 좌표만으로 부족했던 낙상 전이를 특징으로 추가했습니다",
        problemSolving: [
          {
            label: "측정 현상",
            text: "17개 관절의 좌표와 신뢰도만 사용한 51D 모델은 Accuracy 89.20%, F1-score 89.29%였으며 False Positive 132건, False Negative 108건을 기록했습니다.",
          },
          {
            label: "원인 분석",
            text: "관절의 현재 위치만으로는 사람이 서 있는 상태에서 하강하고 바닥으로 쓰러지는 시간적 변화를 직접 표현하기 어려웠습니다.",
          },
          {
            label: "의사결정",
            text: "LSTM 크기를 먼저 키우기보다 낙상 과정에서 의미가 있는 움직임 정보를 입력 특징에 직접 추가하기로 결정했습니다.",
          },
          {
            label: "구현",
            text: "신체 중심의 하강량인 center_drop, 프레임 간 이동 속도인 velocity, 상체 기울기인 torso_angle을 추가해 입력 특징을 51D에서 54D로 확장했습니다.",
          },
          {
            label: "결과",
            text: "F1-score는 89.29%에서 93.49%로 향상됐고, False Positive는 132건에서 81건으로 38.6%, False Negative는 108건에서 66건으로 38.9% 감소했습니다.",
          },
          {
            label: "배운 점",
            text: "모델 구조를 복잡하게 변경하기 전에 해결하려는 현상을 직접 설명할 수 있는 입력 특징을 설계하는 것이 더 효과적인 개선 방법이 될 수 있다는 점을 배웠습니다.",
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
        title: "최신 프레임 정책과 TensorRT로 실시간성을 확보했습니다",
        problemSolving: [
          {
            label: "측정 현상",
            text: "입력 속도가 추론 속도보다 빠른 구간에는 과거 프레임이 누적됐고, PyTorch 환경의 YOLO 평균 지연은 9.454ms, 전체 처리 지연은 11.789ms로 측정됐습니다.",
          },
          {
            label: "원인 분석",
            text: "Reader와 Inference 사이에 프레임 폐기 정책이 없어 이전 영상이 순서대로 쌓였고, 전체 파이프라인에서는 YOLO 추론이 주요 병목 구간 중 하나였습니다.",
          },
          {
            label: "의사결정",
            text: "안전 관제에서는 모든 과거 프레임의 보존보다 현재 위험의 빠른 감지가 중요하다고 판단했습니다. 최신 프레임 우선 정책과 TensorRT를 함께 적용해 적체와 추론 병목을 각각 줄였습니다.",
          },
          {
            label: "구현",
            text: "Reader와 Inference 사이의 큐를 최대 3장으로 제한하고 가득 차면 가장 오래된 프레임을 폐기했습니다. 동일한 카메라 입력에서 PyTorch와 TensorRT의 평균·p95·전체 처리 지연과 Dropped Frame을 비교했습니다.",
          },
          {
            label: "결과",
            text: "YOLO 평균 지연은 9.454ms에서 4.723ms로 50.0% 감소했고, TensorRT와 최신 프레임 정책이 적용된 통합 환경에서 전체 처리 지연은 11.789ms에서 6.101ms로 48.2% 감소했습니다.",
          },
          {
            label: "배운 점",
            text: "실시간 최적화는 모든 데이터를 보존하거나 최고 FPS만 만드는 작업이 아니라, 서비스 목적에 따라 처리 정책을 정하고 병목을 수치로 줄여 현재성을 확보하는 과정이었습니다.",
          },
        ],
        diagram: `flowchart LR
    A["RTSP Reader"] --> B["Bounded Queue\\nmaxsize = 3"]
    B --> C["TensorRT Inference"]
    D["새 프레임 도착"] --> B
    B -->|"Queue Full"| E["가장 오래된 프레임 폐기"]
    E --> B`,
        table: {
          headers: ["검증 항목", "PyTorch", "TensorRT", "개선"],
          rows: [
            ["YOLO 평균 지연", "9.454ms", "4.723ms", "50.0% 감소"],
            ["최악 카메라 p95 지연", "14.719ms", "7.159ms", "51.4% 감소"],
            ["전체 처리 지연", "11.789ms", "6.101ms", "48.2% 감소"],
            ["Dropped Frames", "40건", "34건", "15.0% 감소"],
          ],
        },
        note:
          "End-to-End 알림 지연은 평균 20.931ms, p95 26ms, 최대 27ms로 측정했습니다. 전체 처리 지연과 Dropped Frame은 TensorRT와 최신 프레임 처리 정책이 함께 적용된 통합 결과입니다.",
      },
      {
        title: "운영 안정화와 검증 범위",
        groups: [
          {
            title: "운영 안정화",
            items: [
              "**불균형 데이터 대응**: Normal 데이터가 많은 환경을 고려해 클래스 균형 샘플링, 임계값별 비교와 반복 시드 평가를 적용했습니다.",
              "**순간 예측의 이벤트 변환**: 연속 위험 판단 횟수, 자세 조건과 카메라별 Cooldown을 적용해 한 프레임의 오판이 즉시 경보로 이어지지 않도록 했습니다.",
              "**문제 추적 가능성**: 프레임 번호, 관절 검출 수, 생성 시퀀스, 예측 확률과 이벤트 수를 로그와 영상 오버레이로 기록해 미탐·오탐·지연 원인을 구간별로 확인했습니다.",
              "**관제 연동 범위**: 최종 위험 판단을 MQTT 이벤트로 변환해 관제 시스템에 전달했습니다.",
            ],
          },
          {
            title: "검증 범위와 한계",
            items: [
              "**Tracking 평가 범위**: ID Switch와 Track Coverage는 자체 테스트 시나리오의 내부 평가 결과입니다. 객관적인 추적 성능을 주장하려면 MOTA·HOTA·Fragmentation 등의 추가 평가가 필요합니다.",
              "**환경 일반화**: 모델과 실시간 처리 성능은 프로젝트 영상과 사용한 GPU 환경을 기준으로 검증했습니다. 실제 시설 적용을 위해서는 카메라 각도, 조도, 가림, 인원 밀집도와 하드웨어별 추가 검증이 필요합니다.",
            ],
          },
        ],
      },
      {
        title: "담당 범위와 협업",
        groups: [
          {
            title: "직접 구현",
            items: [
              "Pose 모델 비교와 LSTM 행동 특징 설계",
              "Tracking 재연결, 최신 프레임 처리와 TensorRT 비교",
              "상태 후처리와 MQTT 위험 이벤트 발행",
            ],
          },
          {
            title: "협업·통합",
            items: [
              "백엔드와 cameraId·eventType·capturedAt·originalEventId 이벤트 계약 협의",
              "프론트엔드의 Tracking ID·화면 표시 ID, 인프라의 RTSP·MQTT·Worker 실행 조건 조율",
              "팀장으로서 RTSP 입력부터 화면 표시까지 구간별 로그와 완료 기준을 통합 검증",
            ],
          },
        ],
      },
      {
        title: "판단과 배운 점",
        items: [
          "**모델을 다시 학습하기 전에 입력 흐름부터 확인했습니다**: 낙상 판단이 끊기는 현상을 처음에는 LSTM 성능 문제로 생각했지만, 실제 원인은 낙상 순간 Tracking ID가 변경되면서 입력 시퀀스가 분리되는 것이었습니다. 이를 통해 모델 결과가 좋지 않을 때 모델 자체뿐 아니라 검출·추적·시퀀스 생성 과정이 올바른지 먼저 확인해야 한다는 점을 배웠습니다.",
          "**실시간 서비스에서는 데이터의 현재성이 중요했습니다**: 모든 프레임을 순서대로 처리하자 과거 영상이 누적되어 현재 위험을 늦게 분석하게 됐습니다. 최신 프레임을 우선하도록 처리 정책을 변경하면서, 데이터 손실을 무조건 피하기보다 서비스 목적에 따라 무엇을 보존하고 버릴지 결정해야 한다는 점을 배웠습니다.",
        ],
      },
      {
        title: "이 프로젝트로 보여주는 역량",
        items: [
          "Pose 모델의 속도·시퀀스 생성·후속 행동 분류 결과를 함께 비교하는 모델 선택 능력",
          "객체 검출·Tracking·시계열 행동 분류를 연결한 실시간 영상 AI 파이프라인 구현",
          "Tracking 단절과 입력 시퀀스 오류를 로그와 프레임 단위로 추적하는 문제 해결 능력",
          "프레임 처리 정책과 TensorRT 효과를 구분해 전체 지연을 측정하는 실시간 최적화",
          "모델 출력을 상태 후처리와 MQTT 위험 이벤트로 전환하는 서비스 연동 역량",
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
        title: "판단과 배운 점",
        items: [
          "**모델 교체보다 데이터 품질을 먼저 개선**: 조명과 병변 형태 차이로 일반화가 어려웠지만, 더 큰 모델을 적용하기 전에 학습 데이터의 다양성을 먼저 확보해야 한다고 판단했습니다. Elastic Deformation과 Grid Distortion으로 실제 조직의 형태 변화를 반영했습니다. 이를 통해 성능 문제의 원인이 항상 모델 구조에 있는 것은 아니며 데이터 설계를 먼저 점검해야 한다는 점을 배웠습니다.",
          "**증강 효과보다 Bounding Box 정합성을 우선**: 영상을 변형한 뒤 라벨이 병변 위치와 일치하지 않으면 잘못된 데이터를 학습하게 됩니다. 증강 이미지의 다양성보다 변환된 병변과 Bounding Box가 정확히 일치하는지를 확인했습니다. 이를 통해 데이터 증강은 이미지 수를 늘리는 작업이 아니라 입력과 정답의 의미를 함께 보존하는 과정이라는 점을 배웠습니다.",
        ],
      },
      {
        title: "이 프로젝트로 보여주는 역량",
        items: [
          "의료·비전 데이터셋 분할과 Geometric Data Augmentation 파이프라인 구축",
          "Object Detection 모델 Fine-tuning과 mAP 기반 성능 평가",
          "증강 영상과 Bounding Box 라벨 정합성 검증",
          "OpenCV 기반 영상·웹캠 실시간 탐지 애플리케이션 구현",
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
        title: "판단과 배운 점",
        items: [
          "**라벨 부족을 문제 정의의 기준으로 삼았습니다**: 병변 위치 라벨이 부족한 상태에서 지도학습을 강행하기보다 정상 조직의 분포를 학습하고 정상에서 벗어난 영역을 찾는 비지도 이상 탐지로 문제를 다시 정의했습니다. 이를 통해 원하는 모델을 먼저 정하는 것이 아니라 확보 가능한 데이터에 맞춰 문제와 평가 방식을 설계해야 한다는 점을 배웠습니다.",
          "**고정 임계값보다 영상별 분포를 반영**: 초음파 영상마다 밝기와 노이즈가 달라 같은 임계값에서도 오탐 수준이 달라졌습니다. 이미지별 Reconstruction Error 분포를 반영하는 Dynamic Threshold를 적용해 고정 기준의 한계를 보완했습니다. 이 경험을 통해 후처리도 모델 성능의 일부이며 입력 환경의 변화에 대응하도록 설계해야 한다는 점을 배웠습니다.",
        ],
      },
      {
        title: "이 프로젝트로 보여주는 역량",
        items: [
          "VAE 기반 비지도 이상 탐지 모델과 재구성 오차 분석",
          "Reconstruction Error Map 생성 및 이상 후보 영역 시각화",
          "영상별 픽셀 분포를 반영한 Dynamic Threshold 후처리",
          "라벨 부족 환경에서의 문제 재정의와 검증 한계 관리",
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
        title: "판단과 배운 점",
        items: [
          "**벡터 검색 하나로 모든 질문을 해결하지 않았습니다**: Vector Search는 의미가 유사한 문서를 찾는 데 유리하지만 cameraLoginId와 frameId 같은 정확한 식별자를 놓칠 수 있었습니다. 키워드 검색에 강한 BM25와 문맥 검색에 강한 Vector Search를 결합하고 RRF로 결과 순위를 통합했습니다. 이를 통해 검색 기술은 하나를 선택하는 것이 아니라 질문 유형에 따라 강점을 조합해야 한다는 점을 배웠습니다.",
          "**구현 결과와 검증된 성과를 구분했습니다**: 하이브리드 검색 구조를 구현했더라도 실제 검색 품질이 향상됐다고 주장하려면 Recall@k와 MRR 같은 정량 평가가 필요했습니다. 아키텍처 구현과 품질 검증 결과를 분리하고 부족한 평가는 후속 과제로 남겼습니다. 이를 통해 구현 사실과 검증된 성과를 명확히 구분하는 것이 기술 신뢰도를 높인다는 점을 배웠습니다.",
        ],
      },
      {
        title: "이 프로젝트로 보여주는 역량",
        items: [
          "문서 정규화와 메타데이터 검색 인덱스 설계",
          "BM25와 Vector Search를 결합한 하이브리드 검색 구현",
          "RRF 기반 검색 결과 순위 통합",
          "정적 JSON 인덱스와 Cloudflare 배포 환경 최적화",
          "검색 품질 평가 범위와 구현 성과를 구분하는 검증 설계",
        ],
      },
    ],
  },
];

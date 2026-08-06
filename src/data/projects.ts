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
      "YOLO 비교·선정, Tracking과 LSTM 입력 개선, 프레임 버퍼·TensorRT 최적화와 영상 송출을 담당하고 MQTT 토픽 정합성을 맞춘 실시간 컴퓨터비전 프로젝트",
    description:
      "2개 카메라 내부 테스트에서 위험 이벤트 29건을 모두 1초 안에 MQTT Subscriber까지 전달했습니다. Spring Boot·STOMP·React 관제 화면 표시는 별도 통합 테스트로 확인했고, 이후 행동 분류, Tracking 단절과 추론 병목을 구간별 수치로 개선했습니다.",
    meta: {
      period: "2026.05–2026.07",
      role: "5인 팀장 · YOLO 비교·선정, Tracking·프레임 버퍼·TensorRT, LSTM 특징 개선, 영상 송출 담당",
      service: "스마트 안전 관제 AI 시스템",
    },
    heroImage: {
      src: "/images/smart-safety/ai-pipeline.jpg",
      caption:
        "RTSP 입력부터 Pose·Tracking·LSTM·상태 후처리·MQTT 이벤트까지 연결한 AI 판단 파이프라인",
    },
    highlights: [
      "29/29건 위험 이벤트 1초 내 MQTT Subscriber 도달",
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
          "다수의 CCTV를 소수의 관제 인력이 동시에 확인하는 환경에서는 모든 위험 상황을 즉시 발견하기 어렵습니다. 특히 낙상과 실신은 사고 직후의 발견과 대응 속도가 중요합니다.\n\n이를 해결하기 위해 RTSP 영상에서 사람의 자세와 움직임을 분석하고, 위험 가능성이 높은 장면을 실시간으로 선별해 MQTT 이벤트로 관제 서비스까지 전달하는 AI 시스템을 구현했습니다. 내부 2개 카메라 테스트에서는 발생한 위험 이벤트 29건이 모두 1초 안에 MQTT Subscriber에 도달했습니다. Spring Boot 저장·STOMP·React 관제 화면 표시는 별도 통합 테스트로 확인했습니다.\n\n이후 모델 정확도만 높이는 것이 아니라 사람별 시계열이 끊기지 않는지, 분석 결과가 현재 영상보다 늦어지지 않는지, 순간적인 오판이 실제 경보로 이어지지 않는지까지 구간별 지표로 개선했습니다.",
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
          "AI Worker의 프레임 수신부터 MQTT Subscriber 수신까지 전달 지연은 평균 20.931ms, p95 26ms, 최대 27ms로 측정했습니다. Spring Boot 저장·STOMP·React 화면 표시는 별도 통합 테스트로 확인했습니다. 전체 처리 지연과 Dropped Frame은 TensorRT와 최신 프레임 처리 정책이 함께 적용된 통합 결과입니다.",
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
              "AI Worker의 MQTT 토픽·메시지 계약 정합성 조율",
              "RTSP 영상 송출 방식 비교와 관제 화면 송출 안정화",
            ],
          },
          {
            title: "협업·통합",
            items: [
              "기존 MQTT 발행 구조를 사용하되 백엔드와 토픽·메시지 필드 규칙을 맞추고 연동 테스트",
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
        title: "핵심 기술 역량",
        items: [
          "Pose 모델의 속도·시퀀스 생성·후속 행동 분류 결과를 함께 비교하는 모델 선택 능력",
          "객체 검출·Tracking·시계열 행동 분류를 연결한 실시간 영상 AI 파이프라인 구현",
          "Tracking 단절과 입력 시퀀스 오류를 로그와 프레임 단위로 추적하는 문제 해결 능력",
          "프레임 처리 정책과 TensorRT 효과를 구분해 전체 지연을 측정하는 실시간 최적화",
          "AI Worker와 관제 시스템 사이의 MQTT 토픽·메시지 계약을 맞추는 통합 협업 역량",
        ],
      },
    ],
  },
  {
    icon: Microscope,
    badge: "Supporting",
    title: "RF-DETR 기반 대장 내시경 용종 검출 애플리케이션",
    summaryLine: "기하학적 증강의 효과보다 라벨 정합성을 우선하고, 데이터 품질과 검증 조건을 관리한 의료영상 객체검출 프로젝트",
    description:
      "Kvasir 용종 데이터를 **Train 70% / Val 20% / Test 10%**로 분할한 팀 프로젝트입니다. 저는 Data-Centric 증강 적용과 증강 후 bbox 정합성 검토를 담당했고, 팀은 RF-DETR 모델과 영상·웹캠 입력 탐지 애플리케이션을 구현했습니다.",
    meta: {
      period: "2025.03–2025.11",
      role: "데이터 증강 적용 · 증강 후 bbox 정합성 검토",
      service: "대장 내시경 용종 검출 애플리케이션",
    },
    heroImage: {
      src: "/images/rf-detr-polyp-detection.png",
      caption: "대장 내시경 용종 검출 대표 화면",
    },
    highlights: ["mAP@50 86.2% · 팀 모델", "증강 후 bbox 정합성 검토", "22+ FPS · 팀 애플리케이션"],
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
        title: "프로젝트 요약",
        items: [
          "**문제**: 내시경 영상의 조명·형태 편차를 단순 모델 교체만으로 해결하기 어려웠습니다.",
          "**개인 기여**: Elastic Deformation·Grid Distortion 증강을 적용하고, 변환 후 Bounding Box가 실제 병변 영역과 일치하는지 검토했습니다. RF-DETR+DINOv2 fine-tuning과 OpenCV 영상·웹캠 애플리케이션은 팀 구현입니다.",
          "**검증 결과**: 팀 모델은 Kvasir 10% 내부 테스트셋에서 mAP@50 86.2%를 기록했고, GUI 렌더링을 포함해 22+ FPS를 확인했습니다.",
          "**핵심 역량**: 센서·영상 데이터 변형 과정에서 입력과 정답의 정합성을 확인하고, 데이터 품질 문제를 모델 문제와 구분했습니다.",
        ],
      },
      {
        title: "시스템 구조",
        diagram: `flowchart LR
    Raw["Kvasir Dataset\\n(Polyp Images)"] --> Split["Data Split\\nTrain 70% / Val 20% / Test 10%"]
    Split --> Aug["Data Augmentation"]
    subgraph Augment ["Data-Centric Augmentation"]
        E["Elastic Deformation\\n비선형 조직 형태 변형 모사"]
        G["Grid Distortion\\n국소적 기하학적 왜곡 모사"]
    end
    Aug --> RF["RF-DETR + DINOv2\\nFine-tuning"]
    RF --> GUI["OpenCV GUI\\nTeam Inference App"]
    GUI --> Result["Video/Webcam Detection\\nmAP@50 86.2%"]`,
      },
      {
        title: "핵심 문제 해결",
        items: [
          "**문제**: 내시경 영상의 조명 변화와 병변 형태 편차로 인해 일반화가 어려웠습니다.",
          "**판단**: 모델을 교체하기보다 데이터 다양성과 증강 후 bbox 정합성 확보를 우선했습니다.",
          "**해결**: 저는 Elastic Deformation과 Grid Distortion을 적용하고, 변환된 bbox가 실제 용종 영역과 일치하는지 검토했습니다. 팀은 RF-DETR fine-tuning과 OpenCV GUI의 카메라·영상 입력 연동을 구성했습니다.",
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
            ["팀 애플리케이션 처리 속도", "22+ FPS", "OpenCV GUI 렌더링 및 디스플레이 포함 팀 측정 결과"],
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
        title: "핵심 기술 역량",
        items: [
          "Elastic Deformation·Grid Distortion 기반 Geometric Data Augmentation 적용",
          "증강 영상과 Bounding Box 라벨 정합성 검토",
          "의료영상 데이터 품질 문제를 모델 문제와 구분하는 검증",
          "팀 모델·애플리케이션 성과와 개인 기여 범위를 구분한 기술 설명",
        ],
      },
    ],
  },
  {
    icon: BarChart2,
    badge: "Supporting",
    title: "VAE 기반 유방 초음파 이상 탐지",
    summaryLine: "라벨 부족 환경에서 팀의 VAE 재구성 흐름을 이해하고, 데이터 증강과 차영상 기반 후보 시각화에 기여한 프로젝트",
    description:
      "라벨 부족 환경에서 정상 조직 분포를 학습하는 VAE 재구성 흐름과 차영상을 활용해 이상 후보를 확인한 팀 프로젝트입니다. 저는 초음파 영상 데이터 증강과 원본·재구성 차영상 기반 후보 시각화 아이디어를 담당했습니다.",
    meta: {
      period: "2024.03–2024.10",
      role: "초음파 영상 데이터 증강 · 차영상 기반 이상 후보 시각화 아이디어",
      service: "유방 초음파 이상 후보 영역 시각화",
    },
    highlights: ["초음파 영상 데이터 증강", "차영상 기반 후보 시각화 아이디어", "VAE 재구성 · 팀 흐름"],
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
        title: "프로젝트 요약",
        items: [
          "**문제**: 병변 위치 라벨이 부족해 일반적인 지도학습 방식의 적용과 평가가 제한적이었습니다.",
          "**개인 기여**: 초음파 영상 데이터 증강을 적용하고, 원본 영상과 팀의 VAE 재구성 결과 차이를 활용해 이상 후보를 시각화하는 아이디어를 제안했습니다. VAE 모델과 후처리 구현은 팀 작업입니다.",
          "**검증 기준**: 평가 조건이 불명확한 과거 Dice 수치는 대표 성과에서 제외하고, 정성 확인 결과와 미완료 검증 범위를 분리했습니다.",
          "**핵심 역량**: 정상 상태와의 차이를 이상 후보로 해석하는 관점을 이해하고, 개인 기여는 데이터 증강과 차영상 시각화로 구분했습니다.",
        ],
      },
      {
        title: "시스템 구조",
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
          "**해결**: 팀은 VAE 재구성 결과와 후처리 흐름을 구성했고, 저는 원본·재구성 차영상을 활용해 이상 후보를 직관적으로 확인하는 시각화 아이디어와 데이터 증강을 담당했습니다.",
          "**결과**: 팀 흐름에서 이상 후보 영역을 시각화했고, 저는 데이터 증강과 차영상 표현 방식으로 결과를 검토하기 쉽게 만드는 데 기여했습니다.",
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
          "**Dice Coefficient 평가 조건 명시**: 과거 문서의 Dice 약 90% 수치는 데이터셋 분할, Ground-Truth 마스크 출처, 평균 산정 방식이 엄밀히 확정되지 않아 대표 성과에서 제외하고 추가 검증 과제로 남겼습니다.",
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
          "**차영상으로 이상 후보를 설명**: 원본과 재구성 영상의 차이를 시각화하면 모델 출력이 어느 영역에서 달라졌는지 더 직관적으로 확인할 수 있다고 판단했습니다. 팀의 VAE 흐름에 차영상 기반 후보 시각화 아이디어를 제안하면서, 모델 결과를 사람이 검토 가능한 형태로 표현하는 과정의 중요성을 배웠습니다.",
        ],
      },
      {
        title: "핵심 기술 역량",
        items: [
          "초음파 영상 데이터 증강과 입력 품질 검토",
          "원본·재구성 차영상 기반 이상 후보 시각화 아이디어",
          "팀 VAE 재구성 흐름과 개인 기여 범위 구분",
          "라벨 부족 환경에서의 문제 정의와 검증 한계 관리",
        ],
      },
    ],
  },
  {
    icon: Brain,
    badge: "Supporting",
    title: "LLM Wiki · Hybrid Search 지식 시스템",
    summaryLine:
      "스마트 안전관제 개발 지식을 코드 근거와 연결하고, 검색 기준선 측정부터 Elasticsearch 확장 학습까지 이어간 프로젝트",
    description:
      "스마트 안전관제 시스템 개발 과정에서 흩어진 문제 해결 기록, 실험 결과, 설계 판단을 구조화해 **50개 Wiki 문서 / 737개 Chunk**로 검색 가능한 지식 시스템을 구축했습니다. **61개 Golden Query 평가셋**으로 Vector·BM25·Hybrid 검색 기준선을 먼저 측정하고, 그 한계를 바탕으로 Elasticsearch의 BM25·dense_vector kNN·HNSW·RRF를 학습해 별도 Provider로 구현했습니다. 실제 Elasticsearch 전체 질의 실측은 후속 검증으로 구분했습니다.",
    highlights: [
      "50개 문서 · 737개 Chunk",
      "61개 Golden Query 평가",
      "Hybrid Hit@5 82.14%",
      "Elasticsearch Provider 설계·구현",
    ],
    tags: [
      "RAG",
      "Knowledge Management",
      "BM25",
      "Vector Search",
      "Hybrid Search",
      "Elasticsearch",
      "TypeScript",
      "LLM",
    ],
    gradient: "from-violet-500/10 to-fuchsia-500/10",
    hasAwards: false,
    details: [
      {
        title: "문제와 목표",
        body:
          "스마트 안전관제 시스템은 AI 추론, RTSP 스트리밍, MQTT 이벤트, 백엔드 저장, 프론트 알림까지 여러 기술 영역이 연결된 복합 프로젝트였습니다. 개발이 진행될수록 RTSP 지연, Overlay 불일치, 중복 알림, TensorRT 검증, VLM 후처리 분리 같은 문제의 원인과 해결 기록이 Git 커밋, 메신저, 개인 메모, 코드 내부에 흩어졌습니다. 이 프로젝트의 목표는 흩어진 개발 기록을 단순 문서가 아니라 다시 검색하고 재사용할 수 있는 엔지니어링 지식 자산으로 전환하는 것이었습니다.",
      },
      {
        title: "프로젝트 요약",
        items: [
          "**문제**: 여러 저장소와 메모에 흩어진 장애 원인과 기술 판단을 다시 찾기 어려웠습니다.",
          "**담당 역할**: 50개 문서를 737개 Chunk로 구조화하고, 61개 Golden Query로 Vector·BM25·Hybrid 검색을 비교했습니다. Elasticsearch Provider와 Legacy fallback 구조도 구현했습니다.",
          "**검증 결과**: 기존 Hybrid 검색 Hit@5 82.14%를 기준선으로 확보했고, 신규 테스트 3개와 전체 회귀 테스트 92개를 통과했습니다.",
          "**핵심 역량**: 장애 이력과 기술 판단을 검색 가능한 자산으로 만들고, 신규 기능이 기존 검색 품질을 깨뜨리지 않는지 회귀 테스트로 검증했습니다.",
        ],
      },
      {
        title: "저장소와 데모",
        items: [
          "**GitHub 저장소**: https://github.com/Anjingyeong/llm_wiki_strange",
          "**핵심 가치**: 단순한 문서 보관이 아니라, 문제·원인·판단·코드 근거를 다시 검색 가능한 형태로 구조화",
          "**활용 목적**: 개발 중 트러블슈팅 재참조, 기술 근거 정리, 기술 설명을 위한 지식 저장소",
        ],
      },
      {
        title: "지식화 범위",
        items: [
          "**Architecture**: AI · Backend · Frontend · Infra 연결 구조 정리",
          "**Engineering Decision**: 기술 선택 이유와 대안 비교 기록",
          "**Bug Report**: 증상, 원인, 해결 방식, 트레이드오프 문서화",
          "**Experiment**: 모델·추론·스트리밍 성능 수치 및 비교 결과 축적",
          "**Event Contract**: MQTT Payload와 동기화 규칙 정리",
          "**Incident Metadata**: incidentAt / cameraId / eventType / severity 기준으로 안전 이벤트 문서 필터링",
          "**Source Map**: 실제 구현 코드 경로와 문서 연결",
          "**Implementation Status**: planned / implemented / verified / deprecated 상태 구분",
        ],
      },
      {
        title: "시스템 구조",
        diagram: `flowchart LR
    Raw["📝 Raw Notes / Logs / Screenshots"] --> Normalize["🧹 Document Normalization"]
    Normalize --> Chunk["✂️ Chunking + Context Prefix"]
    Chunk --> Meta["🏷️ Metadata\\ncategory / tags / sourcePath / status"]
    Meta --> Legacy["🔎 Legacy Search\\nBM25 / Vector / RRF"]
    Meta --> Elastic["⚡ Elasticsearch Provider\\nBM25 / dense_vector kNN / HNSW / RRF"]
    Legacy --> Answer["📄 Search Result + Source Evidence"]
    Elastic --> Answer
    Answer --> Reuse["♻️ Troubleshooting / Engineering Decisions / Knowledge Reuse"]`,
      },
      {
        title: "검색 구조와 인덱싱",
        body:
          "Markdown 문서를 Frontmatter와 섹션 단위로 구조적으로 분할하고, Contextual Prefix와 메타데이터를 포함한 검색 인덱스를 생성했습니다. 각 Chunk에는 문서 제목, slug, heading path, category, tags, 관련 문서, 코드 심벌, 참조 파일, 구현 상태, content hash 등을 포함시켜 단순 키워드 검색보다 더 깊은 근거 추적이 가능하도록 설계했습니다.",
        table: {
          headers: ["항목", "내용"],
          rows: [
            ["Wiki 문서 수", "50개"],
            ["RAG Chunk 수", "737개"],
            ["증분 인덱싱 재사용", "728개"],
            ["신규 생성 Chunk", "9개"],
            ["누락 문서", "0개"],
          ],
        },
      },
      {
        title: "검색 품질 기준선 평가",
        body:
          "Elasticsearch를 도입하기 전에 먼저 현재 검색 구조의 품질을 직접 측정했습니다. 61개 Golden Query 평가셋을 구성해 Vector, BM25, Hybrid 검색을 동일 조건으로 비교했고, 새로운 기술 도입 전에 baseline을 수치로 확보했습니다.",
        table: {
          headers: ["검색 방식", "Hit@5", "Recall@5", "MRR", "nDCG@5", "No-result 정확도", "p95"],
          rows: [
            ["Vector", "69.64%", "46.13%", "0.5696", "0.4618", "0%", "2.45ms"],
            ["BM25", "75.00%", "50.00%", "0.6369", "0.4977", "40%", "127.73ms"],
            ["Hybrid", "82.14%", "61.01%", "0.6875", "0.5884", "100%", "171.89ms"],
          ],
        },
      },
      {
        title: "Elasticsearch 학습·확장 구현",
        items: [
          "**Legacy 검색 유지**: 기존 BM25 · 로컬 Vector · RRF 경로를 보존한 상태에서 Elasticsearch Provider를 분리 설계",
          "**BM25 검색**: title, codeSymbols, tags, headingPath 등에 가중치를 둔 검색 구성",
          "**Vector 검색**: 256차원 임베딩을 dense_vector 필드에 저장하고 cosine similarity 기반 kNN 검색 구성",
          "**HNSW 적용**: int8_hnsw 인덱싱 구조로 확장성 고려",
          "**Hybrid 검색**: BM25 결과와 kNN 결과를 RRF로 결합",
          "**Bulk Indexing**: RAG JSON 인덱스를 Elasticsearch 문서 형식으로 변환해 200개 단위로 _bulk 색인",
          "**Fallback 구조**: Elasticsearch 연결 실패 시 기존 Legacy 검색 경로로 복구 가능하도록 분리",
        ],
      },
      {
        title: "검증 범위와 한계",
        items: [
          "**완료된 범위**: Elasticsearch Mapping 설계, Bulk 색인 코드, BM25 검색 코드, dense_vector kNN 검색 코드, RRF Hybrid 검색, Metadata Filter, 단위 테스트, 회귀 테스트, TypeScript/Vite 빌드 검증",
          "**검증 결과**: Elasticsearch 신규 테스트 3개 통과, 전체 회귀 테스트 92개 통과, 실패 0건",
          "**미완료 범위**: Docker Desktop 환경 이슈로 실제 Elasticsearch 컨테이너 색인 및 61개 질의 전체 실측은 미완료",
          "**성과 해석**: 실제 Elasticsearch 환경의 전체 질의 실측 전에는 성능 개선으로 단정하지 않고, 비교 평가가 가능한 구조를 설계·구현한 범위로 구분",
        ],
      },
      {
        title: "판단과 배운 점",
        items: [
          "**기록을 많이 남기는 것과 지식화는 다르다는 점을 배웠습니다**: 단순 메모는 시간이 지나면 다시 찾기 어렵습니다. 문제, 원인, 결정, 실험 결과, 코드 근거가 연결되어야 실제로 재사용 가능한 엔지니어링 지식이 된다는 점을 경험했습니다.",
          "**새 기술 도입 전에는 baseline이 필요하다는 점을 배웠습니다**: 처음부터 Elasticsearch를 붙였다면 개선 여부를 설명하기 어려웠습니다. 기존 Vector·BM25·Hybrid 성능을 먼저 측정하고 기준선을 확보한 뒤 확장 구조를 설계함으로써 기술 도입의 이유를 수치로 설명할 수 있었습니다.",
          "**검색 품질과 지연시간은 트레이드오프라는 점을 배웠습니다**: Vector 검색은 빠르지만 정확도가 낮았고, Hybrid 검색은 정확도가 높지만 계산 비용이 증가했습니다. 검색 시스템은 정확도만이 아니라 지연시간, 운영 복잡도, 장애 대응 전략까지 함께 고려해야 한다는 점을 배웠습니다.",
          "**구현과 검증 완료를 구분하는 태도가 중요하다는 점을 배웠습니다**: 코드가 존재하는 것과 실제 환경에서 검증된 것은 다릅니다. 저는 구현 사실과 검증된 성과를 분리해 설명하는 것이 오히려 기술 신뢰도를 높인다고 판단했습니다.",
          "**Wiki도 하나의 제품이라는 관점을 갖게 되었습니다**: 문서를 작성하는 데서 끝나는 것이 아니라 인덱싱, 검색, 테스트, 회귀 검증, 품질 평가가 필요했습니다. 이를 통해 문서 시스템 역시 지속적으로 관리하고 개선해야 하는 소프트웨어 제품이라는 점을 배웠습니다.",
        ],
      },
      {
        title: "핵심 기술 역량",
        items: [
          "개발 과정의 문제 해결 기록을 구조화된 엔지니어링 지식으로 전환하는 능력",
          "BM25 · Vector Search · RRF 기반 하이브리드 검색 설계 및 평가",
          "Golden Query 평가셋 구성과 검색 품질 정량 비교",
          "Elasticsearch BM25 · dense_vector kNN · HNSW · Bulk Indexing 학습 및 설계/구현",
          "Legacy fallback을 고려한 점진적 전환 전략 설계",
          "구현 범위와 검증 완료 범위를 구분해 설명하는 기술 커뮤니케이션 능력",
        ],
      },
    ],
  },
];

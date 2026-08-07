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

export type ProjectStory = {
  readonly asIs: string;
  readonly task: string;
  readonly action: string;
  readonly toBe: string;
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
  readonly story?: ProjectStory;
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
      "낙상 판단 오류를 입력 특징·Tracking 연속성·처리 지연으로 나눠 측정하고, 각 병목을 개선해 관제 이벤트 흐름까지 연결한 대표 프로젝트",
    description:
      "행동 분류 F1을 89.29%에서 93.49%로 높이고, 자체 낙상 테스트에서 ID Switch를 8건에서 1건으로 줄였습니다. TensorRT와 최신 프레임 정책이 함께 적용된 통합 조건의 전체 처리 지연은 11.789ms에서 6.101ms로 감소했으며, 최종 위험 판단을 MQTT로 전달해 백엔드·관제 화면과 별도 통합 테스트로 확인했습니다.",
    meta: {
      period: "2026.05–2026.07",
      role: "5인 팀장 · YOLO 비교·선정, Tracking·프레임 버퍼·TensorRT, LSTM 특징 개선, 영상 송출 담당",
      service: "스마트 안전 관제 AI 시스템",
    },
    story: {
      asIs:
        "낙상 순간 Track ID가 끊기고, 51D 자세 좌표만으로는 하강 전이를 충분히 표현하기 어려웠습니다. 입력 속도가 추론보다 빠른 구간에는 과거 프레임도 누적됐습니다.",
      task:
        "5인 팀장 겸 AI 담당으로 사람별 시계열 연속성, 행동 분류 정확도, 프레임 현재성을 함께 개선하고 최종 판단을 관제 서비스가 소비할 수 있는 이벤트로 연결해야 했습니다.",
      action:
        "Tracking Relink·Grace, 54D Motion Feature, Bounded Queue·Drop-old와 TensorRT를 구간별로 적용했습니다. AI 결과는 MQTT payload로 발행하고 Backend·Frontend 담당자와 이벤트 계약을 맞췄습니다.",
      toBe:
        "ID Switch 8→1, 행동 분류 F1 89.29%→93.49%, 전체 처리 지연 11.789ms→6.101ms를 확인했습니다. MQTT 이후 Spring Boot 저장·React 표시는 팀 통합 테스트로 검증했습니다.",
    },
    heroImage: {
      src: "/images/smart-safety/ai-pipeline.jpg",
      caption:
        "RTSP 입력부터 Pose·Tracking·LSTM·상태 후처리·MQTT 이벤트까지 연결한 AI 판단 파이프라인",
    },
    highlights: [
      "행동 분류 F1 89.29% → 93.49%",
      "ID Switch 8건 → 1건",
      "전체 처리 지연 11.789ms → 6.101ms",
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
            text: "낙상처럼 Bounding Box 형태가 급격히 바뀌는 동작에서는 IoU 중심 매칭만으로 ID 연속성을 유지하기 어려웠습니다. 기본 매칭이 실패한 구간에만 relink·grace 조건을 단계적으로 적용해야 오연결을 늘리지 않고 시퀀스를 이어갈 수 있었습니다.",
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
            text: "실시간 관제에서는 모든 프레임을 처리하는 것보다 분석 결과가 현재 영상에서 얼마나 늦지 않았는지가 중요했습니다. 입력 적체와 GPU 추론은 서로 다른 병목이므로 프레임 처리 정책과 TensorRT 효과를 분리해 측정해야 했습니다.",
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
    summaryLine: "Kvasir 데이터에 기하학적 증강을 적용해 내시경 영상의 형태·시야 변화를 보완한 의료영상 팀 프로젝트",
    description:
      "Kvasir 용종 데이터를 **Train 70% / Val 20% / Test 10%**로 분할한 팀 프로젝트입니다. 저는 Elastic Deformation·Grid Distortion 기반 데이터 증강을 설계하고 적용했습니다. RF-DETR fine-tuning과 탐지·결과 저장 애플리케이션은 팀 구현이며, 최종 팀 모델은 Kvasir 10% 테스트셋에서 mAP@50 86.2%를 기록했습니다.",
    meta: {
      period: "2025.03–2025.11",
      role: "Elastic·Grid 데이터 증강 설계·적용",
      service: "대장 내시경 용종 검출 애플리케이션",
    },
    story: {
      asIs:
        "내시경 영상마다 병변 형태와 주변 조직 굴곡, 촬영 시야가 달라 제한된 학습 데이터만으로 다양한 입력 변화를 반영하기 어려웠습니다.",
      task:
        "팀 프로젝트에서 실제 내시경 영상에 나타날 수 있는 형태·시야 변화를 학습 입력에 보강하는 역할을 맡았습니다.",
      action:
        "Elastic Deformation과 Grid Distortion을 적용해 부드러운 비선형 변형과 국소적인 기하학적 왜곡을 학습 데이터에 추가했습니다.",
      toBe:
        "최종 팀 모델은 Kvasir 10% 테스트셋에서 mAP@50 86.2%를 기록했습니다. 증강 단독 ablation은 없어 팀 성능을 개인 기여로 귀속하지 않았으며, 프로젝트는 교내 금상과 컨소시엄 동상을 수상했습니다.",
    },
    heroImage: {
      src: "/images/rf-detr-polyp-detection.png",
      caption: "대장 내시경 용종 검출 대표 화면",
    },
    highlights: ["Elastic·Grid 증강", "개인 기여: 데이터 증강", "팀 모델 mAP@50 86.2%", "금상 · 컨소시엄 동상"],
    tags: ["Data Augmentation", "Elastic Deformation", "Grid Distortion", "Kvasir Dataset", "RF-DETR", "OpenCV", "Python"],
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
          "**개인 기여**: 내시경 영상의 형태·시야 편차를 학습 입력에 반영하기 위해 Elastic Deformation과 Grid Distortion 데이터 증강을 설계하고 적용했습니다.",
          "**팀 결과**: 최종 팀 모델은 Kvasir 10% 내부 테스트셋에서 mAP@50 86.2%를 기록했습니다. 데이터 증강만의 효과를 분리한 ablation은 진행하지 않아 개인 기여와 팀 성능을 인과로 연결하지 않았습니다.",
          "**역할 구분**: RF-DETR fine-tuning과 탐지·결과 저장 애플리케이션은 팀 구현이며, 제 담당 범위는 데이터 증강입니다.",
          "**핵심 역량**: 데이터 특성에 맞는 증강을 선택하고 팀 성과와 개인 기여를 분리해 설명했습니다.",
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
        title: "왜 Elastic·Grid 증강을 사용했는가",
        items: [
          "**문제**: 내시경 영상마다 병변의 형태와 주변 조직의 굴곡이 달라 학습 입력의 형태 다양성을 보완할 필요가 있었습니다.",
          "**Elastic Deformation**: 영상 전체를 비선형적으로 변형해 부드러운 형태 변화를 추가했습니다.",
          "**Grid Distortion**: 격자 단위의 국소 왜곡을 적용해 서로 다른 기하학적 변형을 학습 입력에 추가했습니다.",
          "**결과 해석**: 최종 팀 모델의 mAP@50은 86.2%였습니다. 다만 증강 전후만 고정한 별도 ablation이 없으므로 이 수치를 증강 효과로 단정하지 않았습니다.",
        ],
        images: [
          { src: "/images/rf-detr-polyp-detection.png", caption: "대장 내시경 용종 검출 시각화" },
          { src: "/images/rf_detr_aug.png", caption: "Elastic Deformation 및 Grid Distortion 데이터 증강 예시" },
        ],
      },
      {
        title: "개인 기여와 팀 결과를 분리해 검증했습니다",
        body: "데이터 증강은 제가 담당했고, 모델 학습·애플리케이션 성능은 팀 결과로 구분했습니다.",
        table: {
          headers: ["구분", "내용", "해석"],
          rows: [
            ["개인 담당", "Elastic Deformation · Grid Distortion", "학습 입력의 형태 다양성 보강"],
            ["팀 모델 결과", "mAP@50 86.2%", "Kvasir 10% Test set"],
            ["증강 단독 효과", "별도 ablation 없음", "성능 향상을 개인 기여로 단정하지 않음"],
            ["수상", "교내 금상 · 컨소시엄 동상", "팀 프로젝트 성과"],
          ],
        },
      },
      {
        title: "검증 범위와 한계",
        items: [
          "**증강 단독 효과 미분리**: Elastic·Grid 증강만 바꾼 동일 조건 ablation이 없어 mAP@50 86.2%를 데이터 증강의 단독 성과로 해석하지 않았습니다.",
          "**팀 성과와 개인 기여 구분**: RF-DETR fine-tuning과 애플리케이션은 팀 구현이며, 제 담당 범위는 데이터 증강입니다.",
          "**임상 검증과의 구분**: 본 프로젝트는 의료진 판독 보조용 AI 프로토타입 개발 및 성능 검증 경험이며, 실제 의료기기 인허가나 임상 검증 완료를 의미하지 않습니다.",
        ],
        images: [
          { src: "/images/rf_detr_gold.jpg", caption: "🏆 금상 — 2025 건양대학교 캡스톤디자인 경진대회" },
          { src: "/images/rf_detr_bronze.jpg", caption: "🏆 동상 — 전국 공학교육혁신 컨소시엄 창의적 종합설계 경진대회" },
        ],
      },
      {
        title: "판단과 배운 점",
        items: [
          "**증강 기법도 해결하려는 입력 변화를 기준으로 선택해야 했습니다**: Elastic Deformation은 부드러운 비선형 변형, Grid Distortion은 국소적인 격자 왜곡을 만들어 서로 다른 형태 변화를 보강했습니다. 단순히 증강 종류를 많이 쓰기보다 어떤 변화를 추가하려는지 설명할 수 있어야 했습니다.",
          "**증강 효과를 말하려면 ablation이 필요합니다**: 최종 팀 모델의 mAP@50과 개인이 적용한 증강 기법은 확인할 수 있지만, 증강만 바꾼 동일 조건 비교가 없으면 성능 향상을 제 기여로 귀속할 수 없습니다. 이후에는 Augmentation on/off 실험을 별도로 남기는 기준을 갖게 됐습니다.",
        ],
      },
      {
        title: "핵심 기술 역량",
        items: [
          "Elastic Deformation·Grid Distortion 기반 Geometric Data Augmentation 적용",
          "입력 형태 편차에 맞춰 서로 다른 기하학적 증강을 선택하는 데이터 설계",
          "증강 효과를 분리 측정하기 위한 동일 조건 ablation 필요성 판단",
          "팀 모델·애플리케이션 성과와 개인 기여 범위를 구분한 기술 설명",
        ],
      },
    ],
  },
  {
    icon: BarChart2,
    badge: "Supporting",
    title: "VAE 기반 유방 초음파 이상 탐지",
    summaryLine: "병변 위치 라벨이 부족해 정상 영상 재구성 방식으로 접근하고, 원본·재구성 차이로 이상 후보를 표현한 팀 프로젝트",
    description:
      "병변 위치 라벨이 부족해 정상 영상을 VAE로 재구성하고, 원본과 재구성 영상의 차이를 이상 후보로 확인하는 방식으로 접근했습니다. 저는 팀의 VAE 재구성 결과와 원본의 차영상을 생성하고 비교·시각화했습니다.",
    meta: {
      period: "2024.03–2024.10",
      role: "원본·VAE 재구성 차영상 생성·비교 시각화",
      service: "유방 초음파 이상 후보 영역 시각화",
    },
    story: {
      asIs:
        "병변 위치 라벨을 충분히 확보하기 어려워 일반적인 지도학습 검출 문제로 바로 풀기 어려웠고, 원본과 재구성 영상의 차이도 밝기·노이즈에 영향을 받을 수 있었습니다.",
      task:
        "팀 프로젝트에서 VAE 재구성 결과와 원본의 차이를 사람이 위치별로 확인할 수 있는 형태로 표현해야 했습니다. 제 역할은 두 영상의 차영상을 생성하고 비교·시각화하는 작업이었습니다.",
      action:
        "팀이 생성한 VAE 재구성 영상과 원본의 픽셀별 차이를 계산해 차영상을 만들고, 이상 후보 신호가 나타나는 위치를 비교할 수 있도록 시각화했습니다. Dynamic Threshold 후처리는 팀 구현 범위입니다.",
      toBe:
        "원본-재구성 차이를 이상 후보로 시각화했고, 팀 후처리 결과에서 평가 케이스 B의 Dice가 0.8325→0.9094로 높아졌습니다. 해당 프로젝트로 창의혁신 DNA 산학협력 공학혁신상을 수상했습니다.",
    },
    highlights: [
      "라벨 부족 → 정상 영상 재구성",
      "개인 기여: 차영상 생성",
      "원본·재구성 결과 비교 시각화",
      "팀 후처리 B Dice 0.8325 → 0.9094",
    ],
    tags: ["TensorFlow", "VAE", "Anomaly Detection", "Reconstruction Error", "Image Difference", "Computer Vision"],
    gradient: "from-violet-500/10 to-purple-500/10",
    githubUrl: "https://github.com/Anjingyeong/vae-breast-cancer-anomaly",
    hasAwards: true,
    details: [
      {
        title: "문제와 목표",
        body: "병변 위치 라벨이 충분하지 않아 지도학습용 데이터를 크게 확보하기 어려웠습니다. 그래서 정상 영상을 VAE로 재구성한 뒤 원본과 달라진 영역을 이상 후보로 보는 방식으로 접근했습니다. 지도학습보다 우수하다고 주장하기보다, 확보 가능한 데이터 조건에 맞춰 문제를 풀기 위한 선택이었습니다.",
      },
      {
        title: "프로젝트 요약",
        items: [
          "**문제**: 병변 위치 라벨이 부족해 일반적인 지도학습 방식의 적용과 평가가 제한적이었습니다.",
          "**개인 기여**: 원본 영상과 팀의 VAE 재구성 결과 사이의 차영상을 생성하고, 위치별 차이를 비교할 수 있도록 시각화했습니다. VAE 모델과 후처리는 팀 구현입니다.",
          "**검증 기준**: 평가 조건이 불명확한 과거 Dice 수치는 대표 성과에서 제외하고, 정성 확인 결과와 미완료 검증 범위를 분리했습니다.",
          "**핵심 역량**: 정상 상태와의 차이를 이상 후보 신호로 해석하고, 팀 모델 결과를 비교 가능한 차영상으로 표현했습니다.",
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
          "**판단**: 병변 위치 라벨이 부족한 조건에 맞춰 정상 영상 재구성 기반의 비지도 이상탐지를 선택했습니다.",
          "**해결**: 팀은 VAE 재구성 결과와 후처리 흐름을 구성했고, 저는 원본·재구성 영상의 차영상을 생성해 이상 후보 신호를 위치별로 비교할 수 있도록 시각화했습니다.",
          "**결과**: 원본·재구성 차이를 영상으로 확인할 수 있게 만들었고, Dynamic Threshold와 정량 평가는 팀 후처리 결과로 구분했습니다.",
        ],
        images: [
          { src: "/images/vae_diff.png", caption: "Reconstruction Error Map 기반 오차 시각화" },
          { src: "/images/vae_threshold.png", caption: "Dynamic Threshold 분할 적용 결과" },
          { src: "/images/vae_result.png", caption: "최종 병변 후보 영역 시각화" },
        ],
      },
      {
        title: "팀 후처리의 역할과 검증 한계",
        body: "Dynamic Threshold는 팀 구현 범위입니다. 영상별 Reconstruction Error 분포를 반영해 이진화 기준을 조정했고, 프로젝트 원본 결과표의 평가 케이스 A/B를 그대로 사용해 적용 전후 Dice를 비교했습니다.",
        table: {
          headers: ["평가 케이스", "Dynamic Threshold 미적용", "Dynamic Threshold 적용", "변화"],
          rows: [
            ["A", "0.3951", "0.4011", "+0.0060"],
            ["B", "0.8325", "0.9094", "+0.0769"],
          ],
        },
        note: "A/B는 프로젝트 원본 결과표의 케이스 표기를 그대로 사용했습니다. 세부 데이터 구분은 자료가 남아 있지 않아 임의로 재해석하지 않았습니다.",
      },
      {
        title: "검증 범위와 한계",
        items: [
          "**후처리 정량 비교 부재**: 고정 임계값과 동적 임계값의 동일 조건 FP/FN 비교가 남아 있지 않아 성능 개선 수치를 대표 성과로 사용하지 않았습니다.",
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
          "**데이터 조건이 모델 선택보다 먼저였습니다**: 병변 위치 라벨이 부족한 상황에서는 지도학습 정확도를 억지로 비교하기보다 정상 영상 재구성으로 이상 후보를 찾는 접근이 데이터 조건에 맞았습니다. 모델을 고르기 전에 어떤 라벨을 실제로 확보할 수 있는지 확인해야 했습니다.",
          "**Reconstruction Error는 후처리 기준까지 함께 봐야 했습니다**: 원본과 재구성 영상의 차이는 밝기와 노이즈에도 영향을 받습니다. 이상 후보를 시각화할 때는 VAE 출력뿐 아니라 threshold 방식과 평가 조건까지 함께 정의해야 결과를 해석할 수 있었습니다.",
        ],
      },
      {
        title: "핵심 기술 역량",
        items: [
          "원본·VAE 재구성 영상의 차영상 생성",
          "픽셀별 차이 비교와 이상 후보 신호 시각화",
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
    liveUrl: "https://llmwiki.jingyeong.cloud",
    githubUrl: "https://github.com/Anjingyeong/llm_wiki_strange",
    summaryLine:
      "정확한 기술명 검색에는 BM25, 표현이 다른 질문에는 Vector를 사용하고 RRF로 결합해 검색 품질을 수치로 검증한 개인 프로젝트",
    description:
      "스마트 안전관제 개발 기록 50개를 737개 Section Chunk로 나누고 **61개 Golden Query**로 검색 방식을 비교했습니다. BM25와 Vector 결과를 RRF로 결합한 Hybrid Search는 BM25 대비 Hit@5가 **75.00% → 82.14%**, Recall@5가 **50.00% → 61.01%**로 높아졌습니다. 검색 답변보다 Retrieval 단계의 품질을 먼저 측정하는 데 초점을 맞췄습니다.",
    story: {
      asIs:
        "스마트 안전관제 개발 기록이 Git 커밋, 메모, 여러 문서에 흩어져 과거 오류 원인과 기술 선택 근거를 다시 찾는 데 시간이 걸렸습니다.",
      task:
        "개인 프로젝트로 개발 기록을 검색 가능한 지식으로 구조화하고, 검색 방식이 실제로 좋아졌는지 LLM 답변이 아니라 Retrieval 단계에서 비교할 기준을 만들어야 했습니다.",
      action:
        "50개 문서를 737개 Section Chunk로 구성하고 BM25·Vector Search를 RRF로 결합했습니다. 61개 Golden Query를 만들어 Vector·BM25·Hybrid를 Hit@5·Recall@5·MRR로 같은 조건에서 평가했습니다.",
      toBe:
        "BM25 대비 Hybrid Hit@5는 75.00%→82.14%, Recall@5는 50.00%→61.01%, MRR은 0.6369→0.6875로 높아졌고 검색 품질을 반복 측정할 수 있는 평가 기준을 확보했습니다.",
    },
    highlights: [
      "50개 문서 · 737개 Chunk",
      "61개 Golden Query 평가",
      "Hybrid Hit@5 82.14%",
      "BM25 + Vector + RRF",
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
          "**담당 역할**: 50개 문서를 737개 Section Chunk로 구조화하고, 61개 Golden Query로 Vector·BM25·Hybrid 검색을 같은 조건에서 비교했습니다.",
          "**검증 결과**: BM25 대비 Hybrid의 Hit@5는 75.00%에서 82.14%, Recall@5는 50.00%에서 61.01%, MRR은 0.6369에서 0.6875로 높아졌습니다.",
          "**핵심 역량**: LLM 답변 품질과 Retrieval 품질을 분리하고, Hit@5·Recall@5·MRR로 검색 단계부터 개선 여부를 확인했습니다.",
        ],
      },
      {
        title: "배포와 저장소",
        items: [
          "**Live Service**: https://llmwiki.jingyeong.cloud",
          "**GitHub 저장소**: https://github.com/Anjingyeong/llm_wiki_strange",
          "**핵심 가치**: 단순한 문서 보관이 아니라, 문제·원인·판단·코드 근거를 다시 검색 가능한 형태로 구조화",
          "**활용 목적**: 개발 중 트러블슈팅 재참조, 기술 근거 정리, 기술 설명을 위한 지식 저장소",
        ],
      },
      {
        title: "왜 BM25 + Vector + RRF를 사용했는가",
        items: [
          "**BM25**: YOLO26n, cameraLoginId, 오류 메시지처럼 정확한 기술명·식별자가 들어간 질문에서 키워드 일치를 활용했습니다.",
          "**Vector Search**: 같은 의미를 다른 표현으로 묻는 질문에서 문장 의미가 가까운 문서를 찾는 데 사용했습니다.",
          "**RRF**: BM25와 Vector의 점수 범위를 억지로 맞추지 않고 두 검색 결과의 순위를 결합했습니다.",
          "**결과**: BM25 단독 대비 Hybrid Hit@5 75.00% → 82.14%, Recall@5 50.00% → 61.01%로 개선됐습니다.",
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
          "Markdown 문서를 제목과 섹션 구조를 기준으로 나누고, 각 Chunk가 어느 문서와 섹션에서 왔는지 추적할 수 있도록 source 정보를 유지했습니다. 검색 품질에 직접 필요한 구조만 남기고, 세부 메타데이터는 필터링이나 근거 추적이 필요한 경우에만 사용했습니다.",
        table: {
          headers: ["항목", "내용"],
          rows: [
            ["Wiki 문서 수", "50개"],
            ["RAG Chunk 수", "737개"],
            ["Golden Query", "61개 · 56 answerable"],
            ["No-result accuracy", "100%"],
            ["Hybrid 검색 p95", "171.89ms"],
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
          "**Retrieval과 답변 생성을 분리해 평가했습니다**: LLM이 그럴듯하게 답하는지만 보지 않고, 정답 근거가 Top-k 안에 들어오는지를 Hit@5·Recall@5·MRR로 먼저 측정했습니다. 검색 문제와 생성 문제를 분리해 원인을 찾을 수 있었습니다.",
          "**BM25와 Vector의 강점이 달랐습니다**: 정확한 기술명·식별자는 BM25가 유리했고, 표현이 달라진 질문은 Vector가 보완했습니다. RRF를 사용해 서로 다른 점수 체계를 정규화하지 않고 순위 기반으로 결합할 수 있었습니다.",
          "**검색 품질과 지연시간을 함께 봐야 했습니다**: BM25 p95 127.73ms에서 Hybrid p95 171.89ms로 지연은 늘었지만 Hit@5·Recall@5·MRR은 높아졌습니다. 검색 정확도와 응답 지연을 같은 평가표에서 비교하는 기준을 만들었습니다.",
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

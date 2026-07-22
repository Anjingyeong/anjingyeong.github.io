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
  readonly hasAwards?: boolean;
  readonly details: readonly ProjectDetail[];
};

export const projects: readonly Project[] = [
  {
    icon: Shield,
    badge: "Main",
    title: "스마트 안전 관제 시스템",
    summaryLine: "낙상 시 끊기는 트랙과 늦어지는 관제 알림을 함께 개선한 실시간 영상 AI 시스템",
    description:
      "CCTV 영상에서 위험 상황(낙상·실신) 후보를 감지하고, **RTSP 수신부터 Spring Boot 백엔드 및 WebSocket 경보 전달까지** 연결한 실시간 AI 관제 보조 시스템입니다.",
    meta: {
      period: "2026.05–2026.07",
      role: "Pose·LSTM 추론, 행동 특징 설계, 트래킹 재연결, 프레임 처리 개선, 관제 인터페이스 연동",
      service: "CCTV 기반 실시간 안전관제",
    },
    highlights: ["F1 89.29% → 93.49%", "ID Switch 8 → 1", "Mean Latency −48.2%"],
    tags: ["Computer Vision", "YOLO Pose", "LSTM", "MQTT", "WebSocket", "Spring Boot", "Docker"],
    gradient: "from-rose-500/10 to-orange-500/10",
    hasAwards: false,
    details: [
      {
        title: "문제와 목표",
        body: "CCTV를 사후 검토용으로만 활용하면 사고 대응 골든타임을 확보하기 어렵습니다. 본 프로젝트의 목표는 단순히 탐지 모델을 만드는 데 그치지 않고, **RTSP 수신 → AI 추론 → MQTT 이벤트 발행 → Spring Boot 연동 → WebSocket 관제 알림**으로 이어지는 실시간 이벤트 전달 파이프라인을 구축하여 관제자의 판단 공백을 보조하는 것입니다.",
      },
      {
        title: "시스템 플로우",
        diagram: `flowchart LR
    Cam["📷 CCTV / RTSP Stream"] --> Queue["📦 Frame Queue\\nDrop-Old Policy"]
    Queue --> Pose["🧠 YOLO Pose\\nKeypoint Extraction"]
    Pose --> Track["🔄 Object Tracking\\n& Track Reconnection"]
    Track --> Seq["📈 Keypoint Sequence\\nGeneration"]
    Seq --> LSTM["🧠 LSTM Model\\nFall/Faint Classifier"]
    LSTM --> SM["⚙️ State Machine\\nPost-Processing"]
    SM --> MQTT["📡 MQTT Broker\\nsafety/events"]
    MQTT --> Backend["⚙️ Spring Boot Backend\\nEvent Persistence"]
    Backend --> WS["💬 WebSocket\\nBroadcast"]
    WS --> Dashboard["🚨 Monitoring\\nDashboard"]`,
        note: "설계 핵심: 모든 프레임을 보존하기보다 최신 상황을 대응 가능한 시간 안에 전달하도록 지연 누적을 줄이는 처리 구조를 선택했습니다.",
      },
      {
        title: "사례 1. 순간 자세 오탐",
        items: [
          "**문제**: 정적인 관절 좌표만으로는 낙상과 정상 동작의 시간적 변화를 충분히 구분하기 어려웠습니다.",
          "**판단**: 모델을 교체하기보다 낙상 동작의 방향성과 속도를 입력 특징에 반영하는 것이 우선이라고 판단했습니다.",
          "**해결**: 기존 51D 관절 좌표에 상체 기울기, 수직 하강량, 이동 속도를 추가해 54D 입력으로 확장하고, 상태 머신 후처리로 순간 오탐을 제어했습니다. 낙상·실신 threshold 0.6, 연속 이상 2프레임, 누운 자세 3프레임, 정상 복구 4프레임, 쿨다운 10초, 트랙 손실 유예 1.5초 규칙을 적용했습니다.",
          "**결과**: 동일 LSTM과 테스트 조건에서 F1-score를 89.29%에서 93.49%로 높이고, FP와 FN을 각각 38.6%, 38.9% 줄였습니다.",
        ],
      },
      {
        title: "사례 2. 낙상 중 트랙 ID 단절",
        items: [
          "**문제**: 사람이 서 있다가 넘어질 때 bbox 종횡비와 중심점이 급변해 기존 매칭이 실패했습니다.",
          "**판단**: 외형 기반 Re-ID는 실시간 처리 비용과 구현 복잡도가 커 현재 시스템에는 과하다고 판단했습니다.",
          "**해결**: 외형 임베딩을 사용하지 않고, 예측 위치·정규화 중심점 거리·후보 수를 순차 적용하는 재연결 후처리를 구현했습니다.",
          "**결과**: 평가 영상에서 ID Switch를 8건에서 1건으로 줄이고, 평균 Track Coverage를 35.76%에서 49.70%로 높였습니다. 내부 트랙 연속성 대리지표도 약 19.7% 개선했습니다.",
        ],
      },
      {
        title: "사례 3. 프레임 적체와 지연",
        items: [
          "**문제**: 입력 속도가 추론 속도를 초과하면서 오래된 프레임이 누적되고 관제 판단이 늦어졌습니다.",
          "**판단**: 실시간 관제에서는 모든 프레임을 순서대로 처리하는 것보다 최신 상황을 대응 가능한 시간 안에 전달하는 것이 중요하다고 판단했습니다.",
          "**해결**: Reader와 Inference를 분리하고, Bounded Queue와 Drop-old 정책으로 오래된 프레임의 누적을 줄였으며 capturedAtMs·processedAtMs·publishedAtMs를 기록했습니다.",
          "**결과**: 동일 다중 카메라 입력 조건에서 평균 처리 지연을 11.789ms에서 6.101ms로 48.2% 줄였고, 최악 카메라의 p95 지연을 14.719ms에서 7.159ms로 51.4% 줄였습니다.",
        ],
      },
      {
        title: "PyTorch 대비 TensorRT 추론 성능 비교 검증",
        body: "동일한 1,800프레임 영상과 입력 조건에서 PyTorch 대비 TensorRT 추론 성능을 비교 검증했습니다.",
        table: {
          headers: ["평가 지표 (Metric)", "PyTorch", "TensorRT", "개선 및 변화율"],
          rows: [
            ["평가 조건", "1,800 프레임 동일 영상", "1,800 프레임 동일 영상", "동일 영상 환경 테스트"],
            ["평균 지연 (Mean Latency)", "7.022 ms", "3.839 ms", "45.3% 단축 (지연시간 약 1.83배 감소)"],
            ["p95 지연 (p95 Latency)", "8.537 ms", "4.896 ms", "42.6% 단축"],
            ["처리 속도 (FPS)", "84.278 FPS", "119.544 FPS", "41.8% 증가 (약 1.42배 처리량 향상)"],
          ],
        },
      },
      {
        title: "담당 범위와 협업",
        items: [
          "**직접 담당**: Pose·LSTM 추론, 54D 행동 특징 설계, 트래킹 재연결, 프레임 처리 개선, PyTorch–TensorRT 비교 검증",
          "**연동 기여**: Python AI Worker에서 생성한 추론 결과와 이벤트를 MQTT를 통해 Spring Boot·WebSocket 기반 관제 흐름에 연결",
        ],
      },
      {
        title: "검증 범위와 한계",
        groups: [
          {
            title: "확인한 범위",
            items: [
              "54D 행동 특징 전후 성능 비교",
              "트랙 재연결 전후 ID Switch 및 Track Coverage 비교",
              "다중 카메라 입력 조건의 평균·p95 처리 지연 비교",
              "동일 1,800프레임 영상의 PyTorch–TensorRT 추론 성능 비교",
            ],
          },
          {
            title: "후속 평가 과제",
            items: [
              "TensorRT 변환 전후 탐지 결과 동등성",
              "IDF1, HOTA, MOTA 등 표준 트래킹 지표",
              "다중 스트림 확장 시 CPU/GPU 자원 사용량",
              "Track Fragmentation과 잘못된 재연결 평가",
            ],
          },
        ],
      },
      {
        title: "입사 후 기여할 수 있는 영역",
        items: [
          "RTSP 영상 입력과 Bounded Queue 기반 프레임 적체 제어",
          "Pose·LSTM 행동 분석과 트래킹 후처리",
          "MQTT·WebSocket·Spring Boot 기반 관제 인터페이스 연동",
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

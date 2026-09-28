export const vibeWorkflow = [
  {
    step: "01",
    title: "Requirement",
    description: "실제 사용 목적과 완료 기준을 먼저 정합니다.",
  },
  {
    step: "02",
    title: "LLM-assisted Build",
    description: "LLM으로 초안과 반복 구현 속도를 높입니다.",
  },
  {
    step: "03",
    title: "Human Decision",
    description: "구조·데이터 흐름·권한 경계는 직접 판단합니다.",
  },
  {
    step: "04",
    title: "QA",
    description: "로그와 실제 동작으로 문제를 재현하고 검증합니다.",
  },
  {
    step: "05",
    title: "Deploy",
    description: "웹·Android·클라우드 환경까지 실제 배포합니다.",
  },
  {
    step: "06",
    title: "Iterate",
    description: "사용 중 발견된 문제를 다시 수정해 완성도를 높입니다.",
  },
] as const;

export const jkCapabilities = [
  {
    title: "Web-session first",
    description: "ChatGPT 웹 세션의 추론을 그대로 사용하고, 별도 LLM을 한 번 더 호출하지 않는 구조로 만들었습니다.",
  },
  {
    title: "Thin execution harness",
    description: "JK 자체에 에이전트 지능을 중복 구현하지 않고 컨텍스트·도구 실행·상태 전달만 얇게 담당하게 했습니다.",
  },
  {
    title: "Context · Permission",
    description: "프로젝트·역할·권한 정보를 실행 전에 고정해 ChatGPT의 작업 의도를 실제 개발환경과 연결합니다.",
  },
  {
    title: "Local ↔ OCI",
    description: "로컬 개발환경과 OCI 원격 실행환경을 같은 작업 흐름에서 사용할 수 있게 연결했습니다.",
  },
  {
    title: "Approval · Control Center",
    description: "위험 작업은 승인 뒤에서만 실행하고, 실행·승인 상태는 Control Center에서 확인하도록 구성했습니다.",
  },
] as const;

export const aiVsHuman = {
  ai: [
    "코드 초안과 반복 구현",
    "수정안·테스트 케이스 제안",
    "문서화와 비교안 정리",
    "반복적인 탐색·검증 보조",
  ],
  human: [
    "아키텍처와 데이터 흐름 결정",
    "권한·승인 경계 설계",
    "완료 기준과 QA 범위 결정",
    "배포·운영 판단과 최종 검증",
  ],
} as const;

export const vibeBuilds = [
  {
    id: "llm-wiki",
    eyebrow: "SEARCH · EVALUATION",
    title: "LLM Wiki",
    subtitle: "Hybrid Search 기반 프로젝트 지식 검색 시스템",
    description:
      "프로젝트 문서와 기술 의사결정을 검색 가능한 데이터로 구조화하고, BM25·Vector Search·RRF를 같은 평가 질의에서 비교했습니다.",
    proof: ["50개 문서 → 737개 Chunk", "61개 Golden Query", "Hybrid Hit@5 82.14%"],
    stack: ["TypeScript", "BM25", "Vector Search", "RRF", "Elasticsearch", "Cloudflare"],
    link: "https://llmwiki.jingyeong.cloud",
    linkLabel: "Live service",
  },
  {
    id: "songsong",
    eyebrow: "REALTIME · PRODUCT",
    title: "SongSong",
    subtitle: "실시간 멀티플레이 음악 퀴즈 웹서비스",
    description:
      "친구들과 실제로 사용할 게임을 목표로 방 생성·정답 제출·라운드 진행을 하나의 실시간 흐름으로 구현하고 Cloudflare 환경에 배포했습니다.",
    proof: ["Room 단위 멀티플레이", "실시간 정답 제출 흐름", "Cloudflare Workers 배포"],
    stack: ["React", "TypeScript", "Cloudflare Workers", "Durable Objects"],
    link: "https://songsong.jingyeong.cloud",
    linkLabel: "Live service",
  },
  {
    id: "maumium",
    eyebrow: "SOLO · END-TO-END",
    title: "마음이음",
    subtitle: "개인정보 최소 수집형 자가체크 웹서비스",
    description:
      "문제 정의부터 모바일 UI, Workers API, D1 저장, 관리자 통계, PDF 리포트와 운영 배포까지 약 2주 동안 1인으로 완성했습니다.",
    proof: ["약 2주 · 1인 기획→배포", "Workers API · D1", "PDF 리포트 · 운영 정책"],
    stack: ["React", "TypeScript", "Vite", "Cloudflare Pages", "Workers", "D1"],
    link: "https://maumium.pages.dev/",
    linkLabel: "Live service",
  },
] as const;

export const engineeringBackground = {
  title: "Smart Safety",
  subtitle: "실시간 안전 관제 AI 시스템",
  description:
    "RTSP 영상 입력부터 Pose·Tracking·LSTM 판단, MQTT 이벤트와 관제 서비스 연동까지 이어지는 시스템을 팀장 겸 AI 담당으로 통합 검증했습니다.",
  proof: [
    "Tracking ID Switch 8 → 1",
    "행동 분류 F1 89.29% → 93.49%",
    "전체 처리 지연 11.789ms → 6.101ms",
  ],
  image: "/images/smart-safety/dashboard-and-search.jpg",
  demo: "https://www.youtube.com/watch?v=O1-JNhcpvDQ",
} as const;

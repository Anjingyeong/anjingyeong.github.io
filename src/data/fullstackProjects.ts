import { BookOpen, HeartPulse, Shield } from "lucide-react";
import type { Project } from "./projects";

export const fullstackProjects: readonly Project[] = [
  {
    icon: HeartPulse,
    badge: "Main",
    title: "개인정보 최소 수집형 자가체크 및 결과 리포트 웹서비스",
    summaryLine: "사용자 자가체크부터 결과 계산, 데이터 저장, 관리자 통계, PDF 리포트와 배포까지 연결한 웹서비스",
    description: "개인적인 문제의식에서 시작해 약 2주 동안 기획부터 화면 구현, API, 데이터 저장, 결과 리포트와 배포까지 직접 완성한 웹서비스입니다.",
    meta: {
      period: "약 2주",
      role: "1인 개발 · 기획, 설계, 개발, 배포",
      service: "마음이음 자가체크 웹서비스",
    },
    highlights: ["모바일 우선 자가체크", "Workers API·D1", "PDF 리포트·운영 배포"],
    tags: ["React", "TypeScript", "Vite", "Cloudflare Pages", "Cloudflare Workers", "D1", "REST API"],
    gradient: "from-rose-500/10 to-pink-500/5",
    liveUrl: "https://maumium.pages.dev/",
    details: [
      {
        title: "구현 내용",
        items: [
          "React·Vite 기반 모바일 우선 자가체크 UI 구현",
          "공통 위험도 계산 로직과 결과 화면 구성",
          "Cloudflare Workers 기반 API와 D1 데이터 저장",
          "관리자 통계 카드 및 결과 조회 기능",
          "PDF 결과 리포트 생성",
          "개인정보처리방침, 동의 절차, 쿠키 및 분석 도구 동의 처리",
          "robots.txt, sitemap, SEO 메타데이터 구성",
          "Cloudflare Pages 운영 배포",
        ],
      },
    ],
  },
  {
    icon: Shield,
    badge: "Main",
    title: "AI 이벤트 수신부터 사고 검색까지 연결한 실시간 안전 관제 플랫폼",
    summaryLine:
      "AI 위험 이벤트의 실시간 수신·저장·WebSocket 알림부터 사고 중복 병합, VLM 설명과 자연어 검색까지 연결한 E2E 안전 관제 플랫폼",
    description:
      "**위험 이벤트를 화면에 띄우는 데서 끝내지 않고, 하나의 사고가 중복 없이 저장되고 증거와 함께 검색될 때까지의 흐름을 구현했습니다.**",
    meta: {
      period: "2026.05–2026.07",
      role: "이벤트 계약 설계, Spring Boot 수신·저장, 정합성 개선, VLM 큐·검색, React 알림·검색 UI",
      service: "스마트 안전 관제 플랫폼",
    },
    heroImage: {
      src: "/images/smart-safety/dashboard-and-search.jpg",
      caption: "실시간 관제와 자연어 사고 검색을 하나의 대시보드에서 제공",
    },
    highlights: [
      "MQTT·WebSocket 연동",
      "사고 중복 병합",
      "VLM·pgvector 검색",
    ],
    tags: [
      "Python",
      "MQTT",
      "Java 21",
      "Spring Boot",
      "JPA",
      "PostgreSQL",
      "pgvector",
      "Redis",
      "AWS S3",
      "React",
      "TypeScript",
      "WebSocket",
      "STOMP",
      "Zod",
      "Gemini API",
      "VLM",
      "Vector Search",
    ],
    gradient: "from-orange-500/10 to-rose-500/5",
    githubUrl: "https://github.com/strangeRookies/ai",
    demoUrl: "https://www.youtube.com/watch?v=O1-JNhcpvDQ",
    details: [
      {
        title: "프로젝트 개요",
        body: "Python AI Worker에서 생성한 위험 이벤트를 MQTT로 수신하고, Spring Boot에서 저장·가공한 뒤 WebSocket을 통해 React 관제 화면에 전달하는 실시간 안전 관제 플랫폼입니다.\n\n사고 영상과 스냅샷을 VLM으로 설명하고 임베딩으로 저장해, 사용자가 자연어로 과거 사고를 검색할 수 있도록 확장했습니다.",
      },
      {
        title: "AI 탐지부터 사고 기록까지 연결한 End-to-End 서비스",
        body: "이 프로젝트는 AI 모델이 위험 행동을 탐지하는 데서 끝나지 않고, 탐지 결과가 실제 관제 담당자의 확인과 대응으로 이어지도록 전체 서비스 흐름을 연결한 시스템입니다.\n\nCCTV 영상은 RTSP로 AI Worker에 전달되고, AI Worker는 사람의 자세와 움직임을 분석해 위험 이벤트를 생성합니다. 분석 영상은 관제 화면에 표시하고, 탐지 이벤트는 MQTT를 통해 Spring Boot 백엔드로 전달합니다.\n\n백엔드는 이벤트를 데이터베이스에 저장한 뒤 WebSocket으로 관제 화면에 실시간 알림을 전송합니다. 사고 발생 시에는 스냅샷과 사고 전후 영상도 함께 연결해 관제 담당자가 알림 발생 원인과 실제 상황을 확인할 수 있도록 구성했습니다.",
        images: [
          {
            src: "/images/smart-safety/canva/service-definition.png",
            caption: "RTSP 영상 입력부터 AI 탐지, MQTT 알림, 관제 화면과 사고 기록까지 연결한 End-to-End 서비스",
          },
        ],
      },
      {
        title: "개인과 기관의 서로 다른 관제 환경을 고려했습니다",
        body: "개인 사용자는 혼자 생활하는 가족이나 보호 대상자의 위험 상황을 확인하고, 이상 행동이 감지되면 보호자가 알림과 사고 기록을 확인하는 형태로 사용할 수 있습니다.\n\n요양원, 병원, 복지관과 같은 기관 사용자는 여러 공간의 카메라를 하나의 대시보드에서 확인하고, 발생한 사고와 처리 상태를 통합 관리할 수 있도록 사용자 범위를 구분했습니다.\n\n이를 통해 단일 카메라를 확인하는 개인 관제와 여러 카메라를 운영하는 기관 관제를 같은 서비스 안에서 지원하는 구조를 설계했습니다.",
        images: [
          {
            src: "/images/smart-safety/canva/target-users.png",
            caption: "개인 보호자와 요양원·병원·복지관 등 기관 사용자를 고려한 서비스 대상",
          },
        ],
      },
      {
        title: "담당 역할",
        items: [
          "AI·백엔드·프론트엔드 간 이벤트 계약 설계",
          "Spring Boot 기반 이벤트 수신·저장 로직 구현",
          "실시간·증거 이벤트 데이터 정합성 개선",
          "VLM 작업 큐·재시도·임베딩 검색 구현",
          "React 실시간 알림 병합 및 자연어 검색 UI 구현",
        ],
      },
      {
        title: "기술 스택",
        body: "Python · MQTT · Java 21 · Spring Boot · JPA · PostgreSQL · pgvector · Redis · AWS S3 · React · TypeScript · WebSocket · STOMP · Zod · Gemini API · VLM · Vector Search",
      },
      {
        title: "실시간 이벤트 전달 흐름",
        body: "AI Worker가 생성한 위험 이벤트를 MQTT QoS 1로 전달하고, Spring Boot에서 비동기로 수신·저장한 뒤 시설과 기업별 STOMP 토픽을 통해 React 관제 화면으로 브로드캐스트했습니다.",
        images: [
          {
            src: "/images/smart-safety/realtime-flow.jpg",
            caption: "RTSP 분석부터 MQTT 수신·DB 저장·STOMP 알림까지의 실시간 이벤트 흐름",
          },
        ],
      },
      {
        title: "동일 사고가 중복 저장되던 문제 해결",
        items: [
          "**문제**: 최초 실시간 경보와 이후 전달되는 영상·스냅샷 이벤트가 서로 다른 ID와 시점으로 도착해 DB와 화면에 동일 사고가 여러 건 생성되었습니다.",
          "**판단**: 화면에서만 중복을 숨기면 DB에는 중복 데이터가 계속 남기 때문에 백엔드와 프론트 모두에서 사고 식별 기준을 통일해야 했습니다.",
          "**구현**: `originalEventId`를 안정적인 사고 식별자로 사용해 백엔드에서는 기존 사고에 미디어를 연결하고, 프론트에서는 WebSocket과 REST 응답을 같은 사고 카드로 병합했습니다.",
          "**결과**: 이벤트 도착 순서와 관계없이 확인 상태, 스냅샷, 사고 클립과 VLM 설명이 하나의 Incident에 유지되도록 개선했습니다.",
        ],
        images: [
          {
            src: "/images/smart-safety/incident-merge-before-after.svg",
            caption: "실시간 경보와 증거 데이터를 하나의 Incident로 병합한 데이터 정합성 개선",
          },
        ],
      },
      {
        title: "경보 이후의 증거 확인 흐름",
        body: "실시간 경보가 발생한 뒤 사고 전후 5초씩 총 10초의 클립과 스냅샷을 연결해, 관제 담당자가 알림 발생 원인과 실제 상황을 확인할 수 있도록 구성했습니다.",
        images: [
          {
            src: "/images/smart-safety/event-playback.jpg",
            caption: "사고 전후 10초 이벤트 영상과 증거 확인 화면",
          },
        ],
      },
      {
        title: "VLM 기반 자연어 사고 검색",
        items: [
          "**문제**: 이벤트 유형과 날짜만으로는 복장, 장소, 자세와 상황이 포함된 과거 사고를 찾기 어려웠습니다.",
          "**구현**: 사고 클립에서 8개 Keyframe을 추출하고 얼굴을 비식별화한 뒤 Gemini로 사고 상황을 설명했습니다.",
          "**검색**: 설명을 768차원 임베딩으로 변환해 PostgreSQL pgvector에 저장하고 자연어 유사도 검색을 구현했습니다.",
          "**안정성**: 외부 API 오류와 호출 제한을 고려해 작업 상태, 잠금 시간, 재시도 횟수, 다음 시도 시간과 지수 백오프를 적용했습니다.",
          "**프론트엔드**: 오래된 검색 요청 취소, 중복 요청 방지, 권한·서버 오류 처리와 응답 스키마 검증을 적용했습니다.",
        ],
        images: [
          {
            src: "/images/smart-safety/vlm-pipeline.jpg",
            caption: "Keyframe·Gemini·Embedding·pgvector 기반 자연어 검색 파이프라인",
          },
        ],
      },
      {
        title: "이 프로젝트로 보여주는 역량",
        items: [
          "Python·Spring Boot·React를 연결하는 E2E 기능 구현",
          "MQTT·WebSocket 기반 실시간 이벤트 처리",
          "비동기 데이터 병합과 중복·정합성 문제 해결",
          "실패와 재시도를 고려한 백그라운드 작업 설계",
          "VLM·임베딩·pgvector를 서비스 기능으로 연결",
          "API 계약, 권한, 예외 상태를 고려한 프론트엔드 구현",
        ],
      },
    ],
  },
  {
    icon: BookOpen,
    badge: "Main",
    title: "BM25·Vector Search·RRF 기반 프로젝트 지식 검색 시스템",
    summaryLine: "프로젝트 문서와 기술 의사결정을 검색 가능한 데이터로 구조화한 하이브리드 검색 서비스",
    description: "정적 JSON 인덱스와 BM25·Vector Search·RRF를 결합해 문서 출처와 섹션 정보를 제공하는 프로젝트 지식 검색 구조를 구현했습니다.",
    meta: {
      period: "2026",
      role: "문서 인덱스, 하이브리드 검색, 검색 API 및 인증 흐름 구현",
      service: "LLM Wiki·RAG 지식 검색 시스템",
    },
    highlights: ["정적 JSON 검색 인덱스", "BM25·Vector Search", "RRF 순위 결합"],
    tags: ["TypeScript", "Cloudflare Pages Functions", "BM25", "Vector Search", "RRF", "JSON Index", "RAG"],
    gradient: "from-indigo-500/10 to-violet-500/5",
    details: [
      {
        title: "구현 내용",
        items: [
          "프로젝트 문서를 정적 JSON 검색 인덱스로 변환",
          "title, category, tags, sourcePath 등 메타데이터 구성",
          "키워드 검색을 위한 BM25 적용",
          "문맥 검색을 위한 Vector Search 적용",
          "RRF 방식으로 검색 결과 순위 결합",
          "`/api/rag/ask` 검색 API 구성",
          "`/api/auth/verify` 인증 흐름 구성",
          "검색 결과에 문서 출처와 섹션 정보 포함",
          "Cloudflare 정적 배포 환경에 맞춰 런타임 부하를 줄이는 구조 선택",
        ],
      },
    ],
  },
];

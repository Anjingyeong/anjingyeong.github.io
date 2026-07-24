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
    details: [
      {
        title: "프로젝트 개요",
        body: "Python AI Worker에서 생성한 위험 이벤트를 MQTT로 수신하고, Spring Boot에서 저장·가공한 뒤 WebSocket을 통해 React 관제 화면에 전달하는 실시간 안전 관제 플랫폼입니다.\n\n사고 영상과 스냅샷을 VLM으로 설명하고 임베딩으로 저장해, 사용자가 자연어로 과거 사고를 검색할 수 있도록 확장했습니다.",
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
        title: "전체 데이터 흐름",
        body: "AI Worker → MQTT 위험 이벤트 발행 → Spring Boot 비동기 수신·검증 → PostgreSQL 사고 저장 및 S3 증거 연결 → STOMP 실시간 알림 발행 → React 관제 대시보드 표시 → VLM 사고 설명 생성 → 임베딩·pgvector 저장 → 자연어 사고 검색",
      },
      {
        title: "핵심 구현",
        items: [
          "**1. 실시간 이벤트 전달 흐름을 연결했습니다.**\n\nMQTT 이벤트를 Spring Boot에서 비동기로 처리하고, 시설과 기업별 STOMP 토픽으로 전달해 React 관제 화면에 실시간 알림이 나타나도록 구성했습니다.",
          "**2. 하나의 사고가 여러 건으로 보이던 문제를 해결했습니다.**\n\n최초 실시간 경보와 이후 전달되는 영상·스냅샷 이벤트가 서로 다른 ID를 사용해 DB와 화면에 중복 사고가 생성되는 문제가 있었습니다.\n\n`originalEventId`를 기준으로 기존 사고를 찾아 증거 자료를 연결하고, 프론트에서도 WebSocket과 REST 응답을 같은 사고 카드로 병합하도록 수정했습니다.",
          "**3. 비동기 데이터가 도착해도 화면 상태를 보존했습니다.**\n\n실시간 알림이 먼저 표시되고 스냅샷이나 영상이 나중에 도착하는 구조에서, 기존 확인 상태를 유지하면서 새 미디어 정보만 병합하도록 구현했습니다.",
          "**4. VLM 작업을 안정적으로 처리했습니다.**\n\n사고 영상 설명과 임베딩 작업에 상태, 잠금 시간, 재시도 횟수와 다음 시도 시간을 적용했습니다. 일시적 오류와 API 호출 제한이 발생하면 지수 백오프로 다시 처리하고, 여러 Worker가 동일한 작업을 중복 실행하지 않도록 구성했습니다.",
          "**5. 사고를 자연어로 검색할 수 있게 만들었습니다.**\n\nVLM이 생성한 사고 설명을 768차원 임베딩으로 저장하고, pgvector 유사도 검색을 구현했습니다. 벡터 검색을 사용할 수 없는 상황에서는 메모리 기반 검색으로 전환해 검색 기능이 완전히 중단되지 않도록 했습니다.\n\n프론트에서는 시설·기업 권한, 카메라와 날짜 조건, 유사도와 결과 개수를 반영하는 검색 UI를 구현하고 오래된 요청 취소, 중복 요청 방지와 응답 데이터 검증을 적용했습니다.",
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

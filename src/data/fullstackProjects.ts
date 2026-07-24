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
    title: "MQTT·Spring Boot·WebSocket 기반 실시간 안전 관제 플랫폼",
    summaryLine: "AI Worker에서 발생한 위험 이벤트를 백엔드와 관제 화면까지 전달하는 실시간 이벤트 파이프라인",
    description: "Python AI Worker의 위험 이벤트 생성과 MQTT 발행을 담당하고, Spring Boot의 이벤트 수신·저장 및 WebSocket 관제 알림으로 이어지는 실시간 데이터 흐름을 연동·검증했습니다.",
    meta: {
      period: "2026.05–2026.07",
      role: "AI Worker 이벤트 처리 · MQTT 연동 · 실시간 데이터 흐름 검증",
      service: "스마트 안전 관제 플랫폼",
    },
    highlights: ["RTSP 위험 이벤트", "MQTT 이벤트 전달", "WebSocket·STOMP 관제 연동"],
    tags: ["Python", "MQTT", "Spring Boot", "WebSocket", "STOMP", "React", "Docker", "RTSP"],
    gradient: "from-orange-500/10 to-rose-500/5",
    details: [
      {
        title: "구현 및 연동 내용",
        items: [
          "Python AI Worker의 위험 이벤트 생성",
          "MQTT 이벤트 메시지 발행",
          "프레임 ID 및 시간 정보 기반 지연 추적",
          "영상 종료·소스 변경·재연결 시 분석 상태 초기화",
          "Spring Boot 이벤트 수신·저장 흐름 연동",
          "WebSocket·STOMP 관제 알림 연동",
          "React 대시보드까지 이어지는 이벤트 흐름 검증",
        ],
      },
      {
        title: "기여 범위",
        body: "AI Worker의 이벤트 생성과 MQTT 연동을 중심으로 담당했으며, 백엔드와 관제 화면까지 이어지는 실시간 데이터 흐름을 함께 검증했습니다.",
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

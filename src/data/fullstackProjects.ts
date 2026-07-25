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
      {
        title: "판단과 배운 점",
        items: [
          "**필요한 개인정보만 수집하는 구조를 우선했습니다**: 자가체크 서비스는 민감한 결과를 다루기 때문에 기능을 늘리는 것보다 어떤 정보를 저장하지 않을지를 먼저 결정해야 했습니다. 진단 서비스처럼 보이지 않도록 안내 문구와 동의 절차를 구성하고, 결과 제공에 필요하지 않은 개인정보 수집을 줄였습니다. 이를 통해 개인정보 보호는 개발 이후 추가하는 문서가 아니라 데이터 구조를 정할 때부터 반영해야 한다는 점을 배웠습니다.",
          "**작은 범위라도 배포 가능한 흐름을 완성했습니다**: 약 2주라는 제한된 기간에 화면 기능을 계속 확장하면 실제 사용 가능한 상태까지 완성하기 어렵다고 판단했습니다. 자가체크, 결과 계산, 저장, 관리자 통계, PDF 리포트와 배포까지 하나의 핵심 흐름을 먼저 완성했습니다. 이를 통해 기능 수보다 사용자가 처음부터 끝까지 막힘없이 사용할 수 있는 완결성이 더 중요하다는 점을 배웠습니다.",
        ],
      },
    ],
  },
  {
    icon: Shield,
    badge: "Main",
    title: "AI 이벤트 수신부터 사고 검색까지 연결한 실시간 안전 관제 플랫폼",
    summaryLine:
      "AI 위험 이벤트를 MQTT로 수신해 하나의 Incident로 저장·병합하고, 실시간 알림·사고 증거·VLM 검색까지 연결한 관제 플랫폼",
    description:
      "비동기로 도착하는 경보와 증거 데이터를 하나의 사고로 유지하고, 실패와 도착 순서를 고려한 서비스 흐름을 설계했습니다.",
    meta: {
      period: "2026.05–2026.07",
      role: "5인 팀장 · 이벤트 계약, Incident 정합성, VLM 작업 흐름, 파트 간 통합 검증",
      service: "실시간 안전 관제 플랫폼",
    },
    heroImage: {
      src: "/images/smart-safety/dashboard-and-search.jpg",
      caption:
        "실시간 위험 알림과 자연어 사고 검색을 제공하는 스마트 안전 관제 대시보드",
    },
    highlights: [
      "29개 이벤트 모두 1초 이내 전달",
      "originalEventId 기반 Incident 병합",
      "실시간 경보·VLM 비동기 분리",
    ],
    tags: [
      "Java 21",
      "Spring Boot",
      "JPA",
      "PostgreSQL",
      "pgvector",
      "Redis",
      "AWS S3",
      "React",
      "TypeScript",
      "MQTT",
      "WebSocket·STOMP",
      "Gemini VLM",
    ],
    gradient: "from-orange-500/10 to-rose-500/5",
    githubUrl: "https://github.com/strangeRookies",
    demoUrl: "https://www.youtube.com/watch?v=O1-JNhcpvDQ",
    details: [
      {
        title: "문제 정의와 서비스 목표",
        body:
          "AI가 위험을 탐지하더라도 이벤트의 유실·중복 가능성을 제어하지 못하고, 사고 영상과 설명이 서로 다른 데이터로 남으면 관제 담당자는 사고 정보를 신뢰하기 어렵습니다.\n\n이 프로젝트에서는 Python AI Worker의 위험 이벤트를 MQTT로 수신해 Spring Boot에서 Incident로 저장하고, WebSocket·STOMP를 통해 React 관제 화면에 전달했습니다.\n\n이후 도착하는 스냅샷, 사고 클립과 VLM 설명을 동일 Incident에 연결해 실시간 경보부터 증거 확인과 과거 사고 검색까지 하나의 서비스 흐름으로 완성하는 것을 목표로 했습니다.",
      },
      {
        title: "End-to-End 서비스 구조",
        body:
          "AI Worker가 생성한 위험 이벤트는 MQTT Broker를 거쳐 Spring Boot로 전달됩니다. 백엔드는 이벤트를 Incident로 저장하고 시설별 STOMP 토픽으로 브로드캐스트해 React 관제 화면에 즉시 표시했습니다.\n\n스냅샷과 사고 클립은 기존 Incident에 추가로 연결하고, VLM 설명과 임베딩 생성은 실시간 알림 경로와 분리된 비동기 작업으로 처리했습니다.",
        images: [
          {
            src: "/images/smart-safety/realtime-flow.jpg",
            caption:
              "AI Worker·MQTT·Spring Boot·DB·STOMP·React로 이어지는 실시간 이벤트 전달 구조",
          },
        ],
      },
      {
        title: "AI 이벤트가 관제 화면까지 도달하는 시간을 측정했습니다",
        problemSolving: [
          {
            label: "측정 현상",
            text: "위험 이벤트는 AI Worker에서 발행된 뒤 MQTT Broker, Spring Boot 저장과 STOMP 브로드캐스트를 거쳐 React 화면에 표시됩니다. 각 구성 요소가 정상 동작하는지만 확인해서는 실제 사용자가 알림을 받기까지의 지연을 알 수 없었습니다.",
          },
          {
            label: "원인 분석",
            text: "AI 발행 시점과 백엔드 수신·저장·브로드캐스트 시점이 하나의 측정 기준으로 연결되지 않으면 어느 구간에서 지연이 발생했는지 특정하기 어려웠습니다.",
          },
          {
            label: "의사결정",
            text: "개별 API 응답 시간이 아니라 AI 이벤트 생성부터 관제 화면 전달까지의 End-to-End 지연을 검증 기준으로 사용하기로 했습니다.",
          },
          {
            label: "구현",
            text: "MQTT QoS 1로 이벤트를 전달하고 Spring Boot에서 비동기로 수신·저장한 뒤, 시설별 STOMP 토픽으로 React 관제 화면에 브로드캐스트했습니다. 이벤트의 발행·수신 시각을 로그로 연결해 End-to-End 지연을 측정했습니다.",
          },
          {
            label: "결과",
            text: "2카메라 TensorRT 환경에서 발생한 위험 이벤트 29건의 평균 End-to-End 지연은 20.931ms, p95는 26ms였으며 29건 모두 1초 안에 전달됐습니다.",
          },
          {
            label: "배운 점",
            text: "실시간 시스템은 기능이 연결됐다는 사실만으로 충분하지 않으며, 각 구간의 시각과 이벤트 ID를 연결해 실제 End-to-End 지연을 검증해야 한다는 점을 배웠습니다.",
          },
        ],
        note:
          "MQTT QoS 1은 at-least-once 전달이므로 중복 가능성이 있습니다. Event ID, Incident 병합과 DB 제약을 함께 적용해 멱등성을 보완했습니다.",
      },
      {
        title: "화면의 중복이 아니라 사고 식별 구조를 수정했습니다",
        problemSolving: [
          {
            label: "측정 현상",
            text: "하나의 위험 상황에서 최초 실시간 경보와 이후 도착한 스냅샷·사고 클립이 DB와 관제 화면에서 서로 다른 사고로 생성되는 현상이 발생했습니다.",
          },
          {
            label: "원인 분석",
            text: "실시간 경보 이벤트와 후속 미디어 이벤트가 서로 다른 ID와 시점으로 도착했지만, 두 데이터를 같은 사고로 연결하는 공통 식별 기준이 없었습니다.",
          },
          {
            label: "의사결정",
            text: "프론트엔드에서 중복 카드를 숨기는 방식은 DB에 남는 중복 데이터를 해결하지 못합니다. 백엔드 저장과 프론트엔드 상태 병합이 공유하는 하나의 사고 식별 기준을 만들기로 했습니다.",
          },
          {
            label: "구현",
            text: "originalEventId를 공통 사고 식별자로 사용해 백엔드에서는 기존 Incident에 미디어를 연결하고, 프론트엔드에서는 WebSocket과 REST 응답을 동일한 사고 카드로 병합했습니다.",
          },
          {
            label: "결과",
            text: "이벤트 도착 순서와 관계없이 확인 상태, 스냅샷, 사고 클립과 VLM 설명이 하나의 Incident에 유지되도록 개선했습니다.",
          },
          {
            label: "배운 점",
            text: "비동기 시스템에서는 데이터가 순서대로 도착하지 않는다는 전제로 공통 식별자와 병합 규칙을 설계해야 한다는 점을 배웠습니다.",
          },
        ],
        images: [
          {
            src: "/images/smart-safety/incident-merge-before-after.svg",
            caption:
              "실시간 경보와 이후 도착한 증거 데이터를 하나의 Incident로 병합",
          },
        ],
      },
      {
        title: "경보 이후의 증거 확인 흐름",
        body:
          "실시간 경보가 발생한 뒤 사고 전후 5초씩 총 10초의 클립과 스냅샷을 기존 Incident에 연결했습니다.\n\n관제 담당자가 단순 경보 코드만 보는 것이 아니라 사고 직전의 움직임, 사고 발생 장면과 이후 상태를 함께 확인할 수 있도록 구성했습니다.",
        images: [
          {
            src: "/images/smart-safety/event-playback.jpg",
            caption:
              "사고 전후 10초 클립과 스냅샷을 통한 경보 증거 확인",
          },
        ],
      },
      {
        title: "실시간 알림과 VLM 분석을 서로 다른 처리 경로로 분리했습니다",
        problemSolving: [
          {
            label: "측정 현상",
            text: "VLM 분석에는 키프레임 추출, 얼굴 비식별화, 외부 Gemini API 호출과 임베딩 저장이 필요했습니다. 외부 API 응답 시간과 호출 실패는 실시간 경보처럼 일정한 처리 시간을 보장하기 어려웠습니다.",
          },
          {
            label: "원인 분석",
            text: "VLM 설명 생성을 실시간 경보 경로에 포함하면 외부 API 응답과 재시도가 완료될 때까지 긴급 알림 경로가 함께 지연될 수 있었습니다.",
          },
          {
            label: "의사결정",
            text: "사용자에게 즉시 필요한 경보와 사고 이후 보강할 수 있는 설명·검색 기능을 별도의 처리 경로로 분리하기로 했습니다.",
          },
          {
            label: "구현",
            text: "Incident 저장과 STOMP 알림을 먼저 완료한 뒤, 별도 작업에서 8개 Keyframe 추출, 얼굴 비식별화, Gemini 설명 생성과 768차원 임베딩 저장을 처리했습니다. 작업 상태, 잠금 만료, 재시도 횟수와 지수 백오프도 함께 적용했습니다.",
          },
          {
            label: "결과",
            text: "VLM 작업의 완료 여부와 관계없이 실시간 위험 알림을 먼저 전달하고, 후처리가 완료되면 자연어 검색에 필요한 설명과 임베딩을 기존 Incident에 추가할 수 있게 됐습니다.",
          },
          {
            label: "배운 점",
            text: "모든 기능을 하나의 처리 흐름에 넣기보다 사용자에게 즉시 필요한 Critical Path를 짧게 유지하고, 후속 기능은 실패와 재시도가 가능한 비동기 작업으로 분리해야 한다는 점을 배웠습니다.",
          },
        ],
        images: [
          {
            src: "/images/smart-safety/vlm-pipeline.jpg",
            caption:
              "Incident 저장 이후 Keyframe·비식별화·VLM·Embedding·pgvector로 이어지는 비동기 검색 파이프라인",
          },
        ],
        note:
          "8개 Keyframe은 현재 설계값이며 4·8·12프레임 간 검색 품질 비교는 완료되지 않았습니다.",
      },
      {
        title: "운영 안정성과 검증 범위",
        groups: [
          {
            title: "운영 안정성",
            items: [
              "**중복 전달 대응**: MQTT QoS 1의 중복 가능성을 고려해 Event ID와 originalEventId를 기준으로 Incident 병합과 멱등 처리를 적용했습니다.",
              "**비동기 작업 복구**: VLM 작업에 PENDING·PROCESSING·SUCCESS·FAILED 상태와 잠금 만료, 재시도와 지수 백오프를 적용했습니다.",
              "**프론트엔드 요청 관리**: 오래된 검색 요청 취소, 중복 요청 방지, 권한·서버 오류 처리와 응답 스키마 검증을 적용했습니다.",
            ],
          },
          {
            title: "검증 범위와 한계",
            items: [
              "**실시간 지연 측정 범위**: MQTT End-to-End 결과는 2카메라 TensorRT 환경에서 발생한 29개 이벤트를 기준으로 측정했으며 실제 대규모 시설의 SLA를 의미하지 않습니다.",
              "**검색 품질 검증**: VLM 21개, RAG 6개와 Snapshot 6개 테스트로 처리 흐름을 검증했지만, 검색 품질에 대한 Recall@k·MRR과 사용자 평가는 추가로 필요합니다.",
              "**외부 서비스 의존성**: Gemini API 호출 제한과 장애가 발생해도 실시간 경보 경로는 영향을 받지 않지만 VLM 설명 생성은 지연될 수 있습니다.",
            ],
          },
        ],
      },
      {
        title: "팀 협업과 통합 기준",
        items: [
          "**팀 구성과 역할**: 총 5명의 팀 프로젝트에서 팀장을 맡아 AI·백엔드·프론트엔드·인프라 파트의 일정과 통합 기준을 관리했습니다.",
          "**직접 기여와 역할 구분**: AI 이벤트 계약, originalEventId 기반 Incident 정합성, VLM 비동기 작업 흐름과 프론트엔드 병합 동작을 구현·검증했습니다. 전체 백엔드와 프론트엔드를 단독 구현한 것이 아니라 담당자들과 주요 정합성 문제를 함께 해결했습니다.",
          "**파트 간 조율**: 이벤트 스키마, originalEventId, 필수 필드, 오류 응답과 완료 조건을 문서화하고 각 파트가 독립적으로 검증할 체크리스트를 정했습니다.",
          "**관점 차이**: AI는 MQTT 발행을 완료로 보았지만 백엔드는 DB 저장과 STOMP 발행, 프론트엔드는 화면 반영까지 확인해야 완료로 볼 수 있었습니다.",
          "**조율과 결과**: 동일한 eventId와 timestamp를 따라 AI 발행부터 화면 반영까지 로그를 확인하고, 파트별 기능을 실시간 경보·Incident·증거·VLM 설명이 이어지는 하나의 흐름으로 통합했습니다.",
          "**배운 점**: 협업 문제를 개인의 실수로 설명하기보다 공통 식별자, 인터페이스와 완료 조건이 부족한 구조적 문제로 보고 해결해야 한다는 점을 배웠습니다.",
        ],
      },
      {
        title: "판단과 배운 점",
        items: [
          "**모든 기능을 하나의 처리 경로에 넣지 않았습니다**: VLM 결과를 기다리면 긴급 알림이 늦어질 수 있어 실시간 경보와 사고 후처리를 분리했습니다. 이를 통해 기능을 많이 연결하는 것보다 사용자에게 즉시 필요한 핵심 경로를 짧게 유지하는 것이 중요하다는 점을 배웠습니다.",
          "**화면의 증상이 아닌 데이터 흐름 전체를 수정했습니다**: 중복 사고 카드를 프론트에서 숨길 수도 있었지만 DB에는 동일 사고가 계속 쌓이게 됩니다. originalEventId를 기준으로 저장과 화면 병합을 함께 수정하면서 비동기 시스템은 데이터가 순서대로 도착하지 않는다는 전제로 식별자와 병합 규칙을 설계해야 한다는 점을 배웠습니다.",
        ],
      },
      {
        title: "이 프로젝트로 보여주는 역량",
        items: [
          "MQTT·Spring Boot·WebSocket·React로 이어지는 End-to-End 이벤트 흐름 통합 및 지연 검증",
          "Event ID와 originalEventId를 활용한 멱등 처리와 Incident 병합 설계",
          "실시간 Critical Path와 VLM 후처리를 분리한 비동기 작업 구조 설계",
          "작업 상태·잠금 만료·재시도를 고려한 VLM 처리 흐름 구현",
          "공통 이벤트 계약과 구간별 로그를 활용한 파트 간 통합 검증",
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
      {
        title: "판단과 배운 점",
        items: [
          "**정확한 키워드와 문맥 검색을 함께 지원**: Vector Search만으로는 코드 식별자와 파일명을 정확하게 찾기 어려웠고, BM25만으로는 표현이 다른 유사 문서를 찾기 어려웠습니다. 두 검색 결과를 RRF로 결합해 정확한 단어와 의미가 비슷한 문서를 함께 찾도록 설계했습니다. 이를 통해 검색 방식은 기술 선호가 아니라 사용자가 입력하는 질문의 특성을 기준으로 선택해야 한다는 점을 배웠습니다.",
          "**운영 환경에 맞춰 정적 인덱스를 선택**: Cloudflare 정적 배포 환경에서 매 요청마다 문서를 파싱하고 인덱스를 생성하면 불필요한 런타임 부하가 발생할 수 있었습니다. 빌드 단계에서 검색용 JSON 인덱스를 생성하고 런타임에서는 검색과 응답에 집중하도록 구성했습니다. 이를 통해 동일한 기능도 배포 환경과 운영 비용에 따라 구현 방식이 달라져야 한다는 점을 배웠습니다.",
        ],
      },
    ],
  },
];

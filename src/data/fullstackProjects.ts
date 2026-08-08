import { BookOpen, HeartPulse, Shield } from "lucide-react";
import type { Project } from "./projects";

export const fullstackProjects: readonly Project[] = [
  {
    icon: Shield,
    badge: "Main",
    title: "AI 이벤트 수신부터 사고 검색까지 연결한 실시간 안전 관제 플랫폼",
    summaryLine:
      "비동기로 도착하는 경보·스냅샷·클립을 originalEventId로 하나의 Incident에 병합하고, 실시간 경보와 VLM 후처리를 분리한 관제 서비스",
    description:
      "비동기로 도착하는 경보와 증거 데이터를 하나의 사고로 유지했습니다. MQTT 전달 지연은 Subscriber 기준으로 측정하고, Spring Boot 저장·STOMP·React 화면 표시는 별도 통합 테스트로 확인해 측정 범위와 서비스 연결 범위를 구분했습니다.",
    meta: {
      period: "2026.05–2026.07",
      role: "5인 팀장 · 이벤트 계약·Incident 정합성·VLM 비동기 흐름·통합 검증",
      service: "실시간 안전 관제 플랫폼",
    },
    heroImage: {
      src: "/images/smart-safety/dashboard-and-search.jpg",
      caption:
        "실시간 위험 알림과 자연어 사고 검색을 제공하는 스마트 안전 관제 대시보드",
    },
    highlights: [
      "29/29건 1초 내 MQTT Subscriber 도달",
      "originalEventId 기반 Incident 병합",
      "실시간 경보 / VLM 비동기 분리",
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
    githubUrl: "https://github.com/strangeRookies/",
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
        title: "AI 이벤트 전달 지연의 측정 범위를 분리했습니다",
        problemSolving: [
          {
            label: "측정 현상",
            text: "2개 카메라 통합 테스트에서 위험 이벤트 29건과 timestamp 로그를 확보했지만, 지연 수치는 AI Worker에서 MQTT Subscriber까지의 전달 구간을 측정한 값이었고 Spring Boot·STOMP·React 화면은 별도 통합 테스트로 확인한 범위였습니다.",
          },
          {
            label: "원인 분석",
            text: "MQTT Subscriber 기준 수치를 관제 화면 표시까지의 End-to-End 지연으로 함께 표현하면 실제 측정 endpoint보다 넓은 범위를 성과처럼 설명하게 되는 문제가 있었습니다.",
          },
          {
            label: "의사결정",
            text: "정량 지연이 측정된 구간과 서비스 통합이 확인된 구간을 분리해 설명하기로 했습니다. 숫자는 AI Worker → MQTT Subscriber 범위에만 사용하고, Spring Boot 저장·STOMP·React 표시는 별도 통합 검증으로 구분했습니다.",
          },
          {
            label: "구현",
            text: "AI Worker의 프레임 수신 시각과 MQTT Subscriber 수신 시각을 이벤트·timestamp 로그로 연결해 전달 지연을 측정했습니다. 이후 Spring Boot 저장, 시설별 STOMP 브로드캐스트와 React 화면 표시가 이어지는지는 별도 통합 테스트로 확인했습니다.",
          },
          {
            label: "결과",
            text: "2카메라 TensorRT 환경에서 MQTT Subscriber 기준 전달 지연은 평균 20.931ms, p95 26ms, 최대 27ms였고 위험 이벤트 29건 모두 1초 안에 도달했습니다. Spring Boot 저장·STOMP·React 화면 표시는 별도 통합 테스트로 확인했습니다.",
          },
          {
            label: "배운 점",
            text: "실시간 성능을 설명할 때는 단순히 End-to-End라고 부르기보다 측정 시작점과 종료점을 명시하고, 정량 측정과 기능 통합 검증의 범위를 구분해야 신뢰할 수 있다는 점을 배웠습니다.",
          },
        ],
        note:
          "20.931ms·p95 26ms·최대 27ms와 1초 이내 29/29는 MQTT Subscriber 기준이며 브라우저 표시 지연 수치가 아닙니다. Spring Boot 저장·STOMP·React 화면 표시는 별도 통합 테스트로 확인했습니다.",
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
        title: "담당 범위와 협업",
        groups: [
          {
            title: "직접 구현·검증",
            items: [
              "AI 이벤트 계약과 originalEventId 기반 Incident 정합성",
              "VLM 비동기 작업 상태·재시도 흐름",
              "WebSocket·REST 응답을 동일 사고로 병합하는 동작 검증",
            ],
          },
          {
            title: "협업·통합",
            items: [
              "전체 백엔드·프론트엔드를 단독 구현한 것이 아니라 각 담당자와 정합성 문제를 공동 해결",
              "이벤트 필수 필드·오류 응답·완료 조건과 파트별 검증 체크리스트 조율",
              "팀장으로서 eventId·timestamp 로그를 따라 AI 발행부터 화면 반영까지 통합 검증",
            ],
          },
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
        title: "핵심 기술 역량",
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
    icon: HeartPulse,
    badge: "Supporting",
    title: "개인정보 최소 수집형 자가체크 및 결과 리포트 웹서비스",
    summaryLine: "민감정보 최소 수집을 전제로 자가체크 → 결과 계산 → 저장 → 관리자 통계 → PDF 리포트 → 배포까지 약 2주 동안 1인 완성한 웹서비스",
    description: "개인적인 문제의식에서 시작해 약 2주 동안 기획부터 화면 구현, API, 데이터 저장, 결과 리포트와 배포까지 직접 완성한 웹서비스입니다.",
    meta: {
      period: "약 2주",
      role: "1인 개발 · 기획, 설계, 개발, 배포",
      service: "마음이음 자가체크 웹서비스",
    },
    highlights: ["약 2주 · 1인 기획 → 배포", "Workers API·D1·관리자 통계", "PDF 리포트·동의/SEO 운영"],
    tags: ["React", "TypeScript", "Vite", "Cloudflare Pages", "Cloudflare Workers", "D1", "REST API"],
    gradient: "from-rose-500/10 to-pink-500/5",
    liveUrl: "https://maumium.pages.dev/",
    details: [
      {
        title: "프로젝트 배경과 기술 선택",
        body:
          "자가체크 결과처럼 민감하게 느껴질 수 있는 정보를 다루면서도 사용자가 모바일에서 빠르게 검사를 마치고 다음 행동을 확인할 수 있는 서비스가 필요했습니다.\n\n약 2주 안에 기획부터 운영 배포까지 완성해야 했기 때문에 React·TypeScript로 화면과 위험도 계산 로직을 분리하고, 별도 서버 운영 부담이 적은 Cloudflare Pages·Workers·D1 조합을 선택했습니다. 정적 프론트엔드, 경량 API와 데이터 저장을 하나의 Cloudflare 환경에서 관리할 수 있어 작은 서비스의 배포 속도와 운영 단순성을 확보할 수 있었습니다.",
      },
      {
        title: "개발 프로세스",
        items: [
          "**1. 문제와 데이터 범위 정의**: 자가체크에 필요한 입력과 저장하지 않을 개인정보를 먼저 정하고, 서비스가 진단으로 오해되지 않도록 안내 문구와 동의 흐름을 설계했습니다.",
          "**2. 핵심 사용자 흐름 구현**: React·Vite 기반 모바일 UI를 구현하고, 공통 위험도 기준을 결과 화면과 관리자 통계에서 함께 사용하도록 분리했습니다.",
          "**3. API와 운영 기능 연결**: Workers API와 D1 저장을 연결하고, 동일한 결과 데이터를 해석 리포트·관리자 통계·PDF 리포트에서 재사용하도록 구성했습니다.",
          "**4. 배포 전 검증**: 개인정보처리방침, 쿠키·분석 도구 동의, robots.txt, sitemap과 SEO 메타데이터를 점검한 뒤 Cloudflare Pages에 배포했습니다.",
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
    icon: BookOpen,
    badge: "Supporting",
    title: "LLM Wiki · Hybrid Search 지식 시스템",
    summaryLine: "프로젝트 문서와 기술 의사결정을 검색 가능한 데이터로 구조화한 하이브리드 검색 서비스",
    description:
      "스마트 안전관제 개발 과정의 장애·실험·설계 판단을 50개 문서와 737개 Chunk로 지식화했습니다. 61개 Golden Query로 Vector·BM25·Hybrid 검색의 기준선을 측정한 뒤 Elasticsearch BM25·dense_vector kNN·HNSW·RRF Provider를 별도로 구현했으며, 실제 Elasticsearch 전체 질의 실측은 후속 검증으로 분리했습니다.",
    meta: {
      period: "2026",
      role: "개인 구현 · 문서 구조화, BM25·Vector Search·RRF 검색, 61개 평가 질의 기준선 측정, Elasticsearch Provider·Legacy fallback",
      service: "LLM Wiki·RAG 지식 검색 시스템",
    },
    highlights: ["50개 문서 · 737개 Chunk", "61개 Golden Query 평가", "Hybrid Hit@5 82.14%", "Elasticsearch Provider 구현"],
    tags: ["TypeScript", "Cloudflare Pages Functions", "BM25", "Vector Search", "RRF", "Elasticsearch", "HNSW", "JSON Index", "RAG"],
    gradient: "from-indigo-500/10 to-violet-500/5",
    liveUrl: "https://llmwiki.jingyeong.cloud",
    details: [
      {
        title: "프로젝트 배경과 기술 선택",
        body:
          "프로젝트 문서와 기술 의사결정이 여러 파일에 흩어져 있어 정확한 파일명이나 코드 식별자를 찾는 검색과, 표현이 다른 유사 내용을 찾는 검색이 모두 필요했습니다.\n\nBM25는 키워드와 식별자 검색에 강하고 Vector Search는 문맥이 비슷한 문서를 찾는 데 유리해 두 방식을 함께 사용했습니다. 서로 다른 점수 체계를 직접 합산하는 대신 순위 기반인 RRF로 결과를 결합했고, Cloudflare 정적 배포 환경의 런타임 부하를 줄이기 위해 문서를 빌드 단계에서 JSON 인덱스로 변환했습니다.",
      },
      {
        title: "개발 프로세스",
        items: [
          "**1. 문서 구조화**: 프로젝트 문서를 수집·정규화하고 title, category, tags, sourcePath와 섹션 정보를 포함한 청크를 만들었습니다.",
          "**2. 검색 방식 분리 구현**: 정확한 단어 검색을 위한 BM25와 문맥 검색을 위한 Vector Search를 각각 구현했습니다.",
          "**3. 결과 결합**: 서로 다른 검색 점수를 직접 비교하지 않고 RRF로 순위를 결합해 최종 검색 결과를 만들었습니다.",
          "**4. 서비스 연결**: `/api/rag/ask` 검색 API와 `/api/auth/verify` 인증 흐름을 구성하고, 응답에 문서 출처와 섹션 정보를 포함했습니다.",
          "**5. 배포 최적화**: 빌드 단계에서 정적 JSON 인덱스를 생성해 런타임에서는 검색과 응답 처리에 집중하도록 구성했습니다.",
        ],
      },
      {
        title: "검색 품질 기준선 평가",
        body:
          "Elasticsearch를 도입하기 전에 61개 Golden Query를 구성해 동일한 Top-5 조건에서 Vector, BM25, Hybrid 검색을 비교했습니다. Hybrid는 품질이 가장 높았지만 애플리케이션 내부 계산 비용으로 p95 지연이 증가해, Elasticsearch 확장의 필요성을 수치로 정의할 수 있었습니다.",
        table: {
          headers: ["검색 방식", "Hit@5", "Recall@5", "MRR", "nDCG@5", "p95"],
          rows: [
            ["Vector", "69.64%", "46.13%", "0.5696", "0.4618", "2.45ms"],
            ["BM25", "75.00%", "50.00%", "0.6369", "0.4977", "127.73ms"],
            ["Hybrid", "82.14%", "61.01%", "0.6875", "0.5884", "171.89ms"],
          ],
        },
      },
      {
        title: "Elasticsearch 학습·확장 구현과 검증 경계",
        items: [
          "**검색 Provider 분리**: 기존 BM25·로컬 Vector·RRF 경로를 유지하면서 Elasticsearch Provider를 별도 모듈로 구성해 점진적으로 전환할 수 있게 했습니다.",
          "**색인·검색 구현**: 256차원 dense_vector, cosine 기반 int8_hnsw, 필드별 BM25 가중치, 200개 단위 Bulk Indexing, BM25+kNN RRF 검색을 구현했습니다.",
          "**회귀 검증**: Elasticsearch 신규 테스트 3개와 전체 회귀 테스트 92개를 통과해 기존 Wiki 검색 흐름이 깨지지 않는 것을 확인했습니다.",
          "**검증 경계**: Docker Desktop 환경 이슈로 실제 Elasticsearch 컨테이너의 61개 전체 질의 실측은 완료하지 못했습니다. 따라서 성능 개선으로 단정하지 않고, 동일 평가셋으로 비교할 수 있는 구현 단계까지 완료했다고 구분했습니다.",
        ],
      },
      {
        title: "검색을 넘어 문서·코드 관계를 지식 그래프로 구조화했습니다",
        body:
          "문서 검색 결과를 개별 파일 목록으로만 제공하지 않고, 코드·테스트·문서 사이의 연결을 2,057개 노드와 2,803개 관계로 구조화했습니다. 원문에서 직접 확인한 EXTRACTED 관계와 AI가 제안한 INFERRED 관계를 구분해, 추론 결과를 사실과 동일하게 취급하지 않도록 설계했습니다.",
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

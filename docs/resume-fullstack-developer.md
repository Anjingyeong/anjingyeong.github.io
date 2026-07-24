# 안진경 | Full-Stack Developer 이력서

## 한 줄 소개

사용자의 한 번의 입력이 화면, API, 데이터와 결과까지 막힘없이 이어지도록 만드는 개발자입니다. 마음이음 웹서비스를 기획부터 배포까지 1인 개발하고, 스마트 안전 관제에서는 AI 이벤트가 MQTT·백엔드·WebSocket을 거쳐 관제 화면에 도달하는 실시간 흐름을 연결했습니다. 화면과 서버를 따로 구현하기보다, 데이터가 이동하는 과정과 예외 상황을 함께 살피며 서비스를 완성합니다. 특정 기술에 갇히기보다 요구사항에 필요한 구조를 빠르게 파악하고, 아이디어를 실제로 작동하는 제품으로 바꿀 수 있는 사람입니다.

## 기술 스택

- **Backend & Database:** Spring Boot, Spring Data JPA, Node.js, REST API, WebSocket, STOMP, MySQL, SQL, Cloudflare Workers, D1
- **Frontend:** React, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, Vite
- **Integration & Deployment:** MQTT, Docker, Git, GitHub, GitHub Pages, Cloudflare Pages
- **AI & Data:** Python, PyTorch, OpenCV, Computer Vision, RAG, Vector Search

## 프로젝트

### 마음이음 | 개인정보 최소 수집형 자가체크 및 결과 리포트 웹서비스
- **기간·형태:** 약 2주 · 개인 프로젝트 · 1인 개발
- **역할:** 기획, 설계, 프론트엔드, API, 데이터 저장, 결과 리포트, 배포

- React·Vite 기반 모바일 우선 자가체크 UI와 공통 위험도 계산 로직을 직접 구현했습니다.
- Cloudflare Workers API와 D1 저장 구조를 구성해 입력, 결과 계산, 저장 흐름을 연결했습니다.
- 관리자 통계 카드와 결과 조회, PDF 결과 리포트를 구현했습니다.
- 개인정보처리방침, 동의 절차, 쿠키·분석 도구 동의 및 SEO 메타데이터를 구성했습니다.
- Cloudflare Pages에 운영 배포했습니다.

### 스마트 안전 관제 | MQTT·Spring Boot·WebSocket 기반 실시간 안전 관제 플랫폼

- **담당:** Python AI Worker에서 위험 이벤트를 생성하고 MQTT 메시지를 발행했습니다.
- 프레임 ID와 시간 정보로 이벤트 지연을 추적하고, 영상 종료·소스 변경·재연결 시 분석 상태 초기화 흐름을 설계했습니다.
- Spring Boot의 이벤트 수신·저장 흐름과 WebSocket·STOMP 관제 알림을 연동했습니다.
- React 관제 대시보드까지 이어지는 실시간 이벤트 흐름을 검증했습니다.

### LLM Wiki·RAG | BM25·Vector Search·RRF 기반 프로젝트 지식 검색 시스템

- 프로젝트 문서를 title, category, tags, sourcePath 메타데이터를 포함한 정적 JSON 인덱스로 변환했습니다.
- 키워드 검색에는 BM25, 문맥 검색에는 Vector Search를 적용하고 RRF로 결과 순위를 결합했습니다.
- `/api/rag/ask` 검색 API와 `/api/auth/verify` 인증 흐름을 구성했습니다.
- 검색 결과에 문서 출처와 섹션 정보를 포함했습니다.
- Cloudflare 정적 배포 환경에 맞춰 런타임 부하를 줄이는 구조를 선택했습니다.

## 기타 구현 경험

- React·TypeScript 기반으로 직무별 콘텐츠와 인쇄 페이지를 제공하는 개인 포트폴리오를 직접 구축·운영하고 있습니다.

## 교육

- 건양대학교 의공학과 학사, 2026.02 졸업
- SK쉴더스 지능형 애플리케이션 개발 부트캠프 5기, 2026.05–2026.07

## 수상

- 공학혁신상 (2024 창의혁신 DNA 산학협력)
- 금상 (2025 캡스톤디자인 경진대회)
- 동상 (2025 성균관대학교 컨소시엄 창의적 종합설계 경진대회)

## 링크

- GitHub: https://github.com/Anjingyeong
- Portfolio: https://anjingyeong.github.io/#/fullstack

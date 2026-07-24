# 안진경 | Full-Stack Developer 이력서

## 한 줄 소개

AI 기능을 실제 서비스로 연결해 온 풀스택 개발자입니다. React와 TypeScript 기반 사용자 화면부터 Spring Boot·Cloudflare 기반 API 및 데이터 저장 구조까지 하나의 서비스 흐름으로 구현합니다.

## 기술 스택

- **Backend & Database:** Spring Boot, Spring Data JPA, Node.js, REST API, WebSocket, STOMP, MySQL, SQL, Cloudflare Workers, D1
- **Frontend:** React, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, Vite
- **Integration & Deployment:** MQTT, Docker, Git, GitHub, GitHub Pages, Cloudflare Pages
- **AI & Data:** Python, PyTorch, OpenCV, Computer Vision, RAG, Vector Search

## 프로젝트

### 마음이음 | 개인정보 최소 수집형 자가체크 및 결과 리포트 웹서비스

- React·Vite 기반 모바일 우선 자가체크 UI와 공통 위험도 계산 로직을 직접 구현했습니다.
- Cloudflare Workers API와 D1 저장 구조를 구성해 입력, 결과 계산, 저장 흐름을 연결했습니다.
- 관리자 통계 카드와 결과 조회, PDF 결과 리포트를 구현했습니다.
- 개인정보처리방침, 동의 절차, 쿠키·분석 도구 동의 및 SEO 메타데이터를 구성했습니다.
- Cloudflare Pages에 운영 배포했으며 확인되지 않은 방문자·사용자·성능 수치는 기재하지 않았습니다.

### 스마트 안전 관제 | MQTT·Spring Boot·WebSocket 기반 실시간 안전 관제 플랫폼

- **직접 구현:** RTSP 입력을 처리하는 Python AI Worker에서 위험 추론 결과와 이벤트를 생성했습니다.
- **직접 구현:** 프레임 ID와 시간 정보를 기록해 이벤트 지연을 추적하고, 영상 종료·소스 변경·재연결 시 분석 상태 초기화 흐름을 설계했습니다.
- **연동 기여:** MQTT로 이벤트를 전달하고 Spring Boot의 수신·저장 흐름 및 WebSocket·STOMP 관제 알림에 연결했습니다.
- **연동 기여:** React 관제 대시보드에서 이벤트 상태가 이어지는 데이터 흐름을 검증했습니다.
- Spring Boot 백엔드 전체와 React 프론트엔드 전체를 직접 구현한 것으로 표현하지 않습니다.

### LLM Wiki·RAG | BM25·Vector Search·RRF 기반 프로젝트 지식 검색 시스템

- 프로젝트 문서를 title, category, tags, sourcePath 메타데이터를 포함한 정적 JSON 인덱스로 변환했습니다.
- 키워드 검색에는 BM25, 문맥 검색에는 Vector Search를 적용하고 RRF로 결과 순위를 결합했습니다.
- `/api/rag/ask` 검색 API와 `/api/auth/verify` 인증 흐름을 구성했습니다.
- 검색 결과에 문서 출처와 섹션 정보를 포함했습니다.
- Cloudflare 정적 배포 환경에 맞춰 런타임 부하를 줄였으며 구현되지 않은 DB·사용자 계정·대규모 운영 기능은 기재하지 않았습니다.

### 개인 포트폴리오 | React·TypeScript 기반 직무별 포트폴리오 웹사이트

- React·TypeScript 컴포넌트와 프로젝트 데이터를 분리해 직무별 콘텐츠를 구성했습니다.
- AI Engineer와 Full-Stack Developer 라우트, 프로젝트 상세 모달, Mermaid 아키텍처 렌더링을 구현했습니다.
- AI 및 풀스택 직무별 인쇄 페이지와 반응형 레이아웃을 구성했습니다.
- Vitest로 기존 기능을 검증하고 GitHub Pages에 배포했습니다.

## 교육

- 건양대학교 의공학과 학사, 2026.02 졸업
- SK쉴더스 지능형 애플리케이션 개발 부트캠프 5기, 2026.01–2026.07

## 수상

- 공학혁신상 (2024 창의혁신 DNA 산학협력)
- 금상 (2025 캡스톤디자인 경진대회)
- 동상 (2025 성균관대학교 컨소시엄 창의적 종합설계 경진대회)

## 링크

- GitHub: https://github.com/Anjingyeong
- Portfolio: https://anjingyeong.github.io/#/fullstack

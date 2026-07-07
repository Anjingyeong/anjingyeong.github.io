# 안진경 (An Jin Gyeong) | Developer Portfolio

React, TypeScript, Tailwind CSS 기반 개인 개발 포트폴리오 웹사이트입니다.

배포 링크: [https://anjingyeong.github.io/](https://anjingyeong.github.io/)

---

## 📌 소개 (Introduction)

본 포트폴리오는 의공학적 배경을 지닌 AI Engineer / Full-Stack AI Developer 안진경의 포트폴리오입니다. 실시간 영상 AI, 의료 컴퓨터 비전, 검색 기반 지식 관리, 백엔드 실시간 이벤트 흐름을 중심으로 "모델 결과가 실제 서비스 흐름에 연결되는 구조"를 다룹니다. 특히 **RTSP-MQTT-WebSocket 이벤트 흐름**, **RF-DETR Train 70% / Validation 20% / Test 10% 분할**, **VAE Dynamic Threshold 후처리**, **BM25 + Vector Search + Metadata Filtering + RRF** 검색 구조를 주요 근거로 정리했습니다.

---

## 🛠 Tech Stack (기술 스택)

- **Languages:** Python, TypeScript, JavaScript, SQL, HTML/CSS
- **Backend / Infra:** FastAPI, Node.js, WebSocket, MQTT, REST APIs, Docker
- **Frontend:** React, Tailwind CSS, Streamlit
- **AI & Data Pipeline:** PyTorch, TensorFlow, OpenCV, RF-DETR, VAE, BM25, Vector Search, RRF
- **Tools:** Git, GitHub, Docker

---

## 🚀 주요 섹션 (Key Sections)

1. **프로젝트 (Projects):** 핵심 AI 및 비전 관련 프로젝트 상세 설명 (상황/문제, 해결과정, 결과, 확인 가능한 수치 및 다이어그램 포함)
2. **기술 역량 (Skills):** 언어, 프레임워크, 라이브러리 및 도구 요약
3. **경험 및 수상 (Experience & Awards):** 학력, 대외 활동 및 경진대회 수상 이력
4. **인증/역량 검증 (Competence):** 공학 역량 인증 및 자격증 정보
5. **소개 (About):** 개발자 소개 및 핵심 커리어 지향점
6. **연락처 (Contact):** 협업 제안 및 문의 메시지 전송 폼

---

## 📄 2026 AI Engineer 포트폴리오 문서

취업 포트폴리오 관점에서 문제정의, 접근 방식, 수행 내용, 검증 가능한 성과, 프로젝트별 상세 근거를 정리한 문서입니다. 내부 면접 연습용 서술과 개발 메모는 웹 본문과 제출용 README 전면에 노출하지 않습니다.

- [Portfolio Summary 2026 AI Engineer](./portfolio-summary-2026-ai-engineer.md)
- [Smart Safety AI Case Study](./smart-safety-ai-case-study.md)
- [LLM Wiki / RAG Case Study](./llm-wiki-rag-case-study.md)
- [Project Selection Matrix](./project-selection-matrix.md)

---

## 💻 실행 방법 (Running the Project)

로컬 환경에서 개발 서버를 구동하기 위한 방법입니다.

```bash
# 1. 패키지 설치
npm install

# 2. 로컬 개발 서버 구동 (기본 포트: 8080)
npm run dev
```

---

## 🧪 검증 방법 (Verification & Build)

코드 린팅, 단위 테스트 및 빌드가 정상적으로 완료되는지 검증할 수 있습니다.

```bash
# 1. 린트 검사
npm run lint

# 2. 테스트 스크립트 실행 (Vitest)
npm run test

# 3. 배포용 빌드 파일 생성
npm run build

# 4. LLM Wiki 정적 검색 인덱스 생성
npm run wiki:index
```

현재 포트폴리오 회귀 테스트는 `src/test/projects-public-copy.test.ts`에서 프로젝트 공개 문구, RF-DETR/VAE 역할 범위, LLM Wiki 색인 구조를 함께 점검합니다.

---

## 🔒 EmailJS 환경 변수 설정 (EmailJS Configuration)

문의 폼(`ContactSection.tsx`) 기능을 정상적으로 동작시키려면 아래 환경 변수 설정이 필요합니다.

1. 프로젝트 루트 디렉토리에 `.env.local` 파일을 생성합니다.
2. 아래 형식에 맞춰 EmailJS 계정에서 발급받은 값을 입력합니다.

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

*설정되지 않은 경우, 로컬에서 경고 메시지가 출력되고 문의 전송 시 이메일 전송 구성이 필요하다는 안내가 노출됩니다.*

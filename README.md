# 안진경 (An Jin Gyeong) | Developer Portfolio

React, TypeScript, Tailwind CSS 기반 개인 개발 포트폴리오 웹사이트입니다.

배포 예정 주소:

- AI Engineer: `https://ai.jingyeong.cloud`
- Full-Stack Developer: `https://fullstack.jingyeong.cloud`

---

## 📌 소개 (Introduction)

안진경의 AI Engineer / Full-Stack Developer 포트폴리오입니다. 실시간 영상 AI, 의료 컴퓨터비전, 실시간 이벤트 처리와 검색 기반 서비스 프로젝트를 문제 정의·원인 분석·의사결정·결과 중심으로 정리했습니다.

---

## 🛠 Tech Stack (기술 스택)

- **Portfolio Website:** React, TypeScript, Vite, Tailwind CSS, Vitest
- **Project Areas:** Computer Vision, PyTorch, TensorRT, RTSP, MQTT, Spring Boot, PostgreSQL, React, Cloudflare Workers

---

## 🚀 주요 섹션 (Key Sections)

1. **프로젝트 (Projects):** 핵심 AI 및 비전/풀스택 관련 프로젝트 상세 설명 (문제 정의, 원인 분석, 의사결정, 결과 수치 및 다이어그램 포함)
2. **기술 역량 (Skills):** 카테고리별 핵심 기술 스택 및 실무 적용 도구
3. **경험 및 수상 (Experience & Awards):** 교육 과정, 학력, 인턴십 및 경진대회 수상 이력
4. **인증/역량 검증 (Competence):** 공학 역량 인증 및 자격 수험 정보
5. **소개 (About):** 개발자 소개 및 직무 핵심 역량
6. **연락처 (Contact):** 협업 제안 및 문의 메시지 전송 폼

---

## 📄 2026 AI Engineer / Full-Stack Developer 포트폴리오 문서

취업 포트폴리오 관점에서 문제정의, 접근 방식, 수행 내용, 검증 가능한 성과, 프로젝트별 상세 근거를 정리한 문서입니다.

- [Smart Safety AI Case Study](./smart-safety-ai-case-study.md)
- [LLM Wiki / RAG Case Study](./llm-wiki-rag-case-study.md)
- [Portfolio Summary 2026 AI Engineer](./portfolio-summary-2026-ai-engineer.md)

---

## 💻 실행 방법 (Running the Project)

로컬 환경에서 개발 서버를 구동하기 위한 방법입니다.

```bash
# 1. 패키지 설치
npm install

# 2. AI 포트폴리오 로컬 실행
npm run dev:ai

# 3. Full-Stack 포트폴리오 로컬 실행
npm run dev:fullstack
```

---

## 🧪 검증 방법 (Verification & Build)

코드 린팅, 단위 테스트 및 빌드가 정상적으로 완료되는지 검증할 수 있습니다.

```bash
# 1. 린트 검사
npm run lint

# 2. 테스트 스크립트 실행 (Vitest)
npm run test

# 3. AI 배포용 빌드
npm run build:ai

# 4. Full-Stack 배포용 빌드
npm run build:fullstack

# 5. LLM Wiki 정적 검색 인덱스 생성
npm run wiki:index
```

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

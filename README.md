# 안진경 (Jin Kyoung Ahn) | Developer Portfolio

React, TypeScript, Tailwind CSS 기반 개인 개발 포트폴리오 웹사이트입니다.

배포 링크: [https://anjingyeong.github.io/](https://anjingyeong.github.io/)

---

## 📌 소개 (Introduction)

본 포트폴리오는 의공학적 배경을 지닌 풀스택 엔지니어 안진경의 포트폴리오입니다. 데이터 중심의 문제 해결 능력과 백엔드 동시성 제어, 실시간 데이터 스트리밍 및 AI 비전 솔루션 개발 경험을 담고 있습니다.

---

## 🛠 Tech Stack (기술 스택)

- **Languages:** Python, TypeScript, JavaScript, SQL, HTML/CSS
- **Backend / Infra:** Spring Boot, JPA, Node.js, WebSockets (STOMP), MySQL, REST APIs
- **Frontend:** React, Tailwind CSS, Streamlit
- **AI & Data Pipeline:** PyTorch, TensorFlow, OpenCV, BeautifulSoup4
- **Tools:** Git, GitHub, Docker

---

## 🚀 주요 섹션 (Key Sections)

1. **소개 (About):** 개발자 소개 및 핵심 커리어 지향점
2. **프로젝트 (Projects):** 핵심 AI 및 비전 관련 프로젝트 상세 설명 (상황/문제, 해결과정, 결과 및 다이어그램 포함)
3. **기술 역량 (Skills):** 언어, 프레임워크, 라이브러리 및 도구 요약
4. **경험 및 수상 (Experience & Awards):** 학력, 대외 활동 및 경진대회 수상 이력
5. **인증/역량 검증 (Competence):** 공학 역량 인증 및 자격증 정보
6. **연락처 (Contact):** 협업 제안 및 문의 메시지 전송 폼

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

*설정되지 않은 경우, 로컬에서 경고 메시지가 출력되고 문의 전송 시 이메일 전송 구성이 필요하다는 안내가 노출됩니다.*

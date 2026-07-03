# 안진경 | AI Engineer 지원 이력서

- Email: anjin0910@gmail.com
- GitHub: https://github.com/Anjingyeong
- Portfolio: https://anjingyeong.github.io/

## Profile Summary

의공학 기반의 Computer Vision 프로젝트와 실시간 웹 서비스 연동 경험을 가진 AI Engineer 지원자입니다. RTSP 영상 입력, AI 추론, MQTT/WebSocket 이벤트 전달처럼 모델 결과가 서비스 화면과 운영 흐름 안에서 동작하는 구조에 관심이 있습니다. 의료 영상 프로젝트에서는 RF-DETR, VAE, 데이터 증강, Dynamic Threshold를 활용해 데이터 기반 성능 개선을 수행했습니다. 최근에는 LLM Wiki / RAG 기반 Evidence Wiki로 실험 기록, 오류 해결, 의사결정 근거를 재사용 가능한 지식 자산으로 정리하고 있습니다.

## Core Skills

| Category | Skills |
|---|---|
| AI / ML | Python, PyTorch, TensorFlow, VAE, LSTM, model inference pipeline |
| Computer Vision | OpenCV, RF-DETR, DINOv2, YOLO Pose, keypoint extraction, object detection, anomaly detection |
| Data Analysis & Evaluation | FP/FN analysis, hard negative 후보 설계, mAP, FPS, Dice Coefficient, threshold tuning |
| Backend / Streaming | FastAPI, Spring Boot, REST API, MQTT, WebSocket, STOMP, RTSP |
| Frontend | React, TypeScript, Tailwind CSS, Streamlit |
| Cloud / DevOps | Docker, Git, GitHub, Vite, deployment workflow |
| RAG / LLM Tools | Evidence Wiki, RAG, Hybrid Search 설계, metadata filtering, BM25, vector search, RRF |
| Collaboration / Documentation | STAR-RN, technical writing, troubleshooting log, portfolio documentation |

## Project Experience

### 1. AI 기반 스마트 안전 관제 시스템

- **기간:** 2026.05 - 2026.07
- **역할:** AI 추론 파이프라인/이벤트 흐름 설계, 실시간 관제 구조 정리, AI 개발 워크플로우 문서화
- **기술스택:** Python, FastAPI, Docker, RTSP, MQTT, WebSocket, WebRTC, YOLO Pose, LSTM
- **구현 상태:** 포트폴리오/문서 기반 확인. 일부 AI 세부 구현은 Git 검증 필요.

**문제정의**

- CCTV 화면이 많아 관제자가 모든 화면을 24시간 동일한 집중도로 확인하기 어렵다는 문제를, AI가 관제자의 판단 공백을 줄이는 실시간 보조 시스템 문제로 재정의.
- 단순 낙상 탐지 모델이 아니라, AI 이벤트가 영상 증거와 일치해야 신뢰 가능한 관제 시스템이 된다는 관점으로 접근.

**접근 방식**

- RTSP 영상 입력, AI 추론, MQTT event metadata, WebSocket 대시보드 알림을 분리한 실시간 이벤트 파이프라인으로 구조화.
- 영상 송출과 AI 이벤트 metadata를 분리해 overlay 동기화, frameId/timestamp/evidence chain, 사후 오류 분석이 가능하도록 설계.
- cameraLoginId 기반 다중 카메라 처리, tracker state, frame drop, active_tracks=0 같은 운영 안정성 이슈를 개선 대상으로 정리.

**주요 수행내용**

- YOLO Pose 기반 keypoint 추출 및 LSTM 기반 시계열 행동 분류 파이프라인을 핵심 AI 구조로 정리.
- FP/FN 분석 기준과 hard negative 재학습 후보 설계 방향 수립.
- threshold, tracker state, frame drop, active_tracks 상태를 모델 성능이 아닌 운영 안정성 관점에서 분석 항목으로 분리.
- Codex/Hermes/Antigravity 기반으로 요구사항, 검증 기준, 구현/실험/계획 구분을 문서화.

**성과**

- RTSP -> AI 추론 -> MQTT 이벤트 -> WebSocket 알림으로 이어지는 실시간 관제 흐름을 포트폴리오 대표 프로젝트로 재구성.
- 정량 성과(Recall, Precision, F1, FP/FN, latency, FPS)는 현재 Git/실험 로그 검증 전이므로 이력서에는 임의 기재하지 않음.
- 운영 안정성, evidence chain, 오탐/미탐 분석 중심의 개선 방향을 명확히 정리.

**키워드:** Real-time AI, RTSP, MQTT, WebSocket, YOLO Pose, LSTM, FP/FN, hard negative, evidence chain

### 2. LLM Wiki / Evidence Wiki / RAG 기반 프로젝트 지식 시스템

- **기간:** 2026
- **역할:** 프로젝트 지식 구조 설계, RAG 포트폴리오 문서화, evidence 기반 면접/포트폴리오 재사용 구조 정리
- **기술스택:** RAG, Hybrid Search 설계, metadata filtering, BM25, vector search, RRF, Markdown, Antigravity/Codex workflow
- **구현 상태:** 로컬 Antigravity brain 문서와 UI/검증 스크린샷 기준 확인.

**문제정의**

- 프로젝트가 복잡해지면서 실험 결과, 오류 해결, 의사결정 기록이 여러 도구와 폴더에 흩어져 재사용하기 어려운 문제가 발생.
- 개발 기록을 단순 메모가 아니라 검색 가능하고 면접/포트폴리오 근거로 재사용 가능한 Evidence Wiki로 전환하는 문제로 재정의.

**접근 방식**

- 문서 기반 Wiki와 RAG 구조를 사용해 실험 기록, 트러블슈팅, UI 검증, 빌드/테스트 기록을 source evidence로 축적.
- Hybrid Search는 metadata filtering, BM25, vector search, RRF, optional re-ranking 방향으로 설계.
- GraphRAG는 구현 완료가 아니라 문서 관계가 커졌을 때의 향후 확장 후보로 분리.

**주요 수행내용**

- `implementation_plan.md`, `walkthrough.md`, `task.md` 기반으로 LLM Wiki UI 개선, RAG answer/source/debug UI, 검증 결과를 문서화.
- 답변 근거와 source를 함께 남기는 방식으로 hallucination 방지와 설명 가능성 관점 정리.
- 포트폴리오 문장, STAR-RN, 면접 답변에 재사용 가능한 evidence repository 역할 정의.

**성과**

- 흩어진 개발 기록을 포트폴리오와 면접 답변의 근거 자료로 재사용할 수 있는 구조로 정리.
- 로컬 walkthrough 기준 `npm run lint`, `npm test`, `npm run build`, `git push` PASS 기록 확인.
- AI-native workflow를 단순 도구 사용이 아니라 목표, 제약, 검증 기준을 관리하는 방식으로 정리.

**키워드:** RAG, Evidence Wiki, Hybrid Search, metadata filtering, BM25, vector search, RRF, AI-native workflow

### 3. RF-DETR 기반 실시간 대장 내 용종 검출 시스템

- **기간:** 2025.03 - 2025.11
- **역할:** 모델 실험, 데이터 증강 파이프라인 설계, 모델 경량화 및 추론 검증
- **기술스택:** Python, PyTorch, RF-DETR, DINOv2, OpenCV, Structural Pruning, Albumentations
- **Git:** https://github.com/anjin0910-afk/RF-DETR-project.git

**문제정의**

- 대장 내시경 영상은 조명 변화, 반사광, 장벽 왜곡, 병변 형태 다양성 때문에 일반 객체 탐지 모델의 정확도가 흔들림.
- 실제 의료 환경 적용을 고려하면 정확도뿐 아니라 Edge 환경의 실시간 추론 속도까지 충족해야 함.

**접근 방식 및 수행내용**

- 더 큰 모델을 사용하는 대신, 의료 영상 왜곡은 데이터 단계에서 보완하고 Edge 제약은 경량화로 해결하는 Data-centric 전략 선택.
- Grid Distortion, Elastic Deform 기반 기하학적 데이터 증강 파이프라인 설계.
- RF-DETR + DINOv2 기반 파인튜닝과 OpenCV 기반 추론 시각화 흐름 구성.
- Structural Pruning으로 Edge 환경의 연산량과 추론 속도 제약 대응.

**성과**

- 기존 포트폴리오 자료 기준 mAP 약 7%p 개선.
- 저사양 Edge 환경에서 22 FPS 이상 실시간 추론 성능 확보.
- 제17회 건양대학교 캡스톤디자인 경진대회 금상/대상, 전국 공학교육혁신 컨소시엄 경진대회 동상 수상.

**키워드:** Medical Computer Vision, RF-DETR, DINOv2, Data-centric AI, Edge Inference, Structural Pruning

### 4. VAE 기반 비지도 학습 유방암 병변 검출 시스템

- **기간:** 2024.03 - 2024.10
- **역할:** 이상 탐지 파이프라인 설계, 커스텀 손실 함수 구현, 재구성 오차 기반 후처리
- **기술스택:** Python, TensorFlow, VAE, Reconstruction Error, Dynamic Threshold, OpenCV
- **Git:** https://github.com/anjin0910-afk/vae-breast-cancer-anomaly.git

**문제정의**

- 유방 초음파 영상은 병변 라벨링 비용이 높아 충분한 지도학습 데이터를 확보하기 어려움.
- 라벨 부족 문제를 정상 조직 분포 학습 기반의 비지도 이상 탐지 문제로 재정의.

**접근 방식 및 수행내용**

- VAE로 정상 조직 이미지를 학습하고, 입력 이미지와 재구성 이미지의 차이를 Reconstruction Error Map으로 계산.
- KLD와 MSE의 균형을 조정하는 커스텀 손실 함수 설계.
- 영상별 밝기와 노이즈 편차를 보정하기 위해 Dynamic Threshold 후처리 적용.

**성과**

- 로컬 README 기준 max 90% Dice Coefficient 달성.
- 2024년 창의혁신 DNA 산학협력 공학혁신상 수상.
- 의료 AI에서 모델 구조뿐 아니라 후처리와 평가 기준이 결과 품질을 좌우한다는 점을 검증.

**키워드:** VAE, Unsupervised Learning, Anomaly Detection, Reconstruction Error, Dynamic Threshold, Medical AI

### 5. Supporting Projects

**FullCount - 실시간 KBO 티켓 에스크로 및 커뮤니티**

- Spring Boot, JPA, MySQL, WebSocket/STOMP 기반 에스크로 상태 전이와 실시간 알림 구조 구현.
- API Polling 중심 상태 확인을 이벤트 기반 Push 구조로 전환해 DB I/O 80% 절감(기존 포트폴리오 문서 기준).
- AI Engineer 이력서에서는 실시간 이벤트 처리와 백엔드 무결성 경험으로 보조 반영.

**Lumina Capital - 금융 데이터 비동기 파이프라인**

- Python, Streamlit, BeautifulSoup4 기반 외부 금융 데이터 수집/시각화 프로젝트.
- 외부 API 동기 스크래핑으로 인한 타임아웃 문제를 비동기 스케줄러 + DB 캐싱 구조로 분리.
- AI Engineer 이력서에서는 데이터 파이프라인과 서비스 안정성 경험으로 보조 반영.

**블로그 자동화 파이프라인**

- Gemini API 기반으로 부트캠프 학습 메모를 기술 블로그 초안으로 변환하는 자동화 프로젝트.
- 제목/태그 규칙, 금지 내용 방지, SEO 키워드 반영 등 프롬프트 제약 기반 문서 생성 흐름 설계.
- Git 저장소는 없으므로 로컬 파일 검증 기준으로만 보수적으로 반영.

## Education / Training

- 건양대학교 의공학과 학사
- SK쉴더스 지능형 애플리케이션 개발 부트캠프 5기, 2026.05 - 2026.07
- 의료 AI, Computer Vision, 실시간 관제 시스템, 웹 풀스택 연동 프로젝트 수행

## Awards / Certificates / Activities

- 공학혁신상, 창의혁신 DNA 산학협력, 2024
- 제17회 건양대학교 캡스톤디자인 경진대회 금상/대상, RF-DETR 기반 실시간 용종 검출
- 전국 공학교육혁신 컨소시엄 창의적 종합설계 경진대회 동상, RF-DETR 기반 실시간 용종 검출
- 의공학 전문 실무역량 인증
- 우수 소프트웨어 활용역량 인증
- 정보처리기사 필기 합격

## Portfolio Keywords

Applied AI Engineer, Computer Vision, Real-time AI, RTSP, MQTT, WebSocket, YOLO Pose, LSTM, RF-DETR, DINOv2, OpenCV, VAE, TensorFlow, PyTorch, RAG, Evidence Wiki, Hybrid Search, Data-centric AI, AI Evaluation, FP/FN Analysis, Edge Inference, Technical Documentation

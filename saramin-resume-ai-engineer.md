# AI Engineer 지원 이력서

## 제목

실시간 영상 AI와 의료 Computer Vision 프로젝트를 경험한 AI Engineer 지원자

## 핵심 요약

- YOLO Pose와 LSTM을 활용해 CCTV 영상에서 이상행동을 판단하는 구조를 설계하고, RTSP 입력부터 MQTT/WebSocket 알림까지 이어지는 관제 흐름을 정리했습니다.
- RF-DETR, VAE 기반 의료 영상 프로젝트에서 데이터 증강, 재구성 오차 분석, 후처리 기준 조정처럼 모델 성능에 영향을 주는 작업을 직접 다뤘습니다.
- 모델 결과가 화면에 보이기까지 필요한 백엔드 이벤트, API 응답, 프론트엔드 상태 동기화 흐름을 팀 프로젝트에서 경험했습니다.
- 프로젝트 기록과 오류 해결 과정을 Evidence Wiki와 RAG 구조로 정리해, 나중에 다시 찾고 설명할 수 있는 근거 자료로 만들었습니다.
- 확인되지 않은 성능 수치는 쓰지 않고, 직접 구현한 부분과 추가 검증이 필요한 부분을 구분해 설명하려고 합니다.

## 보유 기술

### AI / ML
- Python, PyTorch, TensorFlow
- YOLO Pose, LSTM, RF-DETR, DINOv2, VAE
- 모델 추론 흐름 구성, 이상행동 탐지 구조 설계, 비지도 이상 탐지

### Computer Vision
- OpenCV, object detection, keypoint extraction, anomaly detection
- Grid Distortion, Elastic Deform 등 의료 영상 특성을 반영한 데이터 증강
- Reconstruction Error Map, Dynamic Threshold 후처리

### Data Analysis & Evaluation
- mAP, FPS, Dice Coefficient 등 프로젝트별 평가 지표 이해
- FP/FN 사례 분석, hard negative 재학습 후보 정리
- threshold, tracker state, frame drop 등 운영 변수 검토

### Backend / Streaming
- FastAPI, Spring Boot, REST API
- RTSP, MQTT, WebSocket, STOMP
- 이벤트 기반 상태 동기화, 실시간 알림 흐름 설계

### Frontend
- React, TypeScript, Tailwind CSS, Streamlit
- 대시보드 UI, 데이터 시각화, API 연동

### Cloud / DevOps
- Docker, Git, GitHub, Vite
- 로컬 개발 환경 구성, 빌드/테스트/배포 흐름 이해

### RAG / LLM Tools
- RAG 구조 설계, Evidence Wiki, Hybrid Search 설계
- BM25, Vector Search, metadata filtering, RRF 개념 이해
- Codex, Antigravity 등 AI 개발 도구를 활용한 문서화와 검증

## 프로젝트 경험

### 스마트 안전 관제 시스템

- **기간:** 2026.05 - 2026.07
- **역할:** 실시간 영상 AI 관제 흐름 설계, 이벤트 데이터 구조 정리, 실험/개선 항목 문서화
- **기술스택:** Python, FastAPI, Docker, RTSP, MQTT, WebSocket, WebRTC, YOLO Pose, LSTM, React

**주요 내용**

- 사람이 CCTV를 계속 확인하기 어려운 상황을 실시간 AI 관제 보조 문제로 정의했습니다.
- YOLO Pose로 사람의 keypoint를 추출하고, LSTM으로 시간 흐름에 따른 이상행동을 판단하는 구조를 정리했습니다.
- RTSP 영상 입력, AI 추론, MQTT 이벤트 발행, WebSocket 대시보드 알림을 분리해 관제 파이프라인을 구성했습니다.
- frameId와 timestamp를 기준으로 탐지 이벤트와 영상 증거가 어긋날 수 있는 지점을 확인했습니다.
- FP/FN 사례를 기준으로 hard negative 재학습 후보를 정리하고, threshold와 tracker 상태를 개선 검토 항목으로 분리했습니다.
- 정량 성능은 아직 제출용 수치로 확정하지 않고, Git 기록과 실험 로그 확인 후 보강할 항목으로 남겼습니다.

### LLM Wiki · RAG 기반 프로젝트 지식 시스템

- **기간:** 2026
- **역할:** 프로젝트 기록 구조화, Evidence Wiki 문서화, RAG 기반 검색 흐름 정리
- **기술스택:** RAG, Markdown, Hybrid Search 설계, BM25, Vector Search, metadata filtering, RRF, Antigravity/Codex workflow

**주요 내용**

- 프로젝트 실험 결과, 오류 해결 과정, 의사결정 근거가 여러 문서에 흩어지는 문제를 정리했습니다.
- 개발 기록을 다시 검색하고 인용할 수 있도록 Evidence Wiki 형태로 구조화했습니다.
- source, 날짜, 프로젝트, 상태, evidence level 같은 metadata를 함께 남기는 문서 형식을 사용했습니다.
- BM25와 Vector Search를 함께 쓰는 검색 흐름을 설계하고, RRF와 re-ranking은 추가 개선 방향으로 정리했습니다.
- 포트폴리오 문장과 면접 답변을 작성할 때 근거 자료를 다시 확인할 수 있도록 기록을 재사용 가능한 형태로 정리했습니다.

### RF-DETR 기반 대장 내 용종 검출

- **기간:** 2025.03 - 2025.11
- **역할:** 데이터 전처리, Train 70% / Validation 20% / Test 10% 분할 구성, RF-DETR 모델 학습 및 fine-tuning
- **기술스택:** Python, PyTorch, RF-DETR, DINOv2, OpenCV, Kvasir Dataset, Data Augmentation
- **GitHub:** https://github.com/Anjingyeong/RF-DETR-project

**주요 내용**

- 대장 내시경 영상의 조명 변화, 반사광, 장벽 왜곡 때문에 일반 객체 탐지만으로 안정적인 검출이 어려운 문제를 다뤘습니다.
- Grid Distortion과 Elastic Deform을 적용해 내시경 영상에서 자주 나타나는 왜곡을 학습 데이터에 반영했습니다.
- RF-DETR과 DINOv2 기반 탐지 구조를 의료 영상 도메인에 맞게 파인튜닝했습니다.
- Kvasir 대장 내 용종 이미지를 Train 70% / Validation 20% / Test 10%로 분할해 학습, 검증, 평가 흐름을 구성했습니다.
- 최고 성능 mAP@50 86.2% (베이스라인 대비 약 7%p 개선) 및 22+ FPS의 실시간 추론 성능을 확인했습니다.
- 관련 프로젝트로 건양대학교 캡스톤디자인 경진대회와 전국 공학교육혁신 컨소시엄 경진대회 수상 경험이 있습니다.

### VAE 기반 유방 초음파 이상 탐지

- **기간:** 2024.03 - 2024.10
- **역할:** 유방 초음파 데이터 전처리, Reconstruction Error Map 생성, Dynamic Threshold 후처리 알고리즘 개발
- **기술스택:** Python, TensorFlow, VAE, Reconstruction Error Map, Dynamic Threshold, OpenCV
- **GitHub:** https://github.com/Anjingyeong/vae-breast-cancer-anomaly

**주요 내용**

- 유방 초음파 영상에서 병변 라벨을 충분히 확보하기 어려운 문제를 비지도 이상 탐지 문제로 접근했습니다.
- VAE가 정상 조직 패턴을 학습하도록 구성하고, 입력 이미지와 재구성 이미지의 차이를 Reconstruction Error Map으로 계산했습니다.
- VAE 학습에 사용되는 MSE 재구성 오차와 KLD 잠재 공간 정규화 항의 역할을 이해하고, 후처리 기준 설계에 반영했습니다.
- 영상마다 다른 밝기와 노이즈 편차를 줄이기 위해 Dynamic Threshold 후처리를 적용했습니다.
- 기존 포트폴리오 자료 기준 Dice Coefficient 약 90% 수준을 기록했고, 공학혁신상 수상 경험으로 이어졌습니다.

### FullCount · KBO 티켓 에스크로 서비스

- **기간:** 2024
- **역할:** 백엔드/풀스택 연동, DB 모델링, 실시간 상태 동기화 구현
- **기술스택:** Spring Boot, JPA, MySQL, WebSocket, STOMP, React, JWT

**주요 내용**

- 에스크로 거래 상태가 판매자와 구매자 화면에 실시간으로 반영되어야 하는 문제를 다뤘습니다.
- 거래 상태 전이를 고려해 DB 모델을 설계하고, JWT 인증 흐름과 API 응답 형식을 맞췄습니다.
- API Polling 중심의 상태 확인을 WebSocket/STOMP 기반 이벤트 Push 구조로 바꿨습니다.
- 기존 포트폴리오 자료 기준 DB I/O를 약 80% 줄인 것으로 정리되어 있으며, 제출 전 원본 측정 자료 확인이 필요합니다.
- AI 모델 결과를 서비스 이벤트와 화면 상태로 연결할 때 필요한 백엔드/프론트엔드 연동 경험으로 정리할 수 있습니다.

## 교육 / 훈련

### 건양대학교 의공학과

- 의료 영상, 생체신호, 딥러닝 기반 문제 해결을 접하며 Computer Vision과 의료 AI 프로젝트를 수행했습니다.
- 캡스톤 프로젝트를 통해 의료 도메인 문제를 데이터 증강, 모델 학습, 추론 속도 관점에서 다뤘습니다.

### SK쉴더스 지능형 애플리케이션 개발 부트캠프 5기

- AI 기반 스마트 애플리케이션 개발, 풀스택 웹 개발, 클라우드/보안 기초, 팀 프로젝트를 수행했습니다.
- 프론트엔드와 백엔드가 분리된 환경에서 API 명세, CORS, 인증 흐름, Git 협업 문제를 직접 해결했습니다.
- AI 모델 결과가 실제 서비스 화면과 이벤트 흐름에 연결되는 과정을 이해하는 데 도움이 되었습니다.

## 수상 / 활동

- 건양대학교 캡스톤디자인 경진대회 수상, RF-DETR 기반 대장 내 용종 검출 프로젝트
- 전국 공학교육혁신 컨소시엄 창의적 종합설계 경진대회 수상, RF-DETR 기반 대장 내 용종 검출 프로젝트
- 공학혁신상 수상, VAE 기반 유방 초음파 이상 탐지 프로젝트
- 정보처리기사 필기 합격
- 의공학 전공 역량 인증 및 소프트웨어 활용 역량 인증

## 사람인 자기소개용 핵심 문장

- 모델 성능 지표만 보는 것이 아니라, 모델 결과가 실제 화면과 이벤트 흐름 안에서 안정적으로 전달되는지 함께 보는 AI Engineer가 되고 싶습니다.
- 스마트 안전 관제 프로젝트에서는 CCTV 관제의 판단 공백을 줄이기 위해 실시간 영상 입력, AI 추론, 이벤트 발행, 대시보드 알림 흐름을 하나의 파이프라인으로 정리했습니다.
- RF-DETR 프로젝트에서는 Kvasir 데이터를 Train 70% / Validation 20% / Test 10%로 분할하고, 의료 영상의 왜곡과 조명 변화를 데이터 증강으로 보완했습니다.
- LLM Wiki/RAG 프로젝트를 통해 실험 기록과 오류 해결 과정을 검색 가능한 지식 자산으로 정리했습니다.
- AI 도구를 활용하되, 복잡한 오류가 발생했을 때는 로그와 데이터 흐름을 직접 확인하며 원인을 끝까지 찾는 개발자가 되고자 합니다.

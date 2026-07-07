# AI Engineer 프로젝트 중심 상세 이력서

## Header

**안진경 (An Jin Gyeong)**  
AI Engineer / Applied AI Engineer / Computer Vision AI Engineer 지원

- Email: anjin0910@gmail.com
- GitHub: https://github.com/Anjingyeong
- Portfolio: https://anjingyeong.github.io/

## Profile Summary

의공학 기반 의료 AI 프로젝트와 실시간 서비스 연동 경험을 바탕으로, 모델 개발에서 끝나지 않고 실제 서비스에서 AI가 안정적으로 동작하는 구조를 설계하는 AI Engineer를 지향합니다. RF-DETR, VAE, OpenCV, TensorFlow, PyTorch를 활용해 의료 영상의 데이터 특성과 평가 기준을 반영한 모델 개선을 수행했습니다. 최근에는 RTSP/MQTT/WebSocket 기반 스마트 안전 관제 시스템과 LLM Wiki / RAG 기반 Evidence Wiki를 중심으로, 모델 결과를 이벤트 흐름, 운영 안정성, 문서화, 검증 기록까지 연결하는 경험을 쌓고 있습니다.

## Core Competency

### AI / Computer Vision

- RF-DETR, DINOv2, OpenCV 기반 의료 영상 객체 탐지 실험.
- VAE 기반 비지도 이상 탐지, Reconstruction Error Map, Dynamic Threshold 후처리.
- YOLO Pose keypoint 추출 및 LSTM 시계열 행동 분류 구조 이해와 관제 시스템 적용 설계.

### Data-centric AI / Evaluation

- Grid Distortion, Elastic Deform 등 의료 영상 특성 기반 데이터 증강.
- mAP, FPS, Dice Coefficient, FP/FN, hard negative 후보, threshold 정책을 성과와 개선 기준으로 사용.
- 수치가 확인되지 않은 항목은 구현 완료처럼 쓰지 않고 실험/설계/검증 필요로 구분.

### Service Integration

- RTSP 영상 입력, MQTT event metadata, WebSocket 대시보드 알림 흐름 설계.
- Spring Boot, JPA, MySQL, WebSocket/STOMP 기반 실시간 상태 동기화 경험.
- Streamlit, React, TypeScript 기반 사용자 화면과 데이터 흐름 연동.

### RAG / Documentation

- LLM Wiki / Evidence Wiki를 통해 실험 기록, 오류 해결, 의사결정 근거를 검색 가능한 지식 자산으로 구조화.
- metadata filtering, BM25, vector search, RRF, re-ranking 방향의 Hybrid Search 설계.
- STAR-RN 기반 면접 답변, 포트폴리오 문구, 트러블슈팅 기록 재사용 구조 정리.

## Project Experience

### 1. AI 기반 스마트 안전 관제 시스템

**기간:** 2026.05 - 2026.07  
**형태:** SK쉴더스 지능형 애플리케이션 개발 부트캠프 팀 프로젝트  
**역할:** AI 추론 파이프라인/이벤트 흐름 설계, 실시간 관제 구조 정리, 구현/실험/계획 분리 문서화  
**기술스택:** Python, FastAPI, Docker, RTSP, WebRTC, MQTT, WebSocket, YOLO Pose, LSTM

#### 문제정의

관제자는 다수의 CCTV 화면을 24시간 동일한 집중도로 확인하기 어렵습니다. 이 프로젝트의 핵심은 AI가 관제자를 대체하는 것이 아니라, 실시간 영상 AI가 관제자의 판단 공백을 줄이는 보조 시스템으로 동작하게 하는 것입니다.

따라서 "낙상 탐지 모델을 만들었다"가 아니라, 영상 스트리밍, AI 추론, 이벤트 발행, overlay 동기화, 증거 추적이 하나의 흐름으로 연결되어야 하는 문제로 재정의했습니다.

#### 접근 방식

- RTSP 영상 입력과 AI 이벤트 metadata를 분리해 실시간 영상 표시와 이벤트 알림의 책임을 나눔.
- MQTT 기반 이벤트 발행, WebSocket 기반 대시보드 알림, frameId/timestamp 기반 evidence chain을 중심 구조로 정리.
- cameraLoginId 기반 다중 카메라 처리, frame drop, tracker state, active_tracks=0 같은 운영 안정성 이슈를 분석 대상으로 포함.
- YOLO Pose + LSTM 구조는 핵심 AI 방향으로 정리하되, Git 구현 검증 전 항목은 "설계/실험/검증 필요"로 분리.

#### 주요 수행내용

- RTSP -> AI 추론 -> MQTT event metadata -> backend -> WebSocket dashboard 흐름 문서화.
- YOLO Pose 기반 keypoint 추출과 LSTM 기반 시계열 행동 분류를 관제 이벤트 구조와 연결.
- FP/FN 분석 기준, hard negative 후보 설계, threshold/tracker/frame drop 분석 관점을 정리.
- 실시간 관제 시스템의 성과 기준을 모델 정확도 중심에서 운영 안정성, 증거 일치성, 오탐/미탐 분석으로 확장.

#### 성과 및 산출물

- 스마트 안전 관제 시스템을 AI Engineer 지원용 대표 프로젝트 1순위로 재구성.
- 정량 지표는 아직 검증된 실험 로그가 없어 임의 기재하지 않음.
- 구현 완료, 실험 중, 향후 계획을 분리한 case study와 STAR-RN 이력서 문구 작성.

#### 다음 개선 방향

- 스마트 안전 관제 시스템의 AI/backend/frontend/infra Git 저장소 확인.
- Recall, Precision, F1, FP, FN, latency, FPS 실험 로그 확보.
- MQTT payload schema, frame sync / overlay sync 코드, LSTM 학습/추론 코드 검증.

### 2. LLM Wiki / Evidence Wiki / RAG 기반 프로젝트 지식 시스템

**기간:** 2026  
**역할:** 프로젝트 지식 시스템 구조화, RAG 포트폴리오 문서화, evidence 기반 면접 답변 재사용 구조 설계  
**기술스택:** RAG, Hybrid Search 설계, Markdown, metadata filtering, BM25, vector search, RRF, Antigravity/Codex workflow

#### 문제정의

AI 프로젝트는 코드만으로 설명되지 않습니다. 모델 선택 이유, 실험 실패, 오류 해결, 검증 결과, 의사결정 근거가 흩어지면 시간이 지난 뒤 같은 문제를 반복하거나 면접에서 근거 있게 설명하기 어려워집니다.

#### 접근 방식

- 개발 기록을 문서 기반 Evidence Wiki로 구조화.
- RAG를 단순 챗봇이 아니라 실험 기록, 오류 해결, 의사결정 근거를 재사용하는 내부 지식 시스템으로 활용.
- source와 검증 기록을 함께 남겨 hallucination을 줄이고 답변의 근거를 명확히 하는 방향으로 설계.

#### 주요 수행내용

- `implementation_plan.md`, `walkthrough.md`, `task.md` 기반으로 LLM Wiki UI 개선과 RAG answer/source/debug 패턴을 정리.
- Hybrid Search 고도화 방향을 metadata filtering, BM25, vector search, RRF, optional re-ranking으로 분리.
- GraphRAG는 구현 완료가 아니라 문서 규모와 관계가 커졌을 때의 확장 후보로만 정리.

#### 성과

- 프로젝트 기록을 포트폴리오 문구와 면접 답변의 evidence repository로 재사용할 수 있게 정리.
- 로컬 자료 기준 RAG UI 스크린샷, validation log, `npm run lint`, `npm test`, `npm run build` PASS 기록 확인.
- AI-native workflow를 "AI 도구 사용"이 아니라 "목표, 제약, 검증 기준을 관리하는 개발 방식"으로 설명할 수 있게 됨.

### 3. RF-DETR 기반 실시간 대장 내 용종 검출 시스템

**기간:** 2025.03 - 2025.11  
**역할:** 모델 실험, 데이터 증강 파이프라인 설계, 모델 경량화 및 추론 검증  
**기술스택:** Python, PyTorch, RF-DETR, DINOv2, OpenCV, Structural Pruning, Albumentations  
**Git:** https://github.com/anjin0910-afk/RF-DETR-project.git

#### 문제정의

대장 내시경 영상은 조명 변화, 반사광, 장벽 왜곡, 병변 형태 다양성 때문에 일반 객체 탐지 모델이 오버피팅되거나 정확도가 흔들리기 쉽습니다. 또한 실제 적용을 고려하면 Edge 환경에서 실시간 추론이 가능해야 합니다.

#### 접근 방식 및 수행내용

- 의료 영상의 왜곡은 데이터 단계에서 해결하고, 하드웨어 제약은 모델 경량화로 해결하는 전략 선택.
- Grid Distortion, Elastic Deform 기반 데이터 증강으로 장벽 왜곡과 점막 형태 변화를 반영.
- RF-DETR + DINOv2 기반 파인튜닝 구조 사용.
- Structural Pruning과 OpenCV 기반 후처리/시각화로 실시간 추론 흐름 검증.

#### 성과

- 최고 성능 mAP@50 86.2% (베이스라인 대비 약 7%p 개선).
- Edge 환경에서 22+ FPS 이상 실시간 추론 확보.
- 제17회 건양대학교 캡스톤디자인 경진대회 금상/대상, 전국 공학교육혁신 컨소시엄 경진대회 동상.

### 4. VAE 기반 비지도 유방암 병변 검출 시스템

**기간:** 2024.03 - 2024.10  
**역할:** 이상 탐지 파이프라인 설계, 커스텀 손실 함수 구현, 재구성 오차 기반 후처리  
**기술스택:** Python, TensorFlow, VAE, Reconstruction Error, Dynamic Threshold  
**Git:** https://github.com/anjin0910-afk/vae-breast-cancer-anomaly.git

#### 문제정의

유방 초음파 영상은 정밀한 병변 주석 비용이 높아 충분한 지도학습 데이터 확보가 어렵습니다. 이 문제를 정상 조직 분포를 학습한 뒤 정상 패턴에서 벗어나는 영역을 찾는 비지도 이상 탐지 문제로 재정의했습니다.

#### 접근 방식 및 수행내용

- VAE 기반 정상 조직 분포 학습 파이프라인 구성.
- 입력 이미지와 재구성 이미지의 차이를 Reconstruction Error Map으로 변환.
- KLD와 MSE 균형을 조정하는 커스텀 손실 함수 설계.
- 영상별 밝기/노이즈 편차에 대응하기 위해 Dynamic Threshold 후처리 적용.

#### 성과

- 로컬 README 기준 max 90% Dice Coefficient 달성.
- 2024 창의혁신 DNA 산학협력 공학혁신상 수상.
- 의료 AI에서 후처리와 평가 기준이 모델 자체만큼 중요하다는 점을 확인.

### 5. 보조 프로젝트

#### FullCount - 실시간 KBO 티켓 에스크로 및 라이브 커뮤니티

- Spring Boot, JPA, MySQL, WebSocket/STOMP 기반 거래 상태 동기화 구현.
- 에스크로 거래 상태를 등록, 요청, 승인, 결제, 완료/취소 단계로 정의하고 DB 관계 설계.
- API Polling을 이벤트 기반 Push 구조로 전환해 DB I/O 80% 절감(기존 포트폴리오 문서 기준).
- AI Engineer 이력서에서는 실시간 이벤트 처리, 백엔드 무결성, 서비스 통합 역량의 보조 근거로 반영.

#### Lumina Capital - 금융 데이터 비동기 수집/시각화

- 외부 API 동기 스크래핑으로 인한 렌더 지연과 timeout 문제를 비동기 스케줄러 + DB 캐싱 구조로 분리.
- Streamlit session_state 기반 입력 상태 보존으로 사용자 흐름 안정화.
- AI Engineer 이력서에서는 데이터 파이프라인과 서비스 안정성 개선 경험으로 반영.

#### 블로그 자동화 파이프라인

- Gemini API 기반 기술 블로그 초안 자동 생성.
- 제목/태그 규칙, 금지 내용 방지, SEO 키워드 삽입 등 프롬프트 제약 설계.
- Git 저장소가 없으므로 구현 검증은 로컬 README와 파일 구조 기준으로만 보수적으로 반영.

## Education / Training

- 건양대학교 의공학과 학사
- SK쉴더스 지능형 애플리케이션 개발 부트캠프 5기, 2026.05 - 2026.07
- 의료 영상 처리, 딥러닝, 데이터 분석, 실시간 관제 시스템, 풀스택 서비스 연동 프로젝트 수행

## Awards / Certificates / Activities

- 공학혁신상, 2024 창의혁신 DNA 산학협력
- 제17회 건양대학교 캡스톤디자인 경진대회 금상/대상
- 전국 공학교육혁신 컨소시엄 창의적 종합설계 경진대회 동상
- 의공학 전문 실무역량 인증
- 우수 소프트웨어 활용역량 인증
- 정보처리기사 필기 합격

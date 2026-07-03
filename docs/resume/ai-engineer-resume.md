# AI 엔지니어 프로젝트 중심 이력서 (AI Engineer Resume Draft)

---

## 1. 이력서 요약 (Resume Summary)

- **실시간 비전 파이프라인과 서비스 흐름을 함께 다루는 AI 엔지니어**입니다. 의공학적 분석 사고를 바탕으로 단일 모델 성능(mAP, Dice Coefficient)에 그치지 않고, RTSP/MQTT/WebSocket과 같은 실시간 파이프라인 및 백엔드/프론트엔드 연동을 통해 AI 결과가 실제 관제 화면과 서비스 운영으로 이어지는 구조를 설계해 왔습니다.
- **Data-Centric AI 및 실용적 기술 고도화를 지향**합니다. 의료 컴퓨터 비전 프로젝트에서 Grid Distortion/Elastic Deform 기반 데이터 증강과 Structural Pruning/Dynamic Threshold 후처리를 적용해 엣지 환경 추론속도(22+ FPS)와 이상 탐지 정확도를 확보했습니다.
- **지식 자산화 및 RAG 검색 고도화 경험**을 통해 프로젝트 실험 기록, 오류 해결, 의사결정 근거를 Evidence Wiki 구조로 체계화했습니다. Metadata Filtering, BM25, Vector Search, RRF 기반 Hybrid RAG 구조를 Cloudflare Pages/Workers 호환 lightweight 아키텍처로 구현하여 exact keyword 검색 품질과 답변 출처 추적성을 높였습니다.
- 사람의 생명과 직결되는 의료 AI 및 사람의 안전을 보조하는 스마트 관제 시스템 프로젝트를 경험하며, **안정적이고 신뢰 가능한 AI 서비스 구축**에 깊은 관심을 가지고 있습니다.

---

## 2. 핵심 기술 역량 (Core Technical Competencies)

### 📌 AI / Computer Vision
- **YOLO Pose & LSTM 기반 행동 판단:** RTSP CCTV 실시간 스트림 환경에서 사람의 keypoint를 추출하고 시간 흐름에 따른 낙상·실신 이상행동 판단 파이프라인 설계 및 추론 흐름 구성.
- **RF-DETR & DINOv2 객체 탐지:** 대장 내시경 영상의 왜곡 및 반사광 문제를 극복하기 위해 SOTA 비전 백본 파인튜닝과 엣지 장비 탑재용 경량화(Structural Pruning) 수행.
- **VAE 기반 비지도 이상 탐지 (Anomaly Detection):** 주석 라벨이 부족한 유방 초음파 환경에서 정상 데이터 분포를 학습하고 차영상 Reconstruction Error Map 및 Dynamic Threshold 후처리를 적용해 병변 영역 분할.

### 📌 Data / Experiment Management
- **도메인 특화 데이터 증강 (Data-Centric):** Albumentations, OpenCV 기반 Grid Distortion 및 Elastic Deform 기법을 활용하여 내시경 장벽 왜곡과 형태학적 피처 학습 유도.
- **오탐/미탐 (FP/FN) 분석 및 평가:** Precision, Recall, F1-Score, mAP, Dice Coefficient 지표 분석을 통해 threshold 정책을 검토하고, 승인된 real error 후보 기반 hard negative 재학습 파이프라인 설계.
- **Evidence-Based Knowledge Management:** 실험 노이즈와 파라미터 변경 기록을 정규화하고 metadata(title, category, updatedAt, summary, tags, order, sourcePath, sectionTitle)를 포함한 chunk로 지식 자산화.

### 📌 Backend / Streaming / Infrastructure
- **실시간 스트리밍 & 이벤트 아키텍처:** RTSP 영상 스트림 수신, WebRTC/HLS 송출 구조 및 MQTT Publish-Subscribe 메시지 브로커를 활용한 AI 추론 payload 발행 및 WebSocket 대시보드 알림 연동.
- **프레임 동기화 & Evidence Chain:** 영상 프레임과 추론 메타데이터 간 어긋남 방지를 위해 frameId, timestamp, OverlaySyncBuffer 개념 적용 및 추적성 확보.
- **고성능 백엔드 연동:** Spring Boot, JPA, MySQL, STOMP 환경에서 API Polling 구조를 WebSocket Push 방식으로 전환하여 DB I/O 부하 절감 및 상태 동기화 구현.

### 📌 Frontend / Portfolio / Documentation
- **대시보드 UI & 정적 배포 호환:** React, TypeScript, Tailwind CSS, Streamlit 기반 AI 분석 결과 시각화 및 정적 웹 배포 (Cloudflare Pages/Workers 호환).
- **자동화 검증 & AI-Native Workflow:** Antigravity, Codex 등 AI 보조 도구를 활용하되 구현 제약과 검증 기준을 명확히 정의하고, Vitest, ESLint, npm build를 통한 코드 검증 프로세스 내재화.

---

## 3. 주요 프로젝트 경험 (Key Project Experience)

### 1) AI 기반 스마트 안전 관제 시스템 (SK쉴더스 5기)
- **프로젝트 개요:** RTSP 기반 CCTV 영상 스트림에서 낙상·위험 행동을 실시간으로 포착하고, MQTT/WebSocket 이벤트로 관제 대시보드까지 전달하는 AI 관제 보조 시스템 프로젝트.
- **담당 역할:** AI 추론 파이프라인 및 이벤트 데이터 흐름 설계, 오탐/미탐 분석 관점 문서화, 실시간 파이프라인 계층 분리.
- **문제 상황:** 관제자의 24시간 집중력 한계 및 기존 단순 탐지 알림의 근거 부족 문제. 영상 프레임과 이벤트 발행, UI 알림 시점이 일치하지 않아 오탐/미탐 원인 분석이 어려움.
- **주요 구현:**
  - **[구현 완료/설계]** RTSP 영상 입력 수신, FastAPI 기반 AI 추론 서버 방향 및 MQTT/WebSocket 기반 이벤트 브로드캐스트 전달 구조 구성.
  - **[실험/검증 진행]** YOLO Pose 기반 keypoint 추출과 LSTM 시계열 행동 분류 판단 파이프라인 조합, ByteTrack 기반 다중 객체 추적 상태(`active_tracks`) 및 cameraLoginId 멀티 카메라 동시 처리 연동 [ByteTrack 세부 코드는 확인 필요].
  - **[구현/개선 진행]** frameId, timestamp, OverlaySyncBuffer를 활용한 프레임 동기화 및 evidence chain 설계로 영상과 알림 간 시간차 보정.
  - **[향후 계획/개선]** FP/FN 사례 수집 후 승인된 real error 후보 중심 hard negative 재학습 파이프라인, camera별 threshold 동적 적용 정책, Langfuse 기반 Observability 도입.
- **성과 및 검증:**
  - 실시간 영상 탐지 파이프라인을 단순 모델 작성을 넘어 "입력-추론-이벤트-대시보드"의 계층 구조로 재정의.
  - *정량 성과(Precision/Recall/F1/FPS):* [확인 필요 - 로컬 실험 로그 및 repo 코드 추가 검증 후 보강 예정].
- **사용 기술:** Python, FastAPI, Docker, RTSP, WebRTC, MQTT, WebSocket, YOLO Pose, LSTM, OpenCV, React
- **이력서 Bullet:**
  - RTSP 영상 스트림, YOLO Pose keypoint 추출, LSTM 시계열 분류를 연결하여 실시간 이상행동 관제 파이프라인 구성
  - 영상 스트림과 이벤트 메타데이터 경로를 분리(MQTT/WebSocket)하여 관제 대시보드 알림 지연 최소화 및 시스템 가용성 확보
  - frameId와 timestamp 기반 증거 연결(Evidence Chain) 및 OverlaySyncBuffer 구조를 설계하여 영상과 알림 간 프레임 동기화 개선

---

### 2) LLM Wiki / Hybrid RAG 문서 검색 시스템
- **프로젝트 개요:** 프로젝트 과정의 실험 기록, 트러블슈팅, 의사결정 근거를 검색 가능한 지식 자산으로 전환하고 답변 근거 추적성을 확보한 RAG 검색 고도화 프로젝트.
- **담당 역할:** RAG 검색 아키텍처 설계, Hybrid Search 및 Metadata Filtering 구현, 검색 인덱스 정규화 및 검증.
- **문제 상황:** 문서가 증가함에 따라 단순 Vector Search만으로는 `cameraLoginId`, `frameId`, `MQTT`, `YOLO26n`, `run_registered_cameras.py` 같은 exact keyword 및 특수 코드 식별자를 정확히 찾지 못하는 한계 발생.
- **주요 구현:**
  - **[Hybrid RAG 고도화]** 단순 벡터 검색 방식에서 Metadata Filtering, BM25 Keyword Search, Vector Search, Reciprocal Rank Fusion(RRF) 기반 결과 병합 구조로 고도화.
  - **[Metadata 구조화]** 문서 청크마다 `title`, `category`, `updatedAt`, `summary`, `tags`, `order`, `sourcePath`, `sectionTitle` 메타데이터를 정규화하여 포함.
  - **[LLM Context 증강]** 최종 LLM Prompt Context에 문서 제목, 카테고리, 섹션, 수정일, source path, 본문 chunk text를 정교하게 맵핑해 답변 근거 추적성 확보 및 환각 방지.
  - **[Lightweight 아키텍처]** GraphRAG나 Elasticsearch 같은 무거운 외부 서버 없이 Cloudflare Pages/Workers 기반 정적 배포 환경과 호환되는 lightweight 구조 구현.
  - **[자동화 검증]** `npm test` (Vitest), `npm run lint` (ESLint), `npm run build`, 샘플 질의 5종 검색 검증, HTTP `/api/rag/ask` QA 검증 수행.
- **성과 및 검증:**
  - 정확한 코드 식별자 및 키워드 검색 정확도 향상 및 LLM 답변의 출처/섹션 추적성 확보.
  - `npm test` 100% PASS, `npm run build` 성공 및 정적 에셋 패키징 완료.
- **사용 기술:** RAG, Vector Search, BM25, RRF, TypeScript, Node.js, Cloudflare Workers, Python, Vitest
- **이력서 Bullet:**
  - 단순 Vector Search의 키워드 누락 한계를 해결하기 위해 BM25, Vector Search, Metadata Filtering, RRF를 결합한 Hybrid RAG 검색 파이프라인 구현
  - RAG 청크 단위에 title, category, sourcePath, sectionTitle 등 8종 메타데이터를 구조화하여 LLM 답변의 출처 추적성 확보 및 exact keyword(`cameraLoginId`, `MQTT` 등) 검색 품질 보완
  - 별도 전용 검색 서버(Elasticsearch 등) 없이 Cloudflare Pages/Workers 환경과 호환되는 lightweight 하이브리드 검색 구조 구축 및 `/api/rag/ask` QA 검증 완료

---

### 3) RF-DETR 기반 실시간 대장 내 용종 검출 시스템
- **프로젝트 개요:** 대장 내시경 영상의 왜곡과 광원 반사를 보완하고, RF-DETR 기반 모델을 엣지 컴퓨팅 환경에 맞게 경량화한 의료 비전 프로젝트.
- **담당 역할:** 데이터 증강 파이프라인 구축, RF-DETR+DINOv2 파인튜닝, Structural Pruning 및 추론속도 최적화.
- **문제 상황:** 내시경 영상 특유의 기하학적 장벽 왜곡과 빛 반사로 인해 기존 모델의 정확도가 정체되고 오버피팅 발생. 임상 엣지 환경에서 실시간 추론 속도 확보 필요.
- **주요 구현:**
  - Albumentations 및 OpenCV 기반 `Grid Distortion`, `Elastic Deform` 증강 기파을 적용하여 장벽 형태학적 변화 데이터 학습 유도.
  - RF-DETR 탐지 모델과 DINOv2 비전 백본 조합 파인튜닝.
  - 메모리 제약 극복을 위해 `Structural Pruning`을 적용하고 OpenCV 후처리 및 실시간 추론 시각화 연동.
- **성과 및 검증:**
  - 베이스라인 대비 mAP(평균 정밀도) 약 7%p 향상 및 엣지 GPU 환경에서 22+ FPS 실시간 추론 속도 달성.
  - 🏆 제17회 건양대학교 캡스톤디자인 경진대회 금상/대상 & 전국 공학교육혁신 컨소시엄 동상 수상.
- **사용 기술:** Python, PyTorch, RF-DETR, DINOv2, OpenCV, Albumentations, Structural Pruning
- **이력서 Bullet:**
  - 내시경 영상의 기하학적 변형에 강건하도록 Grid Distortion 및 Elastic Deform 기반 Data-Centric 증강 파이프라인을 구축해 mAP 약 7%p 개선
  - Structural Pruning 기법과 OpenCV 후처리 최적화를 적용하여 상용 엣지 디바이스 환경에서 22 FPS 이상의 실시간 추론 성능 확보 (캡스톤디자인 경진대회 대상 수상)

---

### 4) VAE 기반 비지도 유방 초음파 이상 탐지 시스템
- **프로젝트 개요:** 정밀 주석 라벨 수급이 어려운 의료 초음파 영상 문제를 정상 데이터 중심의 비지도 이상 탐지(Anomaly Detection)로 재정의하여 병변 영역을 분할한 프로젝트.
- **담당 역할:** VAE 아키텍처 설계, 커스텀 Loss 함수 구현, Reconstruction Error Map 및 Dynamic Threshold 후처리 로직 개발.
- **문제 상황:** 전문의 주석 비용으로 인한 지도학습 라벨 데이터 부족 및 초음파 영상 특유의 음영 노이즈와 환자별 밝기 편차.
- **주요 구현:**
  - 정상 조직 데이터만 학습하는 VAE(Variational AutoEncoder) 구조 구축.
  - TensorFlow 저수준 API를 활용해 KLD(분산 오차)와 MSE(재구성 오차) 가중치를 조절하는 Custom Loss Function 구현.
  - 차영상 Reconstruction Error Map 생성 후 픽셀 분포 비율을 실시간 계산하는 `Dynamic Threshold` 후처리 알고리즘 개발.
- **성과 및 검증:**
  - 별도 병변 라벨 없이도 Dice Coefficient 기준 최대 90% 수준의 병변 분할 정밀도 달성.
  - 🏆 2024 창의혁신 DNA 산학협력 공학혁신상 (산업통상자원부 장관 주관) 수상.
- **사용 기술:** Python, TensorFlow, VAE, OpenCV, Custom Loss, Dynamic Threshold
- **이력서 Bullet:**
  - 의료 영상의 라벨 부족 한계를 극복하기 위해 정상 패턴 학습 기반 VAE 비지도 이상 탐지(Anomaly Detection) 모델 및 KLD+MSE 커스텀 손실 함수 구현
  - 차영상 Reconstruction Error Map과 환자별 노이즈 편차를 보정하는 Dynamic Threshold 후처리 알고리즘을 개발하여 Dice Coefficient 90% 수준 달성 (공학혁신상 수상)

---

### 5) FullCount - 실시간 KBO 티켓 에스크로 서비스 (백엔드 연동)
- **프로젝트 개요:** 에스크로 거래 상태 전이 및 다자간 실시간 거래를 보장하는 실시간 웹 서비스 구축 프로젝트.
- **담당 역할:** 백엔드 도메인 설계, STOMP/WebSocket 이벤트 구조 구현, JPA 동시성 및 상태 일관성 제어.
- **주요 구현 및 성과:**
  - 기존 HTTP API Polling 방식의 DB 병목을 해결하기 위해 WebSocket/STOMP Pub-Sub 메시지 브로커 도입.
  - DB I/O 부하를 80% 절감하고, 상태 변경 브로드캐스팅 지연 시간을 0.1초 이내로 단축.
- **사용 기술:** Spring Boot, JPA, MySQL, WebSocket, STOMP, React, JWT
- **이력서 Bullet:**
  - HTTP API Polling 방식을 STOMP/WebSocket 기반 Pub-Sub 이벤트 전달 구조로 전환하여 DB I/O 부하 80% 절감 및 실시간 상태 동기화 처리

---

### 6) 포트폴리오 웹사이트 (Portfolio Website)
- **프로젝트 개요:** 개인 프로젝트 및 기술 역량을 직관적으로 전달하는 React/TypeScript 기반 개인 포트폴리오 웹 애플리케이션.
- **주요 구현:** Card-Modal 팝업 구조, Vitest 단위 테스트 및 ESLint 검증 자동화, 정적 배포 구조 구축.
- **사용 기술:** React, TypeScript, Tailwind CSS, Vite, Vitest

---

## 4. 프로젝트별 이력서 Bullet (채용 플랫폼 바로 붙여넣기용)

### 🔹 AI 기반 스마트 안전 관제 시스템
- RTSP CCTV 영상 스트림 수신부터 YOLO Pose keypoint 추출, LSTM 시계열 분류, MQTT/WebSocket 알림 전송까지 이어지는 실시간 AI 관제 파이프라인 구성
- 영상 스트림과 알림 메타데이터 경로를 분리하고, frameId/timestamp 기반 Evidence Chain 및 OverlaySyncBuffer를 도입해 실시간 영상과 경보 UI 간 동기화 문제 개선
- FP/FN 오탐·미탐 사례 분석을 기반으로 승인된 real error 후보를 수집하고, hard negative 재학습 파이프라인 및 동적 threshold 적용 정책 수립

### 🔹 LLM Wiki / Hybrid RAG 문서 검색 시스템
- 단순 Vector Search의 키워드 누락 한계를 보완하고자 Metadata Filtering, BM25 Keyword Search, Vector Search, RRF를 결합한 Hybrid RAG 파이프라인 구축
- 청크 단위에 title, category, sourcePath, sectionTitle 등 8종 메타데이터를 정규화하여 포함하고 exact keyword(`cameraLoginId`, `MQTT` 등) 검색 정확도 및 LLM 답변의 출처 추적성 확보
- GraphRAG/Elasticsearch 등 무거운 인프라 없이 Cloudflare Pages/Workers 호환 lightweight 구조로 구현하고, Vitest 테스트 및 HTTP `/api/rag/ask` QA 검증 완료

### 🔹 RF-DETR 기반 실시간 대장 내 용종 검출 시스템
- 내시경 영상 특유의 광원 반사와 기하학적 왜곡을 보완하기 위해 Grid Distortion 및 Elastic Deform 기반 Data-Centric 증강 파이프라인을 도입하여 mAP 약 7%p 개선
- Structural Pruning 경량화 기법과 OpenCV 후처리 시각화를 연동하여 상용 엣지(GPU) 환경에서 22 FPS 이상의 실시간 추론 속도 확보 (캡스톤디자인 경진대회 대상 수상)

### 🔹 VAE 기반 비지도 유방 초음파 이상 탐지 시스템
- 정밀 라벨 데이터 부족 문제를 해결하기 위해 정상 조직 데이터 기반 VAE 비지도 이상 탐지 모델 및 KLD+MSE 커스텀 손실 함수 구현
- 차영상 Reconstruction Error Map과 환자별 노이즈 편차를 자동 보정하는 Dynamic Threshold 후처리를 적용하여 Dice Coefficient 90% 수준 달성 (산업통상자원부 장관 주관 공학혁신상 수상)

### 🔹 FullCount - 실시간 KBO 티켓 에스크로 서비스
- API Polling 방식의 DB 병목을 해결하기 위해 WebSocket/STOMP 기반 메시지 브로커를 구축하여 DB I/O 부하 80% 절감 및 0.1초 이내 거래 상태 실시간 동기화 구현

---

## 5. 자기소개서 활용 가능 소재 (Cover Letter Ideas)

### 1) 지원동기: "모델 개발에 머물지 않고 실서비스 흐름을 잇는 AI 엔지니어"
- **소재:** 의공학을 전공하며 기술이 실제 사람의 건강과 안전에 미치는 영향을 고민해 왔습니다. 모델의 정밀도 지표만 높이는 것에 그치지 않고, RTSP, MQTT, WebSocket, 백엔드 API 연동을 통해 AI 결과가 관제자의 화면과 현장 대응으로 전달되는 파이프라인에 매력을 느꼈습니다. 실시간 관제 및 비전 AI 분야에서 신뢰 가능한 서비스를 만드는 데 기여하고 싶습니다.

### 2) 직무 역량: "도메인 데이터 특성에 맞춘 Data-Centric 문제 해결"
- **소재:** 대장 내시경의 장벽 왜곡 문제에는 Grid Distortion/Elastic Deform 증강을, 초음파 영상의 라벨 부족에는 VAE 비지도 학습과 Dynamic Threshold 후처리를 적용했습니다. 모델 크기만 키우기보다 데이터 특성과 엣지 제약조건을 파악하여 적절한 후처리와 경량화를 조합하는 공학적 접근법을 강점으로 가지고 있습니다.

### 3) 문제 해결 경험: "검색 한계를 Hybrid RAG와 Metadata 구조화로 돌파"
- **소재:** LLM Wiki 구축 중 단순 벡터 검색이 `cameraLoginId` 같은 정확한 변수명이나 기술 키워드를 짚어내지 못하는 문제를 발견했습니다. BM25와 Vector Search를 RRF로 결합하고 청크에 8종 메타데이터를 정규화하여 exact keyword 검색 성능과 답변의 출처 추적성을 함께 개선했습니다.

### 4) 협업/성장 경험: "실험 기록과 의사결정 근거의 지식 자산화"
- **소재:** AI 프로젝트의 오탐 분석이나 파라미터 변경 이력이 흩어지면 팀 전체의 재검증 비용이 커진다는 점을 배웠습니다. 이를 위해 Evidence Wiki 구조를 도입하고 테스트/빌드 자동화 프로세스(`npm test`, `npm run lint`)를 구축해 팀이 신뢰할 수 있는 개발 기반을 마련했습니다.

---

## 6. 면접 대비 예상 질문 및 답변 방향

### ❓ Q1. 스마트 안전 관제 프로젝트에서 YOLO Pose와 LSTM을 선택한 이유는 무엇인가요?
- **답변 방향:** 2D Bounding Box 기반 객체 탐지만으로는 낙상이나 실신과 같은 시간 흐름 기반의 자세 변화를 구분하기 어렵습니다. 따라서 1차적으로 YOLO Pose를 통해 관절 Keypoint 데이터로 차원을 축소하여 데이터 량을 줄인 후, 시계열 특징을 학습하는 LSTM에 전달함으로써 추론 부하를 줄이면서도 temporal pattern을 포착하도록 설계했습니다.

### ❓ Q2. LLM Wiki에서 Vector Search만 사용하지 않고 BM25와 Metadata Filtering을 추가한 이유는 무엇인가요?
- **답변 방향:** Dense Vector Embedding은 의미적 유사성(semantic similarity)을 잡는 데는 강하지만, `cameraLoginId`, `frameId`, `YOLO26n` 등 특수 코드 식별자나 exact keyword에 대한 가중치가 옅어지는 단점이 있습니다. 키워드 매칭에 강한 BM25와 카테고리/섹션 기반 Metadata Filtering을 적용하고 RRF로 상위 결과를 재조합함으로써 정확한 코드 키워드 탐색률을 대폭 끌어올렸습니다.

### ❓ Q3. RF-DETR 프로젝트에서 mAP 향상을 위해 모델 구조 변경 대신 데이터 증강을 고집한 이유는 무엇인가요?
- **답변 방향:** 내시경 영상의 왜곡은 모델의 표현력 부족이라기보다 훈련 데이터셋과 실제 렌즈 왜곡 간의 distribution shift에서 오는 문제였습니다. 엣지 디바이스의 제한된 파라미터 예산을 지키면서 성능을 올리기 위해 모델 파라미터를 키우는 대신 `Grid Distortion`과 `Elastic Deform` 기법으로 데이터 중심(Data-Centric) 접근을 선택했습니다.

### ❓ Q4. VAE 이상 탐지에서 Dynamic Threshold 후처리가 필요했던 이유는 무엇인가요?
- **답변 방향:** 초음파 영상은 환자마다 기기 음영 및 장기 밀도가 달라 일률적인 Fixed Threshold를 적용하면 오탐(False Positive)이 급증합니다. 따라서 차영상 오차 맵(Reconstruction Error Map)에서 전체 픽셀 값의 통계적 분포 비율을 실시간으로 계산하는 Dynamic Threshold를 적용하여 영상별 노이즈 편차를 적응적으로 보정했습니다.

---

## 7. 추가 보완 필요 항목 ([확인 필요] 마크 정리)

이력서를 최종 제출하기 전, 아래 항목들에 대한 레포지토리 코드 및 테스트 로그 확인이 필요합니다.

1. **스마트 안전 관제 정량 수치 확인 [확인 필요]:**
   - 현재 문서에는 Precision, Recall, F1-Score, FPS, Latency 수치가 미확정 상태로 명시되어 있습니다. AI 레포 및 추론 서버 실험 로그를 확인하여 객관적 측정치 입력이 필요합니다.
2. **ByteTrack 및 MQTT/WebRTC 코드 검증 [확인 필요]:**
   - `run_registered_cameras.py`, MQTT payload schema, OverlaySyncBuffer 세부 구현 코드가 실제 레포에 커밋되어 있는지 확인 및 깃허브 링크 보강이 권장됩니다.
3. **프로젝트 수행 기간 및 참여 비율 [확인 필요]:**
   - SK쉴더스 부트캠프 팀 프로젝트의 정확한 팀원 수 및 본인의 코드 기여 비율(%)을 명시하면 채용담당자의 이해를 돕기 용이합니다.
4. **Cloudflare Workers API QA 로그 [확인 필요]:**
   - `/api/rag/ask` QA 검증 샘플 질의 5종의 실제 응답 렌더링 스크린샷이나 테스트 스크립트 결과를 포트폴리오 첨부 자료로 연결하면 설득력이 강화됩니다.

---
*Document Location: `docs/resume/ai-engineer-resume.md`*

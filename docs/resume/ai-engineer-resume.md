# RTSP 기반 실시간 AI 안전관리 시스템을 구현한 융합보안 개발자 (An Jin Gyeong)

- Email: anjin0910@gmail.com
- GitHub: https://github.com/Anjingyeong
- Portfolio: https://anjingyeong.github.io

---

## 1. 프로필 요약 (Profile Summary)

의공학 기반의 영상 AI 경험을 바탕으로 RTSP/CCTV 환경에서 실시간 이상행동 탐지 및 관제 이벤트 파이프라인을 구현했습니다. YOLO Pose, ByteTrack, LSTM을 활용한 행동 분석 모델을 구성하고, 추론 결과를 MQTT로 발행하여 Spring Boot 백엔드와 WebSocket, React 대시보드까지 연결하는 End-to-End 관제 구조를 설계했습니다. frameId/timestamp 기반 AI Payload와 OverlaySyncBuffer를 적용하여 영상 프레임과 탐지 오버레이의 정합성을 확보했으며, 다중 카메라 환경에서 worker 동적 할당과 stale stream 자동 복구 흐름을 구현했습니다. RF-DETR 객체 탐지와 VAE 비지도 이상탐지 프로젝트를 통해 오탐 제어, 데이터 증강, Dynamic Threshold 후처리 경험을 추가로 보유하고 있습니다.

---

## 2. 핵심 기술 역량 (Core Technical Competencies)

### 📌 실시간 RTSP/CCTV 관제 파이프라인
- **CCTV 기반 이상행동 탐지:** RTSP 스트림에서 YOLO26n-pose로 사람의 bbox와 17개 COCO keypoint를 추출하고, ByteTrack으로 track별 연속성을 유지하며, LSTM으로 낙상·실신 등 시계열 이상행동을 분류하는 AI 추론 파이프라인을 구성함.
- **모델 선택 근거:** 6개 YOLO pose 모델을 downstream LSTM 기준으로 비교하고, 실신 미탐 방지(Faint Recall 우선) 정책에 따라 yolo26n-pose(Faint Recall 0.750877, FN 142로 최저)를 선택함.
- **스트림 중계 및 worker 상태 관리:** MediaMTX 기반 RTSP 스트림 프록시, 카메라 채널별 독립 worker 동적 할당, stale stream 감지 및 재시작 흐름을 구현함.

### 📌 관제 이벤트 전송 및 프레임 동기화
- **프레임-오버레이 정합성:** RTSP Reader/Inference 스레드를 분리하고 Bounded CameraFrameQueue(drop-old, maxsize=3)를 도입하여 다중 카메라 환경의 프레임 지연 누적을 차단함.
- **동기화 메타데이터 설계:** frameId, capturedAtMs, processedAtMs, publishedAtMs를 AI Payload에 포함(schemaVersion 1.1)하고, cameraLoginId별 독립 OverlaySyncBuffer/FrameSyncBuffer를 구현하여 영상 프레임과 탐지 오버레이의 시간 동기화를 확보함.
- **이벤트 메시징 연동:** MQTT `safety/events` topic으로 AI 이벤트를 발행하고, Spring Boot 백엔드에서 camera scope를 resolve한 뒤 WebSocket/STOMP로 관제 대시보드에 실시간 브로드캐스트하는 구조를 연동함.

### 📌 탐지 모델 학습 및 오탐 제어
- **데이터 증강:** Grid Distortion, Elastic Deformation을 활용하여 영상 도메인의 기하학적 왜곡과 조명 변화를 학습 데이터에 반영함.
- **비지도 이상탐지:** VAE 기반 정상 패턴 학습, Reconstruction Error Map 생성, Dynamic Threshold 후처리로 라벨 부족 환경의 이상 탐지 구조를 설계함.

### 📌 웹서비스 배포 및 기본 접근 제어
- JWT 인증/CORS 설정 기반 API 접근 통제, WebSocket/STOMP Pub-Sub 실시간 상태 동기화, Cloudflare Pages/Workers 환경 정적 배포 경험 보유.

---

## 3. 주요 프로젝트 (Main Projects)

### 1) RTSP 기반 실시간 AI 안전관리 및 관제 시스템
**기간:** 2026.05 – 2026.07
**소속:** SK쉴더스 지능형 애플리케이션 개발 부트캠프 5기
**도메인:** 융합보안 / 실시간 영상 관제 / 이상행동 탐지

**문제**
- 다수 CCTV를 동시에 감시하는 환경에서 관제자의 집중도에 의존하는 방식으로는 이상행동을 놓칠 구조적 위험이 컸음.
- 단일 루프 구조에서 RTSP 디코딩·AI 추론·MQTT 전송이 순차 처리되면서 다중 카메라 운영 시 RTSP 버퍼에 과거 프레임이 누적되어 탐지 오버레이가 현재 화면과 수 초 이상 어긋나는 지연 문제가 발생함.
- 백엔드 Java DTO의 엄격한 JSON 바인딩으로 인해 AI에서 발행한 frameId, capturedAtMs 등 동기화 메타데이터가 프론트엔드까지 전달되지 않고 중간에 유실되는 문제가 있었음.
- 다중 카메라 환경에서 publisher 중복 실행, port 충돌, worker 과다 생성으로 인해 WebRTC 스트림이 멈추거나 HLS fallback으로 전환되는 불안정 상황이 발생함.

**해결**
- RTSP 입력 → MediaMTX → Python AI Worker → MQTT → Spring Boot → WebSocket → React 대시보드로 이어지는 End-to-End 실시간 관제 이벤트 파이프라인을 설계 및 구현함.
- AI Worker 내에서 RTSP Reader 스레드와 Inference 스레드를 분리하고, Bounded CameraFrameQueue(maxsize=3, drop-old 정책)를 적용하여 추론 속도가 스트림 수신보다 느릴 때 과거 프레임이 누적되는 문제를 차단함.
- YOLO26n-pose로 사람의 bbox와 17개 COCO keypoint를 추출하고, ByteTrack으로 프레임 간 동일 인물의 track을 유지하며, LSTM(sequence_length=30, stride=15, input_size=51)으로 시계열 이상행동을 분류하는 흐름을 구성함. 6개 pose 모델을 downstream LSTM 기준으로 비교하고, 실신 미탐 방지 정책에 따라 Faint Recall이 가장 높은 yolo26n-pose를 선택함.
- AI Payload에 frameId, capturedAtMs, processedAtMs, publishedAtMs 타임스탬프를 포함(schemaVersion 1.1)하고, 백엔드 DTO를 확장하여 동기화 필드가 프론트엔드까지 전달되도록 개선함. cameraLoginId별 독립 OverlaySyncBuffer와 FrameSyncBuffer를 구현하여 capturedAtMs 기반 최근접 매칭으로 영상 프레임과 탐지 오버레이의 시간 정합성을 확보함.
- MQTT `safety/events` payload에는 AI 판단 메타데이터만 담고, 사용자·기관 권한 scope는 Spring Boot 백엔드에서 cameraLoginId 기반으로 resolve하여 관제 대시보드에 WebSocket/STOMP로 브로드캐스트함.
- WebRTC WHEP를 primary 관제 영상 경로로, HLS를 fallback으로 구성하여 저지연 관제 화면 재생 구조를 설계함. 카메라 채널별 독립 worker에 process allowlist를 적용하여 중복 실행과 port 충돌을 방지함.

**결과**
- LSTM 최종 검증(stratified source video split 기준 test 2,784개)에서 threshold 0.5 기준 Faint Recall 0.774547, F1 0.756179, Accuracy 0.773186을 달성함.
- overlay-sync 계약 및 동작 시뮬레이션 테스트 44개가 모두 PASS하고, Backend Gradle 빌드와 Frontend TypeScript 빌드가 성공함.
- 낙상·실신 등 이상행동 이벤트를 실시간으로 탐지하여 관제 대시보드 알림으로 전달하는 통합 파이프라인 동작을 검증함.
- 특정 스트림 장애가 전체 관제 흐름에 영향을 주지 않도록 worker 상태를 채널별로 분리 관리하는 구조를 구현함.

**사용 기술:** Python, Spring Boot, React, Mosquitto (MQTT), WebSocket/STOMP, MediaMTX, YOLO26n-pose, ByteTrack, LSTM, WebRTC, Docker

---

### 2) RF-DETR 기반 실시간 객체 탐지 시스템 (대장 내시경 용종 검출)
**기간:** 2025.03 – 2025.11
**도메인:** 실시간 객체 탐지 / 오탐 제어 / GUI 시각화
**GitHub:** https://github.com/Anjingyeong/RF-DETR-project

**문제**
- 내시경 영상 특유의 조명 변화, 빛 반사, 화면 왜곡으로 인해 일반 탐지 모델 학습 시 오버피팅이 발생하고 탐지 정확도가 불안정했음.
- 실시간 추론 보조 환경에서 일정 수준 이상의 FPS 처리 속도를 확보해야 했음.

**해결**
- 영상 도메인 왜곡을 데이터 수준에서 대응하기 위해 Grid Distortion 및 Elastic Deformation 기반 증강 파이프라인을 구축함.
- RF-DETR + DINOv2 구조를 Kvasir 데이터셋에 맞게 파인튜닝하고, confidence threshold 조정을 통해 오탐·미탐 균형을 개선함.
- OpenCV 기반 탐지 결과 시각화 GUI 클라이언트를 개발하여 실시간 입력 영상 위에 검출 결과를 오버레이함.

**결과**
- Kvasir 테스트 데이터셋 기준 mAP@50 86.2% 달성, 베이스라인 대비 7%p 정확도를 개선함.
- 22+ FPS의 실시간 추론 속도를 확보하여 영상 스트림 기반 탐지 보조 흐름을 검증함.
- 제17회 건양대학교 캡스톤디자인 경진대회 금상/대상, 전국 공학교육혁신 컨소시엄 동상 수상.

**사용 기술:** Python, PyTorch, RF-DETR, DINOv2, OpenCV, Albumentations, Kvasir Dataset

---

### 3) VAE 기반 비지도 이상탐지 및 Dynamic Threshold 후처리 (유방 초음파)
**기간:** 2024.03 – 2024.10
**도메인:** 비지도 Anomaly Detection / Dynamic Threshold / 이상 영역 시각화
**GitHub:** https://github.com/Anjingyeong/vae-breast-cancer-anomaly

**문제**
- 의료 영상 데이터는 이상 라벨이 부족하여 지도학습 기반 분류 모델 적용이 어려운 환경이었음.
- 환자별 영상 특성 편차로 인해 고정 threshold 방식으로는 오탐 빈도를 제어하기 어려웠음.

**해결**
- 정상 데이터 패턴만 학습하는 VAE 기반 비지도 이상탐지 구조로 문제를 재정의하여, 라벨 없이 이상 영역을 탐지하는 흐름을 설계함.
- VAE Reconstruction Error Map을 생성하고, 개별 입력 영상의 노이즈 편차를 자동 보정하는 Dynamic Threshold 후처리 알고리즘을 개발하여 오탐 변동을 줄이는 구조를 구현함.
- 이상 영역을 시각화하여 탐지 결과를 직관적으로 확인할 수 있는 출력 구조를 설계함.

**결과**
- Reconstruction Error 기반 이상 영역 탐지 흐름과 Dynamic Threshold 후처리를 결합하여 탐지 안정성을 확인함.
- 2024 창의혁신 DNA 산학협력 공학혁신상 (산업통상자원부 장관 주관) 수상.

**사용 기술:** Python, TensorFlow, VAE, OpenCV, Dynamic Threshold

---

## 4. 기타 구현 경험 (Additional Implementation Experience)

웹서비스 개발 과정에서 아래 접근 제어 및 배포 경험을 쌓았으며, 관제 시스템 백엔드 연동 및 배포 환경 구성에 참고 역량으로 활용함.

- Cloudflare Pages/Workers 환경에 lightweight 웹서비스를 배포하고, 환경변수 기반 인증키 분리 관리 구조를 적용함.
- Spring Boot 환경에서 JWT 인증 필터와 CORS 설정을 구성하여 프론트엔드-백엔드 간 API 접근 제어 흐름을 일원화함.
- HTTP API Polling 구조를 WebSocket/STOMP 기반 Pub-Sub Push 구조로 전환하여 실시간 상태 동기화를 구현함.

---

## 5. 학력 및 교육 (Education & Training)

- **건양대학교 의공학과 학사 졸업**
- **SK쉴더스 지능형 애플리케이션 개발 부트캠프 5기** (2026.05 - 2026.07)
  - 실시간 영상 처리, 딥러닝, 풀스택 서비스 연동 및 물리보안 연계 관제 시스템 구축 실무 수행

---

## 6. 수상 및 자격 (Awards & Certificates)

- 공학혁신상 — 2024 창의혁신 DNA 산학협력 (산업통상자원부 장관 주관)
- 금상/대상 — 제17회 건양대학교 캡스톤디자인 경진대회
- 동상 — 전국 공학교육혁신 컨소시엄 창의적 종합설계 경진대회
- 의공학 전문 실무역량 인증 (의공학회)
- 우수 소프트웨어 활용역량 인증 (한국SW산업협회)
- 정보처리기사 필기 합격

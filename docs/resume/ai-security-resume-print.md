# 안진경 / An Jin Gyeong
**CCTV/RTSP 이상행동 탐지와 관제 시스템을 구현한 AI 융합보안 개발자**

Email: anjin0910@gmail.com | GitHub: https://github.com/Anjingyeong | Portfolio: https://anjingyeong.github.io

## Profile

의공학 기반 영상 AI 경험을 바탕으로 CCTV/RTSP 환경의 실시간 이상행동 탐지 및 관제 이벤트 파이프라인을 구현했습니다. YOLO26n-pose, ByteTrack, LSTM 기반 행동 분석 결과를 MQTT -> Spring Boot -> WebSocket -> React Dashboard로 전달하는 End-to-End 구조를 연동했습니다. RTSP/MJPEG 스트림 지연과 AI 추론 병목으로 인한 오버레이 불일치 문제를 분석하고, TensorRT 기반 YOLO Pose 추론 최적화와 탐지 결과 동등성 검증을 수행했습니다. RF-DETR 객체 탐지와 VAE 비지도 이상탐지를 통해 오탐 제어 및 후처리 경험도 쌓았습니다.

## Core Skills

- **Real-time Video AI:** RTSP/CCTV, MediaMTX, Python AI Worker, YOLO26n-pose, ByteTrack, LSTM
- **Event Pipeline:** MQTT, Spring Boot, WebSocket/STOMP, React Dashboard
- **Inference Optimization:** TensorRT, PyTorch/TensorRT latency comparison, detection equivalence check
- **Latency Analysis:** RTSP/MJPEG stream delay analysis, frameId/timestamp payload, OverlaySyncBuffer
- **Object Detection:** RF-DETR, DINOv2, OpenCV, Albumentations, confidence threshold tuning
- **Anomaly Detection:** VAE, Reconstruction Error Map, Dynamic Threshold
- **Backend & Deployment:** Java, Spring Boot, JWT, CORS, Cloudflare Pages/Workers, Docker

## Projects

### CCTV/RTSP 기반 실시간 AI 안전관리 및 관제 시스템
**기간:** 2026.05-2026.07 | **소속:** SK쉴더스 부트캠프 | **역할:** AI/Backend/Frontend | **도메인:** 융합보안, 실시간 영상 관제, 이상행동 탐지

- 다중 CCTV 관제 환경에서 RTSP/MJPEG 스트림 지연과 AI 추론 병목으로 인한 관제 오버레이 불일치 문제를 분석함.
- RTSP 입력 -> MediaMTX -> Python AI Worker -> MQTT -> Spring Boot -> WebSocket -> React Dashboard로 이어지는 이벤트 전달 구조를 연동함.
- YOLO26n-pose, ByteTrack, LSTM 기반으로 낙상·실신 등 시계열 이상행동 탐지 흐름을 구성함.
- 6개 pose 모델을 downstream LSTM 기준으로 비교하고, 실신 미탐 방지를 위해 Faint Recall 우선 정책으로 YOLO26n-pose를 선택함.
- Reader/Inference 스레드 분리와 Bounded CameraFrameQueue(drop-old)를 적용해 다중 카메라 환경의 프레임 누적 문제를 완화함.
- TensorRT 기반 YOLO Pose 추론 최적화를 적용하고, PyTorch/TensorRT 모델의 지연시간 비교와 탐지 결과 동등성 검증으로 관제 파이프라인 적용 가능성을 검토함.
- frameId/timestamp 기반 payload와 OverlaySyncBuffer/FrameSyncBuffer를 활용해 관제 지연 및 오버레이 불일치 원인을 분석함.
- LSTM 검증 기준 Faint Recall 0.774547, F1 0.756179, Accuracy 0.773186을 기록함.
- overlay-sync 계약 및 동작 시뮬레이션 테스트 44개 PASS로 지연 분석 로직을 검증함.
- **Tech:** Python, Spring Boot, React, MQTT, WebSocket/STOMP, MediaMTX, YOLO26n-pose, ByteTrack, LSTM, TensorRT, Docker

### RF-DETR 기반 실시간 객체 탐지 시스템
**기간:** 2025.03-2025.11 | **역할:** AI | **도메인:** 대장 내시경 용종 검출, 실시간 객체 탐지, GUI 시각화

- Kvasir 데이터셋 기반으로 RF-DETR + DINOv2 구조를 파인튜닝하여 대장 내 용종 객체 탐지 모델을 구현함.
- Grid Distortion, Elastic Deformation 증강을 적용해 내시경 영상의 조명 변화, 반사, 기하학적 왜곡에 대응함.
- confidence threshold 조정을 통해 오탐·미탐 균형을 조정하고, OpenCV GUI에서 탐지 결과를 실시간 오버레이로 시각화함.
- Kvasir 테스트셋 기준 mAP@50 86.2%, 22+ FPS를 기록하고 캡스톤 및 공학교육혁신 경진대회 수상으로 결과를 검증함.
- **Tech:** Python, PyTorch, RF-DETR, DINOv2, OpenCV, Albumentations

### VAE 기반 비지도 이상탐지 및 Dynamic Threshold 후처리
**기간:** 2024.03-2024.10 | **역할:** AI | **도메인:** 유방 초음파, 비지도 Anomaly Detection, 이상 영역 시각화

- 이상 라벨 확보가 어려운 의료 영상 환경을 VAE 기반 비지도 이상탐지 문제로 재정의함.
- 정상 데이터 분포를 학습한 뒤 Reconstruction Error Map을 생성하여 이상 후보 영역을 시각화함.
- 입력 영상별 노이즈와 밝기 편차를 반영하는 Dynamic Threshold 후처리를 적용해 고정 threshold 방식의 오탐 변동 문제를 완화함.
- 비지도 이상탐지와 후처리 알고리즘 설계 경험을 바탕으로 2024 창의혁신 DNA 산학협력 공학혁신상 수상.
- **Tech:** Python, TensorFlow, VAE, OpenCV, Dynamic Threshold

## Additional Experience

- Cloudflare Pages/Workers 환경에서 웹서비스를 배포하고, 환경변수 기반 인증키 분리 관리 구조를 적용함.
- Spring Boot 환경에서 JWT 인증 필터와 CORS 설정을 구성하여 프론트엔드-백엔드 API 접근 제어 흐름을 구현함.
- HTTP polling 구조를 WebSocket/STOMP Pub-Sub 방식으로 전환하여 실시간 상태 동기화를 구현함.

## Education

- 건양대학교 의공학과 학사
- SK쉴더스 지능형 애플리케이션 개발 부트캠프 5기 (2026.05-2026.07)

## Awards & Certificates

- 2024 창의혁신 DNA 산학협력 공학혁신상
- 제17회 건양대학교 캡스톤디자인 경진대회 금상/대상
- 전국 공학교육혁신 컨소시엄 창의적 종합설계 경진대회 동상
- 의공학 전문 실무역량 인증, 우수 소프트웨어 활용역량 인증
- 정보처리기사 필기 합격

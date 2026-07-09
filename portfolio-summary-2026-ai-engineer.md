# 2026 융합보안 개발자 포트폴리오 요약서 (Portfolio Summary)

## Positioning

모델 개발에만 그치지 않고, 실제 관제 서비스에서 AI가 안정적으로 동작하도록 물리보안(CCTV/실시간 영상), 네트워크(RTSP/MQTT/WebSocket), 시스템 통합(Spring Boot/React), 그리고 장애 복구 설계 및 정합성 검증을 연결하는 **AI 기반 융합보안 시스템 개발자** 포트폴리오입니다.

이 포트폴리오는 실시간 CCTV 비디오 분석과 융합보안 관제 파이프라인을 중심으로 구성합니다. 핵심 메시지는 "AI 알고리즘 지표"만이 아니라, AI 분석 이벤트 결과가 관제자의 대시보드 화면, 백엔드 이벤트 스트림, 운영 장애 복구 흐름으로 신뢰성 있게 전달되는 전체 시스템 흐름을 설계하고 개선할 수 있다는 점입니다.

## 핵심 역량 요약

| 역량 | 근거 프로젝트 | 포트폴리오 메시지 |
|---|---|---|
| Real-time Video Control | 실시간 CCTV AI 안전 관제 시스템 | RTSP 영상 입력부터 MediaMTX 중계, 실시간 AI 오버레이 렌더링까지 전체 물리보안 흐름 이해 |
| Event Streaming & Sync | 실시간 CCTV AI 안전 관제 시스템 | MQTT/WebSocket 기반 실시간 알림 전송 및 OverlaySyncBuffer를 통한 프레임-분석 정합성 동기화 |
| Web Security & Control | 웹서비스 배포 및 API 접근 제어 | JWT 인증 및 CORS 제어, Cloudflare Pages/Workers 기반의 배포 및 비동기 API 접근 통제 구축 |
| Robust Object Detection | RF-DETR 기반 실시간 대장 용종 검출 | Elastic Deform, Grid Distortion 등 도메인 특화 데이터 증강과 threshold 튜닝을 통한 오탐/미탐 제어 |
| Unsupervised Anomaly Detection | VAE 기반 비지도 유방 초음파 이상 탐지 | 정상 패턴 학습을 통한 이상탐지(Anomaly Detection) 설계 및 Dynamic Threshold 기반 노이즈 필터링 |

## 대표 프로젝트

### 1. 실시간 CCTV 기반 AI 안전 관제 시스템
- **등급:** Main Project (1순위)
- **상태:** 구현 및 검증 완료 (Spring Boot + React + Python AI Worker)
- **핵심 문제:** 다중 CCTV 모니터링 시 발생하는 RTSP 영상 지연, AI 분석 결과와 프론트엔드 오버레이 간의 실시간 정합성 엇갈림, stale stream 발생, 그리고 다중 채널 운영 시 GPU/CPU 부하 병목 등 실서비스 환경의 가용성 문제를 해결했습니다.
- **접근:** RTSP → MediaMTX → Python AI Worker (YOLO26n-pose + ByteTrack + LSTM) → MQTT → Spring Boot → WebSocket → React 대시보드로 이어지는 End-to-End 실시간 관제 이벤트 파이프라인을 설계 및 구현했습니다.
- **강조 포인트:** 메타데이터 동기화를 위한 AI Payload 설계(capturedAtMs, frameId 등)와 React 대시보드의 **OverlaySyncBuffer** 연동을 통한 밀리초 단위 시간 동기화 기법, 그리고 카메라 채널별 독립된 동적 Worker 할당 및 Stale Stream 자동 복구 구조 적용.

### 2. 웹서비스 배포 및 API 접근 제어 경험 (FullCount & RAG 지식 검색 융합)
- **등급:** Supporting Project (2순위)
- **상태:** 구현 및 연동 검증 완료
- **핵심 문제:** API Polling 방식의 DB 자원 낭비와 사용자 상태 불일치 문제를 해결하고, 클라우드 환경에서 외부 권한 관리 및 API 접근 통제를 안전하게 처리하고자 했습니다.
- **접근:** STOMP/WebSocket 기반 이벤트 Push 거래 상태 동기화를 구현하고, JWT 토큰 인증과 CORS 제어를 적용했습니다. Cloudflare Pages/Workers 기반으로 배포하여 기본적 서비스 보안과 키 관리를 다듬었습니다.

### 3. RF-DETR 기반 실시간 대장 내 용종 검출 시스템
- **등급:** Supporting Project (3순위)
- **상태:** 구현 및 성능 검증 완료
- **핵심 문제:** 조명 변화, 빛 반사, 장벽 왜곡과 같은 기하학적 노이즈로 인한 객체 탐지 오류(오탐)를 줄이고 실시간성을 보장하는 검출 환경이 필요했습니다.
- **접근:** Grid Distortion, Elastic Deformation 증강 기법을 학습에 적용하고, RF-DETR 파인튜닝과 OpenCV 기반 검출 GUI를 설계하여 실시간 엣지 추론 속도(22+ FPS)와 mAP@50 86.2%를 달성했습니다.

## 2026 트렌드 연결

- **Production-ready Converged Security:** 스마트 안전 관제에서 AI 연산 지표(mAP, Dice)가 이벤트, 오버레이, 알림, 그리고 장애 복구 가동성으로 연계되어 동작해야 한다는 운영 관점.
- **Real-time Video Control & Sync:** 영상 데이터 스트리밍과 알림 데이터를 분리하여 대시보드 알림 지연을 최소화하고, OverlaySyncBuffer로 엇갈림 문제를 방지하는 실시간 비전 보안 흐름.
- **Access Control & Deployment Security:** JWT 인증, CORS 대응, 그리고 Cloudflare Pages/Workers 환경에서의 보안 환경변수 관리를 이용한 클라우드 배포 흐름.
- **AI Evaluation & Robustness:** 이상행동 탐지와 객체 검출에서 Precision, Recall, Dice Coefficient 등의 성능 지표와 임계치(threshold)sweep 실험을 통한 실질적 오탐 제어 방식 적용.

## 지원 직무와의 연결성

이 포트폴리오는 **융합보안 개발자, 스마트 관제 시스템 개발자, 실시간 비전 시스템 엔지니어** 직무에 정합성을 가집니다. 특히 "실시간 영상 분석 역량(물리보안)"과 "웹 인프라 및 통신/보안 이벤트 제어 역량(정보보안)"의 융합을 강력한 차별점으로 소구합니다.

## 읽은 자료와 검증 상태

| 자료 | 상태 |
|---|---|
| `README.md`, `Portfolio_2026.md`, `Portfolio_2026_STAR.md` | 로컬 포트폴리오 문서 확인 |
| `src/components/ProjectsSection.tsx`, `src/pages/PortfolioPrint.tsx` | 현재 웹 포트폴리오 문구 확인 |
| `docs/resume/ai-engineer-resume.md` | 융합보안 이력서로 개편 완료 |
| 스마트 안전 관제 시스템 Git 저장소 | 구현 및 연동 구조 검증 완료 |

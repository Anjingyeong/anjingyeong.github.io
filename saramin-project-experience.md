# Saramin Project Experience Bullet Bank

## 사용 기준

- 사람인 이력서에는 프로젝트별로 4~6개 bullet만 사용하는 것이 좋습니다.
- 정량 지표가 확인된 RF-DETR, VAE는 기존 포트폴리오 자료 기준임을 전제로 사용할 수 있습니다. FullCount의 DB I/O 80% 수치는 제출 전 원본 측정 자료 확인이 필요합니다.
- 스마트 안전 관제의 Recall, Precision, F1, FPS, latency 등은 아직 확인 자료가 부족하므로 수치로 쓰지 않습니다.
- “구현했다”가 불확실한 항목은 “구조를 설계했다”, “실험 방향을 정리했다”, “개선 항목으로 분리했다”로 표현합니다.

## 1. 스마트 안전 관제 시스템

### 강한 표현

- CCTV 관제 상황에서 낙상·위험 행동을 빠르게 포착하고, AI 이벤트를 대시보드 알림까지 연결하는 실시간 관제 보조 파이프라인을 설계했습니다.
- YOLO Pose 기반 keypoint 추출과 LSTM 시계열 분류를 조합한 이상행동 탐지 구조를 정리했습니다.
- RTSP 영상 입력, AI 추론, MQTT 이벤트 발행, WebSocket 알림을 분리해 실시간 관제 흐름을 설계했습니다.
- frameId와 timestamp 기반 evidence chain을 고려해 영상 증거와 AI 이벤트의 불일치 가능성을 줄이는 방향을 검토했습니다.
- FP/FN 분석을 통해 hard negative 재학습 후보를 도출하고, threshold와 tracker 상태를 운영 안정성 개선 항목으로 정리했습니다.

### 보수적 표현

- 실시간 CCTV 관제 문제를 AI 탐지 모델 단독이 아니라 영상 입력, 이벤트 전달, 대시보드 알림이 연결되는 서비스 구조로 정리했습니다.
- YOLO Pose와 LSTM을 활용하는 이상행동 탐지 구조를 중심으로 실험 방향과 개선 항목을 문서화했습니다.
- MQTT와 WebSocket 기반 이벤트 전달 흐름을 설계하고, 관제 화면에서 필요한 알림 데이터 구조를 정리했습니다.
- frameId, timestamp, cameraId 같은 증거 단서를 활용해 추후 이벤트 검증이 가능하도록 데이터 흐름을 검토했습니다.
- 정량 성능 수치는 Git 기록과 실험 로그 확인 후 보강할 항목으로 분리했습니다.

### 짧은 표현

- RTSP, MQTT, WebSocket 기반 실시간 AI 관제 파이프라인 설계
- YOLO Pose와 LSTM 기반 이상행동 탐지 구조 정리
- FP/FN 분석 기반 hard negative 재학습 후보 도출
- frameId/timestamp 기반 영상 증거 동기화 방향 검토
- AI 이벤트와 대시보드 알림 흐름 분리 설계

## 2. LLM Wiki · RAG 기반 프로젝트 지식 시스템

### 강한 표현

- 프로젝트 실험 기록, 오류 해결, 의사결정 근거를 Evidence Wiki로 구조화하고 RAG 기반으로 재사용할 수 있는 지식 흐름을 설계했습니다.
- source, 날짜, 프로젝트, 상태, evidence level을 metadata로 관리해 포트폴리오와 면접 답변의 근거 자료로 활용할 수 있게 정리했습니다.
- BM25와 Vector Search를 함께 사용하는 Hybrid Search 구조를 설계하고, RRF와 re-ranking 고도화 방향을 정리했습니다.
- RAG 답변이 단순 요약에 머물지 않도록 source 기반 답변 구조와 검증 기록 관리 방식을 설계했습니다.

### 보수적 표현

- 흩어진 개발 기록을 다시 검색하고 참조할 수 있도록 문서 기반 Evidence Wiki 구조로 정리했습니다.
- 프로젝트 기록을 포트폴리오 문장과 면접 답변 작성에 재사용할 수 있는 지식 자산으로 전환했습니다.
- BM25, Vector Search, metadata filtering을 조합하는 검색 구조를 설계했습니다.
- 문서 관계 분석 고도화와 re-ranking은 실제 구현 완료가 아니라 고도화 방향으로 분리했습니다.

### 짧은 표현

- 프로젝트 기록 기반 Evidence Wiki 구조 설계
- RAG 기반 포트폴리오/면접 근거 검색 흐름 정리
- BM25와 Vector Search를 조합한 검색 구조 설계
- source metadata 기반 답변 근거 관리 방식 정리

## 3. RF-DETR 기반 대장 내 용종 검출

### 강한 표현

- 대장 내시경 영상의 조명 변화와 장벽 왜곡 문제를 데이터 증강 관점에서 해결하고, RF-DETR 기반 용종 검출 모델을 개선했습니다.
- Grid Distortion과 Elastic Deform을 활용해 내시경 영상 특성을 반영한 데이터 증강 파이프라인을 설계했습니다.
- RF-DETR과 DINOv2 기반 탐지 구조를 의료 영상 도메인에 맞게 파인튜닝했습니다.
- Kvasir 데이터를 Train 70% / Validation 20% / Test 10%로 분할하고 RF-DETR 모델을 fine-tuning했습니다.
- 실험 설정 기준 약 7% 성능 개선을 확인했으며, 세부 mAP/FPS 원본 로그는 제출 전 추가 확인이 필요합니다.

### 보수적 표현

- 의료 영상 특성에 맞춘 데이터 전처리, 증강, 모델 학습 관점으로 대장 용종 검출 프로젝트를 수행했습니다.
- 내시경 영상 왜곡을 반영하기 위해 Grid Distortion, Elastic Deform 기반 증강을 적용했습니다.
- RF-DETR 기반 모델을 활용해 용종 후보 탐지 흐름을 구성했습니다.
- 포트폴리오 자료 기준 성능 개선 수치가 있으나, 제출 전 실험 로그와 평가 조건을 한 번 더 확인하는 것이 좋습니다.

### 짧은 표현

- RF-DETR 기반 대장 내 용종 검출 모델 파인튜닝
- Grid Distortion, Elastic Deform 기반 의료 영상 증강
- Train 70% / Validation 20% / Test 10% 분할 기반 RF-DETR fine-tuning
- 실험 설정 기준 약 7% 성능 개선 기록

## 4. VAE 기반 유방 초음파 이상 탐지

### 강한 표현

- 유방 초음파 병변 라벨 부족 문제를 비지도 이상 탐지 문제로 재정의하고, VAE 기반 병변 후보 탐지 파이프라인을 설계했습니다.
- VAE 재구성 결과와 입력 이미지의 차이를 Reconstruction Error Map으로 계산해 이상 영역 후보를 추출했습니다.
- VAE의 MSE 재구성 오차와 KLD 잠재 공간 정규화 항을 이해하고, Reconstruction Error Map 기반 후처리 기준 설계에 반영했습니다.
- 영상별 밝기와 노이즈 편차를 줄이기 위해 Dynamic Threshold 후처리를 적용했습니다.
- 기존 포트폴리오 자료 기준 Dice Coefficient 약 90% 수준을 기록했습니다.

### 보수적 표현

- 라벨이 부족한 의료 영상 문제를 정상 패턴 기반 비지도 이상 탐지로 접근했습니다.
- VAE 기반 재구성 오차를 활용해 병변 후보 영역을 찾는 흐름을 구성했습니다.
- Dynamic Threshold 후처리를 통해 영상별 편차를 줄이는 방향으로 개선했습니다.
- Dice 수치는 기존 포트폴리오 자료 기준이며, 제출 전 평가 조건을 확인하는 것이 좋습니다.

### 짧은 표현

- VAE 기반 유방 초음파 비지도 이상 탐지
- Reconstruction Error Map 기반 병변 후보 추출
- Reconstruction Error Map 기반 병변 후보 추출
- Dynamic Threshold 기반 후처리 적용

## 5. FullCount · KBO 티켓 에스크로 서비스

### 강한 표현

- 에스크로 거래 상태가 판매자와 구매자 화면에 실시간으로 반영되도록 WebSocket/STOMP 기반 이벤트 Push 구조를 구현했습니다.
- 거래 상태 전이를 고려한 DB 모델을 설계하고, JWT 인증 흐름과 API 응답 정합성을 맞췄습니다.
- API Polling 방식의 상태 확인을 이벤트 기반 구조로 전환해 기존 포트폴리오 자료 기준 DB I/O를 약 80% 줄인 것으로 정리되어 있으며, 원본 측정 자료 확인이 필요합니다.
- 프론트엔드와 백엔드 간 CORS, API 명세 불일치, Git 브랜치 충돌 문제를 해결하며 팀 프로젝트 연동 경험을 쌓았습니다.

### 보수적 표현

- 실시간 거래 상태 동기화를 위해 WebSocket/STOMP 기반 이벤트 전달 구조를 적용했습니다.
- Spring Boot, JPA, MySQL 기반으로 에스크로 거래 상태 전이와 인증 흐름을 구현했습니다.
- AI 프로젝트의 모델 결과를 서비스 이벤트로 연결할 때 필요한 백엔드/프론트엔드 연동 경험으로 정리할 수 있습니다.

### 짧은 표현

- WebSocket/STOMP 기반 에스크로 상태 실시간 동기화
- Spring Boot, JPA, MySQL 기반 거래 상태 모델링
- JWT 인증 및 React-Spring Boot API 연동
- Polling 구조를 이벤트 Push 구조로 전환

## 6. 마음이음 프로젝트 사용 여부

### 권장 표현

- 메인 프로젝트로 강조하지 않습니다.
- 필요하다면 “배포형 서비스 경험” 또는 “사용자 화면과 백엔드 API를 연결한 웹 서비스 경험” 정도로 짧게 언급합니다.

### 사용 가능한 짧은 문장

- 배포형 웹 서비스 프로젝트에서 사용자 화면, API 연동, 기본 배포 흐름을 경험했습니다.
- AI 중심 프로젝트는 아니므로, 사람인 AI Engineer 이력서에서는 상세 프로젝트 경험보다 보조 경험으로만 반영하는 것이 적절합니다.

## 직무별 추천 조합

### AI Engineer

1. 스마트 안전 관제 시스템
2. RF-DETR 기반 대장 내 용종 검출
3. VAE 기반 유방 초음파 이상 탐지
4. LLM Wiki · RAG 기반 프로젝트 지식 시스템

### Applied AI Engineer

1. 스마트 안전 관제 시스템
2. LLM Wiki · RAG 기반 프로젝트 지식 시스템
3. FullCount · KBO 티켓 에스크로 서비스
4. RF-DETR 기반 대장 내 용종 검출

### Computer Vision AI Engineer

1. 스마트 안전 관제 시스템
2. RF-DETR 기반 대장 내 용종 검출
3. VAE 기반 유방 초음파 이상 탐지
4. LLM Wiki · RAG 기반 프로젝트 지식 시스템

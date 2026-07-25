# 2026 AI Engineer 포트폴리오 요약서 (Portfolio Summary)

## Positioning

모델 개발에만 그치지 않고, 실제 관제 서비스에서 AI가 제때 안정적으로 동작하도록 컴퓨터비전 모델(YOLO Pose/LSTM), 실시간 파이프라인(RTSP/MQTT/WebSocket), 시스템 통합(Spring Boot/React), 그리고 장애 복구 설계 및 정합성 검증을 연결하는 **실시간 컴퓨터비전 AI 엔지니어** 포트폴리오입니다.

핵심 메시지는 "단순 알고리즘 지표"만이 아니라, AI 분석 이벤트 결과가 관제자의 대시보드 화면, 백엔드 이벤트 스트림, 운영 처리 흐름으로 신뢰성 있게 전달되는 전체 시스템 흐름을 수치와 로그로 설계하고 개선할 수 있다는 점입니다.

## 핵심 역량 요약

| 역량 | 근거 프로젝트 | 포트폴리오 메시지 |
|---|---|---|
| Computer Vision & Feature Design | 실시간 이상행동 탐지 AI 시스템 | 51D 관절 특징에 하강량·속도·상체기울기를 추가해 54D로 확장, F1-score 89.29% → 93.49% 개선 |
| Multi-Object Tracking & Relink | 실시간 이상행동 탐지 AI 시스템 | Hard Match + Soft Relink 기법으로 낙상 동작 중 ID Switch 8건 → 1건, Track Coverage 35.76% → 49.70% 개선 |
| Real-time Inference & Optimization | 실시간 이상행동 탐지 AI 시스템 | TensorRT 적용으로 YOLO 평균 지연 9.454ms → 4.723ms(50.0% 감축), 최신 프레임 정책과 통합 처리 지연 11.789ms → 6.101ms |
| End-to-End Event Streaming | AI 안전 관제 플랫폼 (Full-Stack) | MQTT QoS 1 + Spring Boot + STOMP / React 연동으로 E2E 지연 평균 20.931ms (p95 26ms), 29건 모두 1초 이내 전달 |
| Robust Medical AI Detection | RF-DETR 기반 대장 용종 검출 | Elastic Deformation, Grid Distortion 증강 및 bbox 정합성 검증으로 Kvasir 테스트셋 mAP@50 86.2% 달성 |
| Unsupervised Anomaly Detection | VAE 기반 유방 초음파 이상 탐지 | 정상 패턴 학습 기반 이상 탐지 설계 및 이미지별 오차 분포 기반 Dynamic Threshold 적용 |

## 대표 프로젝트

### 1. 실시간 이상행동 탐지 및 안전 관제 AI 시스템
- **성격:** SK쉴더스 부트캠프 5기 산학협력 프로젝트 (2026.05 – 2026.07, 5인 팀장)
- **핵심 역할:** Pose 모델 비교, LSTM 행동 특징 설계, Tracking ID 재연결, 최신 프레임 처리 정책, TensorRT 성능 검증 및 MQTT 연동
- **핵심 성과:**
  - **행동 분류:** 51D 관절 특징에 center_drop·velocity·torso_angle을 추가한 54D 확장으로 F1-score 89.29% → 93.49% (FP 38.6%, FN 38.9% 감소)
  - **Tracking 연결:** Hard Match + Soft Relink 적용으로 ID Switch 8건 → 1건, Track Coverage 35.76% → 49.70% 개선
  - **추론 및 처리 지연:** TensorRT 적용으로 YOLO 지연 9.454ms → 4.723ms(50.0% 감소), 통합 처리 지연 11.789ms → 6.101ms(48.2% 감소)

### 2. AI 이벤트 수신부터 사고 검색까지 연결한 실시간 안전 관제 플랫폼 (Full-Stack)
- **성격:** SK쉴더스 부트캠프 5기 팀 프로젝트 (2026.05 – 2026.07, 5인 팀장)
- **핵심 역할:** AI 이벤트 계약, originalEventId 기반 Incident 정합성, VLM 비동기 작업 흐름 및 프론트엔드 병합 동작 구현
- **핵심 성과:**
  - **실시간 알림 지연:** MQTT QoS 1 + Spring Boot + WebSocket/STOMP 알림 구축으로 위험 이벤트 29건 E2E 평균 지연 20.931ms, p95 26ms 달성 (전건 1초 이내 전달)
  - **Incident 중복 병합:** originalEventId 공통 사고 식별자를 도입해 경보·스냅샷·클립·VLM 설명을 단일 사고 카드로 유지

### 3. RF-DETR 기반 대장 내 용종 검출 애플리케이션
- **성격:** 건양대학교 캡스톤디자인 (2025.03 – 2025.11, 팀원)
- **핵심 성과:** Elastic Deformation, Grid Distortion 증강 및 bbox 정합성 검증 적용, Kvasir 테스트셋 mAP@50 86.2% 달성 (금상 및 동상 수상)

### 4. VAE 기반 유방 초음파 이상 탐지 알고리즘
- **성격:** 건양대학교 캡스톤디자인 (2024.03 – 2024.10, 팀원)
- **핵심 성과:** 라벨링 데이터 부족 환경을 비지도 이상 탐지로 정의하고 이미지별 Reconstruction Error 분포 기반 Dynamic Threshold 적용 (공학혁신상 수상)

## 지원 직무와의 연결성

이 포트폴리오는 컴퓨터비전 AI 엔지니어와 실시간 영상 AI 시스템 개발자 직무를 중심으로 구성했습니다. Full-Stack 경험은 AI 결과를 실제 이벤트·데이터·관제 화면으로 연결할 수 있다는 시스템 통합 역량의 근거로 제시합니다.

# Hero 및 About 수정

## 목표

채용 담당자가 첫 화면에서 지원 직무, 대표 성과, 문제 분석 방식과 협업 기준을 즉시 이해하게 한다.

## 수정 파일

- `src/components/HeroSection.tsx`
- `src/components/AboutSection.tsx`
- 관련 테스트

---

# 1. AI Hero

## 제목

```text
실시간 영상 AI의 정확도와 지연을 함께 개선한 컴퓨터비전 엔지니어
```

## 타이핑 문구

```text
실시간 AI는 정확도뿐 아니라 현재성을 지켜야 합니다.
```

## 소개 문구

```text
모델의 성능만 높이는 데서 끝나지 않고, Tracking·입력 시퀀스·프레임 지연·이벤트 전달 구간을 수치와 로그로 분석해 실제 환경에서 제때 작동하는 AI를 만듭니다.
```

## 대표 성과

```text
[행동 분류] 51D 관절 특징에 하강량·이동 속도·상체 기울기를 추가해 F1-score를 89.29%에서 93.49%로 개선
```

```text
[Tracking] 자체 테스트 영상 기준 ID Switch를 8건에서 1건으로 줄이고, Mean Track Coverage를 35.76%에서 49.70%로 개선
```

```text
[추론 최적화] 동일 카메라 입력에서 TensorRT를 적용해 YOLO 평균 지연을 9.454ms에서 4.723ms로 50.0% 감소
```

`11.789ms → 6.101ms`를 Bounded Queue 단독 성과로 Hero에 사용하지 않는다.

## 기술 태그

```text
Model: YOLO26n-pose / LSTM / RF-DETR
Pipeline: RTSP / Tracking / MQTT
Optimization: PyTorch / OpenCV / TensorRT
```

AI Hero에서 `WebSocket`은 제거한다.

---

# 2. Full-Stack Hero

## 제목

```text
AI 이벤트를 실제 서비스 흐름으로 연결해 온 풀스택 개발자
```

## 타이핑 문구

```text
화면·API·데이터·실시간 이벤트를 하나의 흐름으로 연결합니다.
```

## 소개 문구

```text
사용자 입력과 AI 이벤트가 화면, API, 저장, 알림과 검색까지 끊기지 않도록 설계합니다. 기능 구현뿐 아니라 비동기 데이터의 정합성, 실패 복구와 실제 배포까지 함께 다룹니다.
```

## 대표 성과

```text
[1인 서비스] 약 2주 동안 자가체크 UI, 결과 계산, Workers API, D1 저장, 관리자 통계, PDF 리포트와 운영 배포까지 완성
```

```text
[실시간 관제] 2카메라 환경에서 측정한 위험 이벤트 29건을 모두 1초 이내에 전달하고 End-to-End 평균 지연 20.931ms 확인
```

```text
[데이터 정합성] originalEventId를 기준으로 실시간 경보·스냅샷·사고 클립·VLM 설명을 하나의 Incident로 병합
```

## 기술 태그

```text
Backend: Spring Boot / Spring Data JPA / Cloudflare Workers
Frontend: React / TypeScript / Tailwind CSS
Data & Realtime: PostgreSQL·pgvector / Cloudflare D1 / MQTT·WebSocket
```

Hero에서 `MySQL`은 제거한다.

---

# 3. AI About

```text
저는 숫자로 이상을 발견하고 로그로 원인을 좁힌 뒤, 서비스 목적에 맞는 해결 방법을 선택하는 컴퓨터비전 엔지니어입니다.
```

```text
스마트 안전 관제 프로젝트에서는 행동 분류 성능만 확인하지 않고 Pose 검출, Tracking ID, LSTM 입력 시퀀스, 프레임 큐와 이벤트 전달 구간을 나누어 분석했습니다. 그 결과 54D 특징 확장으로 F1-score를 93.49%까지 높이고, 낙상 구간의 ID Switch와 TensorRT 추론 지연을 개선했습니다.
```

```text
팀 프로젝트에서는 AI 결과를 전달하는 데서 끝내지 않고, 백엔드·프론트엔드 담당자와 cameraId, eventType, timestamp, originalEventId 등 이벤트의 의미와 완료 기준을 맞췄습니다. 모델 결과가 실제 서비스에서 신뢰할 수 있는 데이터로 이어지도록 만드는 것이 저의 강점입니다.
```

## Focus

```text
- YOLO Pose·Tracking·LSTM을 연결한 실시간 행동 분석 파이프라인
- Precision·Recall·F1·ID Switch·Latency를 활용한 원인 분석과 검증
- Bounded Queue와 TensorRT 기반 실시간 영상 처리 최적화
- AI 결과를 상태 후처리와 MQTT 위험 이벤트로 전환하는 서비스 연동
```

---

# 4. Full-Stack About

```text
저는 사용자의 한 번의 입력과 하나의 이벤트가 화면, API, 데이터 저장과 결과까지 끊기지 않도록 만드는 풀스택 개발자입니다.
```

```text
마음이음 웹서비스는 약 2주 동안 기획부터 모바일 화면, API, D1 저장, 관리자 통계, PDF 리포트와 배포까지 1인 개발했습니다. 스마트 안전 관제에서는 Python AI Worker의 위험 이벤트를 MQTT로 수신하고, Spring Boot 저장과 WebSocket 알림, 사고 증거와 VLM 검색까지 이어지는 흐름을 구현했습니다.
```

```text
팀 프로젝트에서는 각 파트가 구현한 기능을 단순히 연결하는 데 그치지 않고, 비동기로 도착하는 이벤트의 ID와 완료 시점을 함께 맞췄습니다. 화면에 나타난 증상만 수정하기보다 저장 구조와 데이터 계약까지 확인해 서비스 전체의 정합성을 해결하는 것이 저의 강점입니다.
```

## Focus

```text
- React·TypeScript 기반 사용자 화면과 비동기 상태 관리
- Spring Boot·Spring Data JPA·Cloudflare Workers 기반 API 구현
- PostgreSQL·pgvector·D1 기반 데이터 저장 및 검색 구조
- MQTT·WebSocket·STOMP 기반 실시간 이벤트 전달
- Incident 병합, 작업 상태, 잠금 만료와 재시도를 고려한 운영 설계
```

---

# 5. 기본 정보 및 링크

AI:

```text
지원 직무: Computer Vision AI Engineer
핵심 분야: 실시간 영상 분석 · Tracking · 행동 분류
협업 방식: 이벤트 계약 · 로그 · 수치 기반 조율
```

Full-Stack:

```text
지원 직무: Full-Stack Developer
핵심 분야: 실시간 이벤트 · API · 데이터 정합성
협업 방식: 공통 식별자 · 완료 조건 · 구간별 로그
```

`언어: 한국어`, `Production-ready ...` 문구는 제거한다.

실제 주소가 없는 LinkedIn 링크와 `href="#"`인 BookOpen 링크는 제거한다.

모바일에서는 텍스트가 프로필 사진보다 먼저 표시되도록 한다.

## 완료 조건

- AI와 Full-Stack의 제목·성과·태그가 구분된다.
- Hero 수치의 원인과 상세 설명이 충돌하지 않는다.
- 깨진 링크가 없다.
- 모바일에서 직무 제목이 사진보다 먼저 보인다.
- 테스트와 `npm run build`가 통과한다.

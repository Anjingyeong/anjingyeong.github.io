# 웹·인쇄본·README·Case Study 동기화

## 목표

웹 포트폴리오, 인쇄용 포트폴리오, README와 Case Study에서 동일한 숫자·역할·기간을 사용한다.

## 수정 파일

- `src/pages/PortfolioPrint.tsx`
- `src/pages/FullstackPortfolioPrint.tsx`
- `README.md`
- `smart-safety-ai-case-study.md`
- `portfolio-summary-2026-ai-engineer.md`
- 관련 테스트

---

# 1. 공통 기준

다음 내용은 모든 문서에서 동일해야 한다.

```text
스마트 안전 관제 기간
실제 팀 인원
팀장 여부
직접 담당 범위
F1-score 89.29% → 93.49%
ID Switch 8건 → 1건
Mean Track Coverage 35.76% → 49.70%
YOLO 지연 9.454ms → 4.723ms
전체 처리 지연 11.789ms → 6.101ms
End-to-End 평균 20.931ms
p95 26ms
이벤트 29건 모두 1초 이내
RF-DETR 데이터 분할
```

확인되지 않은 값은 공개 문서에서 제거한다.

---

# 2. AI 인쇄본

## Profile Summary

```text
Tracking 단절, 입력 시퀀스 오류와 프레임 적체를 모델·Tracking·실시간 처리 구조의 문제로 나누어 분석한 신입 컴퓨터비전 엔지니어입니다. 의료영상 AI에서 시작해 CCTV 행동 분석과 실시간 관제 시스템까지 경험했으며, 정확도뿐 아니라 지연과 서비스 전달까지 함께 검증하는 데 강점이 있습니다.
```

## 대표 결과

```text
54D 행동 특징을 적용해 F1-score를 89.29%에서 93.49%로 높이고, False Positive를 38.6%, False Negative를 38.9% 줄였습니다.
```

```text
자체 테스트 영상에서 ID Switch를 8건에서 1건으로 줄이고 Mean Track Coverage를 35.76%에서 49.70%로 높였습니다.
```

```text
TensorRT를 적용해 YOLO 평균 지연을 9.454ms에서 4.723ms로 줄였습니다. 전체 처리 지연 11.789ms에서 6.101ms로의 감소는 TensorRT와 최신 프레임 처리 정책이 함께 적용된 통합 결과입니다.
```

---

# 3. Full-Stack 인쇄본

## Profile Summary

```text
사용자의 입력과 AI 이벤트가 화면, API, 데이터 저장과 결과까지 끊기지 않도록 만드는 풀스택 개발자입니다. 1인 웹서비스를 기획부터 배포까지 완성하고, 팀 프로젝트에서는 MQTT·Spring Boot·WebSocket을 연결하며 비동기 데이터의 식별자와 완료 기준을 맞췄습니다.
```

## 대표 결과

```text
2카메라 TensorRT 환경에서 위험 이벤트 29건의 End-to-End 평균 지연 20.931ms, p95 26ms를 확인했으며 29건 모두 1초 이내에 전달됐습니다.
```

```text
originalEventId를 공통 사고 식별자로 사용해 실시간 경보와 이후 도착한 스냅샷·사고 클립·VLM 설명을 하나의 Incident에 병합했습니다.
```

---

# 4. README

## 소개

```text
안진경의 AI Engineer / Full-Stack Developer 포트폴리오입니다. 실시간 영상 AI, 의료 컴퓨터비전, 실시간 이벤트 처리와 검색 기반 서비스 프로젝트를 문제 정의·원인 분석·의사결정·결과 중심으로 정리했습니다.
```

## 기술 스택 구분

```text
Portfolio Website:
React, TypeScript, Vite, Tailwind CSS, Vitest

Project Areas:
Computer Vision, PyTorch, TensorRT, RTSP, MQTT, Spring Boot, PostgreSQL, React, Cloudflare Workers
```

오래된 수치나 구현 상태 문서를 README 전면 링크로 노출하지 않는다.

---

# 5. Smart Safety Case Study

현재 웹에 확정 수치가 공개되어 있다면 아래 오래된 문구를 갱신한다.

```text
구현 일부 Git 검증 필요
수치 확인 전까지 임의 작성 금지
Recall, Precision, F1, FPS, latency 미확인
```

실제 저장소·로그로 확인되지 않은 부분은 `검증 필요`로 남긴다.

Case Study 순서:

```text
1. 문제 정의
2. 팀 구성과 본인 역할
3. 전체 AI 파이프라인
4. Pose 모델 선택
5. Tracking 단절
6. 최신 프레임 우선 처리
7. 54D 특징 확장
8. TensorRT
9. 협업과 통합
10. 검증 범위와 한계
```

---

# 6. 하드코딩 줄이기

가능하면 인쇄 페이지가 `projects.ts`, `fullstackProjects.ts` 또는 공통 요약 데이터에서 문구를 가져오도록 한다.

최소한 아래 값은 공통 데이터로 관리한다.

```text
지원 직무 제목
프로젝트 기간
대표 성과
기술 스택
이메일
GitHub 주소
```

## 완료 조건

- 웹·인쇄본·README·Case Study의 숫자가 일치한다.
- 같은 수치가 서로 다른 원인의 성과로 설명되지 않는다.
- 과정 기간과 팀 역할이 일치한다.
- 오래된 문서가 현재 웹의 확정 수치를 부정하지 않는다.
- 테스트와 `npm run build`가 통과한다.

# Skills·Experience·Awards 수정

## 목표

프로젝트에서 실제로 사용하고 설명할 수 있는 기술만 남기고, 교육·경험·수상을 중복 없이 정리한다.

## 수정 파일

- `src/components/SkillsSection.tsx`
- `src/components/ExperienceSection.tsx`
- `src/components/CompetenceSection.tsx`
- 관련 테스트

---

# 1. AI Skills

## Computer Vision

```text
YOLO Pose
RF-DETR
OpenCV
ByteTrack / Object Tracking
```

## Modeling & Optimization

```text
PyTorch
TensorFlow
LSTM
TensorRT
```

## Real-Time Pipeline

```text
RTSP
MQTT
Bounded Queue
MJPEG / MediaMTX
```

## Development & Evaluation

```text
Python
Docker
Git / GitHub
Precision / Recall / F1 / Latency 분석
```

AI Skills 전면에서 아래 항목은 제거한다.

```text
BeautifulSoup4
pykrx
Seaborn
Streamlit
MySQL
```

---

# 2. Full-Stack Skills

## Backend & API

```text
Spring Boot
Spring Data JPA
Cloudflare Workers
REST API
```

## Frontend

```text
React
TypeScript
Tailwind CSS
Vite
```

## Data & Search

```text
PostgreSQL
pgvector
Cloudflare D1
SQL
```

## Realtime & Deployment

```text
MQTT
WebSocket / STOMP
Docker
Cloudflare Pages
Git / GitHub
```

대표 프로젝트 근거가 약한 `MySQL`은 전면에서 제거하거나 보조 기술로 이동한다.

---

# 3. Experience와 Awards 분리

## Education & Training

```text
건양대학교 의공학과
SK쉴더스 지능형 애플리케이션 개발 과정
미래내일 일경험 프로젝트 기획 인턴
Lab-CORPS 산학협력 실증 프로젝트
```

## Awards

```text
2025 캡스톤디자인 경진대회 금상
2025 성균관대학교 컨소시엄 창의적 종합설계 경진대회 동상
2024 창의혁신 DNA 산학협력 공학혁신상
```

프로젝트 상세 설명은 Projects에 있으므로 Experience에서 반복하지 않는다.

수상 사유는 다음 수준으로 한 줄만 작성한다.

```text
RF-DETR 기반 용종 검출 프로젝트의 데이터 증강과 구현 완성도를 인정받아 수상
```

```text
VAE 재구성 오차와 동적 임계값을 활용한 라벨 부족 대응 방식을 인정받아 수상
```

---

# 4. Verified Competence 축소

- 인증서 2개는 작은 카드로 유지한다.
- 정보처리기사 필기 합격은 보조 정보로 표시한다.
- SK쉴더스 부트캠프는 Experience와 중복되면 이 섹션에서 제거한다.
- 홍보 문구보다 발급 기관과 인증 내용을 객관적으로 작성한다.
- 인증 섹션이 프로젝트보다 시각적으로 크게 보이지 않게 한다.

## 완료 조건

- Skills가 실제 프로젝트 근거와 일치한다.
- AI와 Full-Stack 기술 구성이 구분된다.
- Experience와 Awards가 중복되지 않는다.
- SK쉴더스 기간이 모든 페이지에서 동일하다.
- 테스트와 `npm run build`가 통과한다.

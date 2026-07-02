# Project Selection Matrix

## 평가 기준

- **Main:** AI Engineer 포지셔닝의 중심축이며 문제정의, 접근, 수행, 성과, 검증 근거가 비교적 명확한 프로젝트.
- **Supporting:** 핵심축을 보완하는 백엔드, 자동화, 데이터 파이프라인, 협업 경험.
- **Archive:** 경험은 있으나 이번 핵심 포트폴리오에서 전면에 두기 어려운 프로젝트.
- **Exclude:** 구현 여부가 불확실하거나 현재 직무 목표와 연결성이 낮은 프로젝트.

## 프로젝트 목록

| 프로젝트 | 적합도 | 직무 연결성 | 구현 검증 | 성과 수치 | 등급 | 보완하면 좋은 점 |
|---|---:|---|---|---|---|---|
| 스마트 안전 관제 시스템 | 높음 | Real-time AI, streaming, service integration | 포트폴리오 자료 확인, Git 미확인 | 미확인 | Main | AI/backend/frontend/infra Git 검증, FP/FN 수치, MQTT schema, frame sync 코드 확인 |
| LLM Wiki / Evidence Wiki / RAG | 높음 | Domain-specific RAG, AI-native workflow | 로컬 brain 문서와 스크린샷 확인 | 빌드/테스트 PASS 기록 있음 | Main | 실제 검색 인덱스 코드와 배포 환경 확인 |
| RF-DETR 용종 검출 | 높음 | Medical CV, edge inference, data-centric AI | Git 저장소/README 확인 | mAP +7%p, 22 FPS, 수상 기록은 기존 자료 기준 | Main | 실험 로그, benchmark table, inference script 검증 |
| VAE 유방암 병변 검출 | 높음 | Unsupervised medical AI, anomaly detection | Git 저장소/README 확인 | max 90% Dice, 수상 기록은 README 기준 | Supporting 또는 Main | 평가 스크립트, dataset split, FP/FN 사례 추가 |
| FullCount 에스크로/실시간 커뮤니티 | 중간 | Backend reliability, WebSocket, transaction | 포트폴리오 문서와 GitHub URL 확인 | DB I/O 80% 절감은 기존 문서 기준 | Supporting | 실제 repo README/commit 검증 필요 |
| Lumina Capital 금융 데이터 시각화 | 중간 | data pipeline, async caching, dashboard | public resume / VMS 문서 기준 | 수치 제한적 | Supporting | GitHub repo 접근 검증, 데이터 수집 구조 확인 |
| 블로그 자동화 파이프라인 | 중간 | automation, prompt engineering, AI workflow | 로컬 README와 파일 구조 확인, Git 없음 | 생성 산출물 존재 | Supporting | Git 저장소화, prompt test, 금칙어 검증 추가 |
| 자동매매 프로젝트 | 중간 | fail-safe, testing, risk control | 포트폴리오 문서 기준 | 테스트/안전성 언급 있으나 repo 미확인 | Archive 또는 Supporting | 실제 테스트 파일과 API 비호출 검증 확인 |
| 마음이음 | 낮음 | 현재 핵심 AI Engineer 포지션과 직접 연결 약함 | 로컬 폴더 발견 | 미확인 | Archive | 이번 핵심 범위에서는 제외 |

## 최종 반영 전략

### Main Project

1. 스마트 안전 관제 시스템
2. LLM Wiki / Evidence Wiki / RAG
3. RF-DETR 실시간 용종 검출

### Supporting Project

1. VAE 기반 비지도 유방암 병변 검출
2. FullCount 실시간 에스크로/커뮤니티
3. Lumina Capital 금융 데이터 파이프라인
4. 블로그 자동화 파이프라인

### Archive Project

1. 자동매매 프로젝트
2. 마음이음
3. 기타 단순 실습 또는 구현 검증이 부족한 프로젝트

## Git 검증 요약

| 저장소 | 로컬 경로 | remote | 최근 커밋 |
|---|---|---|---|
| RF-DETR | `C:\Users\user\.gemini\antigravity\scratch\RF-DETR-project` | `https://github.com/anjin0910-afk/RF-DETR-project.git` | `6f2c9f7 docs: Add detailed project README.md` |
| VAE | `C:\Users\user\.gemini\antigravity\scratch\vae-breast-cancer-anomaly` | `https://github.com/anjin0910-afk/vae-breast-cancer-anomaly.git` | `a76ca3c Initial commit for VAE Anomaly Detection` |
| Blog automation | `C:\Users\user\.gemini\antigravity\scratch\blog_automation` | Git 저장소 아님 | 해당 없음 |
| Developer portfolio | 현재 workspace | `https://github.com/Anjingyeong/anjingyeong.github.io.git` | `952b610 Polish print view...` |

## 검증하지 못한 내용

- 스마트 안전 관제 시스템의 AI/backend/frontend/infra 실제 저장소.
- `run_registered_cameras.py`, MQTT payload schema, frame sync / overlay sync 코드.
- YOLO Pose + LSTM 학습/추론 코드와 keypoint 51차원/54차원 변경 기록.
- Recall, Precision, F1, FP/FN, latency, FPS 같은 스마트 안전 관제 성과 수치.
- FullCount, Lumina, 자동매매의 실제 커밋/테스트 로그.

## 포트폴리오 문구 사용 원칙

- Git 또는 로컬 파일로 확인된 내용은 "구현", "확인", "검증"으로 표현합니다.
- 확인되지 않은 내용은 "설계", "실험 중", "검증 필요", "Next Step"으로 분리합니다.
- 성과 수치가 확인되지 않으면 임의로 만들지 않습니다.
- 마음이음은 이번 핵심 포트폴리오 범위에서 제외하고 Archive로만 둡니다.

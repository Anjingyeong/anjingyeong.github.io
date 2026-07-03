# AI Engineer Resume Gap Check

## 이력서에서 약한 부분

| 영역 | 현재 상태 | 보완 방향 |
|---|---|---|
| 스마트 안전 관제 정량 지표 | Recall, Precision, F1, FP/FN, latency, FPS 수치 미확인 | 실험 로그 또는 발표 자료에서 실제 수치 확보 |
| 스마트 안전 관제 Git 검증 | 전용 AI/backend/frontend/infra repo 미확인 | repo 경로, remote, 주요 커밋, README, 실행 명령 확인 |
| YOLO Pose + LSTM 구현 근거 | 구조와 방향은 문서화, 코드 검증 필요 | keypoint extraction, LSTM train/inference 코드 확인 |
| RAG 검색 구현 코드 | 로컬 brain 산출물과 UI/검증 이미지 확인, 검색 인덱스 코드 전체는 미확인 | indexing, retrieval, answer generation 코드와 배포 환경 확인 |
| FullCount/Lumina 수치 | 기존 포트폴리오 문서 기준 수치, 실제 로그 미확인 | 부하 테스트, API timeout 로그, DB I/O 비교 자료 확보 |
| 수상 연도 일관성 | 문서별로 일부 2023/2024/2025 표기가 섞여 있음 | 증빙 기준으로 연도 통일 필요 |

## 추가하면 좋은 수치

### 스마트 안전 관제 시스템

- Recall, Precision, F1.
- FP count, FN count, 대표 오류 사례.
- RTSP frame 처리 FPS.
- AI inference latency.
- MQTT event publish latency.
- WebSocket dashboard 반영 latency.
- frameId/timestamp overlay mismatch 발생률.
- cameraLoginId 기반 다중 카메라 처리 수.
- frame drop 발생 시 fallback 또는 상태 처리 결과.

### LLM Wiki / RAG

- 문서 수, chunk 수, source 수.
- 검색 latency.
- 검색 성공률 또는 답변 근거 포함률.
- BM25/vector/RRF 비교 결과.
- hallucination 또는 insufficient-context 처리 사례.
- 빌드/테스트 명령의 실제 로그 경로.

### RF-DETR

- mAP@50, mAP@50:95, Precision, Recall.
- 전/후 데이터 수: 원본 이미지 수, 증강 후 이미지 수.
- 모델별 benchmark table.
- FPS 측정 환경.
- pruning 전후 parameter/FLOPs 비교.
- inference latency 평균/최대.

### VAE

- Dice 평균/최대/최소.
- Dynamic Threshold 적용 전후 Dice 비교.
- FP/FN 사례 이미지.
- 데이터셋 split.
- reconstruction error threshold 기준.

## Git 검증이 필요한 내용

| 항목 | 확인할 파일/명령 |
|---|---|
| 스마트 안전 AI repo | `git remote -v`, README, train/inference script, commit log |
| backend repo | MQTT subscriber, WebSocket broadcast, DB schema, event API |
| frontend repo | overlay sync, event display, cameraLoginId handling |
| infra repo | `docker-compose.yml`, env example, port mapping |
| LSTM 코드 | train/eval/inference script, model checkpoint policy |
| MQTT schema | payload sample, eventType, cameraId, frameId, timestamp |
| frame sync | overlay matching, dropped frame handling, active_tracks state |

## 포트폴리오와 이력서 불일치 가능성

| 항목 | 현재 판단 |
|---|---|
| 스마트 안전 관제 구현 범위 | 이력서에서는 "설계/정리/검증 필요"를 명시해 과장 방지 |
| YOLO Pose + LSTM | 포트폴리오 요구사항에는 포함, Git 검증 전에는 구현 완료 표현 금지 |
| RAG Hybrid Search | "고도화 방향/설계"로 표현, 구현 완료로 쓰지 않음 |
| GraphRAG | 향후 확장 후보로만 표현 |
| 마음이음 | 메인 프로젝트 제외, 필요 시 서비스 배포 경험으로 약하게 반영 |
| FullCount DB I/O 80% | 기존 문서 기준 수치로 표시, 실제 로그 확인 전 과도한 단정 피하기 |
| Lumina API timeout 0% | 기존 문서 기준 수치로 표시, 실제 로그 확보 권장 |

## 지원 직무별 보완 포인트

### AI Engineer

- 스마트 안전 관제의 FP/FN, hard negative, threshold 정책을 더 강하게 보강.
- RF-DETR/VAE의 평가 지표와 데이터셋 split을 표로 추가.
- RAG는 evidence와 evaluation 관점으로 간결하게 배치.

### Applied AI Engineer

- RTSP/MQTT/WebSocket 등 모델 결과가 서비스로 이어지는 흐름을 강조.
- 스마트 안전 관제와 LLM Wiki를 1, 2순위로 유지.
- FullCount/Lumina를 서비스 안정성 보조 프로젝트로 활용.

### Computer Vision AI Engineer

- RF-DETR와 VAE를 스마트 안전 관제 다음에 더 크게 배치.
- OpenCV, RF-DETR, YOLO Pose, keypoint, LSTM, data augmentation 키워드를 상단 skills에 강화.
- 정량 평가와 시각화 산출물 링크 확보.

### AI Full-stack Engineer

- 스마트 안전 관제, LLM Wiki, FullCount, Lumina 순서로 배치.
- 모델/데이터/백엔드/프론트 연동 흐름을 강조.
- React, FastAPI, Spring Boot, WebSocket, MQTT를 skills에 더 전면 배치.

## 사용자가 제출 전 직접 확인해야 할 항목

- 스마트 안전 관제 시스템에서 실제 완료된 기능과 실험 중 기능 구분.
- 스마트 안전 관제의 AI/backend/frontend/infra GitHub URL.
- Recall/Precision/F1, FPS, latency 등 성과 수치의 실제 출처.
- RF-DETR/VAE 수상 연도와 대회명 공식 표기.
- GitHub 계정 표기 일관성: `Anjingyeong` vs `anjin0910-afk`.
- LinkedIn 또는 Blog URL이 있다면 Header에 추가할지 여부.
- 개인정보: 주소, 생년월일, 주민번호 등 불필요한 정보 미포함 유지.

## 최종 권장 포지셔닝

"실시간 영상 AI와 의료 Computer Vision 프로젝트를 기반으로, 모델 개발뿐 아니라 데이터 기반 개선, 이벤트 스트리밍, RAG 문서화까지 연결하는 신입 Applied AI Engineer"

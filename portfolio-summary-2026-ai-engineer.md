# 2026 AI Engineer Portfolio Summary

## Positioning

모델을 만드는 데서 끝나지 않고, 실제 서비스에서 AI가 안정적으로 동작하도록 데이터, 모델, 통신, 검증, 문서화를 연결하는 Applied AI Engineer 포트폴리오입니다.

이 포트폴리오는 실시간 영상 AI와 RAG 기반 지식 시스템을 중심으로 구성합니다. 핵심 메시지는 "AI 모델 성능"만이 아니라, AI 결과가 사용자 화면, 이벤트 스트림, 운영 기록, 검증 문서로 이어지는 전체 흐름을 설계하고 개선할 수 있다는 점입니다.

## 핵심 역량 요약

| 역량 | 근거 프로젝트 | 포트폴리오 메시지 |
|---|---|---|
| Real-time Edge/Streaming AI | 스마트 안전 관제 시스템, RF-DETR 용종 검출 | 실시간 영상 입력, 추론, 이벤트 전달, 사용자 화면 표시까지 고려 |
| Data-centric AI | RF-DETR, VAE | 모델 교체보다 데이터 증강, 임계값, 후처리, 오류 사례 분석을 우선 |
| AI Evaluation | RF-DETR, VAE, 스마트 안전 관제 | mAP, FPS, Dice, FP/FN, 오탐/미탐 분석을 성과 기준으로 사용 |
| Domain-specific RAG | LLM Wiki / Evidence Wiki | 실험 기록, 오류 해결, 의사결정 근거를 검색 가능한 지식 자산으로 전환 |
| AI-native Development Workflow | LLM Wiki, 스마트 안전 관제 | Codex/Hermes/Antigravity 기반으로 목표, 제약, 검증 기준을 문서화 |
| Cloud-native / Service Integration | FullCount, 스마트 안전 관제 | WebSocket/STOMP, MQTT, Docker, 백엔드 이벤트 흐름 이해 |

## 대표 프로젝트

### 1. 스마트 안전 관제 시스템

- **등급:** Main Project
- **상태:** Portfolio/Wiki 근거 기반 작성, Git 구현 검증 필요
- **핵심 문제:** 관제자가 다수 CCTV를 24시간 동일한 집중도로 확인하기 어렵다는 문제를, 실시간 영상 AI가 판단 공백을 줄이는 보조 시스템 문제로 재정의했습니다.
- **접근:** RTSP 영상 입력, AI 추론, MQTT 이벤트, WebSocket/대시보드 알림을 분리해 실시간 관제 흐름을 구성합니다.
- **강조 포인트:** YOLO Pose + LSTM, frameId/timestamp/evidence chain, FP/FN 분석, hard negative 후보, threshold/tracker/frame drop 분석은 구현 완료로 단정하지 않고 검증 상태별로 분리합니다.

### 2. LLM Wiki / Evidence Wiki / RAG 기반 프로젝트 지식 시스템

- **등급:** Main Project
- **상태:** 로컬 Antigravity brain 산출물로 검증
- **핵심 문제:** 프로젝트가 복잡해지면서 실험 결과, 오류 해결, 의사결정 기록이 흩어져 재사용하기 어려웠습니다.
- **접근:** 문서 기반 Wiki와 RAG Portfolio Assistant UI를 통해 기록을 검색 가능한 evidence로 구조화했습니다.
- **검증 근거:** `implementation_plan.md`, `walkthrough.md`, `task.md`, RAG UI 스크린샷, 검증 로그 이미지가 로컬에 존재합니다.

### 3. 의료 AI 프로젝트 묶음: RF-DETR + VAE

- **등급:** Main / Supporting
- **상태:** Git 저장소와 README로 구현 검증 가능
- **RF-DETR:** 내시경 영상의 조명 변화, 반사, 장벽 왜곡 문제를 Data-centric 증강과 RF-DETR 기반 추론 파이프라인으로 해결했습니다.
- **VAE:** 라벨링 비용이 높은 유방 초음파 환경에서 정상 데이터 기반 비지도 이상 탐지로 문제를 재정의했습니다.

## Supporting Projects

| 프로젝트 | 등급 | 반영 이유 |
|---|---|---|
| FullCount 실시간 티켓 에스크로 | Supporting | WebSocket/STOMP, JPA, MySQL 기반 실시간 상태 동기화와 백엔드 무결성 경험 |
| Lumina Capital / 금융 데이터 시각화 | Supporting | 외부 API 지연을 사용자 요청과 분리한 비동기 캐싱 파이프라인 경험 |
| 블로그 자동화 파이프라인 | Supporting | AI-native automation, 프롬프트 제약, 문서 생성 자동화 경험 |
| 자동매매 / Fail-safe 주문 제어 | Archive 또는 Supporting | 리스크 제어와 테스트 관점은 좋지만 현재 AI Engineer 핵심축에서는 보조 근거 |
| 마음이음 | Archive | 이번 핵심 포트폴리오 범위에서 제외 |

## 2026 트렌드 연결

- **Production-ready AI:** 스마트 안전 관제에서 모델 출력이 이벤트, overlay, 알림, 운영 안정성으로 이어져야 한다는 관점.
- **Real-time Edge/Streaming AI:** RF-DETR의 실시간 추론, 스마트 안전 관제의 RTSP/MQTT/WebSocket 흐름.
- **Data-centric AI:** RF-DETR 증강, VAE threshold, 스마트 안전 관제의 hard negative 후보 설계.
- **AI Evaluation:** mAP, FPS, Dice, FP/FN, Recall/Precision/F1을 확인 가능한 경우에만 사용.
- **AI Observability:** frameId/timestamp/evidence chain, Langfuse 또는 별도 observability는 Next Step으로 분리.
- **Domain-specific RAG:** LLM Wiki를 포트폴리오와 면접 답변의 evidence repository로 활용.
- **AI-native Development Workflow:** Codex/Hermes/Antigravity를 사용하되, 목표와 검증 기준을 사람이 통제하는 방식으로 설명.

## 지원 직무와의 연결성

이 포트폴리오는 AI Engineer, AI Application Engineer, Applied AI Engineer, AI Full-stack Engineer 직무에 맞춥니다. 특히 "모델 학습 경험"과 "서비스 통합 경험" 사이를 연결하는 방향이 강점입니다.

면접에서는 다음 흐름으로 설명하는 것이 좋습니다.

1. 문제를 사용자/운영 관점에서 재정의했습니다.
2. 모델, 데이터, 통신, UI, 검증 중 어느 계층에서 병목이 생기는지 분리했습니다.
3. 구현된 내용과 실험/계획을 명확히 구분했습니다.
4. 실험 기록과 오류 해결을 LLM Wiki에 남겨 재사용 가능한 지식 자산으로 만들었습니다.

## 읽은 자료와 검증 상태

| 자료 | 상태 |
|---|---|
| `README.md`, `Portfolio_2026.md`, `Portfolio_2026_STAR.md` | 로컬 포트폴리오 문서 확인 |
| `src/components/ProjectsSection.tsx`, `src/pages/PortfolioPrint.tsx` | 현재 웹 포트폴리오 문구 확인 |
| `C:\Users\user\.gemini\antigravity\scratch\RF-DETR-project\README.md` | Git 저장소와 README 확인 |
| `C:\Users\user\.gemini\antigravity\scratch\vae-breast-cancer-anomaly\README.md` | Git 저장소와 README 확인 |
| `C:\Users\user\.gemini\antigravity\scratch\blog_automation\README.md` | 로컬 프로젝트 확인, Git 저장소 없음 |
| `C:\Users\user\.gemini\antigravity-ide\brain\...\implementation_plan.md` | LLM Wiki UI/RAG 자료 확인 |
| `C:\Users\user\.gemini\antigravity-ide\brain\...\walkthrough.md` | LLM Wiki 검증 결과 확인 |
| 스마트 안전 관제 시스템 Git 저장소 | 현재 로컬에서 명확한 저장소 미확인, Git 구현 검증 필요 |

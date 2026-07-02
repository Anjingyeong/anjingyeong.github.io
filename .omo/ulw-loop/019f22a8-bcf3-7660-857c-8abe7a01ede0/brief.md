/goal 포트폴리오 강화를 위해 LLM Wiki, Git 저장소, 기존 프로젝트 자료를 기반으로 2026 AI Engineer 포트폴리오 문서를 재구성한다.

목표:
현재 PC에 스마트 안전 관제 시스템 프로젝트 파일이 없을 수 있으므로, 먼저 사용 가능한 자료를 확인한다.
LLM Wiki가 있다면 Wiki를 우선 읽어 프로젝트의 실험 기록, 오류 해결, 의사결정, 기술적 난관을 정리하고, Git 저장소 접근이 가능하다면 실제 구현 여부를 코드/README/커밋 기준으로 검증한다.

이번 작업의 핵심은 단순 프로젝트 나열이 아니라, 각 프로젝트를 취업 포트폴리오 관점에서 다음 구조로 강화하는 것이다.

* 문제정의
* 접근 방식
* 수행 내용
* 성과
* STAR-RN 기반 경험 서술
* 2026 AI/ML/풀스택 트렌드 연결
* 실제 구현됨 / 실험 중 / 향후 계획 구분

마음이음 프로젝트는 이번 핵심 포트폴리오 범위에서 제외한다.
단, 기존 프로젝트 자료 탐색 중 필요하다고 판단되는 경우에도 메인 프로젝트가 아니라 Archive 또는 Supporting Project 수준으로만 정리한다.

핵심 포트폴리오 주제:

1. 스마트 안전 관제 시스템
2. LLM Wiki / Evidence Wiki / RAG 기반 프로젝트 지식 시스템
3. 기존 프로젝트 중 포트폴리오 보완 가치가 있는 프로젝트

   * 블로그 자동화 파이프라인
   * 의료영상/데이터분석 프로젝트
   * 자동매매 프로젝트
   * 기타 README, docs, portfolio 폴더에서 발견되는 프로젝트

작업 순서:

1. 현재 PC에서 아래 키워드와 관련된 폴더/문서를 탐색한다.

   * portfolio
   * docs
   * wiki
   * README
   * smart-safety
   * strange_ai
   * strangeRookies
   * llm-wiki
   * rag
   * blog
   * medical
   * data-analysis
   * hermes
   * trading
2. LLM Wiki가 로컬에 있으면 먼저 읽는다.

   * 프로젝트 개요
   * AI 파이프라인
   * RTSP/WebRTC/MQTT 구조
   * YOLO Pose + LSTM 구조
   * frameId/timestamp/evidence chain
   * FP/FN 분석
   * hard negative mining
   * keypoint 51차원/54차원 변경
   * threshold/tracker/frame drop/active_tracks 관련 기록
   * 실제 운영 안정화 기록
3. 스마트 안전 관제 시스템 Git 저장소가 로컬에 없으면, 기존 remote 정보나 README에 적힌 GitHub URL을 확인한다.
4. Git 저장소를 확인할 수 있다면 실제 구현 여부를 대조한다.

   * AI repo
   * backend repo
   * frontend repo
   * infra repo
   * README
   * docker-compose
   * MQTT payload schema
   * run_registered_cameras.py
   * frame sync / overlay sync 관련 코드
   * LSTM 학습/추론 코드
5. 기존 프로젝트 자료도 함께 확인한다.

   * 각 프로젝트의 README
   * docs
   * 발표자료
   * 실험 결과
   * 트러블슈팅 기록
   * 커밋 기록
   * 배포 여부
   * 사용 기술
   * 실제 결과물
6. 각 프로젝트를 포트폴리오 관점에서 재분류한다.

   * Main Project
   * Supporting Project
   * Archive Project
   * Not Suitable for Portfolio
7. 포트폴리오에 넣을 가치가 있는 프로젝트만 선별한다.
8. 선별된 프로젝트별로 문제정의, 접근 방식, 수행내용, 성과를 정리한다.
9. 각 프로젝트별로 STAR-RN 기법을 적용한 경험 서술을 작성한다.
10. 최종적으로 포트폴리오 문서와 README 문구를 개선한다.

문제정의 작성 방식:
각 프로젝트는 단순히 “무엇을 만들었다”가 아니라 아래 질문에 답하도록 작성한다.

1. 어떤 사용자의 어떤 문제가 있었는가?
2. 기존 방식의 한계는 무엇이었는가?
3. 왜 이 문제가 중요했는가?
4. 기술적으로 해결해야 할 핵심 난관은 무엇이었는가?
5. 내가 이 문제를 어떤 관점으로 재정의했는가?

예시:

* 단순 표현: YOLO Pose와 LSTM으로 낙상을 탐지했다.
* 강화 표현: 관제자가 다수의 CCTV를 24시간 동일한 집중도로 확인하기 어렵다는 문제를, 실시간 영상 AI가 관제자의 판단 공백을 줄이는 보조 시스템 문제로 재정의했다.

접근 방식 작성 기준:
각 프로젝트는 아래 기준으로 접근 방식을 정리한다.

1. 왜 이 기술을 선택했는가?
2. 대안은 무엇이었고, 왜 현재 방식을 선택했는가?
3. 모델, 데이터, 통신, 배포, 운영 중 어느 관점에서 문제를 해결했는가?
4. 단순 구현이 아니라 어떤 구조적 개선을 했는가?
5. 실제 운영 또는 사용자 경험을 고려한 부분은 무엇인가?

수행내용 작성 기준:
각 프로젝트의 수행내용은 추상적인 표현이 아니라 실제 작업 단위로 작성한다.

포함 예시:

* 데이터 전처리
* 모델 학습/추론 파이프라인 구성
* 실험 설계
* 오탐/미탐 분석
* 재학습 후보 설계
* API 구현
* MQTT/WebSocket/WebRTC 연동
* DB 설계
* 프론트엔드 시각화
* 배포
* 문서화
* 오류 해결
* 성능 검증

성과 작성 기준:
성과는 가능하면 수치, 결과물, 검증 명령, 개선 전후 비교로 작성한다.

포함 예시:

* Recall / Precision / F1
* FP / FN
* latency
* FPS
* build/test 통과 여부
* 배포 URL
* 생성 문서
* 구현된 기능 수
* 개선 전후 차이
* 오류 해결 결과
* 사용자 흐름 개선
* 운영 안정성 개선

성과 수치가 없는 경우:

* 억지로 숫자를 만들지 않는다.
* 대신 “정성 성과”로 작성한다.

  * 실시간 영상과 AI 이벤트를 분리하여 유지보수성을 높임
  * 실험 결과와 오류 해결 기록을 Wiki에 축적하여 재사용 가능하게 만듦
  * 단순 모델 성능 비교에서 운영 안정성 검증 중심으로 관점을 확장함

STAR-RN 작성 방식:
각 핵심 프로젝트마다 STAR-RN 형식의 경험 서술을 작성한다.

STAR-RN 정의:

* S: Situation

  * 프로젝트 당시의 상황, 문제 배경, 제약 조건
* T: Task

  * 내가 맡은 역할, 달성해야 했던 목표
* A: Action

  * 실제 수행한 작업, 의사결정, 기술적 접근
* R: Result

  * 결과, 성과, 수치, 산출물
* R: Reflection

  * 배운 점, 시행착오, 문제를 바라보는 관점 변화
* N: Next

  * 다음 개선 방향, 후속 고도화 계획

각 프로젝트별 STAR-RN은 아래 두 가지 버전으로 작성한다.

1. 포트폴리오 문서용 상세 버전
2. 자기소개서/면접 답변용 압축 버전

스마트 안전 관제 시스템 STAR-RN에 반드시 포함할 내용:

* S:

  * CCTV는 많지만 관제자가 모든 화면을 24시간 집중해서 보기 어렵다는 문제
  * 단순 탐지 모델이 아니라 실시간 관제 보조 시스템으로 동작해야 한다는 제약
* T:

  * AI 파트에서 이상행동 탐지 모델과 실시간 추론 파이프라인을 설계/구현
  * 오탐/미탐을 분석하고 실서비스 환경에서의 안정성을 검증
* A:

  * YOLO Pose 기반 keypoint 추출
  * LSTM 기반 시계열 행동 분류
  * RTSP/WebRTC/MQTT 기반 실시간 파이프라인 구성
  * WebRTC 영상과 MQTT overlay/event metadata 분리
  * frameId/timestamp/evidence chain 설계
  * FP/FN 분석과 hard negative 후보 설계
  * threshold, tracker, frame drop, active_tracks 상태 분석
* R:

  * Recall, Precision, F1, FP/FN 등 확인된 실험 결과가 있으면 반영
  * 실시간 이벤트 발행 구조와 overlay 동기화 설계 정리
  * 단순 모델 정확도 중심이 아니라 운영 안정성 중심으로 개선 방향 도출
* Reflection:

  * AI 모델 성능만으로는 실제 서비스 품질을 보장할 수 없다는 점
  * 영상 프레임과 이벤트 증거가 일치해야 신뢰 가능한 관제 시스템이 된다는 점
  * 오탐/미탐 분석이 재학습 전략의 핵심이라는 점
* Next:

  * 실제 승인된 real error 후보 기반 hard negative 재학습
  * frame_sync payload 고도화
  * Langfuse 또는 별도 observability 도입 검토
  * 운영 환경별 threshold 정책 검증
  * VLM/Agentic 기능은 구현 완료가 아니라 향후 확장 후보로만 정리

LLM Wiki STAR-RN에 반드시 포함할 내용:

* S:

  * 프로젝트가 복잡해지면서 실험 결과, 오류 해결, 의사결정 기록이 흩어지는 문제
* T:

  * 개발 과정에서 생성된 지식을 검색 가능하고 재사용 가능한 형태로 정리하는 내부 지식 시스템 구축
* A:

  * 문서 기반 Wiki 구성
  * RAG 검색 구조 설계
  * Hybrid Search 방향 정리
  * 실험 결과와 트러블슈팅 기록을 evidence로 축적
  * 포트폴리오/트러블슈팅/의사결정 기록으로 재사용 가능한 문서 구조 설계
* R:

  * 프로젝트 기록을 단순 메모가 아니라 지식 자산으로 전환
  * 오류 해결과 실험 근거를 빠르게 재참조할 수 있는 기반 마련
  * 포트폴리오 정리와 면접 답변 근거로 활용 가능
* Reflection:

  * AI 프로젝트에서는 코드뿐 아니라 의사결정 근거와 실패 기록이 중요하다는 점
  * RAG는 단순 챗봇이 아니라 개발 지식 관리 도구로 활용될 수 있다는 점
* Next:

  * metadata filtering + BM25 + vector search + RRF + optional re-ranking 구조 고도화
  * GraphRAG는 문서 관계와 규모가 커졌을 때 확장 후보로만 정리
  * observability와 평가셋 기반 답변 품질 검증 추가 검토

기존 프로젝트 분석 기준:
기존 프로젝트는 모두 같은 비중으로 넣지 않는다.
아래 기준으로 포트폴리오 반영 여부를 판단한다.

우선 반영:

* AI Engineer 직무와 연결되는 프로젝트
* 데이터 분석, 모델링, 실험, 자동화, 배포 경험이 드러나는 프로젝트
* 문제정의와 개선 과정이 명확한 프로젝트
* 실제 결과물 또는 검증 기록이 있는 프로젝트

보조 반영:

* 프론트/백엔드/클라우드 경험을 보여주는 프로젝트
* 자동화, 문서화, 운영 개선 경험을 보여주는 프로젝트
* 협업, 발표, 기획 역량을 보여주는 프로젝트

제외 또는 Archive:

* 단순 실습 수준 프로젝트
* 문제정의가 약한 프로젝트
* 구현 여부가 불확실한 프로젝트
* 현재 목표 직무와 연결성이 낮은 프로젝트

기존 프로젝트별로 작성할 내용:
각 프로젝트마다 아래 형식으로 정리한다.

1. 한 줄 소개
2. 문제정의
3. 접근 방식
4. 수행내용
5. 성과
6. STAR-RN 요약
7. 포트폴리오 반영 등급

   * Main
   * Supporting
   * Archive
   * Exclude
8. 보완하면 좋은 점

2026 트렌드 연결 기준:
각 프로젝트마다 억지로 트렌드를 붙이지 않는다.
실제로 연결 가능한 경우에만 아래 키워드와 연결한다.

* Production-ready AI
* Real-time Edge/Streaming AI
* Data-centric AI
* AI Evaluation
* AI Observability
* Domain-specific RAG
* AI-native Development Workflow
* Privacy & Trust
* Human-in-the-loop AI
* Automation Pipeline
* Cloud-native Deployment

포트폴리오 전체 포지셔닝:
메인 문구는 아래 방향으로 다듬는다.

“실시간 영상 AI와 RAG 기반 지식 시스템을 중심으로, 모델 개발부터 데이터 분석, 운영 안정화, 검증, 문서화까지 연결하는 Applied AI Engineer 포트폴리오”

또는 더 간결하게:

“모델을 만드는 데서 끝나지 않고, 실제 서비스에서 AI가 안정적으로 동작하도록 데이터·모델·통신·검증·문서화를 연결하는 AI Engineer”

산출물:
아래 문서를 생성하거나 개선한다.

* portfolio-summary-2026-ai-engineer.md
* smart-safety-ai-case-study.md
* llm-wiki-rag-case-study.md
* project-star-rn-stories.md
* project-selection-matrix.md

필요하다면 기존 README 또는 포트폴리오 사이트의 Projects 섹션 문구도 개선한다.

문서별 요구사항:

1. portfolio-summary-2026-ai-engineer.md

   * 전체 포트폴리오 소개
   * 핵심 역량 요약
   * 대표 프로젝트 2~3개
   * 2026 트렌드 연결
   * 지원 직무와의 연결성

2. smart-safety-ai-case-study.md

   * 문제정의
   * 아키텍처
   * 내 역할
   * 핵심 구현
   * 실험/검증
   * 기술적 난관
   * 성과
   * STAR-RN
   * 향후 개선

3. llm-wiki-rag-case-study.md

   * 문제정의
   * RAG 도입 이유
   * Hybrid Search 방향
   * Evidence Wiki 구조
   * 포트폴리오 활용 가치
   * STAR-RN
   * 향후 개선

4. project-star-rn-stories.md

   * 스마트 안전 관제 시스템 상세 STAR-RN
   * LLM Wiki 상세 STAR-RN
   * 기존 프로젝트 중 선별된 프로젝트 STAR-RN
   * 면접 답변용 1분 버전
   * 자기소개서용 문단 버전

5. project-selection-matrix.md

   * 기존 프로젝트 목록
   * 포트폴리오 적합도
   * 직무 연결성
   * 구현 검증 여부
   * 성과 수치 여부
   * 최종 반영 등급

제약:

* 실제 구현하지 않은 기능을 구현 완료처럼 쓰지 않는다.
* 구현 여부가 불확실한 내용은 “Planned”, “Experimental”, “Next Step”으로 분리한다.
* 마음이음 프로젝트는 이번 핵심 범위에서 제외한다.
* 기존 코드 동작을 수정하지 말고, 문서/README/포트폴리오 정리 중심으로 진행한다.
* secret, token, DB password, API key는 문서에 절대 노출하지 않는다.
* Git 저장소가 없거나 접근할 수 없으면 억지로 추측하지 말고, LLM Wiki 기준으로 초안 작성 후 “Git 구현 검증 필요” 항목을 남긴다.
* LLM Wiki와 Git 내용이 충돌하면 Git의 실제 구현 상태를 우선한다.
* 성과 수치가 확인되지 않으면 임의로 만들지 않는다.
* 수치가 없을 경우 정성 성과와 산출물 중심으로 작성한다.
* 문체는 취업 포트폴리오용으로 명확하고 실무적으로 작성한다.
* 너무 연구 논문처럼 쓰지 말고, “문제 → 접근 → 수행 → 성과 → 배운 점 → 다음 개선” 흐름을 유지한다.
* 긴 작업 중 오류가 나면 중간 저장/checkpoint를 남기고, 어디까지 완료했는지 보고한다.
* 토큰/컨텍스트가 부족해 중단될 경우 반드시 다음을 남긴다.

  * 완료한 작업
  * 변경한 파일
  * 실행한 검증
  * 미완료 작업
  * 다음에 이어서 실행할 정확한 명령 또는 후속 goal

검증:

* 문서만 수정한 경우 markdown 문법과 내부 링크를 확인한다.
* 포트폴리오 프론트 UI를 수정한 경우 npm run build를 실행한다.
* 테스트가 있으면 npm test도 실행한다.
* 검증 명령이 실패하면 원인을 요약하고, 가능한 범위에서 수정 후 재검증한다.

끝내기 전:

* 읽은 자료 목록 요약
* 기존 프로젝트 목록과 포트폴리오 반영 등급 요약
* 변경한 파일 목록 요약
* 스마트 안전 관제 시스템에서 구현된 내용 / 실험 중인 내용 / 향후 계획 구분
* LLM Wiki에서 포트폴리오에 반영한 핵심 내용 요약
* 프로젝트별 STAR-RN 요약
* 문제정의/접근방식/수행내용/성과가 강화된 부분 요약
* 실행한 검증 명령과 결과 요약
* 아직 Git으로 검증하지 못한 내용이 있다면 별도 목록으로 남긴다.

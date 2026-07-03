# AI Engineer Resume Project Bullets

## 사용 원칙

- **강한 표현:** Git/README/포트폴리오 문서에서 비교적 명확히 확인된 내용.
- **중간 표현:** 포트폴리오 문서와 웹 프로젝트에 표시되지만 세부 Git 검증은 추가로 하면 좋은 내용.
- **보수적 표현:** 구현 여부나 정량 수치가 불확실해 설계, 실험, 개선 방향으로만 써야 하는 내용.

## 스마트 안전 관제 시스템

### 강한 표현

- CCTV 관제자가 모든 화면을 24시간 동일한 집중도로 확인하기 어렵다는 문제를, AI가 판단 공백을 줄이는 실시간 관제 보조 시스템 문제로 재정의.
- RTSP 영상 입력, AI 추론, MQTT 이벤트, WebSocket 알림으로 이어지는 실시간 관제 이벤트 파이프라인 구조 정리.
- 영상 스트림과 AI event metadata를 분리해 overlay 동기화와 사후 오류 분석이 가능한 구조로 설계.
- frameId/timestamp/evidence chain 기반으로 AI 이벤트와 영상 증거를 연결하는 관점 정리.

### 중간 표현

- cameraLoginId 기반 다중 카메라 처리 흐름을 고려해 고정 camera 구조의 한계를 개선 방향으로 정리.
- FP/FN 분석을 통해 hard negative 재학습 후보를 도출하는 데이터 중심 개선 방향 수립.
- threshold, tracker state, frame drop, active_tracks=0 상태를 운영 안정성 분석 항목으로 분리.

### 보수적 표현

- YOLO Pose 기반 keypoint 추출과 LSTM 시계열 행동 분류 구조를 이상행동 탐지 파이프라인의 핵심 설계로 정리. 단, Git 구현 검증 전에는 "구현 완료"로 단정하지 않음.
- Recall, Precision, F1, FP, FN, latency, FPS는 실험 로그 확보 전까지 이력서에 수치로 기재하지 않음.
- Langfuse/observability, VLM/Agentic 기능은 향후 확장 후보로만 표현.

## LLM Wiki / Evidence Wiki / RAG

### 강한 표현

- 실험 결과, 오류 해결, 의사결정 기록이 흩어지는 문제를 검색 가능한 Evidence Wiki로 구조화.
- RAG answer/source/debug UI와 walkthrough, validation log, 빌드/테스트 기록을 근거로 포트폴리오와 면접 답변에 재사용 가능한 자료 체계 구축.
- 개발 기록을 단순 메모가 아니라 source evidence 기반 지식 자산으로 전환.

### 중간 표현

- metadata filtering, BM25, vector search, RRF를 결합하는 Hybrid Search 구조 설계.
- 근거 기반 답변과 source 연결을 통해 hallucination을 줄이는 RAG 사용 방향 정리.
- 포트폴리오 문구, 트러블슈팅, 면접 답변을 같은 evidence repository에서 재사용하도록 문서 구조 설계.

### 보수적 표현

- Optional re-ranking은 고도화 후보로 표현.
- GraphRAG는 문서 관계와 규모가 커졌을 때의 향후 확장 후보로만 표현.
- 실제 검색 인덱스 코드 전체와 배포 환경은 추가 검증 필요로 남김.

## RF-DETR 실시간 용종 검출

### 강한 표현

- 대장 내시경 영상의 조명 변화, 반사광, 장벽 왜곡 문제를 Data-centric 객체 탐지 문제로 재정의.
- Grid Distortion, Elastic Deform 기반 데이터 증강 파이프라인으로 의료 영상 왜곡을 학습 단계에 반영.
- RF-DETR + DINOv2 기반 파인튜닝 및 OpenCV 기반 실시간 추론 시각화 구성.
- 기존 자료 기준 mAP 약 7%p 개선, 22 FPS 이상 Edge 추론 성능 확보.
- 제17회 건양대학교 캡스톤디자인 경진대회 금상/대상 및 전국 공학교육혁신 컨소시엄 동상 수상.

### 중간 표현

- Structural Pruning을 적용해 Edge 환경의 연산 제약에 대응.
- 의료 영상 문제에서 모델 체급 확대보다 데이터 특성 기반 개선이 더 효과적이라는 판단 도출.

### 보수적 표현

- 실제 benchmark table, inference latency log, 데이터셋 split은 추가 확보 시 이력서 설득력 강화.

## VAE 기반 비지도 유방암 병변 검출

### 강한 표현

- 라벨링 비용이 높은 유방 초음파 환경을 정상 조직 기반 비지도 이상 탐지 문제로 재정의.
- VAE 기반 정상 분포 학습 후 Reconstruction Error Map으로 병변 후보 영역 추출.
- KLD/MSE 균형을 조정하는 커스텀 손실 함수와 Dynamic Threshold 후처리 적용.
- 로컬 README 기준 max 90% Dice Coefficient 달성, 2024 창의혁신 DNA 산학협력 공학혁신상 수상.

### 중간 표현

- 영상별 밝기/노이즈 편차에 대응하기 위해 고정 임계값 대신 동적 임계값 기반 후처리 적용.
- 의료 AI에서 모델 구조뿐 아니라 후처리와 평가 기준이 결과 품질을 좌우한다는 점 확인.

### 보수적 표현

- 데이터셋 분리, 평가 스크립트, FP/FN 사례 분석은 추가 검증 필요.

## FullCount

### 강한 표현

- Spring Boot, JPA, MySQL 기반 에스크로 거래 상태 전이와 DB 관계 설계.
- WebSocket/STOMP 기반 이벤트 Push 구조로 실시간 거래 상태 동기화 구현.
- 기존 포트폴리오 문서 기준 API Polling 대비 DB I/O 80% 절감.

### 중간 표현

- JWT 인증 흐름과 React-Spring Boot 권한 응답 정합성 개선.
- AI Engineer 이력서에서는 실시간 이벤트 처리와 백엔드 무결성 경험으로 보조 반영.

### 보수적 표현

- 실제 repo README, commit, 부하 테스트 로그는 추가 확인 필요.

## Lumina Capital

### 강한 표현

- 외부 금융 API 동기 스크래핑 문제를 비동기 스케줄러 + DB 캐싱 구조로 분리.
- Streamlit session_state 기반 사용자 입력 상태 보존.

### 중간 표현

- 외부 서버 지연이 서비스 렌더링 지연으로 전파되지 않도록 데이터 수집 계층과 서비스 계층 분리.
- AI Engineer 이력서에서는 데이터 파이프라인과 서비스 안정성 개선 경험으로 보조 반영.

### 보수적 표현

- API timeout 0% 수치는 기존 문서 기준이며, 실제 로그가 있으면 함께 제시하는 것이 좋음.

## 블로그 자동화 파이프라인

### 강한 표현

- Gemini API 기반으로 학습 메모를 기술 블로그 초안으로 변환하는 자동화 흐름 구성.
- 제목/태그 규칙, 금지 내용 방지, SEO 키워드 반영 등 프롬프트 제약 설계.

### 중간 표현

- AI-native automation과 문서화 생산성 개선 경험으로 보조 반영.

### 보수적 표현

- Git 저장소가 없으므로 로컬 파일 검증 기준으로만 작성.
- prompt regression test, 금칙어 검사, publish workflow 자동화는 향후 개선으로 표현.

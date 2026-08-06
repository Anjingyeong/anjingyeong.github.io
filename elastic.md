개발 과정의 지식화를 통한 스마트 안전관제 Wiki 구축
1. 프로젝트 개요

스마트 안전관제 시스템을 개발하며 AI 추론, 실시간 스트리밍, 이벤트 전달, 백엔드 저장, 프론트 알림까지 여러 영역에서 다양한 기술적 문제가 발생했다.

프로젝트가 진행될수록 문제의 원인과 해결 과정이 Git 커밋, 메신저, 개인 메모, 코드 내부에 흩어졌고, 시간이 지난 뒤 같은 문제를 다시 분석하거나 다른 팀원이 구조를 이해하는 데 많은 시간이 필요했다.

이를 해결하기 위해 개발 과정에서 발생한 문제, 실험 결과, 설계 판단과 코드 근거를 구조화한 프로젝트 전용 기술 Wiki를 구축했다.

2. 문제 인식

스마트 안전관제 시스템은 다음과 같이 여러 기술 영역이 연결된 프로젝트였다.

RTSP 영상 수신
→ AI 이상행동 탐지
→ 객체 추적 및 상태 판정
→ MQTT 이벤트 전달
→ 백엔드 저장 및 WebSocket 전파
→ 프론트 관제 화면 표시
→ 사고 영상·VLM 후처리

개발 과정에서는 다음과 같은 문제가 반복적으로 발생했다.

RTSP 지연과 오래된 프레임 누적
낙상 중 트래킹 ID가 끊기는 현상
동일 사고의 중복 알림
AI 이벤트와 화면 Overlay의 시간 불일치
WebRTC 프리즈 및 HLS 재생 실패
TensorRT 적용 전후 성능 비교
VLM 후처리와 실시간 탐지 경로의 분리
구현된 기능과 계획 단계 기능의 혼재

단순한 개발 기록만으로는 이러한 문제의 원인, 해결 방식, 트레이드오프, 실제 코드 위치를 빠르게 파악하기 어려웠다.

3. 해결 방법: 프로젝트 지식화

개발 중 생성된 정보를 단순 회고가 아니라 다시 검색하고 활용할 수 있는 지식으로 변환했다.

지식화 대상
구분	기록한 내용
Architecture	AI·Backend·Frontend·Infra 연결 구조
Engineering Decision	기술 선택 이유와 대안 비교
Bug Report	문제 증상, 원인, 해결 방식
Experiment	모델·추론·스트리밍 성능 수치
Event Contract	MQTT Payload와 동기화 규칙
Source Map	실제 구현 코드와 문서 연결
Implementation Status	계획·구현·검증·폐기 상태

문서에는 설명만 적지 않고 가능한 경우 실제 코드 경로를 함께 기록했다.

AI 상태 머신
→ ai/ai/action/fall_event_state.py

RTSP 최신 프레임 큐
→ ai/stream/frame_queue.py

MQTT 이벤트 수신
→ back/.../MqttSafetyEventSubscriber.java

중복 알림 억제
→ back/.../AlertEventService.java

프론트 STOMP/SSE 재연결
→ front/src/... hooks

이를 통해 “기능이 있다고 문서에 적혀 있는 상태”와 “실제 소스코드에 구현되어 있는 상태”를 구분할 수 있도록 했다.

4. Wiki 검색 구조

Markdown 문서를 검색 가능한 단위로 변환하는 RAG 인덱싱 파이프라인을 구성했다.

Markdown 문서
→ Frontmatter 분석
→ 제목·섹션 기반 구조적 Chunk 분할
→ Contextual Prefix 생성
→ 256차원 로컬 임베딩
→ 검색 인덱스 생성

각 Chunk에는 다음 메타데이터를 포함했다.

문서 제목과 Slug
섹션 제목과 Heading Path
Category와 Tag
관련 문서
코드 심벌
참조된 파일
구현 상태
임베딩
Content Hash

변경되지 않은 Chunk는 기존 임베딩을 재사용하는 증분 인덱싱도 적용했다.

현재 인덱스 규모
Wiki 문서: 50개
RAG Chunk: 737개
증분 인덱싱 재사용: 728개
신규 생성: 9개
누락 문서: 0개
5. 자체 검색 기준선 구축

Elasticsearch를 도입하기 전에 현재 검색 구조의 성능을 먼저 측정했다.

비교한 검색 방식은 다음과 같다.

Vector 검색
BM25 검색
Vector와 BM25를 결합한 Hybrid RRF 검색

평가는 동일한 61개 질의를 사용했다.

전체 질의: 61개
답변 가능 질의: 56개
답변 불가능 질의: 5개
Top-K: 5
기준선 평가 결과
검색 방식	Hit@5	Recall@5	MRR	nDCG@5	No-result 정확도	p95
Vector	69.64%	46.13%	0.5696	0.4618	0%	2.45ms
BM25	75.00%	50.00%	0.6369	0.4977	40%	127.73ms
Hybrid	82.14%	61.01%	0.6875	0.5884	100%	171.89ms

Hybrid 검색은 Vector 검색 대비 다음과 같이 개선됐다.

Hit@5: +12.50%p
Recall@5: +14.88%p
MRR: +0.1179

다만 품질이 높아진 대신 애플리케이션에서 모든 Chunk를 직접 계산하기 때문에 검색 지연이 증가했다.

이 측정을 통해 Elasticsearch 도입을 단순한 기술 추가가 아니라, 다음 문제를 해결하기 위한 고도화 작업으로 정의했다.

문서 수 증가에 따른 전체 벡터 순회 비용
BM25 계산 비용
검색 인덱스의 외부 분리
대규모 문서에 대한 확장성 확보
검색 품질과 지연 시간의 객관적 비교
6. Elasticsearch 학습 및 적용

기존 검색을 바로 제거하지 않고, Legacy 검색을 유지한 상태에서 Elasticsearch Provider를 별도로 설계했다.

Legacy Provider
├─ 자체 BM25
├─ 로컬 Vector 검색
└─ RRF

Elasticsearch Provider
├─ Elasticsearch BM25
├─ dense_vector kNN
├─ HNSW
├─ Metadata Filter
├─ Bulk Indexing
└─ BM25 + kNN RRF
구현한 검색 기능
BM25 검색

제목과 코드 심벌처럼 중요도가 높은 필드에 가중치를 적용했다.

codeSymbols^6
title^5
displayTitle^4
tags^3
entities^3
headingPath^2.5
sectionTitle^2.5
summary^1.5
content

이를 통해 자연어 질문뿐 아니라 다음과 같은 코드 중심 질의도 검색할 수 있도록 설계했다.

frameId
TensorRT
CameraFrameQueue
fall state machine
MQTT event payload
Vector 검색

기존 Wiki에서 생성한 256차원 임베딩을 Elasticsearch의 dense_vector 필드에 저장하도록 구성했다.

dimensions: 256
similarity: cosine
index type: int8_hnsw
Hybrid 검색

BM25 결과와 kNN 결과를 각각 검색한 뒤 RRF로 결합했다.

BM25 결과 ─┐
            ├─ Reciprocal Rank Fusion → 최종 순위
kNN 결과 ──┘

특정 검색 방식의 점수 크기에 의존하지 않고, 두 검색 결과에 반복적으로 등장하는 문서를 상위에 배치하도록 했다.

Bulk 색인

RAG JSON 인덱스를 Elasticsearch 형식으로 변환한 뒤 200개 단위로 _bulk 색인하도록 구현했다.

data/ragVectorIndex.json
→ Elasticsearch 문서 변환
→ Index Mapping 생성
→ Bulk 색인
→ Refresh
→ 색인 문서 수 검증

Bulk 작업 중 일부 문서라도 실패하면 실패 항목을 출력하고 작업을 중단하도록 구성했다.

7. 기존 기능을 보호한 점진적 전환

Elasticsearch를 기존 검색 코드에 직접 결합하지 않고 별도 Provider로 분리했다.

SEARCH_PROVIDER=legacy
SEARCH_PROVIDER=elasticsearch

Elasticsearch 연결이 실패하더라도 기존 Legacy 검색을 사용할 수 있는 구조를 목표로 했다.

이를 통해 다음 원칙을 적용했다.

기존 서비스 동작 보존
새로운 검색 기술의 독립 검증
동일 평가셋 기반 비교
문제가 발생하면 즉시 Legacy로 복구
측정 결과가 기준을 충족할 때만 전환

포트폴리오에서는 이를 다음과 같이 설명할 수 있다.

기존 기능을 한 번에 교체하지 않고 Legacy 검색 경로를 보존한 상태에서 Elasticsearch Provider를 추가했습니다. 새로운 기술을 적용하기 전에 기존 검색의 품질과 지연 시간을 먼저 측정하고, 동일한 평가셋을 통해 점진적으로 전환할 수 있도록 설계했습니다.

8. 검증 결과

Elasticsearch Mapping, 문서 변환, RRF 동작을 검증하는 테스트를 추가했다.

Elasticsearch 신규 테스트: 3개 통과
전체 회귀 테스트: 92개 통과
실패: 0개
TypeScript 빌드: 통과
Vite Production Build: 통과

Elasticsearch 구현으로 기존 검색과 Wiki 기능에 회귀가 발생하지 않는 것을 확인했다.

다만 현재 단계에서는 Docker Desktop 엔진 문제로 실제 Elasticsearch 컨테이너 색인과 61개 평가셋 전체 실측은 완료하지 못했다.

따라서 현재 상태를 정확히 구분하면 다음과 같다.

완료
- Elasticsearch Mapping 설계
- Bulk 색인 코드
- BM25 검색 코드
- dense_vector kNN 검색 코드
- RRF Hybrid 검색
- Metadata Filter
- 단위 테스트
- 기존 기능 회귀 테스트
- 포트폴리오 문서화

미완료
- 실제 Elasticsearch 컨테이너 색인
- Elastic BM25 61개 질의 평가
- Elastic kNN 61개 질의 평가
- Elastic Hybrid 61개 질의 평가
- Legacy 대비 최종 성능 비교
9. 배운 점
기록보다 구조화가 중요했다

개발 기록을 많이 남기는 것만으로는 지식이 되지 않았다. 문제, 원인, 결정, 코드 근거와 검증 결과가 연결되어야 다시 활용할 수 있었다.

기술 도입 전에 기준선이 필요했다

처음부터 Elasticsearch를 적용했다면 개선 여부를 판단하기 어려웠다. 기존 Vector, BM25, Hybrid 성능을 먼저 측정하면서 새로운 기술의 효과를 비교할 기준을 마련했다.

검색 품질과 속도는 트레이드오프였다

Vector 검색은 빠르지만 정확도가 낮았고, Hybrid 검색은 정확도가 높지만 계산 비용이 증가했다. 검색 기술은 정확도만이 아니라 지연 시간, 운영 복잡도, 장애 대응까지 함께 고려해야 했다.

구현 여부와 검증 여부를 구분해야 했다

코드가 존재하는 것과 실제 환경에서 검증된 것은 다르다. Wiki에 planned, implemented, verified 상태를 구분하면서 과장 없이 프로젝트 상태를 관리하는 방법을 배웠다.

Wiki도 하나의 소프트웨어 제품이었다

문서를 작성하는 데서 끝나는 것이 아니라 인덱싱, 검색, 테스트, 회귀 검증, 검색 품질 평가가 필요했다. 이를 통해 문서 시스템 역시 지속적으로 관리해야 하는 제품이라는 점을 배웠다.

포트폴리오 요약 문구
한 문장 버전

스마트 안전관제 시스템 개발 과정에서 발생한 문제와 설계 판단을 코드 근거와 함께 지식화한 기술 Wiki를 구축하고, 자체 BM25·Vector·RRF 검색의 성능을 측정한 뒤 Elasticsearch 기반 BM25·HNSW kNN·Hybrid 검색 구조를 설계하고 구현했습니다.

두세 문장 버전

스마트 안전관제 시스템은 AI, 스트리밍, MQTT, 백엔드, 프론트가 연결된 복합 프로젝트였기 때문에 개발 과정에서 발생한 문제와 해결 방법이 여러 저장소에 분산되는 문제가 있었습니다. 이를 해결하기 위해 실제 코드 경로, 실험 수치, 설계 판단과 구현 상태를 연결한 프로젝트 Wiki를 구축했습니다. 이후 61개 평가 질의로 기존 검색 성능을 측정하고, 검색 확장성을 개선하기 위해 Elasticsearch 기반 BM25·dense_vector kNN·RRF Hybrid 검색 Provider를 구현했습니다.

이력서 프로젝트 Bullet
AI·Backend·Frontend·Infra 4개 저장소의 구현 코드를 분석해 기술 결정, 장애 원인, 실험 결과를 구조화한 프로젝트 Wiki 구축
Markdown 문서를 737개 구조적 Chunk로 변환하고 메타데이터·코드 심벌·256차원 임베딩 기반 RAG 검색 인덱스 구현
61개 Golden Query 평가셋을 구성해 Vector, BM25, Hybrid 검색 품질과 p95 지연 시간 측정
Hybrid 검색에서 Hit@5 82.14%, Recall@5 61.01%, MRR 0.6875 기록
Elasticsearch BM25, dense_vector kNN, HNSW, Metadata Filter, Bulk Indexing 및 RRF 검색 Provider 구현
Elasticsearch 도입 후에도 기존 Legacy 검색을 유지하는 점진적 전환 및 fallback 구조 설계
신규·회귀 테스트 총 92개 통과로 기존 Wiki 및 검색 기능의 안정성 검증
면접 답변형

스마트 안전관제 시스템을 개발하면서 기술적 문제의 해결 과정이 Git 커밋이나 개인 메모에 흩어져 같은 문제를 다시 분석하는 일이 많았습니다. 그래서 실제 코드 경로, 장애 원인, 실험 수치와 설계 판단을 연결한 프로젝트 Wiki를 만들었습니다. 단순 키워드 검색에 그치지 않고 문서를 구조적으로 Chunking하고 Vector와 BM25를 결합한 RAG 검색을 구현했으며, 61개의 평가 질의를 만들어 검색 성능도 측정했습니다. 이후 문서가 늘어날 때의 확장성을 고려해 Elasticsearch의 BM25, dense vector kNN, HNSW와 RRF를 학습하고 별도 Provider로 구현했습니다. 이 과정에서 새로운 기술을 바로 도입하기보다 기존 성능을 먼저 측정하고, Legacy 경로를 보존한 채 점진적으로 전환하는 것이 중요하다는 점을 배웠습니다.

포트폴리오에서는 “Elasticsearch를 공부해봤다”보다 “기존 검색의 한계를 수치로 확인하고, 해결 방법으로 Elasticsearch를 학습·설계·구현했다”라고 표현하는 것이 더 좋아. 다만 실제 컨테이너 기반 성능 측정이 끝나기 전까지는 “성능을 개선했다”가 아니라 “비교 평가가 가능한 구조까지 구현했다”고 적는 것이 정확해.
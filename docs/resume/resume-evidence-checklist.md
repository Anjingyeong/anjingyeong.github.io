# 이력서 제출 전 확인 체크리스트 (내부 메모 — 제출 파일에 포함하지 말 것)

이 파일은 제출용 2페이지 단축 이력서(ai-security-resume-short.md) 제출 전 검토 및 면접 준비를 위한 내부 메모입니다.
이력서 본문에 노출하지 마십시오.

---

## 1. 이력서 본문에 기재된 수치 및 팩트 — 원본 근거 확인 완료

| 수치 / 팩트 | 출처 파일 | 상태 |
|:---|:---|:---|
| Faint Recall 0.774547, F1 0.756179, Accuracy 0.773186 (threshold 0.5) | LSTM-Experiment-Results.md (stratified source video split, test 2,784개) | ✅ 원본 확인 완료 |
| Faint Recall 0.750877, FN 142 (yolo26n-pose fast comparison) | Model-Decision-YOLO26n.md, LSTM-Experiment-Results.md | ✅ 원본 확인 완료 |
| overlay-sync 테스트 44개 PASS | Multi-Camera-Frame-Latency-Report.md | ✅ 원본 확인 완료 |
| Backend Gradle 빌드 성공, Frontend TypeScript 빌드 성공 | Multi-Camera-Frame-Latency-Report.md | ✅ 원본 확인 완료 |
| Bounded CameraFrameQueue maxsize=3 | Multi-Camera-Frame-Latency-Report.md | ✅ 원본 확인 완료 |
| LSTM sequence_length=30, stride=15, input_size=51 | AI-Pipeline.md, Frame-Sync-Debug-Report.md | ✅ 원본 확인 완료 |
| Kvasir 테스트셋 기준 mAP@50 86.2%, 22+ FPS | Model-Decision-YOLO26n.md, LSTM-Experiment-Results.md (Reference용 Kvasir 스펙 매핑) | ✅ 원본 확인 완료 |

---

## 2. 면접 Q&A 문서 (Interview-RTSP-AI-Safety-System.md) 이동 권장 항목

이력서 분량 및 가독성 확보를 위해 이력서 본문에서 압축되고, 면접용 Q&A 상세 설계 문서에 남겨야 하는 상세 기술 구조들입니다.

### RTSP/CCTV 안전관리 시스템 관련
- **Java DTO JSON 바인딩 문제 상세:** 백엔드 Java DTO의 엄격한 JSON 바인딩(정의되지 않은 필드 무시) 및 메시지 필터로 동기화 메타데이터가 프론트엔드로 전달되지 않고 유실되었던 현상 및 해결 구조.
- **payload (schemaVersion 1.1) 상세 구조:** frameId, capturedAtMs, processedAtMs, publishedAtMs를 포함한 overlay_topic 페이로드 JSON 세부 스키마 사양.
- **WebRTC WHEP / HLS fallback 판단 근거:** 저지연(1초 이하)을 위해 MediaMTX WHEP 기반 WebRTC를 기본 live view로 선택하고, HLS를 안정적인 fallback으로 분리 유지한 아키텍처적 판단.
- **process allowlist 및 중복 실행 방지:** 다중 카메라 구동 환경에서 simulated publisher 중복 실행 및 port 충돌 방지를 위해 allowlist와 프로세스 단독화를 적용한 안정화 대책.
- **evidenceId 구조:** cameraLoginId-frameId-capturedAtMs를 조합하여 영상 프레임, 오버레이, 알림 이벤트를 단일 체인으로 추적할 수 있도록 한 고유 ID 표준 설계.
- **stage log 진단 지표:** AI 추론 품질의 정량 관리를 위한 fallbackIdRate, missingBBoxRate, trackSwitchCount, avgSelectedDeltaMs 등의 진단 지표 정의.
- **stale stream 감지 로그:** framesDecoded가 증가하지 않는 현상을 감지해 업스트림 공급망 충돌을 원격 진단한 로그.
- **VLM/RAG/S3 확장 계획:** 이벤트 발생 전후 10초 HLS 클립의 S3 presigned URL을 통한 전송 구조 설계 및 사건 지식화 RAG 구조 등의 고도화 설계 내용.

### 기타 프로젝트 관련
- **RF-DETR 용종 탐지:** Grid Distortion, Elastic Deformation 기반 기하학적 왜곡 데이터 증강 파이프라인의 실효성과 Kvasir 데이터셋 및 베이스라인 모델 성능 편차 분석.
- **VAE 초음파 이상탐지:** Reconstruction Error Map을 활용한 비지도 이상 후보 영역 시각화 구조의 수학적/알고리즘적 접근과 Dynamic Threshold 후처리의 노이즈 편차 적응성 분석.

---

## 3. 이력서 금지 표현 및 완화 필터 (자가 진단표)

| 금지 / 미완화 단어 | 단축 이력서(short) 반영 상태 | 완화 대체 단어 |
|:---|:---|:---|
| 자동 복구 | ❌ 삭제 / 완화 완료 | stale stream 대응 / worker 상태 분리 관리 |
| 수 초 이상 | ❌ 삭제 / 완화 완료 | 오버레이 지연 / 시간 정합성 문제 |
| Java DTO 엄격한 JSON 바인딩 | ❌ 삭제 / 완화 완료 | 동기화 메타데이터 유실 / 전달 구조 개선 |
| schemaVersion 1.1 | ❌ 삭제 / 완화 완료 | 동기화 메타데이터 포함 payload |
| WebRTC WHEP / HLS | ❌ 삭제 / 완화 완료 | 저지연 영상 재생 및 fallback 구조 |
| process allowlist | ❌ 삭제 / 완화 완료 | 중복 실행 및 포트 충돌 방지 / 장애 격리 구조 |
| 진단 가능 / 의료진 대체 | ❌ 삭제 / 완화 완료 | (해당 정성적 문구 전면 제거) |
| 보안 전문가 / AI 전문가 | ❌ 삭제 / 완화 완료 | AI 융합보안 개발자 / AI 개발자 |

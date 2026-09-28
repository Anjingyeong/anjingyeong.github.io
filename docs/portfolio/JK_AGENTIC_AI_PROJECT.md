# JK · Local MCP Coding Runtime — 포트폴리오 정리

## 한 줄 정의

**ChatGPT가 로컬 프로젝트에서 오래, 안전하게, 검증 가능하게 작업하도록 만드는 독립 MCP 코딩 런타임.**

JK 자체가 별도 AI 모델로 추론하는 것이 아니라, ChatGPT의 추론을 실제 개발환경의 File · Shell · Git · E2E 작업으로 연결하는 **Agentic AI 실행·상태·안전 계층**이다.

## 포트폴리오 포지셔닝

- 분류: Agentic AI / AI Platform / Developer Tooling / MCP Runtime
- 형태: 개인 프로젝트
- 기간 표기: 2026 · ongoing
- 공개 저장소: https://github.com/Anjingyeong/jk_free
- 핵심 메시지: **AI가 코드를 생성하는 단계에서 끝내지 않고, 실제 저장소에서 안전하게 수정하고 검증 근거를 남기며 긴 작업을 이어갈 수 있는 실행 하네스를 구현했다.**
- 전체 포트폴리오 서사: **Vision → Realtime System → Platform Integration → Agentic Systems**

## 해결하려던 문제

브라우저의 AI에게 긴 개발 작업을 맡기면 단순 코드 생성 외의 문제가 생긴다.

1. 지금 어떤 프로젝트를 수정하는지 명확해야 한다.
2. 이전 턴의 목표·남은 일·결정을 잃지 않아야 한다.
3. 파일을 읽은 뒤 누군가 수정했다면 오래된 문맥으로 덮어쓰면 안 된다.
4. destructive/network/Git publish 같은 작업은 명확한 승인 경계가 필요하다.
5. “수정했다”가 아니라 typecheck/test/build/E2E가 실제 통과했는지 근거가 필요하다.
6. 긴 작업이나 병렬 작업은 중단·재시작·부분 실패에도 이미 검증된 결과를 보존해야 한다.

JK는 이 문제를 **로컬 실행 런타임의 상태·권한·검증 문제**로 정의했다.

## 구조

```text
User
  ↓
ChatGPT — reasoning / planning / review
  ↓
MCP / Actions
  ↓
JK Hub / Control Plane (OCI deployment)
  ↓
Windows Outbound Executor
  ↓
JK Runtime
  ├─ Project / Role / Permission
  ├─ Work Session / Goal Loop
  ├─ File + Hash Precondition
  ├─ Shell / Git Approval Gate
  ├─ Task Workspace / MASS ULW
  └─ Test / Build / E2E Evidence
  ↓
Selected Local Project
```

### 추론과 실행의 분리

ChatGPT가 문제 분석과 다음 행동을 결정한다. JK는 선택된 프로젝트 범위에서 코드 검색, 파일 수정, shell, Git, E2E를 실행하고 결과를 반환한다. 따라서 포트폴리오에서 JK를 “새 AI 모델”로 설명하지 않고 **AI를 실제 개발환경에 연결하는 실행 인프라**로 설명한다.

### 지속 작업 상태

`goal_intake` / `goal_loop`와 work session을 통해 현재 목표, 완료 항목, pending 작업, 구현 결정, checkpoint, verification을 이어간다. Explorer → Oracle → Implementer → Reviewer → Verifier → Recovery 단계를 사용해 검증 실패 시 같은 수정만 반복하지 않고 가정과 원인을 다시 확인한다.

### 실행 안전성

- 선택된 project/workspace 범위로 작업 제한
- Project lease와 Role/Permission preset
- SHA-256 file precondition 기반 안전 패치
- Network / destructive shell / Git publish 승인 게이트
- secret-looking 값 redaction
- runtime/schema identity 확인
- task ownership으로 동시 작업 충돌 완화

### Task Workspace / MASS ULW

원본 저장소와 분리된 private workspace에서 구현·검증하고, review와 verification 근거가 맞는 변경만 원본에 반영할 수 있다. MASS ULW는 dependency-aware lane으로 작업을 나누고 독립 lane은 병렬 실행하며, 이미 통과한 결과를 보존한다.

## 실제 사용

JK는 데모 전용 프로젝트가 아니라 현재 개발 작업에 직접 사용한다. 프로젝트 선택 → 소스 확인 → 수정 → typecheck/test/build/E2E → 리뷰/반영 흐름을 실제 저장소 작업에 적용한다.

**이번 개발자 포트폴리오에 JK 프로젝트를 추가하는 작업도 JK를 통해 기존 dirty 변경을 확인하고, 현재 소스를 읽은 뒤 안전하게 패치하고 검증하는 방식으로 수행한다.**

## 웹 포트폴리오 문구 기준

### 카드 제목

**JK · 상태·권한·검증을 갖춘 로컬 AI 코딩 런타임**

### 짧은 설명

ChatGPT와 로컬 프로젝트 사이에 MCP 실행 계층을 두고 장기 작업 상태·권한·안전 패치·테스트 증거를 하나의 개발 흐름으로 연결한 Agentic AI Developer Tooling.

### 핵심 키워드

`TypeScript` · `Node.js` · `MCP` · `Agentic AI` · `Developer Tooling` · `Orchestration` · `Git` · `E2E`

### 면접에서 먼저 말할 3가지

1. **왜 만들었는가** — AI 코드 생성보다 실제 로컬 작업의 상태·권한·검증 관리가 더 어려웠기 때문.
2. **어떻게 풀었는가** — ChatGPT 추론과 JK 실행 런타임을 분리하고, work session/goal loop + lease/role/approval/hash guard를 결합.
3. **어떻게 검증하는가** — 수정 자체가 아니라 현재 diff에 연결된 typecheck/test/build/E2E 근거까지 완료 조건으로 관리.

## 과장 방지 경계

- JK 자체가 추론 모델이라고 표현하지 않는다.
- ChatGPT/OpenAI의 모델 성능을 JK의 성과로 표현하지 않는다.
- “완전 자율”, “무중단”, “모든 위험 차단”처럼 검증 범위를 넘는 표현을 쓰지 않는다.
- 외부 OMO/provider는 선택 기능으로만 설명한다.
- 공개 포트폴리오에서는 토큰, 내부 URL, 비밀값을 노출하지 않는다.

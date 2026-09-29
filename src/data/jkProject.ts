import { Workflow } from "lucide-react";
import type { Project } from "./projects";

const jkDagImage =
  "https://raw.githubusercontent.com/Anjingyeong/jk-mcp/main/assets/readme-hero.png";

const jkDetails: Project["details"] = [
  {
    title: "문제 정의 · AI가 코드를 생성하는 것과 로컬 작업을 끝까지 수행하는 것은 달랐습니다",
    body:
      "브라우저의 AI가 긴 개발 작업을 수행하려면 코드 생성만으로는 부족했습니다. 어떤 프로젝트를 수정하는지, 이전 턴에서 무엇을 했는지, 파일이 중간에 바뀌지 않았는지, 위험한 명령을 실행해도 되는지, 테스트가 실제로 통과했는지를 함께 관리해야 했습니다.\n\nJK는 ChatGPT와 로컬 개발환경 사이에 MCP/Actions 기반 실행 계층을 두고, 탐색 → 수정 → 검증 → 재시도 → 반영 과정을 상태가 있는 개발 작업으로 다루기 위해 만든 개인 프로젝트입니다.",
  },
  {
    title: "ChatGPT의 추론과 로컬 실행을 분리한 구조",
    body:
      "JK 자체가 별도의 AI 모델로 추론하는 구조는 아닙니다. 현재 ChatGPT 대화가 문제를 분석하고 다음 행동을 결정하면, JK가 선택된 프로젝트 범위 안에서 코드 검색·파일 수정·shell·Git·E2E 같은 로컬 작업을 실행하고 결과를 다시 반환합니다.\n\n배포 환경에서는 OCI의 hub/control plane과 Windows outbound executor를 분리해, 외부에서 들어오는 요청을 로컬 개발 PC가 outbound 연결로 받아 프로젝트 범위에서 실행할 수 있도록 구성했습니다.",
    diagram: `flowchart LR
    User["사용자"] --> ChatGPT["ChatGPT\\nReasoning"]
    ChatGPT --> MCP["MCP / Actions"]
    MCP --> Hub["JK Hub / Control Plane\\nOCI"]
    Hub --> Executor["Windows Outbound Executor"]
    Executor --> Runtime["JK Runtime\\nOrchestration + Safety"]
    Runtime --> Project["Selected Local Project\\nFile · Shell · Git · E2E"]`,
    note:
      "포트폴리오에서는 JK를 'AI 모델'이 아니라 Agentic AI를 실제 개발환경에 연결하는 실행·상태·안전 계층으로 설명합니다.",
  },
  {
    title: "긴 작업을 이어가기 위해 상태를 구조화했습니다",
    body:
      "작업을 대화 텍스트에만 의존하지 않고 projectId·workSessionId·goalId·loopId로 구분하고, 현재 목표·완료 항목·남은 일·구현 결정·검증 결과를 이어갈 수 있도록 구성했습니다. goal_intake와 goal_loop는 Explorer·Oracle·Implementer·Reviewer·Verifier·Recovery 단계로 작업을 나누고, 실패하면 같은 패치를 반복하기보다 원인과 가정을 다시 확인하도록 흐름을 제어합니다.",
    diagram: `flowchart LR
    Goal["Goal Intake"] --> Inspect["Inspect"]
    Inspect --> Edit["Edit"]
    Edit --> Verify["Verify"]
    Verify -->|"PASS"| Review["Review / Publish"]
    Verify -->|"FAIL"| Recovery["Recovery\\nRe-check hypothesis"]
    Recovery --> Inspect`,
  },
  {
    title: "권한과 변경 안전성을 실행 경로에 넣었습니다",
    items: [
      "**프로젝트 범위 제한**: 선택한 프로젝트와 작업 workspace를 기준으로 파일·명령 실행 범위를 제한합니다.",
      "**Lease · Role · Permission**: project lease와 역할별 permission preset으로 읽기·수정·제어 권한을 분리합니다.",
      "**Hash precondition**: 파일을 읽은 뒤 다른 변경이 생기면 오래된 문맥으로 덮어쓰지 않도록 SHA-256 precondition 기반 패치를 지원합니다.",
      "**Approval gate**: network·destructive shell·Git publish처럼 영향이 큰 작업은 명시적 승인 경계를 둡니다.",
      "**검증 증거**: typecheck·test·build·E2E 결과를 작업 상태와 연결하고, 검증되지 않은 변경을 완료로 간주하지 않도록 설계했습니다.",
    ],
  },
  {
    title: "DAG로 긴 작업을 dependency-aware lane으로 분해했습니다",
    body:
      "긴 요청을 하나의 직렬 작업으로 처리하면 서로 독립적인 작업도 앞 단계가 끝날 때까지 기다리고, 일부 검증 실패가 전체 결과를 흔들 수 있습니다. MASS ULW에서는 goal_loop가 작업을 dependency-aware lane으로 나누고, 선행 조건이 충족된 lane만 ready 상태로 열어 독립적인 lane을 병렬로 진행합니다. 각 lane은 자체 검증과 review를 통과해야 다음 dependency가 열리고, 마지막 integration 단계에서도 전체 검증을 다시 수행합니다.\n\n이 DAG의 목적은 에이전트 수를 늘리는 것이 아니라, 런타임이 '무엇이 아직 안 끝났는지', '어떤 작업이 서로 독립적인지', '어떤 결과가 검증을 통과했는지'를 추적해 긴 작업을 안전하게 합치는 것입니다.",
    image: jkDagImage,
    imageAlt:
      "JK README의 dependency DAG 이미지. 작업을 의존성이 있는 lane으로 분해하고 검증 후 통합하는 흐름을 보여줍니다.",
    note:
      "README 아키텍처 이미지 · DAG는 추론 모델의 내부 사고 과정이 아니라 작업 의존성·실행 순서·검증 상태를 관리하는 런타임 실행 계획입니다.",
  },
  {
    title: "실제로 사용하는 Developer Tooling으로 운영했습니다",
    body:
      "JK는 프로젝트 탐색, 좁은 범위 소스 읽기, 안전 패치, 로컬 shell, Git, 개발 서버와 E2E, 외부 executor 라우팅, runtime/schema health 검증을 하나의 도구 표면으로 제공합니다. Windows launcher/installer와 Control Center도 함께 운영하며 실행 대상·승인·작업 상태를 확인할 수 있도록 구성했습니다.\n\n이 포트폴리오에 JK 프로젝트를 추가하는 작업 역시 JK를 통해 대상 저장소를 선택하고 기존 dirty 변경을 확인한 뒤, 현재 소스를 읽고 수정·테스트하는 흐름으로 진행했습니다.",
    note:
      "JK는 OpenAI와 별개의 독립 프로젝트이며, 추론 모델의 성능을 자체 성과로 주장하지 않습니다. 포트폴리오에서는 로컬 실행·상태 관리·안전장치·검증 자동화의 구현 범위를 중심으로 설명합니다.",
  },
  {
    title: "판단과 배운 점",
    items: [
      "**에이전트 기능보다 상태와 검증 경계가 먼저였습니다**: 도구 호출 수를 늘리는 것보다 어떤 프로젝트와 파일을 수정했는지, 현재 작업이 어디까지 검증됐는지를 런타임이 추적해야 긴 작업을 신뢰할 수 있었습니다.",
      "**추론과 실행을 분리해야 실패 원인을 좁힐 수 있었습니다**: ChatGPT는 판단을 맡고 JK는 실행·권한·상태·검증을 맡도록 경계를 나누면서 모델의 판단 오류와 로컬 실행 실패를 서로 다른 문제로 관찰하고 복구할 수 있었습니다.",
    ],
  },
  {
    title: "핵심 기술 역량",
    items: [
      "MCP/Actions 요청을 로컬 File·Shell·Git·E2E 작업으로 연결하는 Developer Tooling 설계",
      "장기 작업을 goal/work session/checkpoint/verification 상태로 유지하는 orchestration 설계",
      "Lease·Role·Permission·Approval·Hash precondition을 결합한 안전한 실행 경계 설계",
      "OCI hub/control plane과 Windows outbound executor를 분리한 원격 실행 토폴로지 운영",
      "검증 실패를 작업 상태에 반영하고 재분석·복구로 전환하는 inspect → edit → verify 루프 구현",
    ],
  },
];

export const jkAiProject: Project = {
  icon: Workflow,
  badge: "Supporting",
  title: "JK · 상태·권한·검증을 갖춘 로컬 AI 코딩 런타임",
  summaryLine:
    "ChatGPT와 로컬 프로젝트 사이에 MCP 실행 계층을 두고 장기 작업 상태·권한·안전 패치·테스트 증거를 하나의 개발 흐름으로 연결한 Agentic AI Developer Tooling",
  description:
    "별도 AI 모델을 만드는 대신 ChatGPT의 추론을 로컬 개발환경에 안전하게 연결했습니다. work session과 goal loop로 작업 맥락을 유지하고, project lease·Role/permission·SHA-256 patch precondition·승인 게이트·검증 증거로 실제 저장소 변경을 통제합니다.",
  meta: {
    period: "2026 · ongoing",
    role: "개인 프로젝트 · MCP 런타임, orchestration, Windows executor, 운영 도구 설계·구현",
    service: "JK Local MCP Coding Runtime",
  },
  story: {
    asIs:
      "AI가 코드를 제안하는 것과 실제 로컬 저장소에서 긴 작업을 안전하게 이어서 수정·검증하는 것 사이에는 프로젝트 범위, 상태 유실, 동시 변경, 승인, 완료 판정 문제가 있었습니다.",
    task:
      "ChatGPT의 추론은 그대로 활용하면서 로컬 실행을 별도 계층으로 분리하고, 작업 상태와 권한·검증 근거가 남는 실행 하네스를 만들어야 했습니다.",
    action:
      "MCP/Actions → JK Runtime → local tools 구조를 만들고 work session·goal loop, project lease·Role/permission, hash precondition, approval gate, task workspace와 E2E/QA 흐름을 연결했습니다.",
    toBe:
      "프로젝트 선택 → 소스 확인 → 수정 → 테스트/E2E → 리뷰·반영을 하나의 상태 기반 흐름으로 수행하고, 중단 후에도 같은 작업 세션을 이어갈 수 있는 로컬 코딩 런타임으로 운영하고 있습니다.",
  },
  highlights: [
    "MCP / Actions → Local Runtime",
    "Durable Work Session · goal_loop",
    "Dependency DAG · MASS ULW",
    "Lease · Role · Approval · Hash Guard",
  ],
  tags: [
    "TypeScript",
    "Node.js",
    "MCP",
    "Agentic AI",
    "Developer Tooling",
    "Orchestration",
    "Git",
    "E2E",
  ],
  gradient: "from-violet-500/10 to-blue-500/10",
  githubUrl: "https://github.com/Anjingyeong/jk-mcp",
  heroImage: {
    src: jkDagImage,
    caption:
      "Goal을 dependency-aware lane으로 분해하고, lane별 검증·review를 통과한 결과만 최종 integration에 반영하는 JK의 DAG 실행 구조",
  },
  details: jkDetails,
};

export const jkFullstackProject: Project = {
  ...jkAiProject,
  title: "JK · ChatGPT와 로컬 개발환경을 연결한 MCP 코딩 런타임",
  summaryLine:
    "MCP/Actions 요청을 프로젝트 범위의 File·Shell·Git·E2E 실행으로 라우팅하고, 상태·권한·검증을 유지하도록 만든 TypeScript/Node.js 기반 Developer Tooling",
  description:
    "ChatGPT의 추론과 로컬 실행을 분리하고, OCI hub/control plane과 Windows outbound executor를 연결해 프로젝트 단위 실행을 구성했습니다. 작업 상태·권한·승인·hash precondition·검증 결과를 런타임에서 관리해 실제 개발 작업을 안전하게 이어가도록 설계했습니다.",
  meta: {
    period: "2026 · ongoing",
    role: "개인 프로젝트 · TypeScript/Node.js 런타임, executor, orchestration, 운영 UI",
    service: "JK Local MCP Coding Runtime",
  },
};

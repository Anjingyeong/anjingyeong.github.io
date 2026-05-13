import { useState } from "react";
import ScrollAnimator from "./ScrollAnimator";
import { Microscope, Eye, LineChart, ArrowUpRight, X, Database, Server, RefreshCw } from "lucide-react";

type ProjectType = {
  icon: React.ElementType;
  title: string;
  description: string;
  longDescription?: React.ReactNode;
  highlights: string[];
  tags: string[];
  gradient: string;
  images?: { src: string; caption: string }[];
  videoUrl?: string;
  githubUrl?: string;
  hasAwards?: boolean;
};

const projects: ProjectType[] = [
  {
    icon: Server,
    title: "FullCount (실시간 야구 커뮤니티)",
    description: "스포츠 커뮤니티 특성상 경기 시간에 트래픽과 데이터 갱신이 급증할 것을 선제적으로 가정하고, 이를 견딜 수 있는 튼튼한 풀스택 웹 인프라 설계에 집중한 아키텍처 시뮬레이션 프로젝트입니다.",
    longDescription: (
      <div className="space-y-6 text-base text-foreground/90">
        <div className="bg-muted/30 p-4 rounded-xl border border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div><strong className="text-foreground">기간:</strong> 2026.03.27 ~ 2026.04.08 (약 2주)</div>
            <div className="md:col-span-2"><strong className="text-foreground">역할:</strong> 팀 리더 / 풀스택 시스템 아키텍처 설계 및 총괄 (5인 팀)</div>
            <div className="md:col-span-2"><strong className="text-foreground">기술 스택:</strong> React, Spring Boot, MySQL, JPA, WebSockets, STOMP</div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-slate-500 rounded-full inline-block"></span> Situation
          </h4>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            KBO 티켓 양도 서비스에서는 판매자와 구매자의 거래 상태가 실시간으로 맞아야 했습니다. 특히 에스크로 흐름이 포함되어 있어 상태 전이가 꼬이면 결제, 취소, 거래 완료 과정에서 데이터 불일치가 발생할 수 있었습니다.<br />
            초기 구조에서는 클라이언트가 상태를 반복 조회하는 방식이었고, 사용자가 늘어날수록 불필요한 API 요청과 DB 조회가 늘어날 수 있는 문제가 있었습니다.
          </p>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-rose-500 rounded-full inline-block"></span> Task
          </h4>
          <ul className="list-disc pl-8 space-y-2 text-muted-foreground">
            <li>에스크로 거래 상태를 명확한 단계로 정의하기</li>
            <li>판매자/구매자/티켓/거래 상태 간의 DB 관계 설계하기</li>
            <li>상태 변경이 발생했을 때 프론트엔드 화면이 즉시 갱신되도록 만들기</li>
            <li>React 프론트엔드와 Spring Boot 백엔드의 인증 및 API 응답 흐름 맞추기</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span> Action
          </h4>
          <ul className="list-disc pl-8 space-y-3 text-muted-foreground">
            <li>에스크로 거래 흐름을 등록, 요청, 승인, 결제, 완료/취소 단계로 나누고 각 상태 전이에 필요한 DB 관계를 설계했습니다.</li>
            <li>Spring Boot와 JPA 기반으로 거래 상태 변경 API를 구현하고, 상태 변경 시 관련 클라이언트에 이벤트가 전달되도록 WebSocket/STOMP 구조를 적용했습니다.</li>
            <li>React 화면에서 거래 상태가 바뀔 때마다 전체 데이터를 다시 조회하는 방식 대신, 서버 이벤트를 받아 필요한 화면만 갱신하도록 연동했습니다.</li>
            <li>JWT 기반 인증 흐름을 구성하고, 프론트엔드 라우팅과 백엔드 권한 응답이 맞지 않아 발생하던 접근 제어 문제를 확인하며 수정했습니다.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-emerald-500 rounded-full inline-block"></span> Result
          </h4>
          <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10 ml-4">
            <ul className="list-disc pl-4 space-y-2 text-sm leading-relaxed text-foreground/80">
              <li>반복 조회 중심의 상태 확인 방식을 이벤트 기반 Push 구조로 바꾸어 불필요한 요청을 줄였습니다.</li>
              <li>거래 상태 변경이 프론트엔드에 바로 반영되도록 만들어 실시간 서비스에 가까운 사용자 경험을 구현했습니다.</li>
              <li>금전 거래가 포함된 도메인에서 상태 전이, 데이터 무결성, 인증 흐름이 왜 중요한지 직접 경험했습니다.</li>
            </ul>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-purple-500 rounded-full inline-block"></span> Learned
          </h4>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            이 프로젝트를 통해 단순히 API를 만드는 것보다, 상태가 바뀌는 순서와 실패 케이스를 먼저 설계하는 것이 중요하다는 점을 배웠습니다. 특히 실시간 기능은 WebSocket을 붙이는 것보다, 어떤 이벤트를 언제 누구에게 보낼지 정하는 일이 더 중요했습니다.
          </p>
        </div>
      </div>
    ),
    highlights: ["풀스택 파이프라인 설계", "하이브리드 보안", "무결성 기반 에스크로"],
    tags: ["React", "Spring Boot", "STOMP/WebSockets", "Redis Pub/Sub", "JWT"],
    gradient: "from-emerald-500/10 to-teal-500/10",
    githubUrl: "https://github.com/Rookies5-MiniPj2-Team5",
    images: [
      { src: "https://github.com/user-attachments/assets/b20b91f3-1c1a-4f1a-a44d-3177ebf97409", caption: "KBO 경기 일정 및 실시간 경기 현황 조회 화면" },
      { src: "https://github.com/user-attachments/assets/5fa43941-2a73-484a-b7fc-c33f4d93a604", caption: "이메일 기반 회원가입 · JWT 인증 및 KBO 팀 기반 사용자 경험" },
      { src: "https://github.com/user-attachments/assets/caa7a281-eebc-4065-800d-4dba9bb2b996", caption: "경기 일정·좌석 정보 기반 직관 메이트 및 크루 모집 게시글" },
      { src: "https://github.com/user-attachments/assets/6bb97012-44c6-451d-9990-97fee92362c9", caption: "에스크로 기반 안전한 1:1 티켓 양도 및 거래 상태 관리" },
      { src: "https://github.com/user-attachments/assets/56a4fab8-effd-448b-9f43-319d185d548a", caption: "WebSocket · STOMP 기반 실시간 1:1 및 그룹 채팅" },
    ],
    hasAwards: false,
  },
  {
    icon: LineChart,
    title: "Lumina Capital (금융 데이터 서빙 아키텍처 시뮬레이션)",
    description: "외부 API를 통해 대량의 금융 데이터를 수집하는 환경을 설계할 때, 동기식 스크래핑으로 인한 렌더 타임아웃을 예방하는 비동기 캐시 파이프라인 시뮬레이션 프로젝트입니다.",
    longDescription: (
      <div className="space-y-6 text-base text-foreground/90">
        <div className="bg-muted/30 p-4 rounded-xl border border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div><strong className="text-foreground">기간:</strong> 2026.02.23 ~ 2026.02.27 (1주)</div>
            <div className="md:col-span-2"><strong className="text-foreground">역할:</strong> 풀스택 개발 (데이터 스크래핑 파이프라인 및 프론트엔드 시각화 전담 / 5인 팀)</div>
            <div className="md:col-span-2"><strong className="text-foreground">기술 스택:</strong> Python, Streamlit, MySQL, BeautifulSoup4, pykrx</div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-slate-500 rounded-full inline-block"></span> Situation
          </h4>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            금융 데이터를 외부 사이트에서 수집해 투자 지표와 시각화 결과를 제공하는 대시보드였습니다. 초기에는 사용자가 화면을 요청할 때마다 외부 데이터를 직접 수집하는 구조였고, 외부 사이트 응답 지연이나 차단이 발생하면 화면 렌더링까지 늦어지는 문제가 있었습니다.
          </p>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-rose-500 rounded-full inline-block"></span> Task
          </h4>
          <ul className="list-disc pl-8 space-y-2 text-muted-foreground">
            <li>외부 데이터 수집 로직을 사용자 화면 요청에서 분리하기</li>
            <li>수집한 데이터를 MySQL에 저장하고 재사용할 수 있게 만들기</li>
            <li>Streamlit 화면은 내부 DB를 기준으로 빠르게 렌더링되도록 구성하기</li>
            <li>설문 기반 투자 성향과 알고리즘 결과를 화면 흐름에 맞게 연결하기</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span> Action
          </h4>
          <ul className="list-disc pl-8 space-y-3 text-muted-foreground">
            <li>BeautifulSoup4와 pykrx를 활용해 필요한 금융 데이터를 수집하는 파이프라인을 구현했습니다.</li>
            <li>사용자 요청 시점마다 외부 사이트를 호출하지 않도록, 백그라운드에서 주기적으로 데이터를 수집하고 MySQL에 저장하는 구조로 변경했습니다.</li>
            <li>Streamlit 화면은 외부 사이트가 아니라 내부 DB를 조회하도록 구성해, 외부 응답 지연이 사용자 화면에 직접 영향을 주지 않게 했습니다.</li>
            <li>설문 입력값, 위험 성향 점수, 추천 결과가 이어지는 흐름을 Streamlit session_state로 관리했습니다.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-emerald-500 rounded-full inline-block"></span> Result
          </h4>
          <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/10 ml-4">
            <ul className="list-disc pl-4 space-y-2 text-sm leading-relaxed text-foreground/80">
              <li>데이터 수집, 저장, 화면 렌더링 흐름을 분리해 대시보드 응답 안정성을 높였습니다.</li>
              <li>외부 사이트 상태에 따라 화면이 직접 지연되는 문제를 줄였습니다.</li>
              <li>간단한 MVP라도 데이터 수집 계층과 서비스 계층을 분리해야 유지보수가 쉬워진다는 점을 배웠습니다.</li>
            </ul>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-purple-500 rounded-full inline-block"></span> Learned
          </h4>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            이 프로젝트에서는 빠르게 결과물을 보여주는 것도 중요했지만, 외부 의존성을 그대로 사용자 요청에 연결하면 서비스 품질이 쉽게 흔들린다는 점을 경험했습니다. 이후 백엔드 프로젝트에서도 요청 흐름과 비동기 작업을 분리하는 관점을 더 신경 쓰게 됐습니다.
          </p>
        </div>
      </div>
    ),
    highlights: ["비동기 캐시 시스템", "End-to-End 데이터 설계", "렌더링 지연 차단"],
    tags: ["Python", "Streamlit", "MySQL", "CRON Scheduling"],
    gradient: "from-amber-500/10 to-orange-500/10",
    images: [
      { src: "/images/lumina_dashboard.png", caption: "관리자를 위한 대시보드 뷰" },
      { src: "/images/lumina_signup.png", caption: "암호화를 거친 안전한 사용자 인증 및 세션 관리 체계" },
      { src: "/images/lumina_terms.png", caption: "초보자를 위해 제공되는 인터랙티브 금융 용어 사전 인터페이스" },
      { src: "/images/lumina_survey.png", caption: "사용자 페르소나를 측정하는 다단계 자동화 투자 프로파일링" },
      { src: "/images/lumina_chart.png", caption: "시계열 캔들스틱 분석 및 AI 알고리즘 기반 가격 시각화 엔진" },
      { src: "/images/lumina_news.png", caption: "시장에 흐르는 주요 소식을 포착하는 비동기 실시간 뉴스 수집 파이프라인" },
      { src: "/images/lumina_newsletter.png", caption: "투자자의 성향과 일치하는 맞춤형 뉴스레터 인텔리전스 발송 시스템" }
    ],
    githubUrl: "https://github.com/kimgeon0802/1team_mini_PJT",
    hasAwards: false,
  },
  {
    icon: Microscope,
    title: "딥러닝 모델을 활용한 의료 영상 실시간 병변 검출 시스템",
    description: "RF-DETR 논문을 직접 읽고 9개 아키텍처를 비교 실험해 Deformable Cross-Attention 구조를 선택, 학습 데이터 600→2,100장 증강과 비동기 추론 파이프라인까지 End-to-End로 구축한 대장 내시경 실시간 용종 검출 시스템입니다.",
    longDescription: (
      <div className="space-y-6 text-base text-foreground/90">
        <div className="bg-muted/30 p-4 rounded-xl border border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div><strong className="text-foreground">기간:</strong> 2025.04~2025.10 (Team Project)</div>
            <div className="md:col-span-2">
              <strong className="text-foreground">역할:</strong> AI 모델 최적화 및 학습 파이프라인 설계<br />
              <span className="text-foreground/80 mt-1 inline-block">데이터 정규화부터 모델 프루닝(Pruning)까지, 실시간 추론 속도 향상을 위한 데이터 전처리 및 경량화 알고리즘 설계를 주도했습니다.</span>
            </div>
            <div className="md:col-span-2 mt-1"><strong className="text-foreground">기술 스택:</strong> Python, PyTorch, RF-DETR, DINOv2, OpenCV</div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-slate-500 rounded-full inline-block"></span> Situation
          </h4>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            대장 내시경 영상에서 용종을 실시간으로 검출하는 프로젝트였습니다. 의료 영상은 조명 변화, 반사, 장벽의 움직임 때문에 일반 이미지보다 검출 난도가 높았습니다. 또한 실제 활용을 고려하면 정확도뿐 아니라 추론 속도도 중요했습니다.<br />
            초기에는 CenterNet과 RetinaNet의 장점을 결합한 커스텀 모델을 시도했지만, 제한된 데이터와 의료 영상 특성 때문에 기대한 정확도가 나오지 않았습니다.
          </p>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-rose-500 rounded-full inline-block"></span> Task
          </h4>
          <ul className="list-disc pl-8 space-y-2 text-muted-foreground">
            <li>커스텀 모델 실패 원인 분석하기</li>
            <li>의료 영상에 적합한 객체 탐지 모델 선택하기</li>
            <li>부족한 라벨링 데이터를 보완할 증강 전략 적용하기</li>
            <li>실시간 추론이 가능한 수준으로 파이프라인 최적화하기</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span> Action
          </h4>
          <ul className="list-disc pl-8 space-y-3 text-muted-foreground">
            <li>초기 커스텀 모델 실험 결과를 분석한 뒤, 구조를 새로 만드는 방식보다 검증된 객체 탐지 모델을 의료 데이터에 맞게 파인튜닝하는 방향으로 전환했습니다.</li>
            <li>RF-DETR 기반 파인튜닝 파이프라인을 구성하고, 대장 내시경 영상의 특성을 반영한 데이터 증강을 적용했습니다.</li>
            <li>단순 회전/반전뿐 아니라 Grid Distortion, Elastic Deform 계열의 증강을 사용해 장벽 왜곡과 점막 형태 변화를 모델이 학습할 수 있도록 했습니다.</li>
            <li>OpenCV 기반 전처리와 추론 결과 확인 과정을 반복하며, 오탐과 미탐 케이스를 비교했습니다.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-emerald-500 rounded-full inline-block"></span> Result
          </h4>
          <div className="p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/10 ml-4">
            <ul className="list-disc pl-4 space-y-2 text-sm leading-relaxed text-foreground/80">
              <li>기존 베이스라인 대비 mAP를 약 7%p 개선했습니다.</li>
              <li>실시간 추론 가능성을 확인했고, 프로젝트 결과로 교내 캡스톤디자인 경진대회 대상/금상과 전국 경진대회 동상을 수상했습니다.</li>
              <li>모델 구조 자체를 새로 만드는 것보다, 문제 상황에 맞는 모델 선택과 데이터 중심 개선이 더 효과적일 수 있다는 점을 배웠습니다.</li>
            </ul>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-purple-500 rounded-full inline-block"></span> Learned
          </h4>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            처음 시도한 모델이 실패했을 때, 단순히 더 복잡한 모델을 만드는 방향으로 가지 않고 문제를 다시 정의한 것이 중요했습니다. 의료 영상에서는 모델의 새로움보다 데이터 특성과 평가 기준에 맞는 안정적인 개선이 더 중요하다는 점을 배웠습니다.
          </p>
        </div>
      </div>
    ),
    highlights: ["9개 모델 비교·mAP 0.862", "600→2,100장 데이터 증강", "비동기 추론 파이프라인", "캡스톤 금상"],
    tags: ["Python", "PyTorch", "RF-DETR", "Computer Vision"],
    gradient: "from-blue-500/10 to-indigo-500/10",
    videoUrl: "https://www.youtube.com/embed/n6xKcYq7bWE",
    githubUrl: "https://github.com/anjin0910-afk/RF-DETR-project",
    images: [
      { src: "/images/모델사용.jpg", caption: "🔬 9개 모델 성능 비교 실험 — RF-DETR이 mAP@50 0.870, Precision 0.900으로 YOLO·Transformer 계열 전체 중 1위 달성" },
      { src: "/images/rf_detr_aug.png", caption: "다양한 장 내 환경 모사를 위한 Elastic Deform 및 Grid Distortion 데이터 증강 기법 적용" },
      { src: "/images/rf_detr_gold.jpg", caption: "🏆 금상 (대상) — 제17회 건양대학교 캡스톤디자인 경진대회" },
      { src: "/images/rf_detr_bronze.jpg", caption: "🏆 동상 — 전국 공학교육혁신 컨소시엄 창의적 종합설계 경진대회" }
    ],
    hasAwards: true,
  },
  {
    icon: Eye,
    title: "생성형 AI를 활용한 유방암 검출 비지도학습 AI 설계",
    description: "정상 데이터만으로 학습된 VAE에 고정 임계값 적용 시 오탐률이 급증하는 문제를 발견하고, 재구성 오차의 통계적 분포를 분석해 동적 임계값 이진화 알고리즘을 직접 설계하여 Dice 0.8325 → 0.9094로 향상시킨 비지도학습 이상 탐지 시스템입니다.",
    longDescription: (
      <div className="space-y-6 text-base text-foreground/90">
        <div className="bg-muted/30 p-4 rounded-xl border border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div><strong className="text-foreground">기간:</strong> 2024.03~2024.11 (Team Project)</div>
            <div className="md:col-span-2">
              <strong className="text-foreground">역할:</strong> AI 모델링 및 커스텀 손실 함수(Loss) 설계<br />
              <span className="text-foreground/80 mt-1 inline-block">프레임워크의 저수준 API를 활용하여 비지도학습 모델의 핵심 로직을 직접 구현하고, 학습 데이터의 무결성을 검증했습니다.</span>
            </div>
            <div className="md:col-span-2 mt-1"><strong className="text-foreground">기술 스택:</strong> Python, TensorFlow, VAE, Computer Vision</div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-slate-500 rounded-full inline-block"></span> Situation
          </h4>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            초음파 영상에서 유방암 병변을 검출하는 프로젝트였습니다. 의료 데이터는 라벨링 비용이 높고, 모든 병변 케이스를 충분히 확보하기 어렵다는 문제가 있었습니다.<br />
            정답 라벨이 충분하지 않은 상황에서 병변 후보 영역을 찾기 위해, 정상 조직 이미지를 기준으로 이상 패턴을 탐지하는 비지도 학습 접근을 선택했습니다.
          </p>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-rose-500 rounded-full inline-block"></span> Task
          </h4>
          <ul className="list-disc pl-8 space-y-2 text-muted-foreground">
            <li>정상 조직 이미지를 학습하는 VAE 모델 구성하기</li>
            <li>입력 영상과 재구성 영상의 차이를 이용해 이상 후보 영역 찾기</li>
            <li>노이즈를 줄이기 위한 임계값 처리와 후처리 로직 만들기</li>
            <li>결과를 시각적으로 확인할 수 있는 형태로 출력하기</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span> Action
          </h4>
          <ul className="list-disc pl-8 space-y-3 text-muted-foreground">
            <li>TensorFlow 기반 VAE 모델을 구성해 정상 조직 이미지의 분포를 학습하도록 했습니다.</li>
            <li>입력 이미지와 모델이 재구성한 이미지의 차이를 계산해 Reconstruction Error Map을 만들었습니다.</li>
            <li>단순 고정 임계값만으로는 노이즈가 많이 남는 문제가 있어, 이미지 내 픽셀 분포를 기준으로 동적 임계값을 조정하는 후처리 로직을 적용했습니다.</li>
            <li>병변 후보 영역을 시각화하고, 결과 이미지를 비교하며 오탐 영역을 줄이는 방향으로 반복 개선했습니다.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-emerald-500 rounded-full inline-block"></span> Result
          </h4>
          <div className="p-4 rounded-xl bg-violet-500/5 border border-violet-500/10 ml-4">
            <ul className="list-disc pl-4 space-y-2 text-sm leading-relaxed text-foreground/80">
              <li>라벨이 부족한 의료 영상 환경에서 비지도 학습 기반 이상 탐지 가능성을 확인했습니다.</li>
              <li>Dice Coefficient 기준 약 90% 수준의 분할 성능을 목표로 파이프라인을 개선했습니다.</li>
              <li>프로젝트 결과로 산업통상자원부 장관 주관 공학혁신상을 수상했습니다.</li>
            </ul>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-purple-500 rounded-full inline-block"></span> Learned
          </h4>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            이 프로젝트를 통해 AI 모델 성능은 모델 구조만으로 결정되지 않고, 데이터 전처리와 후처리 기준에 크게 영향을 한다는 점을 배웠습니다. 특히 의료 영상에서는 작은 노이즈도 결과 해석에 영향을 주기 때문에, 결과를 시각적으로 확인하고 임계값을 조정하는 과정이 중요했습니다.
          </p>
        </div>
      </div>
    ),
    highlights: ["동적 임계값 알고리즘 설계", "Dice 0.8325 → 0.9094", "로우레벨 API 제어"],
    tags: ["Python", "TensorFlow", "VAE", "Unsupervised Learning"],
    gradient: "from-violet-500/10 to-purple-500/10",
    images: [
      { src: "/images/vae_diff.png", caption: "Phase 1: 이상치 격리를 위한 차영상 연산 과정" },
      { src: "/images/vae_threshold.png", caption: "Phase 2: 노이즈를 제거하고 정밀한 분할 마스크를 추출하는 동적 임계값 적용" },
      { src: "/images/vae_result.png", caption: "Phase 3: 최종 바운딩 박스 생성 및 수치적 신뢰도 스코어링" },
      { src: "/images/vae_award.jpg", caption: "🏆 공학혁신상 (창의혁신 DNA 산학협력 우수사례)" }
    ],
    githubUrl: "https://github.com/anjin0910-afk/vae-breast-cancer-anomaly",
    hasAwards: true,
  },
  {
    icon: RefreshCw,
    title: "CycleGAN 기반 CT→MRI 의료 영상 변환 모델",
    description: "표준 CycleGAN 아키텍처를 직접 수정하여 의료 영상의 지역적 패턴 학습을 강화한 CT→MRI 변환 모델입니다. PatchGAN 적용과 Residual Block 확장으로 변환 품질을 개선하고 SSIM·PSNR로 정량 검증했습니다.",
    longDescription: (
      <div className="space-y-6 text-base text-foreground/90">
        <div className="bg-muted/30 p-4 rounded-xl border border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div><strong className="text-foreground">기간:</strong> 학부 전공 수업 팀 프로젝트</div>
            <div className="md:col-span-2">
              <strong className="text-foreground">역할:</strong> 모델 아키텍처 수정 및 학습 파이프라인 구축<br />
              <span className="text-foreground/80 mt-1 inline-block">PatchGAN Discriminator 도입과 Residual Block 확장을 주도하고, 1,100장 이상의 CT/MRI 데이터 전처리 및 학습 파이프라인 전반을 설계했습니다.</span>
            </div>
            <div className="md:col-span-2 mt-1"><strong className="text-foreground">기술 스택:</strong> Python, PyTorch, CycleGAN, PatchGAN, NumPy, Matplotlib</div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-slate-500 rounded-full inline-block"></span> Project Background
          </h4>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            MRI는 CT보다 풍부한 연부조직 정보를 제공하지만, 비용이 높고 촬영 시간이 길어 접근성이 제한됩니다. CT 영상을 MRI로 변환하는 생성 모델을 통해 의료 비용 절감과 방사선 노출 감소 가능성을 탐색하고자 했습니다.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-rose-500 rounded-full inline-block"></span> Problem
          </h4>
          <ul className="list-disc pl-8 space-y-2 text-muted-foreground">
            <li><strong className="text-foreground/80">글로벌 패턴 학습의 한계:</strong> 표준 CycleGAN의 Discriminator는 이미지 전체를 단일 판별값으로 평가해, 의료 영상이 요구하는 세밀한 지역적 텍스처 변환에 취약했습니다.</li>
            <li><strong className="text-foreground/80">모델 표현력 부족:</strong> 기본 9개의 Residual Block으로는 CT와 MRI 간의 복잡한 도메인 격차를 충분히 학습하지 못해 변환 이미지의 디테일이 흐릿했습니다.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span> Solution
          </h4>
          <ul className="list-disc pl-8 space-y-3 text-muted-foreground">
            <li><strong className="text-foreground/80">PatchGAN Discriminator 적용:</strong> 이미지 전체가 아닌 N×N 패치 단위로 진위를 판별하도록 Discriminator를 교체했습니다. 모델이 전역적 구조뿐 아니라 지역적 텍스처 패턴까지 정밀하게 학습하도록 유도했습니다.</li>
            <li><strong className="text-foreground/80">Residual Block 확장 (9→12개):</strong> Generator의 Residual Block 수를 늘려 피처 추출 및 도메인 간 매핑 능력을 강화하고, 변환 이미지의 선명도를 향상시켰습니다.</li>
            <li><strong className="text-foreground/80">데이터 전처리 및 학습 파이프라인 구축:</strong> 1,100장 이상의 CT/MRI 쌍 데이터를 정규화·리사이징 전처리하고, 안정적인 GAN 학습을 위한 파이프라인을 직접 설계했습니다.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-emerald-500 rounded-full inline-block"></span> Result
          </h4>
          <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/10 ml-4">
            <ul className="list-disc pl-4 space-y-2 text-sm leading-relaxed text-foreground/80">
              <li>PatchGAN 도입 및 Residual Block 확장으로 기존 대비 <strong>Loss 감소</strong> 및 변환 이미지 품질 향상 확인</li>
              <li><strong>SSIM·PSNR</strong> 측정을 통한 정량적 품질 검증으로 아키텍처 수정의 효과를 객관적으로 입증</li>
              <li>CT→MRI 변환 모델을 통해 의료 비용 절감 및 방사선 노출 감소 가능성 제시</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    highlights: ["PatchGAN Discriminator 적용", "Residual Block 9→12 확장", "SSIM·PSNR 정량 검증"],
    tags: ["Python", "PyTorch", "CycleGAN", "PatchGAN", "Medical Imaging"],
    gradient: "from-rose-500/10 to-pink-500/10",
    images: [
      { src: "/images/ct.png", caption: "Phase 1: 학습 데이터 품질 기준 설계 — 동일 축(Axial) 뇌 단면 슬라이스만 선별하고 불량 품질·오정렬 데이터를 직접 필터링하여 1,100장 이상의 정제 데이터셋 구성" },
      { src: "/images/loss.png", caption: "Phase 2: 학습 초기(epoch 0→2) Loss 수렴 과정 — Discriminator Loss와 Generator Loss가 안정적으로 감소하며 모델이 MRI 도메인 패턴을 학습하는 과정 시각화" },
      { src: "/images/final.png", caption: "Phase 3: 최종 변환 결과 및 정량 평가 — SSIM 0.27~0.55, PSNR 12~15dB 측정. CycleGAN 비쌍(Unpaired) 학습 특성상 동일 슬라이스 재현보다 MRI 도메인 스타일 변환 자체를 학습하며, 아키텍처 수정(PatchGAN·Residual Block 확장)의 효과를 SSIM·PSNR로 객관적으로 검증" },
    ],
    hasAwards: false,
  }
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  // Close modal when pressing escape key
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") setSelectedProject(null);
  };

  return (
    <section id="projects" className="section-alt py-24 md:py-32" onKeyDown={handleKeyDown}>
      <div className="container relative">
        <ScrollAnimator>
          <div className="section-header">
            <h2>프로젝트</h2>
          </div>
        </ScrollAnimator>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
          {projects.map((project, i) => (
            <ScrollAnimator key={i}>
              <div
                className="minimal-card-accent group cursor-pointer flex flex-col h-full"
                style={{ transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s ease" }}
                onClick={() => setSelectedProject(project)}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 48px rgba(0,0,0,0.13), 0 0 0 1px hsl(220 70% 50% / 0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "";
                }}
              >
                {/* Gradient header area */}
                <div className={`bg-gradient-to-br ${project.gradient} p-8 pb-6`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="icon-container">
                      <project.icon size={22} />
                    </div>
                    <ArrowUpRight size={20} strokeWidth={2.5} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground leading-snug">{project.title}</h3>
                </div>

                {/* Content */}
                <div className="p-8 pt-5 flex flex-col flex-1 justify-between">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{project.description}</p>

                  <div>
                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.highlights.map((h) => (
                        <span key={h} className="inline-flex items-center gap-1 text-xs font-semibold text-primary bg-primary/8 px-2.5 py-1 rounded-md">
                          ✦ {h}
                        </span>
                      ))}
                    </div>

                    {/* Tags - static, non-clickable */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tech-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimator>
          ))}
        </div>

        {/* Modal Overlay */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6" onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedProject(null);
          }}>
            {/* Backdrop */}
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm pointer-events-none" />

            {/* Modal Content */}
            <div
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-xl shadow-2xl p-6 md:p-8 animate-in fade-in zoom-in-95 duration-200"
              role="dialog"
              aria-modal="true"
            >
              <button
                className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pr-8">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${selectedProject.gradient}`}>
                    <selectedProject.icon size={32} className="text-foreground" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold leading-tight">{selectedProject.title}</h3>
                </div>
                {selectedProject.githubUrl && (
                  <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-muted border border-border text-foreground hover:bg-muted/80 transition-colors shrink-0">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    GitHub
                  </a>
                )}
              </div>

              {selectedProject.longDescription ? (
                <div className="mb-8 overflow-hidden rounded-xl border border-border bg-card/50 p-6 md:p-8">
                  {selectedProject.longDescription}
                </div>
              ) : (
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed whitespace-pre-line">
                  {selectedProject.description}
                </p>
              )}

              {selectedProject.videoUrl && (
                <div className="mb-8 rounded-xl overflow-hidden shadow-lg border border-border bg-black">
                  <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={selectedProject.videoUrl}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}

              {selectedProject.images && selectedProject.images.length > 0 && (
                <div className="space-y-8 mt-8 border-t border-border pt-8">
                  <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-primary rounded-full inline-block"></span>
                    {selectedProject.hasAwards ? "프로젝트 갤러리 및 수상 내역" : "프로젝트 갤러리"}
                  </h4>
                  {selectedProject.images.map((img, idx) => (
                    <div key={idx} className="flex flex-col gap-4 mb-8 last:mb-0">
                      <div className="rounded-xl overflow-hidden border border-border bg-muted/20 flex items-center justify-center p-2">
                        <img
                          src={img.src}
                          alt={img.caption}
                          className="w-full h-auto object-contain max-h-[70vh] rounded-lg shadow-sm"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/placeholder.svg';
                            (e.target as HTMLImageElement).alt = 'Image not found - please add ' + img.src;
                          }}
                        />
                      </div>
                      <p className="text-center text-sm md:text-base text-foreground/80 font-medium">
                        {img.caption}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;

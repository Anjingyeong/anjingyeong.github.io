import { useState } from "react";
import ScrollAnimator from "./ScrollAnimator";
import { Microscope, Eye, LineChart, ArrowUpRight, X, Database, Server } from "lucide-react";

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
    title: "FullCount: 실시간 KBO 라이브 커뮤니티 플랫폼",
    description: "고빈도 실시간 데이터 동기화와 복잡한 관계형 상태 머신 제어 역량을 검증하기 위해 구축한 풀스택 플랫폼입니다. 무결성 기반의 에스크로 설계와 비동기 오프로딩 체계를 적용하여 DB 부하를 혁신적으로 절감했습니다.",
    longDescription: (
      <div className="space-y-6 text-base text-foreground/90">
        <div className="bg-muted/30 p-4 rounded-xl border border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div><strong className="text-foreground">기간 및 규모:</strong> 2026.03 (Team Project, 5인)</div>
            <div><strong className="text-foreground">역할:</strong> Team Leader & Lead Full-Stack Engineer</div>
            <div className="md:col-span-2"><strong className="text-foreground">기술 스택:</strong> React, Spring Boot, MySQL, JPA, WebSockets, STOMP</div>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-rose-500 rounded-full inline-block"></span> Problem (기술적 병목 및 과제)
          </h4>
          <ul className="list-disc pl-8 space-y-2 text-muted-foreground">
            <li><strong className="text-foreground/80">트래픽 및 병목:</strong> 에스크로 트랜잭션과 실시간 채팅이 동시다발적으로 발생하는 환경에서, 기존 API Polling 방식은 막대한 DB I/O 병목 및 서버 오버헤드를 유발했습니다.</li>
            <li><strong className="text-foreground/80">보안 충돌 리스크:</strong> React UI의 무상태 접근성을 유지하면서, 권한 제어가 필수적인 SSR 라우팅 영역에서 보안 충돌 및 인증 홀(Authentication Hole) 발생 리스크가 존재했습니다.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span> Solution (공학적 해결책 및 기술 의사결정)
          </h4>
          <ul className="list-disc pl-8 space-y-3 text-muted-foreground">
            <li><strong className="text-foreground/80">Asynchronous Off-loading & 실시간 브로드캐스팅:</strong> 단방향 API Polling을 폐기하고, WebSockets 및 STOMP 기반의 양방향 통신망을 도입했습니다. Redis Pub/Sub을 설계하여 시스템 지연 없이 타 클라이언트의 상태 전이를 브로드캐스팅 처리했습니다.</li>
            <li><strong className="text-foreground/80">무결성 기반 에스크로 설계:</strong> Spring Boot와 JPA를 채택하여 영속성 컨텍스트(Persistence Context) 기반의 철저한 트랜잭션 롤백 통제 및 상태 일관성을 보장했습니다. 비동기 환경에서도 데이터의 ACID 요소를 엄격하게 유지하도록 관계형 상태 머신(State Machine)을 모델링했습니다.</li>
            <li><strong className="text-foreground/80">Hybrid Security Token 브릿징:</strong> 구조적 보안을 위해 JWT 기반의 무상태 통신을 기본으로 하되, 403 권한 관리가 필요한 라우팅 영역에는 HttpOnly Cookie를 브릿징 결합하여 보안 위협을 원천 차단했습니다.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-emerald-500 rounded-full inline-block"></span> Result (정량적/정성적 성과)
          </h4>
          <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10 ml-4">
            <h5 className="font-semibold text-emerald-500 mb-2 flex items-center gap-2">⚡ DB I/O 부하 80% 이상 혁신적 절감</h5>
            <p className="text-sm leading-relaxed text-foreground/80">
              30초 지연 분산 오프로딩을 통해 DB I/O 부하를 80% 이상 혁신적으로 단축하고 미션 크리티컬 리소스를 확보했습니다. 동시다발적인 트래픽 하에서도 무결성이 보장된 실시간 데이터 동기화 파이프라인 및 내결함성(Fault-tolerant) 인프라를 성공적으로 구축했습니다.
            </p>
          </div>
        </div>
      </div>
    ),
    highlights: ["DB I/O 80% 절감", "하이브리드 인증 체계", "에스크로 무결성 제어"],
    tags: ["React", "Spring Boot", "STOMP/WebSockets", "Redis Pub/Sub", "JWT", "Thymeleaf"],
    gradient: "from-emerald-500/10 to-teal-500/10",
    githubUrl: "https://github.com/Rookies5-MiniPj2-Team5",
    hasAwards: false,
  },
  {
    icon: Eye,
    title: "VAE 기반 비지도 학습 유방암 병변 검출 시스템",
    description: "초음파 영상에서 유방암 병변을 자동으로 식별하기 위해 동적 임계값을 생성하는 비지도 학습(Unsupervised Learning) 파이프라인입니다. 정상 조직 데이터만을 활용하여 구조적 이상 지점을 독자적으로 격리해 냅니다.",
    longDescription: (
      <div className="space-y-6 text-base text-foreground/90">
        <div className="bg-muted/30 p-4 rounded-xl border border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div><strong className="text-foreground">기간 및 규모:</strong> 2024.03~2024.11 (Team Project)</div>
            <div><strong className="text-foreground">역할:</strong> Generative AI & Vision Pipeline Engineer</div>
            <div className="md:col-span-2"><strong className="text-foreground">기술 스택:</strong> Python, TensorFlow, VAE, Computer Vision</div>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-rose-500 rounded-full inline-block"></span> Problem (기술적 병목 및 과제)
          </h4>
          <ul className="list-disc pl-8 space-y-2 text-muted-foreground">
            <li><strong className="text-foreground/80">라벨링 비용 및 데이터 편향:</strong> 지도 학습 기반의 접근은 악성 종양 데이터의 천문학적 라벨링 비용과 심각한 데이터 편향성(Data Bias)을 초래했습니다.</li>
            <li><strong className="text-foreground/80">정적 알고리즘의 한계:</strong> 일관성이 부족한 초음파 영상 특성상, 1차원적인 하드코딩 마스킹 방식으로는 노이즈 통제 및 유의미한 병변 바운딩 박스(Bounding Box) 추출에 한계가 존재했습니다.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span> Solution (공학적 해결책 및 기술 의사결정)
          </h4>
          <ul className="list-disc pl-8 space-y-3 text-muted-foreground">
            <li><strong className="text-foreground/80">비지도 학습(Unsupervised) 프레임워크 구축:</strong> 방대한 '건강한 정상 조직 이미지'만으로 정상 토폴로지를 인코딩/디코딩하도록 VAE 아키텍처를 적용하여 비용 효율성을 극대화했습니다.</li>
            <li><strong className="text-foreground/80">차영상(Difference Matrix) 커스텀 손실 함수 파이프라인:</strong> TensorFlow 저수준 API를 활용해 딥러닝 블랙박스 의존도를 탈피한 수학적 이상 탐지 아키텍처를 구축했습니다. 정상 조직의 특성만을 뚜렷하게 학습시키기 위해, KLD(잠재 공간 분포 오차)를 강화하고 MSE(픽셀 재구성 오차) 비중을 텐서 연산 단계에서 통제하는 커스텀 손실 함수(β-VAE 구조 차용)를 직접 설계했습니다. 이를 통해 암세포 이미지가 입력될 경우 모델이 의도적으로 해당 부위 복원에 실패하도록 유도하였고, '원본 스캔 데이터'와 '정상으로 복원된 이미지' 간의 재구성 오차(Reconstruction Error)를 픽셀 단위 행렬로 빼기(차영상) 연산하여 비정상 종양 객체만을 정밀하게 격리 및 식별해 냈습니다.</li>
            <li><strong className="text-foreground/80">Dynamic Thresholding(동적 임계값) 개발:</strong> 정적 마스킹의 한계를 극복하고자 실시간 이미지 픽셀 분포 비율을 계산해 노이즈를 클리닝하는 동적 임계값 알고리즘을 단독 구현했습니다.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-emerald-500 rounded-full inline-block"></span> Result (정량적/정성적 성과)
          </h4>
          <div className="flex flex-col sm:flex-row gap-4 pl-4">
            <div className="flex-1 p-4 rounded-xl bg-violet-500/5 border border-violet-500/10">
              <p className="font-semibold text-violet-500 mb-1">안정적 분할 정밀도 달성</p>
              <p className="text-2xl font-bold text-foreground hidden sm:block">Max 90% Dice</p>
              <p className="text-sm text-foreground sm:hidden font-bold">Max 90% Dice</p>
              <p className="text-sm text-foreground/80 mt-1">라벨링 데이터 0건 조건 하에서 상시 정밀도 유지</p>
            </div>
            <div className="flex-1 p-4 rounded-xl bg-primary/5 border border-primary/10">
              <p className="font-semibold text-primary mb-1">창의혁신 DNA 산학협력 우수사례</p>
              <p className="text-xl font-bold text-foreground">🏆 공학혁신상</p>
              <p className="text-sm text-foreground/80 mt-1">공학적 설계 우수성 단독 인정 (산업부 주관)</p>
            </div>
          </div>
        </div>
      </div>
    ),
    highlights: ["Dice 40-90% 달성", "비지도 학습 모델 구축", "창의혁신 DNA 산학협력 동상 수상"],
    tags: ["Python", "TensorFlow", "VAE", "Deep Learning", "Medical Imaging"],
    gradient: "from-violet-500/10 to-purple-500/10",
    images: [
      { src: "/images/vae_diff.png", caption: "Phase 1: 이상치 격리를 위한 차영상(Difference Matrix) 연산 과정" },
      { src: "/images/vae_threshold.png", caption: "Phase 2: 노이즈를 제거하고 정밀한 분할 마스크를 추출하는 동적 임계값 적용" },
      { src: "/images/vae_result.png", caption: "Phase 3: 최종 바운딩 박스 생성 및 수치적 신뢰도 스코어링" },
      { src: "/images/vae_award.jpg", caption: "🏆 공학혁신상 (창의혁신 DNA 산학협력 우수사례)" }
    ],
    githubUrl: "https://github.com/anjin0910-afk/vae-breast-cancer-anomaly",
    hasAwards: true,
  },
  {
    icon: Microscope,
    title: "RF-DETR 실시간 대장 내 용종 검출 시스템",
    description: "극단적인 의료 데이터 불균형 문제를 해결하기 위해 국소적 데이터 증강 파이프라인을 구축한 실시간 객체 탐지 서비스입니다. 연구 단계의 AI를 상용 엣지(Edge) 환경으로 이끌어낸 Data-Centric 모델 튜닝 파이프라인 사례입니다.",
    longDescription: (
      <div className="space-y-6 text-base text-foreground/90">
        <div className="bg-muted/30 p-4 rounded-xl border border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div><strong className="text-foreground">기간 및 규모:</strong> 2025.04~2025.10 (Team Project)</div>
            <div><strong className="text-foreground">역할:</strong> Data Engineer & Vision Engineer</div>
            <div className="md:col-span-2"><strong className="text-foreground">기술 스택:</strong> Python, PyTorch, RF-DETR, DINOv2, OpenCV</div>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-rose-500 rounded-full inline-block"></span> Problem (기술적 병목 및 과제)
          </h4>
          <ul className="list-disc pl-8 space-y-2 text-muted-foreground">
            <li><strong className="text-foreground/80">정확도 한계 및 과적합 리스크:</strong> 초기 독자적 퓨전 아키텍처(CenterNet + RetinaNet) 설계 시 정확도 한계에 봉착했습니다. 용종 구조 특성상의 동적 표면 왜곡으로 과적합 리스크가 높았습니다.</li>
            <li><strong className="text-foreground/80">인프라 제약 조건:</strong> 상용 전개 시 엣지(Edge) 디바이스에서 실시간 추론 속도(Throughput)가 떨어지는 스펙다운 한계와 부딪혔습니다.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span> Solution (공학적 해결책 및 기술 의사결정)
          </h4>
          <ul className="list-disc pl-8 space-y-3 text-muted-foreground">
            <li><strong className="text-foreground/80">Pipeline Pivot 및 Data-Centric 접근:</strong> 구조적 참신함에 대한 집착을 버리고 SOTA 어텐션 기반 아키텍처(RF-DETR)로 신속 피벗했습니다. 부족한 데이터셋 병목을 고려해 데이터 중심 AI 튜닝으로 전면 개선했습니다.</li>
            <li><strong className="text-foreground/80">도메인 특화 수학적 기하 증강:</strong> 단순 이미지 회전, 반전이 아닌 장벽의 물리적 탄력과 왜곡을 시뮬레이션하는 Elastic Deform 및 Grid Distortion 파이프라인을 도입하여 형태학적 Feature 학습을 강제화했습니다.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-emerald-500 rounded-full inline-block"></span> Result (정량적/정성적 성과)
          </h4>
          <div className="flex flex-col md:flex-row flex-wrap gap-4 pl-4">
            <div className="flex-1 min-w-[200px] p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/10">
              <p className="font-semibold text-indigo-500 mb-1">상용 Edge Inference Throughput</p>
              <p className="text-2xl font-bold text-foreground">22+ FPS</p>
            </div>
            <div className="flex-1 min-w-[200px] p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
              <p className="font-semibold text-blue-500 mb-1">기존 대비 정밀도 상승 (mAP)</p>
              <p className="text-2xl font-bold text-foreground">+7% mAP</p>
            </div>
            <div className="flex-1 min-w-[200px] p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
              <p className="font-semibold text-amber-500 mb-1 flex items-center gap-1">🏆 캡스톤 대상 및 수상</p>
              <p className="text-[13px] font-bold text-foreground leading-snug pt-1">제17회 캡스톤디자인 <span>대상 (금상)</span><br />전국 공학교육혁신 컨소시엄 경진대회 <span>동상</span></p>
            </div>
          </div>
        </div>
      </div>
    ),
    highlights: ["mAP 7% 향상 달성", "22 FPS 실시간 추론", "End-to-end 인터페이스 배포", "캡스톤 대상(금상)"],
    tags: ["Python", "PyTorch", "RF-DETR", "DINOv2", "Computer Vision"],
    gradient: "from-blue-500/10 to-indigo-500/10",
    videoUrl: "https://www.youtube.com/embed/n6xKcYq7bWE",
    images: [
      { src: "/images/rf_detr_aug.png", caption: "다양한 장 내 환경 모사를 위한 Elastic Deform 및 Grid Distortion 데이터 증강 기법 적용" },
      { src: "/images/rf_detr_gold.jpg", caption: "🏆 금상 (대상) — 제17회 건양대학교 캡스톤디자인 경진대회" },
      { src: "/images/rf_detr_bronze.jpg", caption: "🏆 동상 — 전국 공학교육혁신 컨소시엄 창의적 종합설계 경진대회" }
    ],
    githubUrl: "https://github.com/anjin0910-afk/RF-DETR-project",
    hasAwards: true,
  },
  {
    icon: LineChart,
    title: "Lumina Capital: 퀀트 투자 분석 대시보드",
    description: "방대한 실시간 금융 데이터 및 기술적 지표를 집계하는 풀스택 데이터 기반 금융 대시보드입니다. 대규모 트래픽 렌더링 병목 및 UI 상태 증발 현상을 트러블슈팅하여 안정화시킨 아키텍처 최적화 사례입니다.",
    longDescription: (
      <div className="space-y-6 text-base text-foreground/90">
        <div className="bg-muted/30 p-4 rounded-xl border border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div><strong className="text-foreground">기간 및 규모:</strong> 2026.02 (Team Project, 6인)</div>
            <div><strong className="text-foreground">역할:</strong> Data Pipeline & Full-Stack Architect</div>
            <div className="md:col-span-2"><strong className="text-foreground">기술 스택:</strong> Python, Streamlit, MySQL, BeautifulSoup4, pykrx, Seaborn</div>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-primary rounded-full inline-block"></span> Impact & Contribution
          </h4>
          <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/10 ml-4">
            <h5 className="font-semibold text-orange-500 mb-2 flex items-center gap-2">⚡ DB 타임아웃 붕괴 0% 달성 및 렌더 딜레이 타파</h5>
            <p className="text-sm leading-relaxed text-foreground/80">
              과다 접속 트래픽 중 동기식 스크래핑으로 인해 유발되는 심각한 렌더 대기 시간 문제를 식별하고, 로컬 캐시를 경유하는 1시간 단위 비동기(Asynchronous) CRON 아키텍처로 스크래핑 체계를 전면 교체하여 타임 아웃을 근절했습니다.
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-primary rounded-full inline-block"></span> What I Did (주요 수행 업무)
          </h4>
          <ul className="list-disc pl-8 space-y-2 text-muted-foreground">
            <li><strong className="text-foreground/80">백엔드 아키텍처 및 크롤링 파이프라인 설계:</strong> 파편화된 외부 투자 데이터를 자율 스케줄러로 실시간 폴링하고 안전하게 정규화된 형태의 데이터베이스로 적재 및 영속화하는 백그라운드 DAQ 계층 개발.</li>
            <li><strong className="text-foreground/80">다단계 풀스택 통합 인터페이스 연동:</strong> 알고리즘 Risk Scoring 연산 결과를 다단계 사용자 설문 뷰와 빈틈없이 매핑시켜, 완전히 개인화된 맞춤형 핀테크 시그널 대시보드로 플로우 제어 수행.</li>
            <li><strong className="text-foreground/80">시스템 렌더링 병목 트러블슈팅:</strong> 트래픽 스파이크 시 필연적으로 동반되는 치명적 동기식 렌더 지연 및 API 타임아웃 오류 병목 원인을 진단하고 인프라 교체 전격 시행.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-primary rounded-full inline-block"></span> Tech Rationale (기술 채택 의사결정)
          </h4>
          <ul className="list-disc pl-8 space-y-3 text-muted-foreground">
            <li><strong className="text-foreground/80">동기식 스크래핑에서 비동기 CRON 캐싱으로 구조 상향:</strong> 다중 웹 요청 시점마다 라이브 스크래핑을 일으키면 타겟 서버 측에서 의심 요청으로 판단해 강력한 통신 드랍을 유발했습니다. 이를 막기 위해 웹 접속자는 단지 빠르게 구축된 로컬망 DB를 조회할 수 있도록 '서버 내부에서만 1시간 단위 비동기 백그라운드 캐시 최적화' 구조로 아키텍처를 뒤집어 API 타임아웃 지표를 0% 근처로 타파했습니다.</li>
            <li><strong className="text-foreground/80">Streamlit session_state 기반 캐시-락(Cache-lock) 적용:</strong> 복잡한 금융 설문 로직 상 화면 상태가 핫 로딩될 때마다 사용자가 입력 중이던 데이터가 증발하는 치명적인 Streamlit UI 결함이 잦았습니다. 이를 원초적인 영구 세션 잠금(Cache-lock) 테크닉으로 제어함으로써 복합적인 데이터 업데이트 속에서도 매끄러운 UX 진행을 통제해 냈습니다.</li>
          </ul>
        </div>
      </div>
    ),
    highlights: ["풀스택 아키텍처 구축", "비동기(Asynchronous) DAQ", "지표기반 상태 관리 설계"],
    tags: ["Python", "Streamlit", "MySQL", "BeautifulSoup4", "pykrx", "Seaborn"],
    gradient: "from-amber-500/10 to-orange-500/10",
    images: [
      { src: "/images/lumina_dashboard.png", caption: "관리자를 위한 실시간 시장 집계 프론트엔드 뷰" },
      { src: "/images/lumina_signup.png", caption: "암호화를 거친 안전한 사용자 인증 및 세션 관리 체계" },
      { src: "/images/lumina_terms.png", caption: "초보자를 위해 제공되는 인터랙티브 금융 용어 사전 인터페이스" },
      { src: "/images/lumina_survey.png", caption: "사용자 페르소나를 측정하는 다단계 자동화 투자 프로파일링" },
      { src: "/images/lumina_chart.png", caption: "시계열 캔들스틱 분석 및 AI 알고리즘 기반 가격 시각화 엔진" },
      { src: "/images/lumina_news.png", caption: "시장에 흐르는 주요 소식을 포착하는 비동기 실시간 뉴스 수집 파이프라인" },
      { src: "/images/lumina_newsletter.png", caption: "투자자의 성향과 일치하는 맞춤형 뉴스레터 인텔리전스 발송 시스템" }
    ],
    githubUrl: "https://github.com/kimgeon0802/1team_mini_PJT",
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
                className="minimal-card-accent group cursor-pointer h-full transition-transform hover:-translate-y-1"
                onClick={() => setSelectedProject(project)}
              >
                {/* Gradient header area */}
                <div className={`bg-gradient-to-br ${project.gradient} p-8 pb-6`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="icon-container">
                      <project.icon size={22} />
                    </div>
                    <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground leading-snug">{project.title}</h3>
                </div>

                {/* Content */}
                <div className="p-8 pt-5">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{project.description}</p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.highlights.map((h) => (
                      <span key={h} className="inline-flex items-center gap-1 text-xs font-semibold text-primary bg-primary/8 px-2.5 py-1 rounded-md">
                        ✦ {h}
                      </span>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
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

import codecs
import re

file_path = 'c:/Users/user/.gemini/antigravity/scratch/developer-portfolio/src/components/ProjectsSection.tsx'

with codecs.open(file_path, 'r', 'utf-8') as f:
    text = f.read()

pattern = re.compile(r'const projects:\s*ProjectType\[\]\s*=\s*\[.*?\];', re.DOTALL)

new_array = """const projects: ProjectType[] = [
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
            <span className="w-1.5 h-6 bg-slate-500 rounded-full inline-block"></span> Project Background
          </h4>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            <strong className="text-foreground/90">SK 쉴더스 지능형 애플리케이션 개발 과정 중 진행한 심화 프로젝트:</strong><br />
            대규모 트래픽 환경에서 프론트엔드와 백엔드가 어떻게 유기적으로 맞물려야 안정적인 서비스를 제공할 수 있는지 시뮬레이션하는 데 목적을 두었습니다. 조장으로서 서비스 전체 아키텍처를 설계하며, 실시간성 데이터 처리와 시스템 안정성을 확보하는 훈련에 집중했습니다.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-rose-500 rounded-full inline-block"></span> Problem
          </h4>
          <ul className="list-disc pl-8 space-y-2 text-muted-foreground">
            <li><strong className="text-foreground/80">전체 시스템의 병목 현상:</strong> 실시간 채팅과 에스크로 결제가 동시에 일어날 때, 프론트엔드의 잦은 요청이 백엔드와 DB에 막대한 부하를 주어 서비스 전체가 느려질 위험을 식별했습니다.</li>
            <li><strong className="text-foreground/80">인증 무결성과 사용자 경험의 충돌:</strong> 보안을 강화하면서도 페이지 이동 시 흐름이 끊기지 않는 매끄러운 사용자 경험을 확보해야 하는 설계상의 과제가 있었습니다.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span> Solution
          </h4>
          <ul className="list-disc pl-8 space-y-3 text-muted-foreground">
            <li><strong className="text-foreground/80">풀스택 최적화 파이프라인 설계:</strong> 백엔드에 Redis와 WebSocket을 도입해 DB 부하를 줄이고, 프론트엔드에는 비동기 상태 관리 로직을 적용해 서버 데이터 변경이 화면에 즉시 반영되도록 전체 파이프라인을 설계했습니다.</li>
            <li><strong className="text-foreground/80">하이브리드 보안 및 라우팅 제어:</strong> 클라이언트 사이드의 무상태 통신 효율을 유지하면서, 서버 사이드(SSR) 권한 검증이 필요한 경로에는 HttpOnly Cookie를 브릿징하여 보안성과 성능의 균형을 맞췄습니다.</li>
            <li><strong className="text-foreground/80">통합 트랜잭션 관리:</strong> 조장으로서 프론트엔드와 백엔드 간의 데이터 ACID 특성이 유지되도록 예외 처리 및 낙관적 업데이트 로직 전반을 조율했습니다.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-emerald-500 rounded-full inline-block"></span> Result
          </h4>
          <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10 ml-4">
            <ul className="list-disc pl-4 space-y-2 text-sm leading-relaxed text-foreground/80">
              <li>서비스 전체의 데이터 흐름을 설계하는 아키텍트로서, 팀원들의 파트를 조율하며 마감 기한 내에 안정적인 시스템 시뮬레이션을 완료했습니다.</li>
              <li>백엔드 최적화가 프론트엔드 성능 향상으로 이어지는 유기적인 풀스택 개발 프로세스를 주도했습니다.</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    highlights: ["풀스택 파이프라인 설계", "하이브리드 보안", "무결성 기반 에스크로"],
    tags: ["React", "Spring Boot", "STOMP/WebSockets", "Redis Pub/Sub", "JWT"],
    gradient: "from-emerald-500/10 to-teal-500/10",
    githubUrl: "https://github.com/Rookies5-MiniPj2-Team5",
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
            <span className="w-1.5 h-6 bg-slate-500 rounded-full inline-block"></span> Project Background
          </h4>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            <strong className="text-foreground/90">SK 쉴더스 지능형 애플리케이션 개발 과정 중 진행한 기초 프로젝트:</strong><br />
            외부 데이터 수집부터 프론트엔드 서빙까지의 전 과정을 경험하며 데이터 파이프라인의 기초를 다졌습니다. 실제 상용 서비스 수준의 방대한 데이터 스크래핑 환경을 가정하고 시스템의 가용성을 테스트하는 데 집중했습니다.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-rose-500 rounded-full inline-block"></span> Problem
          </h4>
          <ul className="list-disc pl-8 space-y-2 text-muted-foreground">
            <li><strong className="text-foreground/80">데이터 수집 지연에 따른 UX 저하:</strong> 외부 사이트 데이터를 실시간으로 스크래핑하여 출력할 경우, 수집 과정의 지연이 프론트엔드 렌더링을 멈추게 하거나 타임아웃을 유발하는 구조적 병목이 예상되었습니다.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span> Solution
          </h4>
          <ul className="list-disc pl-8 space-y-3 text-muted-foreground">
            <li><strong className="text-foreground/80">엔드 투 엔드(End-to-End) 데이터 설계:</strong> 스크래핑-백엔드 캐싱-프론트엔드 시각화로 이어지는 데이터의 흐름을 직접 설계하고 구현했습니다.</li>
            <li><strong className="text-foreground/80">비동기 스케줄링 기반 수집 최적화:</strong> 서버에서 주기적으로 스크래핑을 수행하고 메모리에 데이터를 캐싱하는 비동기 CRON 스케줄러를 구축하여 클라이언트 요청과의 의존성을 분리했습니다.</li>
            <li><strong className="text-foreground/80">데이터 기반 대시보드 구현:</strong> 서버에 최적화되어 저장된 데이터를 프론트엔드에서 즉시 호출하도록 설계하여, 외부 서버 상태와 무관한 쾌적한 렌더링 환경을 조성했습니다.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-emerald-500 rounded-full inline-block"></span> Result
          </h4>
          <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/10 ml-4">
            <ul className="list-disc pl-4 space-y-2 text-sm leading-relaxed text-foreground/80">
              <li>팀 내 데이터 수집과 서빙 전반을 책임지며, 1주일이라는 짧은 기간 내에 안정적인 데이터 파이프라인 시뮬레이션을 완료했습니다.</li>
              <li>외부 지연 요소를 구조적으로 차단하는 설계를 통해 시스템 가용성을 높이는 풀스택 개발 역량을 증명했습니다.</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    highlights: ["비동기 캐시 시스템", "End-to-End 데이터 설계", "렌더링 지연 차단"],
    tags: ["Python", "Streamlit", "MySQL", "CRON Scheduling"],
    gradient: "from-amber-500/10 to-orange-500/10",
    images: [
      { src: "/images/lumina_dashboard.png", caption: "관리자를 위한 대시보드 뷰" }
    ],
    githubUrl: "https://github.com/kimgeon0802/1team_mini_PJT",
    hasAwards: false,
  },
  {
    icon: Microscope,
    title: "의료 영상 실시간 병변 검출 시스템 (Capstone)",
    description: "학부 캡스톤 디자인으로 진행한 프로젝트로, 데이터 증강과 구조적 가지치기를 통해 상용 엣지 디바이스 환경에서의 실시간 의료 영상 검출 AI 모델을 최적화했습니다.",
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
            <span className="w-1.5 h-6 bg-slate-500 rounded-full inline-block"></span> Project Background
          </h4>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            학부 캡스톤 디자인으로 진행한 프로젝트로, 엣지 디바이스 환경에서의 상용화를 목표로 실시간 의료 영상 검출 AI 모델을 최적화했습니다. (교내 캡스톤 대회 금상 및 공학교육 컨소시엄 경진대회 동상)
          </p>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-rose-500 rounded-full inline-block"></span> Problem
          </h4>
          <ul className="list-disc pl-8 space-y-2 text-muted-foreground">
            <li><strong className="text-foreground/80">데이터 부족과 자원 제약:</strong> 엣지 디바이스라는 제한된 하드웨어 리소스 환경에서 실시간 추론 속도를 확보해야 했습니다. 동시에 의료 데이터 특성상 절대적인 데이터 양이 부족하여 모델이 정답만 외워버리는 과적합 리스크가 존재했습니다.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span> Solution
          </h4>
          <ul className="list-disc pl-8 space-y-3 text-muted-foreground">
            <li><strong className="text-foreground/80">기하학적 왜곡 증강:</strong> 무분별한 파라미터 튜닝 대신 데이터 중심 접근을 택했습니다. 장벽의 탄력과 물리적 질감을 모사하는 증강 파이프라인을 직접 구축하여, 모델이 본연의 피처 학습에 집중하도록 유도했습니다.</li>
            <li><strong className="text-foreground/80">구조적 가지치기:</strong> 상용 환경에서의 원활한 동작을 위해, 모델 결과 기여도가 낮은 가중치를 덜어내는 가지치기 기법을 적용하여 연산량을 타이트하게 최적화했습니다.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-emerald-500 rounded-full inline-block"></span> Result
          </h4>
          <div className="p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/10 ml-4">
            <p className="text-sm leading-relaxed text-foreground/80">
              제한된 환경 속에서도 모델의 탐지 정밀도를 7% 향상시켰으며, 초당 22 프레임 이상의 처리 속도를 확보하여 엣지 환경에서의 상용화 가능성을 검증해 냈습니다.
            </p>
          </div>
        </div>
      </div>
    ),
    highlights: ["기하학적 왜곡 증강", "구조적 가지치기 최적화", "22 FPS 엣지 추론", "캡스톤 대상"],
    tags: ["Python", "PyTorch", "RF-DETR", "Computer Vision"],
    gradient: "from-blue-500/10 to-indigo-500/10",
    videoUrl: "https://www.youtube.com/embed/n6xKcYq7bWE",
    hasAwards: true,
  },
  {
    icon: Eye,
    title: "유방암 검출 비지도학습 AI 설계",
    description: "유방암 데이터셋을 활용하여 프레임워크의 저수준 API를 제어해 암세포의 미세한 특징을 스스로 군집화하고 탐지하도록 설계한 비지도학습 파이프라인입니다.",
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
            <span className="w-1.5 h-6 bg-slate-500 rounded-full inline-block"></span> Project Background
          </h4>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            유방암 데이터셋을 활용하여 암세포의 미세한 특징을 스스로 군집화하고 탐지하는 비지도학습 기반의 AI 모델 설계 프로젝트입니다.(2024 DNA 공학혁신상 수상)
          </p>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-rose-500 rounded-full inline-block"></span> Problem
          </h4>
          <ul className="list-disc pl-8 space-y-2 text-muted-foreground">
            <li><strong className="text-foreground/80">프레임워크 블랙박스 의존의 한계:</strong> 기존 라이브러리가 제공하는 블랙박스 형태의 기본 손실 함수만으로는 암세포 특유의 미세한 픽셀 이질감을 돋보이게 유도하고 학습시키는 데 구조적인 한계가 있었습니다.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span> Solution
          </h4>
          <ul className="list-disc pl-8 space-y-3 text-muted-foreground">
            <li><strong className="text-foreground/80">저수준 API 제어 및 로직 커스텀:</strong> 프레임워크의 저수준 API를 활용해 모델의 밑단 로직을 직접 제어했습니다. 분포 오차와 재구성 오차의 텐서 가중치를 데이터 특성에 맞게 세밀하게 조작하는 손실 함수를 설계했습니다.</li>
            <li><strong className="text-foreground/80">정확도의 함정 검증:</strong> 98%라는 비정상적인 조기 정확도가 도출되었을 때 이에 안주하지 않고, 편향된 데이터 공간을 전수 조사하여 평가 로직의 오류를 바로잡았습니다.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-emerald-500 rounded-full inline-block"></span> Result
          </h4>
          <div className="p-4 rounded-xl bg-violet-500/5 border border-violet-500/10 ml-4">
            <p className="text-sm leading-relaxed text-foreground/80">
              겉보기 성능에 의존하지 않고 정상 데이터와 이상 데이터 간의 경계를 명확히 학습하도록 유도하여, 치명적인 배포 리스크를 사전에 차단하고 실질적인 모델 탐지력을 고도화하는 데이터 검증 역량을 확보했습니다.
            </p>
          </div>
        </div>
      </div>
    ),
    highlights: ["로우레벨 모델 제어", "정확도의 함정 검파", "창의혁신 DNA 동상"],
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
  }
];"""

new_text, count = pattern.subn(new_array, text)

if count == 0:
    print("Match not found")
else:
    with codecs.open(file_path, 'w', 'utf-8') as f:
        f.write(new_text)
    print("Updates successfully applied")

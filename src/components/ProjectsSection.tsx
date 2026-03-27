import { useState } from "react";
import ScrollAnimator from "./ScrollAnimator";
import { Microscope, Eye, LineChart, ArrowUpRight, X } from "lucide-react";

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
};

const projects: ProjectType[] = [
  {
    icon: Eye,
    title: "VAE 기반 유방암 병변 검출 알고리즘 개발",
    description:
      "VAE(Variational AutoEncoder)를 활용하여 유방암 초음파 영상에서 병변을 자동으로 검출하는 비지도 학습 알고리즘을 개발했습니다. 정상 이미지로 학습된 생성형 모델이 병변 이미지를 정상 형태로 재구성하고, 원본과의 차영상을 분석해 병변 영역만을 정확하게 추출합니다.",
    longDescription: (
      <div className="space-y-6 text-base text-foreground/90">
        <div>
          <h4 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
            <span className="text-primary">1.</span> 의료 AI 연구 배경 및 목표
          </h4>
          <p className="text-muted-foreground leading-relaxed pl-5">
            의료영상 분야에서는 다양한 진단기기를 이용하는 환자수 증가에 비해 부족한 의료 인력과 제한적인 판독 시간, 주관적 편차에 따른 오진 문제를 해결하기 위해 AI 알고리즘 연구가 필수적입니다. 본 프로젝트는 초음파 영상에서 병변의 위치를 신속하고 정확하게 찾아내어, 전문의들이 고도의 의료행위에 더욱 집중할 수 있도록 돕는 생성형 AI 모델 기반의 조기 검출 솔루션 구축을 목표로 진행되었습니다.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
            <span className="text-primary">2.</span> 검출 알고리즘 핵심 아키텍처
          </h4>
          <div className="space-y-5 text-muted-foreground mt-3 pl-5">
            <div>
              <p className="font-semibold text-foreground/80 mb-1">① VAE 모델 구축 및 정상 패턴 학습 (Model Building)</p>
              <p className="leading-relaxed text-sm">정상 이미지를 대량으로 사전 학습시켜 VAE(Variational AutoEncoder) 모델을 구축합니다. 이 모델은 정상 이미지 조직의 고유한 패턴과 구조를 학습하게 되며, 추후 비정상(병변)이 포함된 이미지가 입력되면 학습된 정보를 바탕으로 이를 '병변이 없는 깨끗한 형태'로 자동 재구성(Reconstruction)해냅니다.</p>
            </div>
            <div>
              <p className="font-semibold text-foreground/80 mb-1">② 2차영상(차영상) 연산 추출 (Difference Image)</p>
              <p className="leading-relaxed text-sm">VAE 모델을 통해 재구성된 정상화 이미지와 원본 병변 이미지를 1:1로 비교하여 차영상을 생성합니다. 정상 배경 부분은 픽셀 값 차이가 적어 유사한 값을 유지하는 반면, 병변이 존재하는 영역은 재구성 과정에서의 차이(Reconstruction Error)로 인해 뚜렷하게 큰 값을 가지게 되어 병변의 위치가 시각적으로 강하게 부각됩니다.</p>
            </div>
            <div>
              <p className="font-semibold text-foreground/80 mb-1">③ 동적 임계값 설정 및 영역 검출 (Thresholding)</p>
              <p className="leading-relaxed text-sm">차영상 내부에서 오직 병변 영역만을 정확히 마스킹해 분리해내기 위해 이미지의 픽셀 값 분포도를 분석, 적절한 임계값(Threshold)을 동적으로 자동 세팅합니다. 이를 통해 초음파 영상 특유의 노이즈나 복잡한 배경 조직의 영향을 최소화하면서 검출 성능과 신뢰성을 한층 더 높일 수 있습니다.</p>
            </div>
          </div>
        </div>
      </div>
    ),
    highlights: ["Dice 40-90% 달성", "비지도 학습 방식", "공학혁신상 수상"],
    tags: ["Python", "TensorFlow", "VAE", "AutoEncoder", "Medical Imaging"],
    gradient: "from-violet-500/10 to-purple-500/10",
    images: [
      { src: "/images/vae_diff.png", caption: "1. 차영상 구하는법" },
      { src: "/images/vae_threshold.png", caption: "2. 동적임계값 사용전과 후 및 오리지널 마스크 이미지" },
      { src: "/images/vae_result.png", caption: "3. 결과 수치이미지" },
      { src: "/images/vae_award.jpg", caption: "🏆 공학혁신상 (창의혁신 DNA 산학협력 팀 프로젝트)" }
    ]
  },
  {
    icon: Microscope,
    title: "RF-DETR기반 실시간 대장 내 용종 검출 시스템 개발",
    description:
      "“AI가 의료진의 눈이 된다 — 실시간, 정확하게, 자동으로.” 복잡한 내시경 환경에서도 작은 병변을 빠르고 정확하게 탐지하며 데이터 증강 기법을 적용하여 강건성을 확보한 실시간 대장 용종 검출 및 자동 저장 시스템입니다.",
    longDescription: (
      <div className="space-y-6 text-base text-foreground/90">
        <div>
          <h4 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
            <span className="text-primary">1.</span> 프로젝트 개요
          </h4>
          <p className="text-muted-foreground leading-relaxed pl-5">
            의료 영상 판독은 의료진의 숙련도와 피로도에 따라 진단 편차가 발생하며, 특히 작은 병변은 쉽게 놓칠 수 있습니다. 이러한 문제를 극복하기 위해 RF-DETR 모델을 활용하여 실시간 대장 용종 검출 및 자동 저장 시스템을 개발했습니다. 병변 검출 시 영상이 자동 녹화되어 환자 정보와 함께 폴더별로 아카이빙되며, 이를 통해 의료진의 진단 효율과 관리 편의성을 매끄럽게 연장시킬 수 있도록 구현했습니다.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
            <span className="text-primary">2.</span> 핵심 기술 및 검출 알고리즘 고도화
          </h4>
          <div className="space-y-5 text-muted-foreground mt-3 pl-5">
            <div>
              <p className="font-semibold text-foreground/80 mb-1">① 기반 아키텍처 (RF-DETR + DINOv2)</p>
              <p className="leading-relaxed text-sm">Transformer 기반 최신 객체 탐지 모델인 RF-DETR 구조에 DINOv2 백본(Backbone)을 결합하여 세밀한 시각 특징을 추출합니다. Deformable Cross-Attention 메커니즘을 통해 다양한 조명과 불규칙한 배경에서도 작은 병변을 안정적으로 검출해 냅니다.</p>
            </div>
            <div>
              <p className="font-semibold text-foreground/80 mb-1">② 일반화 성능 및 강건성 강화 (Data Augmentation)</p>
              <p className="leading-relaxed text-sm">의료 영상 고유의 데이터 불균형 문제를 해결하기 위해 Elastic Deformation, Grid Distortion 등의 고급 데이터 증강 기법을 적용했습니다. 이를 통해 각기 다른 내시경 장비와 특수한 장 내 피부표면 질감 속에서도 매우 높은 탐지 성능과 모델 강건성(Robustness)을 달성했습니다.</p>
            </div>
            <div>
              <p className="font-semibold text-foreground/80 mb-1">③ 예측 모델 경량화 및 실시간(Real-time) 처리</p>
              <p className="leading-relaxed text-sm">데이터셋 특성에 맞춘 Fine-tuning, Weight Pruning(가중치 가지치기) 및 탐지 Query 수 조정 등의 구체적인 경량화 최적화를 수행했습니다. 결과적으로 로컬 GPU 환경에서 <strong>초당 22 FPS 이상</strong>의 실시간 처리 속도를 달성하였으며, 베이스라인 모델 대비 mAP(평균 정밀도)를 약 7% 큰 폭으로 향상시키는 성과를 얻었습니다.</p>
            </div>
            <div>
              <p className="font-semibold text-foreground/80 mb-1">④ 실시간 시각화 및 통합 편의성 제공 (GUI)</p>
              <p className="leading-relaxed text-sm">OpenCV 기반 GUI를 독자적으로 구축하여 <code className="bg-muted px-1.5 py-0.5 rounded">실시간 영상 입력 → 병변 검출 → 자동 녹화 및 폴더 저장</code>의 전체 과정을 단일 인터페이스에서 매끄럽게 처리합니다. 단순 탐지를 넘어 탐지박스 UI의 사용자 커스터마이징, 환자별 영상 기록을 통한 DataBase 자동 생성 기능을 하나의 독립된 소프트웨어 워크플로우로 포매팅했습니다.</p>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
            <span className="text-primary">3.</span> 임상 적용 방식 및 기대 수익
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>
              <strong className="text-foreground/80">실시간 스트리밍 분석:</strong> 캡슐내시경 영상 장비에서 송신한 영상을 무선으로 실시간 스트리밍하고 분석하여, 용종을 즉시 검출하고 의료진에게 시각화된 결과를 직관적으로 제공합니다.
            </li>
            <li>
              <strong className="text-foreground/80">오픈소스 기반 엔터프라이즈 확장성:</strong> 오픈소스 Apache 2.0 라이선스 기반으로 개발되어 향후 상용화 시 라이선스 고정 비용 부담이 없으며, 추후 캡슐내시경과 같은 초소형 저전력 엣지(Edge) 환경에도 직접 포팅이 가능한 자가 진단 솔루션으로의 기술적 확장성을 지니고 있습니다.
            </li>
          </ul>
        </div>
      </div>
    ),
    highlights: ["mAP 7% 향상", "22 FPS 실시간 처리", "임상 실용성 입증", "금상 및 동상 수상"],
    tags: ["Python", "PyTorch", "RF-DETR", "DINOv2", "Medical AI"],
    gradient: "from-blue-500/10 to-indigo-500/10",
    videoUrl: "https://www.youtube.com/embed/n6xKcYq7bWE",
    images: [
      { src: "/images/rf_detr_aug.png", caption: "고급 데이터 증강 기법 적용 예시 (Elastic Deformation, Grid Distortion 등)" },
      { src: "/images/rf_detr_gold.jpg", caption: "🏆 금상 (제17회 건양대학교 캡스톤디자인 경진대회)" },
      { src: "/images/rf_detr_bronze.jpg", caption: "🏆 동상 (창의적 종합설계 경진대회)" }
    ]
  },
  {
    icon: LineChart,
    title: "LUMINA CAPITAL (자산관리 및 맞춤형 주식 추천 대시보드)",
    description:
      "초보 투자자부터 전문가까지 쉽게 활용 가능한 '데이터 기반 맞춤형 투자 가이드'입니다. 방대한 빅데이터 기반의 퀀트 지표와 개인의 투자 성향 분석을 융합하여 최적의 맞춤 종목을 큐레이션 해주는 직관적인 시각화 대시보드입니다.",
    longDescription: (
      <div className="space-y-6 text-base text-foreground/90">
        <div>
          <h4 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
            <span className="text-primary">1.</span> 프로젝트 개요
          </h4>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            <li><strong className="text-foreground/80">팀 구성:</strong> 6인 (데이터 파이프라인, 풀스택 웹 개발, DB 모델링, 알고리즘 설계, UI/UX 시각화 등)</li>
            <li><strong className="text-foreground/80">프로젝트 목표:</strong> 정보의 불균형 속에서 초보 투자자부터 전문가까지 예측 가능한 직관적 시각화 대시보드를 통한 합리적 투자 의사결정 지원</li>
            <li><strong className="text-foreground/80">담당 역할:</strong> Web Service 풀스택 개발, 웹 스크래핑 파이프라인 구축 및 데이터 분석 모델링 로직 설계</li>
            <li><strong className="text-foreground/80">Backend / Pipeline:</strong> Python, MySQL, BeautifulSoup4, pykrx 등</li>
            <li><strong className="text-foreground/80">Frontend / Visualization:</strong> Streamlit, Matplotlib, Seaborn</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
            <span className="text-primary">2.</span> 주요 기여 및 핵심 구현 기능
          </h4>
          <div className="space-y-4 text-muted-foreground mt-3">
            <div>
              <p className="font-semibold text-foreground/80 mb-1">① 웹 서비스 풀스택 개발 및 사용자 인증 시스템</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong className="text-foreground/80">회원가입/로그인 및 세션 관리:</strong> 암호화 해싱을 적용한 자체 인증 체계를 구축하고, Streamlit의 Session State 로직을 제어해 안정적인 환경 확립</li>
                <li><strong className="text-foreground/80">실시간 대시보드 및 리포팅 UI:</strong> 지수 동향 차트, 실시간 뉴스 피드, 종목별 추천 종합 점수 히트맵 및 매매 동향 차트를 포함하는 6페이지 분량의 직관적인 대시보드 개발</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-foreground/80 mb-1">② 핵심 데이터 수집 파이프라인 및 DB/API 연동</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong className="text-foreground/80">실시간 주식 데이터 파이프라인:</strong> 코스피/코스닥 당일 시세, 등락률 상위 등 데이터 구조화 수집</li>
                <li><strong className="text-foreground/80">정형/비정형 데이터 수집:</strong> 시총, PER, PBR 등의 가치 분석 데이터 및 외국인/기관 순매수 동향, 최신 금융 뉴스 텍스트 자동 수집</li>
                <li><strong className="text-foreground/80">DB 및 외부 연동 체계:</strong> 수집된 데이터를 RDB(MySQL) 환경에 안정적으로 적재/동기화하며 조인 퍼포먼스 최적화</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-foreground/80 mb-1">③ 투자 성향 파악 및 맞춤형 종목 추천 분석 모델링</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong className="text-foreground/80">사용자 페르소나 5단계 분류:</strong> 11개 문항 설문을 통해 앱 사용자를 5가지 유형(안정형~공격투자형)으로 정밀 진단하는 백엔드 설계</li>
                <li><strong className="text-foreground/80">종합 투자 점수(Score) 모델링:</strong> 모멘텀, 수급, 52주 고/저가 가치지표 등을 종합 평가하여 자체적인 BUY / HOLD / SELL 투자 시그널 도출</li>
                <li><strong className="text-foreground/80">개인화 추천 알고리즘 렌더링:</strong> 산출된 분석 신호에 '개인의 투자 성향 가중치'를 결합해 최적의 주식만을 필터링 추천</li>
                <li><strong className="text-foreground/80">맞춤형 정보 제공 (뉴스레터):</strong> 사용자 유형에 맞춰 자동 생성되는 시장 브리핑 및 추천 리포트 발송 체계 적용</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
            <span className="text-primary">3.</span> 데이터 전처리 및 분석 방법론
          </h4>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            <li>
              <strong className="text-foreground/80">전처리 (Preprocessing):</strong> 데이터 수집 단계에서 결측치 제거, 거래정지 종목 필터링, 이상치 시세 보정 처리를 적용해 알고리즘 유입 데이터의 무결성과 신뢰도 확보
            </li>
            <li>
              <strong className="text-foreground/80">탐색적 데이터 분석(EDA) & 상관관계 분석:</strong> 수익률, 시세 상승률, 거래량, 리스크, 이동평균(MA) 추세 등의 핵심 지표 간 상관관계를 분석하고, Seaborn 히트맵 등 다차원 시각화로 구조화
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
            <span className="text-primary">4.</span> 트러블 슈팅 및 성과
          </h4>
          <div className="space-y-4 text-muted-foreground mt-3">
            <div className="p-4 rounded-lg bg-orange-500/5 border border-orange-500/20">
              <h5 className="font-semibold text-orange-400 mb-2">💡 외부 DB 적재 간 Timeout 및 병목 현상 완화</h5>
              <p className="text-sm leading-relaxed text-foreground/80">모든 웹 요청마다 크롤링을 수행하던 레거시 구조에서 탈피하여, JSON-First 기반 로컬 캐시 구조와 1시간 단위 Background DB Sync 스케줄링 방식을 도입함으로써 웹 서비스 렌더링 속도와 DB 네트워크 안정성을 획기적으로 향상시켰습니다.</p>
            </div>
            <div className="p-4 rounded-lg bg-blue-500/5 border border-blue-500/20">
              <h5 className="font-semibold text-blue-400 mb-2">💡 Streamlit UI/UX 리렌더링 및 상태(State) 유지 문제 해결</h5>
              <p className="text-sm leading-relaxed text-foreground/80">Streamlit 특유의 재실행(Re-run) 구조로 인한 설문조사 진행 간 데이터 휘발 현상을 해결하기 위해, <code className="bg-muted px-1.5 py-0.5 rounded text-xs">st.session_state</code>를 정교하게 제어하여 끊김 없는 로그인 및 맞춤 추천 UX를 안정적으로 구현해 냈습니다.</p>
            </div>
          </div>
        </div>
      </div>
    ),
    highlights: ["대시보드 풀스택 개발", "성향 분석 추천 모델링", "웹 스크래핑 파이프라인"],
    tags: ["Python", "Streamlit", "MySQL", "BeautifulSoup4", "Seaborn", "pykrx"],
    gradient: "from-amber-500/10 to-orange-500/10",
    images: [
      { src: "/images/lumina_dashboard.png", caption: "1. 시장 개요 대시보드" },
      { src: "/images/lumina_signup.png", caption: "2. 안전하고 편리한 회원가입" },
      { src: "/images/lumina_terms.png", caption: "3. 초보자를 위한 상세한 금융 용어정리" },
      { src: "/images/lumina_survey.png", caption: "4. 11가지 문항의 투자 성향 설문조사" },
      { src: "/images/lumina_chart.png", caption: "5. 캔들스틱 시각화 및 AI를 통한 퀀트 분석 / 투자 추천" },
      { src: "/images/lumina_news.png", caption: "6. 실시간 종목 관련 뉴스 스크래핑" },
      { src: "/images/lumina_newsletter.png", caption: "7. 투자 성향 맞춤형 생성형 AI 뉴스레터" }
    ]
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

              <div className="flex items-center gap-4 mb-6 pr-8">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${selectedProject.gradient}`}>
                  <selectedProject.icon size={32} className="text-foreground" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold leading-tight">{selectedProject.title}</h3>
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
                    프로젝트 갤러리 및 수상 내역
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

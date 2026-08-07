import { ArrowDown, ExternalLink, Play, Sparkles } from "lucide-react";

type HeroSectionProps = {
  readonly variant?: "ai" | "fullstack";
};

const HeroSection = ({ variant = "ai" }: HeroSectionProps) => {
  const isFullstack = variant === "fullstack";
  const metrics = isFullstack
    ? [
        { value: "2주", label: "1인 서비스 완성", note: "기획부터 배포" },
        { value: "29/29", label: "1초 내 이벤트 전달", note: "2카메라 측정" },
        { value: "1 Incident", label: "경보·증거·설명 통합", note: "originalEventId" },
      ]
    : [
        { value: "+4.20%p", label: "행동 분류 F1", note: "89.29 → 93.49%" },
        { value: "8 → 1", label: "ID Switch", note: "자체 낙상 테스트" },
        { value: "-48.2%", label: "전체 처리 지연", note: "11.789 → 6.101ms" },
      ];

  const showLocalPortfolioSwitcher = !import.meta.env.PROD;
  const crossPortfolioUrl = isFullstack ? "/ai" : "/fullstack";
  const crossPortfolioLabel = isFullstack
    ? "AI 모델·Tracking 상세"
    : "관제 플랫폼 상세";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: "var(--header-height)", background: "var(--gradient-hero)" }}
    >
      <div className="float-decoration w-96 h-96 -top-48 -right-48" />
      <div className="float-decoration w-64 h-64 bottom-20 -left-32 opacity-20" />
      <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-primary/20 animate-pulse" />
      <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 rounded-full bg-accent/20 animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/4 w-1 h-1 rounded-full bg-primary/15 animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center max-w-6xl mx-auto">
          <div className="order-1 lg:order-1 lg:col-span-7 pr-0 lg:pr-10">
            <div className="mb-5">
              <p className="text-sm font-bold tracking-[0.2em] text-primary uppercase">
                An Jin Gyeong
              </p>
              <p className="mt-1 text-base font-semibold text-foreground/70">
                안진경 · {isFullstack ? "Full-Stack Developer" : "융합보안·AI 안전관제 플랫폼 개발자"}
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/10 mb-5">
              <Sparkles size={14} className="text-primary" />
              <span className="text-sm font-medium text-primary">
                FM·안전관리 플랫폼 연계 · 융합보안 · 지능형 영상관제
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-black mb-4 text-foreground leading-[1.25] tracking-tight break-keep">
              {isFullstack
                ? "안전·보안 이벤트를 운영 가능한 관제 서비스로 연결합니다"
                : "실시간 영상 AI의 정확도와 지연을 개선하고 관제 서비스까지 연결했습니다"}
            </h1>

            <div className="mb-8 max-w-xl space-y-3 break-keep">
              <p className="text-base md:text-lg text-foreground/75 leading-relaxed font-normal">
                {isFullstack
                  ? "AI 위험 이벤트가 MQTT·Spring Boot·Incident·STOMP를 거쳐 관제 화면과 사고 검색까지 이어지는 흐름을 설계했습니다. 비동기 도착 순서와 중복, 실패 상황을 함께 검증했습니다."
                  : "SK쉴더스 지능형 애플리케이션 개발 과정의 스마트 안전관제 팀 프로젝트에서 RTSP 영상 입력부터 Pose·Tracking·행동 분석, MQTT 이벤트 전달과 관제 화면 알림까지 이어지는 흐름을 함께 검증했습니다. 저는 모델 성능뿐 아니라 Tracking 단절과 처리 지연을 구간별 수치로 비교해 개선했습니다."}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                <strong className="font-semibold text-foreground">개인 기여 · </strong>
                {isFullstack
                  ? "이벤트 계약, originalEventId 기반 Incident 정합성, VLM 비동기 처리 흐름과 파트 간 통합 검증"
                  : "YOLO 후보 비교·선정, Tracking 재연결, LSTM 입력 특징 보강, 실시간 처리 지연 분석·최적화, 영상 송출 및 MQTT 계약 정합성 조율"}
              </p>
            </div>

            <div className="grid max-w-xl grid-cols-1 gap-3 mb-8 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-xl border border-border/70 bg-background/45 px-4 py-3 backdrop-blur-sm">
                  <strong className="block text-lg font-bold text-primary">{metric.value}</strong>
                  <span className="mt-0.5 block text-sm font-semibold text-foreground">{metric.label}</span>
                  <span className="mt-1 block text-xs text-muted-foreground">{metric.note}</span>
                </div>
              ))}
            </div>

            <div className="relative z-20 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="minimal-btn-primary"
                onClick={(event) => {
                  event.preventDefault();
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                대표 프로젝트 보기
              </a>
              <a
                href="https://www.youtube.com/watch?v=O1-JNhcpvDQ"
                target="_blank"
                rel="noopener noreferrer"
                className="minimal-btn inline-flex items-center gap-2"
              >
                <Play size={16} />
                시연 영상
              </a>
              {showLocalPortfolioSwitcher ? (
                <a
                  href={crossPortfolioUrl}
                  className="minimal-btn inline-flex items-center gap-2"
                >
                  <ExternalLink size={16} />
                  {crossPortfolioLabel}
                </a>
              ) : null}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end order-2 lg:order-2 lg:col-span-5">
            <div className="flex flex-col items-center">
              <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-[19rem] lg:h-[19rem] rounded-full border border-primary/30 overflow-hidden group" style={{ boxShadow: "0 8px 48px rgba(60, 80, 180, 0.10), 0 1px 4px rgba(0,0,0,0.06)" }}>
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src="/profile.jpg"
                  alt="안진경 프로필 사진"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="mt-5 text-center">
                <strong className="block text-xl font-black tracking-tight text-foreground">안진경</strong>
                <span className="mt-1 block text-sm font-semibold text-primary">
                  {isFullstack ? "Full-Stack Developer" : "융합보안·AI 안전관제 플랫폼 개발자"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="프로젝트로 이동"
      >
        <ArrowDown size={20} />
      </button>
    </section>
  );
};

export default HeroSection;

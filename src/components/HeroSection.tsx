import { ArrowDown, ExternalLink, Play, Sparkles } from "lucide-react";

type HeroSectionProps = {
  readonly variant?: "ai" | "fullstack";
};

const HeroSection = ({ variant = "ai" }: HeroSectionProps) => {
  const isFullstack = variant === "fullstack";
  const metrics = isFullstack
    ? [
        { value: "29/29", label: "1초 내 MQTT 도달", note: "2카메라 · Subscriber 기준" },
        { value: "2", label: "운영 배포 웹서비스", note: "SongSong · 마음이음" },
        { value: "61", label: "검색 품질 평가 질의", note: "LLM Wiki · Golden Query" },
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
      className="relative min-h-screen flex items-center overflow-hidden py-8 sm:py-12 lg:py-0"
      style={{ paddingTop: "var(--header-height)", background: "var(--gradient-hero)" }}
    >
      <div className="float-decoration w-96 h-96 -top-48 -right-48" />
      <div className="float-decoration w-64 h-64 bottom-20 -left-32 opacity-20" />
      <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-primary/20 animate-pulse" />
      <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 rounded-full bg-accent/20 animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/4 w-1 h-1 rounded-full bg-primary/15 animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center max-w-6xl mx-auto">
          <div className="order-1 lg:order-1 lg:col-span-7 pr-0 lg:pr-10">
            <div className="mb-5">
              <p className="text-sm font-bold tracking-[0.2em] text-primary uppercase">
                An Jin Gyeong
              </p>
              <p className="mt-1 text-base font-semibold text-foreground/70">
                안진경 · {isFullstack ? "Full-Stack Developer" : "AI Software Engineer"}
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/10 mb-5">
              <Sparkles size={14} className="text-primary" />
              <span className="text-sm font-medium text-primary">
                {isFullstack ? "Web · API · Realtime · Cloud Delivery" : "Vision · Agentic Systems · Platform Integration"}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-black mb-4 text-foreground leading-[1.25] tracking-tight break-keep">
              {isFullstack
                ? "사용자 흐름부터 API·데이터·실시간 이벤트·배포까지 하나의 서비스로 연결합니다"
                : "AI 모델을 실시간 시스템과 Agentic 개발 도구까지 연결합니다"}
            </h1>

            <div className="mb-8 max-w-xl space-y-3 break-keep">
              <p className="text-base md:text-lg text-foreground/75 leading-relaxed font-normal">
                {isFullstack
                  ? "팀 프로젝트에서는 MQTT → Spring Boot → DB → WebSocket → React로 이어지는 실시간 이벤트 흐름의 데이터 계약과 정합성을 맞췄습니다. 개인 프로젝트에서는 React·TypeScript와 Cloudflare Workers·D1·Durable Objects를 활용해 실제 웹서비스를 기획부터 배포까지 완성했습니다."
                  : "실시간 영상 AI에서는 추론·Tracking·이벤트 전달 병목을 수치로 개선했고, JK에서는 ChatGPT와 로컬 프로젝트 사이에 상태·권한·검증을 갖춘 MCP 실행 계층을 구현했습니다. 문제는 로그와 동일 조건 비교로 좁히고, 변경은 테스트와 실행 근거로 확인합니다."}
              </p>
              {isFullstack ? (
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <strong className="font-semibold text-foreground">개인 기여 · </strong>
                  팀: 이벤트 계약·Incident 정합성·통합 검증 / 개인: 요구사항·UI·API·DB·배포 / 개발 방식: LLM 활용 + 로그·테스트 기반 직접 QA
                </p>
              ) : null}
            </div>

            <div className="grid max-w-xl grid-cols-3 gap-2 sm:gap-3 mb-6 sm:mb-8">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-xl border border-border/70 bg-background/45 px-2.5 sm:px-4 py-3 backdrop-blur-sm">
                  <strong className="block text-base sm:text-lg font-bold text-primary">{metric.value}</strong>
                  <span className="mt-0.5 block text-[11px] sm:text-sm font-semibold text-foreground break-keep">{metric.label}</span>
                  <span className="mt-1 block text-[10px] sm:text-xs text-muted-foreground">{metric.note}</span>
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
              <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-[19rem] lg:h-[19rem] rounded-full border border-primary/30 overflow-hidden group" style={{ boxShadow: "0 8px 48px rgba(60, 80, 180, 0.10), 0 1px 4px rgba(0,0,0,0.06)" }}>
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src="/profile.jpg"
                  alt="안진경 프로필 사진"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              {isFullstack ? (
                <div className="mt-5 text-center">
                  <strong className="block text-xl font-black tracking-tight text-foreground">안진경</strong>
                  <span className="mt-1 block text-sm font-semibold text-primary">Full-Stack Developer</span>
                </div>
              ) : null}
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

import { ArrowDown, Sparkles } from "lucide-react";

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
        { value: "93.49%", label: "행동 분류 F1", note: "51D → 54D" },
        { value: "8 → 1", label: "ID Switch", note: "자체 낙상 테스트" },
        { value: "-50.0%", label: "YOLO 평균 지연", note: "TensorRT 적용" },
      ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: "var(--header-height)", background: "var(--gradient-hero)" }}
    >
      {/* Floating decorations */}
      <div className="float-decoration w-96 h-96 -top-48 -right-48" />
      <div className="float-decoration w-64 h-64 bottom-20 -left-32 opacity-20" />
      <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-primary/20 animate-pulse" />
      <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 rounded-full bg-accent/20 animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/4 w-1 h-1 rounded-full bg-primary/15 animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center max-w-6xl mx-auto">
          {/* Text Content (Left side on desktop, first on mobile) */}
          <div className="order-1 lg:order-1 lg:col-span-7 pr-0 lg:pr-10">
            <div className="mb-5">
              <p className="text-sm font-bold tracking-[0.2em] text-primary uppercase">
                An Jin Gyeong
              </p>
              <p className="mt-1 text-base font-semibold text-foreground/70">
                안진경 · {isFullstack ? "Full-Stack Developer" : "Computer Vision AI Engineer"}
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/10 mb-5">
              <Sparkles size={14} className="text-primary" />
              <span className="text-sm font-medium text-primary">{isFullstack ? "Full-Stack Developer Portfolio" : "AI Engineer Portfolio"}</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-black mb-4 text-foreground leading-[1.25] tracking-tight break-keep">
              {isFullstack ? "AI 기능을 운영 가능한 서비스로 완성하는 개발자" : "실시간 영상 AI를 현장에서 작동하게 만드는 엔지니어"}
            </h1>

            <p className="text-base md:text-lg text-foreground/75 mb-8 leading-relaxed font-normal max-w-xl break-keep">
              {isFullstack
                ? "화면·API·데이터·실시간 이벤트를 연결하고, 비동기 정합성과 실패 복구까지 고려합니다."
                : "Pose·Tracking·행동 분류부터 TensorRT 최적화와 MQTT 연동까지, 파이프라인의 병목을 로그와 지표로 해결합니다."}
            </p>

            <div className="grid max-w-xl grid-cols-1 gap-3 mb-8 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-xl border border-border/70 bg-background/45 px-4 py-3 backdrop-blur-sm">
                  <strong className="block text-lg font-bold text-primary">{metric.value}</strong>
                  <span className="mt-0.5 block text-sm font-semibold text-foreground">{metric.label}</span>
                  <span className="mt-1 block text-xs text-muted-foreground">{metric.note}</span>
                </div>
              ))}
            </div>

            <div className="relative z-20">
              <a href="#projects" className="minimal-btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}>
                프로젝트 보기
              </a>
            </div>
          </div>

          {/* Profile Image (Right side on desktop, second on mobile) */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-2 lg:col-span-5">
            <div className="flex flex-col items-center">
              <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-[19rem] lg:h-[19rem] rounded-full border border-primary/30 overflow-hidden group" style={{ boxShadow: '0 8px 48px rgba(60, 80, 180, 0.10), 0 1px 4px rgba(0,0,0,0.06)' }}>
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
                  {isFullstack ? "Full-Stack Developer" : "Computer Vision AI Engineer"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown size={20} />
      </button>
    </section>
  );
};

export default HeroSection;

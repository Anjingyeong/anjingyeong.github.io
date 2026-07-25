import { useState, useEffect } from "react";
import { ArrowDown, Sparkles, Brain, Network, Cpu } from "lucide-react";

type HeroSectionProps = {
  readonly variant?: "ai" | "fullstack";
};

const HeroSection = ({ variant = "ai" }: HeroSectionProps) => {
  const isFullstack = variant === "fullstack";
  const fullText = isFullstack
    ? "화면·API·데이터·실시간 이벤트를 하나의 흐름으로 연결합니다."
    : "실시간 AI는 정확도뿐 아니라 현재성을 지켜야 합니다.";
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setTypingDone(true);
      }
    }, 50);
    return () => clearInterval(timer);
  }, [fullText]);

  useEffect(() => {
    if (!typingDone) return;
    const blink = setInterval(() => setShowCursor((v) => !v), 500);
    return () => clearInterval(blink);
  }, [typingDone]);

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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/10 mb-6">
              <Sparkles size={14} className="text-primary" />
              <span className="text-sm font-medium text-primary">{isFullstack ? "Full-Stack Developer Portfolio" : "AI Engineer Portfolio"}</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-black mb-4 text-foreground leading-[1.25] tracking-tight break-keep">
              {isFullstack ? "AI 이벤트를 실제 서비스 흐름으로 연결해 온 풀스택 개발자" : "실시간 영상 AI의 정확도와 지연을 함께 개선한 컴퓨터비전 엔지니어"}
            </h1>

            <p className="text-base md:text-lg font-mono mb-6 text-primary font-semibold">
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-primary)" }}>
                {displayText}
              </span>
              <span className={`inline-block w-0.5 h-5 bg-primary ml-1 align-middle transition-opacity ${showCursor ? "opacity-100" : "opacity-0"}`} />
            </p>

            <p className="text-base md:text-lg text-foreground/80 mb-8 leading-relaxed font-normal max-w-xl">
              {isFullstack
                ? "사용자 입력과 AI 이벤트가 화면, API, 저장, 알림과 검색까지 끊기지 않도록 설계합니다. 기능 구현뿐 아니라 비동기 데이터의 정합성, 실패 복구와 실제 배포까지 함께 다룹니다."
                : "모델의 성능만 높이는 데서 끝나지 않고, Tracking·입력 시퀀스·프레임 지연·이벤트 전달 구간을 수치와 로그로 분석해 실제 환경에서 제때 작동하는 AI를 만듭니다."}
            </p>

            {/* Accomplishments Bullet Points */}
            <ul className="text-sm md:text-base text-muted-foreground mb-8 max-w-xl space-y-3.5 relative z-20 leading-[1.75] font-light">
              {isFullstack ? (
                <>
                  <li className="flex items-start gap-2.5">
                    <span className="text-primary font-bold mt-0.5">•</span>
                    <span><strong className="font-semibold text-foreground">[1인 서비스]</strong> 약 2주 동안 자가체크 UI, 결과 계산, Workers API, D1 저장, 관리자 통계, PDF 리포트와 운영 배포까지 완성</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-primary font-bold mt-0.5">•</span>
                    <span><strong className="font-semibold text-foreground">[실시간 관제]</strong> 2카메라 환경에서 측정한 위험 이벤트 29건을 모두 1초 이내에 전달하고 End-to-End 평균 지연 20.931ms 확인</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-primary font-bold mt-0.5">•</span>
                    <span><strong className="font-semibold text-foreground">[데이터 정합성]</strong> originalEventId를 기준으로 실시간 경보·스냅샷·사고 클립·VLM 설명을 하나의 Incident로 병합</span>
                  </li>
                </>
              ) : (
                <>
                  <li className="flex items-start gap-2.5">
                    <span className="text-primary font-bold mt-0.5">•</span>
                    <span><strong className="font-semibold text-foreground">[행동 분류]</strong> 51D 관절 특징에 하강량·이동 속도·상체 기울기를 추가해 F1-score를 89.29%에서 93.49%로 개선</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-primary font-bold mt-0.5">•</span>
                    <span><strong className="font-semibold text-foreground">[Tracking]</strong> 자체 테스트 영상 기준 ID Switch를 8건에서 1건으로 줄이고, Mean Track Coverage를 35.76%에서 49.70%로 개선</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-primary font-bold mt-0.5">•</span>
                    <span><strong className="font-semibold text-foreground">[추론 최적화]</strong> 동일 카메라 입력에서 TensorRT를 적용해 YOLO 평균 지연을 9.454ms에서 4.723ms로 50.0% 감소</span>
                  </li>
                </>
              )}
            </ul>

            {/* Categorized Tech Stack Tags */}
            <div className="space-y-3.5 mb-10 relative z-20 max-w-xl border-t border-border/60 pt-6">
              <div className="flex items-center gap-3 text-sm">
                <div className="flex items-center gap-1.5 font-semibold min-w-[100px] text-xs uppercase tracking-wider text-muted-foreground/80">
                  <Brain size={14} className="text-primary/70" />
                  <span>{isFullstack ? "Backend" : "Model"}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {isFullstack ? (
                    <>
                      <span className="tech-tag">Spring Boot</span>
                      <span className="tech-tag">Spring Data JPA</span>
                      <span className="tech-tag">Cloudflare Workers</span>
                    </>
                  ) : (
                    <>
                      <span className="tech-tag">YOLO26n-pose</span>
                      <span className="tech-tag">LSTM</span>
                      <span className="tech-tag">RF-DETR</span>
                    </>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <div className="flex items-center gap-1.5 font-semibold min-w-[100px] text-xs uppercase tracking-wider text-muted-foreground/80">
                  <Network size={14} className="text-primary/70" />
                  <span>{isFullstack ? "Frontend" : "Pipeline"}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {isFullstack ? (
                    <>
                      <span className="tech-tag">React</span>
                      <span className="tech-tag">TypeScript</span>
                      <span className="tech-tag">Tailwind CSS</span>
                    </>
                  ) : (
                    <>
                      <span className="tech-tag">RTSP</span>
                      <span className="tech-tag">Tracking</span>
                      <span className="tech-tag">MQTT</span>
                    </>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <div className="flex items-center gap-1.5 font-semibold min-w-[100px] text-xs uppercase tracking-wider text-muted-foreground/80">
                  <Cpu size={14} className="text-primary/70" />
                  <span>{isFullstack ? "Data & Realtime" : "Optimization"}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {isFullstack ? (
                    <>
                      <span className="tech-tag">PostgreSQL / pgvector</span>
                      <span className="tech-tag">Cloudflare D1</span>
                      <span className="tech-tag">MQTT / WebSocket</span>
                    </>
                  ) : (
                    <>
                      <span className="tech-tag">PyTorch</span>
                      <span className="tech-tag">OpenCV</span>
                      <span className="tech-tag">TensorRT</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="flex gap-3 flex-wrap relative z-20">
              <a href="#projects" className="minimal-btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}>
                핵심 프로젝트 보기
              </a>
            </div>
          </div>

          {/* Profile Image (Right side on desktop, second on mobile) */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-2 lg:col-span-5">
            <div className="relative w-44 h-44 md:w-56 md:h-56 lg:w-[18rem] lg:h-[18rem] rounded-full border border-primary/30 overflow-hidden group" style={{ boxShadow: '0 8px 48px rgba(60, 80, 180, 0.10), 0 1px 4px rgba(0,0,0,0.06)' }}>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src="/profile.jpg"
                alt="안진경 프로필 사진"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
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

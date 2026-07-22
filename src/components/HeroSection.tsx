import { useState, useEffect } from "react";
import { ArrowDown, Sparkles, Brain, Network, Cpu } from "lucide-react";

const HeroSection = () => {
  const fullText = "정답에도 유효시간이 있습니다.";
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
  }, []);

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
          {/* Text Content (Left side on desktop) */}
          <div className="order-2 lg:order-1 lg:col-span-7 pr-0 lg:pr-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/10 mb-6">
              <Sparkles size={14} className="text-primary" />
              <span className="text-sm font-medium text-primary">AI Engineer Portfolio</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-black mb-4 text-foreground leading-[1.25] tracking-tight break-keep">
              실시간 영상 AI의 정확도와 지연을 함께 개선한 컴퓨터비전 엔지니어
            </h1>

            <p className="text-base md:text-lg font-mono mb-6 text-primary font-semibold">
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-primary)" }}>
                {displayText}
              </span>
              <span className={`inline-block w-0.5 h-5 bg-primary ml-1 align-middle transition-opacity ${showCursor ? "opacity-100" : "opacity-0"}`} />
            </p>

            <p className="text-base md:text-lg text-foreground/80 mb-8 leading-relaxed font-normal max-w-xl">
              의공학 기반의 의료 AI 프로젝트 경험을 바탕으로, 모델 학습부터 실시간 추론, 이벤트 파이프라인, 관제 화면 연동까지 구현합니다.
            </p>

            {/* Accomplishments Bullet Points */}
            <ul className="text-sm md:text-base text-muted-foreground mb-8 max-w-xl space-y-3.5 relative z-20 leading-[1.75] font-light">
              <li className="flex items-start gap-2.5">
                <span className="text-primary font-bold mt-0.5">•</span>
                <span>
                  <strong className="font-semibold text-foreground">[의료 AI]</strong> 모델 학습부터 실시간 추론, 관제 화면 연동까지 풀파이프라인 구축 경험
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-primary font-bold mt-0.5">•</span>
                <span>
                  <strong className="font-semibold text-foreground">[성능 최적화]</strong> RF-DETR 기반 용종 검출: <strong className="font-semibold text-primary">mAP@50 86.2%</strong>, <strong className="font-semibold text-primary">22+ FPS</strong> 달성
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-primary font-bold mt-0.5">•</span>
                <span>
                  <strong className="font-semibold text-foreground">[데이터 처리]</strong> RTSP &rarr; MQTT &rarr; WebSocket으로 이어지는 실시간 지능형 관제 시스템 설계
                </span>
              </li>
            </ul>

            {/* Categorized Tech Stack Tags */}
            <div className="space-y-3.5 mb-10 relative z-20 max-w-xl border-t border-border/60 pt-6">
              <div className="flex items-center gap-3 text-sm">
                <div className="flex items-center gap-1.5 font-semibold min-w-[100px] text-xs uppercase tracking-wider text-muted-foreground/80">
                  <Brain size={14} className="text-primary/70" />
                  <span>Model</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="tech-tag">RF-DETR</span>
                  <span className="tech-tag">YOLO Pose</span>
                  <span className="tech-tag">VAE</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <div className="flex items-center gap-1.5 font-semibold min-w-[100px] text-xs uppercase tracking-wider text-muted-foreground/80">
                  <Network size={14} className="text-primary/70" />
                  <span>Pipeline</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="tech-tag">RTSP</span>
                  <span className="tech-tag">MQTT</span>
                  <span className="tech-tag">WebSocket</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <div className="flex items-center gap-1.5 font-semibold min-w-[100px] text-xs uppercase tracking-wider text-muted-foreground/80">
                  <Cpu size={14} className="text-primary/70" />
                  <span>Stack</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="tech-tag">PyTorch</span>
                  <span className="tech-tag">FastAPI</span>
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Spring Boot</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3 flex-wrap relative z-20">
              <a href="#projects" className="minimal-btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}>
                핵심 프로젝트 보기
              </a>
            </div>
          </div>

          {/* Profile Image (Right side on desktop, enlarged for better visual balance) */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 lg:col-span-5">
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

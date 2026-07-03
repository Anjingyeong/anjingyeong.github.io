import { useState, useEffect } from "react";
import { ArrowDown, Sparkles } from "lucide-react";

const HeroSection = () => {
  const fullText = "AI Engineer";
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center max-w-6xl mx-auto">
          {/* Text Content (Left side on desktop) */}
          <div className="order-2 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/10 mb-6">
              <Sparkles size={14} className="text-primary" />
              <span className="text-sm font-medium text-primary">Applied AI Engineer</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-foreground leading-[1.3] tracking-tight break-keep">
              모델 추론부터 실시간 파이프라인까지,<br className="hidden md:block" /> 현장에서 안정적으로 동작하는 AI를 만듭니다.
            </h1>

            <p className="text-lg md:text-xl font-mono mb-6">
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-primary)" }}>
                {displayText}
              </span>
              <span className={`inline-block w-0.5 h-5 bg-primary ml-1 align-middle transition-opacity ${showCursor ? "opacity-100" : "opacity-0"}`} />
            </p>

            <div className="text-base text-muted-foreground mb-8 max-w-xl leading-relaxed space-y-4 relative z-20">
              <p>
                의공학적 사고를 바탕으로 실시간 영상 AI, Data-Centric 모델링, Hybrid RAG 검색 고도화를 수행했습니다. 
                단일 모델 성능에 그치지 않고 RTSP, MQTT, WebSocket, 백엔드 연동을 통해 AI 판단이 관제 화면과 실제 운영 흐름까지 신뢰성 있게 연결되는 구조를 설계합니다.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-10 relative z-20">
              <span className="tech-tag">PyTorch · OpenCV · YOLO</span>
              <span className="tech-tag">Hybrid RAG · BM25 · Vector Search</span>
              <span className="tech-tag">FastAPI · RTSP · MQTT · WebSocket</span>
              <span className="tech-tag">React · TypeScript</span>
            </div>

            <div className="flex gap-3 flex-wrap relative z-20">
              <a href="#projects" className="minimal-btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}>
                핵심 성과 보기
              </a>
              <a href="#about" className="minimal-btn-secondary" onClick={(e) => { e.preventDefault(); document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" }); }}>
                개발자 소개
              </a>
            </div>
          </div>

          {/* Profile Image (Right side on desktop) */}
          <div className="flex justify-center lg:justify-start order-1 lg:order-1">
            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-[22rem] lg:h-[22rem] rounded-full border border-primary/30 overflow-hidden group" style={{ boxShadow: '0 8px 48px rgba(60, 80, 180, 0.10), 0 1px 4px rgba(0,0,0,0.06)' }}>
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

import { useState, useEffect } from "react";
import { ArrowDown, Sparkles } from "lucide-react";

const HeroSection = () => {
  const fullText = "AI/ML Engineer";
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
        <div className="max-w-2xl">
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full border-2 border-primary/20 mb-8 overflow-hidden shadow-xl ring-4 ring-primary/5">
            <img
              src="/profile.jpg"
              alt="안진경 프로필 사진"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/10 mb-6">
            <Sparkles size={14} className="text-primary" />
            <span className="text-sm font-medium text-primary">반갑습니다</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground leading-[1.1]">
            안진경입니다.
          </h1>

          <p className="text-lg md:text-xl font-mono mb-6">
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-primary)" }}>
              {displayText}
            </span>
            <span className={`inline-block w-0.5 h-5 bg-primary ml-1 align-middle transition-opacity ${showCursor ? "opacity-100" : "opacity-0"}`} />
          </p>

          <p className="text-base text-muted-foreground mb-10 max-w-xl leading-relaxed">
            AI 기술을 활용하여 실시간 데이터 처리 및 지능형 애플리케이션을 개발합니다.
            의료AI부터 응용 소프트웨어까지, 다양한 분야의 AI 솔루션을 연구합니다.
          </p>

          <div className="flex gap-3 flex-wrap">
            <a href="#projects" className="minimal-btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}>
              System Modules
            </a>
            <a href="#contact" className="minimal-btn-secondary" onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}>
              Connect
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown size={20} />
      </button>
    </section>
  );
};

export default HeroSection;

import { useState, useEffect } from "react";
import { ArrowDown, Sparkles } from "lucide-react";

const HeroSection = () => {
  const fullText = "Data-Driven Full-Stack Engineer";
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

          <h1 className="text-4xl md:text-[3.5rem] font-bold mb-4 text-foreground leading-[1.2] tracking-tight">
            AI/ML의 깊이와<br className="hidden md:block" /> 풀스택 웹 인프라의 넓이를 연결합니다.
          </h1>

          <p className="text-lg md:text-xl font-mono mb-6">
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-primary)" }}>
              {displayText}
            </span>
            <span className={`inline-block w-0.5 h-5 bg-primary ml-1 align-middle transition-opacity ${showCursor ? "opacity-100" : "opacity-0"}`} />
          </p>

          <div className="text-base text-muted-foreground mb-8 max-w-xl leading-relaxed space-y-4">
            <p>
              AI 모델링부터 대규모 웹 트래픽 제어까지. 데이터의 흐름을 꿰뚫고, 예외 상황에서도 멈추지 않는 견고한 프로덕션 서비스를 설계합니다.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mb-10">
            <span className="px-3 py-1 text-xs md:text-sm font-semibold rounded-md bg-primary/10 text-primary border border-primary/20">Python · PyTorch</span>
            <span className="px-3 py-1 text-xs md:text-sm font-semibold rounded-md bg-primary/10 text-primary border border-primary/20">Spring Boot · JPA</span>
            <span className="px-3 py-1 text-xs md:text-sm font-semibold rounded-md bg-primary/10 text-primary border border-primary/20">React · TS</span>
            <span className="px-3 py-1 text-xs md:text-sm font-semibold rounded-md bg-primary/10 text-primary border border-primary/20">MySQL · WebSockets</span>
          </div>

          <div className="flex gap-3 flex-wrap">
            <a href="#projects" className="minimal-btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}>
              핵심 성과 보기
            </a>
            <a href="#about" className="minimal-btn-secondary" onClick={(e) => { e.preventDefault(); document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" }); }}>
              개발자 소개
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

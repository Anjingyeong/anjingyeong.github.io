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

          <p className="text-base text-muted-foreground mb-8 max-w-xl leading-relaxed">
            Computer Vision 기반 의료 영상 객체 탐지 모델의 mAP 7% 향상 및 22 FPS 실시간 처리 시스템 개발, VAE 기반 유방암 병변 비지도 학습 검출 등 실질적인 문제 해결 경험을 갖춘 AI/ML 엔지니어입니다.
          </p>

          <div className="flex flex-wrap gap-2 mb-10">
            <span className="px-3 py-1 text-xs md:text-sm font-semibold rounded-md bg-primary/10 text-primary border border-primary/20">Python</span>
            <span className="px-3 py-1 text-xs md:text-sm font-semibold rounded-md bg-primary/10 text-primary border border-primary/20">PyTorch</span>
            <span className="px-3 py-1 text-xs md:text-sm font-semibold rounded-md bg-primary/10 text-primary border border-primary/20">TensorFlow</span>
            <span className="px-3 py-1 text-xs md:text-sm font-semibold rounded-md bg-primary/10 text-primary border border-primary/20">Docker</span>
          </div>

          <div className="flex gap-3 flex-wrap">
            <a href="#projects" className="minimal-btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}>
              핵심 성과 보기
            </a>
            <a href="#about" className="minimal-btn-secondary" onClick={(e) => { e.preventDefault(); document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" }); }}>
              내 이야기 읽기
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

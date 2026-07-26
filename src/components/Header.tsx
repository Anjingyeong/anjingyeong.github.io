import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Awards & Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

type HeaderProps = {
  readonly variant?: "ai" | "fullstack";
};

const Header = ({ variant = "ai" }: HeaderProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const hostname = typeof window === "undefined" ? "" : window.location.hostname;
  const showPortfolioSwitcher = !import.meta.env.PROD || hostname === "jingyeong.cloud" || hostname === "www.jingyeong.cloud";
  const portfolioUrls = import.meta.env.PROD
    ? {
        ai: "https://ai.jingyeong.cloud",
        fullstack: "https://fullstack.jingyeong.cloud",
      }
    : {
        ai: "/ai",
        fullstack: "/fullstack",
      };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      const sections = document.querySelectorAll("section[id]");
      let current = "home";
      sections.forEach((section) => {
        const el = section as HTMLElement;
        if (window.scrollY >= el.offsetTop - 200) {
          current = el.id;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-lg shadow-sm border-b border-border" : "bg-transparent"
        }`}
      style={{ height: "var(--header-height)" }}
    >
      <div className="container flex items-center justify-between h-full">
        <div className="flex items-center gap-4">
          <div className="leading-tight">
            <span className="block text-lg font-black text-foreground tracking-tight font-sans">안진경</span>
            <span className="hidden text-[11px] font-semibold tracking-wide text-muted-foreground sm:block">
              {variant === "fullstack" ? "FULL-STACK DEVELOPER" : "COMPUTER VISION AI ENGINEER"}
            </span>
          </div>
          {showPortfolioSwitcher && <div className="hidden sm:flex items-center rounded-full border border-border bg-background/70 p-0.5 text-xs font-semibold">
            <a
              href={portfolioUrls.ai}
              className={`rounded-full px-2.5 py-1 transition-colors ${variant === "ai" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              AI Engineer
            </a>
            <a
              href={portfolioUrls.fullstack}
              className={`rounded-full px-2.5 py-1 transition-colors ${variant === "fullstack" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              Full-Stack Developer
            </a>
          </div>}
        </div>

        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className={`text-sm font-medium relative transition-colors duration-200 ${activeSection === item.href.slice(1)
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-primary rounded-full transition-all duration-300 ${activeSection === item.href.slice(1) ? "w-full" : "w-0"
                  }`}
              />
            </button>
          ))}
        </nav>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="md:hidden flex flex-col gap-4 p-6 bg-background/95 backdrop-blur-lg border-b border-border">
          {showPortfolioSwitcher && <div className="flex gap-2 border-b border-border pb-4">
            <a href={portfolioUrls.ai} onClick={() => setMobileOpen(false)} className={`minimal-btn ${variant === "ai" ? "bg-primary text-primary-foreground" : ""}`}>AI Engineer</a>
            <a href={portfolioUrls.fullstack} onClick={() => setMobileOpen(false)} className={`minimal-btn ${variant === "fullstack" ? "bg-primary text-primary-foreground" : ""}`}>Full-Stack Developer</a>
          </div>}
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className={`text-left text-sm font-medium ${activeSection === item.href.slice(1) ? "text-primary" : "text-muted-foreground"
                }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;

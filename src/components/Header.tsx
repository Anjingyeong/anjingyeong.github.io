import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Awards & Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

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
          <span className="text-lg font-bold text-foreground tracking-tight font-sans">An Jin Gyeong</span>
          <div className="hidden sm:flex items-center rounded-full border border-border bg-background/70 p-0.5 text-xs font-semibold">
            <NavLink
              to="/ai"
              className={({ isActive }) => `rounded-full px-2.5 py-1 transition-colors ${isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              AI Engineer
            </NavLink>
            <NavLink
              to="/fullstack"
              className={({ isActive }) => `rounded-full px-2.5 py-1 transition-colors ${isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              Full-Stack Developer
            </NavLink>
          </div>
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
          <div className="flex gap-2 border-b border-border pb-4">
            <NavLink to="/ai" onClick={() => setMobileOpen(false)} className="minimal-btn">AI Engineer</NavLink>
            <NavLink to="/fullstack" onClick={() => setMobileOpen(false)} className="minimal-btn">Full-Stack Developer</NavLink>
          </div>
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

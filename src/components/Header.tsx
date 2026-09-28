1	import { useState, useEffect } from "react";
2	import { Menu, X } from "lucide-react";
3	
4	const navItems = [
5	  { label: "Home", href: "#home" },
6	  { label: "Projects", href: "#projects" },
7	  { label: "Skills", href: "#skills" },
8	  { label: "Awards & Experience", href: "#experience" },
9	  { label: "Contact", href: "#contact" },
10	];
11	
12	type HeaderProps = {
13	  readonly variant?: "ai" | "fullstack";
14	};
15	
16	const Header = ({ variant = "ai" }: HeaderProps) => {
17	  const [mobileOpen, setMobileOpen] = useState(false);
18	  const [activeSection, setActiveSection] = useState("home");
19	  const [scrolled, setScrolled] = useState(false);
20	  const [scrollProgress, setScrollProgress] = useState(0);
21	  const hostname = typeof window === "undefined" ? "" : window.location.hostname;
22	  const showPortfolioSwitcher = !import.meta.env.PROD || hostname === "jingyeong.cloud" || hostname === "www.jingyeong.cloud";
23	  const portfolioUrls = import.meta.env.PROD
24	    ? {
25	        ai: "https://ai.jingyeong.cloud",
26	        fullstack: "https://fullstack.jingyeong.cloud",
27	      }
28	    : {
29	        ai: "/ai",
30	        fullstack: "/fullstack",
31	      };
32	
33	  useEffect(() => {
34	    const onScroll = () => {
35	      setScrolled(window.scrollY > 10);
36	      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
37	      setScrollProgress(scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0);
38	      const sections = document.querySelectorAll("section[id]");
39	      let current = "home";
40	      sections.forEach((section) => {
41	        const el = section as HTMLElement;
42	        if (window.scrollY >= el.offsetTop - 200) {
43	          current = el.id;
44	        }
45	      });
46	      setActiveSection(current);
47	    };
48	    onScroll();
49	    window.addEventListener("scroll", onScroll);
50	    return () => window.removeEventListener("scroll", onScroll);
51	  }, []);
52	
53	  const scrollTo = (href: string) => {
54	    setMobileOpen(false);
55	    const el = document.querySelector(href);
56	    el?.scrollIntoView({ behavior: "smooth", block: "start" });
57	  };
58	
59	  return (
60	    <header
61	      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-lg shadow-sm border-b border-border" : "bg-transparent"
62	        }`}
63	      style={{ height: "var(--header-height)" }}
64	    >
65	      <div className="container flex items-center justify-between h-full">
66	        <div className="flex items-center gap-4">
67	          <div className="leading-tight">
68	            <span className="block text-lg font-black text-foreground tracking-tight font-sans">안진경</span>
69	            <span className="hidden text-[11px] font-semibold tracking-wide text-muted-foreground sm:block">
70	              SOFTWARE ENGINEER
71	            </span>
72	          </div>
73	          {showPortfolioSwitcher && <div className="hidden sm:flex items-center rounded-full border border-border bg-background/70 p-0.5 text-xs font-semibold">
74	            <a
75	              href={portfolioUrls.ai}
76	              className={`rounded-full px-2.5 py-1 transition-colors ${variant === "ai" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
77	            >
78	              AI Software Engineer
79	            </a>
80	            <a
81	              href={portfolioUrls.fullstack}
82	              className={`rounded-full px-2.5 py-1 transition-colors ${variant === "fullstack" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
83	            >
84	              Full-Stack Developer
85	            </a>
86	          </div>}
87	        </div>
88	
89	        <nav className="hidden md:flex gap-6 items-center">
90	          {navItems.map((item) => (
91	            <button
92	              key={item.href}
93	              onClick={() => scrollTo(item.href)}
94	              className={`text-sm font-medium relative transition-colors duration-200 ${activeSection === item.href.slice(1)
95	                ? "text-primary"
96	                : "text-muted-foreground hover:text-foreground"
97	                }`}
98	            >
99	              {item.label}
100	              <span
101	                className={`absolute -bottom-1 left-0 h-0.5 bg-primary rounded-full transition-all duration-300 ${activeSection === item.href.slice(1) ? "w-full" : "w-0"
102	                  }`}
103	              />
104	            </button>
105	          ))}
106	        </nav>
107	
108	        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
109	          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
110	        </button>
111	      </div>
112	
113	      {mobileOpen && (
114	        <nav className="md:hidden flex flex-col gap-4 p-6 bg-background/95 backdrop-blur-lg border-b border-border">
115	          {showPortfolioSwitcher && <div className="flex gap-2 border-b border-border pb-4">
116	            <a href={portfolioUrls.ai} onClick={() => setMobileOpen(false)} className={`minimal-btn ${variant === "ai" ? "bg-primary text-primary-foreground" : ""}`}>AI Engineer</a>
117	            <a href={portfolioUrls.fullstack} onClick={() => setMobileOpen(false)} className={`minimal-btn ${variant === "fullstack" ? "bg-primary text-primary-foreground" : ""}`}>Full-Stack Developer</a>
118	          </div>}
119	          {navItems.map((item) => (
120	            <button
121	              key={item.href}
122	              onClick={() => scrollTo(item.href)}
123	              className={`text-left text-sm font-medium ${activeSection === item.href.slice(1) ? "text-primary" : "text-muted-foreground"
124	                }`}
125	            >
126	              {item.label}
127	            </button>
128	          ))}
129	        </nav>
130	      )}
131	      <div className="scroll-progress" aria-hidden="true">
132	        <span style={{ transform: `scaleX(${scrollProgress})` }} />
133	      </div>
134	    </header>
135	  );
136	};
137	
138	export default Header;
139	
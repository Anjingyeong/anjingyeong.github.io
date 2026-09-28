1	import { ArrowDown, ExternalLink, Play, Sparkles } from "lucide-react";
2	
3	type HeroSectionProps = {
4	  readonly variant?: "ai" | "fullstack";
5	};
6	
7	const HeroSection = ({ variant = "ai" }: HeroSectionProps) => {
8	  const isFullstack = variant === "fullstack";
9	  const metrics = isFullstack
10	    ? [
11	        { value: "29/29", label: "1초 내 MQTT 도달", note: "2카메라 · Subscriber 기준" },
12	        { value: "2", label: "운영 배포 웹서비스", note: "SongSong · 마음이음" },
13	        { value: "61", label: "검색 품질 평가 질의", note: "LLM Wiki · Golden Query" },
14	      ]
15	    : [
16	        { value: "+4.20%p", label: "행동 분류 F1", note: "89.29 → 93.49%" },
17	        { value: "8 → 1", label: "ID Switch", note: "자체 낙상 테스트" },
18	        { value: "-48.2%", label: "전체 처리 지연", note: "11.789 → 6.101ms" },
19	      ];
20	
21	  const showLocalPortfolioSwitcher = !import.meta.env.PROD;
22	  const crossPortfolioUrl = isFullstack ? "/ai" : "/fullstack";
23	  const crossPortfolioLabel = isFullstack
24	    ? "AI 모델·Tracking 상세"
25	    : "관제 플랫폼 상세";
26	
27	  return (
28	    <section
29	      id="home"
30	      className="relative min-h-screen flex items-center overflow-hidden py-8 sm:py-12 lg:py-0"
31	      style={{ paddingTop: "var(--header-height)", background: "var(--gradient-hero)" }}
32	    >
33	      <div className="hero-aurora" aria-hidden="true" />
34	
35	      <div className="container relative z-10">
36	        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center max-w-6xl mx-auto">
37	          <div className="order-1 lg:order-1 lg:col-span-7 pr-0 lg:pr-10">
38	            <div className="mb-5">
39	              <p className="text-sm font-bold tracking-[0.2em] text-primary uppercase">
40	                An Jin Gyeong
41	              </p>
42	              <p className="mt-1 text-base font-semibold text-foreground/70">
43	                안진경 · {isFullstack ? "Full-Stack Developer" : "AI Software Engineer"}
44	              </p>
45	            </div>
46	
47	            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/10 mb-5">
48	              <Sparkles size={14} className="text-primary" />
49	              <span className="text-sm font-medium text-primary">
50	                {isFullstack ? "Web · API · Realtime · Cloud Delivery" : "Vision · Agentic Systems · Platform Integration"}
51	              </span>
52	            </div>
53	
54	            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-black mb-4 text-foreground leading-[1.25] tracking-tight break-keep">
55	              {isFullstack
56	                ? "사용자 흐름부터 API·데이터·실시간 이벤트·배포까지 하나의 서비스로 연결합니다"
57	                : "AI 모델을 실시간 시스템과 Agentic 개발 도구까지 연결합니다"}
58	            </h1>
59	
60	            <div className="mb-8 max-w-xl space-y-3 break-keep">
61	              <p className="text-base md:text-lg text-foreground/75 leading-relaxed font-normal">
62	                {isFullstack
63	                  ? "팀 프로젝트에서는 MQTT → Spring Boot → DB → WebSocket → React로 이어지는 실시간 이벤트 흐름의 데이터 계약과 정합성을 맞췄습니다. 개인 프로젝트에서는 React·TypeScript와 Cloudflare Workers·D1·Durable Objects를 활용해 실제 웹서비스를 기획부터 배포까지 완성했습니다."
64	                  : "실시간 영상 AI에서는 추론·Tracking·이벤트 전달 병목을 수치로 개선했고, JK에서는 ChatGPT와 로컬 프로젝트 사이에 상태·권한·검증을 갖춘 MCP 실행 계층을 구현했습니다. 문제는 로그와 동일 조건 비교로 좁히고, 변경은 테스트와 실행 근거로 확인합니다."}
65	              </p>
66	              {isFullstack ? (
67	                <p className="text-sm leading-relaxed text-muted-foreground">
68	                  <strong className="font-semibold text-foreground">개인 기여 · </strong>
69	                  팀: 이벤트 계약·Incident 정합성·통합 검증 / 개인: 요구사항·UI·API·DB·배포 / 개발 방식: LLM 활용 + 로그·테스트 기반 직접 QA
70	                </p>
71	              ) : null}
72	            </div>
73	
74	            <div className="grid max-w-xl grid-cols-3 gap-2 sm:gap-3 mb-6 sm:mb-8">
75	              {metrics.map((metric, index) => (
76	                <div
77	                  key={metric.label}
78	                  className="hero-metric rounded-xl border border-border/70 bg-background/45 px-2.5 sm:px-4 py-3 backdrop-blur-sm"
79	                  style={{ animationDelay: `${180 + index * 110}ms` }}
80	                >
81	                  <strong className="block text-base sm:text-lg font-bold text-primary">{metric.value}</strong>
82	                  <span className="mt-0.5 block text-[11px] sm:text-sm font-semibold text-foreground break-keep">{metric.label}</span>
83	                  <span className="mt-1 block text-[10px] sm:text-xs text-muted-foreground">{metric.note}</span>
84	                </div>
85	              ))}
86	            </div>
87	
88	            <div className="relative z-20 flex flex-wrap gap-3">
89	              <a
90	                href="#projects"
91	                className="minimal-btn-primary"
92	                onClick={(event) => {
93	                  event.preventDefault();
94	                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
95	                }}
96	              >
97	                대표 프로젝트 보기
98	              </a>
99	              <a
100	                href="https://www.youtube.com/watch?v=O1-JNhcpvDQ"
101	                target="_blank"
102	                rel="noopener noreferrer"
103	                className="minimal-btn inline-flex items-center gap-2"
104	              >
105	                <Play size={16} />
106	                시연 영상
107	              </a>
108	              {showLocalPortfolioSwitcher ? (
109	                <a
110	                  href={crossPortfolioUrl}
111	                  className="minimal-btn inline-flex items-center gap-2"
112	                >
113	                  <ExternalLink size={16} />
114	                  {crossPortfolioLabel}
115	                </a>
116	              ) : null}
117	            </div>
118	          </div>
119	
120	          <div className="flex justify-center lg:justify-end order-2 lg:order-2 lg:col-span-5">
121	            <div className="flex flex-col items-center">
122	              <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-[19rem] lg:h-[19rem] rounded-full border border-primary/30 overflow-hidden group" style={{ boxShadow: "0 8px 48px rgba(60, 80, 180, 0.10), 0 1px 4px rgba(0,0,0,0.06)" }}>
123	                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
124	                <img
125	                  src="/profile.jpg"
126	                  alt="안진경 프로필 사진"
127	                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
128	                />
129	              </div>
130	              {isFullstack ? (
131	                <div className="mt-5 text-center">
132	                  <strong className="block text-xl font-black tracking-tight text-foreground">안진경</strong>
133	                  <span className="mt-1 block text-sm font-semibold text-primary">Full-Stack Developer</span>
134	                </div>
135	              ) : null}
136	            </div>
137	          </div>
138	        </div>
139	      </div>
140	
141	      <button
142	        onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
143	        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
144	        aria-label="프로젝트로 이동"
145	      >
146	        <ArrowDown size={20} />
147	      </button>
148	    </section>
149	  );
150	};
151	
152	export default HeroSection;
153	
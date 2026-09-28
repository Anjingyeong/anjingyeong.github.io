1	import Header from "@/components/Header";
2	import HeroSection from "@/components/HeroSection";
3	import AboutSection from "@/components/AboutSection";
4	import ProjectsSection from "@/components/ProjectsSection";
5	import SkillsSection from "@/components/SkillsSection";
6	import CompetenceSection from "@/components/CompetenceSection";
7	import ExperienceSection from "@/components/ExperienceSection";
8	import ContactSection from "@/components/ContactSection";
9	import { fullstackProjects } from "@/data/fullstackProjects";
10	
11	type IndexProps = {
12	  readonly variant?: "ai" | "fullstack";
13	};
14	
15	const Index = ({ variant = "ai" }: IndexProps) => {
16	  return (
17	    <div className="relative min-h-screen bg-background">
18	      <Header variant={variant} />
19	      <main className="relative z-10">
20	        <HeroSection variant={variant} />
21	        <ProjectsSection items={variant === "fullstack" ? fullstackProjects : undefined} grouped={variant !== "fullstack"} />
22	        {variant === "fullstack" ? (
23	          <>
24	            <div className="section-divider" />
25	            <AboutSection variant={variant} />
26	            <SkillsSection variant={variant} />
27	          </>
28	        ) : (
29	          <>
30	            <SkillsSection variant={variant} />
31	            <div className="section-divider" />
32	            <AboutSection variant={variant} />
33	          </>
34	        )}
35	        <ExperienceSection />
36	        <CompetenceSection />
37	        <ContactSection />
38	      </main>
39	      <footer className="relative z-10 border-t border-border py-8 text-center text-xs text-muted-foreground" style={{ background: "var(--gradient-hero)" }}>
40	        <div className="container font-mono">
41	          &lt;안진경의 포트폴리오&gt; © {new Date().getFullYear()}
42	        </div>
43	      </footer>
44	    </div>
45	  );
46	};
47	
48	export default Index;
49	
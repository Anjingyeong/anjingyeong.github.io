import NetworkCanvas from "@/components/NetworkCanvas";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import CompetenceSection from "@/components/CompetenceSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import { fullstackProjects } from "@/data/fullstackProjects";

type IndexProps = {
  readonly variant?: "ai" | "fullstack";
};

const Index = ({ variant = "ai" }: IndexProps) => {
  return (
    <div className="relative min-h-screen bg-background">
      <NetworkCanvas />
      <Header variant={variant} />
      <main className="relative z-10">
        <HeroSection variant={variant} />
        <AboutSection variant={variant} />
        <div className="section-divider" />
        <ProjectsSection items={variant === "fullstack" ? fullstackProjects : undefined} grouped={variant !== "fullstack"} />
        <SkillsSection variant={variant} />
        <ExperienceSection />
        <CompetenceSection />
        <ContactSection />
      </main>
      <footer className="relative z-10 border-t border-border py-8 text-center text-xs text-muted-foreground" style={{ background: "var(--gradient-hero)" }}>
        <div className="container font-mono">
          &lt;안진경의 포트폴리오&gt; © {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
};

export default Index;

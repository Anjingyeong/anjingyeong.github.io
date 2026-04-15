import NetworkCanvas from "@/components/NetworkCanvas";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import CompetenceSection from "@/components/CompetenceSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <NetworkCanvas />
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <div className="section-divider" />
        <AboutSection />
        <CompetenceSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
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

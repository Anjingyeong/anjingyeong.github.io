import ScrollAnimator from "./ScrollAnimator";
import { Brain, Database, BarChart3, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Backend & Database",
    icon: Database,
    skills: ["Spring Boot / Spring Data JPA", "Node.js / REST API", "WebSocket / STOMP", "MySQL / SQL"],
    color: "from-blue-500/10 to-blue-600/5",
  },
  {
    title: "Frontend",
    icon: BarChart3,
    skills: ["React / TypeScript", "JavaScript / HTML / CSS", "Tailwind CSS", "Streamlit"],
    color: "from-emerald-500/10 to-teal-600/5",
  },
  {
    title: "AI & Data",
    icon: Brain,
    skills: ["Python / PyTorch / TensorFlow", "OpenCV / RF-DETR / VAE", "BeautifulSoup4 / pykrx", "Seaborn"],
    color: "from-indigo-500/10 to-indigo-600/5",
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git / GitHub"],
    color: "from-purple-500/10 to-purple-600/5",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container">
        <ScrollAnimator>
          <div className="section-header">
            <h2>핵심 기술 역량</h2>
          </div>
        </ScrollAnimator>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, i) => (
            <ScrollAnimator key={i}>
              <div className="minimal-card h-full overflow-hidden">
                <div className={`bg-gradient-to-br ${cat.color} p-6 pb-4`}>
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 flex-shrink-0" style={{ background: 'hsl(var(--primary) / 0.15)', boxShadow: 'inset 0 0 0 1.5px hsl(var(--primary) / 0.25)' }}>
                      <cat.icon size={22} className="text-primary" strokeWidth={2.2} />
                    </div>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">{cat.title}</h3>
                </div>
                <div className="p-6 pt-4">
                  <ul className="space-y-3">
                    {cat.skills.map((skill) => (
                      <li key={skill} className="text-muted-foreground text-sm flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

import ScrollAnimator from "./ScrollAnimator";
import { Brain, Database, Cpu, Network } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
  color: string;
}

const aiSkillCategories: SkillCategory[] = [
  {
    title: "Computer Vision",
    icon: Brain,
    skills: ["YOLO Pose", "RF-DETR", "OpenCV", "ByteTrack / Object Tracking"],
    color: "from-blue-500/10 to-blue-600/5",
  },
  {
    title: "Modeling & Optimization",
    icon: Cpu,
    skills: ["PyTorch", "TensorFlow", "LSTM", "TensorRT"],
    color: "from-indigo-500/10 to-indigo-600/5",
  },
  {
    title: "Real-Time Pipeline",
    icon: Network,
    skills: ["RTSP", "MQTT", "Bounded Queue", "MJPEG / MediaMTX"],
    color: "from-emerald-500/10 to-teal-600/5",
  },
  {
    title: "Development & Evaluation",
    icon: Database,
    skills: ["Python", "Docker", "Git / GitHub", "Precision / Recall / F1 / Latency 분석"],
    color: "from-purple-500/10 to-purple-600/5",
  },
];

const fullstackSkillCategories: SkillCategory[] = [
  {
    title: "Backend & API",
    icon: Database,
    skills: [
      "Java 21",
      "Spring Boot",
      "Spring Data JPA",
      "Cloudflare Workers",
    ],
    color: "from-blue-500/10 to-blue-600/5",
  },
  {
    title: "Frontend",
    icon: Brain,
    skills: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    color: "from-emerald-500/10 to-teal-600/5",
  },
  {
    title: "Data & Search",
    icon: Cpu,
    skills: ["PostgreSQL", "pgvector", "Redis", "Cloudflare D1"],
    color: "from-indigo-500/10 to-indigo-600/5",
  },
  {
    title: "Realtime & Deployment",
    icon: Network,
    skills: [
      "MQTT",
      "WebSocket / STOMP",
      "AWS S3",
      "Docker / Cloudflare Pages",
    ],
    color: "from-purple-500/10 to-purple-600/5",
  },
];

type SkillsSectionProps = {
  readonly variant?: "ai" | "fullstack";
};

const SkillsSection = ({ variant = "ai" }: SkillsSectionProps) => {
  const categories = variant === "fullstack" ? fullstackSkillCategories : aiSkillCategories;

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container">
        <ScrollAnimator>
          <div className="section-header">
            <h2>Skills</h2>
          </div>
        </ScrollAnimator>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
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

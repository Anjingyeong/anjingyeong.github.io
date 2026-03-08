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
    title: "AI & Machine Learning",
    icon: Brain,
    skills: ["Python / NumPy / pandas", "TensorFlow / PyTorch", "Deep Learning (CNN, RNN, GAN)", "Computer Vision (YOLO, DETR, OpenCV)"],
    color: "from-blue-500/10 to-blue-600/5",
  },
  {
    title: "Data Analysis",
    icon: Database,
    skills: ["Data Preprocessing & Cleaning", "Statistical Analysis", "Feature Engineering", "Model Evaluation & Optimization"],
    color: "from-indigo-500/10 to-indigo-600/5",
  },
  {
    title: "Visualization",
    icon: BarChart3,
    skills: ["Matplotlib"],
    color: "from-violet-500/10 to-violet-600/5",
  },
  {
    title: "Tools & Others",
    icon: Wrench,
    skills: ["Git / GitHub", "Google Colab", "SQL"],
    color: "from-purple-500/10 to-purple-600/5",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container">
        <ScrollAnimator>
          <div className="section-header">
            <h2>기술 스택</h2>
          </div>
        </ScrollAnimator>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, i) => (
            <ScrollAnimator key={i}>
              <div className="minimal-card h-full overflow-hidden">
                <div className={`bg-gradient-to-br ${cat.color} p-6 pb-4`}>
                  <div className="icon-container mb-4">
                    <cat.icon size={20} />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">{cat.title}</h3>
                </div>
                <div className="p-6 pt-4">
                  <ul className="space-y-3">
                    {cat.skills.map((skill) => (
                      <li key={skill} className="text-muted-foreground text-sm flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
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

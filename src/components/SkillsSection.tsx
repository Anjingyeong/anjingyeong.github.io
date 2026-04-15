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
    title: "AI & Deep Learning",
    icon: Brain,
    skills: ["Python / NumPy / pandas", "TensorFlow / PyTorch", "CNN, RNN, GAN, VAE", "Computer Vision (DETR, YOLO)", "CycleGAN / Medical Imaging"],
    color: "from-blue-500/10 to-blue-600/5",
  },
  {
    title: "Biomedical Domain",
    icon: Database,
    skills: ["의료 영상 데이터 분석", "병변 검출 및 영역 분할", "의료 데이터 특화 증강 (Elastic, Grid)", "비지도 학습 기반 이상 탐지", "임상 소프트웨어 워크플로우 설계"],
    color: "from-indigo-500/10 to-indigo-600/5",
  },
  {
    title: "Web Full-stack",
    icon: BarChart3,
    skills: ["React / TypeScript", "Node.js / Express 기반 서버 구축", "RESTful API 파이프라인 설계", "MySQL 및 관계형 데이터베이스", "JWT 인증 프로세스 및 웹소켓"],
    color: "from-emerald-500/10 to-teal-600/5",
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    skills: ["Git / GitHub 버전 관리", "Google Colab 환경 구축", "OpenCV 실시간 영상 처리", "Streamlit 데이터 대시보드 구축", "데이터 수집 및 스크래핑 파이프라인"],
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

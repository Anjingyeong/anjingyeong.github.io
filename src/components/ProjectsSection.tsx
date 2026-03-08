import ScrollAnimator from "./ScrollAnimator";
import { Microscope, Eye, ArrowUpRight } from "lucide-react";

const projects = [
  {
    icon: Microscope,
    title: "RF-DETR기반 실시간 대장 내 용종 검출 시스템 개발",
    description:
      "Transformer 기반 RF-DETR 모델과 DINOv2 백본을 적용하여 대장 내시경 영상에서 용종을 실시간으로 검출하는 시스템을 개발했습니다. Elastic Deformation과 Grid Distortion 고급 데이터 증강 기법을 적용하고, Weight Pruning과 Query 수 최적화를 통해 경량화를 구현했습니다.",
    highlights: ["mAP 7% 향상", "22 FPS 실시간 처리", "임상 실용성 입증"],
    tags: ["Python", "PyTorch", "RF-DETR", "DINOv2", "Medical AI"],
    gradient: "from-blue-500/10 to-indigo-500/10",
  },
  {
    icon: Eye,
    title: "VAE 기반 유방암 병변 검출 알고리즘 개발",
    description:
      "VAE(Variational AutoEncoder)를 활용하여 유방암 초음파 영상에서 병변을 자동으로 검출하는 알고리즘을 개발했습니다. 정상 이미지로 학습된 모델이 병변 이미지를 정상 형태로 재구성하고, 원본과의 차영상을 통해 병변을 검출하는 비지도 학습 방식을 적용했습니다.",
    highlights: ["Dice 40-90% 달성", "비지도 학습 방식", "공학혁신상 수상"],
    tags: ["Python", "TensorFlow", "VAE", "AutoEncoder", "Medical Imaging"],
    gradient: "from-violet-500/10 to-purple-500/10",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-alt py-24 md:py-32">
      <div className="container">
        <ScrollAnimator>
          <div className="section-header">
            <h2>프로젝트</h2>
          </div>
        </ScrollAnimator>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ScrollAnimator key={i}>
              <div className="minimal-card-accent group cursor-pointer h-full">
                {/* Gradient header area */}
                <div className={`bg-gradient-to-br ${project.gradient} p-8 pb-6`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="icon-container">
                      <project.icon size={22} />
                    </div>
                    <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground leading-snug">{project.title}</h3>
                </div>

                {/* Content */}
                <div className="p-8 pt-5">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{project.description}</p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.highlights.map((h) => (
                      <span key={h} className="inline-flex items-center gap-1 text-xs font-semibold text-primary bg-primary/8 px-2.5 py-1 rounded-md">
                        ✦ {h}
                      </span>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

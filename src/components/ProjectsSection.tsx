import { useState } from "react";
import ScrollAnimator from "./ScrollAnimator";
import { Microscope, Eye, ArrowUpRight, X } from "lucide-react";

type ProjectType = {
  icon: React.ElementType;
  title: string;
  description: string;
  highlights: string[];
  tags: string[];
  gradient: string;
  images?: { src: string; caption: string }[];
  videoUrl?: string;
};

const projects: ProjectType[] = [
  {
    icon: Microscope,
    title: "RF-DETR기반 실시간 대장 내 용종 검출 시스템 개발",
    description:
      "Transformer 기반 RF-DETR 모델과 DINOv2 백본을 적용하여 대장 내시경 영상에서 용종을 실시간으로 검출하는 시스템을 개발했습니다. Elastic Deformation과 Grid Distortion 고급 데이터 증강 기법을 적용하고, Weight Pruning과 Query 수 최적화를 통해 경량화를 구현했습니다.",
    highlights: ["mAP 7% 향상", "22 FPS 실시간 처리", "임상 실용성 입증", "금상 및 동상 수상"],
    tags: ["Python", "PyTorch", "RF-DETR", "DINOv2", "Medical AI"],
    gradient: "from-blue-500/10 to-indigo-500/10",
    videoUrl: "https://www.youtube.com/embed/n6xKcYq7bWE",
    images: [
      { src: "/images/rf_detr_aug.png", caption: "고급 데이터 증강 기법 적용 예시 (Elastic Deformation, Grid Distortion 등)" }
    ]
  },
  {
    icon: Eye,
    title: "VAE 기반 유방암 병변 검출 알고리즘 개발",
    description:
      "VAE(Variational AutoEncoder)를 활용하여 유방암 초음파 영상에서 병변을 자동으로 검출하는 알고리즘을 개발했습니다. 정상 이미지로 학습된 모델이 병변 이미지를 정상 형태로 재구성하고, 원본과의 차영상을 통해 병변을 검출하는 비지도 학습 방식을 적용했습니다.",
    highlights: ["Dice 40-90% 달성", "비지도 학습 방식", "공학혁신상 수상"],
    tags: ["Python", "TensorFlow", "VAE", "AutoEncoder", "Medical Imaging"],
    gradient: "from-violet-500/10 to-purple-500/10",
    images: [
      { src: "/images/vae_diff.png", caption: "1. 차영상 구하는법" },
      { src: "/images/vae_threshold.png", caption: "2. 동적임계값 사용전과 후 및 오리지널 마스크 이미지" },
      { src: "/images/vae_result.png", caption: "3. 결과 수치이미지" }
    ]
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  // Close modal when pressing escape key
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") setSelectedProject(null);
  };

  return (
    <section id="projects" className="section-alt py-24 md:py-32" onKeyDown={handleKeyDown}>
      <div className="container relative">
        <ScrollAnimator>
          <div className="section-header">
            <h2>프로젝트</h2>
          </div>
        </ScrollAnimator>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
          {projects.map((project, i) => (
            <ScrollAnimator key={i}>
              <div
                className="minimal-card-accent group cursor-pointer h-full transition-transform hover:-translate-y-1"
                onClick={() => setSelectedProject(project)}
              >
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

        {/* Modal Overlay */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6" onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedProject(null);
          }}>
            {/* Backdrop */}
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm pointer-events-none" />

            {/* Modal Content */}
            <div
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-xl shadow-2xl p-6 md:p-8 animate-in fade-in zoom-in-95 duration-200"
              role="dialog"
              aria-modal="true"
            >
              <button
                className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              <div className="flex items-center gap-4 mb-6 pr-8">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${selectedProject.gradient}`}>
                  <selectedProject.icon size={32} className="text-foreground" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold leading-tight">{selectedProject.title}</h3>
              </div>

              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                {selectedProject.description}
              </p>

              {selectedProject.videoUrl && (
                <div className="mb-8 rounded-xl overflow-hidden shadow-lg border border-border bg-black">
                  <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={selectedProject.videoUrl}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}

              {selectedProject.images && selectedProject.images.length > 0 && (
                <div className="space-y-8 mt-8 border-t border-border pt-8">
                  <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-primary rounded-full inline-block"></span>
                    상세 결과 이미지
                  </h4>
                  {selectedProject.images.map((img, idx) => (
                    <div key={idx} className="flex flex-col gap-4 mb-8 last:mb-0">
                      <div className="rounded-xl overflow-hidden border border-border bg-muted/20 flex items-center justify-center p-2">
                        <img
                          src={img.src}
                          alt={img.caption}
                          className="w-full h-auto object-contain max-h-[70vh] rounded-lg shadow-sm"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/placeholder.svg';
                            (e.target as HTMLImageElement).alt = 'Image not found - please add ' + img.src;
                          }}
                        />
                      </div>
                      <p className="text-center text-sm md:text-base text-foreground/80 font-medium">
                        {img.caption}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;

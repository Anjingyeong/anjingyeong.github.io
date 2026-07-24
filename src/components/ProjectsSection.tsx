import { useState, type KeyboardEvent, type ReactNode } from "react";
import { ArrowUpRight, Github, X } from "lucide-react";
import { projects, type Project, type ProjectDetail } from "@/data/projects";
import ScrollAnimator from "./ScrollAnimator";
import Mermaid from "./Mermaid";

const renderInlineText = (text: string): ReactNode[] =>
  text.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={`${part}-${index}`} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }

    return part;
  });

const ProjectDetailSection = ({ detail }: { readonly detail: ProjectDetail }) => (
  <section className="space-y-2">
    <h4 className="text-lg font-semibold text-foreground">{detail.title}</h4>
    {detail.body ? <p className="text-sm leading-relaxed text-muted-foreground">{renderInlineText(detail.body)}</p> : null}
    {detail.items ? (
      <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
        {detail.items.map((item) => (
          <li key={item}>{renderInlineText(item)}</li>
        ))}
      </ul>
    ) : null}
    {detail.groups ? (
      <div className="space-y-4">
        {detail.groups.map((group) => (
          <div key={group.title}>
            <h5 className="mb-2 text-sm font-semibold text-foreground">{group.title}</h5>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
              {group.items.map((item) => (
                <li key={item}>{renderInlineText(item)}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    ) : null}
    {detail.table ? (
      <div className="mt-4 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-xs md:text-sm">
          <thead className="border-b border-border bg-muted/50 font-semibold text-foreground">
            <tr>
              {detail.table.headers.map((h, idx) => (
                <th key={idx} className="p-2.5 md:p-3">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border text-muted-foreground">
            {detail.table.rows.map((row, rIdx) => (
              <tr key={rIdx} className="hover:bg-muted/20">
                {row.map((cell, cIdx) => (
                  <td key={cIdx} className="p-2.5 md:p-3">
                    {renderInlineText(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ) : null}
    {detail.diagram ? (
      <div className="mt-4">
        <Mermaid chart={detail.diagram} />
      </div>
    ) : null}
    {detail.note ? <p className="text-sm leading-relaxed text-muted-foreground">{renderInlineText(detail.note)}</p> : null}
    {detail.image ? (
      <div className="mt-4 overflow-hidden rounded-xl border border-border bg-muted/30 p-2">
        <img
          src={detail.image}
          alt={detail.imageAlt || detail.title}
          className="max-h-96 w-full rounded-lg object-contain"
          onError={(e) => {
            (e.target as HTMLImageElement).alt = `[이미지 로드 실패: ${detail.image}]`;
          }}
        />
      </div>
    ) : null}
    {detail.images && detail.images.length > 0 ? (
      <div className="mt-4 space-y-4">
        {detail.images.map((img, idx) => (
          <div key={idx} className="flex flex-col gap-2">
            <div className="flex items-center justify-center overflow-hidden rounded-xl border border-border bg-muted/20 p-2">
              <img
                src={img.src}
                alt={img.caption}
                className="max-h-[70vh] w-full rounded-lg object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).alt = `[이미지 로드 실패: ${img.src}]`;
                }}
              />
            </div>
            <p className="text-center text-sm font-medium text-foreground/80">{img.caption}</p>
          </div>
        ))}
      </div>
    ) : null}
  </section>
);

type ProjectsSectionProps = {
  readonly items?: readonly Project[];
  readonly grouped?: boolean;
};


const ProjectsSection = ({ items = projects, grouped = true }: ProjectsSectionProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") setSelectedProject(null);
  };

  const openProjectFromKeyboard = (event: KeyboardEvent<HTMLDivElement>, project: Project) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    setSelectedProject(project);
  };

  const mainProjects = items.filter((project) => project.badge === "Main");
  const supportingProjects = items.filter((project) => project.badge === "Supporting");
  const orderedProjects = grouped ? mainProjects : items;

  const renderCard = (project: Project): ReactNode => (
    <ScrollAnimator key={project.title}>
      <div
        className="minimal-card-accent group flex h-full cursor-pointer flex-col"
        role="button"
        tabIndex={0}
        style={{ transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s ease" }}
        onClick={() => setSelectedProject(project)}
        onKeyDown={(event) => openProjectFromKeyboard(event, project)}
        onMouseEnter={(event) => {
          event.currentTarget.style.transform = "translateY(-6px)";
          event.currentTarget.style.boxShadow =
            "0 20px 48px rgba(0,0,0,0.13), 0 0 0 1px hsl(220 70% 50% / 0.15)";
        }}
        onMouseLeave={(event) => {
          event.currentTarget.style.transform = "translateY(0)";
          event.currentTarget.style.boxShadow = "";
        }}
      >
        <div className={`bg-gradient-to-br ${project.gradient} p-8 pb-6`}>
          <div className="mb-4 flex items-start justify-between">
            <div className="icon-container">
              <project.icon size={22} />
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`rounded-full border px-2 py-0.5 text-xs font-semibold ${
                  project.badge === "Main"
                    ? "border-primary/20 bg-primary/10 text-primary"
                    : "border-border bg-muted text-muted-foreground"
                }`}
              >
                {project.badge}
              </span>
              <ArrowUpRight
                size={20}
                strokeWidth={2.5}
                className="text-muted-foreground transition-colors group-hover:text-primary"
              />
            </div>
          </div>
          <h3 className="text-lg font-semibold leading-snug text-foreground">{project.title}</h3>
          {project.heroImage ? (
            <div className="mt-5 overflow-hidden rounded-lg border border-border bg-card/70">
              <img
                src={project.heroImage.src}
                alt={project.heroImage.caption}
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          ) : null}
        </div>

        <div className="flex flex-1 flex-col justify-between p-8 pt-5">
          <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{renderInlineText(project.summaryLine)}</p>
          <div>
            <div className="mb-5 flex flex-wrap gap-2">
              {project.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="inline-flex items-center gap-1 rounded-md bg-primary/8 px-2.5 py-1 text-xs font-semibold text-primary"
                >
                  {highlight}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 border-t border-border pt-4">
              {project.tags.map((tag) => (
                <span key={tag} className="tech-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimator>
  );

  return (
    <section id="projects" className="section-alt py-24 md:py-32" onKeyDown={handleKeyDown}>
      <div className="container relative">
        <ScrollAnimator>
          <div className="section-header">
            <h2>Projects</h2>
          </div>
        </ScrollAnimator>

        <div className={`relative z-10 grid grid-cols-1 gap-6 ${grouped ? "lg:grid-cols-2" : "lg:grid-cols-3"}`}>
          {orderedProjects.map((project) => renderCard(project))}
        </div>

        {grouped && supportingProjects.length > 0 ? (
          <>
            <ScrollAnimator>
              <div className="mb-6 mt-16 flex items-center gap-4">
                <div className="h-px flex-1 bg-border" />
                <span className="px-3 text-sm font-medium text-muted-foreground">Supporting Projects</span>
                <div className="h-px flex-1 bg-border" />
              </div>
            </ScrollAnimator>
            <div className="relative z-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {supportingProjects.map((project) => renderCard(project))}
            </div>
          </>
        ) : null}

        {selectedProject ? (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
            onClick={(event) => {
              if (event.target === event.currentTarget) setSelectedProject(null);
            }}
          >
            <div className="pointer-events-none absolute inset-0 bg-background/80 backdrop-blur-sm" />
            <div
              className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-xl border border-border bg-card p-6 shadow-2xl duration-200 animate-in fade-in zoom-in-95 md:p-8"
              role="dialog"
              aria-modal="true"
            >
              <button
                className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                onClick={() => setSelectedProject(null)}
                aria-label="프로젝트 상세 닫기"
              >
                <X size={24} />
              </button>

              <div className="mb-6 flex flex-col justify-between gap-4 pr-8 md:flex-row md:items-start">
                <div className="flex items-center gap-4">
                  <div className={`rounded-xl bg-gradient-to-br p-3 ${selectedProject.gradient}`}>
                    <selectedProject.icon size={32} className="text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold leading-tight md:text-3xl">{selectedProject.title}</h3>
                    <span
                      className={`mt-1 inline-flex rounded-full border px-2 py-0.5 text-xs font-semibold ${
                        selectedProject.badge === "Main"
                          ? "border-primary/20 bg-primary/10 text-primary"
                          : "border-border bg-muted text-muted-foreground"
                      }`}
                    >
                      {selectedProject.badge}
                    </span>
                  </div>
                </div>
                {selectedProject.githubUrl ? (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-border bg-muted px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted/80"
                  >
                    <Github size={18} />
                    GitHub
                  </a>
                ) : null}
              </div>

              <p className="mb-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                {renderInlineText(selectedProject.summaryLine)}
              </p>

              {selectedProject.meta ? (
                <div className="mb-6 grid gap-3 text-sm text-muted-foreground md:grid-cols-3">
                  <div>
                    <span className="mr-2 font-semibold text-foreground">기간</span>
                    {selectedProject.meta.period}
                  </div>
                  <div>
                    <span className="mr-2 font-semibold text-foreground">역할</span>
                    {selectedProject.meta.role}
                  </div>
                  <div>
                    <span className="mr-2 font-semibold text-foreground">서비스</span>
                    {selectedProject.meta.service}
                  </div>
                </div>
              ) : null}

              <div className="mb-8 flex flex-col gap-2 md:flex-row md:flex-wrap">
                {selectedProject.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="inline-flex items-center gap-1 rounded-md bg-primary/8 px-2.5 py-1 text-xs font-semibold text-primary"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              <div className="mb-8 space-y-6 overflow-hidden rounded-xl border border-border bg-card/50 p-6 md:p-8">
                {selectedProject.details.map((detail) => (
                  <ProjectDetailSection key={detail.title} detail={detail} />
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default ProjectsSection;

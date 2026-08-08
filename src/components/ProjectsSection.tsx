import { useState, type KeyboardEvent, type ReactNode } from "react";
import { ArrowUpRight, ExternalLink, Github, Play, X } from "lucide-react";
import {
  projects,
  type ProblemSolvingStep,
  type Project,
  type ProjectDetail,
  type ProjectStory,
} from "@/data/projects";
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

const findProblemStep = (
  steps: readonly ProblemSolvingStep[],
  label: ProblemSolvingStep["label"],
) => steps.find((step) => step.label === label)?.text;

const joinProblemSteps = (...steps: Array<string | undefined>) =>
  steps.filter((step): step is string => Boolean(step)).join(" ");

const StoryCard = ({
  label,
  framework,
  text,
  emphasized = false,
}: {
  readonly label: string;
  readonly framework: string;
  readonly text: string;
  readonly emphasized?: boolean;
}) => (
  <div
    className={`rounded-xl border p-4 ${
      emphasized
        ? "border-primary/25 bg-primary/[0.06]"
        : "border-border bg-muted/20"
    }`}
  >
    <div className="mb-2 flex items-center justify-between gap-3">
      <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-primary">{label}</p>
      <span className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
        {framework}
      </span>
    </div>
    <p className="text-sm leading-relaxed text-muted-foreground">{renderInlineText(text)}</p>
  </div>
);

const ProjectStoryPanel = ({ story }: { readonly story: ProjectStory }) => (
  <section className="mb-8 rounded-xl border border-border bg-card/60 p-5 md:p-6">
    <div className="mb-4">
      <div>
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary">Project Story</p>
        <h4 className="mt-1 text-lg font-semibold text-foreground">AS-IS → TASK → ACTION → TO-BE</h4>
      </div>
    </div>
    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
      <StoryCard label="AS-IS" framework="Situation" text={story.asIs} />
      <StoryCard label="TASK" framework="Task" text={story.task} />
      <StoryCard label="ACTION" framework="Action" text={story.action} />
      <StoryCard label="TO-BE" framework="Result" text={story.toBe} emphasized />
    </div>
  </section>
);

const SupportingProjectNarrative = ({ story }: { readonly story: ProjectStory }) => {
  const sections = [
    { title: "문제와 맥락", text: story.asIs },
    { title: "역할과 목표", text: story.task },
    { title: "기술 선택과 구현", text: story.action },
    { title: "결과와 검증 범위", text: story.toBe },
  ];

  return (
    <section className="mb-8 border-y border-border py-6 md:py-8">
      <p className="text-xs font-extrabold tracking-[0.12em] text-primary">기술 사례</p>
      <h4 className="mt-1 text-lg font-semibold text-foreground">문제에서 결과까지</h4>
      <div className="mt-6 space-y-6">
        {sections.map((section) => (
          <div key={section.title} className="grid gap-2 md:grid-cols-[9rem_1fr] md:gap-6">
            <h5 className="text-sm font-semibold text-foreground">{section.title}</h5>
            <p className="text-sm leading-[1.8] text-muted-foreground">
              {renderInlineText(section.text)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

const ProblemSolvingStory = ({
  steps,
  table,
  diagram,
  note,
  narrative = false,
}: {
  readonly steps: readonly ProblemSolvingStep[];
  readonly table?: ProjectDetail["table"];
  readonly diagram?: string;
  readonly note?: string;
  readonly narrative?: boolean;
}) => {
  const asIs = joinProblemSteps(
    findProblemStep(steps, "측정 현상"),
    findProblemStep(steps, "원인 분석"),
  );
  const task = findProblemStep(steps, "의사결정");
  const action = joinProblemSteps(
    findProblemStep(steps, "구현"),
    findProblemStep(steps, "적용"),
  );
  const toBe = findProblemStep(steps, "결과");
  const insight = findProblemStep(steps, "배운 점");

  return (
    <div className="space-y-4">
      {narrative ? (
        <div className="space-y-5 border-l border-border pl-4 md:pl-6">
          {[
            { title: "문제 상황", text: asIs },
            { title: "기술적 판단", text: task },
            { title: "구현 과정", text: action },
            { title: "결과", text: toBe },
          ].map((section) =>
            section.text ? (
              <div key={section.title} className="space-y-1.5">
                <h5 className="text-sm font-semibold text-foreground">{section.title}</h5>
                <p className="text-sm leading-[1.8] text-muted-foreground">
                  {renderInlineText(section.text)}
                </p>
              </div>
            ) : null,
          )}
        </div>
      ) : (
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {asIs ? <StoryCard label="AS-IS" framework="Situation" text={asIs} /> : null}
          {task ? <StoryCard label="TASK" framework="Task" text={task} /> : null}
          {action ? <StoryCard label="ACTION" framework="Action" text={action} /> : null}
          {toBe ? <StoryCard label="TO-BE" framework="Result" text={toBe} emphasized /> : null}
        </div>
      )}

      {insight ? (
        <div className={narrative ? "border-t border-border pt-4" : "rounded-lg border border-border bg-background/50 p-4"}>
          <p className={narrative ? "mb-1 text-sm font-semibold text-foreground" : "mb-1 text-xs font-bold uppercase tracking-wide text-primary"}>
            {narrative ? "기술적으로 배운 점" : "Technical Insight"}
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">{renderInlineText(insight)}</p>
        </div>
      ) : null}

      {table ? (
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-left text-xs md:text-sm">
            <thead className="border-b border-border bg-muted/50 font-semibold text-foreground">
              <tr>
                {table.headers.map((h, idx) => (
                  <th key={idx} className="p-2.5 md:p-3">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-muted-foreground">
              {table.rows.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-muted/20">
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="p-2.5 md:p-3">{renderInlineText(cell)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}

      {diagram ? <Mermaid chart={diagram} /> : null}

      {note ? (
        <p className="rounded-lg bg-muted/30 p-3 text-xs leading-relaxed text-muted-foreground">
          {renderInlineText(note)}
        </p>
      ) : null}
    </div>
  );
};

const ProjectDetailSection = ({
  detail,
  narrative = false,
}: {
  readonly detail: ProjectDetail;
  readonly narrative?: boolean;
}) => (
  <section className="space-y-2">
    <h4 className="text-lg font-semibold text-foreground">{detail.title}</h4>
    {detail.body ? (
      <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
        {renderInlineText(detail.body)}
      </p>
    ) : null}
    {detail.problemSolving ? (
      <ProblemSolvingStory
        steps={detail.problemSolving}
        table={detail.table}
        diagram={detail.diagram}
        note={detail.note}
        narrative={narrative}
      />
    ) : null}
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
    {!detail.problemSolving && detail.table ? (
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
    {!detail.problemSolving && detail.diagram ? (
      <div className="mt-4">
        <Mermaid chart={detail.diagram} />
      </div>
    ) : null}
    {!detail.problemSolving && detail.note ? <p className="text-sm leading-relaxed text-muted-foreground">{renderInlineText(detail.note)}</p> : null}
    {detail.image ? (
      <div className="mt-4 overflow-hidden rounded-xl border border-border bg-muted/30 p-2">
        <img
          src={detail.image}
          alt={detail.imageAlt || detail.title}
          loading="lazy"
          decoding="async"
          className="max-h-96 w-full rounded-lg object-contain"
          onError={(e) => {
            (e.target as HTMLImageElement).alt = `[이미지 로드 실패: ${detail.image}]`;
          }}
        />
      </div>
    ) : null}
    {detail.images && detail.images.length > 0 ? (
      <div
        className={
          detail.imageLayout === "grid"
            ? "mt-4 grid gap-4 md:grid-cols-2"
            : "mt-4 space-y-4"
        }
      >
        {detail.images.map((img, idx) => (
          <div key={idx} className="flex flex-col gap-2">
            <div className="flex items-center justify-center overflow-hidden rounded-xl border border-border bg-muted/20 p-2">
              <img
                src={img.src}
                alt={img.caption}
                loading="lazy"
                decoding="async"
                className={`${
                  img.src.includes("/canva/")
                    ? detail.imageLayout === "grid"
                      ? "max-h-80 md:max-h-72"
                      : "max-h-[60vh]"
                    : "max-h-[70vh]"
                } w-full rounded-lg object-contain`}
                onError={(e) => {
                  (e.target as HTMLImageElement).alt = `[이미지 로드 실패: ${img.src}]`;
                }}
              />
            </div>
            <p className="text-center text-xs text-muted-foreground">{img.caption}</p>
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

const getProjectLabel = (project: Project) => {
  if (project.badge === "Main") return "팀장 · AI 파이프라인";
  if (project.title.startsWith("RF-DETR")) return "데이터 증강";
  if (project.title.startsWith("VAE")) return "차영상 시각화";
  return "개인 프로젝트";
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
  const orderedProjects = grouped ? [...mainProjects, ...supportingProjects] : items;
  const sectionDescription = grouped
    ? "영상 AI의 정확도·Tracking·처리 지연을 개선하고, 위험 이벤트를 관제 서비스의 대응 흐름까지 연결한 경험입니다."
    : "안전·보안 이벤트를 신뢰할 수 있는 Incident로 저장하고, 실시간 알림·증거 확인·사고 검색까지 연결한 경험입니다.";

  const renderCard = (project: Project, featured = false): ReactNode => (
    <ScrollAnimator key={project.title}>
      <div
        className={`minimal-card-accent group h-full cursor-pointer overflow-hidden ${
          featured ? "flex flex-col md:grid md:grid-cols-[0.92fr_1.08fr]" : "flex flex-col"
        }`}
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
        <div className={`bg-gradient-to-br ${project.gradient} ${featured ? "p-6 md:p-7" : "p-8 pb-6"}`}>
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
                {getProjectLabel(project)}
              </span>
              <ArrowUpRight
                size={20}
                strokeWidth={2.5}
                className="text-muted-foreground transition-colors group-hover:text-primary"
              />
            </div>
          </div>
          <h3 className={featured ? "text-xl font-bold leading-snug text-foreground md:text-2xl" : "text-lg font-semibold leading-snug text-foreground"}>
            {project.title}
          </h3>
          {project.heroImage ? (
            <div className={`${featured ? "mt-4" : "mt-5"} overflow-hidden rounded-lg border border-border bg-card/70`}>
              <img
                src={project.heroImage.src}
                alt={project.heroImage.caption}
                className="aspect-[16/9] w-full bg-muted/20 object-contain"
              />
            </div>
          ) : null}
        </div>

        <div className={`flex flex-1 flex-col ${featured ? "p-6 md:p-8" : "p-8 pt-5"}`}>
          <p className="text-sm leading-[1.8] text-muted-foreground">{renderInlineText(project.summaryLine)}</p>

          {featured && project.story ? (
            <div className="mt-5 border-l-2 border-primary/50 pl-4">
              <p className="mb-1 text-xs font-bold text-primary">핵심 기여</p>
              <p className="text-sm leading-[1.75] text-muted-foreground">
                {renderInlineText(project.story.action)}
              </p>
            </div>
          ) : null}

          <div className="mt-5 flex flex-wrap gap-2">
            {project.highlights.map((highlight) => (
              <span
                key={highlight}
                className="inline-flex items-center gap-1 rounded-md bg-primary/8 px-2.5 py-1 text-xs font-semibold text-primary"
              >
                {highlight}
              </span>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
            {project.tags.map((tag) => (
              <span key={tag} className="tech-tag">
                {tag}
              </span>
            ))}
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
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
              {sectionDescription}
            </p>
          </div>
        </ScrollAnimator>

        <div className="relative z-10 space-y-10">
          {orderedProjects[0] ? (
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-primary" />
                <p className="text-sm font-semibold text-foreground">실시간 관제 · 핵심 구현</p>
              </div>
              <div className="grid grid-cols-1 gap-6">
                {renderCard(orderedProjects[0], true)}
              </div>
            </div>
          ) : null}

          {orderedProjects.length > 1 ? (
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-border" />
                <p className="text-sm font-semibold text-foreground">의료영상 AI · 검색 시스템</p>
              </div>
              <div className={grouped ? "grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3" : "grid grid-cols-1 gap-6 md:grid-cols-2"}>
                {orderedProjects.slice(1).map((project) => renderCard(project))}
              </div>
            </div>
          ) : null}
        </div>

        {selectedProject ? (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
            onClick={(event) => {
              if (event.target === event.currentTarget) setSelectedProject(null);
            }}
          >
            <div className="pointer-events-none absolute inset-0 bg-background/80 backdrop-blur-sm" />
            <div
              className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-xl border border-border bg-card p-6 shadow-2xl duration-200 animate-in fade-in zoom-in-95 md:p-8"
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
                      {getProjectLabel(selectedProject)}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {selectedProject.liveUrl ? (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/20"
                    >
                      <ExternalLink size={18} />
                      서비스 바로가기
                    </a>
                  ) : null}
                  {selectedProject.demoUrl ? (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-rose-500/20 bg-rose-500/10 px-4 py-2 text-sm font-semibold text-rose-500 transition-colors hover:bg-rose-500/20 dark:text-rose-400"
                    >
                      <Play size={18} />
                      시연 영상 보기
                    </a>
                  ) : null}
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

              {selectedProject.story ? (
                selectedProject.badge === "Main" ? (
                  <ProjectStoryPanel story={selectedProject.story} />
                ) : (
                  <SupportingProjectNarrative story={selectedProject.story} />
                )
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
                  <ProjectDetailSection
                    key={detail.title}
                    detail={detail}
                    narrative={selectedProject.badge === "Supporting"}
                  />
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

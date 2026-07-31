import { useState, type KeyboardEvent, type ReactNode } from "react";
import { ArrowUpRight, ExternalLink, Github, Play, X } from "lucide-react";
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

const recruiterStepLabels = [
  { source: "측정 현상", display: "문제" },
  { source: "의사결정", display: "선택" },
  { source: "결과", display: "성과" },
] as const;

const technicalStepLabels = ["원인 분석", "구현", "배운 점"] as const;

const summarizeStep = (text: string): string => {
  const firstSentence = text.match(/^.*?다\./)?.[0] ?? text;
  return firstSentence.length > 100 ? `${firstSentence.slice(0, 100).trimEnd()}…` : firstSentence;
};

const ProjectDetailSection = ({ detail }: { readonly detail: ProjectDetail }) => (
  <section className="space-y-2">
    <h4 className="text-lg font-semibold text-foreground">{detail.title}</h4>
    {detail.body ? (
      <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
        {renderInlineText(detail.body)}
      </p>
    ) : null}
    {detail.problemSolving ? (
      <div className="space-y-3">
        <div className="grid gap-3 md:grid-cols-3">
          {recruiterStepLabels.map(({ source, display }) => {
            const step = detail.problemSolving?.find((item) => item.label === source);
            if (!step) return null;

            return (
              <div key={source} className="rounded-lg border border-border bg-muted/20 p-4">
                <p className="mb-1 text-xs font-bold uppercase tracking-wide text-primary">{display}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {renderInlineText(summarizeStep(step.text))}
                </p>
              </div>
            );
          })}
        </div>

        <div className="rounded-lg border border-border bg-background/40">
          <div className="border-b border-border px-4 py-3 text-sm font-semibold text-foreground">
            원인·구현·검증
          </div>
          <div className="space-y-4 p-4">
            <div className="grid gap-3 md:grid-cols-2">
              {detail.problemSolving
                .filter((step) => technicalStepLabels.includes(step.label as (typeof technicalStepLabels)[number]))
                .map((step) => (
                  <div key={step.label} className="rounded-lg border border-border bg-muted/20 p-4">
                    <p className="mb-1 text-xs font-bold uppercase tracking-wide text-primary">
                      {step.label === "배운 점" ? "기술 인사이트" : step.label}
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{renderInlineText(step.text)}</p>
                  </div>
                ))}
            </div>

            {detail.table ? (
              <div className="overflow-x-auto rounded-lg border border-border">
                <table className="w-full text-left text-xs md:text-sm">
                  <thead className="border-b border-border bg-muted/50 font-semibold text-foreground">
                    <tr>
                      {detail.table.headers.map((h, idx) => (
                        <th key={idx} className="p-2.5 md:p-3">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border text-muted-foreground">
                    {detail.table.rows.map((row, rIdx) => (
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

            {detail.diagram ? <Mermaid chart={detail.diagram} /> : null}

            {detail.note ? (
              <p className="rounded-lg bg-muted/30 p-3 text-xs leading-relaxed text-muted-foreground">
                {renderInlineText(detail.note)}
              </p>
            ) : null}
          </div>
        </div>
      </div>
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

const FeaturedProject = ({ project }: { readonly project: Project }) => {
  const problem = project.details.find((detail) => detail.title === "문제 정의와 목표")?.body;
  const role = project.details.find((detail) => detail.title === "담당 범위와 협업")?.groups?.[0]?.items;
  const decisions = project.details
    .filter((detail) => detail.problemSolving)
    .slice(0, 4)
    .map((detail) => ({
      title: detail.title,
      choice: detail.problemSolving?.find((step) => step.label === "의사결정")?.text ?? "",
      result: detail.problemSolving?.find((step) => step.label === "결과")?.text ?? "",
    }));

  return (
    <ScrollAnimator>
      <article className="overflow-hidden rounded-2xl border border-primary/20 bg-card shadow-sm">
        <div className={`bg-gradient-to-br ${project.gradient} p-6 md:p-10`}>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <div className="mb-4 flex items-center gap-3">
                <div className="icon-container"><project.icon size={24} /></div>
                <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold text-primary">FM플랫폼 직무 연관 대표 프로젝트</span>
              </div>
              <h3 className="text-2xl font-bold leading-tight text-foreground md:text-3xl">{project.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">{renderInlineText(project.summaryLine)}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.demoUrl ? (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-rose-500/20 bg-rose-500/10 px-4 py-2 text-sm font-semibold text-rose-500"><Play size={17} /> 시연 영상</a>
              ) : null}
              {project.githubUrl ? (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border bg-background/70 px-4 py-2 text-sm font-semibold text-foreground"><Github size={17} /> GitHub</a>
              ) : null}
            </div>
          </div>
          {project.heroImage ? (
            <div className="mt-7 overflow-hidden rounded-xl border border-border bg-card/80 p-2">
              <img src={project.heroImage.src} alt={project.heroImage.caption} className="max-h-[520px] w-full rounded-lg object-contain" />
            </div>
          ) : null}
        </div>

        <div className="space-y-8 p-6 md:p-10">
          {project.title.includes("안전 관제") ? (
            <section className="rounded-2xl border border-primary/25 bg-primary/5 p-5 md:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">채용담당자 10초 요약</p>
              <div className="mt-4 grid gap-3 lg:grid-cols-3">
                <div className="rounded-xl border border-border bg-background/70 p-4">
                  <p className="text-xs font-bold text-primary">문제</p>
                  <p className="mt-2 text-sm font-semibold leading-relaxed text-foreground">낙상 순간 Tracking ID가 끊기고 프레임 적체와 송출 정지로 실시간 관제 안정성이 떨어졌습니다.</p>
                </div>
                <div className="rounded-xl border border-border bg-background/70 p-4">
                  <p className="text-xs font-bold text-primary">직접 역할</p>
                  <p className="mt-2 text-sm font-semibold leading-relaxed text-foreground">YOLO 비교·선정, Tracking·LSTM 입력 개선, 프레임 버퍼·TensorRT 최적화, 영상 송출을 담당했습니다.</p>
                </div>
                <div className="rounded-xl border border-border bg-background/70 p-4">
                  <p className="text-xs font-bold text-primary">핵심 결과</p>
                  <p className="mt-2 text-sm font-semibold leading-relaxed text-foreground">ID Switch 8→1건, F1 89.29→93.49%, YOLO 평균 지연 50.0% 감소를 내부 동일 조건에서 확인했습니다.</p>
                </div>
              </div>
            </section>
          ) : null}
          <section className="rounded-xl border border-primary/20 bg-primary/5 p-5 md:p-6">
            <p className="text-xs font-bold uppercase tracking-wide text-primary">FM플랫폼 직무 적합성</p>
            <p className="mt-2 text-base font-bold leading-relaxed text-foreground">영상·센서 이벤트를 탐지하는 AI와 관제 서비스 사이의 연결 구조를 이해하고, 정확도·추적 안정성·지연을 함께 개선한 경험입니다.</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">시설 안전 플랫폼에서 필요한 것은 탐지 모델 하나가 아니라, 현장 입력을 안정적으로 처리하고 위험 이벤트를 운영자 화면과 대응 절차까지 전달하는 전체 흐름이라고 판단했습니다.</p>
          </section>
          <div className="grid gap-3 md:grid-cols-3">
            {project.meta ? (
              <>
                <div className="rounded-xl border border-border bg-muted/20 p-4"><p className="text-xs font-bold text-primary">기간</p><p className="mt-1 text-sm font-semibold text-foreground">{project.meta.period}</p></div>
                <div className="rounded-xl border border-border bg-muted/20 p-4"><p className="text-xs font-bold text-primary">본인 역할</p><p className="mt-1 text-sm font-semibold text-foreground">{project.meta.role}</p></div>
                <div className="rounded-xl border border-border bg-muted/20 p-4"><p className="text-xs font-bold text-primary">서비스</p><p className="mt-1 text-sm font-semibold text-foreground">{project.meta.service}</p></div>
              </>
            ) : null}
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <section className="rounded-xl border border-border bg-background/50 p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-primary">해결한 문제</p>
              <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">{problem ? renderInlineText(problem) : renderInlineText(project.description)}</p>
            </section>
            <section className="rounded-xl border border-border bg-background/50 p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-primary">개인 기여 · 직접 담당</p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                {(role ?? [project.meta?.role ?? "담당 범위"]).map((item) => (
                  <li key={item} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{renderInlineText(item)}</li>
                ))}
              </ul>
            </section>
          </div>

          <section>
            <div className="mb-4">
              <p className="text-xs font-bold uppercase tracking-wide text-primary">핵심 의사결정과 결과</p>
              <h4 className="mt-1 text-xl font-bold text-foreground">문제를 어떻게 판단하고 개선했는지</h4>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {decisions.map((item) => (
                <div key={item.title} className="rounded-xl border border-border bg-muted/15 p-5">
                  <h5 className="text-sm font-bold leading-snug text-foreground">{item.title}</h5>
                  <div className="mt-4"><p className="text-xs font-bold text-primary">판단</p><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{renderInlineText(summarizeStep(item.choice))}</p></div>
                  <div className="mt-4 border-t border-border pt-4"><p className="text-xs font-bold text-primary">성과</p><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{renderInlineText(item.result)}</p></div>
                </div>
              ))}
            </div>
          </section>

          {project.title.includes("안전 관제") ? (
            <section>
              <div className="mb-4">
                <p className="text-xs font-bold uppercase tracking-wide text-primary">검증된 성과 구분</p>
                <h4 className="mt-1 text-xl font-bold text-foreground">개인 개선 성과와 팀 통합 성과</h4>
              </div>
              <div className="grid gap-4 lg:grid-cols-2">
                <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
                  <p className="text-sm font-bold text-foreground">개인 개선 성과</p>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                    <li><strong className="text-foreground">Tracking:</strong> ID Switch 8→1건, Mean Track Coverage 35.76→49.70% <span className="block text-xs">자체 낙상 테스트 영상 기준</span></li>
                    <li><strong className="text-foreground">LSTM:</strong> F1 89.29→93.49% <span className="block text-xs">동일 데이터 분할·동일 평가 조건</span></li>
                    <li><strong className="text-foreground">TensorRT:</strong> YOLO 평균 지연 9.454→4.723ms <span className="block text-xs">동일 카메라 입력·동일 GPU 기준</span></li>
                  </ul>
                </div>
                <div className="rounded-xl border border-border bg-muted/20 p-5">
                  <p className="text-sm font-bold text-foreground">팀 통합 성과</p>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                    <li><strong className="text-foreground">이벤트 전달:</strong> 위험 이벤트 29/29건이 1초 이내 관제 서비스에 도달</li>
                    <li><strong className="text-foreground">검증 환경:</strong> 2개 카메라 내부 통합 테스트</li>
                    <li><strong className="text-foreground">역할 경계:</strong> MQTT 발행 모듈은 기존 구조를 사용하고 토픽·메시지 규칙을 맞춤</li>
                  </ul>
                </div>
              </div>
            </section>
          ) : (
            <div className="grid gap-3 sm:grid-cols-3">
              {project.highlights.map((highlight) => (
                <div key={highlight} className="rounded-xl border border-primary/15 bg-primary/5 p-4 text-center text-sm font-bold text-primary">{highlight}</div>
              ))}
            </div>
          )}

          <section className="space-y-8 border-t border-border pt-8">
            {project.details.map((detail) => <ProjectDetailSection key={detail.title} detail={detail} />)}
          </section>
        </div>
      </article>
    </ScrollAnimator>
  );
};

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
                className="aspect-[16/9] w-full bg-muted/20 object-contain"
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
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">기술 나열보다 현장 문제, 개인 기여, 판단 근거와 검증 결과가 먼저 보이도록 구성했습니다.</p>
          </div>
        </ScrollAnimator>

        {grouped ? (
          <div className="relative z-10 space-y-8">
            {orderedProjects.map((project) => <FeaturedProject key={project.title} project={project} />)}
          </div>
        ) : (
          <div className="relative z-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {orderedProjects.map((project) => renderCard(project))}
          </div>
        )}

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

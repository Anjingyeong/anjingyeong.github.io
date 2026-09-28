1	import { useState, type KeyboardEvent, type ReactNode } from "react";
2	import { ArrowUpRight, ExternalLink, Github, Play, X } from "lucide-react";
3	import {
4	  projects,
5	  type ProblemSolvingStep,
6	  type Project,
7	  type ProjectDetail,
8	  type ProjectStory,
9	} from "@/data/projects";
10	import ScrollAnimator from "./ScrollAnimator";
11	import Mermaid from "./Mermaid";
12	
13	const renderInlineText = (text: string): ReactNode[] =>
14	  text.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
15	    if (part.startsWith("**") && part.endsWith("**")) {
16	      return (
17	        <strong key={`${part}-${index}`} className="font-semibold text-foreground">
18	          {part.slice(2, -2)}
19	        </strong>
20	      );
21	    }
22	
23	    return part;
24	  });
25	
26	const findProblemStep = (
27	  steps: readonly ProblemSolvingStep[],
28	  label: ProblemSolvingStep["label"],
29	) => steps.find((step) => step.label === label)?.text;
30	
31	const joinProblemSteps = (...steps: Array<string | undefined>) =>
32	  steps.filter((step): step is string => Boolean(step)).join(" ");
33	
34	const ProjectStoryPanel = ({ story }: { readonly story: ProjectStory }) => (
35	  <section className="mb-8 border-y border-border py-6 md:py-8">
36	    <p className="text-xs font-extrabold tracking-[0.12em] text-primary">문제 해결</p>
37	    <h4 className="mt-1 text-lg font-semibold text-foreground">문제에서 결과까지</h4>
38	
39	    <div className="mt-5 grid gap-5 md:grid-cols-[minmax(0,1fr)_18rem] md:items-start">
40	      <p className="text-sm leading-[1.85] text-muted-foreground">
41	        {renderInlineText(joinProblemSteps(story.asIs, story.task, story.action))}
42	      </p>
43	
44	      <div className="border-l-2 border-primary/50 bg-primary/[0.05] px-4 py-3">
45	        <p className="mb-1 text-xs font-extrabold tracking-[0.12em] text-primary">검증 결과</p>
46	        <p className="text-base font-semibold leading-[1.7] text-foreground md:text-lg">
47	          {renderInlineText(story.toBe)}
48	        </p>
49	      </div>
50	    </div>
51	  </section>
52	);
53	
54	const ProblemSolvingStory = ({
55	  steps,
56	  table,
57	  diagram,
58	  note,
59	}: {
60	  readonly steps: readonly ProblemSolvingStep[];
61	  readonly table?: ProjectDetail["table"];
62	  readonly diagram?: string;
63	  readonly note?: string;
64	}) => {
65	  const asIs = joinProblemSteps(
66	    findProblemStep(steps, "측정 현상"),
67	    findProblemStep(steps, "원인 분석"),
68	  );
69	  const task = findProblemStep(steps, "의사결정");
70	  const action = joinProblemSteps(
71	    findProblemStep(steps, "구현"),
72	    findProblemStep(steps, "적용"),
73	  );
74	  const toBe = findProblemStep(steps, "결과");
75	  const insight = findProblemStep(steps, "배운 점");
76	
77	  return (
78	    <div className="space-y-4">
79	      <div className="grid gap-4 border-l border-border pl-4 md:grid-cols-[minmax(0,1fr)_16rem] md:gap-6 md:pl-6">
80	        <p className="text-sm leading-[1.85] text-muted-foreground">
81	          {renderInlineText(joinProblemSteps(asIs, task, action))}
82	        </p>
83	
84	        {toBe ? (
85	          <div className="border-l-2 border-primary/50 bg-primary/[0.05] px-4 py-3">
86	            <p className="mb-1 text-xs font-extrabold tracking-[0.12em] text-primary">검증 결과</p>
87	            <p className="text-sm font-semibold leading-[1.75] text-foreground md:text-base">
88	              {renderInlineText(toBe)}
89	            </p>
90	          </div>
91	        ) : null}
92	      </div>
93	
94	      {insight ? (
95	        <div className="border-t border-border pt-4">
96	          <p className="mb-1 text-sm font-semibold text-foreground">기술적으로 배운 점</p>
97	          <p className="text-sm leading-relaxed text-muted-foreground">{renderInlineText(insight)}</p>
98	        </div>
99	      ) : null}
100	
101	      {table ? (
102	        <div className="overflow-x-auto rounded-lg border border-border">
103	          <table className="w-full text-left text-xs md:text-sm">
104	            <thead className="border-b border-border bg-muted/50 font-semibold text-foreground">
105	              <tr>
106	                {table.headers.map((h, idx) => (
107	                  <th key={idx} className="p-2.5 md:p-3">{h}</th>
108	                ))}
109	              </tr>
110	            </thead>
111	            <tbody className="divide-y divide-border text-muted-foreground">
112	              {table.rows.map((row, rIdx) => (
113	                <tr key={rIdx} className="hover:bg-muted/20">
114	                  {row.map((cell, cIdx) => (
115	                    <td key={cIdx} className="p-2.5 md:p-3">{renderInlineText(cell)}</td>
116	                  ))}
117	                </tr>
118	              ))}
119	            </tbody>
120	          </table>
121	        </div>
122	      ) : null}
123	
124	      {diagram ? <Mermaid chart={diagram} /> : null}
125	
126	      {note ? (
127	        <p className="rounded-lg bg-muted/30 p-3 text-xs leading-relaxed text-muted-foreground">
128	          {renderInlineText(note)}
129	        </p>
130	      ) : null}
131	    </div>
132	  );
133	};
134	
135	const ProjectDetailSection = ({ detail }: { readonly detail: ProjectDetail }) => (
136	  <section className="space-y-2">
137	    <h4 className="text-lg font-semibold text-foreground">{detail.title}</h4>
138	    {detail.body ? (
139	      <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
140	        {renderInlineText(detail.body)}
141	      </p>
142	    ) : null}
143	    {detail.problemSolving ? (
144	      <ProblemSolvingStory
145	        steps={detail.problemSolving}
146	        table={detail.table}
147	        diagram={detail.diagram}
148	        note={detail.note}
149	      />
150	    ) : null}
151	    {detail.items ? (
152	      <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
153	        {detail.items.map((item) => (
154	          <li key={item}>{renderInlineText(item)}</li>
155	        ))}
156	      </ul>
157	    ) : null}
158	    {detail.groups ? (
159	      <div className="space-y-4">
160	        {detail.groups.map((group) => (
161	          <div key={group.title}>
162	            <h5 className="mb-2 text-sm font-semibold text-foreground">{group.title}</h5>
163	            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
164	              {group.items.map((item) => (
165	                <li key={item}>{renderInlineText(item)}</li>
166	              ))}
167	            </ul>
168	          </div>
169	        ))}
170	      </div>
171	    ) : null}
172	    {!detail.problemSolving && detail.table ? (
173	      <div className="mt-4 overflow-x-auto rounded-lg border border-border">
174	        <table className="w-full text-left text-xs md:text-sm">
175	          <thead className="border-b border-border bg-muted/50 font-semibold text-foreground">
176	            <tr>
177	              {detail.table.headers.map((h, idx) => (
178	                <th key={idx} className="p-2.5 md:p-3">
179	                  {h}
180	                </th>
181	              ))}
182	            </tr>
183	          </thead>
184	          <tbody className="divide-y divide-border text-muted-foreground">
185	            {detail.table.rows.map((row, rIdx) => (
186	              <tr key={rIdx} className="hover:bg-muted/20">
187	                {row.map((cell, cIdx) => (
188	                  <td key={cIdx} className="p-2.5 md:p-3">
189	                    {renderInlineText(cell)}
190	                  </td>
191	                ))}
192	              </tr>
193	            ))}
194	          </tbody>
195	        </table>
196	      </div>
197	    ) : null}
198	    {!detail.problemSolving && detail.diagram ? (
199	      <div className="mt-4">
200	        <Mermaid chart={detail.diagram} />
201	      </div>
202	    ) : null}
203	    {!detail.problemSolving && detail.note ? <p className="text-sm leading-relaxed text-muted-foreground">{renderInlineText(detail.note)}</p> : null}
204	    {detail.image ? (
205	      <div className="mt-4 overflow-hidden rounded-xl border border-border bg-muted/30 p-2">
206	        <img
207	          src={detail.image}
208	          alt={detail.imageAlt || detail.title}
209	          loading="lazy"
210	          decoding="async"
211	          className="max-h-96 w-full rounded-lg object-contain"
212	          onError={(e) => {
213	            (e.target as HTMLImageElement).alt = `[이미지 로드 실패: ${detail.image}]`;
214	          }}
215	        />
216	      </div>
217	    ) : null}
218	    {detail.images && detail.images.length > 0 ? (
219	      <div
220	        className={
221	          detail.imageLayout === "grid"
222	            ? "mt-4 grid gap-4 md:grid-cols-2"
223	            : "mt-4 space-y-4"
224	        }
225	      >
226	        {detail.images.map((img, idx) => (
227	          <div key={idx} className="flex flex-col gap-2">
228	            <div className="flex items-center justify-center overflow-hidden rounded-xl border border-border bg-muted/20 p-2">
229	              <img
230	                src={img.src}
231	                alt={img.caption}
232	                loading="lazy"
233	                decoding="async"
234	                className={`${
235	                  img.src.includes("/canva/")
236	                    ? detail.imageLayout === "grid"
237	                      ? "max-h-80 md:max-h-72"
238	                      : "max-h-[60vh]"
239	                    : "max-h-[70vh]"
240	                } w-full rounded-lg object-contain`}
241	                onError={(e) => {
242	                  (e.target as HTMLImageElement).alt = `[이미지 로드 실패: ${img.src}]`;
243	                }}
244	              />
245	            </div>
246	            <p className="text-center text-xs text-muted-foreground">{img.caption}</p>
247	          </div>
248	        ))}
249	      </div>
250	    ) : null}
251	  </section>
252	);
253	
254	type ProjectsSectionProps = {
255	  readonly items?: readonly Project[];
256	  readonly grouped?: boolean;
257	};
258	
259	const getProjectLabel = (project: Project) => {
260	  if (project.badge === "Main") return "팀장 · AI 파이프라인";
261	  if (project.title.startsWith("JK")) return "Agentic AI · MCP Runtime";
262	  if (project.title.startsWith("LLM Wiki")) return "Hybrid Search · Elasticsearch";
263	  if (project.title.startsWith("RF-DETR")) return "데이터 증강";
264	  if (project.title.startsWith("VAE")) return "차영상 시각화";
265	  return "개인 프로젝트";
266	};
267	
268	const getOtherProjectPriority = (project: Project) => {
269	  if (project.title.startsWith("JK")) return 0;
270	  if (project.title.startsWith("LLM Wiki")) return 1;
271	  if (project.title.startsWith("RF-DETR")) return 2;
272	  if (project.title.startsWith("VAE")) return 3;
273	  return 4;
274	};
275	
276	
277	const ProjectsSection = ({ items = projects, grouped = true }: ProjectsSectionProps) => {
278	  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
279	
280	  const handleKeyDown = (event: KeyboardEvent) => {
281	    if (event.key === "Escape") setSelectedProject(null);
282	  };
283	
284	  const openProjectFromKeyboard = (event: KeyboardEvent<HTMLDivElement>, project: Project) => {
285	    if (event.key !== "Enter" && event.key !== " ") return;
286	    event.preventDefault();
287	    setSelectedProject(project);
288	  };
289	
290	  const mainProjects = items.filter((project) => project.badge === "Main");
291	  const otherProjects = items
292	    .filter((project) => project.badge !== "Main")
293	    .slice()
294	    .sort((a, b) => getOtherProjectPriority(a) - getOtherProjectPriority(b));
295	  const orderedProjects = grouped ? [...mainProjects, ...otherProjects] : items;
296	  const sectionDescription = grouped
297	    ? "실시간 Vision의 정확도·Tracking·처리 지연을 수치로 개선하고, JK에서는 ChatGPT의 로컬 개발 작업을 상태·권한·검증 가능한 실행 흐름으로 연결했습니다."
298	    : "실시간 이벤트 플랫폼, 운영 웹서비스, Agentic AI 개발 도구를 요구사항부터 API·데이터·실행·검증까지 연결한 프로젝트입니다.";
299	
300	  const renderCard = (project: Project, featured = false): ReactNode => (
301	    <ScrollAnimator key={project.title}>
302	      <div
303	        className={`minimal-card-accent project-spotlight group h-full cursor-pointer overflow-hidden ${
304	          featured ? "flex flex-col md:grid md:grid-cols-[0.92fr_1.08fr]" : "flex flex-col"
305	        }`}
306	        role="button"
307	        tabIndex={0}
308	        onClick={() => setSelectedProject(project)}
309	        onKeyDown={(event) => openProjectFromKeyboard(event, project)}
310	        onPointerMove={(event) => {
311	          if (event.pointerType !== "mouse") return;
312	          const rect = event.currentTarget.getBoundingClientRect();
313	          event.currentTarget.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
314	          event.currentTarget.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
315	        }}
316	      >
317	        <div className={`bg-gradient-to-br ${project.gradient} ${featured ? "p-6 md:p-7" : "p-8 pb-6"}`}>
318	          <div className="mb-4 flex items-start justify-between">
319	            <div className="icon-container">
320	              <project.icon size={22} />
321	            </div>
322	            <div className="flex items-center gap-2">
323	              <span
324	                className={`rounded-full border px-2 py-0.5 text-xs font-semibold ${
325	                  project.badge === "Main"
326	                    ? "border-primary/20 bg-primary/10 text-primary"
327	                    : "border-border bg-muted text-muted-foreground"
328	                }`}
329	              >
330	                {getProjectLabel(project)}
331	              </span>
332	              <ArrowUpRight
333	                size={20}
334	                strokeWidth={2.5}
335	                className="text-muted-foreground transition-colors group-hover:text-primary"
336	              />
337	            </div>
338	          </div>
339	          <h3 className={featured ? "text-xl font-bold leading-snug text-foreground md:text-2xl" : "text-lg font-semibold leading-snug text-foreground"}>
340	            {project.title}
341	          </h3>
342	          {project.heroImage ? (
343	            <div className={`${featured ? "mt-4" : "mt-5"} overflow-hidden rounded-lg border border-border bg-card/70`}>
344	              <img
345	                src={project.heroImage.src}
346	                alt={project.heroImage.caption}
347	                className="aspect-[16/9] w-full bg-muted/20 object-contain"
348	              />
349	            </div>
350	          ) : null}
351	        </div>
352	
353	        <div className={`flex flex-1 flex-col ${featured ? "p-6 md:p-8" : "p-8 pt-5"}`}>
354	          {project.meta ? (
355	            <dl className="project-meta-row">
356	              <div className="project-meta-item">
357	                <dt>기간</dt>
358	                <dd>{project.meta.period}</dd>
359	              </div>
360	              <div className="project-meta-item">
361	                <dt>서비스</dt>
362	                <dd>{project.meta.service}</dd>
363	              </div>
364	              <div className="project-meta-item project-meta-role">
365	                <dt>역할</dt>
366	                <dd>{project.meta.role}</dd>
367	              </div>
368	            </dl>
369	          ) : null}
370	          <p className="text-sm leading-[1.8] text-muted-foreground">{renderInlineText(project.summaryLine)}</p>
371	
372	          {featured && project.story ? (
373	            <div className="mt-5 border-l-2 border-primary/50 pl-4">
374	              <p className="mb-1 text-xs font-bold text-primary">핵심 기여</p>
375	              <p className="text-sm leading-[1.75] text-muted-foreground">
376	                {renderInlineText(project.story.action)}
377	              </p>
378	            </div>
379	          ) : null}
380	
381	          <div className="mt-5 flex flex-wrap gap-2">
382	            {project.highlights.map((highlight) => (
383	              <span
384	                key={highlight}
385	                className="inline-flex items-center gap-1 rounded-md bg-primary/8 px-2.5 py-1 text-xs font-semibold text-primary"
386	              >
387	                {highlight}
388	              </span>
389	            ))}
390	          </div>
391	          <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
392	            {project.tags.map((tag) => (
393	              <span key={tag} className="tech-tag">
394	                {tag}
395	              </span>
396	            ))}
397	          </div>
398	        </div>
399	      </div>
400	    </ScrollAnimator>
401	  );
402	
403	  return (
404	    <section id="projects" className="section-alt py-24 md:py-32" onKeyDown={handleKeyDown}>
405	      <div className="container relative">
406	        <ScrollAnimator>
407	          <div className="section-header">
408	            <h2>Projects</h2>
409	            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
410	              {sectionDescription}
411	            </p>
412	          </div>
413	        </ScrollAnimator>
414	
415	        <div className="relative z-10 space-y-10">
416	          {orderedProjects[0] ? (
417	            <div>
418	              <div className="mb-4 flex items-center gap-3">
419	                <span className="h-px w-8 bg-primary" />
420	                <p className="text-sm font-semibold text-foreground">
421	                  {grouped ? "대표 프로젝트 · 실시간 AI 시스템" : "대표 프로젝트 · 실시간 서비스"}
422	                </p>
423	              </div>
424	              <div className="grid grid-cols-1 gap-6">
425	                {renderCard(orderedProjects[0], true)}
426	              </div>
427	            </div>
428	          ) : null}
429	
430	          {orderedProjects.length > 1 ? (
431	            <div>
432	              <div className="mb-4 flex items-center gap-3">
433	                <span className="h-px w-8 bg-border" />
434	                <p className="text-sm font-semibold text-foreground">
435	                  {grouped ? "Agentic AI · 검색 시스템 · 의료영상 AI" : "Agentic AI · Web · Search"}
436	                </p>
437	              </div>
438	              <div className={grouped ? "grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3" : "grid grid-cols-1 gap-6 md:grid-cols-2"}>
439	                {orderedProjects.slice(1).map((project) => renderCard(project))}
440	              </div>
441	            </div>
442	          ) : null}
443	        </div>
444	
445	        {selectedProject ? (
446	          <div
447	            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
448	            onClick={(event) => {
449	              if (event.target === event.currentTarget) setSelectedProject(null);
450	            }}
451	          >
452	            <div className="pointer-events-none absolute inset-0 bg-background/80 backdrop-blur-sm" />
453	            <div
454	              className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-xl border border-border bg-card p-6 shadow-2xl duration-200 animate-in fade-in zoom-in-95 md:p-8"
455	              role="dialog"
456	              aria-modal="true"
457	            >
458	              <button
459	                className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
460	                onClick={() => setSelectedProject(null)}
461	                aria-label="프로젝트 상세 닫기"
462	              >
463	                <X size={24} />
464	              </button>
465	
466	              <div className="mb-6 flex flex-col justify-between gap-4 pr-8 md:flex-row md:items-start">
467	                <div className="flex items-center gap-4">
468	                  <div className={`rounded-xl bg-gradient-to-br p-3 ${selectedProject.gradient}`}>
469	                    <selectedProject.icon size={32} className="text-foreground" />
470	                  </div>
471	                  <div>
472	                    <h3 className="text-2xl font-bold leading-tight md:text-3xl">{selectedProject.title}</h3>
473	                    <span
474	                      className={`mt-1 inline-flex rounded-full border px-2 py-0.5 text-xs font-semibold ${
475	                        selectedProject.badge === "Main"
476	                          ? "border-primary/20 bg-primary/10 text-primary"
477	                          : "border-border bg-muted text-muted-foreground"
478	                      }`}
479	                    >
480	                      {getProjectLabel(selectedProject)}
481	                    </span>
482	                  </div>
483	                </div>
484	                <div className="flex flex-wrap items-center gap-2">
485	                  {selectedProject.liveUrl ? (
486	                    <a
487	                      href={selectedProject.liveUrl}
488	                      target="_blank"
489	                      rel="noopener noreferrer"
490	                      className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/20"
491	                    >
492	                      <ExternalLink size={18} />
493	                      서비스 바로가기
494	                    </a>
495	                  ) : null}
496	                  {selectedProject.demoUrl ? (
497	                    <a
498	                      href={selectedProject.demoUrl}
499	                      target="_blank"
500	                      rel="noopener noreferrer"
501	                      className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-rose-500/20 bg-rose-500/10 px-4 py-2 text-sm font-semibold text-rose-500 transition-colors hover:bg-rose-500/20 dark:text-rose-400"
502	                    >
503	                      <Play size={18} />
504	                      시연 영상 보기
505	                    </a>
506	                  ) : null}
507	                  {selectedProject.githubUrl ? (
508	                    <a
509	                      href={selectedProject.githubUrl}
510	                      target="_blank"
511	                      rel="noopener noreferrer"
512	                      className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-border bg-muted px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted/80"
513	                    >
514	                      <Github size={18} />
515	                      GitHub
516	                    </a>
517	                  ) : null}
518	                </div>
519	              </div>
520	
521	              <p className="mb-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
522	                {renderInlineText(selectedProject.summaryLine)}
523	              </p>
524	
525	              {selectedProject.meta ? (
526	                <div className="mb-6 grid gap-3 text-sm text-muted-foreground md:grid-cols-3">
527	                  <div>
528	                    <span className="mr-2 font-semibold text-foreground">기간</span>
529	                    {selectedProject.meta.period}
530	                  </div>
531	                  <div>
532	                    <span className="mr-2 font-semibold text-foreground">역할</span>
533	                    {selectedProject.meta.role}
534	                  </div>
535	                  <div>
536	                    <span className="mr-2 font-semibold text-foreground">서비스</span>
537	                    {selectedProject.meta.service}
538	                  </div>
539	                </div>
540	              ) : null}
541	
542	              {selectedProject.badge !== "Main" && selectedProject.story ? (
543	                <ProjectStoryPanel story={selectedProject.story} />
544	              ) : null}
545	
546	              <div className="mb-8 flex flex-col gap-2 md:flex-row md:flex-wrap">
547	                {selectedProject.highlights.map((highlight) => (
548	                  <span
549	                    key={highlight}
550	                    className="inline-flex items-center gap-1 rounded-md bg-primary/8 px-2.5 py-1 text-xs font-semibold text-primary"
551	                  >
552	                    {highlight}
553	                  </span>
554	                ))}
555	              </div>
556	
557	              <div className="mb-8 space-y-6 overflow-hidden rounded-xl border border-border bg-card/50 p-6 md:p-8">
558	                {selectedProject.details.map((detail) => (
559	                  <ProjectDetailSection key={detail.title} detail={detail} />
560	                ))}
561	              </div>
562	            </div>
563	          </div>
564	        ) : null}
565	      </div>
566	    </section>
567	  );
568	};
569	
570	export default ProjectsSection;
571	
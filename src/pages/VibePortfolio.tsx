import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  engineeringBackground,
  jkCapabilities,
  vibeBuilds,
  vibeWorkflow,
} from "@/data/vibePortfolio";

const llmWiki = vibeBuilds[0];
const shippedBuilds = vibeBuilds.slice(1);

const Label = ({ children }: { children: string }) => (
  <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-neutral-500">{children}</div>
);

const Section = ({ id, index, title, children }: { id?: string; index: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="border-t border-neutral-300 py-10 sm:py-12">
    <div className="grid gap-5 md:grid-cols-[120px_minmax(0,1fr)]">
      <div className="font-mono text-[11px] text-neutral-500">{index}</div>
      <div>
        <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-neutral-950 sm:text-2xl">{title}</h2>
        <div className="mt-6">{children}</div>
      </div>
    </div>
  </section>
);

const VibePortfolio = () => {
  useEffect(() => {
    const prev = document.title;
    document.title = "안진경 — LLM Automation Developer";
    return () => { document.title = prev; };
  }, []);

  return (
    <div className="min-h-screen bg-[#f2f1ed] text-neutral-900 selection:bg-[#2457ff] selection:text-white">
      <header className="border-b border-neutral-300">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#top" className="text-[13px] font-semibold tracking-[-0.01em]">AN JIN GYEONG</a>
          <div className="flex items-center gap-5 font-mono text-[10px] uppercase tracking-[0.08em] text-neutral-500">
            <a href="#jk" className="hidden hover:text-neutral-950 sm:inline">JK</a>
            <a href="#rag" className="hidden hover:text-neutral-950 sm:inline">RAG</a>
            <a href="#builds" className="hidden hover:text-neutral-950 sm:inline">Builds</a>
            <Link to="/print/vibe" className="border-b border-neutral-700 pb-0.5 text-neutral-800">PDF</Link>
          </div>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-5 sm:px-8">
        <section className="py-12 sm:py-16">
          <div className="grid gap-8 md:grid-cols-[120px_minmax(0,1fr)]">
            <div><Label>Portfolio / 2026</Label></div>
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#2457ff]">LLM Automation · RAG · Vibe Coding</div>
              <h1 className="mt-5 max-w-2xl text-[30px] font-semibold leading-[1.2] tracking-[-0.035em] sm:text-[34px]">
                LLM을 업무에 맞게 다듬고,<br />실제 자동화로 연결합니다.
              </h1>
              <p className="mt-6 max-w-2xl text-[14px] leading-7 text-neutral-650">
                모델 자체의 weight를 학습시키는 파인튜닝보다, 검색·컨텍스트·평가·실행 계층을 조정해 LLM이 실제 업무에서 더 정확하고 안전하게 동작하도록 만드는 경험을 쌓았습니다.
                JK는 ChatGPT 웹 세션의 추론을 그대로 활용하면서 별도 LLM/API 호출을 중복하지 않도록 실행 계층만 얇게 연결했고, LLM Wiki로 검색 품질을 측정했으며, 바이브코딩으로 실제 서비스를 배포했습니다.
              </p>
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] text-neutral-500">
                <span>Agent execution / Approval</span>
                <span>RAG / Hybrid Search / Evaluation</span>
                <span>Build → QA → Deploy</span>
              </div>
            </div>
          </div>
        </section>

        <Section id="jk" index="01 / HARNESS" title="JK — ChatGPT 실행을 로컬·OCI로 연결한 Thin Harness">
          <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#2457ff]">ChatGPT web → thin execution layer</div>
          <p className="mt-4 max-w-3xl text-[14px] leading-7 text-neutral-700">
            이미 사용 중인 ChatGPT 웹 세션을 주 추론 엔진으로 두고, 같은 작업을 위해 별도 코딩 에이전트나 LLM을 다시 호출하는 중복을 줄이기 위해 만든 실행 하네스입니다.
            JK는 모델 역할을 대신하지 않고 프로젝트 컨텍스트·권한·승인·도구 실행만 담당하며, ChatGPT의 작업 의도를 Local 또는 OCI 환경의 실제 작업으로 연결합니다.
          </p>
          <div className="mt-9 grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <Label>Execution path</Label>
              <div className="mt-3 border-y border-neutral-400 py-5 font-mono text-[12px] leading-8 text-neutral-800">
                Natural-language task<br />
                <span className="text-neutral-400">↓</span><br />
                ChatGPT<br />
                <span className="text-neutral-400">↓</span><br />
                <strong className="font-semibold text-[#2457ff]">JK</strong> / context · role · permission · approval<br />
                <span className="text-neutral-400">↓</span><br />
                Local executor / OCI executor<br />
                <span className="text-neutral-400">↓</span><br />
                Project / Git / Test
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div>
                  <Label>Problem</Label>
                  <p className="mt-2 text-[13px] leading-6 text-neutral-600">ChatGPT 웹 모델을 이미 사용하고 있는데도 별도 코딩 에이전트가 같은 문맥을 다시 읽고 추론하면 모델 호출과 컨텍스트 비용이 중복됐습니다.</p>
                </div>
                <div>
                  <Label>Decision</Label>
                  <p className="mt-2 text-[13px] leading-6 text-neutral-600">추론은 ChatGPT에 남기고 JK는 컨텍스트·권한·도구 실행만 담당하도록 얇게 분리했습니다. 위험 작업만 승인 게이트로 제어합니다.</p>
                </div>
              </div>
            </div>
            <div>
              <Label>Implemented</Label>
              <div className="mt-3 border-t border-neutral-300">
                {jkCapabilities.map((item, idx) => (
                  <div key={item.title} className="border-b border-neutral-300 py-4">
                    <div className="flex gap-3">
                      <span className="font-mono text-[10px] text-neutral-400">0{idx + 1}</span>
                      <div>
                        <div className="text-[13px] font-semibold text-neutral-900">{item.title}</div>
                        <p className="mt-1 text-[12px] leading-5 text-neutral-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section id="rag" index="02 / RAG" title="LLM Wiki — 검색 품질을 측정하며 개선한 RAG 시스템">
          <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#2457ff]">Retrieval · Context · Evaluation</div>
          <p className="mt-4 max-w-3xl text-[14px] leading-7 text-neutral-700">
            LLM의 답변 품질을 프롬프트 감각에만 의존하지 않고, 검색 단계부터 측정하기 위해 만든 프로젝트입니다.
            프로젝트 문서를 Chunk로 구조화하고 BM25, Vector Search, RRF 기반 Hybrid Search를 같은 평가 질의에서 비교했습니다.
          </p>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <Label>Pipeline</Label>
              <div className="mt-3 border-y border-neutral-400 py-5 font-mono text-[11px] leading-8 text-neutral-800">
                Query<br />↓<br />BM25 / Vector Search<br />↓<br />RRF Hybrid Ranking<br />↓<br />Retrieved Context<br />↓<br />LLM Answer
              </div>
            </div>
            <div>
              <Label>Evaluation</Label>
              <div className="mt-3 border-t border-neutral-300">
                {llmWiki.proof.map((item, idx) => (
                  <div key={item} className="grid grid-cols-[42px_1fr] border-b border-neutral-300 py-4">
                    <span className="font-mono text-[10px] text-neutral-400">0{idx + 1}</span>
                    <span className="text-[13px] font-medium text-neutral-800">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-[12px] leading-6 text-neutral-500">
                여기서 다듬은 대상은 모델 weight가 아니라 retrieval과 context 구성, 그리고 평가 기준입니다. LLM 애플리케이션의 품질을 재현 가능한 지표로 확인하려고 했습니다.
              </p>
              <a href={llmWiki.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-[12px] font-semibold text-[#2457ff] underline underline-offset-4">Live service ↗</a>
            </div>
          </div>
        </Section>

        <Section id="workflow" index="03 / METHOD" title="LLM을 어디에 쓰고, 무엇을 직접 조정했는가">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <Label>LLM-assisted development</Label>
              <div className="mt-3 border-t border-neutral-300 text-[13px] leading-6 text-neutral-600">
                <div className="border-b border-neutral-300 py-3">코드 초안과 반복 구현</div>
                <div className="border-b border-neutral-300 py-3">수정안·테스트 케이스 제안</div>
                <div className="border-b border-neutral-300 py-3">기술 조사와 비교안 정리</div>
                <div className="border-b border-neutral-300 py-3">반복 QA와 문서화 보조</div>
              </div>
            </div>
            <div>
              <Label>System tuning / human decisions</Label>
              <div className="mt-3 border-t border-neutral-300 text-[13px] leading-6 text-neutral-800">
                <div className="border-b border-neutral-300 py-3">프로젝트 컨텍스트와 실행 범위</div>
                <div className="border-b border-neutral-300 py-3">RAG retrieval · ranking · context 구성</div>
                <div className="border-b border-neutral-300 py-3">Golden Query와 품질 평가 기준</div>
                <div className="border-b border-neutral-300 py-3">권한·승인 경계와 최종 배포 판단</div>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-neutral-300">
            {vibeWorkflow.map((item) => (
              <div key={item.step} className="grid gap-2 border-b border-neutral-300 py-3 sm:grid-cols-[44px_180px_minmax(0,1fr)] sm:items-baseline">
                <div className="font-mono text-[10px] text-neutral-400">{item.step}</div>
                <div className="text-[13px] font-semibold text-neutral-900">{item.title}</div>
                <div className="text-[12px] leading-5 text-neutral-600">{item.description}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="builds" index="04 / VIBE" title="Vibe Coding — 빠르게 만들고 실제로 배포한 제품">
          <p className="mb-6 max-w-2xl text-[13px] leading-6 text-neutral-600">
            아래 프로젝트는 LLM을 개발 도구로 활용해 요구사항 정의부터 구현, QA, 배포까지 반복한 사례입니다. LLM 시스템 설계 역량과는 분리해 ‘실행 속도와 제품 완성력’을 보여주는 증거로 두었습니다.
          </p>
          <div className="border-t border-neutral-400">
            {shippedBuilds.map((build, idx) => (
              <article key={build.id} className="grid gap-5 border-b border-neutral-300 py-7 md:grid-cols-[52px_180px_minmax(0,1fr)]">
                <div className="font-mono text-[11px] text-neutral-400">0{idx + 1}</div>
                <div>
                  <div className="text-[16px] font-semibold tracking-[-0.01em]">{build.title}</div>
                  <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.08em] text-neutral-500">{build.eyebrow}</div>
                </div>
                <div>
                  <div className="text-[13px] font-medium text-neutral-800">{build.subtitle}</div>
                  <p className="mt-3 max-w-2xl text-[13px] leading-6 text-neutral-600">{build.description}</p>
                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 font-mono text-[10px] text-neutral-500">{build.proof.map((item) => <span key={item}>{item}</span>)}</div>
                  <div className="mt-3 font-mono text-[10px] text-neutral-400">{build.stack.join(" / ")}</div>
                  <a href={build.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-[12px] font-semibold text-[#2457ff] underline underline-offset-4">{build.linkLabel} ↗</a>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="engineering" index="05 / BASE" title="Engineering Background">
          <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
            <div>
              <Label>Without LLM</Label>
              <h3 className="mt-3 text-[20px] font-semibold tracking-[-0.02em]">{engineeringBackground.title}</h3>
              <div className="mt-1 text-[13px] text-neutral-500">{engineeringBackground.subtitle}</div>
              <p className="mt-5 text-[13px] leading-6 text-neutral-600">{engineeringBackground.description}</p>
              <div className="mt-5 border-t border-neutral-300">{engineeringBackground.proof.map((item) => <div key={item} className="border-b border-neutral-300 py-2.5 font-mono text-[11px] text-neutral-700">{item}</div>)}</div>
              <a href={engineeringBackground.demo} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block text-[12px] font-semibold text-[#2457ff] underline underline-offset-4">Demo video ↗</a>
            </div>
            <img src={engineeringBackground.image} alt="스마트 안전 관제 대시보드와 사고 검색 화면" className="w-full border border-neutral-300 object-cover" loading="lazy" />
          </div>
          <p className="mt-8 max-w-3xl border-l-2 border-[#2457ff] pl-4 text-[13px] leading-6 text-neutral-600">
            LLM을 사용하기 전부터 영상 입력, Tracking, 실시간 이벤트, 백엔드·프론트엔드 인터페이스를 연결하고 로그로 문제를 좁혀 왔습니다. LLM은 이 기본기를 대체하기보다 검색·자동화·반복 구현의 생산성을 높이는 계층으로 사용합니다.
          </p>
        </Section>

        <section className="border-t border-neutral-300 py-10 sm:py-12">
          <div className="grid gap-5 md:grid-cols-[120px_minmax(0,1fr)]">
            <div className="font-mono text-[11px] text-neutral-500">06 / CONTACT</div>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div><div className="text-[18px] font-semibold">안진경</div><div className="mt-1 text-[13px] text-neutral-500">LLM Automation · RAG · Software Development</div></div>
              <div className="flex gap-5 text-[12px] font-semibold">
                <a href="mailto:anjin0910@gmail.com" className="underline underline-offset-4">Email</a>
                <a href="https://github.com/Anjingyeong" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">GitHub ↗</a>
                <Link to="/print/vibe" className="underline underline-offset-4">PDF</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-300 py-5">
        <div className="mx-auto flex max-w-5xl justify-between px-5 font-mono text-[9px] uppercase tracking-[0.08em] text-neutral-400 sm:px-8"><span>LLM automation portfolio</span><span>2026</span></div>
      </footer>
    </div>
  );
};

export default VibePortfolio;

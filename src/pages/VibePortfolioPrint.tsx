import { Link } from "react-router-dom";
import {
  engineeringBackground,
  jkCapabilities,
  vibeBuilds,
  vibeWorkflow,
} from "@/data/vibePortfolio";
import "@/styles/print.css";

const llmWiki = vibeBuilds[0];
const shippedBuilds = vibeBuilds.slice(1);

const retrievalMetrics = [
  { method: "Vector", hit5: "69.64%", recall5: "46.13%", mrr: "0.5696" },
  { method: "BM25", hit5: "75.00%", recall5: "50.00%", mrr: "0.6369" },
  { method: "Hybrid · BM25 + Vector + RRF", hit5: "82.14%", recall5: "61.01%", mrr: "0.6875" },
] as const;

const Footer = ({ page }: { page: string }) => (
  <div className="vibe-print-footer mt-auto flex justify-between border-t border-slate-100 pt-3 font-mono text-[7pt] text-slate-400">
    <span>안진경 · LLM Automation / RAG Developer</span>
    <span>{page}</span>
  </div>
);

const VibePortfolioPrint = () => (
  <div className="print-body">
    <div className="print-btn-container mx-auto px-4">
      <Link to="/vibe" className="border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700">← 웹 포트폴리오</Link>
      <button onClick={() => window.print()} className="bg-slate-900 px-4 py-2 text-sm font-semibold text-white">PDF로 저장 (Ctrl + P)</button>
    </div>

    <div className="print-page vibe-print-page">
      <div className="print-header">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">안진경 <span className="font-normal text-slate-400">| An Jin Gyeong</span></h1>
            <p className="mt-1 text-sm font-semibold text-blue-700">LLM Automation · RAG · Software Development</p>
          </div>
          <div className="space-y-1 text-right text-xs text-slate-600">
            <div>anjin0910@gmail.com</div>
            <div>github.com/Anjingyeong</div>
          </div>
        </div>
      </div>

      <div className="print-section">
        <h2 className="print-section-title">Profile</h2>
        <p className="text-[9pt] leading-relaxed text-slate-700">
          LLM을 업무에 맞게 다듬고 실제 자동화로 연결합니다. 모델 weight를 직접 학습시키는 파인튜닝보다 검색·컨텍스트·평가·실행 계층을 조정해
          LLM 애플리케이션의 품질과 실행 안정성을 높이는 경험을 쌓았습니다. JK로 ChatGPT 웹 세션의 추론을 별도 LLM 호출 없이 실행환경에 연결하고, LLM Wiki로 검색 품질을 평가했으며,
          바이브코딩을 이용해 실제 서비스를 구현·QA·배포했습니다.
        </p>
      </div>

      <div className="print-section">
        <div className="text-[7pt] font-bold uppercase tracking-widest text-blue-700">01 / THIN HARNESS</div>
        <h1 className="mt-1 text-xl font-bold text-slate-900">JK · ChatGPT 실행을 로컬·OCI로 연결한 Thin Harness</h1>
        <p className="mt-2 text-[8.5pt] leading-relaxed text-slate-700">
          ChatGPT 웹 세션을 주 추론 엔진으로 사용하고, 같은 작업을 위해 별도 코딩 에이전트나 LLM을 다시 호출하는 중복을 줄이기 위해 만든 실행 하네스입니다.
          JK는 프로젝트 컨텍스트·권한·승인·도구 실행만 담당하며 ChatGPT의 작업 의도를 Local 또는 OCI의 실제 작업으로 연결합니다.
        </p>
      </div>

      <div className="print-section">
        <h2 className="print-section-title">Execution Flow</h2>
        <div className="border-y border-slate-300 px-3 py-3 text-center font-mono text-[8pt] font-semibold text-slate-700">
          Natural-language task → ChatGPT → JK → Context / Role / Permission / Approval → Local or OCI → Project / Git / Test
        </div>
      </div>

      <div className="print-section">
        <h2 className="print-section-title">Thin Harness Boundary</h2>
        <div className="grid grid-cols-3 gap-3">
          <div className="border-t-2 border-slate-800 py-2">
            <div className="text-[7pt] font-bold uppercase tracking-wide text-blue-700">Reasoning</div>
            <div className="mt-1 text-[8pt] font-semibold text-slate-700">ChatGPT Web Session</div>
          </div>
          <div className="border-t-2 border-slate-800 py-2">
            <div className="text-[7pt] font-bold uppercase tracking-wide text-blue-700">Harness</div>
            <div className="mt-1 text-[8pt] font-semibold text-slate-700">Context · Permission · Approval</div>
          </div>
          <div className="border-t-2 border-slate-800 py-2">
            <div className="text-[7pt] font-bold uppercase tracking-wide text-blue-700">Execution</div>
            <div className="mt-1 text-[8pt] font-semibold text-slate-700">Local · OCI · Tools</div>
          </div>
        </div>
        <p className="mt-2 text-[7.5pt] leading-relaxed text-slate-500">
          모델 지능을 하네스 안에 다시 구현하기보다, 이미 사용하는 ChatGPT의 추론을 실제 실행환경과 안전하게 연결하는 데 범위를 제한했습니다.
        </p>
      </div>

      <div className="print-section">
        <h2 className="print-section-title">Core Capabilities</h2>
        <div className="space-y-1.5">
          {jkCapabilities.map((item) => (
            <div key={item.title} className="grid grid-cols-[30%_1fr] gap-3 border-b border-slate-200 py-2">
              <div className="text-[8pt] font-bold text-slate-800">{item.title}</div>
              <p className="text-[7.5pt] leading-relaxed text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="print-section">
        <h2 className="print-section-title">Design Decision</h2>
        <p className="text-[8pt] leading-relaxed text-slate-700">
          모델 추론은 ChatGPT에 남기고 JK는 실행 계층만 담당하도록 분리했습니다. 별도 LLM 호출을 늘리지 않으면서도 프로젝트 컨텍스트와 권한을 유지하고,
          위험 작업은 승인 뒤에서만 실행되도록 구성했습니다.
        </p>
      </div>

      <Footer page="1 / 3" />
    </div>

    <div className="print-page vibe-print-page">
      <div className="print-section">
        <div className="text-[7pt] font-bold uppercase tracking-widest text-blue-700">02 / RAG QUALITY</div>
        <h1 className="mt-1 text-xl font-bold text-slate-900">LLM Wiki · 검색 품질을 측정하며 개선한 RAG 시스템</h1>
        <p className="mt-2 text-[8.5pt] leading-relaxed text-slate-700">
          LLM 답변 품질을 프롬프트 감각에만 의존하지 않고 검색 단계부터 측정하기 위해 만든 프로젝트입니다. 프로젝트 문서를 Chunk로 구조화하고
          BM25, Vector Search, RRF 기반 Hybrid Search를 같은 평가 질의에서 비교했습니다.
        </p>
      </div>

      <div className="print-section">
        <h2 className="print-section-title">Retrieval Pipeline</h2>
        <div className="border-y border-slate-300 py-3 text-center font-mono text-[8pt] font-semibold text-slate-700">
          Query → BM25 / Vector Search → RRF Hybrid Ranking → Retrieved Context → LLM Answer
        </div>
      </div>

      <div className="print-section">
        <h2 className="print-section-title">Evaluation</h2>
        <div className="grid grid-cols-3 gap-3">
          {llmWiki.proof.map((item) => (
            <div key={item} className="border-t-2 border-slate-800 py-2 text-[8pt] font-semibold text-slate-700">{item}</div>
          ))}
        </div>
        <p className="mt-3 text-[7.5pt] leading-relaxed text-slate-500">
          이 프로젝트에서 다듬은 대상은 모델 weight가 아니라 retrieval, ranking, context 구성과 평가 기준입니다. LLM 애플리케이션의 품질을 재현 가능한
          지표로 확인하고 검색 구조를 비교하는 데 초점을 뒀습니다.
        </p>
      </div>

      <div className="print-section">
        <h2 className="print-section-title">Retrieval Metrics</h2>
        <div className="overflow-hidden border-y border-slate-300 text-[7.5pt] text-slate-700">
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr] bg-slate-50 px-2 py-1.5 font-bold text-slate-500">
            <span>Method</span><span>Hit@5</span><span>Recall@5</span><span>MRR</span>
          </div>
          {retrievalMetrics.map((row) => (
            <div key={row.method} className="grid grid-cols-[2fr_1fr_1fr_1fr] border-t border-slate-200 px-2 py-1.5">
              <span className={row.method.startsWith("Hybrid") ? "font-bold text-slate-900" : ""}>{row.method}</span>
              <span className={row.method.startsWith("Hybrid") ? "font-bold text-blue-700" : ""}>{row.hit5}</span>
              <span>{row.recall5}</span>
              <span>{row.mrr}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="print-section">
        <h2 className="print-section-title">What I Tune</h2>
        <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-[8pt] leading-relaxed text-slate-700">
          <div className="border-b border-slate-200 py-2"><strong>Context</strong> · 프로젝트 범위와 필요한 정보 구성</div>
          <div className="border-b border-slate-200 py-2"><strong>Retrieval</strong> · BM25 / Vector / Hybrid 비교</div>
          <div className="border-b border-slate-200 py-2"><strong>Ranking</strong> · RRF 기반 결과 결합</div>
          <div className="border-b border-slate-200 py-2"><strong>Evaluation</strong> · Golden Query와 Hit@5</div>
          <div className="border-b border-slate-200 py-2"><strong>Execution</strong> · JK의 권한·승인 경계</div>
          <div className="border-b border-slate-200 py-2"><strong>Verification</strong> · 테스트·로그 기반 완료 판단</div>
        </div>
      </div>

      <div className="print-section">
        <h2 className="print-section-title">Development Loop</h2>
        <div className="grid grid-cols-3 gap-x-4 gap-y-2">
          {vibeWorkflow.map((item) => (
            <div key={item.step} className="border-t border-slate-300 pt-2">
              <div className="text-[7pt] font-bold text-blue-700">{item.step}</div>
              <div className="mt-0.5 text-[8pt] font-bold text-slate-800">{item.title}</div>
              <div className="mt-1 text-[7pt] leading-relaxed text-slate-500">{item.description}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="print-section">
        <a href={llmWiki.link} className="text-[8pt] font-semibold text-blue-700 underline">Live LLM Wiki · {llmWiki.link}</a>
      </div>

      <Footer page="2 / 3" />
    </div>

    <div className="print-page vibe-print-page">
      <div className="print-section">
        <div className="text-[7pt] font-bold uppercase tracking-widest text-blue-700">03 / VIBE CODING</div>
        <h1 className="mt-1 text-xl font-bold text-slate-900">빠르게 만들고 실제로 배포한 제품</h1>
        <p className="mt-2 text-[8pt] leading-relaxed text-slate-600">
          LLM을 개발 도구로 활용해 요구사항 정의부터 구현, QA, 배포까지 반복한 사례입니다. LLM 시스템 설계와는 분리해 실행 속도와 제품 완성력을 보여주는 증거로 구성했습니다.
        </p>
      </div>

      <div className="print-section">
        <div className="space-y-4">
          {shippedBuilds.map((build) => (
            <div key={build.id} className="border-t border-slate-300 pt-3">
              <div className="flex items-baseline justify-between gap-3">
                <div>
                  <h3 className="text-[10pt] font-bold text-slate-800">{build.title}</h3>
                  <p className="text-[7.5pt] font-semibold text-blue-700">{build.subtitle}</p>
                </div>
                <a href={build.link} className="shrink-0 text-[7pt] text-blue-700 underline">Live service</a>
              </div>
              <p className="mt-2 text-[7.5pt] leading-relaxed text-slate-600">{build.description}</p>
              <div className="mt-2 flex gap-4 text-[7pt] font-semibold text-slate-500">{build.proof.map((item) => <span key={item}>{item}</span>)}</div>
              <div className="mt-2 font-mono text-[6.5pt] leading-relaxed text-slate-400">{build.stack.join(" · ")}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="print-section">
        <h2 className="print-section-title">Engineering Background</h2>
        <div className="border-t border-slate-300 pt-3">
          <div className="flex items-baseline justify-between">
            <div>
              <h3 className="text-[10pt] font-bold text-slate-800">{engineeringBackground.title}</h3>
              <p className="text-[7.5pt] font-semibold text-blue-700">{engineeringBackground.subtitle}</p>
            </div>
            <a href={engineeringBackground.demo} className="text-[7pt] text-blue-700 underline">Demo video</a>
          </div>
          <p className="mt-2 text-[7.5pt] leading-relaxed text-slate-600">{engineeringBackground.description}</p>
          <div className="mt-2 flex gap-4 text-[7pt] font-semibold text-slate-500">{engineeringBackground.proof.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
        <p className="mt-3 text-[7.5pt] leading-relaxed text-slate-500">
          LLM을 사용하기 전부터 실시간 영상 입력, Tracking, 이벤트 전달과 인터페이스 통합을 직접 검증해 왔습니다. LLM은 이 기본기를 대체하기보다
          검색·자동화·반복 구현의 생산성을 높이는 계층으로 사용합니다.
        </p>
      </div>

      <div className="print-section">
        <h2 className="print-section-title">Links</h2>
        <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-[8pt]">
          <a href="mailto:anjin0910@gmail.com">Email · anjin0910@gmail.com</a>
          <a href="https://github.com/Anjingyeong">GitHub · github.com/Anjingyeong</a>
          <a href="https://llmwiki.jingyeong.cloud">LLM Wiki · llmwiki.jingyeong.cloud</a>
          <a href="https://songsong.jingyeong.cloud">SongSong · songsong.jingyeong.cloud</a>
        </div>
      </div>

      <Footer page="3 / 3" />
    </div>
  </div>
);

export default VibePortfolioPrint;

import { useState, useEffect, useCallback } from "react";
import ScrollAnimator from "./ScrollAnimator";
import { ShieldCheck, BookOpenCheck, X, ZoomIn, ExternalLink } from "lucide-react";

// ─── Certificate image paths (name-included official PDFs → PNG) ───────────
const CERT_SW =
  "/images/우수소프트웨어 활용역량(SW Application Competence)_건양대 의공학심화_image_안진경.png";
const CERT_BIO =
  "/images/의공학 전문 실무역량(Accredited Excellence in Biomedical Engineering Competence)_건양대 의공학심화_image_안진경.png";

interface CertModal {
  src: string;
  title: string;
}

const CompetenceSection = () => {
  const [modal, setModal] = useState<CertModal | null>(null);

  // ─── onClick handlers (DO NOT MODIFY) ────────────────────────────────────
  const openModal = useCallback((src: string, title: string) => {
    setModal({ src, title });
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setModal(null);
    document.body.style.overflow = "";
  }, []);

  // ESC key to close
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [closeModal]);
  // ─────────────────────────────────────────────────────────────────────────

  return (
    <>
      <section id="competence" className="py-24 md:py-32 section-alt">
        <div className="container">
          <ScrollAnimator>
            <div className="section-header">
              <h2>Verified Competence</h2>
            </div>
            <p
              className="text-muted-foreground max-w-2xl"
              style={{ marginTop: "-2rem", paddingTop: "0.75rem" }}
            >
              탄탄한 공학 기반과 실전 개발 역량을 함께 쌓아가고 있습니다.
            </p>
          </ScrollAnimator>

          {/* ── 2×2 Symmetric Grid ─────────────────────────────────────── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">

            {/* ══ Card 1 : 우수 소프트웨어 활용역량 ══════════════════════ */}
            <ScrollAnimator className="h-full">
              <div
                className="competence-card group cursor-pointer flex flex-col h-full"
                onClick={() => openModal(CERT_SW, "우수 소프트웨어 활용역량")}
                title="클릭하면 실제 인증서를 볼 수 있습니다"
              >
                {/* Badge image — prominent */}
                <div className="flex justify-center mb-5 relative">
                  <img
                    src="/images/(SW Application Competence)_image.png"
                    alt="우수 소프트웨어 활용역량 Badge"
                    className="w-28 h-28 object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Zoom hint on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="bg-primary/10 backdrop-blur-sm rounded-full p-2">
                      <ZoomIn size={18} className="text-primary" />
                    </div>
                  </div>
                </div>

                {/* Title + subtitle */}
                <div className="mb-3">
                  <h3 className="text-base font-bold text-foreground leading-snug">
                    우수 소프트웨어 활용역량
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 font-medium tracking-wide uppercase">
                    Accredited Excellence (Konyang Univ.)
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  사용자 요구사항에 기반하여 최적화된 소프트웨어 애플리케이션을 설계하고 구현할 수 있는 실무 역량을 인증받았습니다.
                </p>

                {/* "View certificate" hint */}
                <div className="flex items-center gap-1.5 mt-3 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <ExternalLink size={12} />
                  인증서 보기
                </div>

                {/* Tags — anchored to bottom with mt-auto */}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-border/50">
                  {["#SoftwareArchitecture", "#Implementation"].map((tag) => (
                    <span key={tag} className="competence-tag competence-tag--blue">{tag}</span>
                  ))}
                </div>
              </div>
            </ScrollAnimator>

            {/* ══ Card 2 : 의공학 역량 우수 인증 ═══════════════════════ */}
            <ScrollAnimator className="h-full">
              <div
                className="competence-card group cursor-pointer flex flex-col h-full"
                onClick={() => openModal(CERT_BIO, "의공학 역량 우수 인증")}
                title="클릭하면 실제 인증서를 볼 수 있습니다"
              >
                <div className="flex justify-center mb-5 relative">
                  <img
                    src="/images/(Accredited Excellence in Biomedical Engineering Competence)_image.png"
                    alt="의공학 역량 우수 인증 Badge"
                    className="w-28 h-28 object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="bg-primary/10 backdrop-blur-sm rounded-full p-2">
                      <ZoomIn size={18} className="text-primary" />
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <h3 className="text-base font-bold text-foreground leading-snug">
                    의공학 역량 우수 인증
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 font-medium tracking-wide uppercase">
                    Accredited Excellence (ABEEK)
                  </p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  복잡한 도메인 지식을 공학적 원리와 융합하여, 데이터 기반의 정교한 시스템 설계 역량을 증명합니다.
                </p>

                <div className="flex items-center gap-1.5 mt-3 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <ExternalLink size={12} />
                  인증서 보기
                </div>

                <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-border/50">
                  {["#EngineeringRigor", "#DomainExpertise"].map((tag) => (
                    <span key={tag} className="competence-tag competence-tag--indigo">{tag}</span>
                  ))}
                </div>
              </div>
            </ScrollAnimator>

            {/* ══ Card 3 : 정보처리기사 ══════════════════════════════════ */}
            <ScrollAnimator className="h-full">
              <div className="competence-card group flex flex-col h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "hsl(160 60% 50% / 0.12)",
                      border: "1.5px solid hsl(160 60% 50% / 0.28)",
                    }}
                  >
                    <ShieldCheck size={30} className="text-emerald-600" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground leading-snug">
                      정보처리기사
                    </h3>
                    <p className="text-xs font-semibold text-emerald-600 mt-1 uppercase tracking-wide">
                      필기 합격 — 실기 준비 중
                    </p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  CS 기초, 데이터베이스 관리, 소프트웨어 개발 생명주기 전반에 걸친 탄탄한 이론적 기반을 갖추고 있습니다.
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-border/50">
                  {["#CSKnowledge", "#SoftwareEngineering"].map((tag) => (
                    <span key={tag} className="competence-tag competence-tag--emerald">{tag}</span>
                  ))}
                </div>
              </div>
            </ScrollAnimator>

            {/* ══ Card 4 : 지능형 애플리케이션 개발 ═══════════════════ */}
            <ScrollAnimator className="h-full">
              <div className="competence-card group flex flex-col h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden"
                    style={{
                      background: "hsl(270 60% 55% / 0.10)",
                      border: "1.5px solid hsl(270 60% 55% / 0.25)",
                    }}
                  >
                    <BookOpenCheck size={30} className="text-purple-600" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground leading-snug">
                      지능형 애플리케이션 개발
                    </h3>
                    <p className="text-xs font-semibold text-purple-600 mt-1">
                      SK쉴더스 부트캠프 5기 (진행 중)
                    </p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  보안 관점이 내재화된 AI 기반 풀스택 애플리케이션을 설계하고 실제 배포하는 실무 역량을 집중적으로 습득하고 있습니다.
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-border/50">
                  {["#FullStackDev", "#SecureCoding"].map((tag) => (
                    <span key={tag} className="competence-tag competence-tag--purple">{tag}</span>
                  ))}
                </div>
              </div>
            </ScrollAnimator>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          Certificate Modal — Logic is preserved. Only styling has changed.
      ══════════════════════════════════════════════════════════════════════ */}
      {modal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-10"
          onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
        >
          {/* Glassmorphism backdrop — subtle light tint + blur */}
          <div className="absolute inset-0 bg-black/25 backdrop-blur-md pointer-events-none" />

          {/* Modal panel — frosted glass */}
          <div
            className="cert-modal-panel relative w-full max-w-3xl rounded-3xl overflow-hidden"
            style={{ animation: "cert-modal-in 0.3s cubic-bezier(0.22, 1, 0.36, 1) both" }}
          >
            {/* ── Header ─────────────────────────────────────────────── */}
            <div className="flex items-center justify-between px-5 sm:px-7 py-4"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.35)" }}>
              <div className="flex items-center gap-3">
                {/* Pastel icon badge */}
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "hsl(var(--primary) / 0.12)", border: "1px solid hsl(var(--primary) / 0.20)" }}>
                  <ShieldCheck size={16} className="text-primary" strokeWidth={2.2} />
                </div>
                <div>
                  <p className="font-bold text-sm" style={{ color: "#333333" }}>{modal.title}</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5 font-medium">공식 인증서 — 안진경</p>
                </div>
              </div>

              {/* X close button — rotates + turns primary on hover */}
              <button
                onClick={closeModal}
                className="cert-modal-close w-9 h-9 rounded-full flex items-center justify-center
                           text-muted-foreground transition-all duration-200"
                aria-label="인증서 닫기"
              >
                <X size={18} strokeWidth={2.5} />
              </button>
            </div>

            {/* ── Certificate image ───────────────────────────────────── */}
            <div className="px-4 sm:px-6 py-5">
              <img
                src={modal.src}
                alt={`${modal.title} 공식 인증서`}
                className="w-full h-auto rounded-2xl object-contain"
                style={{
                  maxHeight: "72vh",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.06)",
                }}
              />
            </div>

            {/* ── Footer hint ─────────────────────────────────────────── */}
            <div className="flex items-center justify-between px-5 sm:px-7 pb-4 pt-1">
              <span className="text-[11px] text-muted-foreground">ESC 또는 배경 클릭으로 닫기</span>
              <button
                onClick={closeModal}
                className="text-[11px] font-semibold text-primary hover:underline transition-colors"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CompetenceSection;

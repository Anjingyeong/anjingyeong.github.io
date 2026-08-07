import { useState, useEffect, useCallback } from "react";
import ScrollAnimator from "./ScrollAnimator";
import { ShieldCheck, ZoomIn, FileCheck, X } from "lucide-react";

// Certificate image paths
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

  const openModal = useCallback((src: string, title: string) => {
    setModal({ src, title });
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setModal(null);
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [closeModal]);

  return (
    <>
      <div className="pb-20 md:pb-24 pt-12 md:pt-16 section-alt">
        <div className="container">
          <ScrollAnimator>
            <div className="section-header">
              <h2>Verified Competence</h2>
            </div>
          </ScrollAnimator>

          {/* 2 Cert Cards + 1 Compact Info Bar */}
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Card 1: 우수 소프트웨어 활용역량 */}
              <ScrollAnimator className="h-full">
                <div
                  role="button"
                  tabIndex={0}
                  className="competence-card group cursor-pointer flex flex-col h-full p-6 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  onClick={() => openModal(CERT_SW, "우수 소프트웨어 활용역량")}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      openModal(CERT_SW, "우수 소프트웨어 활용역량");
                    }
                  }}
                  title="클릭하면 실제 인증서를 볼 수 있습니다"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src="/images/(SW Application Competence)_image.png"
                      alt="우수 소프트웨어 활용역량 Badge"
                      className="w-16 h-16 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                    />
                    <div>
                      <h3 className="text-base font-bold text-foreground leading-snug">
                        우수 소프트웨어 활용역량
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5 font-medium">
                        발급: 건양대학교 (2026.03.21)
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    소프트웨어 활용과 애플리케이션 구현 역량을 인증받았습니다.
                  </p>

                  <div className="mt-auto pt-3 border-t border-border/50 flex items-center justify-between">
                    <span className="text-[11px] text-muted-foreground font-mono">SW Application Competence</span>
                    <div className="flex items-center gap-1 text-xs font-semibold text-primary">
                      <ZoomIn size={13} />
                      인증서
                    </div>
                  </div>
                </div>
              </ScrollAnimator>

              {/* Card 2: 의공학 전문 실무역량 */}
              <ScrollAnimator className="h-full">
                <div
                  role="button"
                  tabIndex={0}
                  className="competence-card group cursor-pointer flex flex-col h-full p-6 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  onClick={() => openModal(CERT_BIO, "의공학 전문 실무역량")}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      openModal(CERT_BIO, "의공학 전문 실무역량");
                    }
                  }}
                  title="클릭하면 실제 인증서를 볼 수 있습니다"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src="/images/(Accredited Excellence in Biomedical Engineering Competence)_image.png"
                      alt="의공학 전문 실무역량 Badge"
                      className="w-16 h-16 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                    />
                    <div>
                      <h3 className="text-base font-bold text-foreground leading-snug">
                        의공학 전문 실무역량
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5 font-medium">
                        발급: 건양대학교 (2026.03.21)
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    의공학 심화과정에서 공학적 설계와 전문 실무 역량을 인증받았습니다.
                  </p>

                  <div className="mt-auto pt-3 border-t border-border/50 flex items-center justify-between">
                    <span className="text-[11px] text-muted-foreground font-mono">Biomedical Engineering</span>
                    <div className="flex items-center gap-1 text-xs font-semibold text-primary">
                      <ZoomIn size={13} />
                      인증서
                    </div>
                  </div>
                </div>
              </ScrollAnimator>
            </div>

            {/* Compact Bar: 정보처리기사 (보조 정보 표시) */}
            <ScrollAnimator>
              <div className="minimal-card p-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <FileCheck size={18} className="text-emerald-600" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-foreground">정보처리기사</span>
                    <span className="ml-2.5 text-xs text-muted-foreground">필기 합격 · 실기 준비 중</span>
                  </div>
                </div>
                <span className="text-xs font-medium text-emerald-600 bg-emerald-500/10 px-2.5 py-1 rounded-full flex-shrink-0">
                  필기 합격
                </span>
              </div>
            </ScrollAnimator>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${modal.title} 인증서`}
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-10"
          onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
        >
          <div className="absolute inset-0 bg-black/25 backdrop-blur-md pointer-events-none" />

          <div
            className="cert-modal-panel relative w-full max-w-3xl rounded-3xl overflow-hidden"
            style={{ animation: "cert-modal-in 0.3s cubic-bezier(0.22, 1, 0.36, 1) both" }}
          >
            <div className="flex items-center justify-between px-5 sm:px-7 py-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.35)" }}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "hsl(var(--primary) / 0.12)", border: "1px solid hsl(var(--primary) / 0.20)" }}>
                  <ShieldCheck size={16} className="text-primary" strokeWidth={2.2} />
                </div>
                <div>
                  <p className="font-bold text-sm" style={{ color: "#333333" }}>{modal.title}</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5 font-medium">공식 인증서 — 안진경</p>
                </div>
              </div>

              <button
                onClick={closeModal}
                className="cert-modal-close w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground transition-all duration-200"
                aria-label="인증서 닫기"
              >
                <X size={18} strokeWidth={2.5} />
              </button>
            </div>

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

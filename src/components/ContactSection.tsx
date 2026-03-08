import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import ScrollAnimator from "./ScrollAnimator";
import { Github, Mail, MessageCircle, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const EMAILJS_SERVICE_ID = "service_portfolio";
const EMAILJS_TEMPLATE_ID = "template_contact";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

type FormStatus = "idle" | "sending" | "success" | "error";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setFormData({ from_name: "", from_email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="float-decoration w-80 h-80 -bottom-40 -right-40 opacity-15" />

      <div className="container relative z-10">
        <ScrollAnimator>
          <div className="section-header">
            <h2>연락하기</h2>
          </div>
        </ScrollAnimator>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
          {/* Contact Form */}
          <ScrollAnimator className="md:col-span-3">
            <div className="minimal-card p-8 md:p-10">
              <h3 className="text-lg font-semibold mb-6 text-foreground flex items-center gap-2">
                <Send size={18} className="text-primary" />
                메시지 보내기
              </h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="from_name" className="block text-sm font-medium text-muted-foreground mb-2">
                    이름
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                    placeholder="홍길동"
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="from_email" className="block text-sm font-medium text-muted-foreground mb-2">
                    이메일
                  </label>
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleChange}
                    required
                    placeholder="example@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                    메시지
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="프로젝트 문의 또는 협업 관련 내용을 자유롭게 작성해주세요."
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="minimal-btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      전송 중...
                    </>
                  ) : status === "success" ? (
                    <>
                      <CheckCircle2 size={16} />
                      전송 완료!
                    </>
                  ) : status === "error" ? (
                    <>
                      <AlertCircle size={16} />
                      전송 실패 — 다시 시도해주세요
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      메시지 보내기
                    </>
                  )}
                </button>
              </form>
            </div>
          </ScrollAnimator>

          {/* Contact Info Card */}
          <ScrollAnimator className="md:col-span-2">
            <div className="minimal-card p-8 md:p-10 h-full flex flex-col relative overflow-hidden">
              {/* Subtle gradient bg */}
              <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-hero)" }} />
              <div className="relative z-10 flex flex-col h-full">
                <div className="icon-container mb-6 w-14 h-14 rounded-2xl">
                  <MessageCircle size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  프로젝트 문의 및 협업 제안을 환영합니다
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">
                  새로운 프로젝트나 협업 기회에 대해 논의하고 싶으시다면 언제든지 연락 주세요.
                  폼을 통해 바로 메시지를 보내시거나, 아래 링크를 이용해주세요.
                </p>

                <div className="space-y-3">
                  <a
                    href="mailto:anjin0910@gmail.com"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/8 flex items-center justify-center flex-shrink-0">
                      <Mail size={16} className="text-primary" />
                    </div>
                    anjin0910@gmail.com
                  </a>
                  <a
                    href="https://github.com/anjin0910-afk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/8 flex items-center justify-center flex-shrink-0">
                      <Github size={16} className="text-primary" />
                    </div>
                    github.com/anjin0910-afk
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimator>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

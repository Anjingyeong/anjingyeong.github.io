import ScrollAnimator from "./ScrollAnimator";
import { Github, Mail, MessageCircle } from "lucide-react";

const ContactSection = () => {
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

        <ScrollAnimator>
          <div className="minimal-card p-10 md:p-14 text-center max-w-2xl mx-auto relative overflow-hidden">
            {/* Subtle gradient bg */}
            <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-hero)" }} />
            <div className="relative z-10">
              <div className="icon-container mx-auto mb-6 w-14 h-14 rounded-2xl">
                <MessageCircle size={24} />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-foreground">프로젝트 문의 및 협업 제안을 환영합니다</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed text-sm max-w-md mx-auto">
                새로운 프로젝트나 협업 기회에 대해 논의하고 싶으시다면 언제든지 연락 주세요.
              </p>

              <div className="flex justify-center gap-3 flex-wrap">
                <a href="mailto:anjin0910@gmail.com" className="minimal-btn-primary">
                  <Mail size={16} />
                  이메일 보내기
                </a>
                <a href="https://github.com/anjin0910-afk" target="_blank" rel="noopener noreferrer" className="minimal-btn-secondary">
                  <Github size={16} />
                  GitHub 방문
                </a>
              </div>
            </div>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
};

export default ContactSection;

import ScrollAnimator from "./ScrollAnimator";
import { Github, Linkedin, Mail, BookOpen, MapPin, GraduationCap, Briefcase, Brain, Globe } from "lucide-react";

const infoItems = [
  { icon: MapPin, label: "거주지", value: "서울, 대한민국" },
  { icon: GraduationCap, label: "학력", value: "건양대학교 의공학과" },
  { icon: Briefcase, label: "분야", value: "Web Full-Stack, Data/AI" },
  { icon: Brain, label: "목표", value: "Data-Driven Full-Stack Engineer" },
  { icon: Globe, label: "언어", value: "한국어" },
  { icon: Mail, label: "이메일", value: "anjin0910@gmail.com" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container">
        <ScrollAnimator>
          <div className="section-header">
            <h2>소개</h2>
          </div>
        </ScrollAnimator>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ScrollAnimator className="md:col-span-2">
            <div className="minimal-card p-8 md:p-10">
              <h3 className="text-lg font-semibold mb-5 text-foreground">개발자 소개</h3>
              <p className="leading-[1.8] mb-4" style={{ color: '#4A4A4A' }}>
                의공학을 전공하며 영상처리, 딥러닝, 의료 AI 프로젝트를 경험했고, 이후 웹 서비스 개발로 범위를 넓혀 백엔드와 풀스택 역량을 쌓고 있습니다.
              </p>
              <p className="leading-[1.8] mb-4" style={{ color: '#4A4A4A' }}>
                AI 프로젝트에서는 데이터 전처리, 모델 학습, 성능 개선, 실험 실패 후 피벗을 경험했습니다. 웹 프로젝트에서는 Spring Boot, JPA, MySQL, React를 활용해 실시간 상태 동기화, 인증 흐름, 데이터 파이프라인 문제를 해결했습니다.
              </p>
              <p className="leading-[1.8] mb-6" style={{ color: '#4A4A4A' }}>
                현재는 백엔드와 풀스택 개발을 중심으로, AI와 보안 도메인 이해를 함께 활용할 수 있는 개발자를 목표로 준비하고 있습니다.
              </p>

              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="text-sm font-semibold mb-3 text-primary uppercase tracking-wide">Career Direction</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    Spring Boot 기반 백엔드 개발
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    React 기반 풀스택 서비스 개발
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    AI 모델 또는 데이터 파이프라인이 포함된 서비스 개발
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    인증, 권한, 데이터 보호가 중요한 보안 연계 서비스 개발
                  </li>
                </ul>
              </div>

              <div className="flex gap-3 mt-8 pt-6 border-t border-border">
                <a href="https://github.com/anjin0910-afk" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300">
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300">
                  <Linkedin size={18} />
                </a>
                <a href="mailto:anjin0910@gmail.com" className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300">
                  <Mail size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300">
                  <BookOpen size={18} />
                </a>
              </div>
            </div>
          </ScrollAnimator>

          <ScrollAnimator>
            <div className="minimal-card p-8">
              <h3 className="text-sm font-semibold mb-6 text-primary uppercase tracking-wide">기본 정보</h3>
              <ul className="space-y-5">
                {infoItems.map((item) => (
                  <li key={item.label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/8 flex items-center justify-center flex-shrink-0">
                      <item.icon size={14} className="text-primary" />
                    </div>
                    <div className="text-sm">
                      <span className="text-muted-foreground">{item.label}</span>
                      <span className="block font-medium text-foreground">{item.value}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimator>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

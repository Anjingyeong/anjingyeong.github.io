import ScrollAnimator from "./ScrollAnimator";
import { Github, Linkedin, Mail, BookOpen, MapPin, GraduationCap, Briefcase, Brain, Globe } from "lucide-react";

const infoItems = [
  { icon: MapPin, label: "위치", value: "서울, 대한민국" },
  { icon: GraduationCap, label: "학력", value: "건양대학교 의공학과" },
  { icon: Briefcase, label: "분야", value: "응용SW / AI·ML 개발" },
  { icon: Brain, label: "관심분야", value: "응용SW / AI·ML 개발" },
  { icon: Globe, label: "언어", value: "한국어, English" },
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
              <p className="text-muted-foreground leading-[1.8] mb-4">
                학업과 다양한 프로젝트를 통해 AI/ML 모델 개발과 데이터 분석 실무 역량을 체계적으로 함양하였습니다.
                Python, 딥러닝(Deep Learning), 컴퓨터 비전 등 핵심 기술을 보유하고 있으며,
                실시간 처리 시스템 개발 및 모델 경량화 경험을 통해 실용적인 AI 솔루션을 구현할 수 있는 전문성을 갖추고 있습니다.
              </p>
              <p className="text-muted-foreground leading-[1.8]">
                현재는 <strong className="text-foreground font-semibold">응용 소프트웨어 개발과 AI/ML 엔지니어링</strong>에 관심을 가지고 있으며,
                SK쉴더스 지능형 애플리케이션 개발 부트캠프를 통해 실전 역량을 강화하고 있습니다.
                딥러닝 모델을 활용한 지능형 서비스 구현과 실용적인 AI 솔루션 개발을 목표로 하고 있습니다.
              </p>

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

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
                안녕하세요. 데이터의 가치를 실제 서비스로 구현해 내는 엔지니어 안진경입니다.
              </p>
              <p className="leading-[1.8] mb-4" style={{ color: '#4A4A4A' }}>
                의공학을 전공하며 딥러닝과 데이터 분석을 깊이 있게 탐구했습니다. 하지만 '아무리 뛰어난 AI 모델도 안정적인 웹 시스템이 뒷받침되지 않으면 사용자에게 닿을 수 없다'는 것을 깨닫고, 모델을 프로덕션 환경에 배포하는 풀스택 엔지니어링으로 영역을 넓혔습니다.
              </p>
              <p className="leading-[1.8]" style={{ color: '#4A4A4A' }}>
                저는 단순히 코드가 '작동하는 것'에 만족하지 않습니다. 에러 이면의 진짜 원인을 파악하기 위해 네트워크 흐름과 백엔드 구조를 집요하게 추적합니다. 대규모 트래픽이나 복잡한 비즈니스 로직(에스크로, 실시간 통신 등) 앞에서도 멈추지 않는, 신뢰할 수 있는 서비스를 구축하는 데 주력하고 있습니다.
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

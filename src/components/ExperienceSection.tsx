import ScrollAnimator from "./ScrollAnimator";
import { GraduationCap, Briefcase, Trophy, Award, BookOpen } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface TimelineItem {
  title: string;
  subtitle?: string;
  organization: string;
  period: string;
  description: string;
  icon: LucideIcon;
}

const educationAndTraining: TimelineItem[] = [
  {
    title: "SK쉴더스 지능형 애플리케이션 개발 과정",
    subtitle: "부트캠프 5기 수료",
    organization: "SK쉴더스 / 한국표준협회",
    period: "2026.05 – 2026.07",
    description: "AI 기반 실시간 영상 분석, 백엔드 이벤트 처리, 클라우드 인프라 연동 중심의 실전 시스템 설계 및 프로젝트 수행",
    icon: GraduationCap,
  },
  {
    title: "건양대학교 의공학과",
    subtitle: "공학사 졸업",
    organization: "건양대학교",
    period: "2020.03 – 2026.02",
    description: "의공학 및 컴퓨터비전 기초, 데이터 구조, 신호/영상 처리 교과 과정 이수 및 캡스톤디자인 수행",
    icon: BookOpen,
  },
  {
    title: "미래내일 일경험 프로젝트 기획 인턴",
    organization: "충남경제진흥원",
    period: "2024.12 – 2025.02",
    description: "공공 서비스 관련 기획 지원, 행정 데이터 검수 및 프로세스 개선 실무 수행",
    icon: Briefcase,
  },
  {
    title: "Lab-CORPS 산학협력 실증 프로젝트",
    organization: "건양대학교 산학협력단",
    period: "2024.03 – 2024.11",
    description: "산학 연계 딥러닝 과제 참여 및 R&D 엔지니어링 실증 프로세스 경험",
    icon: Briefcase,
  },
];

const awards: TimelineItem[] = [
  {
    title: "2025 성균관대학교 컨소시엄 창의적 종합설계 경진대회",
    subtitle: "동상",
    organization: "산업통상자원부 / 공학교육혁신센터",
    period: "2025.11",
    description: "RF-DETR 기반 용종 검출 프로젝트의 데이터 증강과 구현 완성도를 인정받아 수상",
    icon: Trophy,
  },
  {
    title: "2025 캡스톤디자인 경진대회",
    subtitle: "금상",
    organization: "건양대학교",
    period: "2025.10",
    description: "RF-DETR 기반 용종 검출 프로젝트의 데이터 증강과 구현 완성도를 인정받아 수상",
    icon: Award,
  },
  {
    title: "2024 창의혁신 DNA 산학협력",
    subtitle: "공학혁신상",
    organization: "산업통상자원부 / 공학교육혁신센터",
    period: "2024.10",
    description: "VAE 재구성 오차와 동적 임계값을 활용한 라벨 부족 대응 방식을 인정받아 수상",
    icon: Award,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-alt pt-24 md:pt-32 pb-12 md:pb-16">
      <div className="container">
        <ScrollAnimator>
          <div className="section-header">
            <h2>Experience & Awards</h2>
          </div>
        </ScrollAnimator>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education & Training */}
          <div>
            <ScrollAnimator>
              <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                <GraduationCap className="text-primary" size={20} />
                Education & Training
              </h3>
            </ScrollAnimator>

            <div className="relative ml-4 pl-6 flex flex-col gap-6" style={{ borderLeft: '2px solid hsl(var(--primary) / 0.25)' }}>
              {educationAndTraining.map((item, i) => (
                <ScrollAnimator key={i}>
                  <div className="relative">
                    <div className="absolute -left-[calc(1.5rem+13px)] top-5 w-6 h-6 rounded-full bg-background flex items-center justify-center" style={{ border: '2px solid hsl(var(--primary) / 0.50)' }}>
                      <item.icon size={12} className="text-primary" />
                    </div>

                    <div className="minimal-card p-5">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                        <div>
                          <h4 className="text-sm font-semibold text-foreground leading-snug">
                            {item.title}
                            {item.subtitle && (
                              <span className="ml-2 text-xs font-medium text-primary">
                                [{item.subtitle}]
                              </span>
                            )}
                          </h4>
                          <span className="text-xs text-muted-foreground">{item.organization}</span>
                        </div>
                        <span className="text-muted-foreground text-xs font-mono bg-muted px-2 py-0.5 rounded-md self-start">
                          {item.period}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground/90 leading-relaxed mt-2">{item.description}</p>
                    </div>
                  </div>
                </ScrollAnimator>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div>
            <ScrollAnimator>
              <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                <Trophy className="text-primary" size={20} />
                Awards
              </h3>
            </ScrollAnimator>

            <div className="relative ml-4 pl-6 flex flex-col gap-6" style={{ borderLeft: '2px solid hsl(var(--primary) / 0.25)' }}>
              {awards.map((item, i) => (
                <ScrollAnimator key={i}>
                  <div className="relative">
                    <div className="absolute -left-[calc(1.5rem+13px)] top-5 w-6 h-6 rounded-full bg-background flex items-center justify-center" style={{ border: '2px solid hsl(var(--primary) / 0.50)' }}>
                      <item.icon size={12} className="text-primary" />
                    </div>

                    <div className="minimal-card p-5">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                        <div>
                          <h4 className="text-sm font-semibold text-foreground leading-snug">
                            {item.title}
                            {item.subtitle && (
                              <span className="ml-2 inline-flex items-center text-xs font-bold bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-primary)" }}>
                                {item.subtitle}
                              </span>
                            )}
                          </h4>
                          <span className="text-xs text-muted-foreground">{item.organization}</span>
                        </div>
                        <span className="text-muted-foreground text-xs font-mono bg-muted px-2 py-0.5 rounded-md self-start">
                          {item.period}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground/90 leading-relaxed mt-2">{item.description}</p>
                    </div>
                  </div>
                </ScrollAnimator>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

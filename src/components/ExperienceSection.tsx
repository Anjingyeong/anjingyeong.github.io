import ScrollAnimator from "./ScrollAnimator";
import { Trophy, Briefcase, FlaskConical, Award, GraduationCap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Experience {
  title: string;
  award?: string;
  company: string;
  period: string;
  description: string;
  icon: LucideIcon;
}

const experiences: Experience[] = [
  {
    title: "SK쉴더스 지능형 애플리케이션 개발 부트캠프 5기",
    company: "SK쉴더스",
    period: "2026 - 진행 중",
    description: "지능형 애플리케이션 개발 과정을 수강하며 AI 기반 보안 및 애플리케이션 개발 역량을 강화하고 있습니다.",
    icon: GraduationCap,
  },
  {
    title: "성균관대학교 컨소시엄 창의적 종합설계 경진대회",
    award: "🏆 동상",
    company: "산업통상자원부, 공학교육혁신센터",
    period: "2025.11",
    description: "RF-DETR 기반 실시간 대장 내 용종 검출 시스템을 개발하여 의료AI 기술력을 인정받았습니다.",
    icon: Trophy,
  },
  {
    title: "2025 캡스톤 경진대회",
    award: "🏆 금상",
    company: "건양대학교",
    period: "2025.03 - 2025.10",
    description: "Transformer 기반 의료AI 모델을 개발하여 mAP 7% 향상과 22 FPS의 실시간 처리 성능을 달성했습니다.",
    icon: Award,
  },
  {
    title: "미래내일 일경험 인턴",
    company: "충남경제진흥원",
    period: "2024.12 - 2025.02",
    description: "문서 작성, 데이터 관리, 프로젝트 지원 등 다양한 행정 업무를 수행하며 조직 운영에 대한 이해도를 높였습니다.",
    icon: Briefcase,
  },
  {
    title: "Lab-CORPS 산학협력 프로젝트",
    company: "건양대학교",
    period: "2024.03 - 2024.11",
    description: "기업과 협력하여 실제 산업 문제를 해결하는 프로젝트를 수행하며 실무 역량을 강화했습니다.",
    icon: FlaskConical,
  },
  {
    title: "2024 캡스톤 경진대회",
    company: "건양대학교",
    period: "2024.03 - 2024.10",
    description: "VAE 기반 유방암 병변 검출 알고리즘을 개발. Variational AutoEncoder를 활용한 비지도 학습 방식으로 의료 영상 분석 프로젝트를 구현했습니다.",
    icon: FlaskConical,
  },
  {
    title: "2024 창의혁신 DNA 산학협력",
    award: "🏆 공학혁신상",
    company: "산업통상자원부, 공학교육혁신센터",
    period: "2024.03 - 2024.10",
    description: "VAE 기반 유방암 병변 검출 알고리즘 개발을 주제로 Dice coefficient 40-90%의 성능을 달성했습니다.",
    icon: Award,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-alt py-24 md:py-32">
      <div className="container">
        <ScrollAnimator>
          <div className="section-header">
            <h2>경력 및 활동</h2>
          </div>
        </ScrollAnimator>

        <div className="relative ml-6 border-l-2 border-primary/15 pl-10 flex flex-col gap-6">
          {experiences.map((exp, i) => (
            <ScrollAnimator key={i}>
              <div className="relative">
                {/* Timeline icon */}
                <div className="absolute -left-[calc(2.5rem+17px)] top-6 w-8 h-8 rounded-lg bg-background border-2 border-primary/20 flex items-center justify-center">
                  <exp.icon size={14} className="text-primary" />
                </div>

                <div className="minimal-card p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="text-base font-semibold text-foreground leading-snug">
                        {exp.title}
                        {exp.award && (
                          <span className="ml-2 inline-flex items-center gap-1 text-sm font-semibold bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-primary)" }}>
                            {exp.award}
                          </span>
                        )}
                      </h3>
                      <span className="text-primary/80 font-medium text-sm">{exp.company}</span>
                    </div>
                    <span className="text-muted-foreground text-xs font-mono mt-1 sm:mt-0 flex-shrink-0 bg-muted px-2 py-1 rounded-md">{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

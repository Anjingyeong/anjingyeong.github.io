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
    period: "2026 – 진행 중",
    description: "AI 기반 스마트 애플리케이션 개발 산학협력 과정 이수. 지능형 시스템 설계, 보안 관점이 적용된 소프트웨어 아키텍처 및 실제 프로덕트 런칭 파이프라인 역량을 심층적으로 다지고 있습니다.",
    icon: GraduationCap,
  },
  {
    title: "성균관대학교 컨소시엄 창의적 종합설계 경진대회",
    award: "🏆 동상",
    company: "산업통상자원부 / 공학교육혁신센터",
    period: "2025.11",
    description: "RF-DETR 아키텍처 기반의 '실시간 대장 내 용종 검출 시스템'을 단독 개발하여, 의료 AI 분야에서의 기술적 혁신성과 실제 병동 내 임상 활용 가능성을 높게 평가받았습니다.",
    icon: Trophy,
  },
  {
    title: "2025 캡스톤디자인 경진대회",
    award: "🏆 금상",
    company: "건양대학교",
    period: "2025.03 – 2025.10",
    description: "Transformer 기반의 시계열 의료 영상 객체 탐지 모델을 구축하여, 기존 모델 대비 mAP 7% 향상 및 22 FPS 기반 실시간 추론 속도를 달성, 압도적인 기술적 완성도로 금상을 수상했습니다.",
    icon: Award,
  },
  {
    title: "미래내일 일경험 프로젝트 기획 인턴",
    company: "충남경제진흥원",
    period: "2024.12 – 2025.02",
    description: "공공기관 내 행정 업무, 대규모 데이터 검수 및 프로젝트 운영 지원 업무를 수행하며 IT 시스템 도입 전후의 워크플로우를 분석하고, 실무 환경에서의 커뮤니케이션 능력을 배양했습니다.",
    icon: Briefcase,
  },
  {
    title: "Lab-CORPS 산학협력 실증 프로젝트",
    company: "건양대학교",
    period: "2024.03 – 2024.11",
    description: "산업계 파트너 기업의 당면 과제를 기술적으로 해결하는 실증 프로젝트에 참여하여 R&D 엔지니어링 프로세스 경험 및 산학연 협업 역량을 강화했습니다.",
    icon: FlaskConical,
  },
  {
    title: "2024 캡스톤디자인 경진대회",
    company: "건양대학교",
    period: "2024.03 – 2024.10",
    description: "비지도 학습 방법론인 VAE(Variational AutoEncoder)를 활용한 유방암 병변 검출 알고리즘을 병동 환경에 맞게 설계했습니다. 정상 초음파 이미지만을 학습시켜 구조적 재구성 오차(Reconstruction Error)를 역추적하여 종양을 식별해 냈습니다.",
    icon: FlaskConical,
  },
  {
    title: "2024 창의혁신 DNA 산학협력",
    award: "🏆 공학혁신상",
    company: "산업통상자원부 / 공학교육혁신센터",
    period: "2024.03 – 2024.10",
    description: "VAE 기반 유방암 병변 검출 시스템 프로토타입 개발을 주도. 병변 경계선 복잡도에 따라 40~90%의 신뢰도 높은 Dice coefficient 점수를 달성하며, 초음파 영상 노이즈 환경 내 생성형 AI 모델의 구조적 강건성을 입증받았습니다.",
    icon: Award,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-alt py-24 md:py-32">
      <div className="container">
        <ScrollAnimator>
          <div className="section-header">
            <h2>Experience & Awards</h2>
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

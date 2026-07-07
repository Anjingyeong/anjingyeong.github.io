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
    description: "AI 기반 스마트 애플리케이션 개발 산학협력 과정 수료 중. 지능형 시스템 설계, 보안 중심 소프트웨어 아키텍처, 프로덕트 런칭 파이프라인을 실전 프로젝트로 학습하고 있습니다.",
    icon: GraduationCap,
  },
  {
    title: "성균관대학교 컨소시엄 창의적 종합설계 경진대회",
    award: "동상",
    company: "산업통상자원부 / 공학교육혁신센터",
    period: "2025.11",
    description: "RF-DETR 기반 실시간 대장 용종 검출 보조 프로토타입을 개발했습니다. 의료영상 객체 탐지, GUI 시각화, 사용 흐름 설계 경험을 바탕으로 동상을 수상했습니다.",
    icon: Trophy,
  },
  {
    title: "2025 캡스톤디자인 경진대회",
    award: "금상",
    company: "건양대학교",
    period: "2025.03 – 2025.10",
    description: "RF-DETR 기반 의료영상 객체 탐지 모델을 Kvasir 데이터에 맞게 fine-tuning하고 OpenCV GUI로 확장했습니다. 실험 설정 기준 성능 개선과 구현 완성도를 인정받아 금상을 수상했습니다.",
    icon: Award,
  },
  {
    title: "미래내일 일경험 프로젝트 기획 인턴",
    company: "충남경제진흥원",
    period: "2024.12 – 2025.02",
    description: "공공기관 프로젝트 기획 인턴으로 행정 지원, 데이터 검수, 운영 프로세스 개선을 수행했습니다. IT 시스템 도입 전후 워크플로우 분석과 실무 커뮤니케이션 역량을 강화했습니다.",
    icon: Briefcase,
  },
  {
    title: "Lab-CORPS 산학협력 실증 프로젝트",
    company: "건양대학교",
    period: "2024.03 – 2024.11",
    description: "산업계 파트너 과제를 해결하는 실증 프로젝트에 참여해 R&D 엔지니어링 프로세스와 산학연 협업 역량을 축적했습니다.",
    icon: FlaskConical,
  },
  {
    title: "2024 캡스톤디자인 경진대회",
    company: "건양대학교",
    period: "2024.03 – 2024.10",
    description: "VAE 기반 유방암 병변 검출 알고리즘을 병동 환경에 맞춰 설계했습니다. 정상 초음파 이미지 학습 후 재구성 오차를 활용해 종양 의심 영역을 탐지했습니다.",
    icon: FlaskConical,
  },
  {
    title: "2024 창의혁신 DNA 산학협력",
    award: "공학혁신상",
    company: "산업통상자원부 / 공학교육혁신센터",
    period: "2024.03 – 2024.10",
    description: "VAE 기반 유방 초음파 이상 탐지 프로토타입을 개발했습니다. 재구성 오차와 동적 임계값 후처리로 라벨 부족 문제를 다룬 점을 인정받아 공학혁신상을 수상했습니다.",
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

        <div className="relative ml-6 pl-10 flex flex-col gap-6" style={{ borderLeft: '3px solid hsl(var(--primary) / 0.30)' }}>
          {experiences.map((exp, i) => (
            <ScrollAnimator key={i}>
              <div className="relative">
                {/* Timeline icon */}
                <div className="absolute -left-[calc(2.5rem+17px)] top-6 w-8 h-8 rounded-lg bg-background flex items-center justify-center" style={{ border: '2.5px solid hsl(var(--primary) / 0.45)', boxShadow: '0 0 0 3px hsl(var(--primary) / 0.08)' }}>
                  <exp.icon size={15} className="text-primary" strokeWidth={2.2} />
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

import ScrollAnimator from "./ScrollAnimator";
import { Github, Mail, MapPin, GraduationCap, Briefcase, Brain, Globe } from "lucide-react";

const infoItems = [
  { icon: MapPin, label: "거주지", value: "서울, 대한민국" },
  { icon: GraduationCap, label: "학력", value: "건양대학교 의공학과" },
  { icon: Briefcase, label: "지원 직무", value: "Computer Vision AI Engineer" },
  { icon: Brain, label: "핵심 분야", value: "실시간 영상 분석 · Tracking · 행동 분류" },
  { icon: Globe, label: "협업 방식", value: "이벤트 계약 · 로그 · 수치 기반 조율" },
  { icon: Mail, label: "이메일", value: "anjin0910@gmail.com" },
];

const fullstackInfoItems = [
  { icon: MapPin, label: "거주지", value: "서울, 대한민국" },
  { icon: GraduationCap, label: "학력", value: "건양대학교 의공학과" },
  { icon: Briefcase, label: "지원 직무", value: "Full-Stack Developer" },
  { icon: Brain, label: "핵심 분야", value: "실시간 이벤트 · API · 데이터 정합성" },
  { icon: Globe, label: "협업 방식", value: "공통 식별자 · 완료 조건 · 구간별 로그" },
  { icon: Mail, label: "이메일", value: "anjin0910@gmail.com" },
];

type AboutSectionProps = {
  readonly variant?: "ai" | "fullstack";
};

const AboutSection = ({ variant = "ai" }: AboutSectionProps) => {
  const isFullstack = variant === "fullstack";
  const displayedInfoItems = isFullstack ? fullstackInfoItems : infoItems;

  return (
    <div id="about" className="py-24 md:py-32">
      <div className="container">
        <ScrollAnimator>
          <div className="section-header">
            <h2>About Me</h2>
          </div>
        </ScrollAnimator>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ScrollAnimator className="md:col-span-2">
            <div className="minimal-card p-8 md:p-10">
              {isFullstack ? (
                <>
                  <h3 className="text-lg font-semibold mb-5 text-foreground">기능의 앞뒤 흐름까지 책임지는 개발자</h3>
                  <p className="leading-[1.8] mb-4" style={{ color: "#4A4A4A" }}>
                    기능을 화면 한 장이나 API 하나로 보지 않고, 사용자의 입력이 어떤 상태로 저장되고 다음 화면과 알림으로 어떻게 이어지는지까지 확인합니다. 문제가 생기면 보이는 증상만 수정하기보다 데이터가 생성되고 전달되는 흐름을 따라 원인을 찾습니다.
                  </p>
                  <p className="leading-[1.8] mb-6" style={{ color: "#4A4A4A" }}>
                    협업할 때는 파트별 구현보다 먼저 공통 식별자, 상태 변화와 완료 조건을 맞춥니다. 서로 다른 기준 때문에 문제가 반복되지 않도록 구간별 로그와 데이터 계약을 공유하고, 실제 사용자 화면까지 함께 확인하는 방식으로 작업합니다.
                  </p>

                  <div className="mt-8 pt-6 border-t border-border">
                    <h4 className="text-sm font-semibold mb-4 text-primary uppercase tracking-wide">How I Work</h4>
                    <div className="grid gap-3 sm:grid-cols-3">
                      {[
                        ["흐름으로 설계", "입력부터 저장·표시까지 기능의 전체 경로를 확인합니다."],
                        ["계약으로 협업", "식별자·상태·완료 조건을 먼저 맞춰 재작업을 줄입니다."],
                        ["운영까지 검증", "실패와 재시도 상황에서도 사용 가능한지 확인합니다."],
                      ].map(([title, description]) => (
                        <div key={title} className="rounded-lg border border-border bg-muted/20 p-4">
                          <p className="mb-1 text-sm font-semibold text-foreground">{title}</p>
                          <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h3 className="text-lg font-semibold mb-5 text-foreground">원인을 분리하고 끝까지 검증하는 엔지니어</h3>
                  <p className="leading-[1.8] mb-4" style={{ color: "#4A4A4A" }}>
                    결과가 기대와 다르면 곧바로 모델을 바꾸기보다 입력, 추적, 시계열 구성과 전달 과정을 나누어 확인합니다. 감으로 원인을 정하지 않고 비교 가능한 지표와 로그를 만든 뒤, 서비스에서 가장 중요한 기준에 맞춰 해결 방법을 선택합니다.
                  </p>
                  <p className="leading-[1.8] mb-6" style={{ color: "#4A4A4A" }}>
                    팀장으로서는 AI 파트의 결과 전달을 완료로 보지 않고, 백엔드 저장과 프론트 화면 표시까지 같은 기준으로 확인했습니다. 파트 간 책임을 따지기보다 공통 이벤트 의미와 완료 조건을 정리해 전체 흐름에서 문제를 재현하고 해결하는 방식을 중요하게 생각합니다.
                  </p>

                  <div className="mt-8 pt-6 border-t border-border">
                    <h4 className="text-sm font-semibold mb-4 text-primary uppercase tracking-wide">How I Work</h4>
                    <div className="grid gap-3 sm:grid-cols-3">
                      {[
                        ["구간을 나눠 측정", "문제를 재현하고 병목이 발생한 위치부터 좁힙니다."],
                        ["목적을 기준으로 선택", "단일 수치보다 실제 서비스의 우선순위를 따릅니다."],
                        ["완료 조건을 공유", "파트 간 같은 기준으로 결과를 끝까지 검증합니다."],
                      ].map(([title, description]) => (
                        <div key={title} className="rounded-lg border border-border bg-muted/20 p-4">
                          <p className="mb-1 text-sm font-semibold text-foreground">{title}</p>
                          <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              <div className="flex gap-3 mt-8 pt-6 border-t border-border">
                <a href="https://github.com/Anjingyeong" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300">
                  <Github size={18} />
                </a>
                <a href="mailto:anjin0910@gmail.com" className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300">
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </ScrollAnimator>

          <ScrollAnimator>
            <div className="minimal-card p-8">
              <h3 className="text-sm font-semibold mb-6 text-primary uppercase tracking-wide">기본 정보</h3>
              <ul className="space-y-5">
                {displayedInfoItems.map((item) => (
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
    </div>
  );
};

export default AboutSection;

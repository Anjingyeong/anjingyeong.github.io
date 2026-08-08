import ScrollAnimator from "./ScrollAnimator";
import { BookOpen, Github, Mail, MapPin, GraduationCap, Briefcase, Brain, Globe } from "lucide-react";

const aiWorkPrinciples = [
  ["끝까지 연결합니다", "모델 결과가 이벤트·API·화면에서 실제 기능으로 동작할 때까지 확인합니다."],
  ["근거를 만들고 선택합니다", "감으로 기술을 고르기보다 비교 조건과 지표를 만들어 서비스 목적에 맞는 선택을 합니다."],
  ["모르는 영역도 연결합니다", "AI에만 경계를 두지 않고 필요한 Realtime·Backend·Search 영역까지 학습해 시스템을 완성합니다."],
] as const;

const fullstackInfoItems = [
  { icon: MapPin, label: "거주지", value: "서울, 대한민국" },
  { icon: GraduationCap, label: "학력", value: "건양대학교 의공학과" },
  { icon: Briefcase, label: "전문 분야", value: "Full-Stack Developer" },
  { icon: Brain, label: "핵심 분야", value: "실시간 이벤트 · API · 데이터 정합성" },
  { icon: Globe, label: "협업 방식", value: "공통 식별자 · 완료 조건 · 구간별 로그" },
  { icon: Mail, label: "이메일", value: "anjin0910@gmail.com" },
];

type AboutSectionProps = {
  readonly variant?: "ai" | "fullstack";
};

const AboutSection = ({ variant = "ai" }: AboutSectionProps) => {
  const isFullstack = variant === "fullstack";

  if (!isFullstack) {
    return (
      <section id="about" className="py-20 md:py-24">
        <div className="container">
          <ScrollAnimator>
            <div className="section-header">
              <h2>How I Work</h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                프로젝트마다 같은 방식으로 문제를 좁히고, 선택의 근거를 만들고, 실제 서비스 흐름까지 확인합니다.
              </p>
            </div>
          </ScrollAnimator>

          <div className="grid gap-4 md:grid-cols-3">
            {aiWorkPrinciples.map(([title, description]) => (
              <ScrollAnimator key={title}>
                <div className="minimal-card h-full p-6 md:p-7">
                  <p className="text-base font-semibold text-foreground">{title}</p>
                  <p className="mt-2 text-sm leading-[1.75] text-muted-foreground">{description}</p>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <div id="about" className="pt-24 pb-12 md:pt-32 md:pb-16">
      <div className="container">
        <ScrollAnimator>
          <div className="section-header">
            <h2>About Me</h2>
          </div>
        </ScrollAnimator>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ScrollAnimator className="md:col-span-2">
            <div className="minimal-card p-8 md:p-10">
              <>
                  <h3 className="text-lg font-semibold mb-5 text-foreground">비동기 데이터의 식별자와 완료 조건을 설계하는 개발자</h3>
                  <p className="leading-[1.8] mb-4" style={{ color: "#4A4A4A" }}>
                    관제 화면에 중복 사고 카드가 보였을 때 화면만 숨기지 않고, 경보·스냅샷·클립이 서로 다른 시점에 도착하는 데이터 흐름부터 확인했습니다. originalEventId를 공통 식별자로 두고 백엔드 Incident 병합과 프론트 WebSocket·REST 병합 기준을 맞춰 하나의 사고 상태로 유지했습니다.
                  </p>
                  <p className="leading-[1.8] mb-6" style={{ color: "#4A4A4A" }}>
                    외부 VLM 호출처럼 느리고 실패할 수 있는 작업은 실시간 경보 경로와 분리하고 상태·재시도 조건을 두었습니다. 개인 프로젝트에서는 약 2주 안에 자가체크 화면, Workers API, D1, 관리자 통계, PDF 리포트와 배포까지 직접 완성하며 데이터 범위와 운영 흐름을 끝까지 확인했습니다.
                  </p>

                  <div className="mt-8 pt-6 border-t border-border">
                    <h4 className="text-sm font-semibold mb-4 text-primary uppercase tracking-wide">How I Work</h4>
                    <div className="grid gap-3 sm:grid-cols-3">
                      {[
                        ["식별자로 정합성 유지", "비동기 데이터를 하나의 비즈니스 상태로 묶어 중복과 불일치를 줄입니다."],
                        ["Critical Path 분리", "느리거나 실패할 수 있는 작업을 실시간 경로에서 분리하고 재시도 가능하게 설계합니다."],
                        ["배포까지 완결", "사용자 흐름·API·데이터·운영 조건을 실제 배포 상태까지 연결합니다."],
                      ].map(([title, description]) => (
                        <div key={title} className="rounded-lg border border-border bg-muted/20 p-4">
                          <p className="mb-1 text-sm font-semibold text-foreground">{title}</p>
                          <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
              </>

              <div className="flex gap-3 mt-8 pt-6 border-t border-border">
                <a href="https://github.com/Anjingyeong" target="_blank" rel="noopener noreferrer" aria-label="GitHub 열기" title="GitHub" className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300">
                  <Github size={18} />
                </a>
                <a href="https://zero-to-dev.tistory.com/" target="_blank" rel="noopener noreferrer" aria-label="개발 블로그 열기" title="Blog" className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300">
                  <BookOpen size={18} />
                </a>
                <a href="mailto:anjin0910@gmail.com" aria-label="이메일 보내기" title="Email" className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300">
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </ScrollAnimator>

          <ScrollAnimator>
            <div className="minimal-card p-8">
              <h3 className="text-sm font-semibold mb-6 text-primary uppercase tracking-wide">기본 정보</h3>
              <ul className="space-y-5">
                {fullstackInfoItems.map((item) => (
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

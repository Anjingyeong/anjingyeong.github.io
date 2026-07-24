import ScrollAnimator from "./ScrollAnimator";
import { Github, Linkedin, Mail, BookOpen, MapPin, GraduationCap, Briefcase, Brain, Globe } from "lucide-react";

const infoItems = [
  { icon: MapPin, label: "거주지", value: "서울, 대한민국" },
  { icon: GraduationCap, label: "학력", value: "건양대학교 의공학과" },
  { icon: Briefcase, label: "분야", value: "AI Engineering" },
  { icon: Brain, label: "목표", value: "Production-ready AI Engineer" },
  { icon: Globe, label: "언어", value: "한국어" },
  { icon: Mail, label: "이메일", value: "anjin0910@gmail.com" },
];

const fullstackInfoItems = [
  { icon: MapPin, label: "거주지", value: "서울, 대한민국" },
  { icon: GraduationCap, label: "학력", value: "건양대학교 의공학과" },
  { icon: Briefcase, label: "분야", value: "Full-Stack Development" },
  { icon: Brain, label: "목표", value: "Production-ready Full-Stack Developer" },
  { icon: Globe, label: "언어", value: "한국어" },
  { icon: Mail, label: "이메일", value: "anjin0910@gmail.com" },
];

type AboutSectionProps = {
  readonly variant?: "ai" | "fullstack";
};

const AboutSection = ({ variant = "ai" }: AboutSectionProps) => {
  const isFullstack = variant === "fullstack";
  const displayedInfoItems = isFullstack ? fullstackInfoItems : infoItems;

  return (
    <div className="py-24 md:py-32">
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
                  <h3 className="text-lg font-semibold mb-5 text-foreground">Full-Stack Developer 소개</h3>
                  <p className="leading-[1.8] mb-4" style={{ color: "#4A4A4A" }}>
                    사용자의 한 번의 입력이 화면, API, 데이터와 결과까지 막힘없이 이어지도록 만드는 개발자입니다.
                  </p>
                  <p className="leading-[1.8] mb-4" style={{ color: "#4A4A4A" }}>
                    <strong className="font-semibold text-foreground">마음이음 웹서비스</strong>를 기획부터 배포까지 1인 개발하고, <strong className="font-semibold text-foreground">스마트 안전 관제</strong>에서는 AI 이벤트가 MQTT·백엔드·WebSocket을 거쳐 관제 화면에 도달하는 실시간 흐름을 연결했습니다. 화면과 서버를 따로 구현하기보다, 데이터가 이동하는 과정과 예외 상황을 함께 살피며 서비스를 완성합니다.
                  </p>
                  <p className="leading-[1.8] mb-6" style={{ color: "#4A4A4A" }}>
                    특정 기술에 갇히기보다 요구사항에 필요한 구조를 빠르게 파악하고, 아이디어를 실제로 작동하는 제품으로 바꿀 수 있는 사람입니다.
                  </p>

                  <div className="mt-8 pt-6 border-t border-border">
                    <h4 className="text-sm font-semibold mb-3 text-primary uppercase tracking-wide">Full-Stack Development Focus</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        React·TypeScript 기반 반응형 사용자 화면과 서비스 흐름 구현
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        Spring Boot·Cloudflare Workers 기반 API와 데이터 저장 구조 구성
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        MQTT·WebSocket·STOMP 기반 실시간 이벤트 연동
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        Docker·GitHub Pages·Cloudflare Pages 기반 배포와 운영 환경 고려
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        React·TypeScript 기반으로 직무별 콘텐츠와 인쇄 페이지를 제공하는 개인 포트폴리오를 직접 구축·운영하고 있습니다.
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <h3 className="text-lg font-semibold mb-5 text-foreground">AI Engineer 소개</h3>
                  <p className="leading-[1.8] mb-4" style={{ color: "#4A4A4A" }}>
                    AI가 정확하게 판단하는 것을 넘어, 실제 환경에서 제때 작동하도록 만드는 엔지니어입니다.
                  </p>
                  <p className="leading-[1.8] mb-4" style={{ color: "#4A4A4A" }}>
                    <strong className="font-semibold text-foreground">의료 AI</strong>에서 <strong className="font-semibold text-foreground">실시간 안전 관제</strong>까지 경험하며 데이터 품질, 특징 설계, 트래킹 단절, 처리 지연과 이벤트 전달을 하나의 문제로 다뤄 왔습니다. 정해진 모델을 반복 적용하기보다 로그와 지표로 원인을 좁히고, 필요한 구조를 직접 설계해 모델의 결과를 실제 서비스까지 연결합니다.
                  </p>
                  <p className="leading-[1.8] mb-6" style={{ color: "#4A4A4A" }}>
                    새로운 도메인에서도 문제를 빠르게 구조화하고, 모델 성능과 시스템 완성도를 함께 높일 수 있는 사람입니다.
                  </p>

                  <div className="mt-8 pt-6 border-t border-border">
                    <h4 className="text-sm font-semibold mb-3 text-primary uppercase tracking-wide">AI Engineering Focus</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        실시간 영상 AI 파이프라인 설계 (RTSP → 추론 → MQTT → WebSocket)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        Data-Centric 의료 AI (RF-DETR 증강, VAE 전처리·후처리)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        검색 기반 지식 관리 (BM25 + Vector Search + RRF + Metadata Filtering)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        AI 결과를 운영 환경에 연결하는 Evidence-driven 아키텍처 설계
                      </li>
                    </ul>
                  </div>
                </>
              )}

              <div className="flex gap-3 mt-8 pt-6 border-t border-border">
                <a href="https://github.com/Anjingyeong" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300">
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

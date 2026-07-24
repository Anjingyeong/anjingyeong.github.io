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
                    React와 TypeScript 기반 사용자 화면부터 Spring Boot·Cloudflare 기반 API 및 데이터 저장 구조까지 구현해 왔습니다. 기능 구현에 그치지 않고 데이터 흐름, 예외 상황, 실시간 이벤트 전달과 운영 환경을 함께 고려합니다.
                  </p>
                  <p className="leading-[1.8] mb-4" style={{ color: "#4A4A4A" }}>
                    <strong className="font-semibold text-foreground">마음이음 자가체크 웹서비스</strong>에서는 모바일 화면, 위험도 계산, Cloudflare Workers API, D1 저장, 관리자 통계, PDF 리포트와 배포를 하나의 사용자 흐름으로 연결했습니다.
                  </p>
                  <p className="leading-[1.8] mb-6" style={{ color: "#4A4A4A" }}>
                    <strong className="font-semibold text-foreground">스마트 안전 관제 프로젝트</strong>에서는 Python AI Worker에서 생성한 이벤트를 MQTT를 통해 Spring Boot·WebSocket 기반 관제 시스템에 연동하고 데이터 흐름을 검증했습니다.
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
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <h3 className="text-lg font-semibold mb-5 text-foreground">AI Engineer 소개</h3>
                  <p className="leading-[1.8] mb-4" style={{ color: "#4A4A4A" }}>
                    의공학 기반의 의료 AI 프로젝트 경험을 바탕으로, 현재는 AI 모델의 추론 결과를 실제 서비스와 연결하는 엔지니어링에 집중하고 있습니다.
                  </p>
                  <p className="leading-[1.8] mb-4" style={{ color: "#4A4A4A" }}>
                    <strong className="font-semibold text-foreground">RF-DETR 기반 용종 검출 프로젝트</strong>에서 <strong className="font-semibold text-foreground">mAP@50 86.2%, 22+ FPS</strong>의 실시간 추론 성능을 확보했고, <strong className="font-semibold text-foreground">VAE 기반 비지도 병변 검출 프로젝트</strong>에서는 라벨 데이터 부족 문제를 <strong className="font-semibold text-foreground">Anomaly Detection</strong>과 <strong className="font-semibold text-foreground">Dynamic Threshold 후처리</strong>로 해결했습니다.
                  </p>
                  <p className="leading-[1.8] mb-6" style={{ color: "#4A4A4A" }}>
                    최근에는 <strong className="font-semibold text-foreground">SK쉴더스 부트캠프</strong>에서 <strong className="font-semibold text-foreground">RTSP &rarr; AI 추론 &rarr; MQTT &rarr; WebSocket &rarr; 관제 대시보드</strong>로 이어지는 지능형 관제 시스템을 개발하며, 모델 개발을 넘어 실제 운영 환경에 연결되는 AI 서비스를 구현하고 있습니다.
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

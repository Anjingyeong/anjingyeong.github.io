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
                    저는 사용자의 한 번의 입력과 하나의 이벤트가 화면, API, 데이터 저장과 결과까지 끊기지 않도록 만드는 풀스택 개발자입니다.
                  </p>
                  <p className="leading-[1.8] mb-4" style={{ color: "#4A4A4A" }}>
                    마음이음 웹서비스는 약 2주 동안 기획부터 모바일 화면, API, D1 저장, 관리자 통계, PDF 리포트와 배포까지 1인 개발했습니다. 스마트 안전 관제에서는 Python AI Worker의 위험 이벤트를 MQTT로 수신하고, Spring Boot 저장과 WebSocket 알림, 사고 증거와 VLM 검색까지 이어지는 흐름을 구현했습니다.
                  </p>
                  <p className="leading-[1.8] mb-6" style={{ color: "#4A4A4A" }}>
                    팀 프로젝트에서는 각 파트가 구현한 기능을 단순히 연결하는 데 그치지 않고, 비동기로 도착하는 이벤트의 ID와 완료 시점을 함께 맞췄습니다. 화면에 나타난 증상만 수정하기보다 저장 구조와 데이터 계약까지 확인해 서비스 전체의 정합성을 해결하는 것이 저의 강점입니다.
                  </p>

                  <div className="mt-8 pt-6 border-t border-border">
                    <h4 className="text-sm font-semibold mb-3 text-primary uppercase tracking-wide">Full-Stack Development Focus</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        React·TypeScript 기반 사용자 화면과 비동기 상태 관리
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        Spring Boot·Spring Data JPA·Cloudflare Workers 기반 API 구현
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        PostgreSQL·pgvector·D1 기반 데이터 저장 및 검색 구조
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        MQTT·WebSocket·STOMP 기반 실시간 이벤트 전달
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        Incident 병합, 작업 상태, 잠금 만료와 재시도를 고려한 운영 설계
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <h3 className="text-lg font-semibold mb-5 text-foreground">AI Engineer 소개</h3>
                  <p className="leading-[1.8] mb-4" style={{ color: "#4A4A4A" }}>
                    저는 숫자로 이상을 발견하고 로그로 원인을 좁힌 뒤, 서비스 목적에 맞는 해결 방법을 선택하는 컴퓨터비전 엔지니어입니다.
                  </p>
                  <p className="leading-[1.8] mb-4" style={{ color: "#4A4A4A" }}>
                    스마트 안전 관제 프로젝트에서는 행동 분류 성능만 확인하지 않고 Pose 검출, Tracking ID, LSTM 입력 시퀀스, 프레임 큐와 이벤트 전달 구간을 나누어 분석했습니다. 그 결과 54D 특징 확장으로 F1-score를 93.49%까지 높이고, 낙상 구간의 ID Switch와 TensorRT 추론 지연을 개선했습니다.
                  </p>
                  <p className="leading-[1.8] mb-6" style={{ color: "#4A4A4A" }}>
                    팀 프로젝트에서는 AI 결과를 전달하는 데서 끝내지 않고, 백엔드·프론트엔드 담당자와 cameraId, eventType, timestamp, originalEventId 등 이벤트의 의미와 완료 기준을 맞췄습니다. 모델 결과가 실제 서비스에서 신뢰할 수 있는 데이터로 이어지도록 만드는 것이 저의 강점입니다.
                  </p>

                  <div className="mt-8 pt-6 border-t border-border">
                    <h4 className="text-sm font-semibold mb-3 text-primary uppercase tracking-wide">AI Engineering Focus</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        YOLO Pose·Tracking·LSTM을 연결한 실시간 행동 분석 파이프라인
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        Precision·Recall·F1·ID Switch·Latency를 활용한 원인 분석과 검증
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        Bounded Queue와 TensorRT 기반 실시간 영상 처리 최적화
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        AI 결과를 상태 후처리와 MQTT 위험 이벤트로 전환하는 서비스 연동
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        RTSP → Pose → Tracking → LSTM → 상태 후처리 → MQTT
                      </li>
                    </ul>
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

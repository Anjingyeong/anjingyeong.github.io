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
              <h3 className="text-lg font-semibold mb-5 text-foreground">AI Engineer 소개</h3>
              <p className="leading-[1.8] mb-4" style={{ color: '#4A4A4A' }}>
                의공학을 전공하며 영상처리, 딥러닝, 의료 AI 프로젝트를 경험했고, 이후 실시간 관제 시스템과 Hybrid RAG 기반 지식 관리 시스템으로 AI 엔지니어링 역량을 확장하고 있습니다.
              </p>
              <p className="leading-[1.8] mb-4" style={{ color: '#4A4A4A' }}>
                단순 모델 성능을 넘어 Data-Centric 증강, Custom Loss 설계, Dynamic Threshold 후처리, Evidence Chain 기반 이벤트 파이프라인 설계까지 end-to-end 흐름을 다뤄왔습니다. RTSP, MQTT, WebSocket을 활용해 AI 추론 결과가 관제 화면까지 신뢰성 있게 연결되는 구조를 직접 설계했습니다.
              </p>
              <p className="leading-[1.8] mb-6" style={{ color: '#4A4A4A' }}>
                현재는 SK쉴더스 AI 부트캠프에서 지능형 관제 시스템 프로젝트를 수행 중이며, AI 모델의 추론 결과가 실제 서비스 흐름과 안정적으로 연결되는 Production-ready AI 개발에 집중하고 있습니다.
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
                    Data-Centric 의료 AI (RF-DETR 증강, VAE 이상 탐지, 커스텀 Loss)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    Hybrid RAG 검색 고도화 (BM25 + Vector Search + RRF + Metadata Filtering)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    AI 결과를 운영 환경에 연결하는 Evidence-driven 아키텍처 설계
                  </li>
                </ul>
              </div>

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

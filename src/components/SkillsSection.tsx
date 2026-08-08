import ScrollAnimator from "./ScrollAnimator";
import { Brain, Database, Cpu, Network } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: {
    name: string;
    evidence: string;
  }[];
  color: string;
}

const aiSkillCategories: SkillCategory[] = [
  {
    title: "AI / Vision",
    icon: Brain,
    skills: [
      { name: "YOLO Pose", evidence: "17개 관절을 추출해 Tracking·LSTM 입력으로 연결" },
      { name: "TensorRT", evidence: "YOLO 평균 지연 9.454ms → 4.723ms" },
      { name: "RF-DETR", evidence: "Kvasir 데이터 증강 담당 · 팀 모델 mAP@50 86.2%" },
    ],
    color: "from-blue-500/10 to-blue-600/5",
  },
  {
    title: "Realtime / Integration",
    icon: Network,
    skills: [
      { name: "RTSP", evidence: "2개 카메라 영상 입력과 구간별 지연 측정" },
      { name: "MQTT", evidence: "위험 이벤트 29건 모두 1초 이내 Subscriber 도달" },
      { name: "Bounded Queue", evidence: "과거 프레임 적체를 줄이는 최신 프레임 우선 처리" },
    ],
    color: "from-emerald-500/10 to-teal-600/5",
  },
  {
    title: "Backend / Platform",
    icon: Database,
    skills: [
      { name: "Spring Boot", evidence: "MQTT 이벤트 저장·브로드캐스트 팀 통합 검증" },
      { name: "REST API", evidence: "관제 데이터 조회와 화면 연동 구조에 사용" },
      { name: "SQL / DB", evidence: "이벤트와 사고 상태를 저장하는 데이터 구조 경험" },
    ],
    color: "from-indigo-500/10 to-indigo-600/5",
  },
  {
    title: "Search / Infra",
    icon: Cpu,
    skills: [
      { name: "BM25 + Vector + RRF", evidence: "Hit@5 75.00% → 82.14%" },
      { name: "Elasticsearch", evidence: "BM25·dense_vector kNN·Bulk 색인 구조 구현" },
      { name: "Git / Linux / Cloud", evidence: "버전 관리·실행 환경·배포 흐름에 사용" },
    ],
    color: "from-purple-500/10 to-purple-600/5",
  },
  {
    title: "Frontend",
    icon: Cpu,
    skills: [
      { name: "React", evidence: "AI 이벤트가 관제 화면에 표시되는 흐름 검증" },
      { name: "WebSocket / STOMP", evidence: "저장된 이벤트를 화면에 실시간 전달" },
      { name: "JavaScript", evidence: "관제 UI와 비동기 이벤트 처리" },
    ],
    color: "from-emerald-500/10 to-teal-600/5",
  },
];

const fullstackSkillCategories: SkillCategory[] = [
  {
    title: "Backend & API",
    icon: Database,
    skills: [
      { name: "Java 21", evidence: "타입 안정성을 갖춘 서버 애플리케이션 구현" },
      { name: "Spring Boot", evidence: "REST API와 실시간 이벤트 처리" },
      { name: "Spring Data JPA", evidence: "도메인 상태와 저장 구조 연결" },
      { name: "Cloudflare Workers", evidence: "개인 서비스 API 배포" },
    ],
    color: "from-blue-500/10 to-blue-600/5",
  },
  {
    title: "Frontend",
    icon: Brain,
    skills: [
      { name: "React", evidence: "사용자 화면과 비동기 상태 구성" },
      { name: "TypeScript", evidence: "이벤트·API 데이터 계약을 타입으로 관리" },
      { name: "Tailwind CSS", evidence: "반응형 UI 구현" },
      { name: "Vite", evidence: "프론트엔드 빌드와 배포" },
    ],
    color: "from-emerald-500/10 to-teal-600/5",
  },
  {
    title: "Data & Search",
    icon: Cpu,
    skills: [
      { name: "PostgreSQL", evidence: "서비스 데이터와 검색 메타데이터 저장" },
      { name: "pgvector", evidence: "임베딩 기반 유사도 검색" },
      { name: "Cloudflare D1", evidence: "자가체크 결과와 관리자 통계 저장" },
    ],
    color: "from-indigo-500/10 to-indigo-600/5",
  },
  {
    title: "Realtime & Deployment",
    icon: Network,
    skills: [
      { name: "MQTT", evidence: "AI Worker의 위험 이벤트 전달" },
      { name: "WebSocket / STOMP", evidence: "관제 화면 실시간 알림" },
      { name: "AWS S3", evidence: "미디어 파일 저장 구조" },
      { name: "Docker / Cloudflare Pages", evidence: "실행 환경과 정적 웹 배포" },
    ],
    color: "from-purple-500/10 to-purple-600/5",
  },
];

type SkillsSectionProps = {
  readonly variant?: "ai" | "fullstack";
};

const SkillsSection = ({ variant = "ai" }: SkillsSectionProps) => {
  const categories = variant === "fullstack" ? fullstackSkillCategories : aiSkillCategories;

  return (
    <section id="skills" className="pt-12 pb-24 md:pt-16 md:pb-32">
      <div className="container">
        <ScrollAnimator>
          <div className="section-header">
            <h2>Skills</h2>
          </div>
        </ScrollAnimator>

        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${variant === "fullstack" ? "lg:grid-cols-4" : "lg:grid-cols-3 xl:grid-cols-5"}`}>
          {categories.map((cat, i) => (
            <ScrollAnimator
              key={i}
              className={variant === "ai" && i === categories.length - 1 ? "sm:col-span-2 lg:col-span-1" : undefined}
            >
              <div className="minimal-card h-full overflow-hidden">
                <div className={`bg-gradient-to-br ${cat.color} p-6 pb-4`}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 flex-shrink-0" style={{ background: 'hsl(var(--primary) / 0.15)', boxShadow: 'inset 0 0 0 1.5px hsl(var(--primary) / 0.25)' }}>
                    <cat.icon size={22} className="text-primary" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">{cat.title}</h3>
                </div>
                <div className="p-6 pt-4">
                  <ul className="space-y-3">
                    {cat.skills.map((skill) => (
                      <li key={skill.name} className="flex items-start gap-2.5">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>
                          <strong className="block text-sm font-semibold text-foreground">{skill.name}</strong>
                          <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">{skill.evidence}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

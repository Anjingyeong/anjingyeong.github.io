import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import CompetenceSection from "@/components/CompetenceSection";

describe("Skills & Experience & Competence sections", () => {
  it("renders AI skills categories and representative tech without removed libraries", () => {
    const { container } = render(<SkillsSection variant="ai" />);
    expect(screen.getByText("AI / Vision")).toBeInTheDocument();
    expect(screen.getByText("Realtime / Integration")).toBeInTheDocument();
    expect(screen.getByText("Platform / Backend")).toBeInTheDocument();
    expect(screen.getByText("Frontend")).toBeInTheDocument();
    expect(screen.getByText("Search / Infra")).toBeInTheDocument();

    expect(screen.getByText("YOLO Pose")).toBeInTheDocument();
    expect(screen.getByText("TensorRT")).toBeInTheDocument();
    expect(screen.getByText("RTSP")).toBeInTheDocument();
    expect(screen.getByText("Hit@5 75.00% → 82.14%")).toBeInTheDocument();

    const textContent = container.textContent ?? "";
    expect(textContent).not.toContain("BeautifulSoup4");
    expect(textContent).not.toContain("pykrx");
    expect(textContent).not.toContain("Seaborn");
    expect(textContent).not.toContain("MySQL");
  });

  it("includes Java 21 and AWS S3 in Full-Stack skills without Redis or MySQL", () => {
    const { container } = render(<SkillsSection variant="fullstack" />);
    expect(screen.getByText("Java 21")).toBeInTheDocument();
    expect(screen.getByText("AWS S3")).toBeInTheDocument();

    const textContent = container.textContent ?? "";
    expect(textContent).not.toContain("BeautifulSoup4");
    expect(textContent).not.toContain("pykrx");
    expect(textContent).not.toContain("Seaborn");
    expect(textContent).not.toContain("MySQL");
    expect(textContent).not.toContain("Redis");
  });

  it("displays Education & Training and Awards separately in Experience", () => {
    render(<ExperienceSection />);
    expect(screen.getByText("Education & Training")).toBeInTheDocument();
    expect(screen.getByText("Awards")).toBeInTheDocument();
  });

  it("has exactly 3 awards with distinct RF-DETR award descriptions", () => {
    render(<ExperienceSection />);
    const capstoneAward = screen.getByText(
      "RF-DETR 용종 검출 팀 프로젝트로 금상 수상 · 개인 기여: Kvasir 데이터 증강 설계·적용"
    );
    const consortiumAward = screen.getByText(
      "RF-DETR 용종 검출 팀 프로젝트로 동상 수상 · 개인 기여: Kvasir 데이터 증강 설계·적용"
    );
    const dnaAward = screen.getByText(
      "VAE 기반 유방 초음파 이상 후보 시각화 팀 프로젝트로 수상 · 개인 기여: 원본·재구성 차영상 생성·비교 시각화"
    );

    expect(capstoneAward).toBeInTheDocument();
    expect(consortiumAward).toBeInTheDocument();
    expect(dnaAward).toBeInTheDocument();
    expect(capstoneAward.textContent).not.toEqual(consortiumAward.textContent);
  });

  it("supports keyboard opening of certificate cards, modal dialog accessibility, and compact engineer bar", () => {
    render(<CompetenceSection />);

    const certButtons = screen.getAllByRole("button", { name: /활용역량|실무역량/i });
    expect(certButtons.length).toBeGreaterThanOrEqual(2);

    // Keyboard trigger test
    fireEvent.keyDown(certButtons[0], { key: "Enter", code: "Enter" });

    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();
    expect(dialog).toHaveAttribute("aria-modal", "true");
    expect(dialog).toHaveAttribute("aria-label");

    // Information Processing Engineer is displayed as a compact info bar
    const infoEngineerText = screen.getByText("정보처리기사");
    expect(infoEngineerText).toBeInTheDocument();
    expect(screen.getByText("필기 합격 · 실기 준비 중")).toBeInTheDocument();
    expect(screen.getAllByText("발급: 건양대학교 (2026.03.21)")).toHaveLength(2);
  });
});

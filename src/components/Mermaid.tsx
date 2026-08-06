import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: false,
  theme: 'default',
  securityLevel: 'loose',
  themeVariables: {
    fontFamily: 'Pretendard, "Noto Sans KR", "Apple SD Gothic Neo", sans-serif',
    fontSize: '16px',
  },
  flowchart: {
    useMaxWidth: false,
    htmlLabels: true,
    nodeSpacing: 44,
    rankSpacing: 52,
    padding: 14,
  },
});

interface MermaidProps {
  chart: string;
}

export const Mermaid: React.FC<MermaidProps> = ({ chart }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (import.meta.env.MODE === "test") return undefined;

    let isMounted = true;

    const renderChart = async () => {
      if (containerRef.current && chart) {
        try {
          containerRef.current.innerHTML = '';
          const id = `mermaid-${Math.random().toString(36).substring(7)}`;
          const { svg } = await mermaid.render(id, chart);
          if (!isMounted || !containerRef.current) return;
          containerRef.current.innerHTML = svg;

          const svgElement = containerRef.current.querySelector<SVGSVGElement>('svg');
          if (svgElement) {
            const intrinsicWidth = svgElement.viewBox.baseVal.width || 0;
            svgElement.style.width = `${Math.max(intrinsicWidth, 820)}px`;
            svgElement.style.maxWidth = 'none';
            svgElement.style.height = 'auto';
            svgElement.style.marginInline = 'auto';
          }
        } catch (error) {
          console.error('Mermaid rendering failed:', error);
          if (containerRef.current) {
            containerRef.current.innerHTML = `<div class="text-red-500 p-4 border border-red-500 rounded">Failed to render diagram</div>`;
          }
        }
      }
    };

    renderChart();

    return () => {
      isMounted = false;
    };
  }, [chart]);

  return (
    <div
      className="mermaid-diagram w-full overflow-x-auto rounded-xl border border-border/50 bg-card/40 p-4 shadow-inner md:p-6"
      ref={containerRef}
    />
  );
};

export default Mermaid;

import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: false,
  theme: 'default',
  securityLevel: 'loose',
});

interface MermaidProps {
  chart: string;
}

export const Mermaid: React.FC<MermaidProps> = ({ chart }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isMounted = true;

    const renderChart = async () => {
      if (containerRef.current && chart) {
        try {
          containerRef.current.innerHTML = '';
          const id = `mermaid-${Math.random().toString(36).substring(7)}`;
          const { svg } = await mermaid.render(id, chart);
          if (!isMounted || !containerRef.current) return;
          containerRef.current.innerHTML = svg;
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
      className="mermaid-diagram w-full overflow-x-auto flex justify-center py-6 bg-card/40 rounded-xl border border-border/50 shadow-inner" 
      ref={containerRef} 
    />
  );
};

export default Mermaid;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PortfolioPrint from "./pages/PortfolioPrint";
import FullstackPortfolioPrint from "./pages/FullstackPortfolioPrint";
import VibePortfolio from "./pages/VibePortfolio";
import VibePortfolioPrint from "./pages/VibePortfolioPrint";

const queryClient = new QueryClient();
const hostname = typeof window === "undefined" ? "" : window.location.hostname;
const isVibePortfolio = hostname.startsWith("vibe.") || import.meta.env.MODE === "vibe";
const portfolioVariant = hostname.startsWith("fullstack.") || import.meta.env.MODE === "fullstack"
  ? "fullstack"
  : "ai";
const defaultPortfolioPage = isVibePortfolio ? <VibePortfolio /> : <Index variant={portfolioVariant} />;
const defaultPrintPage = isVibePortfolio
  ? <VibePortfolioPrint />
  : portfolioVariant === "fullstack"
    ? <FullstackPortfolioPrint />
    : <PortfolioPrint />;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={defaultPortfolioPage} />
          <Route path="/ai" element={<Index variant="ai" />} />
          <Route path="/fullstack" element={<Index variant="fullstack" />} />
          <Route path="/vibe" element={<VibePortfolio />} />
          <Route path="/print" element={defaultPrintPage} />
          <Route path="/print/fullstack" element={<FullstackPortfolioPrint />} />
          <Route path="/print/vibe" element={<VibePortfolioPrint />} />
          <Route path="*" element={defaultPortfolioPage} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;



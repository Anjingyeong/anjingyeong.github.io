import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PortfolioPrint from "./pages/PortfolioPrint";
import NotFound from "./pages/NotFound";
import FullstackPortfolioPrint from "./pages/FullstackPortfolioPrint";

const queryClient = new QueryClient();
const portfolioVariant = import.meta.env.MODE === "fullstack" ? "fullstack" : "ai";
const defaultPrintPage = portfolioVariant === "fullstack" ? <FullstackPortfolioPrint /> : <PortfolioPrint />;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index variant={portfolioVariant} />} />
          <Route path="/ai" element={<Index />} />
          <Route path="/fullstack" element={<Index variant="fullstack" />} />
          <Route path="/print" element={defaultPrintPage} />
          <Route path="/print/fullstack" element={<FullstackPortfolioPrint />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

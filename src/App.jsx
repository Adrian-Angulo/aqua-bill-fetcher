import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import InvoiceSearch from "./pages/InvoiceSearch";
import InvoiceResults from "./pages/InvoiceResults";
import MatriculaSearch from "./pages/MatriculaSearch";
import MatriculaResults from "./pages/MatriculaResults";
import MatriculaDetail from "./pages/MatriculaDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/facturas" element={<InvoiceSearch />} />
          <Route path="/facturas/resultados" element={<InvoiceResults />} />
          <Route path="/matriculas" element={<MatriculaSearch />} />
          <Route path="/matriculas/resultados" element={<MatriculaResults />} />
          <Route path="/matricula/:id" element={<MatriculaDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

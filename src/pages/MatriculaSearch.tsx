import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Home, ArrowLeft } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const MatriculaSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const validateInput = (value: string): boolean => {
    const cleaned = value.replace(/[\s-]/g, '');
    
    if (!/^[A-Z0-9]+$/i.test(cleaned)) {
      return false;
    }
    
    if (cleaned.length < 5) {
      return false;
    }
    
    return true;
  };

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      toast({
        title: "Campo vacío",
        description: "Por favor ingrese una cédula o número de matrícula.",
        variant: "destructive",
      });
      return;
    }

    if (!validateInput(searchTerm)) {
      toast({
        title: "Formato inválido",
        description: "Por favor ingrese un número de cédula válido (mínimo 5 dígitos) o número de matrícula.",
        variant: "destructive",
      });
      return;
    }

    navigate(`/matriculas/resultados?q=${encodeURIComponent(searchTerm)}`);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-4 gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Button>

        <div className="bg-card rounded-3xl shadow-water p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-water rounded-2xl inline-block">
                <Home className="w-12 h-12 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
              Consulta de Matrículas
            </h1>
            <p className="text-lg text-muted-foreground">
              Sistema de consulta de matrículas y predios
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="search" className="text-sm font-medium text-foreground">
                Cédula o Número de Matrícula
              </label>
              <Input
                id="search"
                type="text"
                placeholder="Ej: 1234567890 o MAT-2020-1001"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
                className="h-14 text-lg border-2 focus:border-primary transition-colors"
              />
              <p className="text-xs text-muted-foreground">
                Ingrese su número de cédula o el número de matrícula del predio
              </p>
            </div>

            <Button 
              onClick={handleSearch}
              size="lg"
              className="w-full h-14 text-lg bg-gradient-water hover:opacity-90 transition-all shadow-water gap-3"
            >
              <Search className="w-5 h-5" />
              Buscar Matrículas
            </Button>
          </div>

          <div className="mt-8 pt-6 border-t border-border">
            <h3 className="font-semibold text-foreground mb-3">Ejemplos para probar:</h3>
            <div className="flex flex-wrap gap-2">
              {['1234567890', '9876543210', 'MAT-2020-1001', 'MAT-2023-3401'].map((example) => (
                <Button
                  key={example}
                  variant="outline"
                  size="sm"
                  onClick={() => setSearchTerm(example)}
                  className="hover:bg-accent hover:text-accent-foreground"
                >
                  {example}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-8 text-muted-foreground text-sm">
          <p>© 2024 Acueducto Municipal - Sistema de Consulta de Matrículas</p>
        </div>
      </div>
    </div>
  );
};

export default MatriculaSearch;

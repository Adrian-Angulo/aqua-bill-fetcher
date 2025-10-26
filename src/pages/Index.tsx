import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Droplets } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const validateInput = (value: string): boolean => {
    // Remove spaces and dashes
    const cleaned = value.replace(/[\s-]/g, '');
    
    // Check if it's only numbers or alphanumeric (for invoice codes)
    if (!/^[A-Z0-9]+$/i.test(cleaned)) {
      return false;
    }
    
    // Check minimum length
    if (cleaned.length < 5) {
      return false;
    }
    
    return true;
  };

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      toast({
        title: "Campo vacío",
        description: "Por favor ingrese una cédula o código de factura.",
        variant: "destructive",
      });
      return;
    }

    if (!validateInput(searchTerm)) {
      toast({
        title: "Formato inválido",
        description: "Por favor ingrese un número de cédula válido (mínimo 5 dígitos) o código de factura.",
        variant: "destructive",
      });
      return;
    }

    navigate(`/resultados?q=${encodeURIComponent(searchTerm)}`);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="bg-card rounded-3xl shadow-water p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-water rounded-2xl inline-block">
                <Droplets className="w-12 h-12 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
              Consulta de Facturas
            </h1>
            <p className="text-lg text-muted-foreground">
              Sistema de consulta de facturación de acueducto
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="search" className="text-sm font-medium text-foreground">
                Cédula o Código de Factura
              </label>
              <Input
                id="search"
                type="text"
                placeholder="Ej: 1234567890 o FAC-2024-001"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
                className="h-14 text-lg border-2 focus:border-primary transition-colors"
              />
              <p className="text-xs text-muted-foreground">
                Ingrese su número de cédula o el código de la factura
              </p>
            </div>

            <Button 
              onClick={handleSearch}
              size="lg"
              className="w-full h-14 text-lg bg-gradient-water hover:opacity-90 transition-all shadow-water gap-3"
            >
              <Search className="w-5 h-5" />
              Buscar Facturas
            </Button>
          </div>

          <div className="mt-8 pt-6 border-t border-border">
            <h3 className="font-semibold text-foreground mb-3">Ejemplos para probar:</h3>
            <div className="flex flex-wrap gap-2">
              {['1234567890', '9876543210', 'FAC-2024-001', 'FAC-2024-006'].map((example) => (
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
          <p>© 2024 Acueducto Municipal - Sistema de Consulta de Facturas</p>
        </div>
      </div>
    </div>
  );
};

export default Index;

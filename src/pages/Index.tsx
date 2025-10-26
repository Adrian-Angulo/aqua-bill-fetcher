import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileText, Home, Droplets } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-water rounded-2xl inline-block">
              <Droplets className="w-12 h-12 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
            Portal de Acueducto
          </h1>
          <p className="text-lg text-muted-foreground">
            Sistema de consulta de facturas y matrículas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Facturas Card */}
          <Card 
            className="p-8 hover:shadow-water transition-all duration-300 cursor-pointer group"
            onClick={() => navigate('/facturas')}
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-6 bg-gradient-water rounded-2xl group-hover:scale-110 transition-transform">
                <FileText className="w-12 h-12 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Consultar Facturas
                </h2>
                <p className="text-muted-foreground">
                  Busca y consulta tus facturas de agua por cédula o código de factura
                </p>
              </div>
              <Button 
                className="w-full bg-gradient-water hover:opacity-90"
                size="lg"
              >
                Ir a Facturas
              </Button>
            </div>
          </Card>

          {/* Matrículas Card */}
          <Card 
            className="p-8 hover:shadow-water transition-all duration-300 cursor-pointer group"
            onClick={() => navigate('/matriculas')}
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-6 bg-gradient-flow rounded-2xl group-hover:scale-110 transition-transform">
                <Home className="w-12 h-12 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Consultar Matrículas
                </h2>
                <p className="text-muted-foreground">
                  Busca información de tus matrículas y predios registrados
                </p>
              </div>
              <Button 
                className="w-full bg-gradient-flow hover:opacity-90"
                size="lg"
              >
                Ir a Matrículas
              </Button>
            </div>
          </Card>
        </div>

        <div className="text-center mt-8 text-muted-foreground text-sm">
          <p>© 2024 Acueducto Municipal - Portal de Consultas</p>
        </div>
      </div>
    </div>
  );
};

export default Index;

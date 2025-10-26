import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import MatriculaCard from "@/components/MatriculaCard";
import { searchMatriculas, Matricula } from "@/data/mockMatriculas";

const MatriculaResults = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [matriculas, setMatriculas] = useState<Matricula[]>([]);
  const searchTerm = searchParams.get('q') || '';

  useEffect(() => {
    if (searchTerm) {
      const results = searchMatriculas(searchTerm);
      setMatriculas(results);
    }
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => navigate('/matriculas')}
          className="mb-6 gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a buscar
        </Button>

        <div className="bg-card rounded-2xl shadow-card p-8 mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-water rounded-xl">
              <Home className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold text-foreground">
              Resultados de búsqueda
            </h1>
          </div>
          <p className="text-muted-foreground ml-[60px]">
            Búsqueda: <span className="font-semibold">{searchTerm}</span>
          </p>
        </div>

        {matriculas.length === 0 ? (
          <div className="bg-card rounded-2xl shadow-card p-12 text-center">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Home className="w-10 h-10 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              No se encontraron matrículas
            </h2>
            <p className="text-muted-foreground">
              No hay matrículas asociadas a la cédula o número ingresado.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <p className="text-muted-foreground">
                Se encontraron <span className="font-semibold text-foreground">{matriculas.length}</span> matrícula(s)
              </p>
            </div>
            
            {matriculas.map((matricula) => (
              <MatriculaCard key={matricula.id} matricula={matricula} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MatriculaResults;

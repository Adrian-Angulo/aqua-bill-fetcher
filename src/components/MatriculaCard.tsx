import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Matricula } from "@/data/mockMatriculas";
import { useNavigate } from "react-router-dom";
import { getEstadoColor } from "@/lib/formatters";
import MatriculaCardInfo from "./matricula/MatriculaCardInfo";

interface MatriculaCardProps {
  matricula: Matricula;
}

const MatriculaCard = ({ matricula }: MatriculaCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/matricula/${matricula.id}`);
  };

  return (
    <Card 
      className="p-6 hover:shadow-water transition-all duration-300 border-border bg-card cursor-pointer"
      onClick={handleClick}
    >
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <h3 className="text-lg font-semibold text-foreground">
                {matricula.numeroMatricula}
              </h3>
              <Badge 
                className={getEstadoColor(matricula.estado)}
              >
                {matricula.estado.charAt(0).toUpperCase() + matricula.estado.slice(1)}
              </Badge>
            </div>
            
            <MatriculaCardInfo 
              direccion={matricula.direccion}
              fechaCreacion={matricula.fechaCreacion}
              tipoPropiedad={matricula.tipoPropiedad}
              estrato={matricula.estrato}
            />
          </div>

          <div className="text-right">
            <p className="text-xs text-muted-foreground mb-1">Estado</p>
            <p className="text-sm font-semibold text-foreground capitalize">
              {matricula.estado}
            </p>
          </div>
        </div>

        <div className="pt-3 border-t border-border">
          <p className="text-xs text-muted-foreground">
            Toca para ver detalles completos
          </p>
        </div>
      </div>
    </Card>
  );
};

export default MatriculaCard;

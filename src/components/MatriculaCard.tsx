import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Home } from "lucide-react";
import { Matricula } from "@/data/mockMatriculas";
import { useNavigate } from "react-router-dom";

interface MatriculaCardProps {
  matricula: Matricula;
}

const MatriculaCard = ({ matricula }: MatriculaCardProps) => {
  const navigate = useNavigate();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-CO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getEstadoBadgeVariant = (estado: string) => {
    switch (estado) {
      case 'activa':
        return 'default';
      case 'suspendida':
        return 'destructive';
      case 'inactiva':
        return 'secondary';
      default:
        return 'default';
    }
  };

  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case 'activa':
        return 'bg-success hover:bg-success/90';
      case 'suspendida':
        return 'bg-warning hover:bg-warning/90';
      case 'inactiva':
        return 'bg-muted hover:bg-muted/90';
      default:
        return '';
    }
  };

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
            
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>{matricula.direccion}</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4 text-primary" />
                <span>Creada: {formatDate(matricula.fechaCreacion)}</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Home className="w-4 h-4 text-primary" />
                <span className="capitalize">{matricula.tipoPropiedad} - Estrato {matricula.estrato}</span>
              </div>
            </div>
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

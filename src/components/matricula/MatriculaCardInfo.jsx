import { MapPin, Calendar, Home } from "lucide-react";
import { formatDate } from "@/lib/formatters";

const MatriculaCardInfo = ({ direccion, fechaCreacion, tipoPropiedad, estrato }) => {
  return (
    <div className="space-y-2">
      <div className="flex items-start gap-2 text-sm text-muted-foreground">
        <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
        <span>{direccion}</span>
      </div>
      
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Calendar className="w-4 h-4 text-primary" />
        <span>Creada: {formatDate(fechaCreacion)}</span>
      </div>

      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Home className="w-4 h-4 text-primary" />
        <span className="capitalize">{tipoPropiedad} - Estrato {estrato}</span>
      </div>
    </div>
  );
};

export default MatriculaCardInfo;

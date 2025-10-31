import { MapPin, User, Calendar, Home, Ruler } from "lucide-react";
import { formatDate } from "@/lib/formatters";

const MatriculaDetailInfo = ({
  direccion,
  customerName,
  customerId,
  fechaCreacion,
  tipoPropiedad,
  metrosCuadrados,
  estrato,
}) => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-primary mt-1" />
          <div>
            <p className="text-sm text-muted-foreground">Dirección</p>
            <p className="text-foreground font-medium">{direccion}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <User className="w-5 h-5 text-primary mt-1" />
          <div>
            <p className="text-sm text-muted-foreground">Propietario</p>
            <p className="text-foreground font-medium">{customerName}</p>
            <p className="text-sm text-muted-foreground">CC: {customerId}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Calendar className="w-5 h-5 text-primary mt-1" />
          <div>
            <p className="text-sm text-muted-foreground">Fecha de creación</p>
            <p className="text-foreground font-medium">{formatDate(fechaCreacion)}</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <Home className="w-5 h-5 text-primary mt-1" />
          <div>
            <p className="text-sm text-muted-foreground">Tipo de propiedad</p>
            <p className="text-foreground font-medium capitalize">{tipoPropiedad}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Ruler className="w-5 h-5 text-primary mt-1" />
          <div>
            <p className="text-sm text-muted-foreground">Área</p>
            <p className="text-foreground font-medium">{metrosCuadrados} m²</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-5 h-5 text-primary mt-1 flex items-center justify-center font-bold">
            E{estrato}
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Estrato</p>
            <p className="text-foreground font-medium">Estrato {estrato}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatriculaDetailInfo;

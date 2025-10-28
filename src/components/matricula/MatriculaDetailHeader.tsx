import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home } from "lucide-react";
import { getEstadoColor } from "@/lib/formatters";

interface MatriculaDetailHeaderProps {
  numeroMatricula: string;
  estado: string;
}

const MatriculaDetailHeader = ({ numeroMatricula, estado }: MatriculaDetailHeaderProps) => {
  return (
    <Card className="p-8 shadow-card">
      <div className="flex items-start justify-between gap-4 flex-wrap mb-6">
        <div className="flex items-center gap-4">
          <div className="p-4 bg-gradient-water rounded-2xl">
            <Home className="w-8 h-8 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              {numeroMatricula}
            </h1>
            <Badge className={getEstadoColor(estado)}>
              {estado.charAt(0).toUpperCase() + estado.slice(1)}
            </Badge>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MatriculaDetailHeader;

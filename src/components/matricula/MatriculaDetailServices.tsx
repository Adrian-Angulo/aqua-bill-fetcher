import { Card } from "@/components/ui/card";
import { Droplet } from "lucide-react";

interface MatriculaDetailServicesProps {
  servicios: string[];
}

const MatriculaDetailServices = ({ servicios }: MatriculaDetailServicesProps) => {
  return (
    <Card className="p-8 shadow-card">
      <div className="flex items-center gap-3 mb-6">
        <Droplet className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold text-foreground">
          Servicios contratados
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {servicios.map((servicio, index) => (
          <div 
            key={index}
            className="p-4 border-2 border-border rounded-lg bg-muted/30"
          >
            <p className="font-semibold text-foreground">{servicio}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default MatriculaDetailServices;

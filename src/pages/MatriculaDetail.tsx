import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Calendar, Home, User, Ruler, Droplet } from "lucide-react";
import { mockMatriculas } from "@/data/mockMatriculas";

const MatriculaDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const matricula = mockMatriculas.find(m => m.id === id);

  if (!matricula) {
    return (
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Matrícula no encontrada
          </h1>
          <Button onClick={() => navigate('/matriculas')}>
            Volver a búsqueda
          </Button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-CO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
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

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6 gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver
        </Button>

        <div className="space-y-6">
          {/* Header Card */}
          <Card className="p-8 shadow-card">
            <div className="flex items-start justify-between gap-4 flex-wrap mb-6">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-gradient-water rounded-2xl">
                  <Home className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-foreground mb-2">
                    {matricula.numeroMatricula}
                  </h1>
                  <Badge className={getEstadoColor(matricula.estado)}>
                    {matricula.estado.charAt(0).toUpperCase() + matricula.estado.slice(1)}
                  </Badge>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Dirección</p>
                    <p className="text-foreground font-medium">{matricula.direccion}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <User className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Propietario</p>
                    <p className="text-foreground font-medium">{matricula.customerName}</p>
                    <p className="text-sm text-muted-foreground">CC: {matricula.customerId}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Fecha de creación</p>
                    <p className="text-foreground font-medium">{formatDate(matricula.fechaCreacion)}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Home className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Tipo de propiedad</p>
                    <p className="text-foreground font-medium capitalize">{matricula.tipoPropiedad}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Ruler className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Área</p>
                    <p className="text-foreground font-medium">{matricula.metrosCuadrados} m²</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 text-primary mt-1 flex items-center justify-center font-bold">
                    E{matricula.estrato}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Estrato</p>
                    <p className="text-foreground font-medium">Estrato {matricula.estrato}</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Services Card */}
          <Card className="p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <Droplet className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">
                Servicios contratados
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {matricula.servicios.map((servicio, index) => (
                <div 
                  key={index}
                  className="p-4 border-2 border-border rounded-lg bg-muted/30"
                >
                  <p className="font-semibold text-foreground">{servicio}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Additional Info Card */}
          <Card className="p-8 shadow-card bg-gradient-flow">
            <div className="text-center text-primary-foreground">
              <h3 className="text-xl font-bold mb-2">
                Información adicional
              </h3>
              <p className="text-primary-foreground/90">
                Para más información sobre esta matrícula, por favor contacte con nuestras oficinas
                o consulte las facturas asociadas a esta dirección.
              </p>
              <Button 
                variant="secondary"
                className="mt-6"
                onClick={() => navigate('/facturas')}
              >
                Consultar facturas
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MatriculaDetail;

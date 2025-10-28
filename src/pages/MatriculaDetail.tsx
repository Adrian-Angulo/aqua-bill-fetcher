import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { mockMatriculas } from "@/data/mockMatriculas";
import MatriculaDetailHeader from "@/components/matricula/MatriculaDetailHeader";
import MatriculaDetailInfo from "@/components/matricula/MatriculaDetailInfo";
import MatriculaDetailServices from "@/components/matricula/MatriculaDetailServices";

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
          <MatriculaDetailHeader 
            numeroMatricula={matricula.numeroMatricula}
            estado={matricula.estado}
          />

          <Card className="p-8 shadow-card">
            <MatriculaDetailInfo 
              direccion={matricula.direccion}
              customerName={matricula.customerName}
              customerId={matricula.customerId}
              fechaCreacion={matricula.fechaCreacion}
              tipoPropiedad={matricula.tipoPropiedad}
              metrosCuadrados={matricula.metrosCuadrados}
              estrato={matricula.estrato}
            />
          </Card>

          <MatriculaDetailServices servicios={matricula.servicios} />

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

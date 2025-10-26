import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Share2, Eye } from "lucide-react";
import { Invoice } from "@/data/mockInvoices";
import { toast } from "@/hooks/use-toast";

interface InvoiceCardProps {
  invoice: Invoice;
}

const InvoiceCard = ({ invoice }: InvoiceCardProps) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-CO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleView = () => {
    toast({
      title: "Vista previa",
      description: "Abriendo factura en formato PDF...",
    });
    // Simulación de vista PDF
    window.open(`/invoice-preview/${invoice.id}`, '_blank');
  };

  const handleDownload = () => {
    toast({
      title: "Descargando",
      description: `Factura ${invoice.invoiceNumber} descargada exitosamente.`,
    });
    // Simulación de descarga
  };

  const handleShare = () => {
    const message = `Factura ${invoice.invoiceNumber} - ${formatCurrency(invoice.amount)} - ${invoice.period}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Card className="p-6 hover:shadow-water transition-all duration-300 border-border bg-card">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-3 flex-wrap">
            <h3 className="text-lg font-semibold text-foreground">
              {invoice.invoiceNumber}
            </h3>
            <Badge 
              variant={invoice.status === 'pagada' ? 'default' : 'destructive'}
              className={invoice.status === 'pagada' 
                ? 'bg-success hover:bg-success/90' 
                : 'bg-destructive hover:bg-destructive/90'
              }
            >
              {invoice.status === 'pagada' ? 'Pagada' : 'En Mora'}
            </Badge>
          </div>
          
          <div className="space-y-1 text-sm">
            <p className="text-muted-foreground">
              <span className="font-medium">Período:</span> {invoice.period}
            </p>
            <p className="text-muted-foreground">
              <span className="font-medium">Fecha:</span> {formatDate(invoice.date)}
            </p>
            <p className="text-foreground font-semibold text-lg">
              {formatCurrency(invoice.amount)}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleView}
            className="gap-2"
          >
            <Eye className="w-4 h-4" />
            Ver
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleDownload}
            className="gap-2"
          >
            <Download className="w-4 h-4" />
            Descargar
          </Button>
          <Button 
            size="sm"
            onClick={handleShare}
            className="gap-2 bg-gradient-water hover:opacity-90"
          >
            <Share2 className="w-4 h-4" />
            Compartir
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default InvoiceCard;

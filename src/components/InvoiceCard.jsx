import { Card } from "@/components/ui/card";
import { FileText, Calendar } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { formatCurrency, formatDate } from "@/lib/formatters";
import InvoiceCardHeader from "./invoice/InvoiceCardHeader";
import InvoiceCardActions from "./invoice/InvoiceCardActions";

const InvoiceCard = ({ invoice }) => {
  const handleView = () => {
    toast({
      title: "Vista previa",
      description: "Abriendo factura en formato PDF...",
    });
    window.open(`/invoice-preview/${invoice.id}`, '_blank');
  };

  const handleDownload = () => {
    toast({
      title: "Descargando",
      description: `Factura ${invoice.invoiceNumber} descargada exitosamente.`,
    });
  };

  const handleShare = () => {
    const message = `Factura ${invoice.invoiceNumber} - ${formatCurrency(invoice.amount)} - ${invoice.period}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Card className="p-6 hover:shadow-water transition-all duration-300 border-border bg-card">
      <div className="space-y-4">
        <InvoiceCardHeader 
          invoiceNumber={invoice.invoiceNumber}
          status={invoice.status}
        />

        <div className="flex items-start gap-4">
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <FileText className="w-4 h-4 text-primary" />
              <span className="font-medium">Período:</span> {invoice.period}
            </div>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="font-medium">Fecha:</span> {formatDate(invoice.date)}
            </div>
            
            <p className="text-foreground font-semibold text-xl pt-2">
              {formatCurrency(invoice.amount)}
            </p>
          </div>
        </div>

        <div className="pt-3 border-t border-border">
          <InvoiceCardActions 
            onView={handleView}
            onDownload={handleDownload}
            onShare={handleShare}
          />
        </div>
      </div>
    </Card>
  );
};

export default InvoiceCard;

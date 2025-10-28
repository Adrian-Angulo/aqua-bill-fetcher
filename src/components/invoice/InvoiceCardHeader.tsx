import { Badge } from "@/components/ui/badge";
import { getEstadoColor } from "@/lib/formatters";

interface InvoiceCardHeaderProps {
  invoiceNumber: string;
  status: string;
}

const InvoiceCardHeader = ({ invoiceNumber, status }: InvoiceCardHeaderProps) => {
  return (
    <div className="flex items-center justify-between gap-4 flex-wrap">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-2">
          Factura {invoiceNumber}
        </h3>
        <Badge className={getEstadoColor(status)}>
          {status === 'pagada' ? 'Pagada' : 'En Mora'}
        </Badge>
      </div>
    </div>
  );
};

export default InvoiceCardHeader;

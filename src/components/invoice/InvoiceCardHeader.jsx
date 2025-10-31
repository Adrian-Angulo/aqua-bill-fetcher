import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";
import { getEstadoColor } from "@/lib/formatters";

const InvoiceCardHeader = ({ invoiceNumber, status }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-gradient-water rounded-xl">
          <FileText className="w-5 h-5 text-primary-foreground" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">
          {invoiceNumber}
        </h3>
      </div>
      <Badge className={getEstadoColor(status)}>
        {status === 'pagada' ? 'Pagada' : 'En Mora'}
      </Badge>
    </div>
  );
};

export default InvoiceCardHeader;

import { Button } from "@/components/ui/button";
import { Eye, Download, Share2 } from "lucide-react";

const InvoiceCardActions = ({ onView, onDownload, onShare }) => {
  return (
    <div className="flex gap-2 flex-wrap">
      <Button 
        onClick={onView}
        variant="outline" 
        size="sm"
        className="flex-1 min-w-[100px] gap-2"
      >
        <Eye className="w-4 h-4" />
        Ver
      </Button>
      <Button 
        onClick={onDownload}
        variant="outline" 
        size="sm"
        className="flex-1 min-w-[100px] gap-2"
      >
        <Download className="w-4 h-4" />
        Descargar
      </Button>
      <Button 
        onClick={onShare}
        variant="outline" 
        size="sm"
        className="flex-1 min-w-[100px] gap-2"
      >
        <Share2 className="w-4 h-4" />
        Compartir
      </Button>
    </div>
  );
};

export default InvoiceCardActions;

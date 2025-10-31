import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FileText } from "lucide-react";
import { useSearchValidation } from "@/hooks/useSearchValidation";
import SearchPageLayout from "@/components/search/SearchPageLayout";
import SearchForm from "@/components/search/SearchForm";
import SearchExamples from "@/components/search/SearchExamples";

const InvoiceSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { validateInput, showEmptyFieldError, showInvalidFormatError } = useSearchValidation();

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      showEmptyFieldError();
      return;
    }

    if (!validateInput(searchTerm)) {
      showInvalidFormatError("código de factura");
      return;
    }

    navigate(`/facturas/resultados?q=${encodeURIComponent(searchTerm)}`);
  };

  const examples = ['1234567890', '9876543210', 'FAC-2024-001', 'FAC-2024-006'];

  return (
    <SearchPageLayout
      icon={FileText}
      title="Consulta de Facturas"
      subtitle="Sistema de consulta de facturación de acueducto"
    >
      <SearchForm
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onSearch={handleSearch}
        placeholder="Ej: 1234567890 o FAC-2024-001"
        label="Cédula o Código de Factura"
        helperText="Ingrese su número de cédula o el código de la factura"
      />
      
      <SearchExamples 
        examples={examples}
        onExampleClick={setSearchTerm}
      />
    </SearchPageLayout>
  );
};

export default InvoiceSearch;

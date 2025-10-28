import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Home } from "lucide-react";
import { useSearchValidation } from "@/hooks/useSearchValidation";
import SearchPageLayout from "@/components/search/SearchPageLayout";
import SearchForm from "@/components/search/SearchForm";
import SearchExamples from "@/components/search/SearchExamples";

const MatriculaSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { validateInput, showEmptyFieldError, showInvalidFormatError } = useSearchValidation();

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      showEmptyFieldError();
      return;
    }

    if (!validateInput(searchTerm)) {
      showInvalidFormatError("número de matrícula");
      return;
    }

    navigate(`/matriculas/resultados?q=${encodeURIComponent(searchTerm)}`);
  };

  const examples = ['1234567890', '9876543210', 'MAT-2020-1001', 'MAT-2023-3401'];

  return (
    <SearchPageLayout
      icon={Home}
      title="Consulta de Matrículas"
      subtitle="Sistema de consulta de matrículas y predios"
    >
      <SearchForm
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onSearch={handleSearch}
        placeholder="Ej: 1234567890 o MAT-2020-1001"
        label="Cédula o Número de Matrícula"
        helperText="Ingrese su número de cédula o el número de matrícula del predio"
      />
      
      <SearchExamples 
        examples={examples}
        onExampleClick={setSearchTerm}
      />
    </SearchPageLayout>
  );
};

export default MatriculaSearch;

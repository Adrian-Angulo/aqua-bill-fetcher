import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const SearchForm = ({
  searchTerm,
  onSearchTermChange,
  onSearch,
  placeholder,
  label,
  helperText,
}) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="search" className="text-sm font-medium text-foreground">
          {label}
        </label>
        <Input
          id="search"
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => onSearchTermChange(e.target.value)}
          onKeyPress={handleKeyPress}
          className="h-14 text-lg border-2 focus:border-primary transition-colors"
        />
        <p className="text-xs text-muted-foreground">
          {helperText}
        </p>
      </div>

      <Button 
        onClick={onSearch}
        size="lg"
        className="w-full h-14 text-lg bg-gradient-water hover:opacity-90 transition-all shadow-water gap-3"
      >
        <Search className="w-5 h-5" />
        Buscar
      </Button>
    </div>
  );
};

export default SearchForm;

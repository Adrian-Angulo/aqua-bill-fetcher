import { Button } from "@/components/ui/button";

const SearchExamples = ({ examples, onExampleClick }) => {
  return (
    <div className="mt-8 pt-6 border-t border-border">
      <h3 className="font-semibold text-foreground mb-3">Ejemplos para probar:</h3>
      <div className="flex flex-wrap gap-2">
        {examples.map((example) => (
          <Button
            key={example}
            variant="outline"
            size="sm"
            onClick={() => onExampleClick(example)}
            className="hover:bg-accent hover:text-accent-foreground"
          >
            {example}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SearchExamples;

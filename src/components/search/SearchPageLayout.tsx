import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, LucideIcon } from "lucide-react";

interface SearchPageLayoutProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  children: ReactNode;
}

const SearchPageLayout = ({ icon: Icon, title, subtitle, children }: SearchPageLayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-4 gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Button>

        <div className="bg-card rounded-3xl shadow-water p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-water rounded-2xl inline-block">
                <Icon className="w-12 h-12 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground">
              {subtitle}
            </p>
          </div>

          {children}
        </div>

        <div className="text-center mt-8 text-muted-foreground text-sm">
          <p>© 2024 Acueducto Municipal - Sistema de Consulta</p>
        </div>
      </div>
    </div>
  );
};

export default SearchPageLayout;

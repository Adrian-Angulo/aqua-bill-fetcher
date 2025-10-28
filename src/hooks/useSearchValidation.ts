import { toast } from "@/hooks/use-toast";

export const useSearchValidation = () => {
  const validateInput = (value: string): boolean => {
    const cleaned = value.replace(/[\s-]/g, '');
    
    if (!/^[A-Z0-9]+$/i.test(cleaned)) {
      return false;
    }
    
    if (cleaned.length < 5) {
      return false;
    }
    
    return true;
  };

  const showEmptyFieldError = () => {
    toast({
      title: "Campo vacío",
      description: "Por favor ingrese una cédula o código.",
      variant: "destructive",
    });
  };

  const showInvalidFormatError = (fieldType: string) => {
    toast({
      title: "Formato inválido",
      description: `Por favor ingrese un número de cédula válido (mínimo 5 dígitos) o ${fieldType}.`,
      variant: "destructive",
    });
  };

  return {
    validateInput,
    showEmptyFieldError,
    showInvalidFormatError,
  };
};

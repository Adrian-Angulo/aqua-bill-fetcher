export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('es-CO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const getEstadoColor = (estado: string): string => {
  switch (estado) {
    case 'activa':
    case 'pagada':
      return 'bg-success hover:bg-success/90';
    case 'suspendida':
    case 'mora':
      return 'bg-warning hover:bg-warning/90';
    case 'inactiva':
      return 'bg-muted hover:bg-muted/90';
    default:
      return '';
  }
};

export const mockInvoices = [
  {
    id: '1',
    invoiceNumber: 'FAC-2024-001',
    customerId: '1234567890',
    customerName: 'Juan Pérez García',
    date: '2024-01-15',
    amount: 45000,
    status: 'pagada',
    dueDate: '2024-01-30',
    period: 'Enero 2024'
  },
  {
    id: '2',
    invoiceNumber: 'FAC-2024-002',
    customerId: '1234567890',
    customerName: 'Juan Pérez García',
    date: '2024-02-15',
    amount: 52000,
    status: 'mora',
    dueDate: '2024-02-29',
    period: 'Febrero 2024'
  },
  {
    id: '3',
    invoiceNumber: 'FAC-2024-003',
    customerId: '1234567890',
    customerName: 'Juan Pérez García',
    date: '2024-03-15',
    amount: 48000,
    status: 'pagada',
    dueDate: '2024-03-30',
    period: 'Marzo 2024'
  },
  {
    id: '4',
    invoiceNumber: 'FAC-2024-004',
    customerId: '9876543210',
    customerName: 'María López Rodríguez',
    date: '2024-01-15',
    amount: 38000,
    status: 'pagada',
    dueDate: '2024-01-30',
    period: 'Enero 2024'
  },
  {
    id: '5',
    invoiceNumber: 'FAC-2024-005',
    customerId: '9876543210',
    customerName: 'María López Rodríguez',
    date: '2024-02-15',
    amount: 41000,
    status: 'pagada',
    dueDate: '2024-02-29',
    period: 'Febrero 2024'
  },
  {
    id: '6',
    invoiceNumber: 'FAC-2024-006',
    customerId: '5555666677',
    customerName: 'Carlos Martínez Soto',
    date: '2024-03-15',
    amount: 65000,
    status: 'mora',
    dueDate: '2024-03-30',
    period: 'Marzo 2024'
  }
];

export const searchInvoices = (searchTerm) => {
  const normalizedSearch = searchTerm.trim().toUpperCase();
  
  return mockInvoices.filter(invoice => 
    invoice.customerId.includes(normalizedSearch) || 
    invoice.invoiceNumber.toUpperCase().includes(normalizedSearch)
  );
};

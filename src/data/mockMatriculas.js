export const mockMatriculas = [
  {
    id: '1',
    numeroMatricula: 'MAT-2020-1001',
    customerId: '1234567890',
    customerName: 'Juan Pérez García',
    direccion: 'Calle 45 #23-67, Barrio Centro',
    estado: 'activa',
    fechaCreacion: '2020-03-15',
    estrato: 3,
    tipoPropiedad: 'residencial',
    metrosCuadrados: 120,
    servicios: ['Agua', 'Alcantarillado', 'Aseo']
  },
  {
    id: '2',
    numeroMatricula: 'MAT-2021-1502',
    customerId: '1234567890',
    customerName: 'Juan Pérez García',
    direccion: 'Carrera 12 #89-34, Barrio Norte',
    estado: 'activa',
    fechaCreacion: '2021-07-22',
    estrato: 4,
    tipoPropiedad: 'comercial',
    metrosCuadrados: 85,
    servicios: ['Agua', 'Alcantarillado']
  },
  {
    id: '3',
    numeroMatricula: 'MAT-2019-0845',
    customerId: '9876543210',
    customerName: 'María López Rodríguez',
    direccion: 'Avenida 8 #45-12, Barrio Los Pinos',
    estado: 'activa',
    fechaCreacion: '2019-11-08',
    estrato: 2,
    tipoPropiedad: 'residencial',
    metrosCuadrados: 95,
    servicios: ['Agua', 'Alcantarillado', 'Aseo']
  },
  {
    id: '4',
    numeroMatricula: 'MAT-2022-2103',
    customerId: '9876543210',
    customerName: 'María López Rodríguez',
    direccion: 'Calle 78 #34-21, Barrio El Bosque',
    estado: 'suspendida',
    fechaCreacion: '2022-02-14',
    estrato: 3,
    tipoPropiedad: 'residencial',
    metrosCuadrados: 110,
    servicios: ['Agua', 'Alcantarillado']
  },
  {
    id: '5',
    numeroMatricula: 'MAT-2023-3401',
    customerId: '5555666677',
    customerName: 'Carlos Martínez Soto',
    direccion: 'Carrera 15 #90-45, Zona Industrial',
    estado: 'activa',
    fechaCreacion: '2023-05-10',
    estrato: 6,
    tipoPropiedad: 'industrial',
    metrosCuadrados: 450,
    servicios: ['Agua', 'Alcantarillado']
  },
  {
    id: '6',
    numeroMatricula: 'MAT-2018-0234',
    customerId: '5555666677',
    customerName: 'Carlos Martínez Soto',
    direccion: 'Calle 23 #12-34, Centro Comercial',
    estado: 'inactiva',
    fechaCreacion: '2018-09-20',
    estrato: 5,
    tipoPropiedad: 'comercial',
    metrosCuadrados: 200,
    servicios: ['Agua']
  }
];

export const searchMatriculas = (searchTerm) => {
  const normalizedSearch = searchTerm.trim().toUpperCase();
  
  return mockMatriculas.filter(matricula => 
    matricula.customerId.includes(normalizedSearch) || 
    matricula.numeroMatricula.toUpperCase().includes(normalizedSearch)
  );
};

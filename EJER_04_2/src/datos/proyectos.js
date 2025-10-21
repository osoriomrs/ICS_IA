const proyectos = [
  {
    id: 'proj-001',
    titulo: 'Migración a la Nube',
    descripcion: 'Mover todos los servicios del servidor local a una plataforma en la nube antes de fin de mes.',
    estado: 'En Progreso',
    responsables: [
      { id: 'u1', nombre: 'Carlos' },
      { id: 'u2', nombre: 'Beatriz' }
    ],
    prioridad: 'Alta'
  },
  {
    id: 'proj-002',
    titulo: 'Rediseño Web',
    descripcion: 'Actualizar el diseño del sitio web corporativo con nuevas directrices de branding.',
    estado: 'Pendiente',
    responsables: [{ id: 'u3', nombre: 'Ana' }],
    prioridad: 'Media'
  },
  {
    id: 'proj-003',
    titulo: 'Campaña de Marketing',
    descripcion: 'Lanzar la campaña de marketing para el nuevo producto.',
    estado: 'En Progreso',
    responsables: [{ id: 'u4', nombre: 'Javier' }],
    prioridad: 'Alta'
  },
  {
    id: 'proj-004',
    titulo: 'Auditoría de Seguridad',
    descripcion: 'Revisar la seguridad de todos los sistemas internos y externos.',
    estado: 'Pendiente',
    responsables: [{ id: 'u2', nombre: 'Beatriz' }],
    prioridad: 'Alta'
  },
  {
    id: 'proj-005',
    titulo: 'Integración CRM',
    descripcion: 'Integrar el nuevo sistema CRM con las bases de datos existentes.',
    estado: 'Completado',
    responsables: [{ id: 'u5', nombre: 'Lucía' }],
    prioridad: 'Media'
  },
  {
    id: 'proj-006',
    titulo: 'Formación Interna',
    descripcion: 'Capacitar al equipo en nuevas herramientas de productividad.',
    estado: 'Pendiente',
    responsables: [{ id: 'u1', nombre: 'Carlos' }],
    prioridad: 'Baja'
  },
  {
    id: 'proj-007',
    titulo: 'Optimización SEO',
    descripcion: 'Mejorar el posicionamiento en buscadores de la página web.',
    estado: 'En Progreso',
    responsables: [{ id: 'u3', nombre: 'Ana' }],
    prioridad: 'Media'
  },
  {
    id: 'proj-008',
    titulo: 'Actualización de Hardware',
    descripcion: 'Actualizar los equipos del departamento de diseño gráfico.',
    estado: 'Pendiente',
    responsables: [{ id: 'u6', nombre: 'Miguel' }],
    prioridad: 'Alta'
  },
  {
    id: 'proj-009',
    titulo: 'Plan de Contingencia',
    descripcion: 'Crear un plan de contingencia ante fallos críticos del sistema.',
    estado: 'Completado',
    responsables: [{ id: 'u4', nombre: 'Javier' }],
    prioridad: 'Alta'
  },
  {
    id: 'proj-010',
    titulo: 'Análisis de Competencia',
    descripcion: 'Realizar un análisis detallado de competidores clave en el mercado.',
    estado: 'Pendiente',
    responsables: [{ id: 'u5', nombre: 'Lucía' }],
    prioridad: 'Media'
  }
];

export default proyectos;
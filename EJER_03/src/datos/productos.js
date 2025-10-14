export const productos = [
  {
    id: 1,
    nombre: 'Smartwatch Pro X',
    vendedor: {
      nombre: 'ElectroHub',
      rating: 4.8
    },
    imagenes: [
      'https://m.media-amazon.com/images/I/412K1grWKEL._UF1000,1000_QL80_.jpg',
    ],
    enStock: true,
    precio: {
      moneda: '€',
      valor: 215.50,
      enOferta: true
    },
    caracteristicas: ['GPS integrado', 'Monitor de ritmo cardíaco', 'Resistente al agua (5 ATM)']
  },
  {
    id: 2,
    nombre: 'Auriculares Bluetooth',
    vendedor: {
      nombre: 'AudioTech',
      rating: 4.5
    },
    imagenes: [
      'https://m.media-amazon.com/images/I/710Lppy-fzL.jpg',
    ],
    enStock: false,
    precio: {
      moneda: '€',
      valor: 89.99,
      enOferta: false
    },
    caracteristicas: ['Cancelación de ruido', 'Hasta 20 horas de batería', 'Conectividad NFC']
  },
  {
    id: 3,
    nombre: 'Cámara de Acción 4K',
    vendedor: {
      nombre: 'FotoPro',
      rating: 4.7
    },
    imagenes: [
      'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_92306954?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402',
    ],
    enStock: true,
    precio: {
      moneda: '€',
      valor: 349.99,
      enOferta: true
    },
    caracteristicas: ['Resolución 4K', 'Estabilización de imagen', 'Resistente al agua']
  }];

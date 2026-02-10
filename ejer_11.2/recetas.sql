CREATE DATABASE blog_recetas;
USE blog_recetas;

CREATE TABLE recetas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  descripcion_corta TEXT NOT NULL,
  ingredientes TEXT NOT NULL,
  instrucciones TEXT NOT NULL,
  tiempo_coccion VARCHAR(50) NOT NULL,
  fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE comentarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  receta_id INT NOT NULL,
  autor VARCHAR(100) NOT NULL,
  texto TEXT NOT NULL,
  fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (receta_id) REFERENCES recetas(id) ON DELETE CASCADE
);

INSERT INTO comentarios (id, receta_id, autor, texto, fecha_creacion) VALUES
(7, 1, 'Ana', '¡Deliciosa receta, me encantó la Carbonara!', NOW()),
(8, 1, 'Carlos', 'La hice con panceta ahumada y quedó perfecta.', NOW()),
(3, 2, 'Lucía', 'Muy fáciles de preparar y riquísimos los tacos.', NOW()),
(4, 3, 'Miguel', 'El aderezo César quedó fenomenal, gracias por la receta.', NOW()),
(5, 4, 'Sofía', 'Los brownies salieron súper húmedos y chocolateados.', NOW()),
(6, 5, 'Javier', 'Perfecta sopa para los días fríos, muy nutritiva.', NOW());

INSERT INTO recetas (id, titulo, descripcion_corta, ingredientes, instrucciones, tiempo_coccion, fecha_creacion) VALUES
(6, 'Spaghetti Carbonara', 'Pasta clásica italiana con salsa cremosa de huevo y panceta', 'Spaghetti, Huevos, Panceta, Queso parmesano, Pimienta negra', 'Cocinar pasta, dorar panceta, mezclar con huevos y queso, combinar con la pasta', '25 minutos', NOW()),
(7, 'Tacos de Pollo', 'Tacos mexicanos con pollo sazonado y verduras frescas', 'Tortillas, Pechuga de pollo, Lechuga, Tomate, Queso, Salsa', 'Cocinar el pollo con especias, armar tacos con verduras y salsa', '30 minutos', NOW()),
(3, 'Ensalada César', 'Ensalada fresca con aderezo clásico César', 'Lechuga romana, Pollo a la plancha, Croutons, Queso parmesano, Aderezo César', 'Mezclar ingredientes y añadir aderezo', '15 minutos', NOW()),
(4, 'Brownies de Chocolate', 'Postre dulce y chocolatoso con textura húmeda', 'Chocolate, Harina, Azúcar, Mantequilla, Huevos, Esencia de vainilla', 'Derretir chocolate y mantequilla, mezclar con huevos y harina, hornear', '40 minutos', NOW()),
(5, 'Sopa de Lentejas', 'Sopa nutritiva y reconfortante de lentejas con verduras', 'Lentejas, Zanahoria, Cebolla, Ajo, Caldo de verduras, Especias', 'Cocinar lentejas con verduras y especias hasta que estén tiernas', '50 minutos', NOW());

select*from recetas;
select*from comentarios;

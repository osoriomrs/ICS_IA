import pool from "./db";

export async function getAllRecetas() {
  const [rows] = await pool.query("SELECT * FROM recetas ORDER BY fecha_creacion DESC");
  return rows;
}

export async function getRecetaById(id) {
  const [rows] = await pool.query("SELECT * FROM recetas WHERE id = ?", [id]);
  return rows[0];
}

export async function createReceta(data) {
  const { titulo, descripcion_corta, ingredientes, instrucciones, tiempo_coccion } = data;
  const [result] = await pool.query(
    "INSERT INTO recetas (titulo, descripcion_corta, ingredientes, instrucciones, tiempo_coccion, fecha_creacion) VALUES (?, ?, ?, ?, ?, NOW())",
    [titulo, descripcion_corta, ingredientes, instrucciones, tiempo_coccion]
  );
  return result.insertId;
}

export async function updateReceta(id, data) {
  const { titulo, descripcion_corta, ingredientes, instrucciones, tiempo_coccion } = data;
  await pool.query(
    "UPDATE recetas SET titulo=?, descripcion_corta=?, ingredientes=?, instrucciones=?, tiempo_coccion=? WHERE id=?",
    [titulo, descripcion_corta, ingredientes, instrucciones, tiempo_coccion, id]
  );
}

export async function deleteReceta(id) {
  await pool.query("DELETE FROM recetas WHERE id=?", [id]);
  await pool.query("DELETE FROM comentarios WHERE receta_id=?", [id]);
}

export async function getComentariosByRecetaId(recetaId) {
  const [rows] = await pool.query("SELECT * FROM comentarios WHERE receta_id=? ORDER BY fecha_creacion DESC", [recetaId]);
  return rows;
}

export async function addComentario(recetaId, autor, texto) {
  await pool.query(
    "INSERT INTO comentarios (receta_id, autor, texto, fecha_creacion) VALUES (?, ?, ?, NOW())",
    [recetaId, autor, texto]
  );
}

const mongoose = require('mongoose');
const createSchema = require('../utils/schema'); // Utilizamos la plantilla genérica para esquemas

const usuarioSchema = createSchema({
  nombre: { type: String, required: true },
  correo: { type: String, unique: true, required: true },
  rol: { type: String, enum: ['SUPER_ADMIN', 'PAÑOLERO', 'COORDINADOR', 'DOCENTE', 'ALUMNO'], required: true },
});

module.exports = mongoose.model('Usuario', usuarioSchema);

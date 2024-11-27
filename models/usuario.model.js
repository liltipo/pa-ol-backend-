const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  correo: { type: String, unique: true, required: true },
  rol: { type: String, enum: ['SUPER_ADMIN', 'PAÑOLERO', 'COORDINADOR', 'DOCENTE', 'ALUMNO'], required: true },
});

module.exports = mongoose.model('Usuario', UsuarioSchema);

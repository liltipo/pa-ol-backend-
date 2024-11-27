const mongoose = require('mongoose');
const createSchema = require('../utils/schema');

const prestamoSchema = createSchema({
  solicitudId: { type: mongoose.Schema.Types.ObjectId, ref: 'Solicitud', required: true },
  fechaInicio: { type: Date, default: Date.now },
  fechaDevolucion: { type: Date },
  estado: { type: String, enum: ['EN_CURSO', 'DEVUELTO'], default: 'EN_CURSO' },
});

module.exports = mongoose.model('Prestamo', prestamoSchema);

const mongoose = require('mongoose');
const createSchema = require('../utils/schema'); // Plantilla genérica para esquemas

const solicitudSchema = createSchema({
  usuarioId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario', // Relación con el modelo Usuario
    required: true,
  },
  estado: {
    type: String,
    enum: ['PENDIENTE', 'APROBADA', 'RECHAZADA'], // Estados permitidos
    default: 'PENDIENTE',
    required: true,
  },
  fechaCreacion: {
    type: Date,
    default: Date.now, // Fecha automática de creación
  },
  prestamoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Prestamo', // Relación opcional con el modelo Prestamo
    default: null,
  },
});

module.exports = mongoose.model('Solicitud', solicitudSchema);

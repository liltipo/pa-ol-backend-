const mongoose = require('mongoose');

const SolicitudSchema = new mongoose.Schema({
  usuarioId: {
    type: mongoose.Schema.Types.ObjectId, // Relación con el usuario que realiza la solicitud
    ref: 'Usuario', // Nombre del modelo de la clase relacionada (Usuario)
    required: true
  },
  estado: {
    type: String,
    enum: ['PENDIENTE', 'APROBADA', 'RECHAZADA'],
    default: 'PENDIENTE',
    required: true
  },
  fechaCreacion: {
    type: Date,
    default: Date.now
  },
  prestamoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Prestamo', // Nombre del modelo de la clase relacionada (Préstamo)
    default: null
  },
});

module.exports = mongoose.model('Solicitud', SolicitudSchema);

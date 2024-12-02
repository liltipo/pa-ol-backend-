const mongoose = require('mongoose');
const createSchema = require('../utils/schema'); // Plantilla genérica para esquemas

const ProductoSchema = createSchema({
  nombre: {
    type: String,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
  },
  detalle: {
    type: String,
    required: false, // Opcional
  },
  cantidad: {
    type: Number,
    required: true,
    min: 0, // No se permiten valores negativos
  },
  imagen: {
    type: String, // URL de la imagen
    required: false, // Opcional
  },
}, { timestamps: true });

module.exports = mongoose.model('Producto', ProductoSchema);

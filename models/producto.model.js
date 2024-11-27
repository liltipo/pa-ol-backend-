const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    required: true,
    min: 0
  },
/*   imagen: {
    type: String,  // URL o ruta de la imagen
    required: false
  } */
});

module.exports = mongoose.model('Producto', ProductoSchema);

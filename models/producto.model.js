const mongoose = require('mongoose');
const createSchema = require('../utils/schema');

const productoSchema = createSchema({
  nombre: { type: String, required: true },
  stock: { type: Number, required: true, min: 0 },
});

module.exports = mongoose.model('Producto', productoSchema);

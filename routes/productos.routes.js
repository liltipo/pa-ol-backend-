const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productos.controller');

// Rutas de Productos
router.get('/', productosController.getProductos); // Obtener todos los productos
router.post('/', productosController.crearProducto); // Crear un producto
router.get('/:id', productosController.getProductoPorId); // Obtener producto por ID
router.put('/:id', productosController.actualizarProducto); // Actualizar producto
router.delete('/:id', productosController.eliminarProducto); // Eliminar producto

module.exports = router;

const express = require('express');
const router = express.Router();
const prestamosController = require('../controllers/prestamos.controller');

router.post('/', prestamosController.crearPrestamo); // Crear préstamo a partir de solicitud aprobada
router.put('/:id/devolver', prestamosController.devolverPrestamo); // Devolver préstamo

module.exports = router;

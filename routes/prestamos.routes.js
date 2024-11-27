const express = require('express');
const Prestamo = require('../models/prestamo.model');
const createResolvers = require('../utils/resolvers');
const prestamosController = require('../controllers/prestamos.controller');

const router = express.Router();
const resolvers = createResolvers(Prestamo);

// CRUD estándar
router.get('/', resolvers.getAll);
router.get('/:id', resolvers.getById);
router.post('/', resolvers.create);
router.put('/:id', resolvers.update);
router.delete('/:id', resolvers.delete);

// Operación personalizada
router.put('/:id/devolver', prestamosController.devolverPrestamo);

module.exports = router;

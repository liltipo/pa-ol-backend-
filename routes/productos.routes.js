const express = require('express');
const Producto = require('../models/producto.model');
const createResolvers = require('../utils/resolvers');

const router = express.Router();
const resolvers = createResolvers(Producto);

// CRUD estándar
router.get('/', resolvers.getAll);
router.get('/:id', resolvers.getById);
router.post('/', resolvers.create);
router.put('/:id', resolvers.update);
router.delete('/:id', resolvers.delete);

module.exports = router;

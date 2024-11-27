const express = require('express');
const Solicitud = require('../models/solicitud.model');
const createResolvers = require('../utils/resolvers');

const router = express.Router();
const resolvers = createResolvers(Solicitud);

// CRUD estándar
router.get('/', resolvers.getAll);
router.get('/:id', resolvers.getById);
router.post('/', resolvers.create);
router.put('/:id', resolvers.update);
router.delete('/:id', resolvers.delete);

module.exports = router;

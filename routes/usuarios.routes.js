const express = require('express');
const Usuario = require('../models/usuario.model');
const createResolvers = require('../utils/resolvers');
const usuariosController = require('../controllers/usuarios.controller');

const router = express.Router();
const resolvers = createResolvers(Usuario);

// CRUD estándar
router.get('/', resolvers.getAll);
router.get('/:id', resolvers.getById);
router.post('/', resolvers.create);
router.put('/:id', resolvers.update);
router.delete('/:id', resolvers.delete);

// Operación personalizada
router.put('/:id/cambiarRol', usuariosController.cambiarRol);

module.exports = router;

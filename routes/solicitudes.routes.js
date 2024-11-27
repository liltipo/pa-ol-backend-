const express = require('express');
const router = express.Router();
const solicitudesController = require('../controllers/solicitudes.controller');

// Rutas para manejar solicitudes
router.get('/', solicitudesController.getSolicitudes); // Obtener todas las solicitudes
router.post('/', solicitudesController.crearSolicitud); // Crear una nueva solicitud
router.get('/:id', solicitudesController.getSolicitudPorId); // Obtener solicitud por ID
router.put('/:id', solicitudesController.actualizarSolicitud); // Actualizar solicitud por ID
router.delete('/:id', solicitudesController.eliminarSolicitud); // Eliminar solicitud por ID

module.exports = router;

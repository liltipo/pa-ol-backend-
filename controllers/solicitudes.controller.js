const Solicitud = require('../models/solicitud.model');

// Crear una nueva solicitud
exports.crearSolicitud = async (req, res) => {
  try {
    const nuevaSolicitud = new Solicitud({
      usuarioId: req.body.usuarioId,  // Usuario que realiza la solicitud
      productos: req.body.productos,  // Lista de productos solicitados
    });

    // Guardar la solicitud en la base de datos
    await nuevaSolicitud.save();

    // Responder con la solicitud creada
    res.status(201).json(nuevaSolicitud);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear solicitud', error });
  }
};

// Obtener todas las solicitudes
exports.getSolicitudes = async (req, res) => {
  try {
    const solicitudes = await Solicitud.find();
    res.status(200).json(solicitudes);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener solicitudes', error });
  }
};

// Obtener una solicitud por ID
exports.getSolicitudPorId = async (req, res) => {
  try {
    const solicitud = await Solicitud.findById(req.params.id);
    if (!solicitud) return res.status(404).json({ mensaje: 'Solicitud no encontrada' });
    res.status(200).json(solicitud);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener solicitud', error });
  }
};

// Actualizar una solicitud
exports.actualizarSolicitud = async (req, res) => {
  try {
    const solicitudActualizada = await Solicitud.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!solicitudActualizada) return res.status(404).json({ mensaje: 'Solicitud no encontrada' });
    res.status(200).json(solicitudActualizada);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar solicitud', error });
  }
};

// Eliminar una solicitud
exports.eliminarSolicitud = async (req, res) => {
  try {
    const solicitudEliminada = await Solicitud.findByIdAndDelete(req.params.id);
    if (!solicitudEliminada) return res.status(404).json({ mensaje: 'Solicitud no encontrada' });
    res.status(200).json({ mensaje: 'Solicitud eliminada', solicitud: solicitudEliminada });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar solicitud', error });
  }
};

const Prestamo = require('../models/prestamo.model');
const Solicitud = require('../models/solicitud.model');

// Crear un préstamo a partir de una solicitud aprobada
exports.crearPrestamo = async (req, res) => {
  try {
    const solicitud = await Solicitud.findById(req.body.solicitudId);
    if (!solicitud) return res.status(404).json({ mensaje: 'Solicitud no encontrada' });

    // Verificar que la solicitud esté aprobada
    if (solicitud.estado !== 'APROBADA') {
      return res.status(400).json({ mensaje: 'La solicitud debe estar aprobada para crear un préstamo' });
    }

    // Crear el préstamo
    const nuevoPrestamo = new Prestamo({
      solicitudId: solicitud._id,
      fechaInicio: new Date(),
      estado: 'EN_CURSO'
    });

    await nuevoPrestamo.save();

    // Actualizar la solicitud con el préstamo generado
    solicitud.prestamoId = nuevoPrestamo._id;
    await solicitud.save();

    res.status(201).json(nuevoPrestamo);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear préstamo', error });
  }
};

// Actualizar estado de préstamo (Devolución)
exports.devolverPrestamo = async (req, res) => {
  try {
    const prestamo = await Prestamo.findById(req.params.id);
    if (!prestamo) return res.status(404).json({ mensaje: 'Préstamo no encontrado' });

    prestamo.estado = 'DEVUELTO';
    prestamo.fechaDevolucion = new Date();

    // Actualizar la cantidad de stock en Inventario (si es necesario)
    // Aquí puedes actualizar el stock de los productos asociados al préstamo, si lo deseas.

    await prestamo.save();
    res.status(200).json(prestamo);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al devolver préstamo', error });
  }
};

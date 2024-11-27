exports.devolverPrestamo = async (req, res) => {
  try {
    const { id } = req.params;

    const prestamo = await Prestamo.findById(id);
    if (!prestamo) return res.status(404).json({ mensaje: 'Préstamo no encontrado' });

    if (prestamo.estado === 'DEVUELTO') {
      return res.status(400).json({ mensaje: 'El préstamo ya ha sido devuelto' });
    }

    prestamo.estado = 'DEVUELTO';
    prestamo.fechaDevolucion = new Date();
    await prestamo.save();

    res.status(200).json(prestamo);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al devolver préstamo', error });
  }
};

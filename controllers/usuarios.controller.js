exports.cambiarRol = async (req, res) => {
  try {
    const { id } = req.params;
    const { nuevoRol } = req.body;

    const rolesPermitidos = ['SUPER_ADMIN', 'PAÑOLERO', 'COORDINADOR', 'DOCENTE', 'ALUMNO'];
    if (!rolesPermitidos.includes(nuevoRol)) {
      return res.status(400).json({ mensaje: 'Rol no permitido' });
    }

    const usuario = await Usuario.findByIdAndUpdate(id, { rol: nuevoRol }, { new: true });
    if (!usuario) return res.status(404).json({ mensaje: 'Usuario no encontrado' });

    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al cambiar el rol', error });
  }
};

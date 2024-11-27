const Usuario = require('../models/usuario.model');
const Solicitud = require('../models/solicitud.model');

const resolvers = {
  Query: {
    usuarios: async () => await Usuario.find(),
    usuario: async (_, { id }) => await Usuario.findById(id),
    solicitudes: async () => await Solicitud.find(),
    solicitud: async (_, { id }) => await Solicitud.findById(id),
  },
  Mutation: {
    crearUsuario: async (_, { nombre, correo, rol }) => {
      const usuario = new Usuario({ nombre, correo, rol });
      return await usuario.save();
    },
    actualizarUsuario: async (_, { id, ...data }) => {
      return await Usuario.findByIdAndUpdate(id, data, { new: true });
    },
    eliminarUsuario: async (_, { id }) => {
      return await Usuario.findByIdAndDelete(id);
    },
    crearSolicitud: async (_, { usuarioId, estado }) => {
      const solicitud = new Solicitud({ usuarioId, estado });
      return await solicitud.save();
    },
    actualizarSolicitud: async (_, { id, estado }) => {
      return await Solicitud.findByIdAndUpdate(id, { estado }, { new: true });
    },
    eliminarSolicitud: async (_, { id }) => {
      return await Solicitud.findByIdAndDelete(id);
    },
  },
};

module.exports = resolvers;

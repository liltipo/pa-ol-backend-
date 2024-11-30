const Usuario = require('../models/usuario.model');
const Solicitud = require('../models/solicitud.model');
const Producto = require('../models/producto.model');

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
    crearProducto: async (_, { nombre, categoria, detalle, cantidad, imagen }) => {
      const nuevoProducto = new Producto({ nombre, categoria, detalle, cantidad, imagen });
      return await nuevoProducto.save();
    },
    actualizarProducto: async (_, { id, nombre, categoria, detalle, cantidad, imagen }) => {
      try {
        const actualizaciones = { nombre, categoria, detalle, cantidad, imagen };
        // Filtra campos no definidos para evitar sobreescribir valores con "undefined"
        Object.keys(actualizaciones).forEach(key => {
          if (actualizaciones[key] === undefined) delete actualizaciones[key];
        });

        const productoActualizado = await Producto.findByIdAndUpdate(id, actualizaciones, { new: true });
        if (!productoActualizado) {
          throw new Error('Producto no encontrado');
        }

        return productoActualizado;
      } catch (error) {
        throw new Error(`Error al actualizar el producto: ${error.message}`);
      }
    },
  },
};

module.exports = resolvers;

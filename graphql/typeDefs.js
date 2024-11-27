const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # Definición del tipo Usuario
  type Usuario {
    id: ID!
    nombre: String!
    correo: String!
    rol: String!
  }

  # Definición del tipo Solicitud
  type Solicitud {
    id: ID!
    usuarioId: ID!
    estado: String!
    fechaCreacion: String!
    prestamoId: ID
  }

  # Operaciones de consulta (Query)
  type Query {
    usuarios: [Usuario]
    usuario(id: ID!): Usuario
    solicitudes: [Solicitud]
    solicitud(id: ID!): Solicitud
  }

  # Operaciones de modificación (Mutation)
  type Mutation {
    crearUsuario(nombre: String!, correo: String!, rol: String!): Usuario
    actualizarUsuario(id: ID!, nombre: String, correo: String, rol: String): Usuario
    eliminarUsuario(id: ID!): Usuario

    crearSolicitud(usuarioId: ID!, estado: String): Solicitud
    actualizarSolicitud(id: ID!, estado: String): Solicitud
    eliminarSolicitud(id: ID!): Solicitud
  }
`;

module.exports = typeDefs;

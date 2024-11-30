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

  # Definición del tipo Producto
  type Producto {
    id: ID!
    nombre: String!
    categoria: String!
    detalle: String
    cantidad: Int!
    imagen: String
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
    
    crearProducto(nombre: String!, categoria: String!, detalle: String, cantidad: Int!, imagen: String): Producto
    actualizarProducto(id: ID!, nombre: String, categoria: String, detalle: String, cantidad: Int, imagen: String): Producto
  }
`;

module.exports = typeDefs;

# Sistema de Gestión de Pañol (Backend)

Este es el backend para un sistema de gestión de pañol, diseñado para administrar préstamos, usuarios, solicitudes y productos en una base de datos MongoDB. Proporciona una API RESTful desarrollada con **Node.js**, **Express** y **MongoDB**.

### Características

- **Gestión de Usuarios**: CRUD completo para usuarios, incluyendo roles como `ALUMNO`, `DOCENTE`, `PAÑOLERO`, etc.
- **Gestión de Solicitudes**: Permite la creación y gestión de solicitudes de productos.
- **Gestión de Préstamos**: Asociación entre solicitudes aprobadas y préstamos.
- **Gestión de Productos**: CRUD completo para los productos disponibles en el pañol.

---

### Tecnologías Usadas

- **Node.js**
- **Express**
- **MongoDB**
- **Mongoose**
- **Postman** (para pruebas)

---

## Endpoints de la API

A continuación, se describe una muestra de los endpoints disponibles:

### **Usuarios**

| Método | Endpoint          | Descripción                         |
|--------|-------------------|-------------------------------------|
| GET    | `/usuarios`        | Obtener todos los usuarios.         |
| GET    | `/usuarios/:id`    | Obtener un usuario por ID.          |
| POST   | `/usuarios`        | Crear un nuevo usuario.             |
| PUT    | `/usuarios/:id`    | Actualizar un usuario por ID.       |
| DELETE | `/usuarios/:id`    | Eliminar un usuario por ID.         |

**Ejemplo de Body para POST `/usuarios`**:
```json
{
  "nombre": "Juan Pérez",
  "correo": "juan.perez@example.com",
  "rol": "ALUMNO"
}
```

Existen métodos y endpoints similares para **Préstamos**, **Productos** y **Solicitudes**. Además de controladores personalizados para **Usuarios** y **Préstamos**.

### API GraphQL

Además de la API REST, el sistema también proporciona una API GraphQL que te permite hacer consultas y mutaciones para obtener y manipular datos de usuarios, solicitudes, productos y préstamos.

**Acceso a GraphQL** 

GraphQL está disponible en el endpoint:

```bash
http://localhost:5000/graphql

```

**Ejemplo de Consulta (Query) de GraphQL:**

```
query {
  usuarios {
    id
    nombre
    correo
    rol
  }
}
```

**Ejemplo de Mutación (Mutation) de GraphQL::**

```
mutation {
  crearUsuario(nombre: "Carlos López", correo: "carlos.lopez@example.com", rol: "ALUMNO") {
    id
    nombre
    correo
    rol
  }
}
```

**Consultas y Mutaciones Disponibles**

| Operación          | Tipo     | Descripción                           |
|--------------------|----------|---------------------------------------|
| `usuarios`         | Query    | Obtener todos los usuarios.          |
| `usuario(id: ID!)` | Query    | Obtener un usuario por ID.           |
| `solicitudes`      | Query    | Obtener todas las solicitudes.       |
| `solicitud(id: ID!)` | Query  | Obtener una solicitud por ID.        |
| `crearUsuario`     | Mutation | Crear un nuevo usuario.              |
| `actualizarUsuario`| Mutation | Actualizar un usuario por ID.        |
| `eliminarUsuario`  | Mutation | Eliminar un usuario por ID.          |
| `crearSolicitud`   | Mutation | Crear una nueva solicitud.           |
| `actualizarSolicitud` | Mutation | Actualizar una solicitud por ID.   |
| `eliminarSolicitud` | Mutation | Eliminar una solicitud por ID.      |

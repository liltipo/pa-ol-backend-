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
|--------|--------------------|-------------------------------------|
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

Existen métodos y endpoints similares para **Préstamos**, **Productos** y **Solicitudes**.

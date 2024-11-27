require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');
const usuariosRoutes = require('./routes/usuarios.routes');
const solicitudesRoutes = require('./routes/solicitudes.routes');
const prestamosRoutes = require('./routes/prestamos.routes');
const productosRoutes = require('./routes/productos.routes');

const app = express();
const PORT = process.env.PORT || 5000;

// Conectar a la base de datos
connectDB();

// Middleware
app.use(express.json());

// Rutas
app.get('/', (req, res) => {
  res.send('Bienvenido a la API del Sistema de Pañol');
});

app.use('/usuarios', usuariosRoutes);
app.use('/solicitudes', solicitudesRoutes);
app.use('/prestamos', prestamosRoutes);
app.use('/productos', productosRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

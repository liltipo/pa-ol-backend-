require('dotenv').config(); // Cargar el archivo .env

const mongoose = require('mongoose');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const connectDB = require('./config/database');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const usuariosRoutes = require('./routes/usuarios.routes');
const solicitudesRoutes = require('./routes/solicitudes.routes');
const prestamosRoutes = require('./routes/prestamos.routes');
const productosRoutes = require('./routes/productos.routes');

const app = express();
app.use(express.json());

// Conectar a MongoDB con la URI desde el archivo .env
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch(err => {
    console.error('Error al conectar a MongoDB:', err);
    process.exit(1);  // Detiene el servidor si no se puede conectar
  });

// Rutas
app.get('/', (req, res) => {
  res.send('Bienvenido a la API del Sistema de Pañol');
});

app.use('/usuarios', usuariosRoutes);
app.use('/solicitudes', solicitudesRoutes);
app.use('/prestamos', prestamosRoutes);
app.use('/productos', productosRoutes);

const server = new ApolloServer({ typeDefs, resolvers });
server.start().then(() => {
  server.applyMiddleware({ app });
  app.listen(process.env.PORT || 5000, () => {
    console.log(`Servidor corriendo en http://localhost:${process.env.PORT || 5000}${server.graphqlPath}`);
  });
});

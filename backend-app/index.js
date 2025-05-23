const path = require('path');  // Importar el módulo path
const express = require('express');
const cors = require('cors');
const app = express();


// Habilitar CORS
app.use(cors());

// Middleware para analizar el cuerpo de las solicitudes
app.use(express.json()); // Esto es necesario para recibir datos en formato JSON en el cuerpo de las peticiones

// Servir imágenes desde la carpeta 'imagenes'
app.use("/imagenes", express.static(path.join(__dirname, 'imagenes')));


// Rutas
const productosRouter = require('./Routers/productos-router');
const comprasRouter = require('./Routers/compras-router');

app.use("/compras", comprasRouter);
app.use("/productos", productosRouter);

// Ruta de prueba (opcional)
app.get("/", (req, res) => {
  res.send("Bienvenido a la API de productos");
});

// Configuración del puerto y arranque del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

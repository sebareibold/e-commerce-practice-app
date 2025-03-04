const path = require('path');  // Importar el módulo path
const express = require('express');
const fs = require('fs');
const app = express();

const productosRouter = require('./Routers/productos-router');
// Middleware para analizar el cuerpo de las solicitudes
app.use(express.json()); // Esto es necesario para recibir datos en formato JSON en el cuerpo de las peticiones

// Rutas
app.use("/productos", productosRouter); // Monta las rutas de productos bajo el path "/productos"

// Ruta de prueba (opcional)
app.get("/", (req, res) => {
  res.send("Bienvenido a la API de productos");
});

// Configuración del puerto y arranque del servidor
const PORT = process.env.PORT || 3000; // Usamos el puerto 3000 por defecto
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

// CODIGO ANTERIOR

/*
//const routerCatalogo = require('./Routers/catalogo-router.js')

app.use(express.static(path.join(__dirname, '../KingOfSouth')));

app.get('/', (request, response) => {
    //  Esto sirve para encontra una ruta relativa, es decir, arma la ruta clasi "/x/c/../index.html" apartir del directorio "KingOfSouth" hasta "index.html"
    const rutaDeArchivo = path.join(__dirname, '../KingOfSouth', 'index.html');
    
    // Utiliza una funcion de fs para poder leer un archivo del repo, si lo encuentra lo manda y si no lo encuentra manda error.
    fs.readFile(rutaDeArchivo, 'utf8', (err, html) => { if (err) {response.send('Paso algo malo XD'); } else { response.send(html); } });
});


// Iniciar el servidor, en el puerto 300 y genera la dir
app.listen(process.env.PORT || 3000, () => {
    console.log('App disponible en http://localhost:3000');
});

app.use('/api/catalogo', routerCatalogo);
*/
const express = require("express");
const router = express.Router();
const {
  obtenerJSON,
  obtenerProductosPorCategoria,
  obtenerProductoPorId,
  agregarProducto,
  eliminarProducto,
  modificarProducto,
} = require("../Modelos/productos-modelo.js");

// Endpoint GET: Obtener todos los productos
router.get("", (req, res) => {
  const jsonRetorno = obtenerJSON();
  res.send(jsonRetorno);
});

// Endpoint GET: Obtener producto por id
router.get("/:idProducto", (req, res) => {
  let { idProducto } = req.params;
  idProducto = parseInt(idProducto);  // Convertir el id a entero

  // Validación para idProducto
  if (isNaN(idProducto) || idProducto < 1) {
    return res
      .status(400)
      .send({ message: "El parámetro 'idProducto' debe ser un número entero mayor que 0" });
  }

  // Verificamos si el producto existe
  const producto = obtenerProductoPorId(idProducto);
  if (!producto) {
    return res.status(404).send({ message: "No existe el producto con el id especificado" });
  }

  // Si existe, enviamos el producto
  return res.status(200).send(producto);
});


// Endpoint GET: Obtener productos por categoria
router.get("/categoria", (req, res) => {
  let { categoria } = req.query;

  // Validación para la categoría
  if (categoria && typeof categoria !== "string") {
    return res
      .status(400)
      .send({ message: "El parámetro 'categoria' debe ser un string" });
  }

  if (categoria) {
    const productosDeCategoria = obtenerProductosPorCategoria(categoria);
    if (productosDeCategoria.length === 0) {
      return res.status(404).send("No existen productos en esta categoría");
    }
    return res.send(productosDeCategoria);
  } else {
    const productos = obtenerJSON();
    return res.send(productos);
  }
});

// Endpoint POST: para agregar un producto
router.post("/", (req, res) => {
  let productoRecibido = req.body;

  productoRecibido.id = parseInt(productoRecibido.id);
  productoRecibido.precio = parseInt(productoRecibido.precio);

  if (
    !productoRecibido.id ||
    !productoRecibido.nombre ||
    !productoRecibido.descripcion ||
    !productoRecibido.precio ||
    !productoRecibido.imagen ||
    !productoRecibido.categoria
  ) {
    return res.status(400).send("Faltan parámetros en el cuerpo");
  } else if (
    typeof productoRecibido.nombre !== "string" ||
    typeof productoRecibido.descripcion !== "string" ||
    typeof productoRecibido.categoria !== "string" ||
    typeof productoRecibido.imagen !== "string"
  ) {
    return res.status(400).send("Nombre, descripción o imagen no son cadenas");
  }

  agregarProducto(productoRecibido);
  return res.status(201).send("Producto agregado con éxito");
});

// Endpoint DELETE: Eliminar producto por id
router.delete("/:idProducto", (req, res) => {
  let { idProducto } = req.params;
  idProducto = parseInt(idProducto);

  if (!idProducto || idProducto < 1) {
    return res
      .status(400)
      .send("El parámetro 'idProducto' debe ser un entero mayor que 0");
  }

  const producto = obtenerProductoPorId(idProducto);

  if (!producto) {
    return res.status(404).send("No existe el producto");
  }

  eliminarProducto(idProducto);
  return res.status(200).send("Producto eliminado con éxito");
});

// Endpoint PUT: Modificar un producto
router.put("/:idProducto", (req, res) => {
  let { idProducto } = req.params;
  idProducto = parseInt(idProducto);
  let productoRecibido = req.body;

  if (idProducto < 1) {
    return res.status(400).send("El parámetro 'idProducto' debe ser mayor que 0");
  }

  if (
    !productoRecibido.nombre &&
    !productoRecibido.descripcion &&
    !productoRecibido.precio &&
    !productoRecibido.imagen
  ) {
    return res.status(400).send("No hay datos válidos a modificar");
  }

  const productoExistente = obtenerProductoPorId(idProducto);
  if (!productoExistente) {
    return res.status(404).send("No existe el producto");
  }

  if (productoRecibido.nombre)
    modificarProducto(idProducto, "nombre", productoRecibido.nombre);
  if (productoRecibido.descripcion)
    modificarProducto(idProducto, "descripcion", productoRecibido.descripcion);
  if (productoRecibido.precio)
    modificarProducto(idProducto, "precio", productoRecibido.precio);
  if (productoRecibido.imagen)
    modificarProducto(idProducto, "imagen", productoRecibido.imagen);

  res.status(200).send("Producto modificado con éxito");
});

module.exports = router;

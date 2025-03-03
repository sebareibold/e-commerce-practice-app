const fs = require('fs');
const rutaJsonProductos = './productos.json';
const jsonProductos = JSON.parse(fs.readFileSync(rutaJsonProductos, 'utf-8')).data;


// ------------------------------------ Relacionado a Productos ------------------------------------

//Relacionado a Get All
const obtenerJSON = () => {
    //Devuelvo el json entero
    return jsonProductos;
}

//Relacionado a Get One
const obtenerProductoPorId = (id) => {
    //Devuelvo los productos de una categoría específica
    return jsonProductos.filter(producto => producto.id === id.toLowerCase);
}

//Relacionado a Post
const agregarProducto = (producto) => {
    //Agrego el objeto recibido al arreglo de productos
    jsonProductos.push(producto);

    //Lo convierto en String para que el parámetro me lo permita
    let stringJSON = JSON.stringify({data: jsonProductos});

    //Reescribo el archivo
    fs.writeFileSync(rutaJsonProductos, stringJSON, 'utf8');
}

//Relacionado a Delete
const eliminarProducto = (idProducto) => {
    //Elimino el producto del arreglo
    const nuevoArreglo = jsonProductos.filter(producto => producto.id !== idProducto);
    jsonProductos.length = 0; // Limpiamos el arreglo original
    jsonProductos.push(...nuevoArreglo); // Insertamos los productos restantes

    let stringJSON = JSON.stringify({data: jsonProductos});

    //Reescribo el archivo
    fs.writeFileSync(rutaJsonProductos, stringJSON, 'utf8');
}

//Relacionado a Put
const modificarProducto = (idProducto, campo, nuevoValor) => {
    //Busco el producto con id y modifico el campo deseado
    const producto = jsonProductos.find(item => item.id === idProducto);
    if (producto) {
        producto[campo] = nuevoValor;
        const stringJSON = JSON.stringify({data: jsonProductos});
        fs.writeFileSync(rutaJsonProductos, stringJSON);
    }
}

// ------------------------------------ Relacionado a Categoria ------------------------------------

const obtenerProductosPorCategoria = (categoria) => {
    //Devuelvo los productos de una categoría específica
    return jsonProductos.filter(producto => producto.categoria.toLowerCase() === categoria.toLowerCase());
}

module.exports = {
    obtenerJSON,
    obtenerProductoPorId,
    agregarProducto,
    eliminarProducto,
    modificarProducto,
    obtenerProductosPorCategoria,
};

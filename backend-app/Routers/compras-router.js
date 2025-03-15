const express = require("express");
const router = express.Router();

const {
    agregarCompra
} = require('../Modelos/compras-modelo')

//Endpoint POST
router.post("", (req, res) => {

    const id = Date.now().toString(36);

    let compraRecibida = req.body;

    compraRecibida.codigoPostal = parseInt(compraRecibida.codigoPostal);
    compraRecibida.telefono = parseInt(compraRecibida.telefono);
    compraRecibida.numeroTarjeta = parseInt(compraRecibida.numeroTarjeta);
    compraRecibida.cvv = parseInt(compraRecibida.cvv);

    if (!compraRecibida.nombre ||
        !compraRecibida.direccion ||
        !compraRecibida.ciudad ||
        !compraRecibida.codigoPostal ||
        !compraRecibida.pais ||
        !compraRecibida.correo ||
        !compraRecibida.telefono ||
        !compraRecibida.numeroTarjeta ||
        !compraRecibida.fechaExpiracion ||
        !compraRecibida.cvv ||
        !compraRecibida.listaCarrito
    ) {
        return res.status(400).send("Faltan parámetros en el cuerpo");
    } else if (
        typeof compraRecibida.nombre !== "string" ||
        typeof compraRecibida.direccion !== "string" ||
        typeof compraRecibida.ciudad !== "string" ||
        typeof compraRecibida.pais !== "string" ||
        typeof compraRecibida.correo !== "string" ||
        typeof compraRecibida.fechaExpiracion !== "string"
    ) {
        return res.status(400).send("Nombre, direccion, ciudad, pais, correo y fechaExpiracion deben ser cadenas");
    }
    
    compraRecibida.id = id;

    agregarCompra(compraRecibida);
    return res.status(201).send("Producto agregado con éxito");
});

module.exports = router;
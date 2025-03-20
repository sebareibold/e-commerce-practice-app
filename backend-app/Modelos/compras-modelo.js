const fs = require('fs');
const rutaJsonCompras = './compras.json';
const jsonCompras = JSON.parse(fs.readFileSync(rutaJsonCompras, 'utf-8'));

const agregarCompra = (compraRecibida) => {
    jsonCompras.push(compraRecibida);
    let stringJSON = JSON.stringify(jsonCompras);
    fs.writeFileSync(rutaJsonCompras, stringJSON, 'utf-8');
}

module.exports = {
    agregarCompra
}
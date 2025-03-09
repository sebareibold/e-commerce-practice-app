import { useState, createContext, useEffect } from 'react';

export const CarritoContext = createContext({
    listaCarrito: [],
    precioTotal: 0
});

export const CarritoProvider = ({ children }) => {
    const [listaCarrito, setListaCarrito] = useState([]);
    const [precioTotal, setPrecioTotal] = useState(0);

    const agregarAlCarrito = (item, cantidad) => {
        //Verifico si el producto ya esta en el carrito
        const productoEnCarrito = listaCarrito.find(producto => producto.item.id === item.id);


        if (!productoEnCarrito) {
            //Si el producto no está en el carrito lo agrego
            setListaCarrito(carritoAnterior => [...carritoAnterior, { item, cantidad }]);

            //const listaNueva = listaCarrito.push({item, cantidad});
            //setListaCarrito(listaNueva);

            //Sumo el precio total
            setPrecioTotal(precioAnterior => precioAnterior + (item.precio * cantidad));

        } else {
            //Si el item ya está en el carrito lo busco
            setListaCarrito(carritoAnterior =>
                carritoAnterior.map(producto =>
                    producto.item.id === item.id ? { ...producto, cantidad: producto.cantidad + cantidad } : producto
                )
            )

            //Sumo el precio total
            setPrecioTotal(precioAnterior => precioAnterior + (item.precio * cantidad));
        }
    }

    const eliminarDelCarrito = (id) => {
        //Busco el producto a eliminar
        const productoAEliminar = listaCarrito.find(producto => producto.item.id === id);

        if (productoAEliminar) {
            //Realizamos esto unicamente si el producto existe en el carrito
            const nuevoCarrito = listaCarrito.filter(producto => producto.item.id !== id);

            //Actualizamos el carrito
            setListaCarrito(nuevoCarrito);
            setPrecioTotal(precioAnterior => precioAnterior - (productoAEliminar.item.precio * productoAEliminar.cantidad));
        }
    }

    const vaciarCarrito = () => {
        //Vacio la lista de productos y pongo el precio total en cero
        setListaCarrito([]);
        setPrecioTotal(0);
    }


    return (
        <CarritoContext.Provider value={{ listaCarrito, precioTotal, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito }}>
            {children}
        </CarritoContext.Provider>
    )
}
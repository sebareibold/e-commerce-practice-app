import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native';
import { API_BASE_URL } from '../../../Config/apiConfig';
import Item from '../Item/Item';
import Presentation from '../Presentation/Presentation';
import Category from '../Category/Category';
import styles from './ItemListContainer.css';

const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
    const [pagina, setPagina] = useState(1);
    const [limite] = useState(6);
    const [tieneMasPag, setTieneMasPag] = useState(true);

    useEffect(() => {
        if (!tieneMasPag) return;

        setLoading(true);
        fetch(`${API_BASE_URL}/productos?pagina=${pagina}&limite=${limite}`)
            .then((response) => response.json())
            .then((json) => {
                if (json.productos) {
                    setData((prevData) => [...prevData, ...json.productos]);
                } else {
                    console.error("No se encontraron productos en la respuesta:", json);
                }
                setLoading(false);

                if (json.productos && json.productos.length < limite) {
                    setTieneMasPag(false);
                }
            })
            .catch((error) => {
                console.error('Error en el fetch:', error);
                setLoading(false);
            });
    }, [pagina]);

    const filteredData = categoriaSeleccionada ? data.filter((item) => item.categoria === categoriaSeleccionada) : data;

    const cargarMasPaginas = () => {
        if (!loading && tieneMasPag) {
            setPagina((prevPagina) => prevPagina + 1);
        }
    };

    return (
        <FlatList
            ListHeaderComponent={
                <>
                    <Presentation />
                    <Category setCategoriaSeleccionada={setCategoriaSeleccionada} />
                </>
            }
            contentContainerStyle={styles.listContainer}
            data={filteredData}
            renderItem={({ item }) => <Item key={item.id} item={item} />}
            keyExtractor={(item) => item.id.toString()}
            onEndReached={cargarMasPaginas} //Funcion q se ejecuta cuando se pasa del umbral
            onEndReachedThreshold={0.2} // umbral: Determina que tan sensible es la flatlist para poder hacer buscar pagina
            numColumns={2} // Para tener 2 items
            columnWrapperStyle={styles.columnWrapper} // Estiliza las filas de la lista
            ListFooterComponent={
                loading ? <ActivityIndicator size="large" color="#0000ff" style={styles.loader} /> : null
            }
        />
    );
};

export default ItemListContainer;

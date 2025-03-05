import React, { useState, useEffect } from 'react';
import { ScrollView, View, StyleSheet, ActivityIndicator } from 'react-native';
import Item from '../Item/Item';
import Presentation from '../Presentation/Presentation';
import Category from '../Category/Category';
import { API_BASE_URL } from '../../../Config/apiConfig';


const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

    useEffect(() => {
        fetch(`${API_BASE_URL}/productos/`) 
            .then((response) => response.json())
            .then((json) => {
                setData(json);

                setLoading(false);
            })
            .catch((error) => {
                console.error('Error en el fetch:', error);
                setLoading(false);
            });

    }, []);
    

    // Filtrar productos 
    const filteredData = categoriaSeleccionada
        ? data.filter((item) => item.mappedCategory === categoriaSeleccionada)
        : data;
=======
    }, []); // PODRIA

    // useEffect(funcion,array de dependicas)

    // Filtrar productos según la categoría seleccionada
    const filteredData = categoriaSeleccionada ? data.filter((item) => item.mappedCategory === categoriaSeleccionada) : data;
>>>>>>> main

    return (
        <ScrollView style={styles.container}>
            <Presentation />
            <Category setCategoriaSeleccionada={setCategoriaSeleccionada} />
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
            ) : (
                <View style={styles.listContainer}>
                    {filteredData.map((item) => (
                        <Item key={item.id} item={item} />
                    ))}
                </View>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    listContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 16,
        marginBottom: 60,
    },
    loader: {
        marginTop: 20,
    },
});

export default ItemListContainer;

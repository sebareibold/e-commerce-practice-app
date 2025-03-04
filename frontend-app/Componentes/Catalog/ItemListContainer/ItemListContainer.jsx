import React, { useState, useEffect } from 'react';
import { ScrollView, View, StyleSheet, ActivityIndicator } from 'react-native';
import Item from '../Item/Item';
import Presentation from '../Presentation/Presentation';
import Category from '../Category/Category';

const TOTAL_ITEMS = 30;

// Función de mapeo de categorías de la API a las personalizadas
const categoryMap = {
    "men's clothing": "Remeras",
    "women's clothing": "Buzos",
    "electronics": "Zapatillas",
    "jewelery": "Pantalones"
};

const mapCategory = (apiCategory) => categoryMap[apiCategory] || "Otros";

const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

    useEffect(() => {
        //NO FUNCIONA LA VARIABLE DE ENTORNO
        const apiUrl = '${process.env.EXPO_PUBLIC_API_URL}/productos';
        fetch(apiUrl)
            .then((response) => response.json())
            .then((json) => {
                const mappedData = json.slice(0, TOTAL_ITEMS).map(item => ({
                    ...item,
                    mappedCategory: mapCategory(item.category) // Agregar categoría personalizada
                }));
                setData(mappedData);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    // Filtrar productos según la categoría seleccionada
    const filteredData = categoriaSeleccionada
        ? data.filter((item) => item.mappedCategory === categoriaSeleccionada)
        : data;

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

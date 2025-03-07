import React, { useState, useEffect } from 'react';
import { ScrollView, View, ActivityIndicator } from 'react-native';
import { API_BASE_URL } from '../../../Config/apiConfig';
import Item from '../Item/Item';
import Presentation from '../Presentation/Presentation';
import Category from '../Category/Category';
import styles from './ItemListContainer.css';  

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
    
    const filteredData = categoriaSeleccionada ? data.filter((item) => item.categoria === categoriaSeleccionada) : data;

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

export default ItemListContainer;

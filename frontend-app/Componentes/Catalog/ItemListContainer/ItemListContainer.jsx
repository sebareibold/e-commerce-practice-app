import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Item from '../Item/Item';

const data = Array.from({ length: 12 }, (_, i) => ({ id: i.toString() })); // Simulación de datos

const ItemListContainer = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                numColumns={2} // Establece 2 columnas
                renderItem={() => <Item />}
                columnWrapperStyle={styles.row} // Estiliza las filas
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
        width: '100%',
        padding: 16,
        paddingBottom: 70,
    },
    row: {
        justifyContent: 'space-between', // Espaciado uniforme entre columnas
    },
});

export default ItemListContainer;
import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Item from './Item';

const ItemContainer = () => {
    return (
        <View style={styles.container}>
        <ScrollView style={styles.itemContainer} showsVerticalScrollIndicator={false}>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </ScrollView>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, // Asegura que el contenedor ocupe todo el espacio disponible
        width: '100%'
    },
    itemContainer: {
        flexGrow: 1, // Permite que el ScrollView crezca más allá de su tamaño inicial si es necesario
        height: '100%'
    },
});

export default ItemContainer;

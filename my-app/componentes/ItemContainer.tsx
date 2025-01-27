import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Item from './Item';

const ItemContainer = () => {
    return (
        <ScrollView style={styles.itemContainer}>
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
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        width: '100%',
        flexDirection: 'column',   // Los elementos están apilados verticalmente
    },

});

export default ItemContainer;

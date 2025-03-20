import CarritoItem from '../CarritoItem/CarritoItem'
import { FlatList, View, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { useContext, useEffect } from 'react';
import { CarritoContext } from '../../../Context/CarritoContext';
import { useNavigation } from '@react-navigation/native';
import styles from './CarritoList.css';

const CarritoList = () => {
    const { listaCarrito, precioTotal, vaciarCarrito } = useContext(CarritoContext);
    const navigation = useNavigation();

    return (
        <View style={styles.cartContainer}>
            <View style={styles.cartButtons}>
                <Text>Precio total: ${precioTotal}</Text>
                <TouchableOpacity onPress={vaciarCarrito}>
                    <Text>Vaciar Carrito de Compras</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('FormularioFinal')} >
                    <Text>Continuar compra</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                style={styles.cartlist}
                data={listaCarrito}
                ListEmptyComponent={<Text style={styles.emptyCart}>El carrito está vacío</Text>}
                renderItem={({ item }) => (
                    <CarritoItem key={item.item.id} item={item.item} cantidad={item.cantidad} />
                )}
                keyExtractor={(item) => item.item.id.toString()}
            />
        </View>
    );
}

export default CarritoList;
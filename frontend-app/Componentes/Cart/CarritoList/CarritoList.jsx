import CarritoItem from '../CarritoItem/CarritoItem'
import { ScrollView, View, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
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
            <ScrollView style={styles.cartlist}>
                {listaCarrito.length === 0 ? (
                    <Text style={styles.emptyCart}>El carrito está vacío</Text>
                ) : (
                    <View>
                        {listaCarrito.map(({ item, cantidad }) => (
                            <CarritoItem key={item.id} item={item} cantidad={cantidad} />
                        ))}
                    </View>
                )}
            </ScrollView>
        </View>
    );
}

export default CarritoList;
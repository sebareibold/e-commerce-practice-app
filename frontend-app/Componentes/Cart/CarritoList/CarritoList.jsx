import CarritoItem from '../CarritoItem/CarritoItem'
import { ScrollView, View, StyleSheet, ActivityIndicator, Text, Title } from 'react-native';
import { useContext } from 'react';
import { CarritoContext } from '../../../Context/CarritoContext';

const CarritoList = () => {
    const { listaCarrito, precioTotal,  vaciarCarrito } = useContext(CarritoContext);

    return(
        <View>
            <Text>Bienvenido al carrito</Text>
            <ScrollView>
                {listaCarrito.length === 0 ? (
                    <Text>El carrito está vacío</Text>
                ) : (
                    <View>
                        { listaCarrito.map(({ item, cantidad }) => (
                            <CarritoItem key={ item.id } item={ item } cantidad={ cantidad } />
                        ))}
                    </View>
                )}
            </ScrollView>
            <Text>Precio total: ${ precioTotal }</Text>
        </View>
    );
}

export default CarritoList;
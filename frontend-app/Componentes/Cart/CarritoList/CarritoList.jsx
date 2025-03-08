import CarritoItem from '../CarritoItem/CarritoItem'
import { ScrollView, View, StyleSheet, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { useContext, useEffect } from 'react';
import { CarritoContext } from '../../../Context/CarritoContext';
import { useNavigation } from '@react-navigation/native';

const CarritoList = () => {
    const { listaCarrito, precioTotal,  vaciarCarrito } = useContext(CarritoContext);
    const navigation = useNavigation();

    useEffect(() => {
            console.log("listaCarrito en CarritoList Actualizada: ",listaCarrito);
        }, [listaCarrito]);
    

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
            <TouchableOpacity onPress={() => vaciarCarrito()}>
                <Text>Vaciar Carrito de Compras</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('FormularioFinal')} >
                <Text>Continuar compra</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log(listaCarrito)} >
                <Text>Mostrar Carrito</Text>
            </TouchableOpacity>
        </View>
    );
}

export default CarritoList;
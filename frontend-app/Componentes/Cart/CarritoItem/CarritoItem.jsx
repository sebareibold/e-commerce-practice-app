import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { API_BASE_URL } from '../../../Config/apiConfig';
import styles from './CarritoItem.css'
import { useContext } from 'react';
import { CarritoContext } from '../../../Context/CarritoContext';

const CarritoItem = ({ item, cantidad }) => {
    const imgURL = `${API_BASE_URL}/${item.imagen}`;
    const { eliminarDelCarrito } = useContext(CarritoContext);

    return (
        <View style={styles.carritoItemContainer}>
            <Image source={{ uri: imgURL }} style={styles.image} />
            <Text style={styles.infoProducto}>{item.nombre}</Text>
            <View style={styles.infoCant}>
                <Text >Cantidad:</Text>
                <Text>{cantidad}</Text>
            </View>
            <TouchableOpacity style={styles.deleteButton} onPress={() => eliminarDelCarrito(item.id)}>
                <Text>X</Text>
            </TouchableOpacity>
        </View>
    )
}


export default CarritoItem;
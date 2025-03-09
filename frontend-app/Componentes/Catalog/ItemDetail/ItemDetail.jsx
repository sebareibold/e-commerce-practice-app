
import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from "@expo/vector-icons/Ionicons";
import hoodieImage from '../../../assets/images/hoodie (1).png';
import styles from './ItemDetail.css';
import { useContext, useState } from 'react';
import { CarritoContext } from '../../../Context/CarritoContext';
import { API_BASE_URL } from '../../../Config/apiConfig';

const SelectorDeTalles = () => {
    return (
        <View style={styles.sizeContainer}>
            <Text style={styles.sizeTitulo}>Talles</Text>
            <View style={styles.sizeOptions}>
                {['S', 'M', 'L', 'XL'].map((size) => (
                    <TouchableOpacity key={size} style={styles.sizeButton}>
                        <Text style={styles.sizeText}>{size}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const BotonesDeCompra = ({ item, }) => {
    const { agregarAlCarrito } = useContext(CarritoContext);
    const [cantidad, setCantidad] = useState(1);

    const sumarAlCarrito = () => {
        agregarAlCarrito(item, cantidad);
        setCantidad(1);
    }

    return (
        <View style={styles.descReviewContainer}>
            <TouchableOpacity style={[styles.optionButton, styles.active]} onPress={sumarAlCarrito}>
                <Text style={styles.text}>Añadir al Carrito</Text>
            </TouchableOpacity>
            <View style={styles.cantButtonsContainer}>
                {cantidad > 1 && (
                    <TouchableOpacity style={styles.cantButton} onPress={() => setCantidad(cantidad - 1)}>
                        <Text style={styles.textCarritoCompra}>-</Text>
                    </TouchableOpacity>
                )}
                <Text>{cantidad}</Text>
                <TouchableOpacity style={styles.cantButton} onPress={() => setCantidad(cantidad + 1)}>
                    <Text style={styles.textCarritoCompra}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


export default function ItemDetail({ route }) {
    const item = route.params.item;
    //console.log(item);
    const imgURL = `${API_BASE_URL}/${item.imagen}`;

    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 12 }}>
                    <Ionicons name="chevron-back" size={20} />
                    <Text style={styles.backText}>Back</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.imgContainer}>
                <Image source={{ uri: imgURL }} style={styles.image} />
            </View>

            <SelectorDeTalles />

            <View style={styles.otherSideItem}>
                <Text style={styles.textPrice}>{item.nombre}</Text>
                <Text style={styles.textPrice}>${item.precio}</Text>
            </View>

            <BotonesDeCompra item={item} />

            <View style={styles.leftAlignedContainer}>
                <Text style={styles.tituloDescrip}>Descripcion</Text>
                <Text style={styles.textDescripcion}>{item.descripcion}</Text>
            </View>

        </View>
    );
}

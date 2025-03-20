
import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from "@expo/vector-icons/Ionicons";
import { ScrollView } from 'react-native';
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
        <View style={styles.GestionDeCantContainer}>
            <View style={[styles.otherSideItem, { width: "96%" }]}>
                <Text style={styles.textCantidad}>Cantidad</Text>
                <Text style={styles.textCantidad}>{cantidad}</Text>
            </View>
            <View style={styles.descReviewContainer}>
                <TouchableOpacity style={styles.botonSubtract} onPress={() => cantidad>1? setCantidad(cantidad - 1):null}>
                    <Ionicons name="bag-remove-outline" size={40} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.botonAdd} onPress={() => setCantidad(cantidad + 1)}>
                    <Ionicons name="bag-add-outline" size={40} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.botonDeConfirmacion]} onPress={sumarAlCarrito}>
                    <Ionicons name="bag-check-outline" size={40} />
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
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>

                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <View style={styles.backButtonContainer}>
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

                <View style={styles.descripcionContenedor}>
                    <Text style={styles.tituloDescrip}>Descripción</Text>
                    <Text style={styles.textDescripcion}>{item.descripcion}</Text>
                </View>

            </View>
        </ScrollView>
    );
}

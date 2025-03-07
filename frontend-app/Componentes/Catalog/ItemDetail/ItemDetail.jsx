
import React from 'react';
import { Text, View,  TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from "@expo/vector-icons/Ionicons";
import hoodieImage from '../../../assets/images/hoodie (1).png';
import styles from './ItemDetail.css';  
import { useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from "@expo/vector-icons/Ionicons";
import hoodieImage from '../../../assets/images/hoodie (1).png';
import { CarritoContext } from '../../../Context/CarritoContext';

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

const BotonesDeCompra = ( item, cantidad ) => {
    const { agregarAlCarrito } = useContext(CarritoContext);

    return (
        <View style={styles.descReviewContainer}>
            <TouchableOpacity style={[styles.optionButton, styles.active]} onPress={(item, cantidad) => agregarAlCarrito(item, cantidad)}>
                <Text style={styles.text}>Añadir al Carrito</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.textCarritoCompra}>Comprar Ahora</Text>
            </TouchableOpacity>
        </View>
    );
};


export default function ItemDetail({ route }) {
    
    const { item } = route.params;

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
                <Image source={hoodieImage} style={styles.image} />
            </View>

            <SelectorDeTalles />

            <View style={styles.otherSideItem}>
                <Text style={styles.textPrice}>{item.nombre}</Text>
                <Text style={styles.textPrice}>${item.precio}</Text>
            </View>

            <BotonesDeCompra key={item.id} item={item} cantidad={1}/>

            <View style={styles.leftAlignedContainer}>
                <Text style={styles.tituloDescrip}>Descripcion</Text>
                <Text style={styles.textDescripcion}>{item.descripcion}</Text>
            </View>

        </View>
    );
}

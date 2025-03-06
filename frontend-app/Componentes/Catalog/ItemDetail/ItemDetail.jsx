import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from "@expo/vector-icons/Ionicons";
import hoodieImage from '../../../assets/images/hoodie (1).png';

const SelectorDeTalles = () => {
    return (
        <View style={styles.sizeContainer}>
            <Text style={styles.sizeTitulo}>Talles</Text>
            <View style={styles.sizeOptions}>
                {['S', 'M', 'L', 'XL'].map((size) => (
                    <TouchableOpacity key={size} style={styles.sizeButton}>
                        <Text style={styles.sizeText}>{size}</Text>
                    </TouchableOpacity>
                ))}sizeButton
            </View>
        </View>
    );
};

const BotonesDeCompra = () => {
    return (
        <View style={styles.descReviewContainer}>
            <TouchableOpacity style={[styles.optionButton, styles.active]}>
                <Text style={styles.text}>Añadir al Carrito</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.text}>Comprar Ahora</Text>
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

            <BotonesDeCompra />

            <View style={styles.leftAlignedContainer}>
                <Text style={styles.tituloDescrip}>Descripcion</Text>
                <Text style={styles.textDescripcion}>{item.descripcion}</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25,
    },
    backButton: {
        flexDirection: 'row',
        borderRadius: 15,
        elevation: 2,
        backgroundColor: '#f3f3f3',
        width: '25%',
        aspectRatio: 1.8,
        position: 'absolute',  // Posiciona el botón de manera absoluta
        top: 0,               // 10 de distancia desde el top (puedes ajustar el valor)
        left: 15,              // 10 de distancia desde el left (puedes ajustar el valor)
        justifyContent: "space-between", // Cambiado de alignItems a justifyContent
        alignItems: "center", // Opcional, si quieres alinear verticalmente
    },
    backText: {
        marginLeft: '4%',
        fontSize: 16,
        color: '#000',
    },
    imgContainer: {
        width: "90%",
        height: "40%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        backgroundColor: "#f7f8fa",
        elevation: 2,
    },
    image: {
        width: 200,
        height: 200,
        marginVertical: 20,
    },
    sizeContainer: {
        alignItems: 'start',
        marginVertical: 10,
    },
    leftAlignedContainer: {
        width: '90%',               // Ancho del 90%
        alignItems: 'flex-start',    // Alinea los elementos a la izquierda
        padding: 3,
    },
    tituloDescrip: {
        fontSize: 16,
        color: '#000000',
        fontWeight: 'bold',
    },
    textDescripcion: {
        fontSize: 13,

    },
    sizeOptions: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: "space-between", // Cambiado de alignItems a justifyContent
        alignItems: "center", // Opcional, si quieres alinear verticalmente
        width: "90%",
    },
    sizeButton: {
        marginHorizontal: 5,
        padding: 10,
        borderRadius: 15,
        width: "20%",
        aspectRatio: 1, // Mantiene un tamaño cuadrado dinámico
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f7f8fa",
        elevation: 1,
    },
    sizeText: {
        fontSize: 16,
    },
    descReviewContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginVertical: 10,
    },
    optionButton: {
        elevation: 1,
        width: '45%',
        aspectRatio: 2.3, // Mantiene un tamaño cuadrado dinámico
        backgroundColor: '#f7f8fa',
        borderRadius: 20,
        justifyContent: "space-between", // Cambiado de alignItems a justifyContent
        padding: 10,
    },
    active: {
        backgroundColor: '#acb3d2',
        borderRadius: 20,
        elevation: 6,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
    sizeTitulo: {
        fontSize: 16,
        color: '#000000',
        fontWeight: 'bold',
    },
    otherSideItem: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Esto separa los elementos al máximo dentro del View
        alignItems: 'center', // Alinea verticalmente los textos
        width: '90%', // Asegura que ocupe todo el ancho disponible
        paddingHorizontal: 0, // Agrega algo de espacio a los lados
    },
    textPrice: {
        fontSize: 18,
        marginBottom: '2%', // Espaciado entre textos
        fontWeight: 'bold',
    },

});
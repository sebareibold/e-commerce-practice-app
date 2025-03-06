import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { API_BASE_URL } from '../../../Config/apiConfig';
import Ionicons from "@expo/vector-icons/Ionicons";


const { width, height } = Dimensions.get('window'); // Obtener las dimensiones de la pantalla

const Item = ({ item }) => {
  const navigation = useNavigation();

  //Defino la url para obtener la imagen del producto
  const imagenURL = `${API_BASE_URL}/${item.imagen}`;

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('ItemDetail', { item })} 
    >

      <View style={styles.imageContainer}>
        <Image source={{ uri: imagenURL }} style={styles.image} onPress={() => console.log('')} />
        <TouchableOpacity style={styles.heartIcon} onPress={() => console.log('Corazón presionado')}>
          <Text style={styles.heartText}>
            <Ionicons name="heart-outline" size={20}></Ionicons>
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.secondSideItem}>
        <Text style={styles.textItem}>{item.nombre}</Text>
      </View>
      <View style={styles.otherSideItem}>
        <Text style={styles.textPrice}>${item.precio}</Text>
        <Text style={styles.textPrice}>✭ {item.calificacion}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '47%',
    borderWidth: 0,
    borderColor: '#1c1c1c',
    borderRadius: 20,
    backgroundColor: '#f7f8fa',
    marginBottom: 15,
    paddingHorizontal: 0,
    elevation: 1,
    aspectRatio: 0.8, // Mantiene un tamaño cuadrado dinámico
  },
  imageContainer: {
    position: 'relative',
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: -5,
    backgroundColor: '#ffff',
    borderRadius: 20,
    padding: 5,
  },
  heartText: {
    fontSize: 20,
  },
  image: {
    marginTop: '5%',
    marginLeft: '5%',
    width: '80%',  // Ajuste dinámico
    aspectRatio: 1, // Mantiene la proporción original
    resizeMode: 'contain', // Asegura que la imagen se ajuste sin distorsión
  },
  secondSideItem: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 10, // Agrega algo de espacio a los lados
  },
  otherSideItem: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Esto separa los elementos al máximo dentro del View
    alignItems: 'center', // Alinea verticalmente los textos
    width: '90%', // Asegura que ocupe todo el ancho disponible
    paddingHorizontal: 10, // Agrega algo de espacio a los lados
  },
  textPrice: {
    fontSize: 12,
    marginBottom: '10%', // Espaciado entre textos
    fontWeight: 'bold',
  },
  textItem: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 12,
    marginBottom: 8,
    alignSelf: 'flex-start',
    textAlign: 'left',
  },
});

export default Item;

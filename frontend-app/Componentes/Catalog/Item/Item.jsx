import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get('window'); // Obtener las dimensiones de la pantalla


const Item = ({ item }) => {  // item es una prop que contiene los datos del artículo
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('ItemDetail', { itemId: item.id })} 
    >
      <Image
 diseño-de-catalogo-y-detalles
        source={{ uri: item.image }}
        style={styles.image}
      />
      <View style={styles.secondSideItem}>
        <Text style={styles.text}>{item.title}</Text>  
      </View>
      <View style={styles.otherSideItem}>
        <Text style={styles.textPrice}>${item.price}</Text> 
        <Text style={styles.textPrice}>{item.rating.rate}</Text> 
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
    aspectRatio: 0.9, // Mantiene un tamaño cuadrado dinámico
  },
  image: {
    marginTop: '5%',
    marginLeft: '5%',
    maxWidth: 100,  // Tamaño máximo permitido
    maxHeight: 100, // Tamaño máximo permitido
    width: '100%',  // Ajuste dinámico
    aspectRatio: 1, // Mantiene la proporción original
    resizeMode: 'contain', // Asegura que la imagen se ajuste sin distorsión
  },

  secondSideItem: {
    flex: 1, // Ocupar todo el espacio restante
    marginLeft: '10%',
  },
  otherSideItem: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Esto separa los elementos al máximo dentro del View
    alignItems: 'center', // Alinea verticalmente los textos
    width: '90%', // Asegura que ocupe todo el ancho disponible
    paddingHorizontal: 10, // Agrega algo de espacio a los lados
  },
  textPrice: {
    fontSize: 13,
    marginBottom: '10%', // Espaciado entre textos
  },
  text: {
    color: '#686868',
    fontSize: 12,
    marginBottom: '2%', // Espaciado entre textos
  },
});

export default Item;

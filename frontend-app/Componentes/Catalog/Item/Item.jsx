import React from 'react';
import { View, Text, Image, TouchableOpacity,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { API_BASE_URL } from '../../../Config/apiConfig';
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from './Item.css';  


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
        <TouchableOpacity style={styles.heartIcon} onPress={() => console.log('Cora presionado')}>
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

export default Item;

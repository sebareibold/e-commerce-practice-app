import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Button from './Button';
import { useNavigation } from '@react-navigation/native';

const Item = () => {
  const navigation = useNavigation();
  const item = {id: 9}

  return (
    <View style={styles.item}>
      <Image source={require('../assets/images/computer.webp')} style={styles.image} />
      <View style={styles.secondSideItem}>
        <Text style={styles.text}>Remera Overside</Text>
        <Button label={'Ver Detalles'}   onPress={() => navigation.navigate('ItemDetail', { itemId: item.id })} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',  // Poner elementos en fila
    alignItems: 'center',  // Centrar  verticalmente
    justifyContent: 'center', // Distribuir espacio entre elementos
    alignSelf: 'center',
    height: 170,
    width: '92%',
    borderWidth: 2,
    borderColor: '#b4b4b4',
    borderRadius: 10,
    backgroundColor: '#f3f3f3',
    marginBottom: 10,
    paddingHorizontal: 15, // Espaciado interno

    // Sombra en Android
    elevation: 5, // Ajusta este valor según la intensidad deseada
  },
  image: {
    marginLeft: '5%',
    width: 120,
    height: 120,
  },
  secondSideItem: {
    flex: 1, // Ocupar todo el espacio restante
    marginLeft: '10%',
  },
  text: {
    color: '#686868',
    fontSize: 16,
    marginBottom: '10%', // Espaciado entre textos
  },
});

export default Item;

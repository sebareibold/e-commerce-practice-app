import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Item = () => {
  const navigation = useNavigation();
  const item = { id: 9 };

  return (
    <TouchableOpacity 
      style={styles.item} 
      onPress={() => navigation.navigate('ItemDetail', { itemId: item.id })}
    >
      <Image
        source={require("../../../assets/images/reme.png")}
        style={styles.image}
      />
      <View style={styles.secondSideItem}>
        <Text style={styles.text}>Remera Overside</Text>
      </View>
      <View style={styles.otherSideItem}>
        <Text style={styles.textPrice}>$40.000</Text>
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
    width: 120,
    height: 120,
  },
  secondSideItem: {
    flex: 1, // Ocupar todo el espacio restante
    marginLeft: '10%',
  },
  otherSideItem: {},
  textPrice: {
    fontSize: 13,
    marginBottom: '10%', // Espaciado entre textos
  },
  text: {
    color: '#686868',
    fontSize: 16,
    marginBottom: '2%', // Espaciado entre textos
  },
});

export default Item;

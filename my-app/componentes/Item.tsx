import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { blue } from 'react-native-reanimated/lib/typescript/Colors';

const Item = () => {
  return (
    <View style={styles.item}>
      <Image source={require('../assets/images/computer.webp')} style={styles.image} />
      <View>
        <Text style={styles.text}>Caja 1</Text>
        <Text style={styles.text}>Caja 2</Text>
        <Text style={styles.text}>Caja 3</Text>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
    height: 250, // Tamaño consistente para cada item
    width: '94%',
    borderWidth: 2,        // Grosor del borde
    flexDirection: 'row', // Establece la dirección de los elementos en fila
    flexWrap: 'wrap',     // Permite que los elementos se ajusten a la siguiente línea

    borderRadius: 20,      // Borde redondeado
    backgroundColor: '#e0e0e0',  // Fondo gris claro
    marginBottom: 20
  },
  text: {
    fontSize: 16,
  },

  image: {
    width: 100,  // Ancho de la imagen
    height: 100, // Alto de la imagen
  },

});

export default Item;

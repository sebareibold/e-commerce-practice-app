import { ImageBackground } from 'expo-image';
import React, { useRef, useEffect } from 'react'
import Carousel from '../Carousel/Carousel';
import Newsletter from '../Newsletter/Newsletter';
import Info from '../Info/Info';
import { View, StyleSheet, Text, ScrollView, Image, Animated } from 'react-native';

const imagesMen = [
    require('../../../assets/images/messi.jpg'),
    require('../../../assets/images/alan_turing.jpg'),
    require('../../../assets/images/linus_torvalds.jpg')
]

const imagesWomen = [
    require('../../../assets/images/modelo_1.jpg'),
    require('../../../assets/images/modelo_2.jpg'),
    require('../../../assets/images/modelo_3.jpg')
]

const HomeContainer = () => {
  const fadeAnimBrand = useRef(new Animated.Value(0)).current;
  const fadeAnimMen = useRef(new Animated.Value(0)).current;
  const fadeAnimWomen = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnimBrand, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    Animated.timing(fadeAnimMen, {
      toValue: 1,
      duration: 1000,
      delay: 500,
      useNativeDriver: true,
    }).start();

    Animated.timing(fadeAnimWomen, {
      toValue: 1,
      duration: 1000,
      delay: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnimBrand, fadeAnimMen, fadeAnimWomen]);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Animated.Text style={[styles.brandTitle, { opacity: fadeAnimBrand }]}>
          King Of The South
        </Animated.Text>  
        <Animated.Text style={[styles.fashionTitle, { opacity: fadeAnimMen }]}>
          Novedades para hombres
        </Animated.Text>
        <Carousel images={imagesMen}/>
        <Animated.Text style={[styles.fashionTitle, { opacity: fadeAnimWomen }]}>
          Novedades para mujeres
        </Animated.Text>
        <Carousel images={imagesWomen}/>
        <Animated.Text style={[styles.fashionTitle, { opacity: fadeAnimWomen }]}>
          Suscribite a nuestro newsletter!
        </Animated.Text>
        <Newsletter/>
        <Info/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#cad7d9',
  },
  brandTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0f1626',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 20,
    textTransform: 'uppercase',
    letterSpacing: 2,
    borderBottomWidth: 3,
    borderBottomColor: '#bbb',
    paddingBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  fashionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#0f1626',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 20,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    paddingBottom: 5,
  },
});

export default HomeContainer
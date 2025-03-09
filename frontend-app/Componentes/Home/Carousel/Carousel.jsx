import React, { useRef, useEffect } from 'react';
import { ScrollView, Image, StyleSheet, View, Dimensions } from 'react-native';
import styles from './styles';
const { width } = Dimensions.get('window');

const Carousel = ({ images }) => {
  const scrollViewRef = useRef(null);
  let currentIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollViewRef.current) {
        currentIndex = (currentIndex + 1) % images.length;
        scrollViewRef.current.scrollTo({ x: currentIndex * width, animated: true });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <ScrollView
      ref={scrollViewRef}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={styles.carouselContainer}
    >
      {images.map((image, index) => (
        <View key={index} style={styles.imageContainer}>
          <Image source={image} style={styles.image} />
        </View>
      ))}
    </ScrollView>
  );
}



export default Carousel;


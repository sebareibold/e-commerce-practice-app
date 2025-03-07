import React, { useRef, useEffect } from 'react';
import { ScrollView, Image, StyleSheet, View, Dimensions } from 'react-native';

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

const styles = StyleSheet.create({
  carouselContainer: {
    flexDirection: 'row',
    margin: 25,
    borderRadius: 25,
    borderColor: '#1c1c1c',
    elevation: 5,

  },
  imageContainer: {
    width, // Full width of the device
    height: 300, // Adjust height as needed
  },
  image: {
    width: '100%', // Full width of the container
    height: '100%', // Full height of the container
    resizeMode: 'cover', // Cover the entire width
  },
});

export default Carousel;


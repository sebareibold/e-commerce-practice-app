import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    carouselContainer: {
      flexDirection: 'row',
      margin: 25,
      borderRadius: 25,
      borderColor: '#1c1c1c',
      elevation: 5,
  
    },
    imageContainer: {
      width, 
      height: 300,
    },
    image: {
      width: '100%', 
      height: '100%', 
      resizeMode: 'cover',
    },
  });

  export default styles;
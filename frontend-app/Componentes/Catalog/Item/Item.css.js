import { StyleSheet } from 'react-native';

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
      aspectRatio: 0.8,  
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
      width: '80%', 
      aspectRatio: 1,  
      resizeMode: 'contain',  
    },
    secondSideItem: {
      flex: 1,
      alignItems: 'flex-start',
      paddingHorizontal: 10, 
    },
    otherSideItem: {
      flexDirection: 'row',
      justifyContent: 'space-between', 
      alignItems: 'center', 
      width: '90%',  
      paddingHorizontal: 10, 
      },
    textPrice: {
      fontSize: 12,
      marginBottom: '10%', 
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
  
  export default styles;

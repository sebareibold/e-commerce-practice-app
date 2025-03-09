import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: '#fff',
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
      marginBottom: 10,
      marginTop: 20,
      letterSpacing: 1.5,
    },
  });

  export default styles;
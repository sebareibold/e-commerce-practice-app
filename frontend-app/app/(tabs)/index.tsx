import HomeContainer from '@/Componentes/Home/HomeContainer/HomeContainer';
import { View, StyleSheet } from 'react-native';

export default function Index() {

  return (
    <View style={styles.container}>
      <HomeContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});

import ItemContainer from '@/Componentes/ItemContainer';
import { Text, View, StyleSheet } from 'react-native';

export default function VistaProductos() {
    return (
        <View style={styles.container}>
            <ItemContainer/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#ffff',
    },
});
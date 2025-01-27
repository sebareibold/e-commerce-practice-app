import ItemContainer from '@/componentes/ItemContainer';
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
        height: '100%',
        flex: 1,
        backgroundColor: '#ffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
    },
});
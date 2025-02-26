import { Text, View, StyleSheet } from 'react-native';

const CarritoVista = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Vista Carrito </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#11212d',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
    },
});

export default CarritoVista

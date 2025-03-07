
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window'); // Obtener las dimensiones de la pantalla

const styles = StyleSheet.create({
    cardPresentation: {
        alignSelf: 'center',
        width: width * 0.92, // 92% del ancho de la pantalla
        borderRadius: 20,
        backgroundColor: '#0f1626',
        marginBottom: 15,
        padding: 10,
        elevation: 1,
        aspectRatio: 2.4, // Mantiene un tamaño cuadrado dinámico
        justifyContent: 'center',
    },
    gridContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    leftColumn: {
        flex: 1,
        justifyContent: 'space-between',
    },
    text: {
        marginLeft: 20,
        fontSize: width * 0.04, // 4% del ancho de la pantalla
        color: '#fff',
        textAlign: 'left',
        marginBottom: 10,
    },
    image: {
        flexShrink: 1,
        width: width * 0.3,  // 30% del ancho de la pantalla
        height: height * 0.15, // 15% de la altura de la pantalla
        resizeMode: 'contain',
    },
    button: {
        borderRadius: 20,
        width: width * 0.4, // 40% del ancho de la pantalla
        height: height * 0.05, // 5% del ancho de la pantalla
        marginLeft: '5%',
        justifyContent: 'center',
    },
    buttonLabel: {
        color: '#0f1626',
        alignSelf: 'center',
    },
});

export default styles;


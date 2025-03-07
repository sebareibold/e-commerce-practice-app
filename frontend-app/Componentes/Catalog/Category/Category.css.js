import { StyleSheet, Dimensions} from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    image: {
        width: width * 0.08,
        height: width * 0.08,
        resizeMode: 'contain',
    },
    textContainer: {
        marginLeft: width * 0.05,
        marginRight: width * 0.05,
        marginBottom: width * 0.02,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    categoria: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    verTodas: {
        fontSize: 14,
        color: '#666',
    },
    button: {
        backgroundColor: '#0f1626',
        borderRadius: 20,
        width: width * 0.14,
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: width * 0.05,
        marginRight: width * 0.02,
    },
    activo: {
        backgroundColor: '#f7f8fa',
        elevation: 1,
        borderColor: '#1c1c1c',
        borderWidth: 1,      
    }
    
});

export default styles;

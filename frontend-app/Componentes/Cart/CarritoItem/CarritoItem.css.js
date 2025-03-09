import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    carritoItemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderColor: '#1c1c1c',
        borderRadius: 20,
        backgroundColor: '#f7f8fa',
        marginLeft: '3%',
        marginRight: '3%',
        marginTop: '4%'
    },
    image: {
        marginTop: '5%',
        marginBottom: '5%',
        marginLeft: '3%',
        width: '20%',
        aspectRatio: 1,
        resizeMode: 'contain',
    },
    infoProducto: {
        top: '35%',
        fontSize: 15,
        fontWeight: 600,
        width: '40%'
    },
    infoCant: {
        top: '35%',
        position: "relative",
        display: "flex",
        alignItems: "center"
    },
    deleteButton: {
        height: '20%',
        width: '20%',
        marginRight: '3%',
        top: '40%',
        backgroundColor: '#ffffff',
        height: '20%',
        width: '5%',
        borderWidth: 1,
        borderRadius: 50,
        alignItems: "center"
    }
});

export default styles;
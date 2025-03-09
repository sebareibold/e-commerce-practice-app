// ItemListContainer.css.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    backButton: {
        flexDirection: 'row',
        borderRadius: 15,
        elevation: 2,
        backgroundColor: '#f3f3f3',
        width: '25%',
        aspectRatio: 1.8,
        position: 'absolute',  // Posiciona el botón de manera absoluta
        top: 0,               // 10 de distancia desde el top (puedes ajustar el valor)
        left: 15,              // 10 de distancia desde el left (puedes ajustar el valor)
        justifyContent: "space-between", // Cambiado de alignItems a justifyContent
        alignItems: "center", // Opcional, si quieres alinear verticalmente
    },
    backText: {
        marginLeft: '4%',
        fontSize: 16,
        color: '#000',
    },
    imgContainer: {
        width: "100%",
        height: "40%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        backgroundColor: "#f7f8fa",
        elevation: 2,
    },
    image: {
        width: 200,
        height: 200,
        marginVertical: 20,
    },
    sizeContainer: {
        alignItems: 'start',
        marginVertical: 10,
    },
    leftAlignedContainer: {
        width: '100%',               // Ancho del 90%
        alignItems: 'flex-start',    // Alinea los elementos a la izquierda
        padding: 3,
    },
    tituloDescrip: {
        fontSize: 16,
        color: '#000000',
        fontWeight: 'bold',
    },
    textDescripcion: {
        fontSize: 13,

    },
    sizeOptions: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: "space-between", // Cambiado de alignItems a justifyContent
        alignItems: "center", // Opcional, si quieres alinear verticalmente
        width: "100%",
    },
    sizeButton: {
        marginHorizontal: 5,
        padding: 10,
        borderRadius: 15,
        width: "20%",
        aspectRatio: 1, // Mantiene un tamaño cuadrado dinámico
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f7f8fa",
        elevation: 1,
    },
    sizeText: {
        fontSize: 16,
    },
    descReviewContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginVertical: 10,
    },
    optionButton: {
        elevation: 1,
        width: '45%',
        aspectRatio: 2.3, // Mantiene un tamaño cuadrado dinámico
        backgroundColor: '#f7f8fa',
        borderRadius: 20,
        justifyContent: "center",
        padding: 10,
    },
    active: {
        backgroundColor: '#acb3d2',
        borderRadius: 20,
        elevation: 6,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
    sizeTitulo: {
        fontSize: 16,
        color: '#000000',
        fontWeight: 'bold',
    },
    otherSideItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',  
        alignItems: 'center',  
        width: '100%',  
        paddingHorizontal: 0, 
    },
    textPrice: {
        fontSize: 18,
        marginBottom: '2%', 
        fontWeight: 'bold',
    },
    textCarritoCompra: {
        alignSelf: "center",
        fontWeight: "bold",
    },


    cantButtonsContainer: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        marginRight: '12%'
    },
    cantButton: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        marginHorizontal: 5
    }
});

export default styles;

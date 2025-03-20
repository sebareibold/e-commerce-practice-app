// ItemListContainer.css.js
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  // Estilos de Contenedores
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#fff",
  },
  backButtonContainer: {
    marginTop: "-2%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "25%",
    backgroundColor: "#f7f8fa",
    borderRadius: 10,
    height: height * 0.05, //
    elevation: 2,
  },
  imgContainer: {
    width: "99%",           //
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#f7f8fa",
    elevation: 2,
  },
  GestionDeCantContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "12%", //
  },
  descReviewContainer: {
    marginTop: "1 %",
    flexDirection: "row",
    justifyContent: "space-between", // between o evenly
    width: "90%",
    height: "50%", //
  },
  sizeContainer: {
    alignItems: "start",
    marginVertical: 10,
  },
  descripcionContenedor: {
    width: "100%",
    alignItems: "flex-start",
    padding: 3,
    height: 200, //
  },
  cantButtonsContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginRight: "12%",
  },

  // Estilos Normals
  //Boton de Back
  backText: {
    marginLeft: "5%",
    fontSize: 16,
    marginRight: "4%",
  },
  backButton: {
    height: height * 0.06,
    width: "100%",
    alignItems: "flex-start",
  },

  // Imagen
  image: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },

  // Descripcion
  tituloDescrip: {
    fontSize: 16,
    color: "#000000",
    fontWeight: "bold",
  },
  textDescripcion: {
    fontSize: 13,
  },

  // Selector de Talles
  sizeOptions: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  sizeButton: {
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 15,
    width: "20%",
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f7f8fa",
    elevation: 1,
  },
  sizeText: {
    fontSize: 16,
  },
  optionButton: {
    elevation: 1,
    width: "45%",
    aspectRatio: 2.3,
    backgroundColor: "#f7f8fa",
    borderRadius: 20,
    justifyContent: "center",
    padding: 10,
  },
  active: {
    backgroundColor: "#acb3d2",
    borderRadius: 20,
    elevation: 6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  sizeTitulo: {
    fontSize: 16,
    color: "#000000",
    fontWeight: "bold",
  },
  otherSideItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 0,
  },
  textCantidad: {
    marginTop: "-10%",
    fontSize: 13,
  },
  textPrice: {
    fontSize: 18,
    marginBottom: "2%",
    fontWeight: "bold",
  },
  textCarritoCompra: {
    alignSelf: "center",
    fontWeight: "bold",
  },
  cantButton: {
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export default styles;

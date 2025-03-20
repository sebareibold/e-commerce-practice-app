import React, { useContext, useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import styles from './FormularioFinal.css'
import { CarritoContext } from '../../../Context/CarritoContext';
import { API_BASE_URL } from '../../../Config/apiConfig';

const FormularioFinal = () => {
  const { listaCarrito, vaciarCarrito } = useContext(CarritoContext);

  const [datosFormulario, setDatosFormulario] = useState({
    nombre: '',
    direccion: '',
    ciudad: '',
    codigoPostal: '',
    pais: '',
    correo: '',
    telefono: '',
    numeroTarjeta: '',
    fechaExpiracion: '',
    cvv: '',
    listaCarrito: listaCarrito
  });

  const handleCheckout = () => {
    if (datosFormulario.nombre && datosFormulario.direccion && datosFormulario.ciudad && datosFormulario.codigoPostal && datosFormulario.pais && datosFormulario.correo && datosFormulario.telefono && datosFormulario.numeroTarjeta && datosFormulario.fechaExpiracion && datosFormulario.cvv) {
      //  enviar los datos al backend o procesar el pago
      postData();
    } else {
      Alert.alert('Por favor, completa todos los campos.');
    }
  };

  const postData = async () => {
    const url = `${API_BASE_URL}/compras`;
    try {
      await fetch(url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(datosFormulario)
      })
        .then(response => {

          if (response.ok) {

            Alert.alert('La compra ha sido finalizada con éxito');

            vaciarCarrito();

            setDatosFormulario({
              nombre: '',
              direccion: '',
              ciudad: '',
              codigoPostal: '',
              pais: '',
              correo: '',
              telefono: '',
              numeroTarjeta: '',
              fechaExpiracion: '',
              cvv: '',
              listaCarrito: listaCarrito
            })

          } else {
            Alert.alert('Ha ocurrido un error en la compra.')
          }
        })

    } catch (error) {
      console.error(error);
    }
  }


  const handleChange = (name, value) => {
    setDatosFormulario({
      ...datosFormulario,
      [name]: value,
    });
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollcontainer}>
        <Text style={styles.title}>Finalizar Compra</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre Completo"
          value={datosFormulario.nombre}
          onChangeText={(text) => handleChange('nombre', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Dirección"
          value={datosFormulario.direccion}
          onChangeText={(text) => handleChange('direccion', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Ciudad"
          value={datosFormulario.ciudad}
          onChangeText={(text) => handleChange('ciudad', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Código Postal"
          value={datosFormulario.codigoPostal}
          onChangeText={(text) => handleChange('codigoPostal', text)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="País"
          value={datosFormulario.pais}
          onChangeText={(text) => handleChange('pais', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
          value={datosFormulario.correo}
          onChangeText={(text) => handleChange('correo', text)}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Teléfono"
          value={datosFormulario.telefono}
          onChangeText={(text) => handleChange('telefono', text)}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Número de Tarjeta"
          value={datosFormulario.numeroTarjeta}
          onChangeText={(text) => handleChange('numeroTarjeta', text)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Fecha de Expiración (MM/AA)"
          value={datosFormulario.fechaExpiracion}
          onChangeText={(text) => handleChange('fechaExpiracion', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="CVV"
          value={datosFormulario.cvv}
          onChangeText={(text) => handleChange('cvv', text)}
          keyboardType="numeric"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleCheckout}>
          <Text style={styles.buttonText}>Realizar Pedido</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};


export default FormularioFinal;
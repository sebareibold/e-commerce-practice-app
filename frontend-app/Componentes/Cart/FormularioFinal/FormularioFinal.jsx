import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import styles from './styles';
const FormularioFinal = () => {
  const [nombre, setNombre] = useState('');
  const [direccion, setDireccion] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');
  const [pais, setPais] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [numeroTarjeta, setNumeroTarjeta] = useState('');
  const [fechaExpiracion, setFechaExpiracion] = useState('');
  const [cvv, setCvv] = useState('');

  const handleCheckout = () => {
    if (nombre && direccion && ciudad && codigoPostal && pais && correo && telefono && numeroTarjeta && fechaExpiracion && cvv) {
      Alert.alert('¡Tu pedido ha sido realizado!');
      //  enviar los datos al backend o procesar el pago
    } else {
      Alert.alert('Por favor, completa todos los campos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Finalizar Compra</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre Completo"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Dirección"
        value={direccion}
        onChangeText={setDireccion}
      />
      <TextInput
        style={styles.input}
        placeholder="Ciudad"
        value={ciudad}
        onChangeText={setCiudad}
      />
      <TextInput
        style={styles.input}
        placeholder="Código Postal"
        value={codigoPostal}
        onChangeText={setCodigoPostal}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="País"
        value={pais}
        onChangeText={setPais}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        value={correo}
        onChangeText={setCorreo}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        value={telefono}
        onChangeText={setTelefono}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Número de Tarjeta"
        value={numeroTarjeta}
        onChangeText={setNumeroTarjeta}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha de Expiración (MM/AA)"
        value={fechaExpiracion}
        onChangeText={setFechaExpiracion}
      />
      <TextInput
        style={styles.input}
        placeholder="CVV"
        value={cvv}
        onChangeText={setCvv}
        keyboardType="numeric"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleCheckout}>
        <Text style={styles.buttonText}>Realizar Pedido</Text>
      </TouchableOpacity>
    </View>
  );
};


export default FormularioFinal;
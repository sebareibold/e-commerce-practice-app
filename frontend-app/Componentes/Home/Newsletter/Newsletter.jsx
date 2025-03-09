import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import styles from './styles';
const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      Alert.alert('Suscripto!');
      setEmail(''); //Limpiar el campo de correo
    } else {
      Alert.alert('Error :(', 'Porfavor ingresa un correo valido!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dejá tu correo para recibir novedades</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu correo"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={handleSubscribe}>
        <Text style={styles.buttonText}>Suscribirme</Text>
      </TouchableOpacity>
    </View>
  );
};



export default Newsletter;
// Newsletter.jsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#0f1626',
    marginBottom: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#fff',
    color: '#000',
  },
  button: {
    backgroundColor: '#f7f8fa',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#0f1626',
    fontWeight: 'bold',
  },
});

export default Newsletter;
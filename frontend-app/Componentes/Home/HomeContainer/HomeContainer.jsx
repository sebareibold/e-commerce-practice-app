import { ImageBackground } from 'expo-image';
import React from 'react'
import { View, StyleSheet, Text, ScrollView, Image } from 'react-native';

const HomeContainer = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.brandTitle}>King Of The South</Text>  
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  brandTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
  },
});

export default HomeContainer
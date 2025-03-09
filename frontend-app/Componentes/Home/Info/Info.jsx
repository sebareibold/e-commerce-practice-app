    import React from 'react';
    import { View, Text, StyleSheet } from 'react-native';
    import styles from './styles';
    const Info = () => {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>King of the South ©</Text>
        <Text style={styles.text}>
            Ofrecemos una mezcla única de estilo, calidad y comodidad. Nuestros productos están hechos con los materiales más finos para garantizar que te veas y te sientas mejor.
        </Text>
        <Text style={styles.text}>
            Únete a nuestra comunidad y recibe las últimas tendencias y ofertas exclusivas.
        </Text>
        </View>
    );
    };

   

    export default Info;
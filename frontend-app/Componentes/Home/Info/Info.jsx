    import React from 'react';
    import { View, Text, StyleSheet } from 'react-native';

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

    const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#0f1626',
        marginBottom: 100,
        marginTop: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        color: '#fff',
        marginBottom: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    text: {
        fontSize: 14,
        color: '#f7f8fa',
        textAlign: 'center',
        marginBottom: 10,
    },
    });

    export default Info;
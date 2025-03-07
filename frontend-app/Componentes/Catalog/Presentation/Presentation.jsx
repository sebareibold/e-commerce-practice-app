import React from 'react';
import { View, Pressable, Text, Image } from 'react-native';
import styles from './/Presentation.css';  


const Presentation = () => {
    const onPress = () => console.log("Botón presionado");

    return (
        <View style={styles.cardPresentation}>
            <View style={styles.gridContainer}>
                <View style={styles.leftColumn}>
                    <Text style={styles.text}>Estilo único, actitud audaz, calidad premium, comodidad sin límites</Text>
                    <View style={styles.button}>
                        <Pressable style={[styles.button, { backgroundColor: '#fff' }]} onPress={onPress || (() => { })}>
                            <Text style={[styles.buttonLabel]}> Comprar</Text>
                        </Pressable>
                    </View>
                </View>

                <View style={[{ alignContent: 'center' }]}>
                    <Image source={require("../../../assets/images/reme.png")} style={styles.image} />
                </View>
            </View>
        </View>
    );
};

export default Presentation;

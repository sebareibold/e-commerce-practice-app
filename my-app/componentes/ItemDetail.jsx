import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Path } from 'react-native-svg';

export default function ItemDetail({ route }) {
    const { itemId } = route.params;
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Svg height={16} width={16} viewBox="0 0 1024 1024">
                    <Path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z" fill="#000"/>
                </Svg>
                <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>

            <Text style={styles.text}>Detalles del Producto {itemId}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#212121',
        fontSize: 18,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 5,
        position: 'absolute',
        top: '1%',
        left: 20,
        elevation: 7,
        borderWidth: 2,
        borderColor: '#b4b4b4',
        borderRadius: 10,
        backgroundColor: '#f3f3f3',
    },
    backText: {
        marginLeft: 8,
        fontSize: 16,
        color: '#000',
    },
});

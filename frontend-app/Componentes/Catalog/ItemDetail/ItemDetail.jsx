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
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Svg height={16} width={16} viewBox="0 0 1024 1024">
                        <Path d="..." fill="#000" />
                    </Svg>
                    <Text style={styles.backText}>Back</Text>
                </View>
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

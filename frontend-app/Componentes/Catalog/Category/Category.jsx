import React, { useState } from 'react';
import { Pressable, View, Text, Image } from 'react-native';
import styles from './Category.css';  

const Category = ({ setCategoriaSeleccionada }) => {
    const [categoriaSeleccionada, setCategoria] = useState(null);

    const handleCategoryPress = (category) => {
        setCategoriaSeleccionada(category);
        setCategoria(category); // Actualiza el estado
    };

    const handleVerTodasPress = () => {
        setCategoriaSeleccionada(null);
        setCategoria(null)
    }

    return (
        <View style={{ flexDirection: 'column' }}>
            {/* Títulos */}
            <View style={styles.textContainer}>
                <Text style={styles.categoria}>Categoría</Text>
                <Pressable onPress={handleVerTodasPress}>
                    <Text style={styles.verTodas}>Ver todas</Text>
                </Pressable>          
            </View>

            {/* Botones de categorías */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginRight: 14 }}>
                {/* Remeras */}
                <Pressable style={[styles.button, categoriaSeleccionada === "Remeras" && styles.activo]} onPress={() => handleCategoryPress("Remeras")}>
                    <Image source={require("../../../assets/images/tshirt (1).png")} style={styles.image} />
                </Pressable>
                {/* Buzos */}
                <Pressable style={[styles.button, categoriaSeleccionada === "Buzos" && styles.activo]} onPress={() => handleCategoryPress("Buzos")}>
                    <Image source={require("../../../assets/images/hoodie (1).png")} style={styles.image} />
                </Pressable>
                {/* Pantalones */}
                <Pressable style={[styles.button, categoriaSeleccionada === "Pantalones" && styles.activo]} onPress={() => handleCategoryPress("Pantalones")}>
                    <Image source={require("../../../assets/images/pants.png")} style={styles.image} />
                </Pressable>
                {/* Zapatillas */}
                <Pressable style={[styles.button, categoriaSeleccionada === "Zapatillas" && styles.activo]} onPress={() => handleCategoryPress("Zapatillas")}>
                    <Image source={require("../../../assets/images/shoes (1).png")} style={styles.image} />
                </Pressable>
            </View>
        </View>
    );
};

export default Category;

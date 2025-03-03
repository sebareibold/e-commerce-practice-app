import { createStackNavigator } from '@react-navigation/stack';
import ItemListContainer from '../../Componentes/Catalog/ItemListContainer/ItemListContainer';
import ItemDetail from '../../Componentes/Catalog/ItemDetail/ItemDetail';

const Stack = createStackNavigator();

export default function VistaProductos() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ListaProductos" component={ItemListContainer} />
            <Stack.Screen name="ItemDetail" component={ItemDetail} />
        </Stack.Navigator>
    );
}

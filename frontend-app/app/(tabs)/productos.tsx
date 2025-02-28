import { createStackNavigator } from '@react-navigation/stack';
import ItemsContainer from '../../Componentes/ItemsContainer/ItemsContainer';
import ItemDetail from '../../Componentes/ItemDetail/ItemDetail';

const Stack = createStackNavigator();

export default function VistaProductos() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ListaProductos" component={ItemsContainer} />
            <Stack.Screen name="ItemDetail" component={ItemDetail} />
        </Stack.Navigator>
    );
}

import { createStackNavigator } from '@react-navigation/stack';
import CarritoList from '../../Componentes/Cart/CarritoList/CarritoList';
import Formulario from '../../Componentes/Cart/FormularioFinal/FormularioFinal';

const Stack = createStackNavigator();

export default function CarritoVista() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ListaCarrito" component={CarritoList} />
            <Stack.Screen name="FormularioFinal" component={Formulario} />
        </Stack.Navigator>
    );
}

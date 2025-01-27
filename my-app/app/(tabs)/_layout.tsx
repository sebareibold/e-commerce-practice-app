import { Tabs } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout() {

  const styleScreenOption = {
    tabBarActiveTintColor: '#11212d', // Con esto puedo cambiar el color de los iconos
    headerStyle: {
      backgroundColor: '#ffff',
    },
    headerShadowVisible: false,
    headerTintColor: '#11212d',
    tabBarStyle: {
      backgroundColor: '#ffff', // Color del fondo del nav bar
    },
  }

  return (
    <Tabs screenOptions={styleScreenOption}>
      <Tabs.Screen name="index" options={{ title: 'Inicio', tabBarIcon: ({ color, focused }) => (<Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />), }}/>
      <Tabs.Screen name="productos" options={{ title: 'Productos',tabBarIcon: ({ color, focused }) => (<Ionicons name={focused ?'bag': 'bag-outline'} color={color} size={24} />),}}/>
      <Tabs.Screen name="carrito" options={{ title: 'Carrito',tabBarIcon: ({ color, focused }) => (<Ionicons name={focused ? 'cart' : 'cart-outline'} color={color} size={24} />),}}/>    
    </Tabs>
  );
}

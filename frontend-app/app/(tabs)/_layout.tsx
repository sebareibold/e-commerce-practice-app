import { Tabs } from "expo-router";

import Ionicons from "@expo/vector-icons/Ionicons";

//Navbar
export default function TabLayout() {
  const styleScreenOption = {
    tabBarActiveTintColor: "#ffff",
    headerStyle: {
      backgroundColor: "#ffff",
      elevation: 0, // Elimina la sombra en Android
      shadowOpacity: 0, // Elimina la sombra en iOS
      borderBottomWidth: 0, // Elimina el borde inferior del header
    },
    headerShadowVisible: false, // Asegura que la sombra no sea visible en versiones recientes
    headerTintColor: "#0f1626",
    tabBarStyle: {
      position: "absolute" as "absolute",
      bottom: 15,
      borderColor: "#0f1626",
      borderRadius: 20,
      elevation: 5,
      shadowColor: "#000",
      paddingBottom: 10,
      height: 60,
      backgroundColor: "#0f1626",
      paddingTop: 4,
      marginLeft: 15,
      marginRight: 15,
    },
  };
  

  return (
    <Tabs screenOptions={styleScreenOption}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="productos"
        options={{
          title: "Productos",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "bag" : "bag-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="carrito"
        options={{
          title: "Carrito",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "cart" : "cart-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}

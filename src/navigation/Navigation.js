import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Favorites from "../screens/Favorites";
import PokedexNavigation from "./PokedexNavigation";
import Account from "../screens/Account";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="FAVORITE"
        component={Favorites}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bookmarks-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="POKEMON"
        component={PokedexNavigation}
        options={{
          title: "",
          headerTransparent: false,
          tabBarLabel: "",
          tabBarIcon: () => rendePokeball(),
        }}
      />
      <Tab.Screen
        name="ACCOUNT"
        component={Account}
        options={{
          tabBarLabel: "Mi Cuenta",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function rendePokeball() {
  return (
    <Image
      source={require("../../assets/icon/pokeball.png")}
      style={{ width: 80, height: 80, top: -18 }}
    />
  );
}

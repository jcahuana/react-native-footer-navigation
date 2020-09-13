import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Octicons, Feather } from "@expo/vector-icons";
import List from "../screens/Events";
import Home from "../screens/Home";
const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#f1f1e8",
          inactiveTintColor: "#999999",
          tabStyle: {
            marginTop: 10,
            height: 50,
          },
          labelStyle: {
            fontSize: 13,
          },
          style: {
            backgroundColor: "#2a3d66",
            height: 70,
          },
        }}
      >
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            title: "Inicio",
            tabBarIcon: ({ color, size }) => (
              <Octicons name="home" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="list"
          component={List}
          options={{
            title: "Eventos",
            tabBarIcon: ({ color, size }) => (
              <Feather name="list" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

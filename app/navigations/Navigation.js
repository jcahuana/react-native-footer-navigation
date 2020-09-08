import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import List from "../screens/List";
import Home from "../screens/Home";
const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="list"
          component={List}
          options={{
            title: "Listado",
          }}
        />
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            title: "Inicio",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

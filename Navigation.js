import React from "react";
//import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {NavigationContainer } from "@react-navigation/native";
import homescreen from "./project1/Home screen";
import aboutscreen from "./project1/Aboutscreen";
import imagescreen from "./project1/navigate image";

const stacks = createNativeStackNavigator();
export default function App() {
  return (
	<NavigationContainer>
		<stacks.Navigator>
			<stacks.Screen name="Home" component={homescreen}></stacks.Screen>
			<stacks.Screen name="about" component={aboutscreen}></stacks.Screen>
			<stacks.Screen name="image" component={imagescreen}></stacks.Screen>
		</stacks.Navigator>

	</NavigationContainer>
  );
}

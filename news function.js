import React from "react";
//import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {NavigationContainer } from "@react-navigation/native";
import nextpage from "./project1/Next page";
import previouspage from "./project1/previous page";

const stacks = createNativeStackNavigator();
export default function App() {
  return (
	<NavigationContainer>
		<stacks.Navigator>
			<stacks.Screen name="previous page" component={previouspage}></stacks.Screen>
			<stacks.Screen name="Next page" component={nextpage}></stacks.Screen>

		</stacks.Navigator>

	</NavigationContainer>
  );
}
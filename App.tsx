import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//---
//Screens
import Coin from "./screens/Coin";
import ECLP from "./screens/ECLP";
//--
//UI Components
import BackArrow from "./components/BackArrow";
import WhiteArrow from "./components/WhiteArrow";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Coin"
          component={Coin}
          options={({ navigation }) => ({
            title: "",
            headerTransparent: true,
            headerStyle: {
              backgroundColor: "transparent",
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <BackArrow />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="eCLP"
          component={ECLP}
          options={({ navigation }) => ({
            title: "",
            headerTransparent: true,
            headerStyle: {
              backgroundColor: "transparent",
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <WhiteArrow />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Home = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: "center" }}>
    <Text style={styles.main}>Hello Arriba!</Text>
    <Button title="Go to coin" onPress={() => navigation.navigate("Coin")} />
    <Button title="Go to eCLP" onPress={() => navigation.navigate("eCLP")} />
  </View>
);

const styles = StyleSheet.create({
  main: {
    textAlign: "center",
  },
});

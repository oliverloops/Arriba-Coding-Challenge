import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//---
//Screens
import Coin from "./src/screens/Coin";
import ECLP from "./src/screens/ECLP";
//--
//Styles
import styles from "./static/styles/global";
//--
//UI Components
import BackArrow from "./src/components/BackArrow";
import WhiteArrow from "./src/components/WhiteArrow";

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

//Home content screen
const Home = ({ navigation }: { navigation: any }) => (
  <LinearGradient
    colors={["rgba(249, 247, 251, 1)", "rgba(94, 94, 94, 0.2)"]}
    style={styles.layout}
  >
    <View style={{ marginTop: "20%" }}>
      <Text style={styles.title}>¡Bienvenido a Arriba! ✌️</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Coin")}
        >
          <Text style={styles.textButton}>Bitcoin</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("eCLP")}
        >
          <Text style={styles.textButton}>Balance eCLP</Text>
        </TouchableOpacity>
      </View>
    </View>
  </LinearGradient>
);

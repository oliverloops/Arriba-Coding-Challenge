import React from "react";
import { View, Text, Image, Pressable, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
//styles
import { layout, box, button } from "./styles";

const ECLP = () => {
  return (
    <View style={layout.main}>
      <Content />
    </View>
  );
};

const Content = () => {
  const windowHeight = Dimensions.get("window").height;
  const verticalTranslate = windowHeight / 2.35;

  return (
    <>
      <LinearGradient
        start={{ x: 0.1, y: 0.2 }}
        colors={["rgba(46, 202, 136, 0.6)", "rgba(46, 202, 136, 1)"]}
        style={layout.aboveBlock}
      >
        <Image source={require("../../static/wallet_lg.png")} />
        <View style={layout.label}>
          <Text style={layout.labelText}>Total eCLP Balance</Text>
        </View>
        <Text style={layout.balance}>$77.504</Text>
      </LinearGradient>
      <View
        style={[box.main, { transform: [{ translateY: verticalTranslate }] }]}
      >
        <View style={box.textContainer}>
          <Text style={box.title}>What is eCLP?</Text>
          <Text style={box.subtitle}>
            Usamos eCLP, un peso chileno tokenizado, para interactuar con USDC,
            el dólar estadounidense tokenizado. No se preocupe, su eCLP siempre
            será igual a 1 CLP.
          </Text>
        </View>
      </View>
      <View style={layout.underBlock}>
        <View style={button.layout}>
          <Pressable style={[button.container, { backgroundColor: "#fff" }]}>
            <Text style={[button.text, { color: "rgba(46, 202, 136, 1)" }]}>
              Depositar
            </Text>
          </Pressable>
          <Pressable
            style={[
              button.container,
              { backgroundColor: "rgba(46, 202, 136, 1)" },
            ]}
          >
            <Text style={[button.text, { color: "#fff" }]}>Retirar</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default ECLP;

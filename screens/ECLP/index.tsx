import React from "react";
import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
//styles
import { layout } from "./styles";

const ECLP = () => {
  return (
    <View style={layout.main}>
      <LinearGradient
        start={{ x: 0.1, y: 0.2 }}
        colors={["rgba(46, 202, 136, 1)", "rgba(46, 202, 136, 0.6)"]}
        style={layout.aboveBlock}
      >
        <Image source={require("../../static/wallet_lg.png")} />
        <View style={layout.label}>
          <Text style={layout.labelText}>Total eCLP Balance</Text>
        </View>
        <Text style={layout.balance}>$77.504</Text>
      </LinearGradient>
      <View style={layout.underBlock}></View>
    </View>
  );
};

export default ECLP;

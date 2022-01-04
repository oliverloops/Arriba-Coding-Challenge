import React from "react";
import { View, Image, StyleSheet } from "react-native";

const WhiteArrow = () => (
  <View style={styles.content}>
    <Image source={require("../../static/white_arrow.png")} />
  </View>
);

const styles = StyleSheet.create({
  content: {
    width: 30,
    height: 30,
    backgroundColor: "transparent",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default WhiteArrow;

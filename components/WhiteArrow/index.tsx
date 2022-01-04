import React from "react";
import { View, Image, StyleSheet } from "react-native";

const WhiteArrow = () => (
  <View style={styles.content}>
    <Image
      style={styles.image}
      source={require("../../static/white_arrow.png")}
    />
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
  image: {
    width: 9,
    height: 13,
  },
});

export default WhiteArrow;

import React from "react";
import { View, Image, StyleSheet, Platform } from "react-native";

const BackArrow = () => (
  <View style={styles.content}>
    <Image
      style={styles.image}
      source={require("../../static/back_arrow.png")}
    />
  </View>
);

const styles = StyleSheet.create({
  content: {
    width: 30,
    height: 30,
    backgroundColor: "#fff",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  image: {
    width: 9,
    height: 13,
  },
});

export default BackArrow;

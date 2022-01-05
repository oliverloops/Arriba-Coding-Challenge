import React from "react";
import { View, Text } from "react-native";
//styles
import { balloon } from "./styles";

const Balloon = () => {
  return (
    <>
      <View style={balloon.main}>
        <View style={balloon.content}>
          <Text style={balloon.qty}>$7,300</Text>
          <View style={balloon.feet}></View>
        </View>
      </View>
    </>
  );
};

export default Balloon;

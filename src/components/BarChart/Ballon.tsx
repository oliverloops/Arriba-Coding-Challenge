import React from "react";
import { View, Text } from "react-native";
//styles
import { balloon } from "./styles";

const Balloon = ({ currencyValue }: { currencyValue: number }) => {
  return (
    <>
      <View style={balloon.main}>
        <View style={balloon.content}>
          <Text style={balloon.qty}>${currencyValue}</Text>
          <View style={balloon.feet}></View>
        </View>
      </View>
    </>
  );
};

export default Balloon;

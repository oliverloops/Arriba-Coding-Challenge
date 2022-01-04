import React from "react";
import { View, Text } from "react-native";
//styles
import { layout } from "./styles";

const ECLP = () => {
  return (
    <View style={layout.main}>
      <View style={{ flex: 1, backgroundColor: "teal" }}>
        <Text>Content 1</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: "gold" }}>
        <Text>Content 2</Text>
      </View>
    </View>
  );
};

export default ECLP;

import React from "react";
import { Animated, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
//styles
import { button } from "./styles";

const BalanceButton = ({ title, color, handleStateChange }) => {
  //Button animations
  const animatedButton = new Animated.Value(1);

  //When is pressed
  const onPressIn = () => {
    Animated.spring(animatedButton, {
      toValue: 0.8,
      delay: 1,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(animatedButton, {
      toValue: 1,
      delay: 1,
      useNativeDriver: true,
    }).start();
  };

  //Animated style within selected component
  const animatedButtonStyle = {
    transform: [{ scale: animatedButton }],
  };

  return (
    <TouchableWithoutFeedback
      onPress={handleStateChange}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <Animated.View
        style={[
          button.container,
          animatedButtonStyle,
          {
            backgroundColor: Object.is(color, "rgba(46, 202, 136, 1)")
              ? "#fff"
              : "rgba(46, 202, 136, 1)",
          },
        ]}
      >
        <Text style={[button.text, { color: color }]}>{title}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default BalanceButton;

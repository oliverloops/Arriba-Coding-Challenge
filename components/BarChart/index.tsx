import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
//styles
import { main, bar } from "./styles";

const BarChart = () => {
  return (
    <View style={main.container}>
      <View style={main.line}></View>
      <View style={main.line}></View>
      <View style={main.line}></View>
      <ChartContent />
    </View>
  );
};

const Bar = ({ percentage }) => {
  const [focus, setFocus] = useState("rgba(223, 232, 246, 1)");

  const onBarFocus = () => {
    if (focus === "rgba(223, 232, 246, 1)") {
      setFocus("rgba(46, 202, 136, 1)");
    } else {
      setFocus("rgba(223, 232, 246, 1)");
    }
  };

  return (
    <Pressable
      style={[bar.body, { height: percentage, backgroundColor: focus }]}
      onPress={onBarFocus}
    ></Pressable>
  );
};

const ChartContent = () => {
  return (
    <View style={main.yearsLayout}>
      <View style={main.chartContainer}>
        <Bar percentage={26} />
        <Text style={[main.year, { color: "rgba(197, 208, 230, 1)" }]}>
          2017
        </Text>
      </View>
      <View style={main.chartContainer}>
        <Bar percentage={41} />
        <Text style={[main.year, { color: "rgba(197, 208, 230, 1)" }]}>
          2018
        </Text>
      </View>
      <View style={main.chartContainer}>
        <Bar percentage={57} />
        <Text style={[main.year, { color: "rgba(197, 208, 230, 1)" }]}>
          2019
        </Text>
      </View>
      <View style={main.chartContainer}>
        <Bar percentage={78} />
        <Text style={[main.year, { color: "rgba(46, 202, 136, 1)" }]}>
          2020
        </Text>
      </View>
      <View style={main.chartContainer}>
        <Bar percentage={93} />
        <Text style={[main.year, { color: "rgba(197, 208, 230, 1)" }]}>
          2021
        </Text>
      </View>
    </View>
  );
};

export default BarChart;

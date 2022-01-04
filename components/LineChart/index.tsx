import React, { useContext } from "react";
import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
  monotoneCubicInterpolation,
} from "@rainbow-me/animated-charts";
//styles
import { main } from "./styles";

//Context API
import { CoinContext } from "../../screens/Coin";

export const { width: SIZE } = Dimensions.get("window");

export const data = [
  { x: 1453075200, y: 1.47 },
  { x: 1453161600, y: 1.37 },
  { x: 1453248000, y: 1.53 },
  { x: 1453334400, y: 1.54 },
  { x: 1453420800, y: 1.52 },
  { x: 1453507200, y: 2.03 },
  { x: 1453593600, y: 2.1 },
  { x: 1453680000, y: 2.5 },
  { x: 1453766400, y: 2.3 },
  { x: 1453852800, y: 2.42 },
  { x: 1453939200, y: 2.55 },
  { x: 1454025600, y: 2.41 },
  { x: 1454112000, y: 2.43 },
  { x: 1454198400, y: 2.2 },
];

const points = monotoneCubicInterpolation({ data, range: 40 });

const LineChart = () => {
  return (
    <View style={main.container}>
      <Content />
    </View>
  );
};

const Content = () => {
  const consumer = useContext(CoinContext);

  //Bottom Sheet Method handler
  const showModalBottomSheet = () => {
    consumer.handlePresentModalPress();
  };

  return (
    <>
      <View style={main.priceContent}>
        <View style={main.innerPriceContent}>
          <Text style={main.price}>
            $714 <Text style={main.conversion}>/ 1 USD Coin</Text>
          </Text>
          <View style={main.percent}>
            <Image source={require("../../static/up_arrow.png")} />
            <Text style={{ color: "rgba(46, 202, 136, 1)", paddingLeft: 5 }}>
              1.01% hoy
            </Text>
          </View>
        </View>
        <View style={main.buttons}>
          <TouchableOpacity style={main.iconBox} onPress={showModalBottomSheet}>
            <Image source={require("../../static/qr_code.png")} />
          </TouchableOpacity>
          <TouchableOpacity style={main.iconBox} onPress={showModalBottomSheet}>
            <Image source={require("../../static/send_icon.png")} />
          </TouchableOpacity>
        </View>
      </View>
      <Line />
    </>
  );
};

const Line = () => {
  return (
    <View style={main.chartContainer}>
      <ChartPathProvider data={{ points, smoothingStrategy: "bezier" }}>
        <ChartPath
          height={SIZE / 4}
          strokeWidth={2}
          stroke="rgba(46, 202, 136, 1)"
          width={SIZE}
        />
        <ChartDot style={{ backgroundColor: "rgba(46, 202, 136, 0.65)" }} />
      </ChartPathProvider>
    </View>
  );
};

export default LineChart;

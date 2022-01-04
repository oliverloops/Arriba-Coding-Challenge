import React, { useContext } from "react";
import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
  ChartYLabel,
  ChartXLabel,
  monotoneCubicInterpolation,
} from "@rainbow-me/animated-charts";
//styles
import { main } from "./styles";

//Context API
import { CoinContext } from "../../screens/Coin";

export const { width: SIZE } = Dimensions.get("window");

export const data = [
  { x: 1451865600, y: 0.95 },
  { x: 1451952000, y: 0.95 },
  { x: 1452038400, y: 0.96 },
  { x: 1452124800, y: 0.95 },
  { x: 1452211200, y: 0.99 },
  { x: 1452297600, y: 0.99 },
  { x: 1452384000, y: 0.99 },
  { x: 1452470400, y: 1.05 },
  { x: 1452556800, y: 1.23 },
  { x: 1452643200, y: 1.13 },
  { x: 1452729600, y: 1.16 },
  { x: 1452816000, y: 1.22 },
  { x: 1452902400, y: 1.22 },
  { x: 1452988800, y: 1.31 },
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
    <ChartPathProvider data={{ points, smoothingStrategy: "bezier" }}>
      <View style={main.priceContent}>
        <View style={main.innerPriceContent}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={main.price}>$</Text>
            <ChartXLabel
              style={[main.price, { width: "40%", maxWidth: "40%" }]}
            />
            <Text style={main.conversion}>/ 1 USD Coin</Text>
          </View>
          <View style={main.percent}>
            <Image source={require("../../static/up_arrow.png")} />
            <View style={{ flexDirection: "row", paddingLeft: 3 }}>
              <ChartYLabel
                style={[
                  { color: "rgba(46, 202, 136, 1)" },
                  { width: "40%", maxWidth: "40%" },
                ]}
              />
              <Text style={{ color: "rgba(46, 202, 136, 1)", paddingLeft: 5 }}>
                % hoy
              </Text>
            </View>
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
    </ChartPathProvider>
  );
};

const Line = () => {
  return (
    <View style={main.chartContainer}>
      <ChartPath
        height={SIZE / 4}
        strokeWidth={2}
        selectedStrokeWidth={2}
        stroke="rgba(46, 202, 136, 1)"
        width={SIZE}
      />
      <ChartDot
        style={{ backgroundColor: "rgba(46, 202, 136, 0.65)" }}
        size={12}
      />
    </View>
  );
};

export default LineChart;

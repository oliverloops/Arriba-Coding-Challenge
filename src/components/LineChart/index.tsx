import React, { useContext, useState } from "react";
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

//Dataset
import { data } from "./data";

export const { width: SIZE } = Dimensions.get("window");

const points = monotoneCubicInterpolation({ data, range: 40 });

const LineChart = () => {
  return (
    <View style={main.container}>
      <Content />
    </View>
  );
};

const Content = () => {
  const consumer: any = useContext(CoinContext);

  //Bottom Sheet Method handler
  const showModalBottomSheet = () => {
    consumer.handlePresentModalPress();
  };

  //Worklet for currency price format
  function priceWorklet(label: any) {
    "worklet";
    if (Object.is(label, "")) {
      return `$714`;
    } else {
      return `$${label.slice(0, 3)}`;
    }
  }

  //Worklet for percent format
  function percentWorklet(label: any) {
    "worklet";
    if (Object.is(label, "")) {
      return `1.01% hoy`;
    } else {
      return `${label.slice(0, 4)}% hoy`;
    }
  }

  return (
    <ChartPathProvider data={{ points, smoothingStrategy: "bezier" }}>
      <View style={main.priceContent}>
        <View style={main.innerPriceContent}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <ChartXLabel format={priceWorklet} style={[main.price]} />
            <Text style={main.conversion}> / 1 USD Coin</Text>
          </View>
          <View style={main.percent}>
            <Image source={require("../../../static/up_arrow.png")} />
            <View style={{ flexDirection: "row", paddingLeft: 3 }}>
              <ChartYLabel
                format={percentWorklet}
                style={[{ color: "rgba(46, 202, 136, 1)" }]}
              />
            </View>
          </View>
        </View>
        <View style={main.buttons}>
          <TouchableOpacity style={main.iconBox} onPress={showModalBottomSheet}>
            <Image source={require("../../../static/qr_code.png")} />
          </TouchableOpacity>
          <TouchableOpacity style={main.iconBox} onPress={showModalBottomSheet}>
            <Image source={require("../../../static/send_icon.png")} />
          </TouchableOpacity>
        </View>
      </View>
      <Line />
    </ChartPathProvider>
  );
};

const Line = () => {
  const [chartVisible, setChartVisible] = useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setChartVisible(true);
    }, 0);
  }, [data]);

  return (
    <View style={main.chartContainer}>
      {chartVisible ? (
        <>
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
        </>
      ) : null}
    </View>
  );
};

export default LineChart;

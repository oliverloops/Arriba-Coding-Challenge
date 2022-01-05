import React, { useReducer } from "react";
import { View, Text, TouchableOpacity } from "react-native";
//styles
import { main, bar } from "./styles";
//UI components
import Balloon from "./Ballon";
//Reducers
import { barChartReducer } from "../../reducers/coinReducer";

const BarChart: React.FC = () => {
  return (
    <View style={main.container}>
      <View style={main.line}></View>
      <View style={main.line}></View>
      <View style={main.line}></View>
      <ChartContent />
    </View>
  );
};

const Bar = ({
  barNumber,
  percentage,
  year,
}: {
  barNumber: string;
  percentage: number;
  year: string;
}) => {
  const barState = { status: false };

  const [active, dispatch] = useReducer(
    barChartReducer,
    Object.is(year, "2021") ? !barState.status : barState.status
  );

  return (
    <View style={{ justifyContent: "space-between", alignItems: "center" }}>
      {active && <Balloon />}
      <TouchableOpacity
        style={[
          bar.body,
          {
            height: percentage,
            backgroundColor: active
              ? "rgba(46, 202, 136, 1)"
              : "rgba(223, 232, 246, 1)",
          },
        ]}
        onPress={() => dispatch({ type: barNumber })}
      ></TouchableOpacity>
      <Text
        style={[
          main.year,
          {
            color: active ? "rgba(46, 202, 136, 1)" : "rgba(223, 232, 246, 1)",
          },
        ]}
      >
        {year}
      </Text>
    </View>
  );
};

const ChartContent: React.FC = () => (
  <View style={main.yearsLayout}>
    <View style={main.chartContainer}>
      <Bar barNumber={"barOne"} percentage={26} year={"2018"} />
    </View>
    <View style={main.chartContainer}>
      <Bar barNumber={"barTwo"} percentage={41} year={"2019"} />
    </View>
    <View style={main.chartContainer}>
      <Bar barNumber={"barThree"} percentage={57} year={"2020"} />
    </View>
    <View style={main.chartContainer}>
      <Bar barNumber={"barFour"} percentage={78} year={"2021"} />
    </View>
    <View style={main.chartContainer}>
      <Bar barNumber={"barFive"} percentage={93} year={"2022"} />
    </View>
  </View>
);

export default BarChart;

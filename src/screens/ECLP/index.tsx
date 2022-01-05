import React, { useReducer } from "react";
import { View, Text, Image, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
//styles
import { layout, box, button } from "./styles";

//reducers
import { balanceReducer } from "../../reducers/balaceReducer";

//UI components
import BalanceButton from "./Button";

const ECLP: React.FC = () => {
  return (
    <View style={layout.main}>
      <Content />
    </View>
  );
};

const Content: React.FC = () => {
  //this data can be retrieved from the API
  const accountStatus = { balance: 77.504 };

  //balance state handler
  const [balance, dispatch] = useReducer(balanceReducer, accountStatus.balance);
  const depositHandler = () => dispatch({ type: "deposit" });
  const withdrawHandler = () => dispatch({ type: "withdraw" });

  //data for vertical aligment
  const windowHeight: number = Dimensions.get("window").height;
  const verticalTranslate: number = windowHeight / 2.35;

  return (
    <>
      <LinearGradient
        start={{ x: 0.1, y: 0.2 }}
        colors={["rgba(22, 250, 155, 0.7)", "rgba(46, 202, 136, 1)"]}
        style={layout.aboveBlock}
      >
        <Image source={require("../../../static/wallet_lg.png")} />
        <View style={layout.label}>
          <Text style={layout.labelText}>Total eCLP Balance</Text>
        </View>
        <Text style={layout.balance}>${balance.toFixed(3)}</Text>
      </LinearGradient>
      <View
        style={[box.main, { transform: [{ translateY: verticalTranslate }] }]}
      >
        <View style={box.textContainer}>
          <Text style={box.title}>What is eCLP?</Text>
          <Text style={box.subtitle}>
            Usamos eCLP, un peso chileno tokenizado, para interactuar con USDC,
            el dólar estadounidense tokenizado. No se preocupe, su eCLP siempre
            será igual a 1 CLP.
          </Text>
        </View>
      </View>
      <View style={layout.underBlock}>
        <View style={button.layout}>
          <BalanceButton
            title={"Depositar"}
            color={"rgba(46, 202, 136, 1)"}
            handleStateChange={depositHandler}
          />
          <BalanceButton
            title={"Retirar"}
            color={"#fff"}
            handleStateChange={withdrawHandler}
          />
        </View>
      </View>
    </>
  );
};

export default ECLP;

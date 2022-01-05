import React, { useCallback, useMemo, useRef } from "react";
import { View, Text, Image, ScrollView, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import BottomSheet, {
  BottomSheetView,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
//Styling
import { layout, bottomSheet, boxContainer, bottomSheetFooter } from "./styles";
//UI components
import BarChart from "../../components/BarChart";
import LineChart from "../../components/LineChart";
import ModalBottomSheet from "../../components/ModalBottomSheet";

//Context API
export const CoinContext = React.createContext({});

const Coin = () => {
  //Parent Bottom Sheet
  const sheetRef = useRef<BottomSheet>(null);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  //initial snap
  const snapPoints = useMemo(() => ["70%"], []);

  //callbacks
  const handleSheetChange = useCallback((index: number) => {
    console.log("handleSheetChange", index);
  }, []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  //This value can be retrieved from an API
  const currentPrice = 714;
  const currentPercentage = 1.01;

  //Context data (ref handler)
  const bottomSheetData = {
    currentPrice: currentPrice,
    currentPercentage: currentPercentage,
    bottomSheetModalRef: bottomSheetModalRef,
    handlePresentModalPress: handlePresentModalPress,
  };

  return (
    <CoinContext.Provider value={bottomSheetData}>
      <View style={bottomSheet.container}>
        <LinearGradient
          start={{ x: 0.1, y: 0.2 }}
          colors={["rgba(249, 215, 175, 1)", "rgba(249, 215, 175, 0.25)"]}
          style={layout.main}
        >
          <View style={layout.imageContainer}>
            <Image
              style={layout.coinLogo}
              source={require("../../../static/bitcoin_logo.png")}
            />
          </View>
        </LinearGradient>
        <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          handleIndicatorStyle={{ display: "none" }}
          backgroundStyle={layout.bottomSheetBorders}
          onChange={handleSheetChange}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <BottomSheetView>
              <BottomSheetContent />
            </BottomSheetView>
          </ScrollView>
        </BottomSheet>
        <ModalBottomSheet />
      </View>
    </CoinContext.Provider>
  );
};

const BottomSheetContent = () => {
  return (
    <>
      <Text style={bottomSheet.title}>Bitcoin</Text>
      <Text
        style={[bottomSheet.description, { color: "rgba(115, 116, 128, 1)" }]}
      >
        Bitcoin fue creado por Satoshi Nakamoto, una persona o equipo seudónimo
        que describió la tecnología en un documento técnico de 2008. Es un
        concepto atractivo y simple: bitcoin es dinero digital que permite
        transacciones seguras entre pares en Internet.
      </Text>
      <ScrollView
        contentContainerStyle={{
          paddingTop: 30,
          paddingRight: 13,
          paddingLeft: 13,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={220}
        decelerationRate="fast"
        snapToAlignment="start"
      >
        <ContentBox
          label={"green"}
          title={"Altamente divisible"}
          description={"Puedes comprar tan solo $1000 de BTC"}
        />
        <ContentBox
          label={"red"}
          title={"Tarifas de transacción"}
          description={"Las tarifas se destinan a proteger la red"}
        />
      </ScrollView>
      <Text style={bottomSheet.subtitle}>Historial de precios</Text>
      <Text
        style={[
          bottomSheet.description,
          { color: "rgba(165, 166, 181, 1)", paddingRight: 32 },
        ]}
      >
        Basado en el precio de cierre del mercado el 1 de enero de cada año.
      </Text>
      <BarChart />
      <LineChart />
      <Footer />
    </>
  );
};

const ContentBox = ({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) => (
  <View style={boxContainer.box}>
    <View style={boxContainer.content}>
      <View
        style={[
          boxContainer.container,
          {
            backgroundColor:
              label === "green"
                ? "rgba(223, 251, 223, 1)"
                : "rgba(251, 223, 223, 1)",
          },
        ]}
      >
        <Image
          source={
            label === "green"
              ? require("../../../static/percent_icon.png")
              : require("../../../static/flame_icon.png")
          }
        />
      </View>
      <Text style={boxContainer.title}>{title}</Text>
      <Text style={boxContainer.description}>{description}</Text>
    </View>
  </View>
);

const Footer = () => {
  const consumer: any = React.useContext(CoinContext);

  return (
    <View style={bottomSheetFooter.body}>
      <View>
        <Text
          style={{
            color: "rgba(165, 166, 181, 1)",
            fontWeight: "500",
            fontFamily: "Manrope",
          }}
        >
          Precio Ahora:
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "600",
            fontFamily: "Manrope",
            marginTop: 5,
          }}
        >
          $ {consumer.currentPrice}
        </Text>
      </View>
      <Pressable style={bottomSheetFooter.button}>
        <Text style={bottomSheetFooter.textButton}>Comprar</Text>
      </Pressable>
    </View>
  );
};

export default Coin;

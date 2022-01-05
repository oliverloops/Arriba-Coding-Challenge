import React, { useMemo, useContext } from "react";
import { View, Text, Pressable, Image } from "react-native";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
//Styling
import { main } from "./styles";
//Utils
import CustomBackdrop from "../../utils/CustomBackdrop";

//Context API
import { CoinContext } from "../../screens/Coin";

const ModalBottomSheet = () => {
  const consumer: any = useContext(CoinContext);
  const snapPoints = useMemo(() => ["60%", "60%"], []);

  //callbacks
  const handleCloseModalPress = () => {
    consumer.bottomSheetModalRef.current?.close();
  };

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={consumer.bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        handleIndicatorStyle={{ display: "none" }}
        backgroundStyle={main.bottomSheetBorders}
        backdropComponent={CustomBackdrop}
      >
        <View style={main.contentContainer}>
          <View>
            <Text style={main.title}>Próximamente</Text>
            <Text style={main.description}>
              Los depósitos y retiros desde y hacia otras fuentes aún no están
              listos. ¡Únase a la lista de espera y sea uno de los primeros en
              usarlo cuando esté disponible!
            </Text>
          </View>
          <Image source={require("../../../static/wallet.png")} />
          <View>
            <Pressable style={main.joinButton}>
              <Text style={[main.buttonText, { color: "#fff" }]}>
                Join Waitlist
              </Text>
            </Pressable>
            <Pressable style={main.closeButton} onPress={handleCloseModalPress}>
              <Text style={[main.buttonText, { color: "#000" }]}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default ModalBottomSheet;

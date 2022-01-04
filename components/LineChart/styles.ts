import { StyleSheet } from "react-native";

const borders = {
  paddingLeft: 18,
  paddingRight: 18,
};

const main = StyleSheet.create({
  container: {
    marginTop: 100,
  },
  chartContainer: {
    flexDirection: "row",
    marginTop: 25,
    marginBottom: 25,
  },
  priceContent: {
    ...borders,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  innerPriceContent: {
    flexDirection: "column",
  },
  price: {
    fontSize: 32,
    fontWeight: "600",
    fontFamily: "Manrope",
    lineHeight: 43.71,
  },
  conversion: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Manrope",
  },
  percent: {
    flexDirection: "row",
    alignItems: "center",
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Manrope",
  },
  buttons: {
    flexDirection: "row",
  },
  iconBox: {
    width: 36,
    height: 36,
    borderRadius: 50,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(151, 151, 151, 1)",
  },
});

export { main };

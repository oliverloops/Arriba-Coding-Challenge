import { StyleSheet } from "react-native";

const paddings = {
  marginLeft: "15%",
  marginRight: "15%",
};

const main = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 0.93,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  bottomSheetBorders: {
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    fontFamily: "Manrope",
    paddingBottom: 15,
    textAlign: "center",
    ...paddings,
  },
  description: {
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "Manrope",
    textAlign: "center",
    ...paddings,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Manrope",
  },
  joinButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 335,
    height: 52,
    marginTop: 10,
    borderRadius: 12,
    backgroundColor: "rgba(46, 202, 136, 1)",
  },
  closeButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 335,
    height: 52,
    borderRadius: 12,
    borderWidth: 1,
    marginTop: 15,
    borderColor: "rgba(151, 151, 151, 1)",
    backgroundColor: "#fff",
  },
});

export { main };

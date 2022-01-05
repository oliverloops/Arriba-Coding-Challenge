import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    color: "rgba(43, 43, 43, 0.95)",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    fontFamily: "Manrope",
  },
  buttonsContainer: {
    justifyContent: "center",
    alignItems: "center",
    transform: [{ translateY: 210 }],
  },
  button: {
    width: 171,
    height: 51,
    borderRadius: 12,
    margin: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(46, 202, 136, 1)",
  },
  textButton: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Manrope",
  },
});

export default styles;

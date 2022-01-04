import { StyleSheet } from "react-native";

const layout = StyleSheet.create({
  main: {
    flex: 1,
  },
  aboveBlock: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  underBlock: {
    flex: 1,
    backgroundColor: "#fff",
  },
  label: {
    backgroundColor: "rgba(255, 255, 255, 0.14)",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 146,
    height: 29,
    borderRadius: 20,
  },
  labelText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 16.8,
  },
  balance: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "700",
    lineHeight: 50.4,
    paddingTop: 10,
  },
});

export { layout };

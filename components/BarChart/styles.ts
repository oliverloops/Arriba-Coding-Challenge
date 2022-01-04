import { StyleSheet } from "react-native";

const borders = {
  paddingLeft: 18,
  paddingRight: 18,
};

const main = StyleSheet.create({
  container: {
    ...borders,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 25,
    height: 100,
  },
  line: {
    marginLeft: 18,
    marginRight: 18,
    width: "100%",
    height: 50,
    borderBottomWidth: 1.5,
    borderBottomColor: "rgba(243, 246, 251, 1)",
  },
  chartContainer: {
    alignItems: "center",
    height: 150,
    justifyContent: "flex-end",
  },
  yearsLayout: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    transform: [{ translateY: 40 }],
    paddingLeft: 20,
    paddingRight: 20,
    zIndex: 99,
    position: "absolute",
  },
  year: {
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 16.8,
    marginTop: 5,
  },
});

const bar = StyleSheet.create({
  body: {
    width: 12,
    marginBottom: 6,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
});

export { main, bar };

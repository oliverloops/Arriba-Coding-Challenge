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
    justifyContent: "flex-end",
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

const box = StyleSheet.create({
  main: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
    width: 327,
    height: 155,
    borderRadius: 10,
    position: "absolute",
    zIndex: 99,
    backgroundColor: "rgba(243, 246, 251, 1)",
  },
  textContainer: {
    flexDirection: "column",
    padding: 20,
  },
  title: {
    fontSize: 12,
    fontWeight: "700",
    color: "rgba(25, 34, 82, 1)",
    lineHeight: 16.8,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "400",
    color: "rgba(132, 143, 172, 1)",
    lineHeight: 16.8,
    marginTop: 7,
  },
});

const button = StyleSheet.create({
  layout: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "12%",
    marginLeft: "10%",
    marginRight: "10%",
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 156,
    height: 47,
    borderWidth: 1.5,
    borderColor: "rgba(46, 202, 136, 1)",
    borderRadius: 25,
  },
  text: {
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 19.12,
  },
});

export { layout, box, button };

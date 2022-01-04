import { Platform, StyleSheet } from "react-native";

const layout = StyleSheet.create({
  main: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    paddingTop: "20%",
    paddingBottom: "20%",
  },
  coinLogo: {
    width: 141,
    height: 141,
  },
});

const bottomSheet = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    paddingLeft: 18,
  },
  subtitle: {
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 22.4,
    paddingLeft: 18,
  },
  description: {
    fontSize: 13,
    fontWeight: "400",
    paddingTop: 10,
    lineHeight: 20,
    paddingLeft: 18,
    paddingRight: 18,
  },
});

const boxContainer = StyleSheet.create({
  box: {
    height: 220,
    width: 220,
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 8,
    marginBottom: 40,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.24,
        shadowRadius: 4.45,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: "space-between",
  },
  container: {
    width: 54,
    height: 54,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 21,
    color: "rgba(17, 17, 17, 1)",
    paddingRight: 50,
  },
  description: {
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 21.6,
    color: "rgba(124, 141, 166, 1)",
  },
});

const bottomSheetFooter = StyleSheet.create({
  body: {
    height: 110,
    width: "100%",
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 125,
    paddingLeft: 18,
    paddingRight: 18,
    paddingBottom: 12,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.24,
        shadowRadius: 4.45,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  button: {
    width: 171,
    height: 51,
    borderRadius: 12,
    paddingLeft: 18,
    paddingRight: 18,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(46, 202, 136, 1)",
  },
  textButton: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
  },
});

export { layout, bottomSheet, boxContainer, bottomSheetFooter };

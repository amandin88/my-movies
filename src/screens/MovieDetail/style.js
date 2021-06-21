import { StyleSheet } from "react-native";
import Dimensions from "../../common/styles/Dimensions";
import Colors from "../../common/styles/Colors";

export default styles = StyleSheet.create({
  movieDetailContainer: {
    flex: 1,
  },
  metaContainer: {
    width: "100%",
    height: "16%",
    paddingVertical: Dimensions.defaultPadding,
    marginBottom: Dimensions.defaultMargin,
    backgroundColor: Colors.secondary,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 4,
  },
  metaItemContainer: {
    width: "100%",
    height: "33%",
    flexDirection: "row",
    paddingHorizontal: 2 * Dimensions.defaultPadding,
  },
  metaLabel: {
    width: "30%",
    height: "100%",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
  },
  metaValue: {
    width: "70%",
    height: "100%",
    justifyContent: "center",
    textAlign: "right",
    fontSize: 16,
    color: "white",
  },
  scrolling: {
    flexGrow: 1,
    alignItems: "center",
  },
  posterContainer: {
    width: "80%",
    height: 500,
    marginBottom: Dimensions.defaultMargin,
  },
  poster: {
    width: "100%",
    height: "100%",
  },
  desciptionContainer: {
    width: "100%",
    paddingHorizontal: 2 * Dimensions.defaultPadding,
    marginBottom: 2 * Dimensions.defaultMargin,
  },
  description: {
    textAlign: "justify",
  },
  switchContainer: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: Dimensions.defaultMargin,
  },
  switchLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.primary,
  },
  buttonsContainer: {
    width: "60%",
    marginBottom: 2 * Dimensions.defaultMargin,
  },
});

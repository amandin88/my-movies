import { StyleSheet } from "react-native";
import Dimensions from "../../common/styles/Dimensions";
import Colors from "../../common/styles/Colors";

export default styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Dimensions.defaultPadding,
    paddingHorizontal: Dimensions.defaultPadding,
  },
  categoryContainer: {
    width: "45%",
    height: 150,
    borderWidth: 4,
    borderRadius: 4,
    borderColor: Colors.secondary,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: Dimensions.defaultRadius,
    elevation: 4,
    marginBottom: 6,
  },
  toucheableContainer: {
    overflow: "hidden",
    borderRadius: Dimensions.defaultRadius,
  },
  itemContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemImage: {
    height: 80,
    marginVertical: Dimensions.defaultMargin,
  },
  itemTitle: {
    height: 40,
    fontSize: 20,
    fontWeight: "bold",
  },
});

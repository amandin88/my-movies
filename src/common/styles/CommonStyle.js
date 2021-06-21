import { StyleSheet } from "react-native";
import Dimensions from "./Dimensions";
import Colors from "./Colors";

export default styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: Dimensions.defaultPadding,
  },
  noMovieContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  noMovie: {
    fontSize: 18,
    color: Colors.primary,
  },
  moviesList: {
    flex: 1,
  },
  itemContainer: {
    width: "100%",
    height: 225,
    borderRadius: Dimensions.defaultRadius,
    marginBottom: Dimensions.defaultMargin,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 4,
    overflow: "hidden",
  },
  toucheableContainer: {
    borderRadius: Dimensions.defaultRadius,
  },
  movieContainer: {
    flex: 1,
    alignItems: "center",
  },
  poster: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    borderRadius: Dimensions.defaultRadius,
  },
  infoContainer: {
    width: "100%",
    height: "20%",
    flexDirection: "row",
    opacity: 0.7,
    backgroundColor: Colors.secondary,
    padding: Dimensions.defaultPadding,
    borderBottomLeftRadius: Dimensions.defaultRadius,
    borderBottomRightRadius: Dimensions.defaultRadius,
  },
  titleContainer: {
    width: "65%",
    height: "100%",
    justifyContent: "center",
  },
  descriptionContainer: {
    width: "35%",
    height: "100%",
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  quickDescription: {
    fontSize: 14,
    color: "white",
    fontStyle: "italic",
    textAlign: "right",
  },
});

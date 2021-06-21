import { createStackNavigator } from "react-navigation-stack";

import CategoriesScreen from "../../../screens/Categories/CategoriesScreen";
import MoviesScreen from "../../../screens/Movies/MoviesScreen";
import MovieDetailScreen from "../../../screens/MovieDetail/MovieDetailScreen";
import AddEditScreen from "../../../screens/AddEdit/AddEditScreen";

import Colors from "../../../common/styles/Colors";

const MoviesNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    Movies: MoviesScreen,
    MovieDetail: MovieDetailScreen,
    AddEdit: AddEditScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primary,
      },
      headerTintColor: "white",
    },
  }
);

export default MoviesNavigator;

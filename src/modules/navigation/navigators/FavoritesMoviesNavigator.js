import { createStackNavigator } from "react-navigation-stack";

import FavoritesMoviesScreen from "../../../screens/Favorites/FavoritesMoviesScreen";
import MovieDetailScreen from "../../../screens/MovieDetail/MovieDetailScreen";
import AddEditScreen from "../../../screens/AddEdit/AddEditScreen";

import Colors from "../../../common/styles/Colors";

const FavoritesMoviesNavigator = createStackNavigator(
  {
    FavoritesMovies: FavoritesMoviesScreen,
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

export default FavoritesMoviesNavigator;

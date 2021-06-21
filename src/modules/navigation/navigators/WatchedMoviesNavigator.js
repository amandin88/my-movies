import { createStackNavigator } from "react-navigation-stack";

import WatchedMoviesScreen from "../../../screens/Watched/WatchedMoviesScreen";
import MovieDetailScreen from "../../../screens/MovieDetail/MovieDetailScreen";
import AddEditScreen from "../../../screens/AddEdit/AddEditScreen";

import Colors from "../../../common/styles/Colors";

const WatchedMoviesNavigator = createStackNavigator(
  {
    WatchedMovies: WatchedMoviesScreen,
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

export default WatchedMoviesNavigator;

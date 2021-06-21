import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

import { Feather } from "@expo/vector-icons";

import MoviesNavigator from "./navigators/MoviesNavigator";
import WatchedMoviesNavigator from "./navigators/WatchedMoviesNavigator";
import FavoritesMoviesNavigator from "./navigators/FavoritesMoviesNavigator";

import Colors from "../../common/styles/Colors";

const MyMoviesNavigation = createBottomTabNavigator(
  {
    Movies: {
      screen: MoviesNavigator,
      navigationOptions: {
        tabBarIcon: (tabBarInfo) => {
          return <Feather name="film" size={20} color={tabBarInfo.tintColor} />;
        },
      },
    },
    Watched: {
      screen: WatchedMoviesNavigator,
      navigationOptions: {
        tabBarIcon: (tabBarInfo) => {
          return <Feather name="eye" size={20} color={tabBarInfo.tintColor} />;
        },
      },
    },
    Favorites: {
      screen: FavoritesMoviesNavigator,
      navigationOptions: {
        tabBarIcon: (tabBarInfo) => {
          return (
            <Feather name="heart" size={20} color={tabBarInfo.tintColor} />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: Colors.unselectedTab,
      style: {
        backgroundColor: Colors.primary,
      },
    },
  }
);

const MyMoviesWithSideNavigator = createDrawerNavigator(
  {
    MyMovies: {
      screen: MyMoviesNavigation,
      navigationOptions: { drawerLabel: "Home" },
    },
  },
  {
    contentOptions: {
      labelStyle: {
        fontSize: 18,
      },
      itemsContainerStyle: {
        marginTop: 50,
      },
    },
  }
);

export default createAppContainer(MyMoviesWithSideNavigator);

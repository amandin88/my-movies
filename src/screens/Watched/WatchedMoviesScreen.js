import commonStyle from "../../common/styles/CommonStyle";

import React from "react";
import { View, Text, FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { useSelector } from "react-redux";

import MovieItem from "../../common/components/MovieItem";
import HeaderNavButton from "../../common/components/HeaderNavButton";

const WatchedMoviesScreen = (props) => {
  const selectedMovies = useSelector((state) => state.movies.watchedMovies);

  return (
    <View style={commonStyle.screen}>
      {selectedMovies.length !== 0 ? (
        <FlatList
          style={commonStyle.moviesList}
          data={selectedMovies}
          renderItem={(itemData) => (
            <MovieItem
              title={itemData.item.title}
              director={itemData.item.director}
              year={itemData.item.year}
              poster={itemData.item.imageUrl}
              onPress={() => {
                props.navigation.navigate("MovieDetail", {
                  movieId: itemData.item.id,
                  movieTitle: itemData.item.title,
                });
              }}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <View style={commonStyle.noMovieContainer}>
          <Text style={commonStyle.noMovie}>You have no favorite movie.</Text>
        </View>
      )}
    </View>
  );
};

WatchedMoviesScreen.navigationOptions = (navData) => {
  return {
    headerTitleStyle: { alignSelf: "center" },
    headerTitle: "Watched Movies",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderNavButton}>
        <Item
          title="Side menu"
          iconName="menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => <View />,
  };
};

export default WatchedMoviesScreen;

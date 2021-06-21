import commonStyle from "../../common/styles/CommonStyle";

import React from "react";
import { View, Text, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { getMovies } from "../../modules/actions/MoviesActions";

import MovieItem from "../../common/components/MovieItem";

const MoviesScreen = (props) => {
  // call and update the filtered movies list
  const dispatch = useDispatch();
  dispatch(getMovies(props.navigation.getParam("categoryName")));

  // get  the filtererd movies list to display
  const selectedMovies = useSelector((state) => state.movies.filteredMovies);

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
          <Text style={commonStyle.noMovie}>
            There is no movie available for this category.
          </Text>
        </View>
      )}
    </View>
  );
};

MoviesScreen.navigationOptions = (navData) => {
  return {
    headerTitleStyle: { alignSelf: "center" },
    headerTitle: navData.navigation.getParam("categoryName"),
    headerRight: () => <View />,
  };
};

export default MoviesScreen;

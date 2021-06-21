import React, { useState, useEffect, useCallback } from "react";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch } from "react-redux";

import HeaderNavButton from "../../common/components/HeaderNavButton";
import MovieDetail from "./components/MovieDetail";

import {
  toggleFavoriteMovie,
  toggleWatchedMovie,
} from "../../modules/actions/MoviesActions";

import MoviesList from "../../utils/dummy-datas";

const MovieDetailScreen = (props) => {
  const dispatch = useDispatch();
  const selectedMovie = MoviesList[props.navigation.getParam("movieId") - 1];

  const [isFavorite, setIsFavorite] = useState(selectedMovie.favorite);

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavoriteMovie(selectedMovie));

    setIsFavorite(selectedMovie.favorite);
  }, [dispatch]);

  const toggleWatchedHandler = useCallback(() => {
    dispatch(toggleWatchedMovie(selectedMovie));
  }, [dispatch]);

  useEffect(() => {
    props.navigation.setParams({ toogleFavorite: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    props.navigation.setParams({ isFav: isFavorite });
  }, [isFavorite]);

  return (
    <MovieDetail
      selectedMovie={selectedMovie}
      onChange={toggleWatchedHandler}
      navigation={props.navigation}
    />
  );
};

MovieDetailScreen.navigationOptions = (navData) => {
  const movieTitle = navData.navigation.getParam("movieTitle");
  const isFavorite = navData.navigation.getParam("isFav");
  const toogleFavorite = navData.navigation.getParam("toogleFavorite");

  return {
    headerTitleStyle: { alignSelf: "center" },
    headerTitle: movieTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderNavButton}>
        <Item
          title="Favorite"
          iconName={isFavorite ? "star" : "star-outline"}
          onPress={toogleFavorite}
        />
      </HeaderButtons>
    ),
  };
};

export default MovieDetailScreen;

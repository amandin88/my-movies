import MoviesList from "../../utils/dummy-datas";

import Actions from "../../constants/Actions";

const initialState = {
  allMovies: MoviesList,
  watchedMovies: findWatchedMovies(MoviesList),
  favoriteMovies: findFavoriteMovies(MoviesList),
  filteredMovies: [],
};

const MoviesReducer = (state = initialState, action) => {
  let selectedMovieIndex;

  switch (action.type) {
    case Actions.GET_MOVIES:
      const selectedMovies = state.allMovies.filter(
        (movie) => movie.category === action.moviesCategory
      );

      // copy the state and override filteredMovies with the new selection
      return { ...state, filteredMovies: selectedMovies };
    case Actions.TOGGLE_FAVORITE:
      // Get the index of the selected movie
      selectedMovieIndex = state.allMovies.findIndex(
        (movie) => movie.id === action.selectedMovie.id
      );

      // update the favorite propertie and update the allMovies list
      action.selectedMovie.favorite
        ? (action.selectedMovie.favorite = false)
        : (action.selectedMovie.favorite = true);

      state.allMovies[selectedMovieIndex] = action.selectedMovie;

      // filter and update the favorite list
      return {
        ...state,
        favoriteMovies: findFavoriteMovies(state.allMovies),
      };
    case Actions.TOGGLE_WATCHED:
      // Get the index of the selected movie
      selectedMovieIndex = state.allMovies.findIndex(
        (movie) => movie.id === action.selectedMovie.id
      );

      // update the watched propertie and update the allMovies list
      action.selectedMovie.watched
        ? (action.selectedMovie.watched = false)
        : (action.selectedMovie.watched = true);

      state.allMovies[selectedMovieIndex] = action.selectedMovie;

      // filter and update the watched list
      return {
        ...state,
        watchedMovies: findWatchedMovies(state.allMovies),
      };
    case Actions.REMOVE_MOVIE:
      // Get the index of the selected movie
      selectedMovieIndex = state.allMovies.findIndex(
        (movie) => movie.id === action.selectedMovie.id
      );

      // copy the allMovies list and remove the selected movie
      const allMoviesUpdated = [...state.allMovies];
      allMoviesUpdated.splice(selectedMovieIndex, 1);

      // update each list
      return {
        ...state,
        allMovies: allMoviesUpdated,
        favoriteMovies: findFavoriteMovies(allMoviesUpdated),
        watchedMovies: findWatchedMovies(allMoviesUpdated),
      };
    default:
      return state;
  }
};

// filter and return the favorite movies list
function findFavoriteMovies(allMovies) {
  return allMovies.filter((movie) => movie.favorite === true);
}

// filter and return the watched movies list
function findWatchedMovies(allMovies) {
  return allMovies.filter((movie) => movie.watched === true);
}

export default MoviesReducer;

import Actions from "../../constants/Actions";

/*
 *	Available Redux Movies actions
 */

// get and return a movies list filtered by category
export const getMovies = (category) => {
  return {
    type: Actions.GET_MOVIES,
    moviesCategory: category,
    info: "Get the filtered movies list by category",
  };
};

// set / unset the selected movie as favorite
export const toggleFavoriteMovie = (movie) => {
  return {
    type: Actions.TOGGLE_FAVORITE,
    selectedMovie: movie,
    info: "Add or remove the movie from the favorite list",
  };
};

// set / unset the selected movie as watched
export const toggleWatchedMovie = (movie) => {
  return {
    type: Actions.TOGGLE_WATCHED,
    selectedMovie: movie,
    info: "Set / Unset the selected movie as watched",
  };
};

// remove the selected movie from the application
export const removeMovie = (movie) => {
  return {
    type: Actions.REMOVE_MOVIE,
    selectedMovie: movie,
    info: "Remove the selected movie from the application",
  };
};

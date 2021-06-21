import { createStore, combineReducers } from "redux";

import MoviesReducer from "../reducers/MoviesReducer";

//combine available reducers
const rootReducer = combineReducers({ movies: MoviesReducer });

// create the store
const MoviesStore = createStore(rootReducer);

export default MoviesStore;

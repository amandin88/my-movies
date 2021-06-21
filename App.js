import React from "react";
import { Provider } from "react-redux";

import MoviesStore from "./src/modules/store/MoviesStore";
import MyMoviesNavigation from "./src/modules/navigation/MyMoviesNagivation";

export default function App() {
  return (
    <Provider store={MoviesStore}>
      <MyMoviesNavigation />
    </Provider>
  );
}

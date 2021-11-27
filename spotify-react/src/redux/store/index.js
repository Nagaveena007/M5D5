import { compose, createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
const aComposeFunctionThatAlwaysWorks =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  homeContent: {
    content: {
      rockSongs: [],
      popSongs: [],
      hiphopSongs: [],
    },
    isError: false,
    isLoading: true,
  },
  albumContent: {
    album: {},
    content: [],
    isLoading: true,
    isError: false,
  },
  artistContent: {
    artist: {},
    content: [],
    isLoading: true,
    isError: false,
  },
  searchContent: {
    content: [],
    isError: false,
    isLoading: true,
  },
  likes: {
    content: [],
  },
  userName: {
    name: "",
  },
};
export const configureStore = createStore(
  initialState,
  aComposeFunctionThatAlwaysWorks(applyMiddleware(thunk))
);

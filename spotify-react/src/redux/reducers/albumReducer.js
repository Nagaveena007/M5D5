import { initialState } from "../store";

const albumReducer = (state = "initialState.albumContent", action) => {
  switch (action.type) {
    case "FETCH_DATA_WITH_ID":
      return {
        ...state,
        album: action.payload,
      };
    case "GET_ALL_SONGS":
      return {
        ...state,
        content: action.payload,
      };
    case "GET_ALBUM_ERROR":
      return {
        ...state,
        isError: true,
      };
    case "TOGGLE_LOADER":
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
export default albumReducer;

import { initialState } from "../store";

const artistReducer = (state = initialState.artistContent, action) => {
  switch (action.type) {
    case "GET_ARIST_DATA":
      return {};

    case "GET_ARIST_CONTENT":
      return {};
    case "DATA_IS_LOADING":
      return {};
    case "FETCHING_FAILED":
      return {};
    default:
      return state;
  }
};
export default artistReducer;

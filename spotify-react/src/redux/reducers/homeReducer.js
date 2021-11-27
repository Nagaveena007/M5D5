import { initialState } from "../store";
const homeReducer = () => {
  switch (action.type) {
    case "SET_ROCK_SONGS":
      return {};
    case "SET_POP_SONGS":
      return {};
    case "SET_HIPHOP_SONGS":
      return {};
    default :
      return state;
  }
};
export default homeReducer
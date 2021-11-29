import { initialState } from "../store";

const likeRducer = (state = initialState.likes, action) => {
  switch (action.type) {
    case "LIKE":
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    case "REMOVE_LIKE":
      return {};
    default:
      return state;
  }
};
export default likeRducer;

import { GETAPI_ACTION } from "../action/apiAction";

const INITIAL_STATE = {
  results: [],
  names: false,
};

function apiReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GETAPI_ACTION:
      return { ...state, results: [...action.result.items], names: true};
    default:
      return state;
  }
};

export default apiReducer;

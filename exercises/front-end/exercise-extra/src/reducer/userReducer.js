import { USER_ACTION, USERREPOS_ACTION } from "../action/userAction";

const INITIAL_STATE = {
  userProfile: {},
  userRepos: [],
};

function apiReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_ACTION:
      return { ...state, userProfile: { ...action.user } };
    case USERREPOS_ACTION:
      return { ...state, userRepos: [ ...action.userRepos ] }
    default:
      return state;
  }
};

export default apiReducer;
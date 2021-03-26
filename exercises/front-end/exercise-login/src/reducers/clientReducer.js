import { CHANGEHANDLE_ACTION } from '../actions/changeHandleAction';
import { CLIENTVALID_ACTION } from '../actions/clientValidAction';

const INITIAL_STATE = {
  user: [],
  email: '',
  password: '',
}

const clientCad = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CLIENTVALID_ACTION:
      return { ...state, user: [action.user] };
    case CHANGEHANDLE_ACTION:
      return { ...state, [action.name]: action.value };
    default:
      return state;
  }
}

export default clientCad;
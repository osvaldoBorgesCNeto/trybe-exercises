import { CHANGEHANDLE_R_ACTION } from '../actions/changeHandleRAction';
import { CREATECLIENT_ACTION } from '../actions/createClientAction';

const INITIAL_STATE = {
  clients: [],
  name: '',
  age: '',
  email: '',
}

const register = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGEHANDLE_R_ACTION:
      return { ...state, [action.name]: action.value };
    case CREATECLIENT_ACTION:
      return { ...state, clients: [...state.clients, action.client] };
    default:
      return state;
  }
}

export default register;
import { CHANGEHANDLE_ACTION } from '../actions/changeHandleAction';
import { CLIENTVALID_ACTION } from '../actions/clientValidAction';
import { CREATECLIENT_ACTION } from '../actions/createClientAction';

const INITIAL_STATE = {
  user: [],
  client: [],
  email: '',
  password: '',
}

const ClientCad = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CLIENTVALID_ACTION:
      return { user: [action.user] };
    case CHANGEHANDLE_ACTION:
      return { ...state, [action.name]: action.value };
    case CREATECLIENT_ACTION:
      return { ...state, client: [...state.client, action.client] };
    default:
      return state;
  }
}

export default ClientCad;
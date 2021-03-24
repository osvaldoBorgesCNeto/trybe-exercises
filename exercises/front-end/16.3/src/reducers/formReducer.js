import { HANDLECHANGE } from "../actions/handleChangeAction";
import { RESETFORM_ACTION } from "../actions/resetFormAction";
import { SENDFORM_ACTION } from "../actions/sendFormAction";

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  countryState: '',
  addressType: '',
  resume: '',
  role: '',
  roleDescription: '',
  formError: {},
  submitted: false,
}

function changeHandleReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case HANDLECHANGE:
      return { ...state, [action.name]: action.value };
    case RESETFORM_ACTION:
      return INITIAL_STATE;
    case SENDFORM_ACTION:
      return { ...state, submitted: true };
    default:
      return state;
  }
}

export default changeHandleReducer;
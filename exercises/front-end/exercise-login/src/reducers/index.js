import { combineReducers } from "redux";
import clientReducer from '../reducers/clientReducer';
import registerReducer from '../reducers/registerReducer';

const rootReducer = combineReducers({
  clientReducer,
  registerReducer,
});

export default rootReducer;
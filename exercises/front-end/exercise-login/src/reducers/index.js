import { combineReducers } from "redux";
import clientReducer from '../reducers/clientReducer';

const rootReducer = combineReducers({
  clientReducer,
});

export default rootReducer;
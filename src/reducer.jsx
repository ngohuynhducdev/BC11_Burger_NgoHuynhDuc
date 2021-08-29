import { combineReducers } from "redux";
import burgerReducer from "./modules/HomePage/reducers/burger";

const rootReducer = combineReducers({
  burger: burgerReducer,
});
export default rootReducer;

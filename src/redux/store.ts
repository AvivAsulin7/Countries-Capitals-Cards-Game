import { combineReducers, legacy_createStore as createStore } from "redux";
import reducer from "./reducer";

const reducers = {
  reducer,
};

export default createStore(combineReducers(reducers));

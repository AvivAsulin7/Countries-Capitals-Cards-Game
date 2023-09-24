import { combineReducers, legacy_createStore as createStore } from "redux";
import reducer from "./reducer";
import settingReducer from "./settingReducer";

const reducers = {
  reducer,
  settingReducer,
};

export default createStore(combineReducers(reducers));

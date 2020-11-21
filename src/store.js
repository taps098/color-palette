import CombineReducers from "./Reducers/CombineReducer";
import {createStore} from "redux";

const store = createStore(CombineReducers);

export default store;

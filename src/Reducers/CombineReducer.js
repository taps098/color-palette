import {combineReducers} from "redux";
import PaletteReducer from "./PaletteReducer";

const CombineReducers = combineReducers({
  Palette : PaletteReducer,
})
export default CombineReducers;


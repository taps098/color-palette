import React from 'react';
import * as actions from '../ActionCreator/Action';

const initialState={
  paletteArray:[
    {code: '#32a852'},
    {code: '#329ea8'},
    {code: '#27a7b3'},
    {code: '#32a852'},
    {code: '#32a852'},
  ]
}
const PaletteReducer=(state=initialState,action)=>{
  switch (action.type) {
    case actions.SHOW_COLOR:
      return state;
    case actions.CLEAR_COLOR:
      let state1 = [];
      return state1;
    default:
      return state;
  }
}
export default PaletteReducer;
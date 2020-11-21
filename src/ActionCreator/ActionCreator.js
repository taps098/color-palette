import * as actions from './Action';

export const show_color=()=>({
  action: actions.SHOW_COLOR,
  payload: 'text'
});

export const clear_color=()=>({
  action:actions.CLEAR_COLOR,
})
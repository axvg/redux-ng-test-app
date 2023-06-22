import { createReducer, on } from '@ngrx/store';
import * as actions from './counter.action';

export const initialState = 20;

export const counterReducer = createReducer(
  initialState,
  on(actions.increment, (state) => state + 1),
  on(actions.decrement, (state) => state - 1),
  on(actions.multiply, (state, { factor }) => state * factor),
  on(actions.divide, (state, { factor }) => state / factor),
  on(actions.reset, (state) => initialState),
);

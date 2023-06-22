import { createReducer, on } from '@ngrx/store';
import { decrement, increment } from './counter.action';

export const initialState = 20;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1)
);

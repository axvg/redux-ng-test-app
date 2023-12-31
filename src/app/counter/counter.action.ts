import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const multiply = createAction('[Counter Component] Multiply', props<{factor: number}>());
export const divide = createAction('[Counter Component] Divide', props<{factor: number}>());
export const reset = createAction('[Counter Component] Reset');
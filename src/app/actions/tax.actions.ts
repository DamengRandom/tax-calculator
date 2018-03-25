import { Action } from '@ngrx/store';

// these are the actions
import { Tax } from '../models/tax.model';
export const ADD_CALCULATE = 'ADD_CALCULATE';
export const VIEW_CALCULATE = 'VIEW_CALCULATE';

export class AddCalculate implements Action {
  readonly type = ADD_CALCULATE;
  constructor(public payload: Tax){}
}

export class ViewCalculate implements Action {
  readonly type = VIEW_CALCULATE;
  constructor(public payload: Tax){}
}

export type All = AddCalculate | ViewCalculate;
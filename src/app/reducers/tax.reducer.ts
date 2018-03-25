import { Action } from '@ngrx/store';
import 'rxjs/Rx';
// action
import * as TaxActions from '../actions/tax.actions';
import { Tax } from '../models/tax.model';

export type Action = TaxActions.All;

// initial default state 
const defaultState: Tax = {
  finalGross: 0,
  netVal: 0,
  superVal: 0,
  taxVal: 0,
  netSuperVal: 0
}

const newState = (state, action) => {
  return Object.assign({}, state, action.payload); // build up a new object 
}

export function taxReducer(state: Tax = defaultState, action: Action){
  let payload = action.payload;
  switch(action.type) {
    case TaxActions.ADD_CALCULATE:
      return newState(state, {
        finalGross: payload.finalGross,
        netVal: payload.netVal,
        superVal: payload.superVal,
        taxVal: payload.taxVal,
        netSuperVal: payload.netSuperVal
      });
    case TaxActions.VIEW_CALCULATE:
      let latestState = {
        finalGross: payload.finalGross,
        netVal: payload.netVal,
        superVal: payload.superVal,
        taxVal: payload.taxVal,
        netSuperVal: payload.netSuperVal
      };
      return latestState;
    default: 
      return state;
  }
}
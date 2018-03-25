import { Action } from '@ngrx/store';
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
  console.log("hahhaa: ", action.type, state, action);
  switch(action.type) {
    case TaxActions.ADD_CALCULATE:
      return newState(state, {
        finalGross: action.payload.finalGross,
        netVal: action.payload.netVal,
        superVal: action.payload.superVal,
        taxVal: action.payload.taxVal,
        netSuperVal: action.payload.netSuperVal
      });
    case TaxActions.VIEW_CALCULATE:
      let latestState = {
        finalGross: action.payload.finalGross,
        netVal: action.payload.netVal,
        superVal: action.payload.superVal,
        taxVal: action.payload.taxVal,
        netSuperVal: action.payload.netSuperVal
      };
      return latestState;
    default: 
      return state;
  }
}
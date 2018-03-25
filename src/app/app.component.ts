import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Tax } from './models/tax.model';
import * as TaxActions from './actions/tax.actions';

// interface AppState {
//   message: string;
//   post: Post;
// }

interface TaxState {
  tax: Tax
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tax Calculator';

  // message$: Observable<string>;
  // post: Observable<Post>;
  tax: Observable<Tax>;

  // likes: number = 0;
  // text: string;

  grossVal: number;
  finalGross: number;
  grossSuperVal: number;
  outputGross: number;
  superPercent: number;

  netVal: number;
  superVal: number;
  taxVal: number;
  netSuperVal: number;
  
  isSMSShown: boolean = false; 
  
  validationSMS: string = "Please enter income and super values";

  constructor(private store: Store<TaxState>){
    // this.message$ = this.store.select('message');
    // console.log("this.message$: ", this.message$);
    // this.post = this.store.select('post');
    // console.log("this.post: ", this.post);
    this.tax = this.store.select('tax');
    console.log("this.tax: ", this.tax);
  }

  // callSpanish(){
  //   this.store.dispatch({ type: 'SPANISH' });
  //   // console.log("wahahha: ", this.store.dispatch({ type: 'SPANISH' }));
  // }

  // callCHINESE(){
  //   this.store.dispatch({ type: 'CHINESE' });
  // }

  // // post vote
  // // editPost() {
  // //   this.store.dispatch(new PostActions.EditText(this.text));
  // // }
  // upvote() {
  //   this.store.dispatch(new PostActions.Upvote());
  //   console.log("dispatch: ", new PostActions.Upvote());
  // }
  // downvote() {
  //   this.store.dispatch(new PostActions.Downvote());
  // }
  // resetPost() {
  //   this.store.dispatch(new PostActions.Reset());
  // }

  // value validations
  isValueValid() {
    if(this.grossSuperVal < 0 || this.grossVal < 0 || this.superPercent < 0){
      this.isSMSShown = true;
      this.validationSMS = "Oops, please neter a positive value";
      return this.isSMSShown;
    }else if(this.superPercent < 9.5) {
      this.isSMSShown = true;
      this.validationSMS = "Oops, please ensure the super value is >= 9.5";
      return this.isSMSShown;
    }else {
      this.isSMSShown = false;
    }
  } 
  // value calculates
  calculator(){
    // cal super
    if(this.grossSuperVal > 0){ // cal gross + super if (gross)
      this.outputGross = this.grossSuperVal / (1 + (this.superPercent / 100));
      this.superVal = this.grossSuperVal - this.outputGross;
    }else if(this.grossVal > 0) { // cal gross if (gross + super) 
      this.superVal = this.grossVal * (this.superPercent / 100);
      this.outputGross = this.grossVal;
    }

    // prepare to save final gross value into state
    if(this.grossVal > 0){
      this.finalGross = this.outputGross;
    }else {
      this.finalGross = this.outputGross + this.superVal;
    }

    // cal tax 
    if(this.outputGross >= 0 && this.outputGross <= 18200){
      this.taxVal = 0;
    }else if(this.outputGross >= 18201 && this.outputGross <= 37000) {
      this.taxVal = (this.outputGross - 18200) * 0.19;
    }else if(this.outputGross >= 37001 && this.outputGross <= 87000) {
      this.taxVal = (this.outputGross - 37000) * 0.325 + 3572;
    }else if(this.outputGross >= 87001 && this.outputGross <= 180000) {
      this.taxVal = (this.outputGross - 87000) * 0.37 + 19822;
    }else if(this.outputGross >= 180001) {
      this.taxVal = (this.outputGross - 180000) * 0.45 + 54232; 
    }

    // cal net 
    if(this.taxVal === 0){
      this.netVal = this.outputGross;
    }else {
      this.netVal = this.outputGross - this.taxVal;
    }

    // cal net + super
    this.netSuperVal = this.netVal + this.superVal;
  }
  
  // save calculated data to state
  statesData(){
    this.calculator();
    var finalOutput = {
      finalGross: this.finalGross,
      netVal: this.netVal,
      superVal: this.superVal,
      taxVal: this.taxVal,
      netSuperVal: this.netSuperVal,
    }
    this.store.dispatch(new TaxActions.AddCalculate(finalOutput));
    // this.store.dispatch({
    //   type: new TaxActions.AddCalculate(),
    //   payload: finalOutput
    // });
    this.store.dispatch(new TaxActions.ViewCalculate(finalOutput));
    // this.store.subscribe((data) => {
    //   console.log("data? ", data);
    //   return data;
    // });
  }
}

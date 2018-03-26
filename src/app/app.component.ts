import { Component } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs/Observable';

// import { Tax } from './models/tax.model';
// import * as TaxActions from './actions/tax.actions';

// interface TaxState {
//   tax: Tax
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(){}
  // // general variables define
  // title = 'Tax Calculator';
  // tax: Observable<Tax>;

  // // tax calculation variables define
  // grossVal: number;
  // finalGross: number;
  // grossSuperVal: number;
  // outputGross: number;
  // superPercent: number;

  // netVal: number;
  // superVal: number;
  // taxVal: number;
  // netSuperVal: number;
  
  // // validation variables define
  // isSMSShown: boolean = false; 
  // validationSMS: string = "Please enter income and super values";

  // constructor(private store: Store<TaxState>){
  //   this.tax = this.store.select('tax');
  // }

  // // value validations
  // isValueValid() {
  //   if(this.grossSuperVal < 0 || this.grossVal < 0 || this.superPercent < 0){
  //     this.isSMSShown = true;
  //     this.validationSMS = "Oops, please neter a positive value";
  //     return this.isSMSShown;
  //   }else if(this.superPercent >= 0 && this.superPercent < 9.5) {
  //     this.isSMSShown = true;
  //     this.validationSMS = "Oops, please ensure the super value is >= 9.5";
  //     return this.isSMSShown;
  //   }else {
  //     this.isSMSShown = false
  //     return this.isSMSShown;
  //   }
  // } 
  // abledSubmit() {
  //   return ((this.grossSuperVal > 0 || this.grossVal > 0) && this.superPercent >= 9.5) ? false : true;
  // }

  // // value calculates
  // calculator(){
  //   // cal super
  //   if(this.grossSuperVal > 0){ // cal gross + super if (gross)
  //     this.outputGross = this.grossSuperVal / (1 + (this.superPercent / 100));
  //     this.superVal = this.grossSuperVal - this.outputGross;
  //   }else if(this.grossVal > 0) { // cal gross if (gross + super) 
  //     this.superVal = this.grossVal * (this.superPercent / 100);
  //     this.outputGross = this.grossVal;
  //   }

  //   // prepare to save final gross value into state
  //   if(this.grossVal > 0){
  //     this.finalGross = this.outputGross;
  //   }else {
  //     this.finalGross = this.outputGross + this.superVal;
  //   }

  //   // cal tax 
  //   if(this.outputGross >= 0 && this.outputGross <= 18200){
  //     this.taxVal = 0;
  //   }else if(this.outputGross >= 18201 && this.outputGross <= 37000) {
  //     this.taxVal = (this.outputGross - 18200) * 0.19;
  //   }else if(this.outputGross >= 37001 && this.outputGross <= 87000) {
  //     this.taxVal = (this.outputGross - 37000) * 0.325 + 3572;
  //   }else if(this.outputGross >= 87001 && this.outputGross <= 180000) {
  //     this.taxVal = (this.outputGross - 87000) * 0.37 + 19822;
  //   }else if(this.outputGross >= 180001) {
  //     this.taxVal = (this.outputGross - 180000) * 0.45 + 54232; 
  //   }

  //   // cal net 
  //   if(this.taxVal === 0){
  //     this.netVal = this.outputGross;
  //   }else {
  //     this.netVal = this.outputGross - this.taxVal;
  //   }

  //   // cal net + super
  //   this.netSuperVal = this.netVal + this.superVal;
  // }
  
  // // save calculated data to state
  // getOutputs(){
  //   this.calculator();
  //   var finalOutput = {
  //     finalGross: this.finalGross,
  //     netVal: this.netVal,
  //     superVal: this.superVal,
  //     taxVal: this.taxVal,
  //     netSuperVal: this.netSuperVal,
  //   }
  //   this.store.dispatch(new TaxActions.AddCalculate(finalOutput));
  //   this.store.dispatch(new TaxActions.ViewCalculate(finalOutput));
  // }
}

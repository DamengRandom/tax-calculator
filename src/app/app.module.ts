// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// imported modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatToolbarModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';

// reducer
import { taxReducer } from './reducers/tax.reducer';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from '../app/components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    StoreModule.forRoot({ 
      tax: taxReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

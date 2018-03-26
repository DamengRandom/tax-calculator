webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/actions/tax.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_CALCULATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return VIEW_CALCULATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AddCalculate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ViewCalculate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");

var ADD_CALCULATE = 'ADD_CALCULATE';
var VIEW_CALCULATE = 'VIEW_CALCULATE';
var AddCalculate = /** @class */ (function () {
    function AddCalculate(payload) {
        this.payload = payload;
        this.type = ADD_CALCULATE;
    }
    return AddCalculate;
}());

var ViewCalculate = /** @class */ (function () {
    function ViewCalculate(payload) {
        this.payload = payload;
        this.type = VIEW_CALCULATE;
    }
    return ViewCalculate;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".img {\n  width: 100%;\n  height: 100%;\n}\n\n.input-value {\n  width: 100%;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<mat-toolbar>\n  <mat-toolbar-row>\n    <h2 class=\"text-center\">Tax Calculator: </h2>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<mat-card>\n  <div class=\"container\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"1%\" fxLayoutAlign=\"center\">\n    <div fxFlex=\"80%\">\n      <mat-form-field class=\"input-value\">\n        <input matInput \n          placeholder=\"Enter gross amount ( > 0)\" \n          type=\"number\"\n          required\n          [disabled]=\"grossSuperVal > 0\"\n          [(ngModel)]=\"grossVal\">\n        <span matPrefix>$&nbsp;</span>\n      </mat-form-field>\n    </div>\n  </div>\n  <div class=\"container\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"1%\" fxLayoutAlign=\"center\">\n    <div fxFlex=\"80%\">\n      <mat-form-field class=\"input-value\">\n        <input matInput \n          placeholder=\"Enter gross + super amount ( > 0)\" \n          type=\"number\"\n          required\n          [disabled]=\"grossVal > 0\"\n          [(ngModel)]=\"grossSuperVal\">\n        <span matPrefix>$&nbsp;</span>\n      </mat-form-field>\n    </div>\n  </div>\n  <div class=\"container\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"1%\" fxLayoutAlign=\"center\">\n    <div fxFlex=\"80%\">\n      <mat-form-field class=\"input-value\">\n        <input matInput \n          placeholder=\"Enter superannuation (>= 9.5)\" \n          type=\"number\"\n          required\n          [(ngModel)]=\"superPercent\">\n        <span matSuffix>%</span>\n      </mat-form-field>\n    </div>\n  </div>\n  <div class=\"container\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"1%\" fxLayoutAlign=\"center\">\n    <div fxFlex=\"40%\">  \n      <button button=\"submit\" \n        class=\"input-value\"\n        mat-raised-button \n        color=\"primary\" \n        (click)=\"getOutputs()\"\n        [disabled]=\"abledSubmit()\">\n        Calculate\n      </button>\n    </div>\n  </div>\n</mat-card>\n\n<mat-card *ngIf=\"isValueValid()\">\n  <p>{{ validationSMS }}</p>\n</mat-card>\n\n<mat-card>\n  <div class=\"container\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"1%\" fxLayoutAlign=\"center\">\n    <div fxFlex=\"80%\">\n      <h4 class=\"text-center\">Output Results:</h4>\n      <p class=\"text-center\"\n        *ngIf=\"(!grossVal || !grossSuperVal) && !superPercent\">Result will be shown after calculated</p>\n      <div *ngIf=\"tax | async as t\">\n        <p *ngIf=\"superVal > 0\"><b>Superannuation Amount: </b> ${{ t.superVal }}</p>\n        <p *ngIf=\"grossSuperVal > 0 && superVal > 0\"><b>Gross Amount: </b> ${{ t.finalGross }}</p>\n        <p *ngIf=\"grossVal > 0 && superVal > 0\"><b>Gross + Super Amount: </b> {{ t.finalGross }}</p>\n        <p *ngIf=\"taxVal >= 0\"><b>Tax Amount (Exclude with medicare tax): </b> ${{ t.taxVal }}</p>\n        <p *ngIf=\"netVal >= 0\"><b>Net Income (Exclude with medicare tax): </b> ${{ t.netVal }}</p>\n        <p *ngIf=\"netVal >= 0 && superVal > 0\"><b>Net + Super Total Income: </b> ${{ t.netSuperVal }}</p>\n      </div>\n    </div>\n  </div>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_tax_actions__ = __webpack_require__("./src/app/actions/tax.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(store) {
        this.store = store;
        // general variables define
        this.title = 'Tax Calculator';
        // validation variables define
        this.isSMSShown = false;
        this.validationSMS = "Please enter income and super values";
        this.tax = this.store.select('tax');
    }
    // value validations
    AppComponent.prototype.isValueValid = function () {
        if (this.grossSuperVal < 0 || this.grossVal < 0 || this.superPercent < 0) {
            this.isSMSShown = true;
            this.validationSMS = "Oops, please neter a positive value";
            return this.isSMSShown;
        }
        else if (this.superPercent >= 0 && this.superPercent < 9.5) {
            this.isSMSShown = true;
            this.validationSMS = "Oops, please ensure the super value is >= 9.5";
            return this.isSMSShown;
        }
        else {
            this.isSMSShown = false;
            return this.isSMSShown;
        }
    };
    AppComponent.prototype.abledSubmit = function () {
        return ((this.grossSuperVal > 0 || this.grossVal > 0) && this.superPercent >= 9.5) ? false : true;
    };
    // value calculates
    AppComponent.prototype.calculator = function () {
        // cal super
        if (this.grossSuperVal > 0) {
            this.outputGross = this.grossSuperVal / (1 + (this.superPercent / 100));
            this.superVal = this.grossSuperVal - this.outputGross;
        }
        else if (this.grossVal > 0) {
            this.superVal = this.grossVal * (this.superPercent / 100);
            this.outputGross = this.grossVal;
        }
        // prepare to save final gross value into state
        if (this.grossVal > 0) {
            this.finalGross = this.outputGross;
        }
        else {
            this.finalGross = this.outputGross + this.superVal;
        }
        // cal tax 
        if (this.outputGross >= 0 && this.outputGross <= 18200) {
            this.taxVal = 0;
        }
        else if (this.outputGross >= 18201 && this.outputGross <= 37000) {
            this.taxVal = (this.outputGross - 18200) * 0.19;
        }
        else if (this.outputGross >= 37001 && this.outputGross <= 87000) {
            this.taxVal = (this.outputGross - 37000) * 0.325 + 3572;
        }
        else if (this.outputGross >= 87001 && this.outputGross <= 180000) {
            this.taxVal = (this.outputGross - 87000) * 0.37 + 19822;
        }
        else if (this.outputGross >= 180001) {
            this.taxVal = (this.outputGross - 180000) * 0.45 + 54232;
        }
        // cal net 
        if (this.taxVal === 0) {
            this.netVal = this.outputGross;
        }
        else {
            this.netVal = this.outputGross - this.taxVal;
        }
        // cal net + super
        this.netSuperVal = this.netVal + this.superVal;
    };
    // save calculated data to state
    AppComponent.prototype.getOutputs = function () {
        this.calculator();
        var finalOutput = {
            finalGross: this.finalGross,
            netVal: this.netVal,
            superVal: this.superVal,
            taxVal: this.taxVal,
            netSuperVal: this.netSuperVal,
        };
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__actions_tax_actions__["b" /* AddCalculate */](finalOutput));
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__actions_tax_actions__["d" /* ViewCalculate */](finalOutput));
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reducers_tax_reducer__ = __webpack_require__("./src/app/reducers/tax.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// modules


// imported modules





// reducer

// components


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__app_components_home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["b" /* StoreModule */].forRoot({
                    tax: __WEBPACK_IMPORTED_MODULE_7__reducers_tax_reducer__["a" /* taxReducer */]
                })
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/reducers/tax.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = taxReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_tax_actions__ = __webpack_require__("./src/app/actions/tax.actions.ts");

// action

// initial default state 
var defaultState = {
    finalGross: 0,
    netVal: 0,
    superVal: 0,
    taxVal: 0,
    netSuperVal: 0
};
var newState = function (state, action) {
    return Object.assign({}, state, action.payload); // build up a new object 
};
function taxReducer(state, action) {
    if (state === void 0) { state = defaultState; }
    var payload = action.payload; // Error reported: https://toddmotto.com/ngrx-store-actions-versus-action-creators
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_tax_actions__["a" /* ADD_CALCULATE */]:
            return newState(state, {
                finalGross: payload.finalGross,
                netVal: payload.netVal,
                superVal: payload.superVal,
                taxVal: payload.taxVal,
                netSuperVal: payload.netSuperVal
            });
        case __WEBPACK_IMPORTED_MODULE_1__actions_tax_actions__["c" /* VIEW_CALCULATE */]:
            var latestState = {
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


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
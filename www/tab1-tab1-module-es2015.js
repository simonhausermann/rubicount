(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Timer\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" (click)=\"clickTimer()\">\n\n  \n\n  <div><p class=\"timer\">{{elapsed.m}}:{{elapsed.s}},{{elapsed.hs}}</p></div>\n        <!--ion-grid class=\"timer ion-text-center\">\n          <ion-row>\n            <ion-col class=\"ion-text-right\">\n              {{elapsed.m}}:\n            </ion-col>\n            <ion-col class=\"ion-text-center\">\n              {{elapsed.s}}\n            </ion-col>\n            <ion-col class=\"ion-text-left\">\n              ,{{elapsed.hs}}\n            </ion-col>\n          </ion-row>\n        </ion-grid-->\n  <p>{{testVar}}</p>\n    \n\n  <app-explore-container name=\"Timer\"></app-explore-container>\n\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-toolbar {\n  --background: translucent;\n}\n\np.timer {\n  font-size: 3em !important;\n  letter-spacing: 3px;\n  width: 100%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaW1vbi9pb25pYy9tYXRoZW8vc3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59XG5cbnAudGltZXIge1xuICBmb250LXNpemU6IDNlbSAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSIsImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cblxucC50aW1lciB7XG4gIGZvbnQtc2l6ZTogM2VtICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Tab1Page = class Tab1Page {
    constructor() {
        this.elapsed = {
            m: '00',
            s: '00',
            hs: '00'
        };
        this.startTime = false;
        this.overallTimer = false; // running timer function
        this.testVar = 'Guguseli';
    }
    clickTimer() {
        /*
          if timer is not running, start timer. If timer is running,
          stopp it an call function to process result.
        */
        if (!this.startTime) {
            this.startTime = new Date().getTime();
            this.runTimer();
        }
        else {
            clearInterval(this.overallTimer);
            this.startTime = false;
            this.finishTry();
        }
        // Storage Test
        this.storage.set('bubu', 'Fidifudi');
        this.testVar = this.storage.get('bubu');
    }
    finishTry() {
        /*
          1. Zeit in Array speichern
          2. Zeitentabelle aktualisieren
          3. Bestzeit aktualisieren
        */
        this.addTimeToResults();
        this.refreshBestTime();
    }
    addTimeToResults() {
        /*
          Resultate Laden, Zeit einfügen, Resultate speichern
          Format:
            timestamp = [milliseconds]
            trytime = [milliseconds]
        */
        let lastTry = {
            timestamp: this.startTime,
            tryTime: this.elapsedTime
        };
        if (this.storage.get('timeAr')) {
            this.timesAr = this.storage.get('timeAr');
        }
        else {
            this.timesAr.push(lastTry);
        }
        this.storage.set('timeAr', this.timesAr);
        //this.elapsedTime
    }
    refreshBestTime() {
    }
    storeAllValues() {
        // this.storage.set('name', 'Max');
    }
    runTimer() {
        let countDownDate = new Date();
        this.overallTimer = setInterval(() => {
            let now = new Date().getTime();
            // Find the distance between now an the count down date
            this.elapsedTime = now - this.startTime;
            // Time calculations for hours, minutes and seconds
            this.elapsed.m = Math.floor((this.elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
            this.elapsed.s = Math.floor((this.elapsedTime % (1000 * 60)) / 1000);
            this.elapsed.hs = Math.floor((this.elapsedTime % (1000)) / 10);
            /*let secs = Math.floor(elapsedTime / 1000);
      
      
            this.elapsed.m = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
            this.elapsed.s = Math.floor((elapsedTime % (1000 * 60)) / 1000);
            this.elapsed.hs = Math.floor((elapsedTime % 1000)  / 10);*/
            this.elapsed.m = this.pad(this.elapsed.m, 2);
            this.elapsed.s = this.pad(this.elapsed.s, 2);
            this.elapsed.hs = this.pad(this.elapsed.hs, 2);
        }, 10);
    }
    pad(num, size) {
        let s = num + "";
        while (s.length < size)
            s = "0" + s;
        return s;
    }
    updateMyDate($event) {
        console.log($event.split(":"));
    }
};
Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map
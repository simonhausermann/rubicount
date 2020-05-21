(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\" (click)=\"clickTimer()\">\n\n  <ion-grid style=\"border-color: black;\">\n    <ion-row>\n      <ion-col></ion-col>\n      <ion-col size=\"11\">\n      <br><br>\n      <picture>\n        <source srcset=\"../../assets/images/logowhite.png\" media=\"(prefers-color-scheme: dark)\" />\n        <source srcset=\"../../assets/images/logo.png\" media=\"(prefers-color-scheme: light), (prefers-color-scheme: no-preference)\" />\n        <img src=\"../../assets/images/logo.png\" loading=\"lazy\" />\n      </picture>\n      </ion-col>\n    <ion-col></ion-col>\n  </ion-row>\n    <ion-row>\n      <ion-col></ion-col>\n      <ion-col size=\"11\">\n        <div class=\"ion-text-center\" class=\"user\" *ngIf=\"showIt\"><b>{{ actualUser }}</b></div><div class=\"user\"  *ngIf=\"!showIt\">&nbsp;</div>\n        <div class=\"ion-text-center\" class=\"user\" *ngIf=\"showIt\">{{ 'TAB1.bestTime' | translate }}: {{ bestTime }}</div><div class=\"user\"  *ngIf=\"!showIt\">&nbsp;</div>\n        <div class=\"timer\">{{ currentTimeDisplay }}</div>\n        <div class=\"smallCenter\" *ngIf=\"showIt && finishedTry; else elseBlock\">\n          <ion-button *ngIf=\"showIt && !plus2; else elsePlus2\" class=\"click-block\" style=\"--box-shadow:none;\" size=\"small\" color=\"light\" (click)=\"tryPlusTwo();$event.stopPropagation()\">  +2  </ion-button>\n          <ng-template #elsePlus2><ion-button class=\"click-block\" style=\"--box-shadow:none;\" size=\"small\" color=\"warning\" (click)=\"tryPlusTwo();$event.stopPropagation()\">  +2  </ion-button></ng-template>\n          <!--ion-button class=\"click-block\" size=\"small\" color=\"light\" (click)=\"tryDNF()\">DNF</ion-button-->\n          <ion-button class=\"click-block\" style=\"--box-shadow:none;\" size=\"small\" color=\"light\" (click)=\"tryDelete();$event.stopPropagation()\">{{ 'TAB1.btnDelete' | translate }}</ion-button>\n          <ion-button class=\"click-block\" style=\"--box-shadow:none;\" size=\"small\" color=\"light\" (click)=\"sendShare(); $event.stopPropagation()\">{{ 'TAB1.btnShare' | translate }}</ion-button>\n        </div>\n        <ng-template #elseBlock><div class=\"smallCenter\">&nbsp;</div></ng-template>\n        <div class=\"smallCenter\" *ngIf=\"firstShow\"><ion-text color=\"danger\"><b>{{ 'TAB1.firstStart' | translate }}</b></ion-text></div>\n        <div class=\"smallCenter\" *ngIf=\"showIt\">{{ scrambleTournament }}<br>\n        {{ scrambleString }}</div>\n          <picture>\n            <source srcset=\"../../assets/images/handswhite.png\" media=\"(prefers-color-scheme: dark)\" />\n            <source srcset=\"../../assets/images/hands.png\" media=\"(prefers-color-scheme: light), (prefers-color-scheme: no-preference)\" />\n            <img src=\"../../assets/images/hands.png\" loading=\"lazy\"  *ngIf=\"showIt\" />\n          </picture>\n      </ion-col>\n    <ion-col></ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col></ion-col>\n    <ion-col size=\"10\">\n      <div class=\"funfact\" *ngIf=\"showIt\">{{ funFact }}</div>\n    </ion-col>\n    <ion-col></ion-col>\n  </ion-row>\n</ion-grid>\n  \n  <app-explore-container name=\"Timer\"></app-explore-container>\n</ion-content>\n\n\n");

/***/ }),

/***/ "./src/app/services/scrambles.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/scrambles.service.ts ***!
  \***********************************************/
/*! exports provided: ScramblesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScramblesService", function() { return ScramblesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ScramblesService = class ScramblesService {
    constructor() {
        this.scrambles = [
            { tournament: "Madagascar Cubing Open 2019", scramble: "L U2 L' F2 L F2 R D2 L2 B2 F L2 D2 F' R' U2 L2 U F" },
            { tournament: "Madagascar Cubing Open 2019", scramble: "B2 D B2 F2 R2 U B2 L2 U2 B' R B U L D' U R U2 L' U'" },
            { tournament: "Madagascar Cubing Open 2019", scramble: "F2 D U L2 U' B2 L' B U L R2 U2 B L' B U B F" },
            { tournament: "Madagascar Cubing Open 2019", scramble: "L2 B2 D2 F R2 F L2 F' R2 D2 B D' B L' D' R2 D' F2 U' L'" },
            { tournament: "Madagascar Cubing Open 2019", scramble: "L U2 R' B2 D2 B2 L2 B2 L D' F U2 R U' F2 L U B' R2" },
            { tournament: "Swedish Championship 2019", scramble: "B2 L2 D2 B2 R B2 R' D2 R' U2 F L R2 B D' F D' R D2 U" },
            { tournament: "Swedish Championship 2019", scramble: "B2 U2 B2 R2 D' F2 D L2 F2 L2 R' U' B2 F D2 R2 F' R' D' R2 B" },
            { tournament: "Swedish Championship 2019", scramble: "D2 L' B2 U2 R B2 U2 B2 L' D2 R F' D R2 U L2 F L F' L2 R2" },
            { tournament: "Swedish Championship 2019", scramble: "D2 F2 D R B' R' F' L' U' F D2 L2 U2 R U2 R U2 L U2 F2 D2" },
            { tournament: "Swedish Championship 2019", scramble: "L' F2 R D2 F2 L2 U2 F2 U2 B U B' U2 F D' B' R2 D2 L R" },
            { tournament: "Mindanao Championship 2019", scramble: "D' F' B2 L D2 R' F' D' F B U' B2 U' D2 L2 D' B2 U R2" },
            { tournament: "Mindanao Championship 2019", scramble: "D2 F2 R U2 F2 D2 B2 U2 F2 L2 D' B D U R B2 D2 F D L" },
            { tournament: "Mindanao Championship 2019", scramble: "U2 L2 D2 L' U2 R' B2 U2 B' F2 L B' U B2 R B' F2 R2 D2" },
            { tournament: "Mindanao Championship 2019", scramble: "B2 F2 U B2 D' F2 D U F2 R' D2 B' U' R2 U B D' L2 U2 R'" },
            { tournament: "Mindanao Championship 2019", scramble: "D2 B D F' L2 F2 R F' B2 D F' U2 B U2 F U2 R2 L2 D2 R2" },
            { tournament: "HCMC Pro League 2019", scramble: "F2 U' R2 F2 U' L2 R2 D2 F2 L' B' L2 B' L F L B U2 B D'" },
            { tournament: "HCMC Pro League 2019", scramble: "B2 D2 B2 L R2 B2 L U2 R2 D' U2 R2 B R D' F2 L' D B D2" },
            { tournament: "HCMC Pro League 2019", scramble: "L' F R D2 L' F' D2 R' L U' L' U2 L2 B' D2 B' R2 F2 U2" },
            { tournament: "HCMC Pro League 2019", scramble: "F L U B R F U R2 B2 U F' U' F2 U' R2 F2 U2" },
            { tournament: "HCMC Pro League 2019", scramble: "L2 U' L2 B2 U2 R2 D2 F' D' L' D B U2 L2 U' F' R2 D' U2" },
            { tournament: "Bilbao Open 2019", scramble: "U' F U' B D' R U2 R' F2 R' U' L2 U' F2 U F2 B2 U L2" },
            { tournament: "Bilbao Open 2019", scramble: "L D' R2 F' U' R' F D2 F U' R' L2 F2 L2 F' B' D2" },
            { tournament: "Bilbao Open 2019", scramble: "R2 U' R2 B2 U2 R2 B2 U2 R2 D' B' R D' L' B L' B' L B F2" },
            { tournament: "Bilbao Open 2019", scramble: "D2 R2 D' R2 F2 D2 F2 D R2 B' L2 R' D L' R2 B2 F D' B' R2" },
            { tournament: "Bilbao Open 2019", scramble: "R F2 R2 D2 R F2 R' U B L U' B U' R' F L' F2 U2" },
            { tournament: "Berlin Open 2014", scramble: "D L2 D' F2 U' B2 D2 L2 U' R2 F' U' R U2 F' R F' D' F2 U" },
            { tournament: "Berlin Open 2014", scramble: "R' F2 D' L' D L U2 D2 L' B2 D2 L2 B L2 F R2 B D2 L2" },
            { tournament: "Berlin Open 2014", scramble: "B2 L' F2 L' D2 U2 B2 L D2 B2 D' R U' R2 B R2 U' R2 F D'" },
            { tournament: "Berlin Open 2014", scramble: "U2 R U2 B2 R D2 L' B2 L2 U2 R' D B' U R' U R B' R' B F" },
            { tournament: "Berlin Open 2014", scramble: "R F2 U2 R L2 F' R' U' L D' F R2 B' D2 R2 F2 D2 R2 B2 U2 L2" },
            { tournament: "Croatian Open 2014", scramble: "L' U2 B2 L2 D2 R B2 L D' U' L F R F2 D B U' B2 L'" },
            { tournament: "Croatian Open 2014", scramble: "B' L2 U2 F D2 L2 F' R2 F U R' B2 U' R2 F' R' D' R U2" },
            { tournament: "Croatian Open 2014", scramble: "R2 F2 B U2 R' D2 B U D' F2 B' D' L2 F2 R2 B2 D R2 D R2" },
            { tournament: "Croatian Open 2014", scramble: "U' L2 D U2 F2 D F2 U' B R2 D' B' L2 R F' L U2 F' U" },
            { tournament: "Croatian Open 2014", scramble: "B2 L2 U' B2 F2 L2 D' R2 U' R U L' R U2 B D F' D R2 D" },
            { tournament: "Taiwan Summer Open 2014", scramble: "D' R2 F2 U' B2 F2 U2 F2 R' F D2 F2 U B2 U' F2 U F' D2 Rw'" },
            { tournament: "Taiwan Summer Open 2014", scramble: "L2 F2 U B2 D2 R2 B2 D' B2 D' F U L' U' R' B F D' B' F Rw2 Uw" },
            { tournament: "Taiwan Summer Open 2014", scramble: "D2 B2 R2 D' R2 F2 D' R2 F U2 L B' U2 B' U' L R B D" },
            { tournament: "Taiwan Summer Open 2014", scramble: "R2 D2 B2 R2 B2 U' F2 U' B2 U' R' B L2 D L2 D2 L B U R2 Uw" },
            { tournament: "Taiwan Summer Open 2014", scramble: "U2 L B2 L2 B2 U2 B2 F2 L D B2 U' L2 B' D' L' F L' U Rw2 Uw2" },
            { tournament: "Indian Open 2015", scramble: "L2 F' U D' L F B' D' R2 F2 R' U R2 U L2 D' L2 D F2 D" },
            { tournament: "Indian Open 2015", scramble: "R2 D' L2 F2 U L2 D L2 B2 D' F D2 F2 L2 U' L' D' U2 R' D2" },
            { tournament: "Indian Open 2015", scramble: "U2 B2 U2 R' U2 F2 R2 D2 L D2 F' R' D' B2 U' F L2 R F' L" },
            { tournament: "Indian Open 2015", scramble: "D2 L2 R2 D' L2 D' B2 U' B2 D2 L' R2 D F L2 R B' F' R F2" },
            { tournament: "Indian Open 2015", scramble: "L F U2 R2 L' U2 D F R D' L U' F2 B2 L2 U F2 U2 D'" },
            { tournament: "Shanghai Summer Open 2015", scramble: "B2 R D2 R F2 L R2 D2 U L2 B2 F D' R2 U' L' F D' F2" },
            { tournament: "Shanghai Summer Open 2015", scramble: "R F2 D2 B2 L2 B2 F2 U2 R' B' R' U2 L' B F2 D U F" },
            { tournament: "Shanghai Summer Open 2015", scramble: "R D2 L' U2 L F2 R' B2 L2 F L U2 L2 D' B2 R' U2 L R' D'" },
            { tournament: "Shanghai Summer Open 2015", scramble: "D' L2 F2 D U' B2 D2 R2 F R2 U2 F U R U2 L R2 B U R" },
            { tournament: "Shanghai Summer Open 2015", scramble: "D' B2 U2 R2 F2 D' F2 U L' B' D' F D U R F' U2 L2" },
            { tournament: "Barcelona FME Open 2015", scramble: "D L2 U2 L2 D L2 B2 F2 D' B' D L2 U' R2 D2 B L' U2 R2 D'" },
            { tournament: "Barcelona FME Open 2015", scramble: "D2 F' D2 U2 R2 U2 B D2 F' L R U' B' U2 R' B2 F R2 U F" },
            { tournament: "Barcelona FME Open 2015", scramble: "F2 L2 U2 R2 D2 B' L2 F2 U' L' B2 L D F' D F2 U R' B2" },
            { tournament: "Barcelona FME Open 2015", scramble: "F2 L2 B U2 B2 R2 F' L B' F2 L2 R F' L' F2 U' F D'" },
            { tournament: "Barcelona FME Open 2015", scramble: "D' U2 B2 R2 F2 R2 U' B2 F2 R F' D' U B2 L D2 L' B L2 D" },
            { tournament: "Swiss Science Open 2015", scramble: "D F2 R2 F2 L2 D B2 R2 D' B' D' R' B' R U' R F2 L2 D' B" },
            { tournament: "Swiss Science Open 2015", scramble: "U F' U' L' B2 D R L' D L' U' R2 U2 R2 D2 B2 D F2 U'" },
            { tournament: "Swiss Science Open 2015", scramble: "R2 F L' B2 R D2 R B2 D' L B D' L2 D2 F2 B2 D' B2 L2" },
            { tournament: "Swiss Science Open 2015", scramble: "F2 B' D R U B' U2 F2 R F' D2 B R2 B U2 B D2 L2 F B" },
            { tournament: "Swiss Science Open 2015", scramble: "L U R2 B2 D R' U' L U' F R2 D2 B2 R B2 R' D2 L D2 B2" },
            { tournament: "Dutch Open 2015", scramble: "U L2 D2 L2 B' D' F' B' R2 L' B D' F2 R2 U D2 F2 D F2" },
            { tournament: "Dutch Open 2015", scramble: "L' F2 D' L2 B2 R2 F L2 B U2 L F' U2 R2 B2 U2 L2 F'" },
            { tournament: "Dutch Open 2015", scramble: "B2 U F2 R2 B2 F2 D B2 R2 F' R' B' D' U' F2 U' B L' U L'" },
            { tournament: "Dutch Open 2015", scramble: "D2 L2 D2 L F2 R2 F2 D2 B2 R' F L U' R2 B2 F L2 R' U' R'" },
            { tournament: "Dutch Open 2015", scramble: "B2 F D2 B2 U2 L2 F' D U2 B2 R' D2 B U L2 D U2 B'" },
            { tournament: "Mumbai Open 2015", scramble: "B' U2 D' B' U' R L' U' B2 R L D2 R B2 D2 R' F2 R2 U2" },
            { tournament: "Mumbai Open 2015", scramble: "D' R2 F2 R2 F2 D B2 F' L' B2 R' U B' F L' U B2 F2 R'" },
            { tournament: "Mumbai Open 2015", scramble: "B2 D2 U2 F U2 L2 F D2 F D2 L' U' B2 R B D L2 D' L' U" },
            { tournament: "Mumbai Open 2015", scramble: "L2 U2 B2 L2 B2 D B2 D U2 L2 B U' L' D' B2 F2 L' F2 U' R'" },
            { tournament: "Mumbai Open 2015", scramble: "R2 L2 B R2 D' B2 L2 B' D F' U R2 L' U2 F2 R2 D2 F2" },
            { tournament: "Slovenian Open 2016", scramble: "B F2 D2 R2 F' D2 F' R2 U2 L R' F D R2 U2 B' U F2 R' U'" },
            { tournament: "Slovenian Open 2016", scramble: "D' L' U R' D2 R F L2 D R' F' D' L2 F2 U2 D2 L2 U F2" },
            { tournament: "Slovenian Open 2016", scramble: "D B2 L2 D2 L2 U' F2 R2 U R2 U' B R' D2 U R' D U L' B' U2" },
            { tournament: "Slovenian Open 2016", scramble: "U F2 D' R2 B2 U R2 D2 B D2 L B' F' D B' L' U R2 U2" },
            { tournament: "Slovenian Open 2016", scramble: "B2 D2 L' F2 R2 D2 R' U2 L' B L' D' F2 L' F R D B U2 B2" },
            { tournament: "Austrian Open 2016", scramble: "R' D2 F B' R' U' F R2 B' U' B' L2 U B2 U D2 B2 D2 L2" },
            { tournament: "Austrian Open 2016", scramble: "D R2 U' F2 U2 B2 D' B2 U L2 B U F' R2 U' R D2 U' F R2" },
            { tournament: "Austrian Open 2016", scramble: "B2 D2 F2 U' B2 L2 F2 R2 U R U' F' D L B R B2 R2 F' R'" },
            { tournament: "Austrian Open 2016", scramble: "F2 B R U' R2 D' F' R F' U2 F D2 B2 R2 B2 R2 D2 L'" },
            { tournament: "Austrian Open 2016", scramble: "D2 R U D2 R' L F B U2 L U D2 B2 R2 F2 R2 D' R2 F2" },
            { tournament: "Strasbourg Open 2016", scramble: "L2 B2 U L2 D' B2 R2 U' B2 R2 U' R' F L B D2 B2 F2 L' F" },
            { tournament: "Strasbourg Open 2016", scramble: "B' R2 B' D2 U2 L2 F' L2 U2 B' F' R B L D' B' U' B L D' U2" },
            { tournament: "Strasbourg Open 2016", scramble: "D' L2 U2 R2 U' F2 L2 U2 B' L' U L2 D2 U2 F U' B' L' U'" },
            { tournament: "Strasbourg Open 2016", scramble: "L D F' D2 F' L B2 R U D L D2 L2 F2 D2 R' B2 D2" },
            { tournament: "Strasbourg Open 2016", scramble: "F2 D2 R2 B D2 F D2 R2 U2 F L' D U2 L2 R' U R' U B' R'" },
            { tournament: "Rome Summer Open 2016", scramble: "R2 D' B D' L F2 D' F L F2 R U2 L2 B U2 F' B R2" },
            { tournament: "Rome Summer Open 2016", scramble: "L D2 F D2 B R' F' U' F L2 U R2 B2 D R2 D' R2 D2 B2 U" },
            { tournament: "Rome Summer Open 2016", scramble: "L2 B' D2 B R2 U2 F' L2 R' F' R2 D2 U F L D' F R' U" },
            { tournament: "Rome Summer Open 2016", scramble: "F2 D2 B2 F2 L D2 R2 B2 R2 F' D L D F L' B2 L' U2 F" },
            { tournament: "Rome Summer Open 2016", scramble: "R' U B U F' B2 R2 L F R2 D B' D2 L2 F' D2 B L2 F' L2" },
            { tournament: "Prague Open 2016", scramble: "L' U2 R' U2 F2 B U' D' R B' D2 R' L' U2 R D2 L B2 L F2 D2" },
            { tournament: "Prague Open 2016", scramble: "L D2 B' R B2 D' F R' F2 U R2 D2 B2 L' U2 R B2 L U2 R2" },
            { tournament: "Prague Open 2016", scramble: "U2 F' R L F' U' D' L' B' R2 U' F2 U F2 U B2 U F2 D F2" },
            { tournament: "Prague Open 2016", scramble: "L2 U2 F U D2 R U R' L' D F' R2 D2 F2 D B2 L2 D F2 B2" },
            { tournament: "Prague Open 2016", scramble: "U2 L2 R2 F2 U2 R2 U2 R2 U' L' F R U F' D2 B R2 F D' B2" },
            { tournament: "Guate maya Open 2016", scramble: "F' L U L' U2 R2 B' U L B L2 B2 D2 B' D2 F R2 U2 F2 D2" },
            { tournament: "Guate maya Open 2016", scramble: "L2 U2 L2 B2 U F2 D2 U L2 U2 L2 R U F' L2 R' B2 U R2 F' R'" },
            { tournament: "Guate maya Open 2016", scramble: "L2 F2 L2 D2 R2 U' B2 R2 D' B2 F' U R2 D' R' B U R2 U2 L" },
            { tournament: "Guate maya Open 2016", scramble: "U2 L U2 F L2 D' F2 U B' R' L2 B2 D L2 F2 U' F2 U2 B2 R2" },
            { tournament: "Guate maya Open 2016", scramble: "U2 R' D2 F2 D2 F2 U2 F2 R' U2 R D B2 U L2 R B R' D U2" },
            { tournament: "Singapore Open 2017", scramble: "B2 F2 D L2 D F2 L2 F2 L' F2 L B L2 U B' L' B2 D B2" },
            { tournament: "Singapore Open 2017", scramble: "D F2 L2 U' L2 R2 F2 L2 D B' R B2 L2 F' D U F D' L2 U'" },
            { tournament: "Singapore Open 2017", scramble: "F U2 B' L2 B2 F' R2 D2 B' U' B R' D F' D F2 D2 B' R'" },
            { tournament: "Singapore Open 2017", scramble: "B2 D' L' F B' L' U' R F' U' F B2 U2 F2 D2 B' L2 F2 D2" },
            { tournament: "Singapore Open 2017", scramble: "F2 U2 L2 R' B2 F2 U2 R2 B2 L2 F' U' F' R2 F2 L' R2 D R' D2" },
            { tournament: "Riga Open 2017", scramble: "D2 F2 U' L2 R2 D2 U' F2 R2 D B U2 B D F D L' F' D U'" },
            { tournament: "Riga Open 2017", scramble: "D' R D' R2 U' B2 L' U2 L D2 R F' R2 B' R2 F2 L2 F2 U2" },
            { tournament: "Riga Open 2017", scramble: "B2 R2 F R2 D2 U2 R2 F' D' L2 U L' F2 R D L2 R' U' B" },
            { tournament: "Riga Open 2017", scramble: "D' B L2 B' U2 D' R2 F' L' F' R2 L2 U' R2 U L2 U L2" },
            { tournament: "Riga Open 2017", scramble: "R2 D2 F L2 U2 B D2 L2 B2 D' B L' F' U' L D U2 R' F" },
            { tournament: "Helsinki Open 2017", scramble: "R2 B2 U F L B U' R D' L B2 D' L2 U R2 F2 D' R2 U L2 U'" },
            { tournament: "Helsinki Open 2017", scramble: "B' L2 U2 F' R2 D2 B2 F D' B D' L' U' B' D R' F U R'" },
            { tournament: "Helsinki Open 2017", scramble: "R2 B U L2 D R D' F D' F B2 L B2 D2 B2 R D2 B2 R'" },
            { tournament: "Helsinki Open 2017", scramble: "R2 B2 U D B L U2 F' L2 D2 B U2 D2 B2 R2 U R2 U2 D B2" },
            { tournament: "Helsinki Open 2017", scramble: "D2 U2 L2 F2 R U2 R2 B2 U' L R U2 F L2 B L' F U R" },
            { tournament: "Vancouver Open  summer2017", scramble: "R U' R2 U' B' L' U L2 F' D F D2 B2 D R2 U' R2 B2 R2" },
            { tournament: "Vancouver Open  summer2017", scramble: "D L2 U' L2 B2 F2 U' B2 F D' F U' R2 D L F' R' U F" },
            { tournament: "Vancouver Open  summer2017", scramble: "B2 U F2 R2 D' L2 B2 F' L B' R U2 B2 D B' F' R B2" },
            { tournament: "Vancouver Open  summer2017", scramble: "B' L2 U2 B U2 B L2 F R2 F2 L U B F2 U' B2 U2 B2 L'" },
            { tournament: "Vancouver Open  summer2017", scramble: "L2 F2 D2 R2 U2 L2 D' U' R' F U B2 L2 B2 U' R' U' L' B U" },
            { tournament: "Crazy Cubes Open 2017", scramble: "B2 R' L' B' R U2 B2 U' D2 B' L2 D2 L' F2 L' U2 D2 R2 F2" },
            { tournament: "Crazy Cubes Open 2017", scramble: "L2 R2 F2 D2 R2 D B2 D' B2 U' L2 B' U L' D2 B' D' B' F2 D B2" },
            { tournament: "Crazy Cubes Open 2017", scramble: "L2 B2 F2 U' F2 U F2 U F2 L R2 B2 L' D B D' U2 F R2" },
            { tournament: "Crazy Cubes Open 2017", scramble: "B L D' L' F L F' U2 F2 D' R' F2 L' F2 R D2 L U2 R' B2" },
            { tournament: "Crazy Cubes Open 2017", scramble: "R2 F2 D' R2 U F2 R2 D' B2 F2 R F' U' R' D2 R B F2 U B2" },
            { tournament: "Canadian Open 2017", scramble: "B U B2 L D R' U' B2 U' F B2 D R2 U' L2 B2 U2 B2 D R2 D" },
            { tournament: "Canadian Open 2017", scramble: "R' B' U' D' B' L2 D' L' D' B2 R' F2 R2 D2 R' D2 R' U2 R" },
            { tournament: "Canadian Open 2017", scramble: "L' U2 B2 L' F2 R' B2 F2 L2 R' U F' R2 U L F2 D2 F2 D' L2" },
            { tournament: "Canadian Open 2017", scramble: "U B2 U' L2 F2 U L2 D R F U' B U2 R B U F2 R B" },
            { tournament: "Canadian Open 2017", scramble: "L B2 L R2 U2 B2 L B' F' L' B F R D F U' R' D'" },
            { tournament: "Swiss Open 2017", scramble: "U L2 R2 B2 U' R2 U F2 R2 D2 F' L2 U' F' L D U2 B' F2 L U" },
            { tournament: "Swiss Open 2017", scramble: "L' B2 R D' B' D R U' F D2 R U2 R U2 B2 U2 R2 U2 R B2" },
            { tournament: "Swiss Open 2017", scramble: "U' B2 R2 D' R2 F2 D' B2 D B2 U L' U2 B F' R2 D' F' L' U2 R'" },
            { tournament: "Swiss Open 2017", scramble: "U2 L2 F2 R' B2 R' U2 L B2 L U2 B L B' U' L2 R U R2 B" },
            { tournament: "Swiss Open 2017", scramble: "B2 U' F2 U L2 U R2 D L2 U' F2 L' D U2 L' R2 F' R B L" },
            { tournament: "Champagne Open 2017", scramble: "R2 B2 D2 U' F2 L2 D2 U' F2 R D2 B2 D' B' R' B R' F L U'" },
            { tournament: "Champagne Open 2017", scramble: "L F' U B' R L D' R2 B' U2 B' R2 B2 R2 L' D2 R U2 L" },
            { tournament: "Champagne Open 2017", scramble: "D2 L F' D' R' D2 B' U2 F2 U B2 U2 B U2 B' R2 B' R2 D2 B2" },
            { tournament: "Champagne Open 2017", scramble: "F' D' R U D2 F' R' F2 L F2 U2 F' D2 B U2 R2 F2 L2 F2" },
            { tournament: "Champagne Open 2017", scramble: "F2 U2 B2 F2 R2 D2 U' F2 U2 L D' B D F' U L' D' B' L' U" },
            { tournament: "Uzbekistan Open 2017", scramble: "F2 D U2 F2 L2 U R2 U2 F2 L2 B' R' D' B2 L B D2 L' B L2" },
            { tournament: "Uzbekistan Open 2017", scramble: "B2 F2 U' B2 L2 U' F' L' D2 U' B L2 U' F2 D' F L F'" },
            { tournament: "Uzbekistan Open 2017", scramble: "B' D R' D F2 D' F' R' F L' D F' D2 B' L2 D2 B' L2 F" },
            { tournament: "Uzbekistan Open 2017", scramble: "U' R2 U2 L2 B2 D' R2 F2 R2 B D B' U2 R2 B2 F' R B U' F" },
            { tournament: "Uzbekistan Open 2017", scramble: "U R2 B2 L2 F2 D2 R2 U' B L' R' D2 L U' F' R F' U L" },
            { tournament: "Malaysia Cube Open 2017", scramble: "B2 D' R2 D' L2 B2 R' B F R' F D' L' B' L2 U' F' U2" },
            { tournament: "Malaysia Cube Open 2017", scramble: "R2 D2 F2 D2 U2 F R2 B' L D' F U R F' U' L B F2 L'" },
            { tournament: "Malaysia Cube Open 2017", scramble: "B2 U B2 D F2 U' F2 L2 D' B L2 R B2 L B' D' L2 U' B2 F'" },
            { tournament: "Malaysia Cube Open 2017", scramble: "U2 B R2 U2 B F' U2 F2 R2 U' B' R' F' R2 F2 U' B' F' R D2" },
            { tournament: "Malaysia Cube Open 2017", scramble: "L' D2 L' R2 F2 R F2 D2 U' B' D R U' F2 L' F D' B' U2" },
            { tournament: "iCube Open 2017", scramble: "R' U2 F2 L2 R B2 R2 F2 U F D' L2 U2 B D2 F2 R' U' L" },
            { tournament: "iCube Open 2017", scramble: "B2 L2 B2 R B2 D2 R D2 B2 F L U' B' R2 D R' B2 F U" },
            { tournament: "iCube Open 2017", scramble: "L2 B R B R2 B' U2 R L2 F' U2 R2 D R2 U' B2 R2 F2 R2" },
            { tournament: "iCube Open 2017", scramble: "F' L' B U B' U D2 F2 U' R D' B2 R L2 F2 R' D2 L' U2 R'" },
            { tournament: "iCube Open 2017", scramble: "L2 U L2 F2 D U2 B2 L2 U L2 B' L U' F2 D' U L F2 D2 U" },
            { tournament: "Whistler Open 2017", scramble: "U' F2 L2 D' R2 B2 D F' R' B2 D' F2 U' B' L2 F2 L D F2" },
            { tournament: "Whistler Open 2017", scramble: "D R2 D2 R2 B2 U L2 B' D2 R2 U' F2 U' F2 L D B R'" },
            { tournament: "Whistler Open 2017", scramble: "L2 U2 B2 R' F2 U2 F2 L B2 R' F R' U' B' F' R2 D L2 F' D'" },
            { tournament: "Whistler Open 2017", scramble: "L2 U2 B2 R2 B2 D' F2 D2 U' F' L' D' B' L2 U2 R U R D' B2" },
            { tournament: "Whistler Open 2017", scramble: "F2 D2 R2 B2 F2 D' F2 L2 U2 B D' U L B' L F' D L' F2" },
            { tournament: "Belgian Open 2017", scramble: "L D2 R D2 B L' B' U' R U2 R2 B R2 F B U2 R2 B' U2 L2" },
            { tournament: "Belgian Open 2017", scramble: "R' B2 L' D2 L B2 L B' D B L' R2 D2 B' F' U B2 R2" },
            { tournament: "Belgian Open 2017", scramble: "B R2 B' U2 B' L2 F L2 R' B R U R2 U2 B' U L' D B" },
            { tournament: "Belgian Open 2017", scramble: "D L F R' B' U' B U2 R2 D B R2 U2 F U2 B L2 U2 F2 B'" },
            { tournament: "Belgian Open 2017", scramble: "R D2 R D2 R U2 L D2 F R' B2 R' D' B2 U L B2 U F'" },
            { tournament: "Liechtenstein Open 2018", scramble: "U2 B2 D' B2 U' R2 B2 D F2 R2 U2 F L D B' L2 B2 F2 L' B" },
            { tournament: "Liechtenstein Open 2018", scramble: "U R' F2 B' U D B R L2 U F' R2 D' F2 D B2 R2 D2 L2 D' L2" },
            { tournament: "Liechtenstein Open 2018", scramble: "R2 D2 F' R2 U2 F2 L2 F2 L U B R B F' L' B U F'" },
            { tournament: "Liechtenstein Open 2018", scramble: "L U2 F B' R' D' L2 U2 D2 F' U B' R2 U2 F' B2 D2 R2 F2" },
            { tournament: "Liechtenstein Open 2018", scramble: "R D F2 L F L B D' R2 F2 B' L2 F2 U L2 F2 U R2 U" },
            { tournament: "Morocco Open 2018", scramble: "F2 L2 U' R' D2 R' F D F' L' F D2 B L2 F2 U2 F' D2 L2" },
            { tournament: "Morocco Open 2018", scramble: "R D2 L U2 R' D2 U2 R2 B L' R' F D' R2 D2 R2 F R D" },
            { tournament: "Morocco Open 2018", scramble: "R' F' U' B R' B U' F2 U' B2 L D2 R2 U2 F2 U2 B2 L' F2 R'" },
            { tournament: "Morocco Open 2018", scramble: "R2 U F2 D2 R2 U' F2 U' R2 U2 R' F L2 F U L B D2 L'" },
            { tournament: "Morocco Open 2018", scramble: "F' R2 B2 D2 F U2 R2 F D2 L2 R2 D' R' D2 U B' R' D U2 R" },
            { tournament: "Madrid Open 2018", scramble: "L2 B2 R2 U2 B2 F2 U' B2 F' R' D L2 U2 B2 D F2 L U' B2" },
            { tournament: "Madrid Open 2018", scramble: "F2 D2 R2 F2 L2 U' L2 D2 U2 L' U' F' D2 U' B' R' B R2 F2 U'" },
            { tournament: "Madrid Open 2018", scramble: "F D B2 R' U' B2 U' R L' F' L2 D' R2 L2 B2 U2 B2 D B2 D' R2" },
            { tournament: "Madrid Open 2018", scramble: "D2 L F L U F2 B2 R D' F' R2 B2 D2 L' U2 R D2 B2 L2" },
            { tournament: "Madrid Open 2018", scramble: "U B2 L2 D' B2 R2 B2 D R2 U' F' D' L' R' D' U' R F2 D L' U'" },
            { tournament: "Beijing Open 2018", scramble: "R2 L D2 F B2 U R' B' R' D2 L B2 L2 D' F2 B2 R2 D L2" },
            { tournament: "Beijing Open 2018", scramble: "D B D' B R2 L B R L' U' B R B2 R' U2 R' B2 R2 L" },
            { tournament: "Beijing Open 2018", scramble: "D2 F2 R' B2 F2 L' B2 U2 F2 D2 L B' R F2 U' R' D B' F R'" },
            { tournament: "Beijing Open 2018", scramble: "F' D2 F' U2 F2 R2 D2 U2 B2 F' L R D R' U' R D2 B L' D" },
            { tournament: "Beijing Open 2018", scramble: "B L U2 R2 B2 L F' D B' U L' D B2 D' R2 F2 U2" },
            { tournament: "Zurich Open 2018", scramble: "B2 F2 R2 F2 L' B2 F2 L' D2 F2 U B D' F U2 L2 F2 U' B' F2" },
            { tournament: "Zurich Open 2018", scramble: "L2 B2 D' R2 U' R2 B2 U' L2 U R F2 R B U B2 D' F' D2 L" },
            { tournament: "Zurich Open 2018", scramble: "R2 B U2 F2 L' U F B R' U B2 L2 B' R2 D2 R2 F B'" },
            { tournament: "Zurich Open 2018", scramble: "B' L F U' D F2 L2 D2 L' F R2 D2 L' U2 R U2 F2 R2 B2 L'" },
            { tournament: "Zurich Open 2018", scramble: "R' L' D2 L' D' L B' U F R2 D' R2 D2 F R2 B2 D2 B' D2 F" },
            { tournament: "Zurich Open 2018", scramble: "B' D2 F' D2 F' R2 B2 R2 B2 U' R2 B' L F' D F2 R D B' F'" },
            { tournament: "Brasilia Open 2018", scramble: "B L' D' R U2 F2 U2 B2 L' B2 L' F2 D2 F2 U2 D R2" },
            { tournament: "Brasilia Open 2018", scramble: "B' L F2 R2 B U' F' R L2 F2 U' F2 U2 R U2 D2 R' U2 L'" },
            { tournament: "Brasilia Open 2018", scramble: "D' B2 F2 D' U2 B2 F2 R2 D2 L' D B F2 L2 R' F D F2 U2 R" },
            { tournament: "Brasilia Open 2018", scramble: "R L2 B L D' R' B U F R2 L' B' R2 U2 R2 B U2 F' B'" },
            { tournament: "Brasilia Open 2018", scramble: "F U D F2 L F' U D F2 B' L' F2 B' L2 D2 B' D2 R2 D2" },
            { tournament: "Delhi Monsoon Open 2018", scramble: "U2 L F' L2 U L D F2 B' R B' R2 F2 L U2 F2 U2 R2" },
            { tournament: "Delhi Monsoon Open 2018", scramble: "U2 F2 U R2 U' L2 F2 D L B2 F U B2 D2 R2 D' U2 R' D2 F'" },
            { tournament: "Delhi Monsoon Open 2018", scramble: "L F2 D' R2 D' B' U L F2 L' B L2 B' R2 L2 F' R2 F2 R2" },
            { tournament: "Delhi Monsoon Open 2018", scramble: "R2 U2 D L2 F' L D' B R' L2 B U F2 U' D' F2 U' B2 R2" },
            { tournament: "Delhi Monsoon Open 2018", scramble: "U' R U' D2 B R2 L' U' F B' U' R2 B2 U L2 F2 D2 R2 L2 U" },
            { tournament: "Shenzhen Open 2018", scramble: "F' U2 R2 F U2 F' U2 L2 U2 L B' L' U L F R2 D2 R B' L2" },
            { tournament: "Shenzhen Open 2018", scramble: "L2 D2 L2 R2 F' L2 B' L2 R D' F2 U L' U R D' R U2" },
            { tournament: "Shenzhen Open 2018", scramble: "D2 F R2 B' F2 D2 U2 L D U2 L' R2 D L2 B R' U2 L'" },
            { tournament: "Shenzhen Open 2018", scramble: "R2 B2 R2 D F2 L2 R2 D' U F' L U B' L' R' F' L F2 L2" },
            { tournament: "Shenzhen Open 2018", scramble: "U B2 R2 D' F2 U2 B2 D' B2 R B R2 D B' D' F R' U L'" },
            { tournament: "Italian Open 2018", scramble: "R' D2 B' U R U R U F U' R U2 R2 D2 F2 R D2 R2 U2 R2 L'" },
            { tournament: "Italian Open 2018", scramble: "L2 D2 U' B2 D L2 D2 L2 B2 L2 D' L U B' D' R F' L B2 D F2" },
            { tournament: "Italian Open 2018", scramble: "B2 U2 F2 L2 F2 D R2 D' U2 B2 F2 L F L' U2 B2 L' D' L2 B' F'" },
            { tournament: "Italian Open 2018", scramble: "L2 D B2 L2 U R2 D2 F2 U2 F' L2 B2 U2 R U F2 L' B F" },
            { tournament: "Italian Open 2018", scramble: "D B2 R2 U2 F2 U F2 U L' U2 F' D2 L2 B' L R' U F' U" },
            { tournament: "Hungarian Open 2018", scramble: "R' D2 F2 R F2 L' U2 L R D U' B' R D' L D' R U' B' D'" },
            { tournament: "Hungarian Open 2018", scramble: "D L2 F R2 U F U' R D' L D2 F2 D2 L U2 R' L U2 R2" },
            { tournament: "Hungarian Open 2018", scramble: "L2 B2 L2 B' R2 U2 B U2 L2 U' L B' U2 L2 R D' L R' D' B2" },
            { tournament: "Hungarian Open 2018", scramble: "U2 R2 U' L2 R2 D L2 B2 R2 U2 R' D2 B D' U L2 B' R2 B L'" },
            { tournament: "Hungarian Open 2018", scramble: "L' D F' D L' D' F' R2 D' F B R2 F2 U2 R2 B2 L2 U2" },
            { tournament: "Santa Cruz Open 2018", scramble: "B2 U2 R2 U' B2 D' L2 R2 U B2 R2 B D2 R2 D' U2 R' F' D L R2" },
            { tournament: "Santa Cruz Open 2018", scramble: "U D2 B2 L' B2 R2 U' R L2 U' F2 L2 U2 B R2 U2 B U2 B'" },
            { tournament: "Santa Cruz Open 2018", scramble: "U' R B' U D2 R2 L' F U' F U2 L2 F D2 F2 L2 F2 B' L2" },
            { tournament: "Santa Cruz Open 2018", scramble: "F B2 U D' B D' R B2 L F2 D2 F2 D L2 D2 F2 B2 L2 F2 U" },
            { tournament: "Santa Cruz Open 2018", scramble: "U2 B L' B D' B2 R' B2 U' L' F L2 F L2 B' D2 F' U2 D2" },
            { tournament: "Turin Winter Open 2019", scramble: "R2 F' D2 L2 R2 B' L2 F U2 F2 D2 U' L D' F' L U' L' D'" },
            { tournament: "Turin Winter Open 2019", scramble: "L' F R2 U' R' U R' U2 D F' R2 L2 B2 U' R2 L2 U2 B2 D L2" },
            { tournament: "Turin Winter Open 2019", scramble: "D2 L B D L D' B D L' F' R2 F2 U' B2 U' D R2 F2 D" },
            { tournament: "Turin Winter Open 2019", scramble: "R2 D' L2 D B2 D' U' R2 D' F2 U L' U L' B2 L B' F' U L B" },
            { tournament: "Turin Winter Open 2019", scramble: "U2 L2 F2 U2 L2 U' B2 U F2 R2 D' B U B' L' F' U2 R2 F2 L2 U2" },
            { tournament: "Bangkok Open 2019", scramble: "U D' R L' D B U B2 R' F D2 F2 U' F2 D R2 U' F2 R2 D'" },
            { tournament: "Bangkok Open 2019", scramble: "B2 R' F U D R' B2 L U F R' U2 L2 B2 D2 F2 L U2 R2 D2" },
            { tournament: "Bangkok Open 2019", scramble: "U2 R2 F2 D L2 B2 U2 B F' R' D' R2 U2 L2 R F2 L' R'" },
            { tournament: "Bangkok Open 2019", scramble: "B2 R2 D B2 U' F R2 B2 U' L F R2 L2 B U2 F' D2 F L2 F2" },
            { tournament: "Bangkok Open 2019", scramble: "B D' B' R' L' B' D L' U' L B' L' F2 D2 F2 L' D2 L' D2" },
            { tournament: "Transilvania Cubing Open 2019", scramble: "D2 R B2 L2 U2 R' B2 D2 L' R' U2 B' U' R2 B D' L R' D L F" },
            { tournament: "Transilvania Cubing Open 2019", scramble: "B2 L2 U2 R2 D' R2 B2 L2 U' B L2 B L U B D' B L U' R2" },
            { tournament: "Transilvania Cubing Open 2019", scramble: "D2 B' F' L2 F' D2 U2 B D2 U B D F R D2 B2 U' F L2" },
            { tournament: "Transilvania Cubing Open 2019", scramble: "F' D' B2 R2 B2 R L2 F L D' F' U2 B' R2 U2 L2 D2 B2 D2" },
            { tournament: "Transilvania Cubing Open 2019", scramble: "U2 B F L2 B R2 F' L2 D F' D U2 L' R D' B' D' U2 B2" },
            { tournament: "Manchester Open 2019", scramble: "F2 L2 R2 D2 B2 D' B2 F2 D F L2 D' R' F L B2 U' L' D2 L2" },
            { tournament: "Manchester Open 2019", scramble: "B2 F2 U' F2 D' U' L2 U' R D B2 L' D2 B' L R2 U' L' F" },
            { tournament: "Manchester Open 2019", scramble: "U2 B2 U2 L2 R2 U' B L2 B2 F D' B2 D' U' B' R' D' U'" },
            { tournament: "Manchester Open 2019", scramble: "R2 B U2 F' R2 F L2 D2 B2 L2 D L B U2 F' R' U' B2 R' F" },
            { tournament: "Manchester Open 2019", scramble: "B2 U' F2 R2 D' L2 F2 L2 R2 U2 L R U R U' R2 F D' R'" },
            { tournament: "Halifax Open 2019", scramble: "R2 B2 L2 U2 R2 F' R2 D2 F2 L' B F2 D' R D2 U' B L U'" },
            { tournament: "Halifax Open 2019", scramble: "U2 F U2 B' L' U2 R B' U' D2 F' R2 F2 U2 B2 D B2 D' L2 D'" },
            { tournament: "Halifax Open 2019", scramble: "U' R2 U' B2 R2 U2 F2 R U' F L2 R D' B' L D2 L" },
            { tournament: "Halifax Open 2019", scramble: "R' F L D2 B' R D F2 L U' R2 B2 L' U2 L' U2 F2 R2 U2" },
            { tournament: "Halifax Open 2019", scramble: "B2 D2 F2 L2 U' L2 R2 U2 R F2 D2 F R2 U' B L' B F R" },
            { tournament: "Budapest Open 2019", scramble: "F2 U' L2 B2 D' F2 R2 U2 F2 U' B D' U2 L U2 L B' L2 F D2" },
            { tournament: "Budapest Open 2019", scramble: "U' B' D2 R F' D F' L' F2 U' L2 F D2 F' R2 F' D2 R2 B2 L2 B" },
            { tournament: "Budapest Open 2019", scramble: "U2 B U2 F' R2 D2 R2 B F D2 F' D F R' B' D U L B' U2" },
            { tournament: "Budapest Open 2019", scramble: "F D' R B' L' U B' L2 B R' U D' R2 D F2 D B2 R2 B2 D" },
            { tournament: "Budapest Open 2019", scramble: "B U2 R2 B U2 B' D2 F2 L2 D2 L' D2 L U' L F2 D' U' F' L2" },
            { tournament: "German Open 2019", scramble: "L' F' B2 R F2 R2 F L2 B' R2 L2 B2 U' F2 B2 U' L2 D' F2 R2" },
            { tournament: "German Open 2019", scramble: "D L2 U2 L2 D2 F2 R2 B2 F2 U F D R' U F' R' F' L U2 L2" },
            { tournament: "German Open 2019", scramble: "U2 L' F' U' D' R' D R' D F D2 R B2 R' F2 B2 D2 R' L'" },
            { tournament: "German Open 2019", scramble: "U2 L' F U' F D' R U' B2 L B' U2 F2 B U2 D2 R2 D2 B'" },
            { tournament: "German Open 2019", scramble: "R' F B U' L2 U' D' L' B2 R F U2 D2 L2 F' L2 F B2 R2 D2 F2" },
            { tournament: "Wuhan Open 2019", scramble: "U L2 U L2 F2 D B2 R2 U L F L R2 B D' R2 D B U2" },
            { tournament: "Wuhan Open 2019", scramble: "F2 L2 R2 U2 F2 U B2 L2 U' L2 R F' R B D' R2 B2 U F2 U2" },
            { tournament: "Wuhan Open 2019", scramble: "B2 L D F' B U D' F' D2 R D' F2 L2 D F2 R2 U F2 U2 B2" },
            { tournament: "Wuhan Open 2019", scramble: "F' R2 F' U' L B' R' B' D B U R2 B2 U L2 D B2 U L2 D2" },
            { tournament: "Wuhan Open 2019", scramble: "B2 F2 R' B2 L2 U2 F2 R2 D2 F L U' F U F L R2 B U' R'" },
            { tournament: "Madagascar Cubing Open 2019", scramble: "F' R2 F B2 D2 R2 U F2 R' D' F' D2 L2 D2 F B' R2 F L2 F2" },
            { tournament: "Madagascar Cubing Open 2019", scramble: "U2 F2 R' D2 L' D2 U2 R' U B' F' L' D2 B' L' B2 U2 F2 U'" },
            { tournament: "Madagascar Cubing Open 2019", scramble: "L F2 L' U R2 D2 B' D R2 L' D L2 D2 R' U2 L' F2 L2 B2" },
            { tournament: "Madagascar Cubing Open 2019", scramble: "F2 U2 B U2 R2 B' F U2 R' B R2 D' F2 D2 L U' F' D2 U2" },
            { tournament: "Madagascar Cubing Open 2019", scramble: "F2 U2 B2 L F2 U2 F2 R' F2 D R' F2 L' D2 F' U B' F D U" },
            { tournament: "Tajikistan Open 2019", scramble: "F D2 L' U2 R' D' B' R2 L F L' B2 D2 B2 R2 B2 D' B2 R2 D2" },
            { tournament: "Tajikistan Open 2019", scramble: "L2 U L2 D2 F2 D U2 L2 B' U B2 L2 D R' F U' B' F R" },
            { tournament: "Tajikistan Open 2019", scramble: "B2 U2 R F2 R B2 U2 B2 D2 L' D L' F2 D L' U2 L2 U B" },
            { tournament: "Tajikistan Open 2019", scramble: "B2 L R2 B2 U2 L2 B2 U2 F2 D' B' F' U' L' D' U' R F' D2 R'" },
            { tournament: "Tajikistan Open 2019", scramble: "L2 R2 B D2 B F' U2 L' B2 F2 R' U' B' F R' D L2 U2" }
        ];
    }
};
ScramblesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ScramblesService);



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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
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
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-toolbar {\n  --background: translucent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaW1vbi9pb25pYy9ydWJpY291bnQvc3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59XG4iLCJpb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59Il19 */");

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
/* harmony import */ var _services_format_time_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/format-time.service */ "./src/app/services/format-time.service.ts");
/* harmony import */ var _services_scrambles_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/scrambles.service */ "./src/app/services/scrambles.service.ts");
/* harmony import */ var _ionic_native_insomnia_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/insomnia/ngx */ "./node_modules/@ionic-native/insomnia/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/screenshot/ngx */ "./node_modules/@ionic-native/screenshot/ngx/index.js");








let Tab1Page = class Tab1Page {
    constructor(scrambler, insomnia, translate, socialSharing, screenshot, myFormat) {
        this.scrambler = scrambler;
        this.insomnia = insomnia;
        this.translate = translate;
        this.socialSharing = socialSharing;
        this.screenshot = screenshot;
        this.myFormat = myFormat;
        this.logLevel = 0;
        // End localStorage Variables
        this.showIt = true;
        this.timesArray = [];
        this.bestTime = '-';
        this.currentTimeDisplay = '00:00.00';
        this.finishedTry = false;
        this.scrambleTournament = '';
        this.scrambleString = '';
        this.startTime = false; // timer start
        this.overallTimerFunc = false; // running timer function
        this.sleepModeFunction = false;
        this.maxRunningTime = 1200000;
        this.plus2 = false;
        this.funFact = '';
        this.firstShow = true;
        this.logo = '../assets/images/logo.png';
        this.hands = '../assets/images/hands.png';
        this.translate.setDefaultLang('en');
        this.translate.use('de');
    }
    ngOnInit() {
        this.myLog('method ngOnInit', 1);
    }
    ionViewWillEnter() {
        this.myLog('method ionViewWillEnter', 1);
        this.setNewScramble();
        this.actualUser = String(localStorage.getItem('actualUser'));
        this.userObject = JSON.parse(localStorage.getItem(this.actualUser));
        if (this.userObject.listTimes.length > 0)
            this.firstShow = false;
        this.translate.use(this.userObject.language);
        this.bestTime = this.userObject.bestTime;
        this.funFacts = this.getFunfacts(this.userObject.language);
    }
    sendShare() {
        this.showIt = false;
        this.ngOnInit();
        this.screenshot.URI(80).then((res) => {
            this.socialSharing.share(this.translate.instant('SHARE.solvedIn') + ' ' + this.currentTimeDisplay, null, res.URI, null).then(() => { }, () => {
                this.myLog('SocialSharing failed', 1);
            });
        }, () => {
            this.myLog('Screenshot failed', 1);
        });
        this.showIt = true;
        this.ngOnInit();
    }
    setNewScramble() {
        let randIndex = Math.floor(Math.random() * this.scrambler.scrambles.length);
        this.scrambleTournament = this.scrambler.scrambles[randIndex].tournament;
        this.scrambleString = this.scrambler.scrambles[randIndex].scramble;
    }
    clickTimer() {
        this.myLog('method clickTimer', 1);
        /*
          if timer is not running, start timer. If timer is running,
          stopp it an call function to process result.
        */
        this.firstShow = false;
        if (!this.startTime) { // start new timer
            this.showIt = false;
            this.plus2 = false;
            this.insomnia.keepAwake().then(() => this.myLog('success keep awake', 2), () => this.myLog('error keep awake', 2));
            this.startTime = new Date().getTime();
            this.funFact = '';
            let countDownDate = new Date();
            this.sleepModeFunction = setInterval(() => {
                this.insomnia.allowSleepAgain().then(() => this.myLog('success allow sleep again', 2), () => this.myLog('error allow sleep again', 2));
                this.clickTimer();
            }, this.maxRunningTime + 1000);
            this.overallTimerFunc = setInterval(() => {
                let now = new Date().getTime();
                // Find the distance between now an the count down date
                this.elapsedTime = now - this.startTime;
                // Time calculations for hours, minutes and seconds
                this.currentTimeDisplay = this.myFormat.formateTime(this.elapsedTime);
            }, 10);
        }
        else { // stop timer
            this.showIt = true;
            this.finishedTry = true;
            this.insomnia.allowSleepAgain().then(() => this.myLog('success allow sleep again', 2), () => this.myLog('error allow sleep again', 2));
            clearInterval(this.overallTimerFunc);
            clearInterval(this.sleepModeFunction);
            this.finishTry();
            this.startTime = false;
            let randomNr = Math.floor(Math.random() * this.funFacts.length);
            this.myLog('display fun fact nr ' + randomNr, 2);
            this.funFact = this.funFacts[randomNr];
        }
    }
    finishTry() {
        this.myLog('method finishTry', 1);
        /*
          1. Zeit in Array speichern
          2. Zeitentabelle aktualisieren
          3. Bestzeit aktualisieren
        */
        this.addTimeToResults();
        this.refreshBestTime();
        this.storeAllValues();
    }
    addTimeToResults(replace = false) {
        this.myLog('method addTimeToResults', 1);
        if (replace)
            this.userObject.listTimes.pop();
        this.userObject.listTimes.push({
            timeStamp: this.startTime + this.elapsedTime,
            tryTime: this.elapsedTime
        });
        this.myLog('user.listTimes after: ' + JSON.stringify(this.userObject.listTimes), 2);
    }
    refreshBestTime() {
        this.myLog('refreshBestTime', 1);
        this.userObject.bestTime = this.myFormat.formateTime(0);
        if (this.userObject.listTimes.length > 0) {
            console.log('yes');
            let best = 999999999;
            this.userObject.listTimes.forEach(function (item) { if (item.tryTime < best)
                best = item.tryTime; });
            this.userObject.bestTime = this.myFormat.formateTime(best);
        }
        this.bestTime = this.userObject.bestTime;
    }
    storeAllValues() {
        this.myLog('method storeAllValues: ', 1);
        this.userObject.changedTimes = true;
        localStorage.setItem(this.actualUser, JSON.stringify(this.userObject));
    }
    tryPlusTwo() {
        if (!this.plus2) {
            this.elapsedTime = this.elapsedTime + 2000;
            this.plus2 = true;
        }
        else {
            this.elapsedTime = this.elapsedTime - 2000;
            this.plus2 = false;
        }
        this.addTimeToResults(true);
        this.refreshBestTime();
        this.storeAllValues();
        this.currentTimeDisplay = this.myFormat.formateTime(this.elapsedTime);
    }
    tryDelete() {
        this.myLog('method tryDelete', 1);
        this.userObject.listTimes.pop();
        this.currentTimeDisplay = this.myFormat.formateTime(0);
        this.refreshBestTime();
        this.storeAllValues();
        this.finishedTry = false;
    }
    myLog(consoleText, level) {
        if (this.logLevel >= level) {
            console.log('timer: ' + consoleText);
        }
        return;
    }
    getFunfacts(lang = 'en') {
        switch (lang) {
            case 'de': {
                return [
                    "Die Gotteszahl (God's Number) ist die kleinste Zahl an Rotationen, welche es braucht um einen 3x3x3 Rubik's Cube aus einer beliebigen Zufallsposition zu lösen. Seit Juli 2010 wissen wir, dass diese Zahl 20 beträgt.",
                    "Man schätzt, dass weniger als 5.8% der Weltbevölkerung einen Rubik's Cube lösen kann.",
                    "Statistiken zeigen, dass 1 von 20 Menschen, die einen Rubik's Cube besitzen, diesen auch lösen können.",
                    "1974 hat ein junger Architekturprofessor in Budapest ein anscheinend unmögliches Objekt geschaffen.",
                    "Der erste Magic Cube (wie er zuerst genannt wurde) wurde 1975 in a Budapest verkauft.",
                    "Das Rätsel setzt sich aus 26 Mini-Würfeln zusammen, die 'cubies' or 'cubelets' genannt werden.",
                    "Der Magic Cube wurde 1980 in Rubik's Cube unbenannt.",
                    "Der Rubik's Cube gewannt den Preis «Toy of the Year» 1980 und 1981.",
                    "Über 350 Millionen Rubik’s Cubes wurden weltweit verkauft – er ist somit das bestverkaufte Spielzeug der Welt.",
                    "Ein Rubik's Cube hat 43,252,003,274,489,856,000 verschiedene Stellungen.",
                    "Mit sechs farbigen Seiten, 21 Teilen and 54 äusseren Oberflächen, gibt es über 43 QUINTILLIONEN mögliche Stellungen.",
                    "Wird ein Rubik's Cube einmal pro Sekunde gedreht, so braucht es 1400 TRILLIONEN JAHRE bis alle Stellungen einmal erreicht wurden.",
                    "Die besten Speed Cubers lösen den Cube durchschnittlich unter 6 Sekunden.",
                    "Der aktuelle Weltrekordhalter is Yusheng Du aus China. Er löste den Rubik's Cube an den Wuhu Open 2018 in 3.47 Sekunden.",
                    "Für einige Speed Cuber ist Stil wichtiger als Geschwindigkeit.",
                    "Ein dreijähriges Kind aus China löste den Rubik's Cube unter 2 Minuten.",
                    "Legos & smartphone lösen den Rubik's cube schneller als Menschen (Stand Mai 2020 in 1.2 Sekunden).",
                    "IN einem 2012 erschienenen Interview mit CNN hat Rubik zugegeben, dass er über einen Monat gebraucht hatte, den ersten Cube zu lösen.",
                    "Der 12-jährige Patrick Bossert schrieb 1981 das Buch «You Can Do the Cube» und landete damit auf der New York Times Bestseller Liste.",
                    "Von der Serie «Rubik, the Amazing Cube» wurden 1983 Samstagmorgens jeweils 13 folgen ausgestrahlt. Der Würfel bekam Beine, Gesicht und magische Fähigkeiten.",
                    "Zum 15-jährigen Jubiläum 1995, hat die Firma Diamond Cutters International einen voll funktionalen Rubik’s Cube aus 185 Karat Diamanten gebaut.",
                    "Als der Kubismus in der Kunstszene bereits bekannt war, entstand mit dem Rubik's Cube eine neue Stilrichtung: der Rubik’s Kubismus.",
                    "2006 erlebte der Rubik's Cube einen Boom, als er in «The Pursuit of Happyness» von Will Smith's gelöst wurde.",
                    "2003 sprang der Cube-Enthusiast Dan Knights aus einem Flugzeug und löste den Würfel in 45 seconds freiem Fall bevor sich der Fallschirm öffnete.",
                    "Jakub Kipa kann den Cube in 20.57 Sekunden lösen - nur mit seinen Füssen.",
                    "Echte Cuber wissen, dass ein Speed Cube regelmässig geölt werden muss.",
                    "Der Erfinder des Rubik's Cube war ein Architekturprofessor, der die Idee der dreidimensionalen Geometrie aufzeigen wollte",
                    "Die erste Weltmeisterschaft wurde 1982 in Budapest ausgetragen. Der Gewinner Minh Thai aus den USA löste den Cube in heute sehr langsamen 22.95s.",
                    "Über 100 kg schwer und 1.56 Meter gross ist der weltgrösste Rubik’s Cube von Tony Fisher.",
                    "Der kleinste Cube is nur gerade 6 mm gross.",
                    "Die «World Cube Association» ist eine non-profit Organisation, die Wettkämpfe austrägt für den Rubik's Cube und andere mechanische Rätsel, weltweit seit 2004.",
                    "Obwohl Rubik's einen eigenen Speedcube anbietet, meiden echte Speed Cubers den Originalbrand wegen mangelnder Qualität",
                    "Ein 22x22x22 Rubik's Cube ist das weltweit grösste Drehrätsel. Es wurde 2016 fertiggestellt und besteht aus 2691 Teilen, alle erstellt mit einem handelsüblichen 3D-Drucker."
                ];
                break;
            }
            default: {
                return [
                    "God's Number shows the smallest number of moves needed to solve the 3x3x3 Rubik's Cube from any random starting position. Since July of 2010 we know that this number is 20, so every position can be solved in twenty moves or less.",
                    "It's estimated that less than 5.8% of the world's population can solve the Rubik's Cube.",
                    "Statistics show that 1 in 20 people who own a Rubik's Cube can solve a Rubik's Cube.",
                    "In 1974, a young professor of architecture in Budapest created the apparently impossible object.",
                    "The first Magic Cube (as it was originally known) was sold in a Budapest toy shop in 1975.",
                    "The puzzle is made up of twenty-six miniature cubes, known as 'cubies' or 'cubelets'",
                    "The Magic Cube was renamed Rubik's Cube in 1980.",
                    "The Rubik's Cube won Toy of the Year in 1980 and 1981.",
                    "Over 350 million Rubik’s Cubes have been sold worldwide – making it the bestselling toy of all time.",
                    "A Rubik's Cube has 43,252,003,274,489,856,000 possible configurations.",
                    "With six coloured sides, 21 pieces and 54 outer surfaces, there's a combined total of over 43 QUINTILLIONS different possible configurations.",
                    "If you turned Rubik's Cube once every second it would take you 1400 TRILLION YEARS to finish to go through all the configurations.",
                    "The best speed cubers can solve the cube in average under six seconds.",
                    "The current world record holder is Yusheng Du from China. He completed the puzzle at the Wuhu Open 2018 in 3.47 seconds.",
                    "Some speed-cubers go for style points over raw speed.",
                    "A three-year-old in China solved the puzzle in under two minutes.",
                    "Legos & smartphone solve Rubik's cube faster than human record.",
                    "In a 2012 interview with CNN, Rubik admitted it took him more than a month to solve the Cube when he first invented it.",
                    "12-year-old Patrick Bossert, who authored a book, You Can Do the Cube, in 1981 and wound up on the New York Times bestsellers list.",
                    "Rubik, the Amazing Cube aired 13 episodes on Saturday mornings in 1983. The puzzle was given legs, a face, and magical abilities.",
                    "For the puzzle’s 15th anniversary in 1995, Diamond Cutters International created a fully-functional Rubik’s Cube made out of 185 carats of diamonds.",
                    "With Cubism already installed in art circles, the arrival of Rubik’s Cube led to a variation: Rubik’s Cubism.",
                    "In 2006, sales experienced an uptick after the puzzle was featured in The Pursuit of Happyness: Will Smith's character is seen solving it.",
                    "In 2003, the Cube enthusiast Dan Knights jumped from a plane at 12,000 feet, giving him roughly 45 seconds of free fall time to solve the Cube before his parachute would have to be opened.",
                    "Jakub Kipa can solve it in 20.57 seconds using only his feet.",
                    "Serious Cubers know that a Rubik’s Cube that hasn’t been properly maintained is going to hamper their efforts.",
                    "The person responsible for the construction of the Rubik’s Cube is a professor of architecture, who was trying to conceive the idea of three-dimensional geometry.",
                    "The first World Championship was held in Budapest in 1982 and the first winner was far too slow for today’s braggers; 22.95 seconds for Minh Thai from the United States.",
                    "Weighing about 100 kg and being 1.56 meters tall, the largest Rubik’s Cube in the world is made by Tony Fisher.",
                    "The smallest Cube is just 6 mm for the moment and people are trying to shrink it even more.",
                    "The World Cube Association is a non-profit organisation that regulates and holds competitions for the Rubik's Cube and other mechanical twisty puzzles all over the World since 2004.",
                    "Even though Rubik's has its own speedcube, competitive speedcubers still don't really use Rubik's branded cubes because they don't have the best quality.",
                    "A 22x22x22 Rubik's Cube became the world's highest order twisty puzzle, created by corenpuzzle. It was completed in mid-January 2016 and it contains 2691 functioning parts made with a consumer 3D printer."
                ];
                break;
            }
        }
    }
};
Tab1Page.ctorParameters = () => [
    { type: _services_scrambles_service__WEBPACK_IMPORTED_MODULE_3__["ScramblesService"] },
    { type: _ionic_native_insomnia_ngx__WEBPACK_IMPORTED_MODULE_4__["Insomnia"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"] },
    { type: _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_7__["Screenshot"] },
    { type: _services_format_time_service__WEBPACK_IMPORTED_MODULE_2__["FormatTimeService"] }
];
Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_scrambles_service__WEBPACK_IMPORTED_MODULE_3__["ScramblesService"],
        _ionic_native_insomnia_ngx__WEBPACK_IMPORTED_MODULE_4__["Insomnia"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"],
        _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_7__["Screenshot"],
        _services_format_time_service__WEBPACK_IMPORTED_MODULE_2__["FormatTimeService"]])
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map
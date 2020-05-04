(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Times\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"false\">\n  <ion-grid>\n    <ion-row>\n      <ion-col></ion-col>\n      <ion-col size=\"11\">\n        <ion-list>\n            <ion-item-sliding *ngFor=\"let item of listTimes; let i = index; \">\n              <ion-item-options side=\"end\">\n                <ion-item-option color=\"danger\" expandable (click)=\"deleteTime(item)\">\n                  Delete\n                </ion-item-option>\n                <!--ion-item-option color=\"warning\" expandable>\n                  DNF\n                </ion-item-option-->\n              </ion-item-options>\n          \n              <ion-item>\n                <ion-label>\n                  <ion-grid>\n                    <ion-row>\n                      <ion-col style=\"text-align: left\">\n                        {{ item.id }}\n                      </ion-col>\n                      <ion-col style=\"text-align: center;\">\n                        {{ item.timeStamp | date: 'dd.MM.yy' }}\n                      </ion-col>\n                      <ion-col style=\"text-align: right;\">\n                        {{ item.tryTimeFormat }}\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-label>\n              </ion-item>\n            \n              </ion-item-sliding>\n          \n        </ion-list>\n      </ion-col>\n      <ion-col></ion-col>\n    </ion-row>\n  </ion-grid>\n  \n  <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" sedge slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      <ion-fab-button (click)=\"importOne();\"><ion-icon name=\"add\"></ion-icon></ion-fab-button>\n      <ion-fab-button (click)=\"importMany();\"><ion-icon name=\"download\"></ion-icon></ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n\n  \n\n  <app-explore-container name=\"Times\"></app-explore-container>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");








let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }])
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })
], Tab3PageModule);



/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-toolbar {\n  --background: translucent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaW1vbi9pb25pYy9ydWJpY291bnQvc3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIiwic3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59IiwiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _services_format_time_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/format-time.service */ "./src/app/services/format-time.service.ts");
/* harmony import */ var _services_array_functions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/array-functions.service */ "./src/app/services/array-functions.service.ts");






let Tab3Page = class Tab3Page {
    constructor(alertCtrl, myFormat, myArrayFunctions) {
        this.alertCtrl = alertCtrl;
        this.myFormat = myFormat;
        this.myArrayFunctions = myArrayFunctions;
        this.logLevel = 0;
        // End localStorage variables
        this.listTimes = [];
        this.listTimesFull = [];
        this.showItemsStep = 20;
        this.showItemsCount = 20;
    }
    ionViewWillEnter() {
        this.myLog('method ionViewWillEnter', 1);
        this.actualUser = localStorage.getItem('actualUser');
        this.userObject = JSON.parse(localStorage.getItem(this.actualUser));
        this.myLog('user "' + this.actualUser + '" - ' + JSON.stringify(this.userObject), 2);
        this.showItemsCount = 20;
        this.displayTimes(this.showItemsStep);
    }
    displayTimes(itemsCount) {
        this.myLog('method displayTimes: ' + itemsCount, 0);
        let showItems = Math.min(itemsCount, this.showItemsCount);
        console.log(showItems);
        let tempTimes = [];
        if (this.userObject.listTimes.length > 0) {
            this.listTimesFull = this.userObject.listTimes;
            this.listTimesFull.sort(this.myArrayFunctions.compareValues('timeStamp', 'desc'));
            this.listTimesFull = this.myArrayFunctions.addIdToArrayOfObjects(this.listTimesFull);
            tempTimes = this.listTimesFull.slice(0, showItems);
            for (let i = 0; i < tempTimes.length; i++) {
                tempTimes[i].tryTimeFormat = this.myFormat.formateTime(tempTimes[i].tryTime);
            }
        }
        console.log(tempTimes.length);
        this.listTimes = tempTimes;
        this.userObject.changedTimes = false;
    }
    doInfinite(event) {
        console.log('Begin async operation');
        /*if (this.showItemsStep + this.showItemsCount > this.listTimesFull.length)
          event.target.disabled = true;*/
        return new Promise((resolve) => {
            setTimeout(() => {
                this.showItemsCount = this.showItemsCount + this.showItemsStep;
                this.displayTimes(this.showItemsCount);
                console.log('Async operation has ended');
                resolve();
                event.target.complete();
            }, 500);
        });
    }
    importOne() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.myLog('method importOne', 1);
            const prompt = yield this.alertCtrl.create({
                header: 'New solve time',
                message: "Enter Time (MM:SS.00)",
                inputs: [
                    {
                        name: 'time',
                        type: 'text',
                        placeholder: 'MM:SS.00'
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        handler: data => {
                            this.myLog('Cancel clicked', 2);
                        }
                    },
                    {
                        text: 'Save',
                        handler: data => {
                            if (this.checkImportTimeFormat(data.time)) {
                                let tryTimestamp = this.getTSfromString(data.time);
                                this.addTimeToResults(new Date().getTime(), tryTimestamp);
                                this.calculateNewBestTime();
                                localStorage.setItem(this.actualUser, JSON.stringify(this.userObject));
                                this.displayTimes(this.showItemsStep);
                            }
                        }
                    }
                ]
            });
            yield prompt.present();
        });
    }
    getTSfromString(timeString) {
        let firstAr = timeString.split(':');
        let secondAr = firstAr[1].split('.');
        return parseInt(firstAr[0]) * 60 * 1000 + parseInt(secondAr[0]) * 1000 + parseInt(secondAr[1]) * 10;
    }
    checkImportTimeFormat(importTime) {
        let firstAr = importTime.split(':');
        if (firstAr.length == 2 && firstAr[0].length >= 1 && !isNaN(parseInt(firstAr[0])) && parseInt(firstAr[0]) < 60) {
            let secondAr = firstAr[1].split('.');
            if (secondAr.length == 2) {
                if (secondAr[0].length == 2 && !isNaN(parseInt(secondAr[0])) && parseInt(secondAr[0]) < 60) {
                    if (secondAr[1].length == 2 && !isNaN(parseInt(secondAr[1])) && parseInt(secondAr[1]) < 100) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    addTimeToResults(timestamp, timeString) {
        this.myLog('method addTimeToResults', 1);
        this.myLog('user.listTimes before: ' + JSON.stringify(this.userObject.listTimes), 2);
        this.userObject.listTimes.push({ timeStamp: timestamp, tryTime: timeString });
        localStorage.setItem(this.actualUser, JSON.stringify(this.userObject));
    }
    importMany() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.myLog('method importMany', 1);
            const prompt = yield this.alertCtrl.create({
                header: 'Import multiple times',
                message: "List of times (split by nl) format MM:SS.00",
                inputs: [
                    {
                        name: 'date',
                        type: 'date',
                        placeholder: 'DD.MM.YYYY'
                    },
                    {
                        name: 'times',
                        type: 'text',
                        placeholder: '15:13.11 16:12.33 ...'
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        handler: data => {
                            this.myLog('Cancel clicked', 2);
                        }
                    },
                    {
                        text: 'Save',
                        handler: data => {
                            let myArray;
                            myArray = data.times.split(' ');
                            let tryTimestamp;
                            if (myArray.length > 0) {
                                for (let i = 0; i < myArray.length; i++) {
                                    if (this.checkImportTimeFormat(myArray[i])) {
                                        tryTimestamp = this.getTSfromString(myArray[i]);
                                        this.addTimeToResults(new Date(Date.parse(data.date)).getTime() + 1000 * (myArray.length - i), tryTimestamp);
                                    }
                                }
                                this.calculateNewBestTime();
                                localStorage.setItem(this.actualUser, JSON.stringify(this.userObject));
                                this.displayTimes(this.showItemsStep);
                            }
                        }
                    }
                ]
            });
            yield prompt.present();
        });
    }
    deleteTime(delTry) {
        this.myLog('method deleteTime', 1);
        this.myLog('Delete item: ' + JSON.stringify(delTry), 2);
        this.deleteTryFromArray(delTry);
        localStorage.setItem(this.actualUser, JSON.stringify(this.userObject));
        this.myLog('++' + delTry.tryTimeFormat + ' vs. ' + this.userObject.bestTime, 2);
        if (delTry.tryTimeFormat == this.userObject.bestTime) {
            this.calculateNewBestTime();
        }
        localStorage.setItem(this.actualUser, JSON.stringify(this.userObject));
        this.userObject.changedTimes = true;
        this.displayTimes(this.showItemsStep);
    }
    calculateNewBestTime() {
        this.myLog('method calculateNewBestTime', 2);
        let best = 999999999;
        this.userObject.listTimes.forEach(function (item) { if (item.tryTime < best)
            best = item.tryTime; });
        this.userObject.bestTime = this.myFormat.formateTime(best);
    }
    myLog(consoleText, level) {
        if (this.logLevel >= level) {
            console.log('times: ' + consoleText);
        }
        return;
    }
    deleteTryFromArray(deleteObject) {
        this.myLog('method deleteTryFromArray', 2);
        let tmpAr = [];
        this.userObject.listTimes.forEach(function (item) {
            if (item.timeStamp != deleteObject.timeStamp) {
                tmpAr.push(item);
            }
        });
        tmpAr.sort(this.myArrayFunctions.compareValues('timeStamp', 'desc'));
        tmpAr = this.myArrayFunctions.addIdToArrayOfObjects(tmpAr);
        this.userObject.listTimes = tmpAr;
        return;
    }
}; // end Class
Tab3Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _services_format_time_service__WEBPACK_IMPORTED_MODULE_3__["FormatTimeService"] },
    { type: _services_array_functions_service__WEBPACK_IMPORTED_MODULE_4__["ArrayFunctionsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scroll-infinite', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
], Tab3Page.prototype, "infiniteScroll", void 0);
Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab3',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tab3.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _services_format_time_service__WEBPACK_IMPORTED_MODULE_3__["FormatTimeService"], _services_array_functions_service__WEBPACK_IMPORTED_MODULE_4__["ArrayFunctionsService"]])
], Tab3Page);



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module-es2015.js.map
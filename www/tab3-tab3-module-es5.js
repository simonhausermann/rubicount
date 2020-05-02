function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab3Tab3PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Times\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"false\">\n  <ion-grid>\n    <ion-row>\n      <ion-col></ion-col>\n      <ion-col size=\"11\">\n        <ion-list>\n            <ion-item-sliding *ngFor=\"let item of listTimes; let i = index; \">\n              <ion-item-options side=\"end\">\n                <ion-item-option color=\"danger\" expandable (click)=\"deleteTime(item)\">\n                  Delete\n                </ion-item-option>\n                <!--ion-item-option color=\"warning\" expandable>\n                  DNF\n                </ion-item-option-->\n              </ion-item-options>\n          \n              <ion-item>\n                <ion-label>\n                  <ion-grid>\n                    <ion-row>\n                      <ion-col style=\"text-align: left\">\n                        {{ item.id }}\n                      </ion-col>\n                      <ion-col style=\"text-align: center;\">\n                        {{ item.timeStamp | date: 'dd.MM.yy' }}\n                      </ion-col>\n                      <ion-col style=\"text-align: right;\">\n                        {{ item.tryTimeFormat }}\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-label>\n              </ion-item>\n            \n              </ion-item-sliding>\n          \n        </ion-list>\n      </ion-col>\n      <ion-col></ion-col>\n    </ion-row>\n  </ion-grid>\n  \n  <ion-fab vertical=\"bottom\" horizontal=\"end\" sedge slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      <ion-fab-button (click)=\"importOne();\"><ion-icon name=\"add\"></ion-icon></ion-fab-button>\n      <ion-fab-button (click)=\"importMany();\"><ion-icon name=\"download\"></ion-icon></ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n\n  \n\n  <app-explore-container name=\"Times\"></app-explore-container>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/tab3/tab3.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab3/tab3.module.ts ***!
    \*************************************/

  /*! exports provided: Tab3PageModule */

  /***/
  function srcAppTab3Tab3ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function () {
      return Tab3PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab3.page */
    "./src/app/tab3/tab3.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");

    var Tab3PageModule = function Tab3PageModule() {
      _classCallCheck(this, Tab3PageModule);
    };

    Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]
      }])],
      declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })], Tab3PageModule);
    /***/
  },

  /***/
  "./src/app/tab3/tab3.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab3/tab3.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab3Tab3PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-toolbar {\n  --background: translucent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaW1vbi9pb25pYy9ydWJpY291bnQvc3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIiwic3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59IiwiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/tab3/tab3.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab3/tab3.page.ts ***!
    \***********************************/

  /*! exports provided: Tab3Page */

  /***/
  function srcAppTab3Tab3PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3Page", function () {
      return Tab3Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_format_time_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/format-time.service */
    "./src/app/services/format-time.service.ts");
    /* harmony import */


    var _services_array_functions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/array-functions.service */
    "./src/app/services/array-functions.service.ts");

    var Tab3Page = /*#__PURE__*/function () {
      function Tab3Page(alertCtrl, myFormat, myArrayFunctions) {
        _classCallCheck(this, Tab3Page);

        this.alertCtrl = alertCtrl;
        this.myFormat = myFormat;
        this.myArrayFunctions = myArrayFunctions;
        this.logLevel = 0; // End localStorage variables

        this.listTimes = [];
      }

      _createClass(Tab3Page, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.myLog('method ionViewWillEnter', 1);
          this.actualUser = localStorage.getItem('actualUser');
          this.userObject = JSON.parse(localStorage.getItem(this.actualUser));
          this.myLog('user "' + this.actualUser + '" - ' + JSON.stringify(this.userObject), 2);
          this.displayTimes();
        }
      }, {
        key: "importOne",
        value: function importOne() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var prompt;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.myLog('method importOne', 1);
                    _context.next = 3;
                    return this.alertCtrl.create({
                      header: 'New solve time',
                      message: "Enter Time (MM:SS.00)",
                      inputs: [{
                        name: 'time',
                        type: 'text',
                        placeholder: 'MM:SS.00'
                      }],
                      buttons: [{
                        text: 'Cancel',
                        handler: function handler(data) {
                          _this.myLog('Cancel clicked', 2);
                        }
                      }, {
                        text: 'Save',
                        handler: function handler(data) {
                          if (_this.checkImportTimeFormat(data.time)) {
                            var tryTimestamp = _this.getTSfromString(data.time);

                            _this.addTimeToResults(new Date().getTime(), tryTimestamp);

                            _this.calculateNewBestTime();

                            localStorage.setItem(_this.actualUser, JSON.stringify(_this.userObject));

                            _this.displayTimes();
                          }
                        }
                      }]
                    });

                  case 3:
                    prompt = _context.sent;
                    _context.next = 6;
                    return prompt.present();

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getTSfromString",
        value: function getTSfromString(timeString) {
          var firstAr = timeString.split(':');
          var secondAr = firstAr[1].split('.');
          return parseInt(firstAr[0]) * 60 * 1000 + parseInt(secondAr[0]) * 1000 + parseInt(secondAr[1]) * 10;
        }
      }, {
        key: "checkImportTimeFormat",
        value: function checkImportTimeFormat(importTime) {
          var firstAr = importTime.split(':');

          if (firstAr.length == 2 && firstAr[0].length >= 1 && !isNaN(parseInt(firstAr[0])) && parseInt(firstAr[0]) < 60) {
            var secondAr = firstAr[1].split('.');

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
      }, {
        key: "addTimeToResults",
        value: function addTimeToResults(timestamp, timeString) {
          this.myLog('method addTimeToResults', 1);
          this.myLog('user.listTimes before: ' + JSON.stringify(this.userObject.listTimes), 2);
          this.userObject.listTimes.push({
            timeStamp: timestamp,
            tryTime: timeString
          });
          localStorage.setItem(this.actualUser, JSON.stringify(this.userObject));
        }
      }, {
        key: "importMany",
        value: function importMany() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var prompt;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.myLog('method importMany', 1);
                    _context2.next = 3;
                    return this.alertCtrl.create({
                      header: 'Import multiple times',
                      message: "List of times (split by nl) format MM:SS.00",
                      inputs: [{
                        name: 'date',
                        type: 'date',
                        placeholder: 'DD.MM.YYYY'
                      }, {
                        name: 'times',
                        type: 'text',
                        placeholder: '15:13.11 16:12.33 ...'
                      }],
                      buttons: [{
                        text: 'Cancel',
                        handler: function handler(data) {
                          _this2.myLog('Cancel clicked', 2);
                        }
                      }, {
                        text: 'Save',
                        handler: function handler(data) {
                          var myArray;
                          myArray = data.times.split(' ');
                          var tryTimestamp;

                          if (myArray.length > 0) {
                            for (var i = 0; i < myArray.length; i++) {
                              if (_this2.checkImportTimeFormat(myArray[i])) {
                                tryTimestamp = _this2.getTSfromString(myArray[i]);

                                _this2.addTimeToResults(new Date(Date.parse(data.date)).getTime() + 1000 * (myArray.length - i), tryTimestamp);
                              }
                            }

                            _this2.calculateNewBestTime();

                            localStorage.setItem(_this2.actualUser, JSON.stringify(_this2.userObject));

                            _this2.displayTimes();
                          }
                        }
                      }]
                    });

                  case 3:
                    prompt = _context2.sent;
                    _context2.next = 6;
                    return prompt.present();

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "displayTimes",
        value: function displayTimes() {
          this.myLog('method displayTimes', 1);
          var tempArray = [];
          var tempTimes = this.userObject.listTimes;

          if (tempTimes.length > 0) {
            tempTimes.sort(this.myArrayFunctions.compareValues('timeStamp', 'desc'));
            tempArray = this.myArrayFunctions.addIdToArrayOfObjects(tempTimes);

            for (var i = 0; i < tempArray.length; i++) {
              tempArray[i].tryTimeFormat = this.myFormat.formateTime(tempArray[i].tryTime);
            }
          }

          this.myLog('Array this.listTimes: ' + JSON.stringify(this.listTimes), 2);
          this.listTimes = tempTimes;
          this.userObject.changedTimes = false;
        }
      }, {
        key: "deleteTime",
        value: function deleteTime(delTry) {
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
          this.displayTimes();
        }
      }, {
        key: "calculateNewBestTime",
        value: function calculateNewBestTime() {
          this.myLog('method calculateNewBestTime', 2);
          var best = 999999999;
          this.userObject.listTimes.forEach(function (item) {
            if (item.tryTime < best) best = item.tryTime;
          });
          this.userObject.bestTime = this.myFormat.formateTime(best);
        }
      }, {
        key: "myLog",
        value: function myLog(consoleText, level) {
          if (this.logLevel >= level) {
            console.log('times: ' + consoleText);
          }

          return;
        }
      }, {
        key: "deleteTryFromArray",
        value: function deleteTryFromArray(deleteObject) {
          this.myLog('method deleteTryFromArray', 2);
          var tmpAr = [];
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
      }]);

      return Tab3Page;
    }(); // end Class


    Tab3Page.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _services_format_time_service__WEBPACK_IMPORTED_MODULE_3__["FormatTimeService"]
      }, {
        type: _services_array_functions_service__WEBPACK_IMPORTED_MODULE_4__["ArrayFunctionsService"]
      }];
    };

    Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab3',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tab3.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tab3.page.scss */
      "./src/app/tab3/tab3.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _services_format_time_service__WEBPACK_IMPORTED_MODULE_3__["FormatTimeService"], _services_array_functions_service__WEBPACK_IMPORTED_MODULE_4__["ArrayFunctionsService"]])], Tab3Page);
    /***/
  }
}]);
//# sourceMappingURL=tab3-tab3-module-es5.js.map
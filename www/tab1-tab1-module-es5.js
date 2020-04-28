function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab1Tab1PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Rubicount\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" (click)=\"clickTimer()\">\n\n  <ion-row>\n    \n    <ion-col >\n      <div class=\"ion-text-center\"><ion-label class=\"timer\">{{currentTimeDisplay}}</ion-label></div>\n      \n    </ion-col>\n  </ion-row>\n  \n  \n    <div class=\"ion-text-center\">Best time: {{ bestTime }}</div>\n   \n  <ion-content class=\"funfact\">\n    {{ funFact }}\n</ion-content>\n  \n  \n  <app-explore-container name=\"Timer\"></app-explore-container>\n</ion-content>\n\n\n";
    /***/
  },

  /***/
  "./src/app/tab1/tab1.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab1/tab1.module.ts ***!
    \*************************************/

  /*! exports provided: Tab1PageModule */

  /***/
  function srcAppTab1Tab1ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function () {
      return Tab1PageModule;
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


    var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab1.page */
    "./src/app/tab1/tab1.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");

    var Tab1PageModule = function Tab1PageModule() {
      _classCallCheck(this, Tab1PageModule);
    };

    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]
      }])],
      declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
    })], Tab1PageModule);
    /***/
  },

  /***/
  "./src/app/tab1/tab1.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab1/tab1.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab1Tab1PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-toolbar {\n  --background: translucent;\n}\n\n@font-face {\n  font-family: \"Roboto Mono\";\n  src: url(\"/assets/fonts/RobotoMono-Regular.ttf\");\n}\n\n.timer {\n  font-family: \"Roboto Mono\";\n  font-size: 3em !important;\n  width: 100%;\n  margin-top: 30px;\n  margin-bottom: 15px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaW1vbi9pb25pYy9ydWJpY291bnQvc3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLDBCQUFBO0VBQ0EsZ0RBQUE7QUNDRjs7QURFQTtFQUNFLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFBa0IsbUJBQUE7RUFDbEIsa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byBNb25vJztcbiAgc3JjOiB1cmwoJy9hc3NldHMvZm9udHMvUm9ib3RvTW9uby1SZWd1bGFyLnR0ZicpO1xufVxuXG4udGltZXIge1xuICBmb250LWZhbWlseTogJ1JvYm90byBNb25vJztcbiAgZm9udC1zaXplOiAzZW0gIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDMwcHg7IG1hcmdpbi1ib3R0b206IDE1cHg7IFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59IiwiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIE1vbm9cIjtcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL1JvYm90b01vbm8tUmVndWxhci50dGZcIik7XG59XG4udGltZXIge1xuICBmb250LWZhbWlseTogXCJSb2JvdG8gTW9ub1wiO1xuICBmb250LXNpemU6IDNlbSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/tab1/tab1.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab1/tab1.page.ts ***!
    \***********************************/

  /*! exports provided: Tab1Page */

  /***/
  function srcAppTab1Tab1PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1Page", function () {
      return Tab1Page;
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


    var _services_format_time_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/format-time.service */
    "./src/app/services/format-time.service.ts");

    var Tab1Page = /*#__PURE__*/function () {
      function Tab1Page(myFormat) {
        _classCallCheck(this, Tab1Page);

        this.myFormat = myFormat;
        this.logLevel = 0;
        /* Local storage
          actualUser: string
          [username]: stringified userArray
          changedTimes: boolean (string of '0': unchanged, '1': changed)
        */
        // Start localStorage variables

        this.userObject = {
          userName: 'User 1',
          bestTime: '59:59.99',
          listTimes: [],
          sound: true,
          darkmode: false,
          changedTimes: true
        };
        this.userListAr = []; // End localStorage Variables

        this.timesArray = [];
        this.bestTime = '-';
        this.currentTimeDisplay = '00:00.00';
        this.startTime = false; // timer start

        this.overallTimerFunc = false; // running timer function

        this.funFact = '';
        this.funFacts = this.getFunfacts();
      }

      _createClass(Tab1Page, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.myLog('method ionViewWillEnter', 1);
          this.actualUser = String(localStorage.getItem('actualUser'));

          if (!this.actualUser || this.actualUser == '' || this.actualUser == 'null') {
            this.myLog('no user found in storage, store defaul User 1: ' + JSON.stringify(this.userObject), 2);
            this.myLog('this.userObject.userName:' + this.userObject.userName, 2);
            this.actualUser = this.userObject.userName;
            this.userListAr.push(this.actualUser);
          } else {
            this.myLog('user found: ' + this.actualUser, 2);
            this.userObject = JSON.parse(localStorage.getItem(this.actualUser));
            this.userListAr = JSON.parse(localStorage.getItem('userListAr'));
          }

          this.myLog('set actual User in Storage: ' + this.actualUser, 2);
          localStorage.setItem('actualUser', this.actualUser);
          this.myLog('current userListAr: ' + JSON.stringify(this.userListAr), 2);
          localStorage.setItem('userListAr', JSON.stringify(this.userListAr));
          localStorage.setItem(this.actualUser, JSON.stringify(this.userObject));
          this.myLog('userObject = ' + JSON.stringify(this.userObject), 2);
          this.bestTime = this.userObject.bestTime;
        }
      }, {
        key: "clickTimer",
        value: function clickTimer() {
          var _this = this;

          this.myLog('method clickTimer', 1);
          /*
            if timer is not running, start timer. If timer is running,
            stopp it an call function to process result.
          */

          if (!this.startTime) {
            // start new timer
            this.startTime = new Date().getTime();
            this.funFact = '';
            var countDownDate = new Date();
            this.overallTimerFunc = setInterval(function () {
              var now = new Date().getTime(); // Find the distance between now an the count down date

              _this.elapsedTime = now - _this.startTime; // Time calculations for hours, minutes and seconds

              _this.currentTimeDisplay = _this.myFormat.formateTime(_this.elapsedTime);
            }, 10);
          } else {
            // stop timer
            clearInterval(this.overallTimerFunc);
            this.finishTry();
            this.startTime = false;
            this.funFact = this.funFacts[Math.floor(Math.random() * this.funFacts.length)];
          }
        }
      }, {
        key: "finishTry",
        value: function finishTry() {
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
      }, {
        key: "addTimeToResults",
        value: function addTimeToResults() {
          this.myLog('method addTimeToResults', 1);
          this.userObject.listTimes.push({
            timeStamp: this.startTime + this.elapsedTime,
            tryTime: this.elapsedTime
          });
          this.myLog('user.listTimes after: ' + JSON.stringify(this.userObject.listTimes), 2);
        }
      }, {
        key: "refreshBestTime",
        value: function refreshBestTime() {
          this.myLog('refreshBestTime', 1);

          if (this.userObject.bestTime == '00:00,00' || this.myFormat.formateTime(this.elapsedTime) < this.userObject.bestTime) {
            console.log('faster');
            this.bestTime = this.myFormat.formateTime(this.elapsedTime);
          } else {
            console.log('slower');
          }

          this.userObject.bestTime = this.bestTime;
        }
      }, {
        key: "storeAllValues",
        value: function storeAllValues() {
          this.myLog('method storeAllValues: ', 1);
          this.userObject.changedTimes = true;
          localStorage.setItem(this.actualUser, JSON.stringify(this.userObject));
        }
      }, {
        key: "myLog",
        value: function myLog(consoleText, level) {
          if (this.logLevel >= level) {
            console.log('timer: ' + consoleText);
          }

          return;
        }
      }, {
        key: "getFunfacts",
        value: function getFunfacts() {
          return ["God's Number shows the smallest number of moves needed to solve the 3x3x3 Rubik's Cube from any random starting position. Since July of 2010 we know that this number is 20, so every position can be solved in twenty moves or less.", "It's estimated that less than 5.8% of the world's population can solve the Rubik's Cube. Statistics show that 1 in 20 people who own a Rubik's Cube can solve a Rubik's Cube.", "In 1974, a young professor of architecture in Budapest created the apparently impossible object.", "The first Magic Cube (as it was originally known) was sold in a Budapest toy shop in 1975.", "The puzzle is made up of twenty-six miniature cubes, known as 'cubies' or 'cubelets'", "The Magic Cube was renamed Rubik's Cube in 1980.", "The Rubik's Cube won Toy of the Year in 1980 and 1981.", "Over 350 million Rubik’s Cubes have been sold worldwide – making it the bestselling toy of all time.", "A Rubik's Cube has 43,252,003,274,489,856,000 possible configurations.", "With six coloured sides, 21 pieces and 54 outer surfaces, there's a combined total of over 43 QUINTILLIOIN different possible configurations.", "If you turned Rubik's Cube once every second it would take you 1400 TRILLION YEARS to finish to go through all the configurations.", "The best speed cubers* can solve the cube in under six seconds.", "The current world record holder is Mats Valk from the Netherlands. Who completed the puzzle in 5.55 seconds.", "Some speed-cubers go for style points over raw speed.", "A <a href='https://youtu.be/tSqUcrFJ498'>three-year-old in China</a> solved the puzzle in under two minutes.", "Legos & smartphone <a href='https://www.reddit.com/r/gifs/comments/lgy6c/legos_smartphone_solve_rubiks_cube_faster_than/'>solve Rubik's cube</a> faster than human record"];
        }
      }]);

      return Tab1Page;
    }();

    Tab1Page.ctorParameters = function () {
      return [{
        type: _services_format_time_service__WEBPACK_IMPORTED_MODULE_2__["FormatTimeService"]
      }];
    };

    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab1',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tab1.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tab1.page.scss */
      "./src/app/tab1/tab1.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_format_time_service__WEBPACK_IMPORTED_MODULE_2__["FormatTimeService"]])], Tab1Page);
    /***/
  }
}]);
//# sourceMappingURL=tab1-tab1-module-es5.js.map
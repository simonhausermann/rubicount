function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-export-export-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/export/export.page.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/export/export.page.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab3ExportExportPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Export</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-segment value=\"date\" (ionChange)=\"segmentChanged($event)\">\n      <ion-segment-button value=\"date\">\n        <ion-label>with date</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"time\">\n        <ion-label>just time</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-label position=\"stacked\">Export</ion-label>\n    <ion-textarea [(ngModel)]=\"exportArea\" rows=\"20\"></ion-textarea>\n  </ion-item>\n  <!-- ion-grid>\n    <ion-row *ngFor=\"let item of listAr; let i = index;\">\n      <ion-col></ion-col>\n        <ion-col size=\"11\" style=\"user-select: text;\" class=\"export\">\n          <div style=\"user-select: text;\">\n        {{ item.timeStamp | date: 'dd.MM.yy' }}\n        {{ item.tryTimeFormat }}</div>  \n        </ion-col>\n      <ion-col></ion-col>\n    </ion-row> \n  </ion-grid -->\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/tab3/export/export-routing.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/tab3/export/export-routing.module.ts ***!
    \******************************************************/

  /*! exports provided: ExportPageRoutingModule */

  /***/
  function srcAppTab3ExportExportRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExportPageRoutingModule", function () {
      return ExportPageRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _export_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./export.page */
    "./src/app/tab3/export/export.page.ts");

    var routes = [{
      path: '',
      component: _export_page__WEBPACK_IMPORTED_MODULE_3__["ExportPage"]
    }];

    var ExportPageRoutingModule = function ExportPageRoutingModule() {
      _classCallCheck(this, ExportPageRoutingModule);
    };

    ExportPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ExportPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tab3/export/export.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/tab3/export/export.module.ts ***!
    \**********************************************/

  /*! exports provided: ExportPageModule */

  /***/
  function srcAppTab3ExportExportModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExportPageModule", function () {
      return ExportPageModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _export_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./export-routing.module */
    "./src/app/tab3/export/export-routing.module.ts");
    /* harmony import */


    var _export_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./export.page */
    "./src/app/tab3/export/export.page.ts");

    var ExportPageModule = function ExportPageModule() {
      _classCallCheck(this, ExportPageModule);
    };

    ExportPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _export_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExportPageRoutingModule"]],
      declarations: [_export_page__WEBPACK_IMPORTED_MODULE_6__["ExportPage"]]
    })], ExportPageModule);
    /***/
  },

  /***/
  "./src/app/tab3/export/export.page.scss":
  /*!**********************************************!*\
    !*** ./src/app/tab3/export/export.page.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab3ExportExportPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "export {\n  -webkit-user-select: text;\n     -moz-user-select: text;\n      -ms-user-select: text;\n          user-select: text;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaW1vbi9pb25pYy9ydWJpY291bnQvc3JjL2FwcC90YWIzL2V4cG9ydC9leHBvcnQucGFnZS5zY3NzIiwic3JjL2FwcC90YWIzL2V4cG9ydC9leHBvcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvZXhwb3J0L2V4cG9ydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQge1xuICAgIHVzZXItc2VsZWN0OiB0ZXh0O1xufSIsImV4cG9ydCB7XG4gIHVzZXItc2VsZWN0OiB0ZXh0O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/tab3/export/export.page.ts":
  /*!********************************************!*\
    !*** ./src/app/tab3/export/export.page.ts ***!
    \********************************************/

  /*! exports provided: ExportPage */

  /***/
  function srcAppTab3ExportExportPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExportPage", function () {
      return ExportPage;
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
    /*! ../../services/format-time.service */
    "./src/app/services/format-time.service.ts");
    /* harmony import */


    var _services_array_functions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/array-functions.service */
    "./src/app/services/array-functions.service.ts");

    var ExportPage = /*#__PURE__*/function () {
      function ExportPage(myFormat, myArrayFunctions) {
        _classCallCheck(this, ExportPage);

        this.myFormat = myFormat;
        this.myArrayFunctions = myArrayFunctions;
        this.exportArea = 'asdfasdf\nsdfasfasd\ndsfsasfasdfa\nsdfadfasdf'; // End localStorage variables

        this.listAr = [];
      }

      _createClass(ExportPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.actualUser = localStorage.getItem('actualUser');
          this.userObject = JSON.parse(localStorage.getItem(this.actualUser)); //this.listAr = this.getTimeAr(false);

          this.exportArea = this.getTimeString(true, '\n');
        }
      }, {
        key: "segmentChanged",
        value: function segmentChanged(event) {
          if (event.detail.value == 'time') {
            console.log('time');
            this.listAr = this.getTimeAr(false);
            this.exportArea = this.getTimeString(false, '\n');
          } else {
            console.log('date');
            this.listAr = this.getTimeAr(true);
            this.exportArea = this.getTimeString(true, '\n');
          }
        }
      }, {
        key: "getTimeString",
        value: function getTimeString(withDate) {
          var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          var timesAr = this.getTimeAr(withDate);
          var stringAr = [];
          var tmpString = '';

          for (var i = 0; i < timesAr.length; i++) {
            console.log(timesAr[i].tryTime);
            tmpString = timesAr[i].tryTimeFormat;

            if (withDate) {
              tmpString = timesAr[i].dateFormat + ' ' + tmpString;
            }

            stringAr.push(tmpString);
          }

          return stringAr.join(separator);
        }
      }, {
        key: "getTimeAr",
        value: function getTimeAr(withDate) {
          var tmpAr;
          var timesAr = this.userObject.listTimes.sort(this.myArrayFunctions.compareValues('timeStamp', 'desc'));
          var stringAr = [];

          for (var i = 0; i < timesAr.length; i++) {
            tmpAr = {
              tryTimeFormat: this.myFormat.formateTime(timesAr[i].tryTime),
              dateFormat: ''
            };

            if (withDate) {
              tmpAr.dateFormat = this.myFormat.formatDate(timesAr[i].timeStamp);
            }

            stringAr.push(tmpAr);
          }

          return stringAr;
        }
      }]);

      return ExportPage;
    }();

    ExportPage.ctorParameters = function () {
      return [{
        type: _services_format_time_service__WEBPACK_IMPORTED_MODULE_2__["FormatTimeService"]
      }, {
        type: _services_array_functions_service__WEBPACK_IMPORTED_MODULE_3__["ArrayFunctionsService"]
      }];
    };

    ExportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-export',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./export.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/export/export.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./export.page.scss */
      "./src/app/tab3/export/export.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_format_time_service__WEBPACK_IMPORTED_MODULE_2__["FormatTimeService"], _services_array_functions_service__WEBPACK_IMPORTED_MODULE_3__["ArrayFunctionsService"]])], ExportPage);
    /***/
  }
}]);
//# sourceMappingURL=tab3-export-export-module-es5.js.map
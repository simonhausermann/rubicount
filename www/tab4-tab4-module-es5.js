function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab4-tab4-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab4Tab4PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      {{ 'TAB4.title' | translate }}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <ion-grid>\n    <ion-row>\n      <ion-col></ion-col>\n      <ion-col size=\"11\">\n        <ion-list>\n          <ion-item *ngFor=\"let item of userList; let i = index; \">\n            <div *ngIf=\"actualUser == item.userName then thenBlock else elseBlock\"></div>\n              <ng-template #thenBlock>\n                <ion-label (click)=\"selectUser(item.userName)\"><b>{{ item.userName }} ({{ 'TAB4.current' | translate }})</b></ion-label>\n                <ion-select placeholder=\"{{ 'TAB4.selectOne' | translate }}\" value=\"{{ language }}\" [(ngModel)]=\"language\" (ionChange)=\"languageChange($event)\">\n                  <ion-select-option value=\"en\">English</ion-select-option>\n                  <ion-select-option value=\"de\">Deutsch</ion-select-option>\n                </ion-select>\n                <ion-button fill=\"clear\" (click)=\"changeUserName();\" size=\"small\"><ion-icon slot=\"start\" name=\"create-outline\"></ion-icon></ion-button>\n              </ng-template>\n              <ng-template #elseBlock>\n                <ion-label (click)=\"selectUser(item.userName)\">{{ item.userName }}</ion-label>\n                <ion-button fill=\"clear\" (click)=\"deleteUser(item.userName);\" size=\"small\"><ion-icon slot=\"start\" name=\"trash-outline\"></ion-icon></ion-button>\n              </ng-template>\n            </ion-item>\n        </ion-list>\n        <ion-button size=\"small\" fill=\"clear\" color=\"primary\" (click)=\"clearUserHistory()\" expand=\"block\">{{ 'TAB4.btnClearUserHistory' | translate }}</ion-button>\n        <!--ion-button color=\"primary\" (click)=\"clearLocalStorage()\" expand=\"full\">{{ 'TAB4.btnClearUserAndData' | translate }}</ion-button-->\n      </ion-col>\n      <ion-col></ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col></ion-col>\n      <ion-col size=\"10\" text-center>\n        <div style=\"text-align: center;\" class=\"user\"><b>{{ 'TAB4.creditTitle' | translate }}</b><br>\n          {{ 'TAB4.creditNames' | translate }}<br>\n          {{ 'TAB4.creditCopyright' | translate }}\n        </div>\n      </ion-col>\n      <ion-col></ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" sedge slot=\"fixed\">\n    <ion-fab-button (click)=\"addUser()\"><ion-icon name=\"add\"></ion-icon></ion-fab-button>\n  </ion-fab>\n\n\n  <app-explore-container name=\"Settings\"></app-explore-container>\n</ion-content>\n\n";
    /***/
  },

  /***/
  "./node_modules/util/node_modules/inherits/inherits_browser.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/util/node_modules/inherits/inherits_browser.js ***!
    \*********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesUtilNode_modulesInheritsInherits_browserJs(module, exports) {
    if (typeof Object.create === 'function') {
      // implementation from standard node.js 'util' module
      module.exports = function inherits(ctor, superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
          constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
      };
    } else {
      // old school shim for old browsers
      module.exports = function inherits(ctor, superCtor) {
        ctor.super_ = superCtor;

        var TempCtor = function TempCtor() {};

        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
      };
    }
    /***/

  },

  /***/
  "./node_modules/util/support/isBufferBrowser.js":
  /*!******************************************************!*\
    !*** ./node_modules/util/support/isBufferBrowser.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesUtilSupportIsBufferBrowserJs(module, exports) {
    module.exports = function isBuffer(arg) {
      return arg && typeof arg === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
    };
    /***/

  },

  /***/
  "./node_modules/util/util.js":
  /*!***********************************!*\
    !*** ./node_modules/util/util.js ***!
    \***********************************/

  /*! no static exports found */

  /***/
  function node_modulesUtilUtilJs(module, exports, __webpack_require__) {
    // Copyright Joyent, Inc. and other Node contributors.
    //
    // Permission is hereby granted, free of charge, to any person obtaining a
    // copy of this software and associated documentation files (the
    // "Software"), to deal in the Software without restriction, including
    // without limitation the rights to use, copy, modify, merge, publish,
    // distribute, sublicense, and/or sell copies of the Software, and to permit
    // persons to whom the Software is furnished to do so, subject to the
    // following conditions:
    //
    // The above copyright notice and this permission notice shall be included
    // in all copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
    // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
    // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
    // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
    // USE OR OTHER DEALINGS IN THE SOFTWARE.
    var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(obj) {
      var keys = Object.keys(obj);
      var descriptors = {};

      for (var i = 0; i < keys.length; i++) {
        descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
      }

      return descriptors;
    };

    var formatRegExp = /%[sdj%]/g;

    exports.format = function (f) {
      if (!isString(f)) {
        var objects = [];

        for (var i = 0; i < arguments.length; i++) {
          objects.push(inspect(arguments[i]));
        }

        return objects.join(' ');
      }

      var i = 1;
      var args = arguments;
      var len = args.length;
      var str = String(f).replace(formatRegExp, function (x) {
        if (x === '%%') return '%';
        if (i >= len) return x;

        switch (x) {
          case '%s':
            return String(args[i++]);

          case '%d':
            return Number(args[i++]);

          case '%j':
            try {
              return JSON.stringify(args[i++]);
            } catch (_) {
              return '[Circular]';
            }

          default:
            return x;
        }
      });

      for (var x = args[i]; i < len; x = args[++i]) {
        if (isNull(x) || !isObject(x)) {
          str += ' ' + x;
        } else {
          str += ' ' + inspect(x);
        }
      }

      return str;
    }; // Mark that a method should not be used.
    // Returns a modified function which warns once by default.
    // If --no-deprecation is set, then it is a no-op.


    exports.deprecate = function (fn, msg) {
      if (typeof process !== 'undefined' && process.noDeprecation === true) {
        return fn;
      } // Allow for deprecating things in the process of starting up.


      if (typeof process === 'undefined') {
        return function () {
          return exports.deprecate(fn, msg).apply(this, arguments);
        };
      }

      var warned = false;

      function deprecated() {
        if (!warned) {
          if (process.throwDeprecation) {
            throw new Error(msg);
          } else if (process.traceDeprecation) {
            console.trace(msg);
          } else {
            console.error(msg);
          }

          warned = true;
        }

        return fn.apply(this, arguments);
      }

      return deprecated;
    };

    var debugs = {};
    var debugEnviron;

    exports.debuglog = function (set) {
      if (isUndefined(debugEnviron)) debugEnviron = process.env.NODE_DEBUG || '';
      set = set.toUpperCase();

      if (!debugs[set]) {
        if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
          var pid = process.pid;

          debugs[set] = function () {
            var msg = exports.format.apply(exports, arguments);
            console.error('%s %d: %s', set, pid, msg);
          };
        } else {
          debugs[set] = function () {};
        }
      }

      return debugs[set];
    };
    /**
     * Echos the value of a value. Trys to print the value out
     * in the best way possible given the different types.
     *
     * @param {Object} obj The object to print out.
     * @param {Object} opts Optional options object that alters the output.
     */

    /* legacy: obj, showHidden, depth, colors*/


    function inspect(obj, opts) {
      // default options
      var ctx = {
        seen: [],
        stylize: stylizeNoColor
      }; // legacy...

      if (arguments.length >= 3) ctx.depth = arguments[2];
      if (arguments.length >= 4) ctx.colors = arguments[3];

      if (isBoolean(opts)) {
        // legacy...
        ctx.showHidden = opts;
      } else if (opts) {
        // got an "options" object
        exports._extend(ctx, opts);
      } // set default options


      if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
      if (isUndefined(ctx.depth)) ctx.depth = 2;
      if (isUndefined(ctx.colors)) ctx.colors = false;
      if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
      if (ctx.colors) ctx.stylize = stylizeWithColor;
      return formatValue(ctx, obj, ctx.depth);
    }

    exports.inspect = inspect; // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics

    inspect.colors = {
      'bold': [1, 22],
      'italic': [3, 23],
      'underline': [4, 24],
      'inverse': [7, 27],
      'white': [37, 39],
      'grey': [90, 39],
      'black': [30, 39],
      'blue': [34, 39],
      'cyan': [36, 39],
      'green': [32, 39],
      'magenta': [35, 39],
      'red': [31, 39],
      'yellow': [33, 39]
    }; // Don't use 'blue' not visible on cmd.exe

    inspect.styles = {
      'special': 'cyan',
      'number': 'yellow',
      'boolean': 'yellow',
      'undefined': 'grey',
      'null': 'bold',
      'string': 'green',
      'date': 'magenta',
      // "name": intentionally not styling
      'regexp': 'red'
    };

    function stylizeWithColor(str, styleType) {
      var style = inspect.styles[styleType];

      if (style) {
        return "\x1B[" + inspect.colors[style][0] + 'm' + str + "\x1B[" + inspect.colors[style][1] + 'm';
      } else {
        return str;
      }
    }

    function stylizeNoColor(str, styleType) {
      return str;
    }

    function arrayToHash(array) {
      var hash = {};
      array.forEach(function (val, idx) {
        hash[val] = true;
      });
      return hash;
    }

    function formatValue(ctx, value, recurseTimes) {
      // Provide a hook for user-specified inspect functions.
      // Check that value is an object with an inspect function on it
      if (ctx.customInspect && value && isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect && // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
        var ret = value.inspect(recurseTimes, ctx);

        if (!isString(ret)) {
          ret = formatValue(ctx, ret, recurseTimes);
        }

        return ret;
      } // Primitive types cannot have properties


      var primitive = formatPrimitive(ctx, value);

      if (primitive) {
        return primitive;
      } // Look up the keys of the object.


      var keys = Object.keys(value);
      var visibleKeys = arrayToHash(keys);

      if (ctx.showHidden) {
        keys = Object.getOwnPropertyNames(value);
      } // IE doesn't make error fields non-enumerable
      // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx


      if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
        return formatError(value);
      } // Some type of object without properties can be shortcutted.


      if (keys.length === 0) {
        if (isFunction(value)) {
          var name = value.name ? ': ' + value.name : '';
          return ctx.stylize('[Function' + name + ']', 'special');
        }

        if (isRegExp(value)) {
          return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        }

        if (isDate(value)) {
          return ctx.stylize(Date.prototype.toString.call(value), 'date');
        }

        if (isError(value)) {
          return formatError(value);
        }
      }

      var base = '',
          array = false,
          braces = ['{', '}']; // Make Array say that they are Array

      if (isArray(value)) {
        array = true;
        braces = ['[', ']'];
      } // Make functions say that they are functions


      if (isFunction(value)) {
        var n = value.name ? ': ' + value.name : '';
        base = ' [Function' + n + ']';
      } // Make RegExps say that they are RegExps


      if (isRegExp(value)) {
        base = ' ' + RegExp.prototype.toString.call(value);
      } // Make dates with properties first say the date


      if (isDate(value)) {
        base = ' ' + Date.prototype.toUTCString.call(value);
      } // Make error with message first say the error


      if (isError(value)) {
        base = ' ' + formatError(value);
      }

      if (keys.length === 0 && (!array || value.length == 0)) {
        return braces[0] + base + braces[1];
      }

      if (recurseTimes < 0) {
        if (isRegExp(value)) {
          return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        } else {
          return ctx.stylize('[Object]', 'special');
        }
      }

      ctx.seen.push(value);
      var output;

      if (array) {
        output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
      } else {
        output = keys.map(function (key) {
          return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
        });
      }

      ctx.seen.pop();
      return reduceToSingleString(output, base, braces);
    }

    function formatPrimitive(ctx, value) {
      if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');

      if (isString(value)) {
        var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
        return ctx.stylize(simple, 'string');
      }

      if (isNumber(value)) return ctx.stylize('' + value, 'number');
      if (isBoolean(value)) return ctx.stylize('' + value, 'boolean'); // For some reason typeof null is "object", so special case here.

      if (isNull(value)) return ctx.stylize('null', 'null');
    }

    function formatError(value) {
      return '[' + Error.prototype.toString.call(value) + ']';
    }

    function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
      var output = [];

      for (var i = 0, l = value.length; i < l; ++i) {
        if (hasOwnProperty(value, String(i))) {
          output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
        } else {
          output.push('');
        }
      }

      keys.forEach(function (key) {
        if (!key.match(/^\d+$/)) {
          output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
        }
      });
      return output;
    }

    function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
      var name, str, desc;
      desc = Object.getOwnPropertyDescriptor(value, key) || {
        value: value[key]
      };

      if (desc.get) {
        if (desc.set) {
          str = ctx.stylize('[Getter/Setter]', 'special');
        } else {
          str = ctx.stylize('[Getter]', 'special');
        }
      } else {
        if (desc.set) {
          str = ctx.stylize('[Setter]', 'special');
        }
      }

      if (!hasOwnProperty(visibleKeys, key)) {
        name = '[' + key + ']';
      }

      if (!str) {
        if (ctx.seen.indexOf(desc.value) < 0) {
          if (isNull(recurseTimes)) {
            str = formatValue(ctx, desc.value, null);
          } else {
            str = formatValue(ctx, desc.value, recurseTimes - 1);
          }

          if (str.indexOf('\n') > -1) {
            if (array) {
              str = str.split('\n').map(function (line) {
                return '  ' + line;
              }).join('\n').substr(2);
            } else {
              str = '\n' + str.split('\n').map(function (line) {
                return '   ' + line;
              }).join('\n');
            }
          }
        } else {
          str = ctx.stylize('[Circular]', 'special');
        }
      }

      if (isUndefined(name)) {
        if (array && key.match(/^\d+$/)) {
          return str;
        }

        name = JSON.stringify('' + key);

        if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
          name = name.substr(1, name.length - 2);
          name = ctx.stylize(name, 'name');
        } else {
          name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
          name = ctx.stylize(name, 'string');
        }
      }

      return name + ': ' + str;
    }

    function reduceToSingleString(output, base, braces) {
      var numLinesEst = 0;
      var length = output.reduce(function (prev, cur) {
        numLinesEst++;
        if (cur.indexOf('\n') >= 0) numLinesEst++;
        return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
      }, 0);

      if (length > 60) {
        return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
      }

      return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
    } // NOTE: These type checking functions intentionally don't use `instanceof`
    // because it is fragile and can be easily faked with `Object.create()`.


    function isArray(ar) {
      return Array.isArray(ar);
    }

    exports.isArray = isArray;

    function isBoolean(arg) {
      return typeof arg === 'boolean';
    }

    exports.isBoolean = isBoolean;

    function isNull(arg) {
      return arg === null;
    }

    exports.isNull = isNull;

    function isNullOrUndefined(arg) {
      return arg == null;
    }

    exports.isNullOrUndefined = isNullOrUndefined;

    function isNumber(arg) {
      return typeof arg === 'number';
    }

    exports.isNumber = isNumber;

    function isString(arg) {
      return typeof arg === 'string';
    }

    exports.isString = isString;

    function isSymbol(arg) {
      return typeof arg === 'symbol';
    }

    exports.isSymbol = isSymbol;

    function isUndefined(arg) {
      return arg === void 0;
    }

    exports.isUndefined = isUndefined;

    function isRegExp(re) {
      return isObject(re) && objectToString(re) === '[object RegExp]';
    }

    exports.isRegExp = isRegExp;

    function isObject(arg) {
      return typeof arg === 'object' && arg !== null;
    }

    exports.isObject = isObject;

    function isDate(d) {
      return isObject(d) && objectToString(d) === '[object Date]';
    }

    exports.isDate = isDate;

    function isError(e) {
      return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
    }

    exports.isError = isError;

    function isFunction(arg) {
      return typeof arg === 'function';
    }

    exports.isFunction = isFunction;

    function isPrimitive(arg) {
      return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || // ES6 symbol
      typeof arg === 'undefined';
    }

    exports.isPrimitive = isPrimitive;
    exports.isBuffer = __webpack_require__(
    /*! ./support/isBuffer */
    "./node_modules/util/support/isBufferBrowser.js");

    function objectToString(o) {
      return Object.prototype.toString.call(o);
    }

    function pad(n) {
      return n < 10 ? '0' + n.toString(10) : n.toString(10);
    }

    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; // 26 Feb 16:19:34

    function timestamp() {
      var d = new Date();
      var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
      return [d.getDate(), months[d.getMonth()], time].join(' ');
    } // log is just a thin wrapper to console.log that prepends a timestamp


    exports.log = function () {
      console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
    };
    /**
     * Inherit the prototype methods from one constructor into another.
     *
     * The Function.prototype.inherits from lang.js rewritten as a standalone
     * function (not on Function.prototype). NOTE: If this file is to be loaded
     * during bootstrapping this function needs to be rewritten using some native
     * functions as prototype setup using normal JavaScript does not work as
     * expected during bootstrapping (see mirror.js in r114903).
     *
     * @param {function} ctor Constructor function which needs to inherit the
     *     prototype.
     * @param {function} superCtor Constructor function to inherit prototype from.
     */


    exports.inherits = __webpack_require__(
    /*! inherits */
    "./node_modules/util/node_modules/inherits/inherits_browser.js");

    exports._extend = function (origin, add) {
      // Don't do anything if add isn't an object
      if (!add || !isObject(add)) return origin;
      var keys = Object.keys(add);
      var i = keys.length;

      while (i--) {
        origin[keys[i]] = add[keys[i]];
      }

      return origin;
    };

    function hasOwnProperty(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }

    var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

    exports.promisify = function promisify(original) {
      if (typeof original !== 'function') throw new TypeError('The "original" argument must be of type Function');

      if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
        var fn = original[kCustomPromisifiedSymbol];

        if (typeof fn !== 'function') {
          throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        }

        Object.defineProperty(fn, kCustomPromisifiedSymbol, {
          value: fn,
          enumerable: false,
          writable: false,
          configurable: true
        });
        return fn;
      }

      function fn() {
        var promiseResolve, promiseReject;
        var promise = new Promise(function (resolve, reject) {
          promiseResolve = resolve;
          promiseReject = reject;
        });
        var args = [];

        for (var i = 0; i < arguments.length; i++) {
          args.push(arguments[i]);
        }

        args.push(function (err, value) {
          if (err) {
            promiseReject(err);
          } else {
            promiseResolve(value);
          }
        });

        try {
          original.apply(this, args);
        } catch (err) {
          promiseReject(err);
        }

        return promise;
      }

      Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
      if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
        value: fn,
        enumerable: false,
        writable: false,
        configurable: true
      });
      return Object.defineProperties(fn, getOwnPropertyDescriptors(original));
    };

    exports.promisify.custom = kCustomPromisifiedSymbol;

    function callbackifyOnRejected(reason, cb) {
      // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
      // Because `null` is a special error value in callbacks which means "no error
      // occurred", we error-wrap so the callback consumer can distinguish between
      // "the promise rejected with null" or "the promise fulfilled with undefined".
      if (!reason) {
        var newReason = new Error('Promise was rejected with a falsy value');
        newReason.reason = reason;
        reason = newReason;
      }

      return cb(reason);
    }

    function callbackify(original) {
      if (typeof original !== 'function') {
        throw new TypeError('The "original" argument must be of type Function');
      } // We DO NOT return the promise as it gives the user a false sense that
      // the promise is actually somehow related to the callback's execution
      // and that the callback throwing will reject the promise.


      function callbackified() {
        var args = [];

        for (var i = 0; i < arguments.length; i++) {
          args.push(arguments[i]);
        }

        var maybeCb = args.pop();

        if (typeof maybeCb !== 'function') {
          throw new TypeError('The last argument must be of type Function');
        }

        var self = this;

        var cb = function cb() {
          return maybeCb.apply(self, arguments);
        }; // In true node style we process the callback on `nextTick` with all the
        // implications (stack, `uncaughtException`, `async_hooks`)


        original.apply(this, args).then(function (ret) {
          process.nextTick(cb, null, ret);
        }, function (rej) {
          process.nextTick(callbackifyOnRejected, rej, cb);
        });
      }

      Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
      Object.defineProperties(callbackified, getOwnPropertyDescriptors(original));
      return callbackified;
    }

    exports.callbackify = callbackify;
    /***/
  },

  /***/
  "./src/app/tab4/tab4.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab4/tab4.module.ts ***!
    \*************************************/

  /*! exports provided: Tab4PageModule */

  /***/
  function srcAppTab4Tab4ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab4PageModule", function () {
      return Tab4PageModule;
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


    var _tab4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab4.page */
    "./src/app/tab4/tab4.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var Tab4PageModule = function Tab4PageModule() {
      _classCallCheck(this, Tab4PageModule);
    };

    Tab4PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"]
      }])],
      declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"]]
    })], Tab4PageModule);
    /***/
  },

  /***/
  "./src/app/tab4/tab4.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab4/tab4.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab4Tab4PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-toolbar {\n  --background: translucent;\n}\n\n.vertical-align-content > * {\n  display: flex !important;\n  align-content: center !important;\n  align-items: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaW1vbi9pb25pYy9ydWJpY291bnQvc3JjL2FwcC90YWI0L3RhYjQucGFnZS5zY3NzIiwic3JjL2FwcC90YWI0L3RhYjQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUVLLHdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtBQ0FMIiwiZmlsZSI6InNyYy9hcHAvdGFiNC90YWI0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cblxuLnZlcnRpY2FsLWFsaWduLWNvbnRlbnQgPiAqXG57XG4gICAgIGRpc3BsYXk6IGZsZXghaW1wb3J0YW50O1xuICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXIhaW1wb3J0YW50O1xuICAgICBhbGlnbi1pdGVtczogY2VudGVyIWltcG9ydGFudDtcbn0iLCJpb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59XG5cbi52ZXJ0aWNhbC1hbGlnbi1jb250ZW50ID4gKiB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/tab4/tab4.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab4/tab4.page.ts ***!
    \***********************************/

  /*! exports provided: Tab4Page */

  /***/
  function srcAppTab4Tab4PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab4Page", function () {
      return Tab4Page;
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


    var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! util */
    "./node_modules/util/util.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var Tab4Page = /*#__PURE__*/function () {
      function Tab4Page(alertCtrl, translate) {
        _classCallCheck(this, Tab4Page);

        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.logLevel = 0;
        this.userList = [];
      }

      _createClass(Tab4Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.myLog('method ngOnInit', 1);
          this.actualUser = localStorage.getItem('actualUser');
          this.userObject = JSON.parse(localStorage.getItem(this.actualUser));
          this.sound = this.userObject.sound;
          this.darkmode = this.userObject.darkmode;

          if (!this.userObject.hasOwnProperty('language')) {
            this.userObject.language = 'en';
            this.saveUser();
          }

          this.language = this.userObject.language;
          this.translate.use(this.userObject.language);
          var tmpList = JSON.parse(localStorage.getItem('userList'));

          if (!Object(util__WEBPACK_IMPORTED_MODULE_2__["isArray"])(tmpList)) {
            this.createNewUserlist();
          } else {
            this.userList = tmpList;
          }

          for (var i = 0; i < this.userList.length; i++) {
            if (!this.userList[i].language) this.userList[i].language = 'en';
          }

          this.myLog(JSON.stringify(this.userList), 2);
        }
      }, {
        key: "createNewUserlist",
        value: function createNewUserlist() {
          this.myLog('method createNewUserList', 1);
          this.userList = [];
          this.userList.push({
            userName: 'User 1',
            language: 'en'
          });
          this.setNewUserObject('User 1');
          this.saveUser();
          this.myLog('set userList ' + JSON.stringify(this.userList), 2);
          localStorage.setItem('userList', JSON.stringify(this.userList));
        }
      }, {
        key: "setNewUserObject",
        value: function setNewUserObject(userName) {
          this.myLog('setNewUserObject: create userObject for user ' + userName, 1);
          this.userObject = {
            userName: userName,
            bestTime: '59:59.99',
            listTimes: [],
            language: 'en',
            sound: true,
            darkmode: false,
            changedTimes: true
          };
        }
      }, {
        key: "languageChange",
        value: function languageChange(event) {
          this.myLog('event: ' + JSON.stringify(event), 2);
          this.userObject.language = this.language;
          this.saveUser();
        }
      }, {
        key: "clearUserHistory",
        value: function clearUserHistory() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.myLog('method clearUserHistory', 1);
                    _context.next = 3;
                    return this.alertCtrl.create({
                      header: this.translate.instant('TAB4.alertConfirm'),
                      message: this.translate.instant('TAB4.alertQuestion') + ' ' + this.actualUser,
                      buttons: [{
                        text: this.translate.instant('TAB4.alertCancel'),
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {// cancel
                        }
                      }, {
                        text: this.translate.instant('TAB4.alertDelete'),
                        handler: function handler() {
                          _this.userObject.listTimes = [];

                          _this.saveUser();
                        }
                      }]
                    });

                  case 3:
                    alert = _context.sent;
                    _context.next = 6;
                    return alert.present();

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "clearLocalStorage",
        value: function clearLocalStorage() {
          this.myLog('method clearLocalStorage', 1);
          localStorage.clear();
          this.actualUser = 'User 1';
          localStorage.setItem('actualUser', this.actualUser);
          this.createNewUserlist();
          this.saveUser();
        }
      }, {
        key: "updateSettings",
        value: function updateSettings() {
          this.sound = this.userObject.sound;
          this.darkmode = this.userObject.darkmode;
          this.language = this.userObject.language;
        }
      }, {
        key: "selectUser",
        value: function selectUser(userName) {
          this.myLog('method selectUser', 1);
          this.actualUser = userName;
          localStorage.setItem('actualUser', this.actualUser);
          this.userObject = JSON.parse(localStorage.getItem(this.actualUser));

          if (!Object(util__WEBPACK_IMPORTED_MODULE_2__["isObject"])(this.userObject)) {
            this.myLog('no listTimes, create userObject', 2);
            this.clearUserHistory();
          }

          this.updateSettings();
        }
      }, {
        key: "addUser",
        value: function addUser() {
          this.myLog('method addUser', 1);
          var userNameCheck = false;
          var i = 0;

          while (!userNameCheck) {
            ++i;
            userNameCheck = this.checkUniqueUsername('User ' + i);
          }

          this.actualUser = 'User ' + i;
          this.userList.push({
            userName: this.actualUser,
            language: this.userObject.language
          });
          this.setNewUserObject(this.actualUser);
          this.saveUser();
          localStorage.setItem('userList', JSON.stringify(this.userList));
        }
      }, {
        key: "checkUniqueUsername",
        value: function checkUniqueUsername(userName) {
          this.myLog('method checkUniqueUsername', 1);
          var check = true;
          this.userList.forEach(function (item) {
            if (item.userName == userName) {
              check = false;
            }
          });
          return check;
        }
      }, {
        key: "changeUserName",
        value: function changeUserName() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var prompt;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.myLog('method changeUserName', 1);
                    _context2.next = 3;
                    return this.alertCtrl.create({
                      header: this.translate.instant('TAB4.alertChangeTitle'),
                      message: this.translate.instant('TAB4.alertChangeEnter'),
                      inputs: [{
                        name: 'username',
                        type: 'text',
                        placeholder: this.translate.instant('TAB4.alertChangePlaceholder')
                      }],
                      buttons: [{
                        text: this.translate.instant('TAB4.alertCancel'),
                        handler: function handler(data) {// Cancel clicked
                        }
                      }, {
                        text: this.translate.instant('TAB4.alertSave'),
                        handler: function handler(data) {
                          if (_this2.checkUniqueUsername(data.username)) {
                            _this2.changeName(data.username);
                          } else {
                            alert('Username already taken');
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
        key: "changeName",
        value: function changeName(newName) {
          this.myLog('methode changeName to ' + newName, 1); // update userlist

          var tmpAr = [];
          var actualUser = this.actualUser;
          this.userList.forEach(function (item) {
            if (item.userName != actualUser) {
              tmpAr.push(item);
            }
          });
          tmpAr.push({
            userName: newName,
            language: this.userObject.language
          });
          this.userList = tmpAr;
          localStorage.setItem('userList', JSON.stringify(this.userList));
          localStorage.setItem(newName, localStorage.getItem(this.actualUser));
          localStorage.removeItem(this.actualUser);
          this.actualUser = newName;
          localStorage.setItem('actualUser', this.actualUser);
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(deleteName) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertCtrl.create({
                      header: this.translate.instant('TAB4.alertConfirm'),
                      message: this.translate.instant('TAB4.alertQuestionUser') + ' ' + deleteName,
                      buttons: [{
                        text: this.translate.instant('TAB4.alertCancel'),
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {// cancel
                        }
                      }, {
                        text: this.translate.instant('TAB4.alertDelete'),
                        handler: function handler() {
                          _this3.reallyDeleteUser(deleteName);
                        }
                      }]
                    });

                  case 2:
                    alert = _context3.sent;
                    _context3.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "reallyDeleteUser",
        value: function reallyDeleteUser(deleteName) {
          this.myLog('method deleteUser', 1);
          var tmpAr = [];
          this.userList.forEach(function (item) {
            if (item.userName != deleteName) {
              tmpAr.push(item);
            }
          });
          this.userList = tmpAr;
          localStorage.setItem('userList', JSON.stringify(this.userList));
        }
      }, {
        key: "saveUser",
        value: function saveUser() {
          this.myLog('method saveUser', 1);
          this.userObject.language = this.language;
          localStorage.setItem(this.actualUser, JSON.stringify(this.userObject));
        }
      }, {
        key: "myLog",
        value: function myLog(consoleText, level) {
          if (this.logLevel >= level) {
            console.log('settings: ' + consoleText);
          }

          return;
        }
      }]);

      return Tab4Page;
    }();

    Tab4Page.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
      }];
    };

    Tab4Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab4',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tab4.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tab4.page.scss */
      "./src/app/tab4/tab4.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])], Tab4Page);
    /***/
  }
}]);
//# sourceMappingURL=tab4-tab4-module-es5.js.map
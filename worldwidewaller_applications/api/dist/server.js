/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./controllers/ValidateParameters.js":
/*!*******************************************!*\
  !*** ./controllers/ValidateParameters.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Given a list of parameters, validate that they exist in the request and return
 * an object with nothing but those required.
 * May expand this further to do additional checking on the parameters (numbers vs strings, etc)
 */
var validateParameters = function validateParameters(params, req) {
  var returnedRequest = {};
  var errors = [];
  params.forEach(function (param) {
    var value = req[param];
    if (!value) errors.push("".concat(param, " does not exist."));else returnedRequest[param] = req[param];
  });
  return _objectSpread(_objectSpread({}, returnedRequest), {}, {
    errors: errors
  });
};

/* harmony default export */ __webpack_exports__["default"] = (validateParameters);

/***/ }),

/***/ "./controllers/login.js":
/*!******************************!*\
  !*** ./controllers/login.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ValidateParameters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ValidateParameters */ "./controllers/ValidateParameters.js");
// npm imports
 // helpers


var router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
/**
 * User is attempting login.
 */

router.get('/:username/:password', function (req, res) {
  console.log('User is attempting to login with:', req.params); // ensure we have all of the required parameters to process a login

  var params = ['username', 'password'];

  var _ValidateParameters = Object(_ValidateParameters__WEBPACK_IMPORTED_MODULE_1__["default"])(params, req.params),
      username = _ValidateParameters.username,
      password = _ValidateParameters.password,
      errors = _ValidateParameters.errors;

  if (errors.length > 0) {
    console.log('Failed to validate parameters:', errors);
    res.status(500).send('Failed to validate parameters. See API logs for details');
    return;
  } // simulate call to service layer


  console.log("Calling service layer with ".concat(username, " and ").concat(password));
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    success: true
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./controllers/resume.js":
/*!*******************************!*\
  !*** ./controllers/resume.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);

var router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
/**
 * Download resume
 */

router.get('/download', function (req, res) {
  console.log('User has requested a resume download');
  var file = "".concat(__dirname, "/resume.pdf");
  var fileName = 'Chris Waller - Full Stack Application Developer.pdf';
  res.download(file, fileName); // Set disposition and send it.
});
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var express_pino_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express-pino-logger */ "express-pino-logger");
/* harmony import */ var express_pino_logger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express_pino_logger__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _controllers_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controllers/login */ "./controllers/login.js");
/* harmony import */ var _controllers_resume__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controllers/resume */ "./controllers/resume.js");
// npm imports



 // API routes


 // TODO: grab this from a config at some point

var PORT = 3001; // TODO: need to create an overall site logger when I have a db connection to
// take care of auditing. Need to add that on the client as well.
// setup the API server

var app = express__WEBPACK_IMPORTED_MODULE_0___default()();
var pinoLogger = express_pino_logger__WEBPACK_IMPORTED_MODULE_3___default()(); // look into bodyParser further to see which options I should set

app.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.urlencoded({
  extended: false
})); // use pino for extra request/resposne server logging

app.use(pinoLogger); // enable cors

app.use(cors__WEBPACK_IMPORTED_MODULE_2___default()()); // the main server file

app.use('/', express__WEBPACK_IMPORTED_MODULE_0___default.a["static"]("".concat(__dirname, "/dist"))); // setup API routes

app.use('/resume', _controllers_resume__WEBPACK_IMPORTED_MODULE_5__["default"]);
app.use('/login', _controllers_login__WEBPACK_IMPORTED_MODULE_4__["default"]);
app.listen(PORT, function () {
  return console.log("Express server is running on localhost:".concat(PORT));
});

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-pino-logger":
/*!**************************************!*\
  !*** external "express-pino-logger" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-pino-logger");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udHJvbGxlcnMvVmFsaWRhdGVQYXJhbWV0ZXJzLmpzIiwid2VicGFjazovLy8uL2NvbnRyb2xsZXJzL2xvZ2luLmpzIiwid2VicGFjazovLy8uL2NvbnRyb2xsZXJzL3Jlc3VtZS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3MtcGluby1sb2dnZXJcIiJdLCJuYW1lcyI6WyJ2YWxpZGF0ZVBhcmFtZXRlcnMiLCJwYXJhbXMiLCJyZXEiLCJyZXR1cm5lZFJlcXVlc3QiLCJlcnJvcnMiLCJmb3JFYWNoIiwicGFyYW0iLCJ2YWx1ZSIsInB1c2giLCJyb3V0ZXIiLCJleHByZXNzIiwiUm91dGVyIiwiZ2V0IiwicmVzIiwiY29uc29sZSIsImxvZyIsIlZhbGlkYXRlUGFyYW1ldGVycyIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJsZW5ndGgiLCJzdGF0dXMiLCJzZW5kIiwic2V0SGVhZGVyIiwiZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsInN1Y2Nlc3MiLCJmaWxlIiwiX19kaXJuYW1lIiwiZmlsZU5hbWUiLCJkb3dubG9hZCIsIlBPUlQiLCJhcHAiLCJwaW5vTG9nZ2VyIiwicGlubyIsInVzZSIsImJvZHlQYXJzZXIiLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJjb3JzIiwicmVzdW1lUm91dGVycyIsImxvZ2luUm91dGVycyIsImxpc3RlbiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7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Z0QiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zZXJ2ZXIuanNcIik7XG4iLCIvKipcclxuICogR2l2ZW4gYSBsaXN0IG9mIHBhcmFtZXRlcnMsIHZhbGlkYXRlIHRoYXQgdGhleSBleGlzdCBpbiB0aGUgcmVxdWVzdCBhbmQgcmV0dXJuXHJcbiAqIGFuIG9iamVjdCB3aXRoIG5vdGhpbmcgYnV0IHRob3NlIHJlcXVpcmVkLlxyXG4gKiBNYXkgZXhwYW5kIHRoaXMgZnVydGhlciB0byBkbyBhZGRpdGlvbmFsIGNoZWNraW5nIG9uIHRoZSBwYXJhbWV0ZXJzIChudW1iZXJzIHZzIHN0cmluZ3MsIGV0YylcclxuICovXHJcbmNvbnN0IHZhbGlkYXRlUGFyYW1ldGVycyA9IChwYXJhbXMsIHJlcSkgPT4ge1xyXG4gIGNvbnN0IHJldHVybmVkUmVxdWVzdCA9IHt9O1xyXG4gIGNvbnN0IGVycm9ycyA9IFtdO1xyXG4gIHBhcmFtcy5mb3JFYWNoKChwYXJhbSkgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSByZXFbcGFyYW1dO1xyXG4gICAgaWYgKCF2YWx1ZSkgZXJyb3JzLnB1c2goYCR7cGFyYW19IGRvZXMgbm90IGV4aXN0LmApO1xyXG4gICAgZWxzZSByZXR1cm5lZFJlcXVlc3RbcGFyYW1dID0gcmVxW3BhcmFtXTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLnJldHVybmVkUmVxdWVzdCxcclxuICAgIGVycm9ycyxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGVQYXJhbWV0ZXJzO1xyXG4iLCIvLyBucG0gaW1wb3J0c1xyXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuXHJcbi8vIGhlbHBlcnNcclxuaW1wb3J0IFZhbGlkYXRlUGFyYW1ldGVycyBmcm9tICcuL1ZhbGlkYXRlUGFyYW1ldGVycyc7XHJcblxyXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5cclxuLyoqXHJcbiAqIFVzZXIgaXMgYXR0ZW1wdGluZyBsb2dpbi5cclxuICovXHJcbnJvdXRlci5nZXQoJy86dXNlcm5hbWUvOnBhc3N3b3JkJywgKHJlcSwgcmVzKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ1VzZXIgaXMgYXR0ZW1wdGluZyB0byBsb2dpbiB3aXRoOicsIHJlcS5wYXJhbXMpO1xyXG5cclxuICAvLyBlbnN1cmUgd2UgaGF2ZSBhbGwgb2YgdGhlIHJlcXVpcmVkIHBhcmFtZXRlcnMgdG8gcHJvY2VzcyBhIGxvZ2luXHJcbiAgY29uc3QgcGFyYW1zID0gWyd1c2VybmFtZScsICdwYXNzd29yZCddO1xyXG4gIGNvbnN0IHsgdXNlcm5hbWUsIHBhc3N3b3JkLCBlcnJvcnMgfSA9IFZhbGlkYXRlUGFyYW1ldGVycyhwYXJhbXMsIHJlcS5wYXJhbXMpO1xyXG5cclxuICBpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcclxuICAgIGNvbnNvbGUubG9nKCdGYWlsZWQgdG8gdmFsaWRhdGUgcGFyYW1ldGVyczonLCBlcnJvcnMpO1xyXG4gICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoJ0ZhaWxlZCB0byB2YWxpZGF0ZSBwYXJhbWV0ZXJzLiBTZWUgQVBJIGxvZ3MgZm9yIGRldGFpbHMnKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIHNpbXVsYXRlIGNhbGwgdG8gc2VydmljZSBsYXllclxyXG4gIGNvbnNvbGUubG9nKGBDYWxsaW5nIHNlcnZpY2UgbGF5ZXIgd2l0aCAke3VzZXJuYW1lfSBhbmQgJHtwYXNzd29yZH1gKTtcclxuXHJcbiAgcmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuICByZXMuZW5kKEpTT04uc3RyaW5naWZ5KHtcclxuICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgfSkpO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcclxuIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5cclxuLyoqXHJcbiAqIERvd25sb2FkIHJlc3VtZVxyXG4gKi9cclxucm91dGVyLmdldCgnL2Rvd25sb2FkJywgKHJlcSwgcmVzKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ1VzZXIgaGFzIHJlcXVlc3RlZCBhIHJlc3VtZSBkb3dubG9hZCcpO1xyXG4gIGNvbnN0IGZpbGUgPSBgJHtfX2Rpcm5hbWV9L3Jlc3VtZS5wZGZgO1xyXG4gIGNvbnN0IGZpbGVOYW1lID0gJ0NocmlzIFdhbGxlciAtIEZ1bGwgU3RhY2sgQXBwbGljYXRpb24gRGV2ZWxvcGVyLnBkZic7XHJcbiAgcmVzLmRvd25sb2FkKGZpbGUsIGZpbGVOYW1lKTsgLy8gU2V0IGRpc3Bvc2l0aW9uIGFuZCBzZW5kIGl0LlxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcclxuIiwiLy8gbnBtIGltcG9ydHNcclxuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcclxuaW1wb3J0IGNvcnMgZnJvbSAnY29ycyc7XHJcbmltcG9ydCBwaW5vIGZyb20gJ2V4cHJlc3MtcGluby1sb2dnZXInO1xyXG5cclxuLy8gQVBJIHJvdXRlc1xyXG5pbXBvcnQgbG9naW5Sb3V0ZXJzIGZyb20gJy4vY29udHJvbGxlcnMvbG9naW4nO1xyXG5pbXBvcnQgcmVzdW1lUm91dGVycyBmcm9tICcuL2NvbnRyb2xsZXJzL3Jlc3VtZSc7XHJcblxyXG4vLyBUT0RPOiBncmFiIHRoaXMgZnJvbSBhIGNvbmZpZyBhdCBzb21lIHBvaW50XHJcbmNvbnN0IFBPUlQgPSAzMDAxO1xyXG5cclxuLy8gVE9ETzogbmVlZCB0byBjcmVhdGUgYW4gb3ZlcmFsbCBzaXRlIGxvZ2dlciB3aGVuIEkgaGF2ZSBhIGRiIGNvbm5lY3Rpb24gdG9cclxuLy8gdGFrZSBjYXJlIG9mIGF1ZGl0aW5nLiBOZWVkIHRvIGFkZCB0aGF0IG9uIHRoZSBjbGllbnQgYXMgd2VsbC5cclxuXHJcbi8vIHNldHVwIHRoZSBBUEkgc2VydmVyXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuY29uc3QgcGlub0xvZ2dlciA9IHBpbm8oKTtcclxuXHJcbi8vIGxvb2sgaW50byBib2R5UGFyc2VyIGZ1cnRoZXIgdG8gc2VlIHdoaWNoIG9wdGlvbnMgSSBzaG91bGQgc2V0XHJcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IGZhbHNlIH0pKTtcclxuXHJcbi8vIHVzZSBwaW5vIGZvciBleHRyYSByZXF1ZXN0L3Jlc3Bvc25lIHNlcnZlciBsb2dnaW5nXHJcbmFwcC51c2UocGlub0xvZ2dlcik7XHJcblxyXG4vLyBlbmFibGUgY29yc1xyXG5hcHAudXNlKGNvcnMoKSk7XHJcblxyXG4vLyB0aGUgbWFpbiBzZXJ2ZXIgZmlsZVxyXG5hcHAudXNlKCcvJywgZXhwcmVzcy5zdGF0aWMoYCR7X19kaXJuYW1lfS9kaXN0YCkpO1xyXG5cclxuLy8gc2V0dXAgQVBJIHJvdXRlc1xyXG5hcHAudXNlKCcvcmVzdW1lJywgcmVzdW1lUm91dGVycyk7XHJcbmFwcC51c2UoJy9sb2dpbicsIGxvZ2luUm91dGVycyk7XHJcblxyXG5hcHAubGlzdGVuKFBPUlQsICgpID0+IGNvbnNvbGUubG9nKGBFeHByZXNzIHNlcnZlciBpcyBydW5uaW5nIG9uIGxvY2FsaG9zdDoke1BPUlR9YCkpO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1waW5vLWxvZ2dlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9
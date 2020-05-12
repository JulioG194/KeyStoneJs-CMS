module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const techCompanies = [{
  label: "Apple",
  value: 1
}, {
  label: "Facebook",
  value: 2
}, {
  label: "Netflix",
  value: 3
}, {
  label: "Tesla",
  value: 4
}, {
  label: "Amazon",
  value: 5
}, {
  label: "Alphabet",
  value: 6
}];

class App extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  static async getInitialProps() {
    let response = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('http://localhost:3000/api/products');
    return {
      products: response.data
    };
  }

  render() {
    return __jsx("div", {
      className: "jsx-2673726414" + " " + 'container'
    }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2673726414"
    }, ".header.jsx-2673726414{padding:16px 16px;}.content.jsx-2673726414{padding:16px 16px;}.post.jsx-2673726414{margin-bottom:16px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxLZXlTdG9uZUpzX0NNU1xccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCb0IsQUFHaUMsQUFHQSxBQUdDLGtCQUxyQixBQUdBLENBR0EiLCJmaWxlIjoiRDpcXEtleVN0b25lSnNfQ01TXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuY29uc3QgdGVjaENvbXBhbmllcyA9IFtcclxuICB7IGxhYmVsOiBcIkFwcGxlXCIsIHZhbHVlOiAxIH0sXHJcbiAgeyBsYWJlbDogXCJGYWNlYm9va1wiLCB2YWx1ZTogMiB9LFxyXG4gIHsgbGFiZWw6IFwiTmV0ZmxpeFwiLCB2YWx1ZTogMyB9LFxyXG4gIHsgbGFiZWw6IFwiVGVzbGFcIiwgdmFsdWU6IDQgfSxcclxuICB7IGxhYmVsOiBcIkFtYXpvblwiLCB2YWx1ZTogNSB9LFxyXG4gIHsgbGFiZWw6IFwiQWxwaGFiZXRcIiwgdmFsdWU6IDYgfSxcclxuXTtcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XHJcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcHJvZHVjdHMnKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHsgcHJvZHVjdHM6IHJlc3BvbnNlLmRhdGEgfSBcclxuICB9XHJcbiAgXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxNnB4IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDE2cHggMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucG9zdCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8dWwgaWQ9XCJuYXZcIj5cclxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2tleXN0b25lXCI+SXIgYSBsYSBVSSBBZG1pbmlzdHJhZG9yPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5BYm91dDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+RkFRPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Db250YWN0PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlcic+XHJcbiAgICAgICAgICA8aDE+VGllbmRhIGRlIHJvcGE8L2gxPlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgICAgICAgeyB0aGlzLnByb3BzLnByb2R1Y3RzLm1hcCgocHJvZHVjdCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgIFxyXG48ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdCcga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC0xMiBjb2wtbWQtNCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0naW1nLWZsdWlkICcgc3JjPXtwcm9kdWN0LmltYWdlLnNlY3VyZV91cmx9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkJz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMj57cHJvZHVjdC50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogcHJvZHVjdC5kZXNjcmlwdGlvbi5icmllZn19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgzPiR7cHJvZHVjdC5wcmljZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMz5TaXplczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cD57cHJvZHVjdC5zaXplc308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDM+Q29sb3JzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwPntwcm9kdWN0LmNvbG9yc308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDsiXX0= */\n/*@ sourceURL=D:\\\\KeyStoneJs_CMS\\\\pages\\\\index.js */"), __jsx("div", {
      className: "jsx-2673726414"
    }, __jsx("ul", {
      id: "nav",
      className: "jsx-2673726414"
    }, __jsx("li", {
      className: "jsx-2673726414"
    }, __jsx("a", {
      href: "http://localhost:3000/keystone",
      className: "jsx-2673726414"
    }, "Ir a la UI Administrador")), __jsx("li", {
      className: "jsx-2673726414"
    }, __jsx("a", {
      href: "#",
      className: "jsx-2673726414"
    }, "About")), __jsx("li", {
      className: "jsx-2673726414"
    }, __jsx("a", {
      href: "#",
      className: "jsx-2673726414"
    }, "FAQ")), __jsx("li", {
      className: "jsx-2673726414"
    }, __jsx("a", {
      href: "#",
      className: "jsx-2673726414"
    }, "Contact")))), __jsx("div", {
      className: "jsx-2673726414" + " " + 'header'
    }, __jsx("h1", {
      className: "jsx-2673726414"
    }, "Tienda de ropa")), __jsx("div", {
      className: "jsx-2673726414" + " " + 'content'
    }, this.props.products.map((product, i) => {
      return __jsx("div", {
        key: i,
        className: "jsx-2673726414" + " " + 'product'
      }, __jsx("div", {
        className: "jsx-2673726414" + " " + 'row'
      }, __jsx("div", {
        className: "jsx-2673726414" + " " + 'col-12 col-md-4'
      }, __jsx("img", {
        src: product.image.secure_url,
        className: "jsx-2673726414" + " " + 'img-fluid '
      }), __jsx("div", {
        className: "jsx-2673726414" + " " + 'card'
      }, __jsx("h2", {
        className: "jsx-2673726414"
      }, product.title), __jsx("div", {
        dangerouslySetInnerHTML: {
          __html: product.description.brief
        },
        className: "jsx-2673726414"
      }), __jsx("h3", {
        className: "jsx-2673726414"
      }, "$", product.price), __jsx("br", {
        className: "jsx-2673726414"
      }), __jsx("h3", {
        className: "jsx-2673726414"
      }, "Sizes"), __jsx("p", {
        className: "jsx-2673726414"
      }, product.sizes), __jsx("h3", {
        className: "jsx-2673726414"
      }, "Colors"), __jsx("p", {
        className: "jsx-2673726414"
      }, product.colors)), __jsx("br", {
        className: "jsx-2673726414"
      }), __jsx("br", {
        className: "jsx-2673726414"
      }))));
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\KeyStoneJs_CMS\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-select":
/*!*******************************!*\
  !*** external "react-select" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNlbGVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiJdLCJuYW1lcyI6WyJ0ZWNoQ29tcGFuaWVzIiwibGFiZWwiLCJ2YWx1ZSIsIkFwcCIsIkNvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsInJlc3BvbnNlIiwiYXhpb3MiLCJnZXQiLCJwcm9kdWN0cyIsImRhdGEiLCJyZW5kZXIiLCJwcm9wcyIsIm1hcCIsInByb2R1Y3QiLCJpIiwiaW1hZ2UiLCJzZWN1cmVfdXJsIiwidGl0bGUiLCJfX2h0bWwiLCJkZXNjcmlwdGlvbiIsImJyaWVmIiwicHJpY2UiLCJzaXplcyIsImNvbG9ycyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwy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a0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmNvbnN0IHRlY2hDb21wYW5pZXMgPSBbXHJcbiAgeyBsYWJlbDogXCJBcHBsZVwiLCB2YWx1ZTogMSB9LFxyXG4gIHsgbGFiZWw6IFwiRmFjZWJvb2tcIiwgdmFsdWU6IDIgfSxcclxuICB7IGxhYmVsOiBcIk5ldGZsaXhcIiwgdmFsdWU6IDMgfSxcclxuICB7IGxhYmVsOiBcIlRlc2xhXCIsIHZhbHVlOiA0IH0sXHJcbiAgeyBsYWJlbDogXCJBbWF6b25cIiwgdmFsdWU6IDUgfSxcclxuICB7IGxhYmVsOiBcIkFscGhhYmV0XCIsIHZhbHVlOiA2IH0sXHJcbl07XHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xyXG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Byb2R1Y3RzJyk7XHJcbiAgICBcclxuICAgIHJldHVybiB7IHByb2R1Y3RzOiByZXNwb25zZS5kYXRhIH0gXHJcbiAgfVxyXG4gIFxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTZweCAxNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxNnB4IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnBvc3Qge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHVsIGlkPVwibmF2XCI+XHJcbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9rZXlzdG9uZVwiPklyIGEgbGEgVUkgQWRtaW5pc3RyYWRvcjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+QWJvdXQ8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkZBUTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+Q29udGFjdDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXInPlxyXG4gICAgICAgICAgPGgxPlRpZW5kYSBkZSByb3BhPC9oMT5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgICAgICAgIHsgdGhpcy5wcm9wcy5wcm9kdWN0cy5tYXAoKHByb2R1Y3QsIGkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICBcclxuPGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QnIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtMTIgY29sLW1kLTQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2ltZy1mbHVpZCAnIHNyYz17cHJvZHVjdC5pbWFnZS5zZWN1cmVfdXJsfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDI+e3Byb2R1Y3QudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHByb2R1Y3QuZGVzY3JpcHRpb24uYnJpZWZ9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMz4ke3Byb2R1Y3QucHJpY2V9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDM+U2l6ZXM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHA+e3Byb2R1Y3Quc2l6ZXN9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgzPkNvbG9yczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cD57cHJvZHVjdC5jb2xvcnN9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+PGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KSB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2VsZWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==
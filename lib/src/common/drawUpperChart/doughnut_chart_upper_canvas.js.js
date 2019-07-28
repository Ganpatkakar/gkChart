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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/common/drawUpperChart/doughnut_chart_upper_canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common/css_style.js":
/*!*********************************!*\
  !*** ./src/common/css_style.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function cssStyle(el, styles) {\n    for (var property in styles) {\n        el.style[property] = styles[property];\n    }\n}\n\nmodule.exports = cssStyle;\n\n//# sourceURL=webpack:///./src/common/css_style.js?");

/***/ }),

/***/ "./src/common/drawUpperChart/doughnut_chart_upper_canvas.js":
/*!******************************************************************!*\
  !*** ./src/common/drawUpperChart/doughnut_chart_upper_canvas.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// import GetMousePos from \"../mouse_position\";\nconst GetMousePos = __webpack_require__(/*! ../mouse_position */ \"./src/common/mouse_position.js\");\n// import cssStyle from \"../css_style\";\nconst cssStyle = __webpack_require__(/*! ../css_style */ \"./src/common/css_style.js\");\n// import ratio from \"../reatio\";\nconst ratio = __webpack_require__(/*! ../reatio */ \"./src/common/reatio.js\");\n\nfunction DoughnutChartUpperCanvas(nr, ctx, linecord, container) {\n    try {\n        // console.log(\"Start : donutChartUpperCanvas\");\n        const canvasUpper = document.getElementById('canvasupper' + nr);\n        const chartToolTip = document.querySelector('#' + container + ' .canvasjs-chart-tooltip');\n        const canvasUpperHeight = canvasUpper.height;\n        const canvasUpperWidth = canvasUpper.width;\n        if (canvasUpper) {\n            canvasUpper.addEventListener('mousemove', function (evt) {\n                ctx.clearRect(0, 0, canvasUpperWidth, canvasUpperHeight);\n                let linewidth = 80;\n                let mousePos = GetMousePos(canvasUpper, evt);\n                for (let i = 0; i < linecord.length; i++) {\n                    let radius = linecord[i].hei / 2 - linewidth;\n                    ctx.lineWidth = linewidth * 2;\n                    ctx.beginPath();\n                    ctx.arc(linecord[i].wid / 2, linecord[i].hei / 2, radius, linecord[i].startangle, linecord[i].lastangle, false);\n                    if (ctx.isPointInStroke(mousePos.x, mousePos.y)) {\n                        ctx.strokeStyle = \"rgba(0,0,0,0.2)\";\n                        ctx.stroke();\n                        if (chartToolTip) {\n                            cssStyle(chartToolTip, {\n                                'display': 'block',\n                                'left': mousePos.x / ratio(ctx) + \"px\",\n                                'top': mousePos.y / ratio(ctx) + \"px\"\n                            });\n                        }\n                        chartToolTip.innerHTML = linecord[i].label + ' : ' + linecord[i].y;\n                        break;\n                    }\n                    if (!ctx.isPointInStroke(mousePos.x, mousePos.y)) {\n                        ctx.clearRect(0, 0, canvasUpperWidth, canvasUpperHeight);\n                    }\n                }\n            }.bind(this), false);\n\n            canvasUpper.addEventListener('mouseout', function () {\n                setTimeout(function () {\n                    ctx.clearRect(0, 0, canvasUpperWidth, canvasUpperHeight);\n                    if (chartToolTip) {\n                        cssStyle(chartToolTip, {\n                            'display': 'none'\n                        });\n                    }\n                }, 2000);\n            });\n        }\n        // console.log(\"End : donutChartUpperCanvas\");\n    } catch (e) {\n        console.log(\"error occurred in donutChartUpperCanvas : \", e);\n    }\n}\n\nmodule.exports = DoughnutChartUpperCanvas;\n\n//# sourceURL=webpack:///./src/common/drawUpperChart/doughnut_chart_upper_canvas.js?");

/***/ }),

/***/ "./src/common/mouse_position.js":
/*!**************************************!*\
  !*** ./src/common/mouse_position.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function GetMousePos(canvas, evt) {\n    try {\n        //// console.log(\"Start : getMousePos\");\n        var rect = canvas.getBoundingClientRect();\n        return {\n            x: (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width,\n            y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height\n        };\n        //// console.log(\"End : getMousePos\");\n    } catch (e) {\n        console.log(\"error occurred in getMousePos : \", e);\n    }\n};\n\nmodule.exports = GetMousePos;\n\n//# sourceURL=webpack:///./src/common/mouse_position.js?");

/***/ }),

/***/ "./src/common/reatio.js":
/*!******************************!*\
  !*** ./src/common/reatio.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function ratio(ctx) {\n    var dpr = window.devicePixelRatio || 1;\n    var bsr = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;\n    return 2;\n    //return dpr / bsr;\n}\n\nmodule.exports = ratio;\n\n//# sourceURL=webpack:///./src/common/reatio.js?");

/***/ })

/******/ });
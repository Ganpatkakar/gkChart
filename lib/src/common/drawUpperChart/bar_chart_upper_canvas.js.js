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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/common/drawUpperChart/bar_chart_upper_canvas.js");
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

/***/ "./src/common/drawUpperChart/bar_chart_upper_canvas.js":
/*!*************************************************************!*\
  !*** ./src/common/drawUpperChart/bar_chart_upper_canvas.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// import GetMousePos from \"../mouse_position\";\nconst GetMousePos = __webpack_require__(/*! ../mouse_position */ \"./src/common/mouse_position.js\");\n// import cssStyle from \"../css_style\";\nconst cssStyle = __webpack_require__(/*! ../css_style */ \"./src/common/css_style.js\");\n// import ratio from \"../reatio\";\nconst ratio = __webpack_require__(/*! ../reatio */ \"./src/common/reatio.js\");\n\nconst gkChartConsts = __webpack_require__(/*! ../../invokeCharts/enums */ \"./src/invokeCharts/enums.js\");\n\nconst strokeStyle = gkChartConsts.strokeStyle;\nconst canvasHeightSpareForDetails = gkChartConsts.canvasHeightSpareForDetails;\nlet canvasWidthSpareForDetails = gkChartConsts.canvasWidthSpareForDetails;\n\nfunction BarChartUpperCanvas(nr, ctx, linecord, container, chart, maxTextWidth) {\n    try {\n        // console.log(\"Start : barChartUpperCanvas\");\n        if (maxTextWidth > canvasWidthSpareForDetails) {\n            canvasWidthSpareForDetails = maxTextWidth;\n        }\n\n        let dataPointLen = chart.data[0].datapoints.length;\n        let wid = document.getElementById('canvasupper' + nr).width - canvasWidthSpareForDetails;\n        let hei = document.getElementById('canvasupper' + nr).height - canvasHeightSpareForDetails;\n        const spacingHorizontal = wid / dataPointLen;\n        const spacingVertical = hei / dataPointLen;\n        let lineCordRepeat = linecord.length / dataPointLen;\n        const canvasUpper = document.getElementById('canvasupper' + nr);\n        const chartToolTip = document.querySelector('#' + container + ' .canvasjs-chart-tooltip');\n        const canvasUpperHeight = canvasUpper.height;\n        // const barHeight = spacingVertical / lineCordRepeat * .80;\n        // const canvasUpperWidth = canvasUpper.width;\n        if (canvasUpper) {\n            canvasUpper.addEventListener('mousemove', function (evt) {\n                let mousePos = GetMousePos(canvasUpper, evt);\n                let details = '';\n                for (let i = 0; i < dataPointLen; i++) {\n                    ctx.beginPath();\n                    let x1 = canvasWidthSpareForDetails;\n                    let x2 = wid;\n                    let y1 = i * spacingVertical;\n                    let y2 = spacingVertical;\n                    ctx.rect(x1, y1, x2, y2);\n\n                    if (ctx.isPointInStroke(mousePos.x, mousePos.y) || ctx.isPointInPath(mousePos.x, mousePos.y)) {\n                        ctx.beginPath();\n                        ctx.rect(x1, y1, x2, y2);\n                        ctx.fillStyle = 'rgba(0,0,0,.1)';\n                        ctx.fill();\n                        ctx.closePath();\n                        for (let j = 0; j < lineCordRepeat; j++) {\n                            let position = j * dataPointLen + i;\n                            // ctx.beginPath();\n                            // ctx.rect(linecord[position].x, linecord[position].y, linecord[position].wid, linecord[position].hei);\n                            // ctx.lineWidth = .5;\n                            // ctx.fillStyle = 'rgba(0,0,0,.3)';\n                            // ctx.fill();\n                            // ctx.stroke();\n                            if (chartToolTip) {\n                                cssStyle(chartToolTip, {\n                                    \"left\": mousePos.x / ratio(ctx) + 30 + \"px\",\n                                    \"top\": mousePos.y / ratio(ctx) + \"px\",\n                                    \"display\": \"block\"\n                                });\n                            }\n                            details += `<div style=\"color: ${linecord[position].dataColor}\">${linecord[position].dataLabel}  <br />  ${linecord[position].label} : ${linecord[position].dataval} <br /></div>`;\n                        }\n                        ctx.beginPath();\n                        let lineX = x1 + spacingHorizontal / 2;\n                        ctx.strokeStyle = strokeStyle;\n                        ctx.lineWidth = 1;\n                        ctx.moveTo(lineX, y1);\n                        ctx.stroke();\n                        chartToolTip.innerHTML = details;\n                        break;\n                    }\n                    ctx.closePath();\n                }\n            }.bind(this), false);\n        }\n        // console.log(\"End : barChartUpperCanvas\");\n    } catch (e) {\n        console.log(\"error occurred in barChartUpperCanvas : \", e);\n    }\n}\n\nmodule.exports = BarChartUpperCanvas;\n\n//# sourceURL=webpack:///./src/common/drawUpperChart/bar_chart_upper_canvas.js?");

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

/***/ }),

/***/ "./src/invokeCharts/enums.js":
/*!***********************************!*\
  !*** ./src/invokeCharts/enums.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.xAxisSpacing = 104;\nexports.fontLineHeight = 26;\nexports.strokeStyle = \"rgba(0,0,0,1)\";\nexports.white = \"#fff\";\nexports.blackFillStyle = \"#000\";\nexports.canvasHeightSpareForDetails = 105;\nexports.canvasWidthSpareForDetails = 100;\nexports.font = \"26px  Source Sans Pro, Helvetica Neue, Arial, sans-serif\";\nexports.toolTipBgColor = \"rgba(255, 255, 255, .9)\";\n\nexports.barChart = \"bar-chart\";\nexports.columnChart = \"column-chart\";\nexports.lineChart = \"line-chart\";\nexports.stepLineChart = \"step-line-chart\";\nexports.smoothLineChart = \"smooth-line-chart\";\nexports.multiRandomChart = \"multi-random\";\nexports.combinationChart = \"combination-chart\";\nexports.pieChart = \"pie-chart\";\nexports.doughnutChart = \"doughnut-chart\";\nexports.meterChart = \"meter-chart\";\n\n//# sourceURL=webpack:///./src/invokeCharts/enums.js?");

/***/ })

/******/ });
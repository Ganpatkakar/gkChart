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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/common/drawUpperChart/draw_upper_chart_canvas.js");
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

/***/ "./src/common/drawUpperChart/draw_upper_chart_canvas.js":
/*!**************************************************************!*\
  !*** ./src/common/drawUpperChart/draw_upper_chart_canvas.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// import GetMousePos from \"../mouse_position\";\nconst GetMousePos = __webpack_require__(/*! ../mouse_position */ \"./src/common/mouse_position.js\");\n// import cssStyle from \"../css_style\";\nconst cssStyle = __webpack_require__(/*! ../css_style */ \"./src/common/css_style.js\");\nconst gkChartConsts = __webpack_require__(/*! ../../invokeCharts/enums */ \"./src/invokeCharts/enums.js\");\n\nconst strokeStyle = gkChartConsts.strokeStyle;\nconst canvasHeightSpareForDetails = gkChartConsts.canvasHeightSpareForDetails;\nconst canvasWidthSpareForDetails = gkChartConsts.canvasWidthSpareForDetails;\n\nclass DrawChartUpperCanvas {\n    constructor() {\n        this.details = '';\n    }\n\n    ratio(ctx) {\n        // var dpr = window.devicePixelRatio || 1;\n        // var bsr = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;\n        return 2;\n        //return dpr / bsr;\n    }\n\n    lineChartUpperCanvas(nr, ctx, linecord, container, chart) {\n        try {\n            // console.log(\"Start : lineChartUpperCanvas\");\n            let dataPointLen = chart.data[0].datapoints.length;\n            let wid = document.getElementById('canvasupper' + nr).width - canvasWidthSpareForDetails;\n            var spacingHorizontal = wid / dataPointLen;\n            let lineCordRepeat = linecord.length / dataPointLen;\n            const canvasUpper = document.getElementById('canvasupper' + nr);\n            const chartToolTip = document.querySelector('#' + container + ' .canvasjs-chart-tooltip');\n            if (canvasUpper) {\n                canvasUpper.addEventListener('mousemove', function (evt) {\n                    //ctx.clearRect(0, 0, document.getElementById('canvasupper' + nr).width, document.getElementById('canvasupper' + nr).height);\n                    let mousePos = GetMousePos(canvasUpper, evt);\n                    for (var i = 0; i < dataPointLen; i++) {\n                        ctx.beginPath();\n                        let x1 = i * spacingHorizontal + canvasWidthSpareForDetails;\n                        let x2 = spacingHorizontal;\n                        let y1 = 0;\n                        let y2 = canvasUpper.height - canvasHeightSpareForDetails;\n                        ctx.rect(x1, y1, x2, y2);\n                        if (ctx.isPointInStroke(mousePos.x, mousePos.y) || ctx.isPointInPath(mousePos.x, mousePos.y)) {\n                            //ctx.clearRect(0, 0, document.getElementById('canvasupper' + nr).width, document.getElementById('canvasupper' + nr).height);\n                            for (let j = 0; j < lineCordRepeat; j++) {\n                                ctx.beginPath();\n                                let position = j * dataPointLen + i;\n                                ctx.arc(linecord[position].x, linecord[position].y, 12, 0, 2 * Math.PI);\n                                // console.log(\"lineChart compare mouse over on upper canvas\");\n                                //ctx.lineWidth = 5;\n                                ctx.strokeStyle = linecord[position].dataColor; //'rgba(0,0,0,.7)';\n                                ctx.fillStyle = linecord[position].dataColor; //'rgba(0,0,0,.7)';\n                                //ctx.stroke();\n                                ctx.fill();\n                                if (chartToolTip) {\n                                    cssStyle(chartToolTip, {\n                                        \"left\": mousePos.x / this.ratio(ctx) + 30 + \"px\",\n                                        \"top\": mousePos.y / this.ratio(ctx) + \"px\",\n                                        \"display\": \"block\"\n                                    });\n                                }\n                                this.details += `<div style=\"color: ${linecord[position].dataColor}\">${linecord[position].dataLabel}  <br />  ${linecord[position].label} : ${linecord[position].dataval} <br /></div>`;\n                            }\n\n                            ctx.beginPath();\n                            let lineX = x1 + spacingHorizontal / 2;\n                            ctx.setLineDash([5, 15]);\n                            ctx.strokeStyle = strokeStyle;\n                            ctx.lineWidth = 1;\n                            ctx.moveTo(lineX, y1);\n                            ctx.lineTo(lineX, y2);\n                            ctx.stroke();\n\n                            chartToolTip.innerHTML = this.details;\n                            break;\n                        }\n                        ctx.closePath();\n                    }\n                }.bind(this), false);\n            }\n            // console.log(\"End : lineChartUpperCanvas\");\n        } catch (e) {\n            console.log(\"error occurred in lineChartUpperCanvas : \", e);\n        }\n    }\n\n    barChartUpperCanvas(nr, ctx, linecord, container, chart) {\n        try {\n            // console.log(\"Start : barChartUpperCanvas\");\n            let dataPointLen = chart.data[0].datapoints.length;\n            let wid = document.getElementById('canvasupper' + nr).width - canvasWidthSpareForDetails;\n            var spacingHorizontal = wid / dataPointLen;\n            let lineCordRepeat = linecord.length / dataPointLen;\n            const canvasUpper = document.getElementById('canvasupper' + nr);\n            const chartToolTip = document.querySelector('#' + container + ' .canvasjs-chart-tooltip');\n            if (canvasUpper) {\n                canvasUpper.addEventListener('mousemove', function (evt) {\n                    var mousePos = GetMousePos(canvasUpper, evt);\n                    //// console.log(mousePos);\n                    /*var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;\n                    // console.log(message);*/\n                    for (var i = 0; i < dataPointLen; i++) {\n                        ctx.beginPath();\n                        let x1 = i * spacingHorizontal + canvasWidthSpareForDetails;\n                        let x2 = spacingHorizontal;\n                        let y1 = 0;\n                        let y2 = document.getElementById('canvasupper' + nr).height - canvasHeightSpareForDetails;\n                        ctx.rect(x1, y1, x2, y2);\n                        if (ctx.isPointInStroke(mousePos.x, mousePos.y) || ctx.isPointInPath(mousePos.x, mousePos.y)) {\n                            //ctx.clearRect(0, 0, document.getElementById('canvasupper' + nr).width, document.getElementById('canvasupper' + nr).height);\n                            for (let j = 0; j < lineCordRepeat; j++) {\n                                let position = j * dataPointLen + i;\n                                ctx.beginPath();\n                                ctx.rect(linecord[position].x, linecord[position].y, linecord[position].wid, linecord[position].hei);\n                                ctx.lineWidth = .5;\n                                ctx.fillStyle = 'rgba(0,0,0,.3)';\n                                ctx.fill();\n                                ctx.stroke();\n                                if (chartToolTip) {\n                                    cssStyle(chartToolTip, {\n                                        \"left\": mousePos.x / this.ratio(ctx) + 30 + \"px\",\n                                        \"top\": mousePos.y / this.ratio(ctx) + \"px\",\n                                        \"display\": \"block\"\n                                    });\n                                }\n                                this.details += `<div style=\"color: ${linecord[position].dataColor}\">${linecord[position].dataLabel}  <br />  ${linecord[position].label} : ${linecord[position].dataval} <br /></div>`;\n                            }\n                            ctx.beginPath();\n                            let lineX = x1 + spacingHorizontal / 2;\n                            ctx.setLineDash([5, 15]);\n                            ctx.strokeStyle = strokeStyle;\n                            ctx.lineWidth = 1;\n                            ctx.moveTo(lineX, y1);\n                            ctx.lineTo(lineX, y2);\n                            ctx.stroke();\n                            chartToolTip.innerHTML = this.details;\n                            break;\n                        }\n                        ctx.closePath();\n                    }\n                }.bind(this), false);\n            }\n            // console.log(\"End : barChartUpperCanvas\");\n        } catch (e) {\n            console.log(\"error occurred in barChartUpperCanvas : \", e);\n        }\n    }\n\n    clearDetails(nr, ctx, container) {\n        const canvasUpperNr = document.getElementById('canvasupper' + nr);\n        if (canvasUpperNr) {\n            canvasUpperNr.addEventListener('mousemove', function () {\n                this.details = '';\n                ctx.clearRect(0, 0, canvasUpperNr.width, canvasUpperNr.height);\n            }.bind(this));\n\n            canvasUpperNr.addEventListener('mouseout', function () {\n                setTimeout(function () {\n                    ctx.clearRect(0, 0, canvasUpperNr.width, canvasUpperNr.height);\n                    const chartToolTip = document.querySelector('#' + container + ' .canvasjs-chart-tooltip');\n                    if (chartToolTip) {\n                        cssStyle(chartToolTip, {\n                            'display': 'none'\n                        });\n                    }\n                }, 2000);\n            }.bind(this));\n        }\n    }\n\n    pieChartUpperCanvas(nr, ctx, linecord, container) {\n        try {\n            // console.log(\"Start : pieChartUpperCanvas\");\n            const canvasUpper = document.getElementById('canvasupper' + nr);\n            const chartToolTip = document.querySelector('#' + container + ' .canvasjs-chart-tooltip');\n            const canvasUpperHeight = canvasUpper.height;\n            const canvasUpperWidth = canvasUpper.width;\n            if (canvasUpper) {\n                canvasUpper.addEventListener('mousemove', function (evt) {\n                    ctx.clearRect(0, 0, canvasUpperWidth, canvasUpperHeight);\n                    let mousePos = GetMousePos(canvasUpper, evt);\n                    /*var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;\n                    // console.log(message);*/\n                    let lineCordLength = linecord.length;\n                    for (var i = 0; i < lineCordLength; i++) {\n                        ctx.beginPath();\n                        ctx.lineTo(linecord[i].wid / 2, linecord[i].hei / 2);\n                        ctx.arc(linecord[i].wid / 2, linecord[i].hei / 2, linecord[i].hei / 2, linecord[i].startangle, linecord[i].lastangle, false);\n                        ctx.lineTo(linecord[i].x, linecord[i].x);\n                        if (ctx.isPointInStroke(mousePos.x, mousePos.y) || ctx.isPointInPath(mousePos.x, mousePos.y)) {\n                            /*ctx.lineWidth=1;\n                             ctx.stroke();*/\n                            ctx.fillStyle = 'rgba(0,0,0,.3)';\n                            ctx.fill();\n                            cssStyle(chartToolTip, {\n                                'display': 'block',\n                                'left': mousePos.x / this.ratio(ctx) + \"px\",\n                                'top': mousePos.y / this.ratio(ctx) + \"px\"\n                            });\n                            chartToolTip.innerHTML = linecord[i].label + ' : ' + linecord[i].y;\n\n                            break;\n                        } else {\n                            ctx.clearRect(0, 0, canvasUpperWidth, canvasUpperHeight);\n                        }\n                    }\n                }.bind(this), false);\n\n                canvasUpper.addEventListener('mouseout', function () {\n                    setTimeout(function () {\n                        ctx.clearRect(0, 0, canvasUpperWidth, canvasUpperHeight);\n                        cssStyle(chartToolTip, {\n                            'display': 'none'\n                        });\n                    }, 2000);\n                });\n            }\n            // console.log(\"End : pieChartUpperCanvas\");\n        } catch (e) {\n            console.log(\"error occurred in pieChartUpperCanvas : \", e);\n        }\n    }\n\n    donutChartUpperCanvas(nr, ctx, linecord, container) {\n        try {\n            // console.log(\"Start : donutChartUpperCanvas\");\n            const canvasUpper = document.getElementById('canvasupper' + nr);\n            const chartToolTip = document.querySelector('#' + container + ' .canvasjs-chart-tooltip');\n            const canvasUpperHeight = canvasUpper.height;\n            const canvasUpperWidth = canvasUpper.width;\n            if (canvasUpper) {\n                canvasUpper.addEventListener('mousemove', function (evt) {\n                    ctx.clearRect(0, 0, canvasUpperWidth, canvasUpperHeight);\n                    let linewidth = 80;\n                    let mousePos = GetMousePos(canvasUpper, evt);\n                    for (var i = 0; i < linecord.length; i++) {\n                        var radius = linecord[i].hei / 2 - linewidth;\n                        ctx.lineWidth = linewidth * 2;\n                        ctx.beginPath();\n                        ctx.arc(linecord[i].wid / 2, linecord[i].hei / 2, radius, linecord[i].startangle, linecord[i].lastangle, false);\n                        if (ctx.isPointInStroke(mousePos.x, mousePos.y)) {\n                            ctx.strokeStyle = \"rgba(0,0,0,0.2)\";\n                            ctx.stroke();\n                            if (chartToolTip) {\n                                cssStyle(chartToolTip, {\n                                    'display': 'block',\n                                    'left': mousePos.x / this.ratio(ctx) + \"px\",\n                                    'top': mousePos.y / this.ratio(ctx) + \"px\"\n                                });\n                            }\n                            chartToolTip.innerHTML = linecord[i].label + ' : ' + linecord[i].y;\n                            break;\n                        }\n                        if (!ctx.isPointInStroke(mousePos.x, mousePos.y)) {\n                            ctx.clearRect(0, 0, canvasUpperWidth, canvasUpperHeight);\n                        }\n                    }\n                }.bind(this), false);\n                canvasUpper.addEventListener('mouseout', function () {\n                    setTimeout(function () {\n                        ctx.clearRect(0, 0, canvasUpperWidth, canvasUpperHeight);\n                        if (chartToolTip) {\n                            cssStyle(chartToolTip, {\n                                'display': 'none'\n                            });\n                        }\n                    }, 2000);\n                });\n            }\n            // console.log(\"End : donutChartUpperCanvas\");\n        } catch (e) {\n            console.log(\"error occurred in donutChartUpperCanvas : \", e);\n        }\n    }\n}\n\nmodule.exports = DrawChartUpperCanvas;\n\n//# sourceURL=webpack:///./src/common/drawUpperChart/draw_upper_chart_canvas.js?");

/***/ }),

/***/ "./src/common/mouse_position.js":
/*!**************************************!*\
  !*** ./src/common/mouse_position.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function GetMousePos(canvas, evt) {\n    try {\n        //// console.log(\"Start : getMousePos\");\n        var rect = canvas.getBoundingClientRect();\n        return {\n            x: (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width,\n            y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height\n        };\n        //// console.log(\"End : getMousePos\");\n    } catch (e) {\n        console.log(\"error occurred in getMousePos : \", e);\n    }\n};\n\nmodule.exports = GetMousePos;\n\n//# sourceURL=webpack:///./src/common/mouse_position.js?");

/***/ }),

/***/ "./src/invokeCharts/enums.js":
/*!***********************************!*\
  !*** ./src/invokeCharts/enums.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.xAxisSpacing = 104;\nexports.fontLineHeight = 26;\nexports.strokeStyle = \"rgba(0,0,0,1)\";\nexports.white = \"#fff\";\nexports.blackFillStyle = \"#000\";\nexports.canvasHeightSpareForDetails = 105;\nexports.canvasWidthSpareForDetails = 100;\nexports.font = \"26px  Source Sans Pro, Helvetica Neue, Arial, sans-serif\";\nexports.toolTipBgColor = \"rgba(255, 255, 255, .9)\";\n\nexports.barChart = \"bar-chart\";\nexports.columnChart = \"column-chart\";\nexports.lineChart = \"line-chart\";\nexports.stepLineChart = \"step-line-chart\";\nexports.smoothLineChart = \"smooth-line-chart\";\nexports.combinationChart = \"combination-chart\";\nexports.pieChart = \"pie-chart\";\nexports.doughnutChart = \"doughnut-chart\";\nexports.meterChart = \"meter-chart\";\nexports.sparkChart = \"spark-chart\";\nexports.stackedChart = \"stacked-chart\";\n\n//# sourceURL=webpack:///./src/invokeCharts/enums.js?");

/***/ })

/******/ });
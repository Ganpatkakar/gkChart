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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/common/drawChart/smooth_line_chart_canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common/drawChart/smooth_line_chart_canvas.js":
/*!**********************************************************!*\
  !*** ./src/common/drawChart/smooth_line_chart_canvas.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const gkChartConsts = __webpack_require__(/*! ../../invokeCharts/enums */ \"./src/invokeCharts/enums.js\");\n\nconst canvasHeightSpareForDetails = gkChartConsts.canvasHeightSpareForDetails;\nconst canvasWidthSpareForDetails = gkChartConsts.canvasWidthSpareForDetails;\n\nfunction bezierPointsCalc(a, f) {\n    for (var b = [], c, e = 0; e < a.length; e++) if (0 == e) b.push(a[0]);else {\n        var g, h, l;\n        l = e - 1;\n        g = 0 === l ? 0 : l - 1;\n        h = l === a.length - 1 ? l : l + 1;\n        c = Math.abs((a[h].x - a[g].x) / (0 === a[h].x - a[l].x ? 0.01 : a[h].x - a[l].x)) * (f - 1) / 2 + 1;\n        var t = (a[h].x - a[g].x) / c;\n        c = (a[h].y - a[g].y) / c;\n        b[b.length] = a[l].x > a[g].x && 0 < t || a[l].x < a[g].x && 0 > t ? {\n            x: a[l].x + t / 3,\n            y: a[l].y + c / 3\n        } : {\n            x: a[l].x,\n            y: a[l].y + c / 9\n        };\n        l = e;\n        g = 0 === l ? 0 : l - 1;\n        h = l === a.length - 1 ? l : l + 1;\n        c = Math.abs((a[h].x - a[g].x) / (0 === a[l].x - a[g].x ? 0.01 : a[l].x - a[g].x)) * (f - 1) / 2 + 1;\n        t = (a[h].x - a[g].x) / c;\n        c = (a[h].y - a[g].y) / c;\n        b[b.length] = a[l].x > a[g].x && 0 < t || a[l].x < a[g].x && 0 > t ? {\n            x: a[l].x - t / 3,\n            y: a[l].y - c / 3\n        } : {\n            x: a[l].x,\n            y: a[l].y - c / 9\n        };\n        b[b.length] = a[e];\n    }\n    return b;\n}\n\nfunction drawSmoothLineChart(canvasId, ctx, verticalNr, data, range, chartColor, linecord) {\n    try {\n        // console.log(\"Start : drawGraphicLinear\");\n        const calcWayPoints = vertices => {\n            const wayPoints = [];\n            for (let i = 1; i < vertices.length; i += 3) {\n                let startPt = { x: vertices[i - 1].x, y: vertices[i - 1].y };\n                let ct1 = { x: vertices[i].x, y: vertices[i].y };\n                let ct2 = { x: vertices[i + 1].x, y: vertices[i + 1].y };\n                let endPt = { x: vertices[i + 2].x, y: vertices[i + 2].y };\n                for (let t = 0; t < difference; t++) {\n                    let pointers = getQuadraticBezierXYatT(startPt, ct1, ct2, endPt, t / difference);\n                    wayPoints.push({\n                        x: pointers.x,\n                        y: pointers.y\n                    });\n                }\n            }\n            return wayPoints;\n        };\n\n        const getQuadraticBezierXYatT = (startPt, ct1, ct2, endPt, t) => {\n            let x = Math.pow(1 - t, 3) * startPt.x + 3 * Math.pow(1 - t, 2) * t * ct1.x + 3 * (1 - t) * Math.pow(t, 2) * ct2.x + Math.pow(t, 3) * endPt.x;\n            let y = Math.pow(1 - t, 3) * startPt.y + 3 * Math.pow(1 - t, 2) * t * ct1.y + 3 * (1 - t) * Math.pow(t, 2) * ct2.y + Math.pow(t, 3) * endPt.y;\n            return { x: x, y: y };\n        };\n\n        const commonCodeCircle = () => {\n            ctx.beginPath();\n            ctx.fillStyle = chartColor;\n            ctx.arc(points[i].x, points[i].y, 8, 0, 2 * Math.PI);\n            ctx.fill();\n            ctx.strokeStyle = chartColor;\n            ctx.stroke();\n        };\n\n        const fillAreaCall = vertices => {\n            ctx.beginPath();\n            if (vertices.length) {\n                ctx.moveTo(vertices[0].x, hei);\n            }\n            for (let points = 0; points < vertices.length; points++) {\n                ctx.lineTo(vertices[points].x, vertices[points].y + 4);\n            }\n            if (vertices.length) {\n                ctx.lineTo(vertices[vertices.length - 1].x, hei);\n            }\n            ctx.closePath();\n            ctx.globalAlpha = 0.1;\n            ctx.fillStyle = chartColor;\n            ctx.fill();\n        };\n\n        const animate = points => {\n            if (i < points.length - 1) {\n                requestAnimationFrame(animate.bind(this, points));\n            }\n            ctx.lineWidth = 3;\n            ctx.beginPath();\n            ctx.globalAlpha = 1;\n            ctx.strokeStyle = chartColor;\n            if (i === 0) {\n                ctx.moveTo(points[i].x, points[i].y);\n            } else {\n                ctx.moveTo(points[i - 1].x, points[i - 1].y);\n                ctx.lineTo(points[i].x, points[i].y);\n            }\n            ctx.stroke();\n\n            if (i % difference === 0 || i === points.length - 1) {\n                commonCodeCircle();\n            }\n\n            if (data.fill) {\n                let p = {};\n                if (i) {\n                    p = points.slice(i - 1, i + 1);\n                }\n                fillAreaCall(p);\n            }\n\n            i = i + 1;\n        };\n\n        var canvas = document.getElementById(canvasId);\n        const hei = canvas.height - canvasHeightSpareForDetails;\n        const wid = canvas.width - +canvasWidthSpareForDetails;\n        const spacingVertical = hei / verticalNr;\n        var spacingHorizontal = wid / data.datapoints.length;\n\n        const totalRange = range[1] - range[0];\n        const verticalCoefficient = hei / totalRange;\n        ctx.strokeStyle = chartColor;\n        ctx.globalAlpha = 1;\n        const localLineCords = [];\n\n        for (let i = 0; i < data.datapoints.length; i++) {\n            let newobj = {\n                x: i * spacingHorizontal + spacingHorizontal / 2 + canvasWidthSpareForDetails,\n                y: hei - (data.datapoints[i].y - range[0]) * verticalCoefficient,\n                label: data.datapoints[i].label,\n                dataLabel: data.dataLabel,\n                dataval: data.datapoints[i].y,\n                dataColor: data.chartColor\n            };\n            linecord.push(newobj);\n            localLineCords.push(newobj);\n        }\n\n        ctx.closePath();\n        let f = 2;\n        let a = bezierPointsCalc(localLineCords, f);\n        // console.log(a);\n\n        let difference = 25;\n        let points = calcWayPoints(a);\n\n        points.push(localLineCords[localLineCords.length - 1]);\n\n        let i = 0;\n\n        animate(points);\n\n        ctx.globalAlpha = 1;\n\n        return linecord;\n    } catch (e) {\n        console.log(\"error occured in drawsplinechart : \", e);\n    }\n}\n\nmodule.exports = drawSmoothLineChart;\n\n//# sourceURL=webpack:///./src/common/drawChart/smooth_line_chart_canvas.js?");

/***/ }),

/***/ "./src/invokeCharts/enums.js":
/*!***********************************!*\
  !*** ./src/invokeCharts/enums.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.xAxisSpacing = 104;\nexports.fontLineHeight = 16;\nexports.strokeStyle = \"rgba(0,0,0,1)\";\nexports.white = \"#fff\";\nexports.blackFillStyle = \"#000\";\nexports.canvasHeightSpareForDetails = 105;\nexports.canvasWidthSpareForDetails = 100;\nexports.font = \"26px  Source Sans Pro, Helvetica Neue, Arial, sans-serif\";\nexports.toolTipBgColor = \"#000\";\n\nexports.barChart = \"bar-chart\";\nexports.columnChart = \"column-chart\";\nexports.lineChart = \"line-chart\";\nexports.stepLineChart = \"step-line-chart\";\nexports.smoothLineChart = \"smooth-line-chart\";\nexports.multiRandomChart = \"multi-random\";\nexports.combinationChart = \"combination-chart\";\nexports.pieChart = \"pie-chart\";\nexports.doughnutChart = \"doughnut-chart\";\nexports.meterChart = \"meter-chart\";\n\n//# sourceURL=webpack:///./src/invokeCharts/enums.js?");

/***/ })

/******/ });
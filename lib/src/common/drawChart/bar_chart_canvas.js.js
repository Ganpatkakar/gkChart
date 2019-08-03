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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/common/drawChart/bar_chart_canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common/drawChart/bar_chart_canvas.js":
/*!**************************************************!*\
  !*** ./src/common/drawChart/bar_chart_canvas.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const gkChartConsts = __webpack_require__(/*! ../../invokeCharts/enums */ \"./src/invokeCharts/enums.js\");\n\nconst canvasHeightSpareForDetails = gkChartConsts.canvasHeightSpareForDetails;\nlet canvasWidthSpareForDetails = gkChartConsts.canvasWidthSpareForDetails;\n\nfunction drawBarChart(props) {\n    try {\n        // console.log(\"Start : drawBar\");\n        const canvasId = props.canvas;\n        const ctx = props.ctx_base;\n        const horizontalNr = props.horizontalNr;\n        const data = props.data;\n        const range = props.rangedata;\n        const curx = props.nextcurve;\n        const chartColor = props.chartColor;\n        const linecord = props.linecord;\n        const barChartCount = props.barChartCount;\n        const chartDataLength = props.chartDataLength;\n        const maxTextWidth = props.maxTextWidth;\n\n        if (maxTextWidth > canvasWidthSpareForDetails) {\n            canvasWidthSpareForDetails = maxTextWidth;\n        }\n\n        const canvas = document.getElementById(canvasId);\n        const hei = canvas.height - canvasHeightSpareForDetails;\n        const wid = canvas.width - canvasWidthSpareForDetails;\n\n        const spacingVertical = hei / data.datapoints.length;\n        const totalRange = range[1] - range[0];\n        // const verticalCoefficient = hei / totalRange;\n        const horizontalCoefficient = wid / totalRange;\n        const barHeight = spacingVertical / chartDataLength * .80;\n\n        const calcWayPoints = points => {\n            let wayPoints = [];\n            for (let i = 0; i < points.length; i++) {\n                const x1 = points[i].x;\n                const y1 = points[i].y;\n                // let totalHeight = hei;\n                let rectWidth = points[i].wid;\n                let currentWidth = 0;\n                let newWayPoint = [];\n                while (currentWidth <= rectWidth) {\n                    newWayPoint.push({ x: x1, y: y1, wid: currentWidth, hei: barHeight });\n                    let difference = rectWidth - currentWidth;\n                    currentWidth += difference < 15 && difference > 0 ? difference : 15;\n                }\n                wayPoints.push(newWayPoint);\n            }\n            return wayPoints;\n        };\n\n        const animate = (animateArr, t, cColor) => {\n            ctx.beginPath();\n            ctx.globalAlpha = 1;\n            ctx.fillStyle = cColor;\n            ctx.fillRect(animateArr[t].x, animateArr[t].y, animateArr[t].wid, animateArr[t].hei);\n            ctx.closePath();\n            t = t + 1;\n            if (t < animateArr.length) {\n                requestAnimationFrame(animate.bind(this, animateArr, t, cColor));\n            }\n        };\n\n        const localLineCord = [];\n        for (let i = 0; i < data.datapoints.length; i++) {\n            // var rectHeight = barHeight;\n            const barChartWidth = (data.datapoints[i].y - range[0]) * horizontalCoefficient;\n            // let barChartWidth = barChartCount * barWidth + (barChartCount - 1) * 5;\n            let fromLeft = canvasWidthSpareForDetails;\n            let fromTop = i * spacingVertical + spacingVertical / 2 + curx - barHeight / 2;\n            const newObj = {\n                x: fromLeft,\n                y: fromTop,\n                wid: barChartWidth,\n                hei: barHeight,\n                label: data.datapoints[i].label,\n                dataLabel: data.dataLabel,\n                dataval: data.datapoints[i].y,\n                dataColor: data.chartColor\n            };\n            linecord.push(newObj);\n            localLineCord.push(newObj);\n        }\n\n        let points = calcWayPoints(localLineCord);\n\n        for (let i = 0; i < points.length; i++) {\n            let t = 0;\n            animate(points[i], t, chartColor);\n        }\n\n        return { linecord, barHeight };\n        // console.log(\"End : drawBar\");\n    } catch (e) {\n        console.log(\"error occurred in drawBar : \", e);\n    }\n}\n\nmodule.exports = drawBarChart;\n\n//# sourceURL=webpack:///./src/common/drawChart/bar_chart_canvas.js?");

/***/ }),

/***/ "./src/invokeCharts/enums.js":
/*!***********************************!*\
  !*** ./src/invokeCharts/enums.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.xAxisSpacing = 104;\nexports.fontLineHeight = 16;\nexports.strokeStyle = \"rgba(0,0,0,1)\";\nexports.white = \"#fff\";\nexports.blackFillStyle = \"#000\";\nexports.canvasHeightSpareForDetails = 105;\nexports.canvasWidthSpareForDetails = 100;\nexports.font = \"26px  Source Sans Pro\";\n\nexports.barChart = \"bar-chart\";\nexports.columnChart = \"column-chart\";\nexports.lineChart = \"line-chart\";\nexports.stepLineChart = \"step-line-chart\";\nexports.smoothLineChart = \"smooth-line-chart\";\nexports.multiRandomChart = \"multi-random\";\nexports.pieChart = \"pie-chart\";\nexports.doughnutChart = \"doughnut-chart\";\nexports.meterChart = \"meter-chart\";\n\n//# sourceURL=webpack:///./src/invokeCharts/enums.js?");

/***/ })

/******/ });
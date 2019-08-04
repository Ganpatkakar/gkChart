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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/common/drawChart/step_chart_canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common/drawChart/step_chart_canvas.js":
/*!***************************************************!*\
  !*** ./src/common/drawChart/step_chart_canvas.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const gkChartConsts = __webpack_require__(/*! ../../invokeCharts/enums */ \"./src/invokeCharts/enums.js\");\n\nconst canvasHeightSpareForDetails = gkChartConsts.canvasHeightSpareForDetails;\nconst canvasWidthSpareForDetails = gkChartConsts.canvasWidthSpareForDetails;\n\nfunction DrawStepChart(canvasId, ctx, verticalNr, data, range, chartColor, linecord) {\n    try {\n        // console.log(\"Start : drawStepchart\");\n\n        const calcWayPoints = vertices => {\n            const wayPoints = [];\n            for (var i = 1; i < vertices.length; i++) {\n                var pt0 = vertices[i - 1];\n                var pt1 = vertices[i];\n                var dx = pt1.x - pt0.x;\n                var dy = pt1.y - pt0.y;\n                for (var j = 0; j < differencePoints; j++) {\n                    var x = pt0.x + dx * j / differencePoints;\n                    var y = pt0.y + dy * j / differencePoints;\n                    wayPoints.push({\n                        x: x,\n                        y: y\n                    });\n                }\n            }\n            return wayPoints;\n        };\n\n        const fillAreaCall = vertices => {\n            ctx.beginPath();\n            if (vertices.length) {\n                ctx.moveTo(vertices[0].x, hei);\n            }\n            for (let points = 0; points < vertices.length; points++) {\n                ctx.lineTo(vertices[points].x, vertices[points].y + 4);\n            }\n            if (vertices.length) {\n                ctx.lineTo(vertices[vertices.length - 1].x, hei);\n            }\n            ctx.closePath();\n            ctx.globalAlpha = 0.1;\n            ctx.fillStyle = chartColor;\n            ctx.fill();\n        };\n\n        const commonCodeCircle = () => {\n            ctx.beginPath();\n            ctx.fillStyle = chartColor;\n            ctx.arc(points[t].x, points[t].y, 8, 0, 2 * Math.PI);\n            ctx.fill();\n            ctx.stroke();\n            ctx.closePath();\n        };\n\n        const animate = () => {\n            ctx.lineWidth = 3;\n            ctx.beginPath();\n            ctx.globalAlpha = 1;\n            ctx.strokeStyle = chartColor;\n            if (t < points.length - 1) {\n                requestAnimationFrame(animate);\n            }\n            // draw a line segment from the last waypoint\n            // to the current waypoint\n            ctx.beginPath();\n            if (t === 0) {\n                ctx.moveTo(points[t].x, points[t].y);\n            } else {\n                ctx.moveTo(points[t - 1].x, points[t - 1].y);\n                ctx.lineTo(points[t].x, points[t].y);\n            }\n            ctx.stroke();\n            // increment \"t\" to get the next waypoint\n            if (t % (differencePoints * 2) === 0 || t === points.length - 1) {\n                commonCodeCircle();\n            }\n            if (data.fill) {\n                let p = {};\n                if (t) {\n                    p = points.slice(t - 1, t + 1);\n                }\n                fillAreaCall(p);\n            }\n            t += 1;\n        };\n\n        var canvas = document.getElementById(canvasId);\n        var hei = canvas.height - canvasHeightSpareForDetails;\n        var wid = canvas.width - +canvasWidthSpareForDetails;\n        var spacingVertical = hei / verticalNr;\n        var spacingHorizontal = wid / data.datapoints.length;\n\n        var totalRange = range[1] - range[0];\n        var verticalCoefficient = hei / totalRange;\n\n        ctx.beginPath();\n        var localLineCords = [];\n        for (let i = 0; i < data.datapoints.length; i++) {\n            var newobj = {\n                x: i * spacingHorizontal + spacingHorizontal / 2 + canvasWidthSpareForDetails,\n                y: hei - (data.datapoints[i].y - range[0]) * verticalCoefficient,\n                label: data.datapoints[i].label,\n                dataLabel: data.dataLabel,\n                dataval: data.datapoints[i].y,\n                dataColor: data.chartColor\n            };\n            linecord.push(newobj);\n            localLineCords.push(newobj);\n        }\n\n        ctx.beginPath();\n        ctx.globalAlpha = 1;\n        ctx.strokeStyle = chartColor;\n        let lPoints = [];\n        const lineCordsLength = localLineCords.length;\n        for (let i = 0; i < lineCordsLength; i++) {\n            if (i === 0) {\n                lPoints.push({ x: localLineCords[i].x, y: localLineCords[i].y });\n            } else {\n                lPoints.push({ x: localLineCords[i].x, y: localLineCords[i - 1].y });\n                lPoints.push({ x: localLineCords[i].x, y: localLineCords[i].y });\n            }\n        }\n\n        let t = 0;\n        let differencePoints = 15;\n        let points = calcWayPoints(lPoints);\n\n        points.push(localLineCords[localLineCords.length - 1]);\n\n        animate();\n\n        ctx.globalAlpha = 1;\n\n        return linecord;\n        // console.log(\"End : drawStepchart\");\n    } catch (e) {\n        console.log(\"error occured in drawGraphicLinear : \", e);\n    }\n}\n\nmodule.exports = DrawStepChart;\n\n//# sourceURL=webpack:///./src/common/drawChart/step_chart_canvas.js?");

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
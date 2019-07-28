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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/common/grid.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common/grid.js":
/*!****************************!*\
  !*** ./src/common/grid.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const gkChartConsts = __webpack_require__(/*! ../invokeCharts/enums */ \"./src/invokeCharts/enums.js\");\n\nconst xAxisSpacing = gkChartConsts.xAxisSpacing;\nconst fontLineHeight = gkChartConsts.fontLineHeight;\nconst strokeStyle = gkChartConsts.strokeStyle;\nconst blackFillStyle = gkChartConsts.blackFillStyle;\nconst canvasHeightSpareForDetails = gkChartConsts.canvasHeightSpareForDetails;\nconst canvasWidthSpareForDetails = gkChartConsts.canvasWidthSpareForDetails;\n\nconst drawGrid = (nr, verticanNr, ctx, data) => {\n    try {\n        // console.log(\"Start : drawGrid\");\n        const canvas = document.getElementById('canvas' + nr);\n        const hei = canvas.height - canvasHeightSpareForDetails;\n        //// console.log(\"canvas height to draw grid lines:\" + hei);\n        const wid = canvas.width - canvasWidthSpareForDetails;\n        //// console.log(\"canvas width to draw grid lines:\" + wid);\n        ctx.beginPath();\n        ctx.fillStyle = blackFillStyle;\n\n        const spacingVertical = hei / verticanNr;\n        //// console.log(\"canvas vertical spacings to draw grid lines:\" + spacingVertical);\n        const spacingHorizontal = wid / data[0].datapoints.length;\n        //// console.log(\"canvas horizontal spacings to draw grid lines:\" + spacingHorizontal);\n        /*// console.log(spacingVertical + 20);\n         // console.log(wid);*/\n        let barwidth = 0;\n        if (data.length > 1) {\n            barwidth = (spacingHorizontal - 30) / data.length;\n        } else {\n            barwidth = 30;\n        }\n        if (barwidth > 30) {\n            barwidth = 30;\n        }\n        /*Vertical grid*/\n        // Vartical first grid row\n        ctx.beginPath();\n        ctx.lineWidth = 2;\n        ctx.strokeStyle = strokeStyle;\n        ctx.moveTo(canvasWidthSpareForDetails, 0);\n        ctx.lineTo(canvasWidthSpareForDetails, hei + 10);\n        ctx.stroke();\n\n        // vartical other grid rows\n        for (let i = 0; i < data[0].datapoints.length; i++) {\n            ctx.beginPath();\n            ctx.moveTo(i * spacingHorizontal + spacingHorizontal / 2 + canvasWidthSpareForDetails, hei);\n            ctx.lineTo(i * spacingHorizontal + spacingHorizontal / 2 + canvasWidthSpareForDetails, hei + 10);\n            ctx.stroke();\n        }\n        ctx.beginPath();\n        ctx.moveTo(wid + canvasWidthSpareForDetails, hei);\n        ctx.lineTo(wid + canvasWidthSpareForDetails, hei + 10);\n        ctx.stroke();\n\n        /*Horizontal grid*/\n        for (let i = 0; i < verticanNr + 1; i++) {\n            ctx.beginPath();\n            ctx.strokeStyle = 'rgba(0,0,0,.2)';\n            ctx.lineWidth = .4;\n            if (i === parseInt(verticanNr)) {\n                ctx.lineWidth = 2;\n                ctx.strokeStyle = strokeStyle;\n            }\n            ctx.moveTo(canvasWidthSpareForDetails - 10, i * spacingVertical);\n            ctx.lineTo(wid + canvasWidthSpareForDetails, i * spacingVertical);\n            ctx.stroke();\n            ctx.strokeStyle = 'rgba(0,0,0,.2)';\n        }\n        // console.log(\"End : drawGrid\");\n        return barwidth;\n    } catch (e) {\n        console.log(\"error occurred in drawGrid : \", e);\n    }\n};\n\nconst drawGraphicLinearYcord = (canvasId, ctx, verticalNr, cdata) => {\n    try {\n        // console.log(\"Start : drawGraphicLinearYcord\");\n        //// console.log(cdata);\n        const canvas = document.getElementById(canvasId);\n        const hei = canvas.height - canvasHeightSpareForDetails;\n        const wid = canvas.width - canvasWidthSpareForDetails;\n        const spacingVertical = hei / verticalNr;\n        const spacingHorizontal = wid / cdata.data[0].datapoints.length;\n        //// console.log(spacingHorizontal);\n        ctx.beginPath();\n        ctx.fillStyle = blackFillStyle;\n        ctx.save();\n        ctx.translate(0, canvas.height / 2);\n        ctx.rotate(-Math.PI / 2);\n        ctx.textAlign = \"center\";\n        if (!cdata.yaxis.title) {\n            cdata.yaxis.title = \"Y-Axis data\";\n        }\n        ctx.fillText(cdata.yaxis.title, 0, 20);\n\n        ctx.restore();\n        /* xaxis Horizontal Documents*/\n        ctx.save();\n        let xangle;\n        for (let i = 0; i < cdata.data[0].datapoints.length; i++) {\n            if (ctx.measureText(cdata.data[0].datapoints[i].label).width > spacingHorizontal / 1.1) {\n                xangle = 'angular';\n                break;\n            } else if (ctx.measureText(cdata.data[0].datapoints[i].label).width < spacingHorizontal / 2) {\n                xangle = 'straight';\n            }\n        }\n        if (xangle === 'angular') {\n            const translateXWithoutSpacingHorizontal = xAxisSpacing + spacingHorizontal / 2 - fontLineHeight;\n            const translateYAxis = hei + 12;\n            for (let i = 0; i < cdata.data[0].datapoints.length; i++) {\n                const translatexWithSpacing = i * spacingHorizontal + translateXWithoutSpacingHorizontal;\n                ctx.translate(translatexWithSpacing, translateYAxis);\n                ctx.rotate(Math.PI / 2);\n                ctx.fillText(cdata.data[0].datapoints[i].label, 0, 0);\n                //// console.log(cdata.xaxis.categories[i], i*spacingHorizontal, hei-spacingVertical);\n                ctx.rotate(-Math.PI / 2);\n                ctx.translate(-translatexWithSpacing, -translateYAxis);\n            }\n        } else {\n            for (let i = 0; i < cdata.data[0].datapoints.length; i++) {\n                let textWidth = ctx.measureText(cdata.data[0].datapoints[i].label).width;\n                let fromLeft = i * spacingHorizontal + spacingHorizontal / 2 + canvasWidthSpareForDetails - textWidth / 2;\n                ctx.fillText(cdata.data[0].datapoints[i].label, fromLeft, hei + 35);\n            }\n        }\n        //ctx.restore();\n\n        /* yaxis Vertical Documents*/\n        ctx.save();\n        for (let i = 0; i < verticalNr + 1; i++) {\n            // const max = cdata.yaxis.max;\n            const min = cdata.yaxis.min;\n            const difference = cdata.yaxis.difference;\n            ctx.fillText(i * difference + min, 35, canvas.height - (i * spacingVertical + canvasHeightSpareForDetails));\n        }\n        //ctx.restore();\n        ctx.closePath();\n        // console.log(\"End : drawGraphicLinearYcord\");\n    } catch (e) {\n        console.log(\"error occurred in drawGraphicLinearYcord : \", e);\n    }\n};\n\nexports.drawGrid = drawGrid;\nexports.drawGraphicLinearYcord = drawGraphicLinearYcord;\n\n//# sourceURL=webpack:///./src/common/grid.js?");

/***/ }),

/***/ "./src/invokeCharts/enums.js":
/*!***********************************!*\
  !*** ./src/invokeCharts/enums.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.xAxisSpacing = 104;\nexports.fontLineHeight = 16;\nexports.strokeStyle = \"rgba(0,0,0,1)\";\nexports.white = \"#fff\";\nexports.blackFillStyle = \"#000\";\nexports.canvasHeightSpareForDetails = 150;\nexports.canvasWidthSpareForDetails = 100;\nexports.font = \"18px Arial\";\n\nexports.barChart = \"bar-chart\";\nexports.columnChart = \"column-chart\";\nexports.lineChart = \"line-chart\";\nexports.stepLineChart = \"step-line-chart\";\nexports.smoothLineChart = \"smooth-line-chart\";\nexports.multiRandomChart = \"multi-random\";\nexports.pieChart = \"pie-chart\";\nexports.doughnutChart = \"doughnut-chart\";\nexports.meterChart = \"meter-chart\";\n\n//# sourceURL=webpack:///./src/invokeCharts/enums.js?");

/***/ })

/******/ });
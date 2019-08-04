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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/common/draw_chart.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common/draw_chart.js":
/*!**********************************!*\
  !*** ./src/common/draw_chart.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const gkChartEnums = __webpack_require__(/*! ../invokeCharts/enums */ \"./src/invokeCharts/enums.js\");\nconst font = gkChartEnums.font;\n\nclass DrawChart {\n\n    drawMeter(canvasId, ctx, verticalNr, data, range, chartColor, ChartDataToShow) {\n        try {\n            // console.log(\"Start : drawMeter\");\n            const linecord = [];\n            const canvas = document.getElementById(canvasId);\n            ctx.clearRect(0, 0, canvas.width, canvas.height);\n            var linewidth = 50;\n            ctx.lineWidth = 4;\n            var lastend = 3.141592653589793;\n            var myTotal = 0; // Automatically calculated so don't touch\n            var radius = canvas.height / 2 - linewidth;\n            for (var e = 0; e < data.datapoints.length; e++) {\n                myTotal += data.datapoints[e].y;\n            }\n            for (var i = 0; i < data.datapoints.length; i++) {\n                ctx.strokeStyle = \"#fff\";\n                ctx.fillStyle = data.datapoints[i].color;\n                ctx.beginPath();\n                ctx.moveTo(canvas.width / 2, canvas.height / 2);\n                ctx.arc(canvas.width / 2, canvas.height / 2, radius, lastend, lastend + Math.PI * (data.datapoints[i].y / myTotal));\n                //// console.log(canvas.width / 2, canvas.height / 2, canvas.height / 2, lastend, lastend + (Math.PI * 2 * (data.datapoints[i].y / myTotal)));\n                ctx.lineTo(canvas.width / 2, canvas.height / 2);\n                ctx.fill();\n                ctx.stroke();\n                var newobj = {\n                    x: canvas.width / 2,\n                    startangle: lastend,\n                    lastangle: lastend + Math.PI * (data.datapoints[i].y / myTotal),\n                    label: data.datapoints[i].label\n                };\n                linecord.push(newobj);\n                lastend += Math.PI * (data.datapoints[i].y / myTotal);\n            }\n            //// console.log(linecord);\n            ctx.beginPath();\n            ctx.fillStyle = \"#fff\";\n            ctx.arc(canvas.width / 2, canvas.height / 2, radius * 0.7, 0, 2 * Math.PI);\n            ctx.fill();\n            ctx.closePath();\n            ctx.beginPath();\n            ctx.fillStyle = \"#000\";\n            ctx.arc(canvas.width / 2, canvas.height / 2, radius * 0.1, 0, 2 * Math.PI);\n            ctx.fill();\n            ctx.closePath();\n            ctx.beginPath();\n            let rotateangel = Math.PI * (ChartDataToShow / 100) + 3.141592653589793;\n            //// console.log(rotateangel);\n            // var headlen = 10;\n            ctx.lineWidth = 6;\n            ctx.lineCap = \"round\";\n            let tox = canvas.width / 2 + radius * .8 * Math.cos(rotateangel);\n            let toy = canvas.height / 2 + radius * .8 * Math.sin(rotateangel);\n            // var fromx = canvas.width / 2;\n            // var fromy = canvas.height / 2;\n            ctx.moveTo(canvas.width / 2, canvas.height / 2);\n            ctx.lineTo(tox, toy);\n            ctx.strokeStyle = \"#000\";\n            ctx.stroke();\n            ctx.beginPath();\n            ctx.fillStyle = \"#fff\";\n            ctx.arc(canvas.width / 2, canvas.height / 2, radius * 0.07, 0, 2 * Math.PI);\n            ctx.fill();\n            ctx.closePath();\n\n            /* Draw piechart number values */\n            let angle = 3.141592653589793;\n            // let x = Math.floor(canvas.width / 2);\n            // let y = Math.floor(canvas.height / 2);\n            ctx.fillStyle = \"#000\";\n            ctx.font = font;\n            ctx.save();\n\n            /*Text in data format loop*/\n            let anglenew;\n            for (i = 0; i < data.datapoints.length; i++) {\n                anglenew = Math.PI * 2 * (data.datapoints[i].y / myTotal) / 2;\n                let anglemiddle = anglenew / 6;\n                /*ctx.translate(x, y);\n                 ctx.rotate(angle + anglemiddle);\n                 ctx.translate(-x, -y);\n                 ctx.fillText(data.datapoints[i].label.toString(), x + radius, y);\n                 angle = (Math.PI * (data.datapoints[i].y / myTotal)) - anglemiddle;*/\n                //// console.log(angle);\n\n                let fx = canvas.width / 2 + radius * 1.01 * Math.cos(angle + anglemiddle);\n                let fy = canvas.height / 2 + radius * 1.01 * Math.sin(angle + anglemiddle);\n                ctx.translate(fx, fy);\n                ctx.rotate(angle + 1.8);\n                ctx.fillText(data.datapoints[i].label.toString(), 0, 0);\n                ctx.rotate(-(angle + 1.8));\n                ctx.translate(-fx, -fy);\n                angle += Math.PI * (data.datapoints[i].y / myTotal);\n            }\n            ctx.restore();\n            // console.log(\"End : drawMeter\");\n            return linecord;\n        } catch (e) {\n            console.log(\"error occured in drawMeter : \", e);\n        }\n    }\n\n}\n\nmodule.exports = DrawChart;\n\n//# sourceURL=webpack:///./src/common/draw_chart.js?");

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
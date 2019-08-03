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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/common/chart_surface.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common/chart_surface.js":
/*!*************************************!*\
  !*** ./src/common/chart_surface.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const gkChartEnums = __webpack_require__(/*! ../invokeCharts/enums */ \"./src/invokeCharts/enums.js\");\nconst font = gkChartEnums.font;\n\nclass ChartSurface {\n\n    ratio(canvasContainer) {\n        // let ctx = canvasContainer.getContext('2d');\n        // let dpr = window.devicePixelRatio || 1;\n        // let bsr = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;\n        // return dpr / bsr;\n        return 2;\n    }\n\n    prepSurface(nr, width, height, containerId) {\n        try {\n            // console.log(\"Start : prepSurface\");\n            const canvas = document.createElement(\"CANVAS\");\n            canvas.id = 'canvas' + nr;\n            canvas.setAttribute('class', 'canvas');\n            canvas.setAttribute(\"style\", \"position:absolute\");\n            const container = document.getElementById(containerId);\n            container.appendChild(canvas);\n\n            const canvasDom = document.getElementById('canvas' + nr);\n            canvasDom.width = width * this.ratio(canvasDom);\n            canvasDom.height = height * this.ratio(canvasDom);\n            canvasDom.style.width = width + \"px\";\n            canvasDom.style.height = height + \"px\";\n\n            // document.getElementById('container').append('<canvas id=\"canvas' + nr + '\" class=\"canvas\"' +\n            //     ' style=\"position:absolute;\" width=\"' + width + '\" height=\"' + height + '\"></canvas> ');\n            // console.log(\"End : prepSurface\");\n        } catch (e) {\n            console.log(\"error occurred in prepareSurface : \", e);\n        }\n    }\n\n    prepUI(nr) {\n        try {\n            // console.log(\"Start : prepUI\");\n            //// console.log(nr);\n            const canvas = document.getElementById('canvas' + nr);\n            const ctx = canvas.getContext('2d');\n            ctx.font = font;\n            ctx.lineWidth = 1;\n            // console.log(\"End : prepUI\");\n            return ctx;\n        } catch (e) {\n            console.log(\"error occurred in prepUI : \", e);\n        }\n    }\n\n    preparePlot(nr, sizex, sizey, container) {\n        try {\n            // console.log(\"Start : preparePlot\");\n            this.prepSurface(nr, sizex, sizey, container);\n            const canvasContext = this.prepUI(nr);\n            // console.log(\"End : preparePlot\");\n            return canvasContext;\n        } catch (e) {\n            console.log(\"error occurred in preparePlot : \", e);\n        }\n    }\n\n    prepSurfaceupper(nr, width, height, containerId) {\n        try {\n            // console.log(\"Start : prepSurfaceupper\");\n            const container = document.getElementById(containerId);\n            let innerCotent = `<canvas id=\"canvasupper${nr}\" class=\"canvas\" style=\"position:absolute;\"\n                    width=\"${width}\" height=\"${height}\"> </canvas>\n                <div class=\"canvasjs-chart-tooltip\" style=\"position:absolute;height:auto;\n                    box-shadow: rgba(0, 0, 0, 0.0980392) 1px 1px 2px 2px; z-index: 1000; display: none; \n                    border-radius: 3px; transition: left 0.2s ease-out, bottom 0.2s ease-out; pointer-events: none;\n                    background-color: rgba(0,0, 0, .8); border: 1px solid rgba(0,0,0,.5); padding: 5px;color: #fff\">\n                        <span style=\"color:#7F6084;\"> </span>\n                </div>`;\n            container.insertAdjacentHTML('beforeend', innerCotent);\n\n            let canvasDom = document.getElementById('canvasupper' + nr);\n            canvasDom.width = width * this.ratio(canvasDom);\n            canvasDom.height = height * this.ratio(canvasDom);\n            canvasDom.style.width = width + \"px\";\n            canvasDom.style.height = height + \"px\";\n\n            // console.log(\"End : prepSurfaceupper\");\n        } catch (e) {\n            console.log(\"error occurred in prepSurfaceupper : \", e);\n        }\n    }\n\n    prepUIUpper(nr) {\n        try {\n            // console.log(\"Start : prepUIUpper\");\n            const canvas = document.getElementById('canvasupper' + nr);\n            const ctx = canvas.getContext('2d');\n            //ctx.font = '18px Arial';\n            ctx.lineWidth = 1;\n            // console.log(\"End : prepUIUpper\");\n            return ctx;\n        } catch (e) {\n            console.log(\"error occurred in prepUIUpper : \", e);\n        }\n    }\n\n    preparePlotUpper(nr, sizex, sizey, container) {\n        try {\n            // console.log(\"Start : preparePlotUpper\");\n            this.prepSurfaceupper(nr, sizex, sizey, container);\n            const canvasContext = this.prepUIUpper(nr);\n            // console.log(\"End : preparePlotUpper\");\n            return canvasContext;\n        } catch (e) {\n            console.log(\"error occurred in preparePlotUpper : \", e);\n        }\n    }\n}\n\nmodule.exports = ChartSurface;\n\n//# sourceURL=webpack:///./src/common/chart_surface.js?");

/***/ }),

/***/ "./src/invokeCharts/enums.js":
/*!***********************************!*\
  !*** ./src/invokeCharts/enums.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.xAxisSpacing = 104;\nexports.fontLineHeight = 16;\nexports.strokeStyle = \"rgba(0,0,0,1)\";\nexports.white = \"#fff\";\nexports.blackFillStyle = \"#000\";\nexports.canvasHeightSpareForDetails = 105;\nexports.canvasWidthSpareForDetails = 100;\nexports.font = \"26px  Source Sans Pro, Helvetica Neue, Arial, sans-serif\";\n\nexports.barChart = \"bar-chart\";\nexports.columnChart = \"column-chart\";\nexports.lineChart = \"line-chart\";\nexports.stepLineChart = \"step-line-chart\";\nexports.smoothLineChart = \"smooth-line-chart\";\nexports.multiRandomChart = \"multi-random\";\nexports.pieChart = \"pie-chart\";\nexports.doughnutChart = \"doughnut-chart\";\nexports.meterChart = \"meter-chart\";\n\n//# sourceURL=webpack:///./src/invokeCharts/enums.js?");

/***/ })

/******/ });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/common/drawChart/pie_chart_canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common/drawChart/pie_chart_canvas.js":
/*!**************************************************!*\
  !*** ./src/common/drawChart/pie_chart_canvas.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function drawPieChart(can, ctx, data, linecord) {\n    try {\n        // console.log(\"Start : drawPie\");\n        const canvas = document.getElementById(can);\n        ctx.clearRect(0, 0, canvas.width, canvas.height);\n        let lastend = 0;\n        let myTotal = 0; // Automatically calculated so don't touch\n        let radius = canvas.height / 2;\n        for (let e = 0; e < data.datapoints.length; e++) {\n            myTotal += data.datapoints[e].y;\n        }\n        for (let i = 0; i < data.datapoints.length; i++) {\n            ctx.fillStyle = data.datapoints[i].color;\n            ctx.beginPath();\n            ctx.moveTo(canvas.width / 2, canvas.height / 2);\n            if (data.datapoints[i].y === 0) {\n                ctx.arc(canvas.width / 2, canvas.height / 2, canvas.height / 2, lastend, lastend + Math.PI * 2 * (data.datapoints[i].y / myTotal), false);\n                ctx.lineTo(canvas.width / 2, canvas.height / 2);\n                ctx.strokeStyle = '1';\n                ctx.strokeStyle = '#fff';\n                ctx.stroke();\n            }\n            ctx.arc(canvas.width / 2, canvas.height / 2, canvas.height / 2, lastend, lastend + Math.PI * 2 * (data.datapoints[i].y / myTotal), false);\n            ctx.lineTo(canvas.width / 2, canvas.height / 2);\n            var newobj = {\n                wid: canvas.width,\n                hei: canvas.height,\n                startangle: lastend,\n                lastangle: lastend + Math.PI * 2 * (data.datapoints[i].y / myTotal),\n                label: data.datapoints[i].label,\n                y: data.datapoints[i].y\n            };\n            linecord.push(newobj);\n            lastend += Math.PI * 2 * (data.datapoints[i].y / myTotal);\n            ctx.fill();\n        }\n        /* Draw pieChart number values and numbers*/\n        let angle = 0;\n        let x = Math.floor(canvas.width / 2);\n        let y = Math.floor(canvas.height / 2);\n        ctx.fillStyle = \"#fff\";\n        ctx.font = radius * 0.10 + \"px arial\";\n        var anglenew;\n        for (let i = 0; i < data.datapoints.length; i++) {\n            if (data.datapoints[i].y !== 0) {\n                anglenew = Math.PI * 2 * (data.datapoints[i].y / myTotal);\n                let angleMiddle = anglenew / 3;\n                let fx = canvas.width / 2 + radius * .7 * Math.cos(angle + angleMiddle);\n                let fy = radius + radius * .7 * Math.sin(angle + angleMiddle);\n                ctx.translate(fx, fy);\n                ctx.fillText(data.datapoints[i].y.toString(), 0, 0 /*x + radius / 1.3, y*/);\n                ctx.translate(-fx, -fy);\n                angle += Math.PI * 2 * (data.datapoints[i].y / myTotal);\n            }\n        }\n        return linecord;\n        // console.log(\"End : drawPie\");\n    } catch (e) {\n        console.log(\"error occurred in drawPie : \", e);\n    }\n}\n\nmodule.exports = drawPieChart;\n\n//# sourceURL=webpack:///./src/common/drawChart/pie_chart_canvas.js?");

/***/ })

/******/ });
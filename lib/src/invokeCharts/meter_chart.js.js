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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/invokeCharts/meter_chart.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common/canvas_to_image.js":
/*!***************************************!*\
  !*** ./src/common/canvas_to_image.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * covert canvas to image\n * and save the image file\n */\n\nvar Canvas2Image = function () {\n\n    // check if support sth.\n    var $support = function () {\n        var canvas = document.createElement('canvas'),\n            ctx = canvas.getContext('2d');\n\n        return {\n            canvas: !!ctx,\n            imageData: !!ctx.getImageData,\n            dataURL: !!canvas.toDataURL,\n            btoa: !!window.btoa\n        };\n    }();\n\n    var downloadMime = 'image/octet-stream';\n\n    function scaleCanvas(canvas, width, height) {\n        var w = canvas.width,\n            h = canvas.height;\n        if (width == undefined) {\n            width = w;\n        }\n        if (height == undefined) {\n            height = h;\n        }\n\n        var retCanvas = document.createElement('canvas');\n        var retCtx = retCanvas.getContext('2d');\n        retCanvas.width = width;\n        retCanvas.height = height;\n        retCtx.drawImage(canvas, 0, 0, w, h, 0, 0, width, height);\n        return retCanvas;\n    }\n\n    function getDataURL(canvas, type, width, height) {\n        canvas = scaleCanvas(canvas, width, height);\n        return canvas.toDataURL(type);\n    }\n\n    function saveFile(strData) {\n        document.location.href = strData;\n    }\n\n    function genImage(strData) {\n        var img = document.createElement('img');\n        img.src = strData;\n        return img;\n    }\n\n    function fixType(type) {\n        type = type.toLowerCase().replace(/jpg/i, 'jpeg');\n        var r = type.match(/png|jpeg|bmp|gif/)[0];\n        return 'image/' + r;\n    }\n\n    function encodeData(data) {\n        if (!window.btoa) {\n            throw 'btoa undefined';\n        }\n        var str = '';\n        if (typeof data == 'string') {\n            str = data;\n        } else {\n            for (var i = 0; i < data.length; i++) {\n                str += String.fromCharCode(data[i]);\n            }\n        }\n\n        return btoa(str);\n    }\n\n    function getImageData(canvas) {\n        var w = canvas.width,\n            h = canvas.height;\n        return canvas.getContext('2d').getImageData(0, 0, w, h);\n    }\n\n    function makeURI(strData, type) {\n        return 'data:' + type + ';base64,' + strData;\n    }\n\n    /**\n     * create bitmap image\n     */\n    var genBitmapImage = function (oData) {\n\n        var biWidth = oData.width;\n        var biHeight = oData.height;\n        var biSizeImage = biWidth * biHeight * 3;\n        var bfSize = biSizeImage + 54; // total header size = 54 bytes\n\n        //\n        //  typedef struct tagBITMAPFILEHEADER {\n        //  \tWORD bfType;\n        //  \tDWORD bfSize;\n        //  \tWORD bfReserved1;\n        //  \tWORD bfReserved2;\n        //  \tDWORD bfOffBits;\n        //  } BITMAPFILEHEADER;\n        //\n        var BITMAPFILEHEADER = [\n        // WORD bfType -- The file type signature; must be \"BM\"\n        0x42, 0x4D,\n        // DWORD bfSize -- The size, in bytes, of the bitmap file\n        bfSize & 0xff, bfSize >> 8 & 0xff, bfSize >> 16 & 0xff, bfSize >> 24 & 0xff,\n        // WORD bfReserved1 -- Reserved; must be zero\n        0, 0,\n        // WORD bfReserved2 -- Reserved; must be zero\n        0, 0,\n        // DWORD bfOffBits -- The offset, in bytes, from the beginning of the BITMAPFILEHEADER structure to the bitmap bits.\n        54, 0, 0, 0];\n\n        //\n        //  typedef struct tagBITMAPINFOHEADER {\n        //  \tDWORD biSize;\n        //  \tLONG  biWidth;\n        //  \tLONG  biHeight;\n        //  \tWORD  biPlanes;\n        //  \tWORD  biBitCount;\n        //  \tDWORD biCompression;\n        //  \tDWORD biSizeImage;\n        //  \tLONG  biXPelsPerMeter;\n        //  \tLONG  biYPelsPerMeter;\n        //  \tDWORD biClrUsed;\n        //  \tDWORD biClrImportant;\n        //  } BITMAPINFOHEADER, *PBITMAPINFOHEADER;\n        //\n        var BITMAPINFOHEADER = [\n        // DWORD biSize -- The number of bytes required by the structure\n        40, 0, 0, 0,\n        // LONG biWidth -- The width of the bitmap, in pixels\n        biWidth & 0xff, biWidth >> 8 & 0xff, biWidth >> 16 & 0xff, biWidth >> 24 & 0xff,\n        // LONG biHeight -- The height of the bitmap, in pixels\n        biHeight & 0xff, biHeight >> 8 & 0xff, biHeight >> 16 & 0xff, biHeight >> 24 & 0xff,\n        // WORD biPlanes -- The number of planes for the target device. This value must be set to 1\n        1, 0,\n        // WORD biBitCount -- The number of bits-per-pixel, 24 bits-per-pixel -- the bitmap\n        // has a maximum of 2^24 colors (16777216, Truecolor)\n        24, 0,\n        // DWORD biCompression -- The type of compression, BI_RGB (code 0) -- uncompressed\n        0, 0, 0, 0,\n        // DWORD biSizeImage -- The size, in bytes, of the image. This may be set to zero for BI_RGB bitmaps\n        biSizeImage & 0xff, biSizeImage >> 8 & 0xff, biSizeImage >> 16 & 0xff, biSizeImage >> 24 & 0xff,\n        // LONG biXPelsPerMeter, unused\n        0, 0, 0, 0,\n        // LONG biYPelsPerMeter, unused\n        0, 0, 0, 0,\n        // DWORD biClrUsed, the number of color indexes of palette, unused\n        0, 0, 0, 0,\n        // DWORD biClrImportant, unused\n        0, 0, 0, 0];\n\n        var iPadding = (4 - biWidth * 3 % 4) % 4;\n\n        var aImgData = oData.data;\n\n        var strPixelData = '';\n        var biWidth4 = biWidth << 2;\n        var y = biHeight;\n        var fromCharCode = String.fromCharCode;\n\n        do {\n            var iOffsetY = biWidth4 * (y - 1);\n            var strPixelRow = '';\n            for (var x = 0; x < biWidth; x++) {\n                var iOffsetX = x << 2;\n                strPixelRow += fromCharCode(aImgData[iOffsetY + iOffsetX + 2]) + fromCharCode(aImgData[iOffsetY + iOffsetX + 1]) + fromCharCode(aImgData[iOffsetY + iOffsetX]);\n            }\n\n            for (var c = 0; c < iPadding; c++) {\n                strPixelRow += String.fromCharCode(0);\n            }\n\n            strPixelData += strPixelRow;\n        } while (--y);\n\n        var strEncoded = encodeData(BITMAPFILEHEADER.concat(BITMAPINFOHEADER)) + encodeData(strPixelData);\n\n        return strEncoded;\n    };\n\n    /**\n     * saveAsImage\n     * @param canvasElement\n     * @param {String} image type\n     * @param {Number} [optional] png width\n     * @param {Number} [optional] png height\n     */\n    var saveAsImage = function (canvas, width, height, type) {\n        if ($support.canvas && $support.dataURL) {\n            if (typeof canvas == \"string\") {\n                canvas = document.getElementById(canvas);\n            }\n            if (type == undefined) {\n                type = 'png';\n            }\n            type = fixType(type);\n            if (/bmp/.test(type)) {\n                var data = getImageData(scaleCanvas(canvas, width, height));\n                var strData = genBitmapImage(data);\n                saveFile(makeURI(strData, downloadMime));\n            } else {\n                var strData = getDataURL(canvas, type, width, height);\n                saveFile(strData.replace(type, downloadMime));\n            }\n        }\n    };\n\n    var convertToImage = function (canvas, width, height, type) {\n        if ($support.canvas && $support.dataURL) {\n            if (typeof canvas == \"string\") {\n                canvas = document.getElementById(canvas);\n            }\n            if (type == undefined) {\n                type = 'png';\n            }\n            type = fixType(type);\n\n            if (/bmp/.test(type)) {\n                var data = getImageData(scaleCanvas(canvas, width, height));\n                var strData = genBitmapImage(data);\n                return genImage(makeURI(strData, 'image/bmp'));\n            } else {\n                var strData = getDataURL(canvas, type, width, height);\n                return genImage(strData);\n            }\n        }\n    };\n\n    return {\n        saveAsImage: saveAsImage,\n        saveAsPNG: function (canvas, width, height) {\n            return saveAsImage(canvas, width, height, 'png');\n        },\n        saveAsJPEG: function (canvas, width, height) {\n            return saveAsImage(canvas, width, height, 'jpeg');\n        }\n        // saveAsGIF: function (canvas, width, height) {\n        //   return saveAsImage(canvas, width, height, 'gif');\n        // },\n        // saveAsBMP: function (canvas, width, height) {\n        //   return saveAsImage(canvas, width, height, 'bmp');\n        // },\n\n        // convertToImage: convertToImage,\n        // convertToPNG: function (canvas, width, height) {\n        //   return convertToImage(canvas, width, height, 'png');\n        // },\n        // convertToJPEG: function (canvas, width, height) {\n        //   return convertToImage(canvas, width, height, 'jpeg');\n        // },\n        // convertToGIF: function (canvas, width, height) {\n        //   return convertToImage(canvas, width, height, 'gif');\n        // },\n        // convertToBMP: function (canvas, width, height) {\n        //   return convertToImage(canvas, width, height, 'bmp');\n        // }\n    };\n};\n\nmodule.exports = Canvas2Image;\n\n//# sourceURL=webpack:///./src/common/canvas_to_image.js?");

/***/ }),

/***/ "./src/common/chart_surface.js":
/*!*************************************!*\
  !*** ./src/common/chart_surface.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const gkChartEnums = __webpack_require__(/*! ../invokeCharts/enums */ \"./src/invokeCharts/enums.js\");\nconst font = gkChartEnums.font;\nconst toolTipBgColor = gkChartEnums.toolTipBgColor;\n\nclass ChartSurface {\n\n    ratio(canvasContainer) {\n        // let ctx = canvasContainer.getContext('2d');\n        // let dpr = window.devicePixelRatio || 1;\n        // let bsr = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;\n        // return dpr / bsr;\n        return 2;\n    }\n\n    prepSurface(nr, width, height, containerId) {\n        try {\n            // console.log(\"Start : prepSurface\");\n            const canvas = document.createElement(\"CANVAS\");\n            canvas.id = 'canvas' + nr;\n            canvas.setAttribute('class', 'canvas');\n            canvas.setAttribute(\"style\", \"position:absolute\");\n            const container = document.getElementById(containerId);\n            container.appendChild(canvas);\n\n            const canvasDom = document.getElementById('canvas' + nr);\n            canvasDom.width = width * this.ratio(canvasDom);\n            canvasDom.height = height * this.ratio(canvasDom);\n            canvasDom.style.width = width + \"px\";\n            canvasDom.style.height = height + \"px\";\n\n            // document.getElementById('container').append('<canvas id=\"canvas' + nr + '\" class=\"canvas\"' +\n            //     ' style=\"position:absolute;\" width=\"' + width + '\" height=\"' + height + '\"></canvas> ');\n            // console.log(\"End : prepSurface\");\n        } catch (e) {\n            console.log(\"error occurred in prepareSurface : \", e);\n        }\n    }\n\n    prepUI(nr) {\n        try {\n            // console.log(\"Start : prepUI\");\n            //// console.log(nr);\n            const canvas = document.getElementById('canvas' + nr);\n            const ctx = canvas.getContext('2d');\n            ctx.font = font;\n            ctx.lineWidth = 1;\n            // console.log(\"End : prepUI\");\n            return ctx;\n        } catch (e) {\n            console.log(\"error occurred in prepUI : \", e);\n        }\n    }\n\n    preparePlot(nr, sizex, sizey, container) {\n        try {\n            // console.log(\"Start : preparePlot\");\n            this.prepSurface(nr, sizex, sizey, container);\n            const canvasContext = this.prepUI(nr);\n            // console.log(\"End : preparePlot\");\n            return canvasContext;\n        } catch (e) {\n            console.log(\"error occurred in preparePlot : \", e);\n        }\n    }\n\n    prepSurfaceupper(nr, width, height, containerId) {\n        try {\n            // console.log(\"Start : prepSurfaceupper\");\n            const container = document.getElementById(containerId);\n            let innerCotent = `<canvas id=\"canvasupper${nr}\" class=\"canvas\" style=\"position:absolute;\"\n                    width=\"${width}\" height=\"${height}\"> </canvas>\n                <div class=\"canvasjs-chart-tooltip\" style=\"position:absolute;height:auto;\n                    box-shadow: rgba(0, 0, 0, 0.0980392) 1px 1px 2px 2px; z-index: 1000; display: none; \n                    border-radius: 3px; transition: left 0.2s ease-out, bottom 0.2s ease-out; pointer-events: none;\n                    background-color: ${toolTipBgColor}; border: 1px solid rgba(0,0,0,.5); padding: 5px;color: #fff\">\n                        <span style=\"color:#7F6084;\"> </span>\n                </div>`;\n            container.insertAdjacentHTML('beforeend', innerCotent);\n\n            let canvasDom = document.getElementById('canvasupper' + nr);\n            canvasDom.width = width * this.ratio(canvasDom);\n            canvasDom.height = height * this.ratio(canvasDom);\n            canvasDom.style.width = width + \"px\";\n            canvasDom.style.height = height + \"px\";\n\n            // console.log(\"End : prepSurfaceupper\");\n        } catch (e) {\n            console.log(\"error occurred in prepSurfaceupper : \", e);\n        }\n    }\n\n    prepUIUpper(nr) {\n        try {\n            // console.log(\"Start : prepUIUpper\");\n            const canvas = document.getElementById('canvasupper' + nr);\n            const ctx = canvas.getContext('2d');\n            //ctx.font = '18px Arial';\n            ctx.lineWidth = 1;\n            // console.log(\"End : prepUIUpper\");\n            return ctx;\n        } catch (e) {\n            console.log(\"error occurred in prepUIUpper : \", e);\n        }\n    }\n\n    preparePlotUpper(nr, sizex, sizey, container) {\n        try {\n            // console.log(\"Start : preparePlotUpper\");\n            this.prepSurfaceupper(nr, sizex, sizey, container);\n            const canvasContext = this.prepUIUpper(nr);\n            // console.log(\"End : preparePlotUpper\");\n            return canvasContext;\n        } catch (e) {\n            console.log(\"error occurred in preparePlotUpper : \", e);\n        }\n    }\n}\n\nmodule.exports = ChartSurface;\n\n//# sourceURL=webpack:///./src/common/chart_surface.js?");

/***/ }),

/***/ "./src/common/css_style.js":
/*!*********************************!*\
  !*** ./src/common/css_style.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function cssStyle(el, styles) {\n    for (var property in styles) {\n        el.style[property] = styles[property];\n    }\n}\n\nmodule.exports = cssStyle;\n\n//# sourceURL=webpack:///./src/common/css_style.js?");

/***/ }),

/***/ "./src/common/drawChart/meter_chart_canvas.js":
/*!****************************************************!*\
  !*** ./src/common/drawChart/meter_chart_canvas.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const gkChartConsts = __webpack_require__(/*! ../../invokeCharts/enums */ \"./src/invokeCharts/enums.js\");\n\nconst xAxisSpacing = gkChartConsts.xAxisSpacing;\nconst fontLineHeight = gkChartConsts.fontLineHeight;\nconst blackFillStyle = gkChartConsts.blackFillStyle;\nconst font = gkChartConsts.font;\nconst white = gkChartConsts.white;\n\nfunction drawMeterChart(can, ctx, verticalNr, data, range, chartColor, ChartDataToShow) {\n    try {\n        // console.log(\"Start : drawMeter\");\n        let linecord = [];\n        const canvas = document.getElementById(can);\n        ctx.clearRect(0, 0, canvas.width, canvas.height);\n        let linewidth = 50;\n        ctx.lineWidth = 4;\n        let lastend = 3.141592653589793;\n        let myTotal = 0; // Automatically calculated so don't touch\n        let radius = canvas.height / 2 - linewidth;\n        for (let e = 0; e < data.datapoints.length; e++) {\n            myTotal += data.datapoints[e].y;\n        }\n        for (let i = 0; i < data.datapoints.length; i++) {\n            ctx.strokeStyle = white;\n            ctx.fillStyle = data.datapoints[i].color;\n            ctx.beginPath();\n            ctx.moveTo(canvas.width / 2, canvas.height / 2);\n            ctx.arc(canvas.width / 2, canvas.height / 2, radius, lastend, lastend + Math.PI * (data.datapoints[i].y / myTotal));\n            //// console.log(canvas.width / 2, canvas.height / 2, canvas.height / 2, lastend, lastend + (Math.PI * 2 * (data.datapoints[i].y / myTotal)));\n            ctx.lineTo(canvas.width / 2, canvas.height / 2);\n            ctx.fill();\n            ctx.stroke();\n            var newobj = {\n                x: canvas.width / 2,\n                startangle: lastend,\n                lastangle: lastend + Math.PI * (data.datapoints[i].y / myTotal),\n                label: data.datapoints[i].label\n            };\n            linecord.push(newobj);\n            lastend += Math.PI * (data.datapoints[i].y / myTotal);\n        }\n        ctx.beginPath();\n        ctx.fillStyle = white;\n        ctx.arc(canvas.width / 2, canvas.height / 2, radius * 0.7, 0, 2 * Math.PI);\n        ctx.fill();\n        ctx.closePath();\n        ctx.beginPath();\n        ctx.fillStyle = blackFillStyle;\n        ctx.arc(canvas.width / 2, canvas.height / 2, radius * 0.1, 0, 2 * Math.PI);\n        ctx.fill();\n        ctx.closePath();\n        ctx.beginPath();\n        var rotateangel = Math.PI * (ChartDataToShow / 100) + 3.141592653589793;\n        var headlen = 10;\n        ctx.lineWidth = 6;\n        ctx.lineCap = \"round\";\n        var tox = canvas.width / 2 + radius * .8 * Math.cos(rotateangel);\n        var toy = canvas.height / 2 + radius * .8 * Math.sin(rotateangel);\n        var fromx = canvas.width / 2;\n        var fromy = canvas.height / 2;\n        ctx.moveTo(canvas.width / 2, canvas.height / 2);\n        ctx.lineTo(tox, toy);\n        ctx.strokeStyle = blackFillStyle;\n        ctx.stroke();\n        ctx.beginPath();\n        ctx.fillStyle = white;\n        ctx.arc(canvas.width / 2, canvas.height / 2, radius * 0.07, 0, 2 * Math.PI);\n        ctx.fill();\n        ctx.closePath();\n\n        /* Draw piechart number values */\n        let angle = 3.141592653589793;\n        let x = Math.floor(canvas.width / 2);\n        let y = Math.floor(canvas.height / 2);\n        ctx.fillStyle = blackFillStyle;\n        ctx.font = font;\n        ctx.save();\n\n        /*Text in data format loop*/\n        var anglenew;\n        for (let i = 0; i < data.datapoints.length; i++) {\n            anglenew = Math.PI * 2 * (data.datapoints[i].y / myTotal) / 2;\n            let angleMiddle = anglenew / 6;\n            let fx = canvas.width / 2 + radius * 1.01 * Math.cos(angle + angleMiddle);\n            let fy = canvas.height / 2 + radius * 1.01 * Math.sin(angle + angleMiddle);\n            ctx.translate(fx, fy);\n            ctx.rotate(angle + 1.8);\n            ctx.fillText(data.datapoints[i].label.toString(), 0, 0);\n            ctx.rotate(-(angle + 1.8));\n            ctx.translate(-fx, -fy);\n            angle += Math.PI * (data.datapoints[i].y / myTotal);\n        }\n        ctx.restore();\n        return linecord;\n        // console.log(\"End : drawMeter\");\n    } catch (e) {\n        console.log(\"error occured in drawMeter : \", e);\n    }\n}\n\nmodule.exports = drawMeterChart;\n\n//# sourceURL=webpack:///./src/common/drawChart/meter_chart_canvas.js?");

/***/ }),

/***/ "./src/common/print_content.js":
/*!*************************************!*\
  !*** ./src/common/print_content.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function PrintContent(event, canvasWidth, canvasHeight, chartID) {\n    //// console.log(event);\n    // let elem = event.target.parentNode;\n    let elem = document.getElementById(chartID);\n    let dataUrl = document.querySelector('#' + elem.id + \" canvas\").toDataURL();\n\n    let windowContent = '<!DOCTYPE html>';\n    windowContent += '<html>';\n    windowContent += '<head><title>Print canvas</title></head>';\n    windowContent += '<body>';\n    windowContent += elem.innerHTML;\n    windowContent += '<img width=\"' + canvasWidth + '\" height=\"' + canvasHeight + '\" src=\"' + dataUrl + '\">';\n    windowContent += '</body>';\n    windowContent += '</html>';\n\n    const printWin = window.open('', '', 'width=' + screen.availWidth + ',height=' + screen.availHeight);\n    printWin.document.open();\n    printWin.document.write(windowContent);\n\n    printWin.document.addEventListener('load', function () {\n        printWin.focus();\n        printWin.print();\n        printWin.document.close();\n        printWin.close();\n    }, true);\n};\n\nmodule.exports = PrintContent;\n\n//# sourceURL=webpack:///./src/common/print_content.js?");

/***/ }),

/***/ "./src/common/print_options.js":
/*!*************************************!*\
  !*** ./src/common/print_options.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// import Canvas2Image from \"./canvas_to_image\";\nconst Canvas2Image = __webpack_require__(/*! ./canvas_to_image */ \"./src/common/canvas_to_image.js\");\n// import cssStyle from \"./css_style\";\nconst cssStyle = __webpack_require__(/*! ./css_style */ \"./src/common/css_style.js\");\n// import PrintContent from \"./print_content\";\nconst PrintContent = __webpack_require__(/*! ./print_content */ \"./src/common/print_content.js\");\n\nconst printOptions = (chartID, chart) => {\n    try {\n\n        if (chart.config.printEnable != undefined && chart.config.printEnable == true) {\n            let content = `\n                        <div id=\"print-option-menu\" style=\"\n                                        position: absolute;\n                                        right: 25px;\n                                        margin-top:-65px;\n                                        border-radius:4px;\n                                        border:1px solid #000;\n                                        background: rgba(0,0,0,.3);\n                                        cursor:pointer;\">\n                          <div style=\"width:30px\">\n                            <hr style=\"margin: 5px;\" />\n                          </div>\n                          <div style=\"width:30px\">\n                            <hr style=\"margin: 5px;\" />\n                          </div>\n                          <div style=\"width:30px\">\n                            <hr style=\"margin: 5px;\" />\n                          </div>\n                        </div>\n                        <div id=\"print-options\" style=\"display:none;\">\n                          <div style=\" padding: 3px 5px;cursor: pointer;\" id=\"print_${chartID}\">Print</div>\n                          <div style=\" padding: 3px 5px;cursor: pointer;\" id=\"jpg_${chartID}\">Save as JPEG</div>\n                          <div style=\" padding: 3px 5px;cursor: pointer;\" id=\"png_${chartID}\">Save as PNG</div>\n                        </div>\n                        `;\n            return content;\n        }\n        return null;\n    } catch (err) {\n        console.log(\"Error in Print Options\", err);\n    }\n};\n\nconst printAction = (chartID, chart) => {\n    try {\n        if (chart.config.printEnable != undefined && chart.config.printEnable == true) {\n            let visible = false;\n            document.querySelector(`#${chartID} #print-option-menu`).addEventListener('click', function (event) {\n                cssStyle(document.querySelector(`#${chartID} #print-options`), {\n                    \"position\": \"absolute\",\n                    \"right\": \"25px\",\n                    \"border\": \"1px solid #000\",\n                    \"background-color\": \"#fff\",\n                    \"z-index\": \"999\",\n                    \"margin-top\": \"-38px\"\n                });\n                if (!visible) {\n                    cssStyle(document.querySelector(`#${chartID} #print-options`), {\n                        \"display\": \"block\"\n                    });\n                    visible = true;\n                } else {\n                    cssStyle(document.querySelector(`#${chartID} #print-options`), {\n                        \"display\": \"none\"\n                    });\n                    visible = false;\n                }\n            });\n            document.querySelector(\"#\" + chartID + \" #print_\" + chartID).addEventListener('click', function (event) {\n                PrintContent(event, chart.wid, chart.hei, chartID);\n                cssStyle(document.querySelector(`#${chartID} #print-options`), {\n                    \"display\": \"none\"\n                });\n                visible = false;\n            });\n            document.querySelector(\"#\" + chartID + \" #jpg_\" + chartID).addEventListener('click', function (event) {\n                Canvas2Image.saveAsImage(document.getElementById(`canvas${chartID}`), document.getElementById(`canvas${chartID}`).width, document.getElementById(`canvas${chartID}`).height);\n                cssStyle(document.querySelector(`#${chartID} #print-options`), {\n                    \"display\": \"none\"\n                });\n                visible = false;\n            });\n            document.querySelector(\"#\" + chartID + \" #png_\" + chartID).addEventListener('click', function (event) {\n                Canvas2Image.saveAsImage(document.getElementById(`canvas${chartID}`), document.getElementById(`canvas${chartID}`).width, document.getElementById(`canvas${chartID}`).height);\n                cssStyle(document.querySelector(`#${chartID} #print-options`), {\n                    \"display\": \"none\"\n                });\n                visible = false;\n            });\n        }\n    } catch (error) {\n        console.log(error);\n    }\n};\n\nexports.printOptions = printOptions;\nexports.printAction = printAction;\n\n//# sourceURL=webpack:///./src/common/print_options.js?");

/***/ }),

/***/ "./src/invokeCharts/enums.js":
/*!***********************************!*\
  !*** ./src/invokeCharts/enums.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.xAxisSpacing = 104;\nexports.fontLineHeight = 26;\nexports.strokeStyle = \"rgba(0,0,0,1)\";\nexports.white = \"#fff\";\nexports.blackFillStyle = \"#000\";\nexports.canvasHeightSpareForDetails = 105;\nexports.canvasWidthSpareForDetails = 100;\nexports.font = \"26px  Source Sans Pro, Helvetica Neue, Arial, sans-serif\";\nexports.toolTipBgColor = \"rgba(255, 255, 255, .9)\";\n\nexports.barChart = \"bar-chart\";\nexports.columnChart = \"column-chart\";\nexports.lineChart = \"line-chart\";\nexports.stepLineChart = \"step-line-chart\";\nexports.smoothLineChart = \"smooth-line-chart\";\nexports.combinationChart = \"combination-chart\";\nexports.pieChart = \"pie-chart\";\nexports.doughnutChart = \"doughnut-chart\";\nexports.meterChart = \"meter-chart\";\nexports.sparkChart = \"spark-chart\";\nexports.stackedColumnChart = \"stacked-column-chart\";\nexports.stackedBarChart = \"stacked-bar-chart\";\nexports.overlapColumnChart = \"overlap-column-chart\";\nexports.overlapBarChart = \"overlap-bar-chart\";\n\n//# sourceURL=webpack:///./src/invokeCharts/enums.js?");

/***/ }),

/***/ "./src/invokeCharts/meter_chart.js":
/*!*****************************************!*\
  !*** ./src/invokeCharts/meter_chart.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// import { printOptions, printAction } from \"../common/print_options\";\nconst printOpts = __webpack_require__(/*! ../common/print_options */ \"./src/common/print_options.js\");\nconst printOptions = printOpts.printOptions;\nconst printAction = printOpts.printAction;\n// import ChartSurface from \"../common/chart_surface\";\nconst ChartSurface = __webpack_require__(/*! ../common/chart_surface */ \"./src/common/chart_surface.js\");\n// import drawMeterChart from \"../common/drawChart/meter_chart_canvas\";\nconst drawMeterChart = __webpack_require__(/*! ../common/drawChart/meter_chart_canvas */ \"./src/common/drawChart/meter_chart_canvas.js\");\n\nconst GkMeterChart = data => {\n    try {\n        // console.log(\"Start : meterChart\");\n        const chartSurface = new ChartSurface();\n\n        let chartID = data.id;\n        let chart = data.data;\n\n        chart.container = chartID;\n        chart.chartnumber = chartID;\n        let ChartContainer = document.querySelector(\"#\" + chart.container);\n        chart.wid = ChartContainer.clientWidth - 10;\n        chart.hei = ChartContainer.clientHeight - 33;\n\n        let titleAndPrintButton = '';\n        if (chart.config.title) {\n            titleAndPrintButton += '<h2 class=\"chartTitle\">' + chart.config.title + '</h2>';\n        }\n        titleAndPrintButton += printOptions(chartID, chart);\n        ChartContainer.innerHTML = titleAndPrintButton;\n        let ctx_base = chartSurface.preparePlot(chart.chartnumber, chart.wid, chart.hei, chart.container);\n        let canvas = 'canvas' + chart.chartnumber;\n        let maxdata = [];\n        maxdata[0] = maxdata[1] = chart.data[0].datapoints[0].y;\n        let meterTotal = 0;\n        for (let j = 0; j < chart.data[0].datapoints.length; j++) {\n            if (chart.data[0].datapoints[j].y < maxdata[0]) {\n                maxdata[0] = chart.data[0].datapoints[j].y;\n            }\n            if (chart.data[0].datapoints[j].y > maxdata[1]) {\n                maxdata[1] = chart.data[0].datapoints[j].y;\n            }\n            meterTotal += chart.data[0].datapoints[j].y;\n        }\n        // console.log(\"meterTotal \" + meterTotal);\n        let ChartDataToShow = chart.data[0].dataval;\n        let linewidth = 50;\n        ChartDataToShow = Math.round(ChartDataToShow / meterTotal * 100);\n        //// console.log(ChartDataToShow);\n        drawMeterChart(canvas, ctx_base, 10, chart.data[0], maxdata, chart.data[0].chartColor, ChartDataToShow);\n        printAction(chartID, chart);\n        // console.log(\"End : meterChart\");\n    } catch (err) {\n        console.error(\"Exception occurred in  meter chart module:  \" + err.message);\n    }\n};\n\nmodule.exports = GkMeterChart;\n\n//# sourceURL=webpack:///./src/invokeCharts/meter_chart.js?");

/***/ })

/******/ });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/common/canvas_to_image.js");
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

/***/ })

/******/ });
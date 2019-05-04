webpackHotUpdate("static/development/pages/galery/bar-smooth-chart-comparision.js",{

/***/ "./comps/galery/charts/bar/bar-smooth-line-comparision.js":
/*!****************************************************************!*\
  !*** ./comps/galery/charts/bar/bar-smooth-line-comparision.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BarSmoothLineChartComparision; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
var _jsxFileName = "/Users/gkakar/Documents/Proj/next-proj/comps/galery/charts/bar/bar-smooth-line-comparision.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var BarSmoothLineChartComparision =
/*#__PURE__*/
function (_Component) {
  _inherits(BarSmoothLineChartComparision, _Component);

  function BarSmoothLineChartComparision() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BarSmoothLineChartComparision);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BarSmoothLineChartComparision)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidMount", function () {
      console.log("componentDidMount:StepChart");

      _this.initialize();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "initialize", function () {
      var datapoints = [{
        label: "January",
        y: 40
      }, {
        label: "Feburary",
        y: 160
      }, {
        label: "March",
        y: 80
      }, {
        label: "April",
        y: 200
      }, {
        label: "May",
        y: 140
      }, {
        label: "June",
        y: 240
      }, {
        label: "July",
        y: 120
      }, {
        label: "Aug",
        y: 80
      }];
      var datapoints1 = [{
        label: "January",
        y: 20
      }, {
        label: "Feb",
        y: 120
      }, {
        label: "Mar",
        y: 210
      }, {
        label: "Apr",
        y: 246
      }, {
        label: "May",
        y: 96
      }, {
        label: "Jun",
        y: 15
      }, {
        label: "July",
        y: 70
      }, {
        label: "Aug",
        y: 50
      }];
      var chartbar = {
        "config": {
          "title": "Bar Chart and Smooth Line Comparision",
          "chartType": 'column',
          "printEnable": true
        },
        "data": [{
          "chartColor": "#00d554",
          "type": 'bar',
          "dataLabel": "Data set 1",
          "datapoints": datapoints1
        }, {
          "chartColor": "teal",
          "type": 'bar',
          "dataLabel": "Data set 2",
          "datapoints": datapoints
        }, {
          "chartColor": "red",
          "type": 'spline',
          "fill": true,
          "dataLabel": "Data set 3",
          "datapoints": datapoints
        }]
      };
      new GKChart({
        id: "chartbar",
        data: chartbar
      });
    });

    return _this;
  }

  _createClass(BarSmoothLineChartComparision, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "chartDiv",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("kakarChart", {
        id: "chartbar",
        style: {
          height: "350px",
          width: "100%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
        defaultActiveKey: 1,
        id: "example-code",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
        eventKey: 1,
        title: "HTML",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("xmp", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Document</title>\n  </head>\n  <body>\n    <kakarChart id=\"chartbar\" style=\"height:350px; width:100%;\"></kakarChart>\n    <script type=\"text/javascript\" src=\"gk-chart.min.js\"></script>\n  </body>\n</html>"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
        eventKey: 2,
        title: "JavaScript",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "\n    let datapoints = [\n      {label: \"January\",y: 40},\n      {label: \"Feburary\",y: 160},\n      {label: \"March\",y: 80},\n      {label: \"April\",y: 200},\n      {label: \"May\",y: 140},\n      {label: \"June\",y: 240},\n      {label: \"July\",y: 120},\n      {label: \"Aug\",y: 80}\n    ];\n    let datapoints1 = [\n        {label: \"January\",y: 20},\n        {label: \"Feb\",y: 120},\n        {label: \"Mar\",y: 210},\n        {label: \"Apr\",y: 246},\n        {label: \"May\",y: 96},\n        {label: \"Jun\",y: 15},\n        {label: \"July\",y: 70},\n        {label: \"Aug\",y: 50}\n      ];\n\n    var chartbar = {\n      \"config\": {\n        \"title\": \"Bar Chart and Smooth Line Comparision\",\n        \"chartType\": 'column',\n        \"printEnable\" : true\n      },\n      \"data\": [{\n        \"chartColor\": \"#00d554\",\n        \"type\": 'bar',\n        \"dataLabel\" : \"Data set 1\",\n        \"datapoints\": datapoints1\n      },\n      {\n        \"chartColor\": \"teal\",\n        \"type\": 'bar',\n        \"dataLabel\" : \"Data set 2\",\n        \"datapoints\": datapoints\n      },\n      {\n        \"chartColor\": \"red\",\n        \"type\": 'spline',\n        \"fill\": true,\n        \"dataLabel\" : \"Data set 3\",\n        \"datapoints\": datapoints\n      },\n    ]\n    };\n\n    new GKChart({id: \"chartbar\", data: chartbar}) ;\n")))))));
    }
  }]);

  return BarSmoothLineChartComparision;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ })

})
//# sourceMappingURL=bar-smooth-chart-comparision.js.cfbdcbcb6ae0ef4fd7c3.hot-update.js.map
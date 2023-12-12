"use strict";(self.webpackChunkreact_webpack_project=self.webpackChunkreact_webpack_project||[]).push([[905],{"./src/stories/columnChart.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ColumnChart:()=>ColumnChart,MultiColumnChart:()=>MultiColumnChart,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),gk_chart__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/gk-chart/index.js"),_data__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/data/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const BarChartContainer=styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.div`
  width: 100%;
  height: 500px;  
`;let chartbar={config:{title:"Column Chart",chartType:"column-chart",printEnable:!0},yaxis:{min:0,numOfRows:5,title:"Hours"},data:[{chartColor:"#5d62b5",dataLabel:"Data set 1",datapoints:_data__WEBPACK_IMPORTED_MODULE_2__.xV}]};const ColumnChart=()=>((0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{(0,gk_chart__WEBPACK_IMPORTED_MODULE_1__.Kz)({id:"columnChart",data:chartbar})}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(BarChartContainer,{id:"columnChart"})})),__WEBPACK_DEFAULT_EXPORT__={title:"Components/ColumnChart",component:ColumnChart,tags:["autodocs"],decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{margin:"1em",padding:"2em",background:"#f8f7f7"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Story,{})})]};ColumnChart.parameters={docs:{source:{code:'\nimport React, { useEffect } from "react";\nimport {GkBarChart} from \'gk-chart\';\n\nlet chartbar = {\n    config: {\n        "title": "Bar Chart",\n        "chartType": \'bar-chart\',\n        "printEnable": true\n    },\n    xAxis : {\n        min : 0,\n        numOfRows : 5,\n        title : "Hours"\n    },\n    categories : [\n        {label: "Travel & Leisure"},\n        {label: "Advertising/Marketing/PR"},\n        {label: "Other"},\n        {label: "Real Estate"},\n        {label: "Communications/Cable/Phone"},\n        {label: "Construction"},\n        {label: "Entertainment"},\n        {label: "Staffing Firm/Full Time/Temporary"},\n        {label: "Transportation/Logistics"},\n        {label: "Utilities"},\n        {label: "Aerospace/Defense Products"},\n        {label: "Banking/Finance/Securities"},\n        {label: "Consumer Products - Non-Durables"},\n        {label: "Distribution"}\n    ],\n    "data": [\n        {\n            "chartColor": "#5d62b5",\n            "dataLabel": "Data set 1",\n            "datapoints": [\n                {value: "41"},\n                {value: "39"},\n                {value: "38"},\n                {value: "32"},\n                {value: "26"},\n                {value: "25"},\n                {value: "25"},\n                {value: "24"},\n                {value: "23"},\n                {value: "22"},\n                {value: "18"},\n                {value: "16"},\n                {value: "15"},\n                {value: "13"}\n            ]\n        }\n    ]\n};\n\nexport const BarChart = () => {\n\n    useEffect(() => {\n        GkBarChart({\n            id: "barChart",\n            data: chartbar\n        })\n    }, []);\n\n    return (\n        <>\n            <div id="barChart" style={{width: "100%", height: "500px"}}></div>\n        </>\n    );\n};\n\n\n'}}};const chartMultiColumn={config:{title:"Multi Column Chart Comparision",chartType:"column-chart",printEnable:!0},yaxis:{min:0,numOfRows:5,title:"Hours"},data:[{chartColor:"#5d62b5",dataLabel:"Data Set 1",datapoints:_data__WEBPACK_IMPORTED_MODULE_2__.xV},{chartColor:"#29c3be",dataLabel:"Data Set 2",datapoints:_data__WEBPACK_IMPORTED_MODULE_2__.W$},{chartColor:"#ff00dd",dataLabel:"Data Set 3",datapoints:_data__WEBPACK_IMPORTED_MODULE_2__.kY},{chartColor:"#f2726f",dataLabel:"Data Set 4",datapoints:_data__WEBPACK_IMPORTED_MODULE_2__.T9}]},MultiColumnChart=()=>((0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{(0,gk_chart__WEBPACK_IMPORTED_MODULE_1__.Kz)({id:"multiColumnChart",data:chartMultiColumn})}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(BarChartContainer,{id:"multiColumnChart"})}));MultiColumnChart.parameters={docs:{source:{code:'\nimport React, { useEffect } from "react";\nimport {GkColumnChart} from \'gk-chart\';\nimport {datapoints, datapoints1, datapoints2, datapoints3} from \'./data\';\n\nconst chartMultiColumn = {\n    "config": {\n        "title": "Multi Column Chart Comparision",\n        "chartType": \'column-chart\',\n        "printEnable": true\n    },\n    yaxis : {\n        min : 0,\n        numOfRows : 5,\n        title : "Hours"\n    },\n    "data": [\n        {\n            chartColor: "#5d62b5",\n            dataLabel: "Data Set 1",\n            datapoints: datapoints\n        },\n        {\n            chartColor: "#29c3be",\n            dataLabel: "Data Set 2",\n            datapoints: datapoints1\n        },\n        {\n            chartColor: "#ff00dd",\n            dataLabel: "Data Set 3",\n            datapoints: datapoints2\n        },\n        {\n            chartColor: "#f2726f",\n            dataLabel: "Data Set 4",\n            datapoints: datapoints3\n        }\n    ]\n};\n\nexport const MultiBarChart = () => {\n\n    useEffect(() => {\n        GkColumnChart({\n            id: "multiBarChart",\n            data: chartMultiColumn\n        })\n    }, []);\n\n    return (\n        <>\n            <div id="multiBarChart" style={{width: "100%", height: "500px"}} />\n        </>\n    );\n}\n'}}},ColumnChart.parameters={...ColumnChart.parameters,docs:{...ColumnChart.parameters?.docs,source:{originalSource:'() => {\n  useEffect(() => {\n    GkColumnChart({\n      id: "columnChart",\n      data: chartbar\n    });\n  }, []);\n  return <>\n            <BarChartContainer id="columnChart" />\n        </>;\n}',...ColumnChart.parameters?.docs?.source}}},MultiColumnChart.parameters={...MultiColumnChart.parameters,docs:{...MultiColumnChart.parameters?.docs,source:{originalSource:'() => {\n  useEffect(() => {\n    GkColumnChart({\n      id: "multiColumnChart",\n      data: chartMultiColumn\n    });\n  }, []);\n  return <>\n            <BarChartContainer id="multiColumnChart" />\n        </>;\n}',...MultiColumnChart.parameters?.docs?.source}}};const __namedExportsOrder=["ColumnChart","MultiColumnChart"]},"./src/data/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T9:()=>datapoints3,W$:()=>datapoints1,kY:()=>datapoints2,xV:()=>datapoints});const datapoints=[{label:"January",y:1},{label:"February",y:2},{label:"March",y:5},{label:"April",y:7},{label:"May",y:10},{label:"June",y:12},{label:"July",y:16},{label:"August",y:12},{label:"September",y:18},{label:"October",y:15},{label:"November",y:20},{label:"December",y:22}],datapoints1=[{label:"January",y:18},{label:"February",y:28},{label:"March",y:34},{label:"April",y:42},{label:"May",y:54},{label:"June",y:55},{label:"July",y:70},{label:"August",y:60},{label:"September",y:72},{label:"October",y:76},{label:"November",y:87},{label:"December",y:92}],datapoints2=[{label:"January",y:20},{label:"February",y:22},{label:"March",y:27},{label:"April",y:22},{label:"May",y:29},{label:"June",y:20},{label:"July",y:50},{label:"August",y:40},{label:"September",y:42},{label:"October",y:46},{label:"November",y:57},{label:"December",y:52}],datapoints3=[{label:"January",y:16},{label:"February",y:19},{label:"March",y:21},{label:"April",y:21},{label:"May",y:24},{label:"June",y:35},{label:"July",y:40},{label:"August",y:50},{label:"September",y:60},{label:"October",y:70},{label:"November",y:80},{label:"December",y:90}]}}]);
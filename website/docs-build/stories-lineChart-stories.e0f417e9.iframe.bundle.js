"use strict";(self.webpackChunkreact_webpack_project=self.webpackChunkreact_webpack_project||[]).push([[436],{"./src/stories/lineChart.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LineChart:()=>LineChart,LineChartFill:()=>LineChartFill,MultiLineChartComparison:()=>MultiLineChartComparison,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_data__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/data/index.js"),gk_chart__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../node_modules/gk-chart/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");let chartline={config:{title:"Line Chart",chartType:"line-chart",printEnable:!0},yaxis:{min:0,numOfRows:5,title:"Hours"},data:[{chartColor:"#5d62b5",fill:!1,dataLabel:"Data Set 1",datapoints:_data__WEBPACK_IMPORTED_MODULE_1__.xV}]};const LineChartContainer=styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.div`
  width: 100%;
  height: 500px;  
`,LineChart=()=>((0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{(0,gk_chart__WEBPACK_IMPORTED_MODULE_2__.J)({id:"lineChart",data:chartline})}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(LineChartContainer,{id:"lineChart"})})),__WEBPACK_DEFAULT_EXPORT__={title:"Components/LineChart",component:LineChart,tags:["autodocs"],decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{margin:"1em",padding:"2em",background:"#f8f7f7"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Story,{})})]};LineChart.parameters={docs:{source:{code:'\nimport React, { useEffect } from "react";\nimport {GkLineChart} from \'gk-chart\';\n\nlet datapoints: {label: string, y: number}[] = [\n    {label: "January", y: 18},\n    {label: "February", y: 28},\n    {label: "March", y: 34},\n    {label: "April", y: 42},\n    {label: "May", y: 54},\n    {label: "June", y: 55},\n    {label: "July", y: 70},\n    {label: "August", y: 60},\n    {label: "September", y: 72},\n    {label: "October", y: 76},\n    {label: "November", y: 87},\n    {label: "December", y: 92}\n]\n\nlet chartline = {\n    config: {\n        title: "Line Chart",\n        chartType: "line-chart",\n        printEnable: true\n    },\n    // yaxis data is not required and can be omitted, charting library will calculate it\n    yaxis : {\n        min : 0,\n        numOfRows : 5,\n        title : "Hours"\n    },\n    data: [\n        {\n            chartColor: "#5d62b5",\n            fill: false,\n            dataLabel: "Data Set 1",\n            datapoints: datapoints\n        }\n    ]\n};\n\nexport const LineChart = () => {\n\n    useEffect(() => {\n        GkLineChart({\n            id: "lineChart",\n            data: chartline\n        })\n    }, []);\n\n    return (\n        <>\n            <div id="lineChart" style={{width: "100%", height: "500px"}}></div>\n        </>\n    );\n}\n\n'}}};let chartLineFill={config:{title:"Line Chart Fill",chartType:"line",printEnable:!0},data:[{chartColor:"#5d62b5",fill:!0,dataLabel:"Data Set 1",datapoints:_data__WEBPACK_IMPORTED_MODULE_1__.xV}]};const LineChartFill=()=>((0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{(0,gk_chart__WEBPACK_IMPORTED_MODULE_2__.J)({id:"lineChartFill",data:chartLineFill})}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(LineChartContainer,{id:"lineChartFill"})}));LineChartFill.parameters={docs:{source:{code:'\nimport React, { useEffect } from "react";\nimport {GkLineChart} from \'gk-chart\';\n\nlet datapoints: {label: string, y: number}[] = [\n    {label: "January", y: 18},\n    {label: "February", y: 28},\n    {label: "March", y: 34},\n    {label: "April", y: 42},\n    {label: "May", y: 54},\n    {label: "June", y: 55},\n    {label: "July", y: 70},\n    {label: "August", y: 60},\n    {label: "September", y: 72},\n    {label: "October", y: 76},\n    {label: "November", y: 87},\n    {label: "December", y: 92}\n]\n\nlet chartLineFill = {\n    config: {\n        title: "Line Chart Fill",\n        chartType: "line",\n        printEnable: true\n    },\n    data: [\n        {\n            chartColor: "#5d62b5",\n            fill: true,\n            dataLabel: "Data Set 1",\n            datapoints: datapoints\n        }\n    ]\n};\n\nexport const LineChartFill = () => {\n\n    useEffect(() => {\n        GkLineChart({\n            id: "lineChartFill",\n            data: chartLineFill\n        })\n    }, []);\n\n    return (\n        <>\n            <LineChartContainer id="lineChartFill" />\n        </>\n    );\n};\n}\n\n'}}};var chartLineComparison={config:{title:"Multi Line Comparision Chart",chartType:"line-chart",printEnable:!0},yaxis:{min:0,numOfRows:5,title:"Hours"},data:[{chartColor:"#5d62b5",fill:!1,dataLabel:"Data Set 1",datapoints:_data__WEBPACK_IMPORTED_MODULE_1__.xV},{chartColor:"#29c3be",fill:!1,dataLabel:"Data Set 2",datapoints:_data__WEBPACK_IMPORTED_MODULE_1__.W$},{chartColor:"#ff00dd",fill:!1,dataLabel:"Data Set 3",datapoints:_data__WEBPACK_IMPORTED_MODULE_1__.kY},{chartColor:"#f2726f",fill:!1,dataLabel:"Data Set 4",datapoints:_data__WEBPACK_IMPORTED_MODULE_1__.T9}]};const MultiLineChartComparison=()=>((0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{(0,gk_chart__WEBPACK_IMPORTED_MODULE_2__.J)({id:"multiLineChartComparison",data:chartLineComparison})}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(LineChartContainer,{id:"multiLineChartComparison"})}));MultiLineChartComparison.parameters={docs:{source:{code:'\nimport React, { useEffect } from "react";\nimport {GkLineChart} from \'gk-chart\';\n\nexport const datapoints = [\n    {label: "January", y: 1},\n    {label: "February", y: 2},\n    {label: "March", y: 5},\n    {label: "April", y: 7},\n    {label: "May", y: 10},\n    {label: "June", y: 12},\n    {label: "July", y: 16},\n    {label: "August", y: 12},\n    {label: "September", y: 18},\n    {label: "October", y: 15},\n    {label: "November", y: 20},\n    {label: "December", y: 22}\n];\nexport const datapoints1 = [\n    {label: "January", y: 18},\n    {label: "February", y: 28},\n    {label: "March", y: 34},\n    {label: "April", y: 42},\n    {label: "May", y: 54},\n    {label: "June", y: 55},\n    {label: "July", y: 70},\n    {label: "August", y: 60},\n    {label: "September", y: 72},\n    {label: "October", y: 76},\n    {label: "November", y: 87},\n    {label: "December", y: 92}\n];\nexport const datapoints2 = [\n    {label: "January", y: 20},\n    {label: "February", y: 22},\n    {label: "March", y: 27},\n    {label: "April", y: 22},\n    {label: "May", y: 29},\n    {label: "June", y: 20},\n    {label: "July", y: 50},\n    {label: "August", y: 40},\n    {label: "September", y: 42},\n    {label: "October", y: 46},\n    {label: "November", y: 57},\n    {label: "December", y: 52}\n];\nexport const datapoints3 = [\n    {label: "January", y: 16},\n    {label: "February", y: 19},\n    {label: "March", y: 21},\n    {label: "April", y: 21},\n    {label: "May", y: 24},\n    {label: "June", y: 35},\n    {label: "July", y: 40},\n    {label: "August", y: 50},\n    {label: "September", y: 60},\n    {label: "October", y: 70},\n    {label: "November", y: 80},\n    {label: "December", y: 90}\n];\n\nvar chartLineComparison = {\n    config: {\n        title: "Multi Line Comparision Chart",\n        chartType: "line-chart",\n        printEnable: true\n    },\n    yaxis : {\n        min : 0,\n        numOfRows : 5,\n        title : "Hours"\n    },\n    data: [\n        {\n            chartColor: "#5d62b5",\n            fill: false,\n            dataLabel: "Data Set 1",\n            datapoints: datapoints\n        },\n        {\n            chartColor: "#29c3be",\n            fill: false,\n            dataLabel: "Data Set 2",\n            datapoints: datapoints1\n        },\n        {\n            chartColor: "#ff00dd",\n            fill: false,\n            dataLabel: "Data Set 3",\n            datapoints: datapoints2\n        },\n        {\n            chartColor: "#f2726f",\n            fill: false,\n            dataLabel: "Data Set 4",\n            datapoints: datapoints3\n        }\n    ]\n};\n\nexport const MultiLineChartComparison = () => {\n\n    useEffect(() => {\n        GkLineChart({\n            id: "multiLineChartComparison",\n            data: chartLineComparison\n        })\n    }, []);\n\n    return (\n        <>\n            <div id="multiLineChartComparison" style={{width: "100%", height: "500px"}}></div>\n        </>\n    );\n};\n'}}},LineChart.parameters={...LineChart.parameters,docs:{...LineChart.parameters?.docs,source:{originalSource:'() => {\n  useEffect(() => {\n    GkLineChart({\n      id: "lineChart",\n      data: chartline\n    });\n  }, []);\n  return <>\n            <LineChartContainer id="lineChart" />\n        </>;\n}',...LineChart.parameters?.docs?.source}}},LineChartFill.parameters={...LineChartFill.parameters,docs:{...LineChartFill.parameters?.docs,source:{originalSource:'() => {\n  useEffect(() => {\n    GkLineChart({\n      id: "lineChartFill",\n      data: chartLineFill\n    });\n  }, []);\n  return <>\n            <LineChartContainer id="lineChartFill" />\n        </>;\n}',...LineChartFill.parameters?.docs?.source}}},MultiLineChartComparison.parameters={...MultiLineChartComparison.parameters,docs:{...MultiLineChartComparison.parameters?.docs,source:{originalSource:'() => {\n  useEffect(() => {\n    GkLineChart({\n      id: "multiLineChartComparison",\n      data: chartLineComparison\n    });\n  }, []);\n  return <>\n            <LineChartContainer id="multiLineChartComparison" />\n        </>;\n}',...MultiLineChartComparison.parameters?.docs?.source}}};const __namedExportsOrder=["LineChart","LineChartFill","MultiLineChartComparison"]},"./src/data/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T9:()=>datapoints3,W$:()=>datapoints1,kY:()=>datapoints2,xV:()=>datapoints});const datapoints=[{label:"January",y:1},{label:"February",y:2},{label:"March",y:5},{label:"April",y:7},{label:"May",y:10},{label:"June",y:12},{label:"July",y:16},{label:"August",y:12},{label:"September",y:18},{label:"October",y:15},{label:"November",y:20},{label:"December",y:22}],datapoints1=[{label:"January",y:18},{label:"February",y:28},{label:"March",y:34},{label:"April",y:42},{label:"May",y:54},{label:"June",y:55},{label:"July",y:70},{label:"August",y:60},{label:"September",y:72},{label:"October",y:76},{label:"November",y:87},{label:"December",y:92}],datapoints2=[{label:"January",y:20},{label:"February",y:22},{label:"March",y:27},{label:"April",y:22},{label:"May",y:29},{label:"June",y:20},{label:"July",y:50},{label:"August",y:40},{label:"September",y:42},{label:"October",y:46},{label:"November",y:57},{label:"December",y:52}],datapoints3=[{label:"January",y:16},{label:"February",y:19},{label:"March",y:21},{label:"April",y:21},{label:"May",y:24},{label:"June",y:35},{label:"July",y:40},{label:"August",y:50},{label:"September",y:60},{label:"October",y:70},{label:"November",y:80},{label:"December",y:90}]}}]);
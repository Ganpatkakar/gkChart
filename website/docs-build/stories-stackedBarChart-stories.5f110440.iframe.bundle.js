"use strict";(self.webpackChunkreact_webpack_project=self.webpackChunkreact_webpack_project||[]).push([[989],{"./src/stories/stackedBarChart.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{GroupStackedChart:()=>GroupStackedChart,StackedChart:()=>StackedChart,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),gk_chart__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/gk-chart/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StackedChartContainer=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div`
  width: 100%;
  height: 500px;  
`,chartData={config:{title:"Stacked Bar Chart",chartType:"stacked-bar-chart",printEnable:!0},xAxis:{min:0,rowCount:5,title:"Hours"},categories:[{label:"January"},{label:"February"},{label:"March"},{label:"April"},{label:"May"},{label:"June"},{label:"July"},{label:"August"},{label:"September"}],data:[{dataSet:[{color:"#5d62b5",dataLabel:"Oil",dataPoints:[{value:5},{value:10},{value:8},{value:6},{value:2},{value:9},{value:19},{value:5},{value:2}]},{color:"#29c3be",dataLabel:"Gas",dataPoints:[{value:2},{value:6},{value:12},{value:15},{value:1},{value:5},{value:15},{value:25},{value:5}]},{color:"#f2726f",dataLabel:"Petrol",dataPoints:[{value:8},{value:4},{value:5},{value:5},{value:10},{value:15},{value:1},{value:10},{value:25}]}]}]},StackedChart=()=>((0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{(0,gk_chart__WEBPACK_IMPORTED_MODULE_1__.lb)({id:"stackedBarChart",data:chartData})}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(StackedChartContainer,{id:"stackedBarChart"})})),__WEBPACK_DEFAULT_EXPORT__={title:"Components/StackedBarChart",component:StackedChart,tags:["autodocs"],decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{margin:"1em",padding:"2em",background:"#f8f7f7"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Story,{})})]};StackedChart.parameters={docs:{source:{code:'\nimport React, { useEffect } from "react";\nimport {GkStackedBarChart} from \'gk-chart\';\n\nconst chartData = {\n    config: {\n        title: "Stacked Bar Chart",\n        chartType: "stacked-bar-chart",\n        printEnable: true\n    },\n    xAxis: {\n        min : 0,\n        rowCount : 5,\n        title : "Hours"\n    },\n    categories: [\n        {label: "January"},\n        {label: "February"},\n        {label: "March"},\n        {label: "April"},\n        {label: "May"},\n        {label: "June"},\n        {label: "July"},\n        {label: "August"},\n        {label: "September"},\n    ],\n    data: [\n        {\n            dataSet: [\n                {\n                    color: "#5d62b5",\n                    dataLabel: "Oil",\n                    dataPoints : [\n                        {value: 5},\n                        {value: 10},\n                        {value: 8},\n                        {value: 6},\n                        {value: 2},\n                        {value: 9},\n                        {value: 19},\n                        {value: 5},\n                        {value: 2},\n                    ]\n                },\n                {\n                    color: "#29c3be",\n                    dataLabel: "Gas",\n                    dataPoints : [\n                        {value: 2},\n                        {value: 6},\n                        {value: 12},\n                        {value: 15},\n                        {value: 1},\n                        {value: 5},\n                        {value: 15},\n                        {value: 25},\n                        {value: 5},\n                    ]\n                },\n                {\n                    color: "#f2726f",\n                    dataLabel: "Petrol",\n                    dataPoints : [\n                        {value: 8},\n                        {value: 4},\n                        {value: 5},\n                        {value: 5},\n                        {value: 10},\n                        {value: 15},\n                        {value: 1},\n                        {value: 10},\n                        {value: 25},\n                    ]\n                }\n            ]\n        }\n    ]\n};\n\nexport const StackedChart = () => {\n\n    useEffect(() => {\n        GkStackedBarChart({\n            id: "stackedBarChart",\n            data: chartData\n        })\n    }, []);\n\n    return (\n        <>\n            <div id="stackedBarChart" style={{width: "100%", height: "500px"}}></div>\n        </>\n    );\n};\n'}}};const groupChartData={config:{title:"Stacked Chart",chartType:"stacked-bar-chart",printEnable:!0},xAxis:{min:0,rowCount:5,title:"Hours"},categories:[{label:"January"},{label:"February"},{label:"March"},{label:"April"},{label:"May"},{label:"June"},{label:"July"},{label:"August"},{label:"September"}],data:[{dataSet:[{color:"#5d62b5",dataLabel:"Oil",dataPoints:[{value:5},{value:10},{value:8},{value:6},{value:2},{value:9},{value:19},{value:5},{value:2}]},{color:"#29c3be",dataLabel:"Gas",dataPoints:[{value:2},{value:6},{value:12},{value:15},{value:1},{value:5},{value:15},{value:25},{value:5}]},{color:"#f2726f",dataLabel:"Petrol",dataPoints:[{value:8},{value:4},{value:5},{value:5},{value:10},{value:15},{value:1},{value:10},{value:25}]}]},{dataSet:[{color:"#5d62b5",dataLabel:"Oil",dataPoints:[{value:15},{value:1},{value:18},{value:10},{value:12},{value:19},{value:9},{value:15},{value:22}]},{color:"#29c3be",dataLabel:"Gas",dataPoints:[{value:12},{value:16},{value:2},{value:5},{value:11},{value:25},{value:5},{value:21},{value:35}]},{color:"#f2726f",dataLabel:"Petrol",dataPoints:[{value:18},{value:24},{value:15},{value:35},{value:1},{value:1},{value:11},{value:16},{value:2}]}]}]},GroupStackedChart=()=>((0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{(0,gk_chart__WEBPACK_IMPORTED_MODULE_1__.lb)({id:"groupStackedBarChart",data:groupChartData})}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(StackedChartContainer,{id:"groupStackedBarChart"})}));GroupStackedChart.parameters={docs:{source:{code:'\nimport React, { useEffect } from "react";\nimport {GkStackedBarChart} from \'gk-chart\';\n\nconst groupChartData = {\n    config: {\n        title: "Stacked Chart",\n        chartType: "stacked-bar-chart",\n        printEnable: true\n    },\n    xAxis: {\n        min : 0,\n        rowCount : 5,\n        title : "Hours"\n    },\n    categories: [\n        {label: "January"},\n        {label: "February"},\n        {label: "March"},\n        {label: "April"},\n        {label: "May"},\n        {label: "June"},\n        {label: "July"},\n        {label: "August"},\n        {label: "September"},\n    ],\n    data: [\n        {\n            dataSet: [\n                {\n                    color: "#5d62b5",\n                    dataLabel: "Oil",\n                    dataPoints : [\n                        {value: 5},\n                        {value: 10},\n                        {value: 8},\n                        {value: 6},\n                        {value: 2},\n                        {value: 9},\n                        {value: 19},\n                        {value: 5},\n                        {value: 2},\n                    ]\n                },\n                {\n                    color: "#29c3be",\n                    dataLabel: "Gas",\n                    dataPoints : [\n                        {value: 2},\n                        {value: 6},\n                        {value: 12},\n                        {value: 15},\n                        {value: 1},\n                        {value: 5},\n                        {value: 15},\n                        {value: 25},\n                        {value: 5},\n                    ]\n                },\n                {\n                    color: "#f2726f",\n                    dataLabel: "Petrol",\n                    dataPoints : [\n                        {value: 8},\n                        {value: 4},\n                        {value: 5},\n                        {value: 5},\n                        {value: 10},\n                        {value: 15},\n                        {value: 1},\n                        {value: 10},\n                        {value: 25},\n                    ]\n                }\n            ]\n        },\n        {\n            dataSet: [\n                {\n                    color: "#5d62b5",\n                    dataLabel: "Oil",\n                    dataPoints : [\n                        {value: 15},\n                        {value: 1},\n                        {value: 18},\n                        {value: 10},\n                        {value: 12},\n                        {value: 19},\n                        {value: 9},\n                        {value: 15},\n                        {value: 22},\n                    ]\n                },\n                {\n                    color: "#29c3be",\n                    dataLabel: "Gas",\n                    dataPoints : [\n                        {value: 12},\n                        {value: 16},\n                        {value: 2},\n                        {value: 5},\n                        {value: 11},\n                        {value: 25},\n                        {value: 5},\n                        {value: 21},\n                        {value: 35},\n                    ]\n                },\n                {\n                    color: "#f2726f",\n                    dataLabel: "Petrol",\n                    dataPoints : [\n                        {value: 18},\n                        {value: 24},\n                        {value: 15},\n                        {value: 35},\n                        {value: 1},\n                        {value: 1},\n                        {value: 11},\n                        {value: 16},\n                        {value: 2},\n                    ]\n                }\n            ]\n        }\n    ]\n};\n\nexport const StackedChart = () => {\n\n    useEffect(() => {\n        GkStackedBarChart({\n            id: "groupStackedBarChart",\n            data: groupChartData\n        })\n    }, []);\n\n    return (\n        <>\n            <div id="groupStackedBarChart" style={{width: "100%", height: "500px"}}></div>\n        </>\n    );\n};\n'}}},StackedChart.parameters={...StackedChart.parameters,docs:{...StackedChart.parameters?.docs,source:{originalSource:'() => {\n  useEffect(() => {\n    GkStackedBarChart({\n      id: "stackedBarChart",\n      data: chartData\n    });\n  }, []);\n  return <>\n            <StackedChartContainer id="stackedBarChart" />\n        </>;\n}',...StackedChart.parameters?.docs?.source}}},GroupStackedChart.parameters={...GroupStackedChart.parameters,docs:{...GroupStackedChart.parameters?.docs,source:{originalSource:'() => {\n  useEffect(() => {\n    GkStackedBarChart({\n      id: "groupStackedBarChart",\n      data: groupChartData\n    });\n  }, []);\n  return <>\n            <StackedChartContainer id="groupStackedBarChart" />\n        </>;\n}',...GroupStackedChart.parameters?.docs?.source}}};const __namedExportsOrder=["StackedChart","GroupStackedChart"]}}]);
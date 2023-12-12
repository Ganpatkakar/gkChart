"use strict";(self.webpackChunkreact_webpack_project=self.webpackChunkreact_webpack_project||[]).push([[331],{"./src/stories/stackedColumnChart.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MultiStackedChart:()=>MultiStackedChart,StackedChart:()=>StackedChart,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),gk_chart__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/gk-chart/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StackedChartContainer=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div`
  width: 100%;
  height: 500px;  
`,chartData={config:{title:"Stacked Column Chart",chartType:"stacked-column-chart",printEnable:!0},yAxis:{min:0,rowCount:5,title:"Hours"},categories:[{label:"January"},{label:"February"},{label:"March"},{label:"April"},{label:"May"},{label:"June"},{label:"July"},{label:"August"},{label:"September"}],data:[{dataSet:[{color:"#5d62b5",dataLabel:"Oil",dataPoints:[{value:5},{value:10},{value:8},{value:6},{value:2},{value:9},{value:19},{value:5},{value:2}]},{color:"#29c3be",dataLabel:"Gas",dataPoints:[{value:2},{value:6},{value:12},{value:15},{value:1},{value:5},{value:15},{value:25},{value:5}]},{color:"#f2726f",dataLabel:"Petrol",dataPoints:[{value:8},{value:4},{value:5},{value:5},{value:10},{value:15},{value:1},{value:10},{value:25}]}]}]},StackedChart=()=>((0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{(0,gk_chart__WEBPACK_IMPORTED_MODULE_1__.z2)({id:"stackedChart",data:chartData})}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(StackedChartContainer,{id:"stackedChart"})})),__WEBPACK_DEFAULT_EXPORT__={title:"Components/StackedColumnChart",component:StackedChart,tags:["autodocs"],decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{margin:"1em",padding:"2em",background:"#f8f7f7"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Story,{})})]};StackedChart.parameters={docs:{source:{code:'\nimport React, { useEffect } from "react";\nimport {GkBarChart} from \'gk-chart\';\n\nlet chartbar = {\n    config: {\n        "title": "Bar Chart",\n        "chartType": \'bar-chart\',\n        "printEnable": true\n    },\n    xAxis : {\n        min : 0,\n        numOfRows : 5,\n        title : "Hours"\n    },\n    categories : [\n        {label: "Travel & Leisure"},\n        {label: "Advertising/Marketing/PR"},\n        {label: "Other"},\n        {label: "Real Estate"},\n        {label: "Communications/Cable/Phone"},\n        {label: "Construction"},\n        {label: "Entertainment"},\n        {label: "Staffing Firm/Full Time/Temporary"},\n        {label: "Transportation/Logistics"},\n        {label: "Utilities"},\n        {label: "Aerospace/Defense Products"},\n        {label: "Banking/Finance/Securities"},\n        {label: "Consumer Products - Non-Durables"},\n        {label: "Distribution"}\n    ],\n    "data": [\n        {\n            "chartColor": "#5d62b5",\n            "dataLabel": "Data set 1",\n            "datapoints": [\n                {value: "41"},\n                {value: "39"},\n                {value: "38"},\n                {value: "32"},\n                {value: "26"},\n                {value: "25"},\n                {value: "25"},\n                {value: "24"},\n                {value: "23"},\n                {value: "22"},\n                {value: "18"},\n                {value: "16"},\n                {value: "15"},\n                {value: "13"}\n            ]\n        }\n    ]\n};\n\nexport const BarChart = () => {\n\n    useEffect(() => {\n        GkBarChart({\n            id: "barChart",\n            data: chartbar\n        })\n    }, []);\n\n    return (\n        <>\n            <div id="barChart" style={{width: "100%", height: "500px"}}></div>\n        </>\n    );\n};\n\n\n'}}};const chartData2={config:{title:"Group Stacked Column Chart",chartType:"stacked-column-chart",printEnable:!0},yAxis:{min:0,rowCount:5,title:"Hours"},categories:[{label:"January"},{label:"February"},{label:"March"},{label:"April"},{label:"May"},{label:"June"},{label:"July"},{label:"August"},{label:"September"}],data:[{dataSet:[{color:"#5d62b5",dataLabel:"Oil",dataPoints:[{value:5},{value:10},{value:8},{value:6},{value:2},{value:9},{value:19},{value:5},{value:2}]},{color:"#29c3be",dataLabel:"Gas",dataPoints:[{value:2},{value:6},{value:12},{value:15},{value:1},{value:5},{value:15},{value:25},{value:5}]},{color:"#f2726f",dataLabel:"Petrol",dataPoints:[{value:8},{value:4},{value:5},{value:5},{value:10},{value:15},{value:1},{value:10},{value:25}]}]},{dataSet:[{color:"#5d62b5",dataLabel:"Oil",dataPoints:[{value:15},{value:1},{value:18},{value:10},{value:12},{value:19},{value:9},{value:15},{value:22}]},{color:"#29c3be",dataLabel:"Gas",dataPoints:[{value:12},{value:16},{value:2},{value:5},{value:11},{value:25},{value:5},{value:21},{value:35}]},{color:"#f2726f",dataLabel:"Petrol",dataPoints:[{value:18},{value:24},{value:15},{value:35},{value:1},{value:1},{value:11},{value:16},{value:2}]}]}]},MultiStackedChart=()=>((0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{(0,gk_chart__WEBPACK_IMPORTED_MODULE_1__.z2)({id:"multiStackedChart",data:chartData2})}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(StackedChartContainer,{id:"multiStackedChart"})}));StackedChart.parameters={...StackedChart.parameters,docs:{...StackedChart.parameters?.docs,source:{originalSource:'() => {\n  useEffect(() => {\n    GkStackedChart({\n      id: "stackedChart",\n      data: chartData\n    });\n  }, []);\n  return <>\n            <StackedChartContainer id="stackedChart" />\n        </>;\n}',...StackedChart.parameters?.docs?.source}}},MultiStackedChart.parameters={...MultiStackedChart.parameters,docs:{...MultiStackedChart.parameters?.docs,source:{originalSource:'() => {\n  useEffect(() => {\n    GkStackedChart({\n      id: "multiStackedChart",\n      data: chartData2\n    });\n  }, []);\n  return <>\n            <StackedChartContainer id="multiStackedChart" />\n        </>;\n}',...MultiStackedChart.parameters?.docs?.source}}};const __namedExportsOrder=["StackedChart","MultiStackedChart"]}}]);
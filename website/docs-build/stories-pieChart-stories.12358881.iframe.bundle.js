"use strict";(self.webpackChunkreact_webpack_project=self.webpackChunkreact_webpack_project||[]).push([[919],{"./src/stories/pieChart.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{PieChart:()=>PieChart,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),gk_chart__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/gk-chart/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const PieChartContainer=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div`
  width: 100%;
  height: 300px;  
`,pieChartData={config:{title:"Pie Chart",chartType:"pie-chart",printEnable:!0},data:[{datapoints:[{label:"Jan",y:200,color:"#37509a"},{label:"Feb",y:90,color:"#940f00"},{label:"Mar",y:45,color:"#14d9a1"},{label:"Apr",y:70,color:"#d3c403"},{label:"May",y:95,color:"#ec40d5"}]}]},PieChart=()=>((0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{(0,gk_chart__WEBPACK_IMPORTED_MODULE_1__.wL)({id:"pieChartId",data:pieChartData})}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(PieChartContainer,{id:"pieChartId"})})),__WEBPACK_DEFAULT_EXPORT__={title:"Components/PieChart",component:PieChart,tags:["autodocs"],decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{margin:"1em",padding:"2em",background:"#f8f7f7"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Story,{})})]};PieChart.parameters={docs:{source:{code:'\nimport React, { useEffect } from "react";\nimport {GkPieChart} from \'gk-chart\';\n\nconst pieChartData = {\n    "config": {\n        "title": "Pie Chart",\n        "chartType": "pie-chart",\n        "printEnable": true\n    },\n    "data": [{\n        "datapoints": [{\n            "label": "Jan",\n            "y": 200,\n            "color": "#37509a"\n        }, {\n            "label": "Feb",\n            "y": 90,\n            "color": "#940f00"\n        }, {\n            "label": "Mar",\n            "y": 45,\n            "color": "#14d9a1"\n        }, {\n            "label": "Apr",\n            "y": 70,\n            "color": "#d3c403"\n        }, {\n            "label": "May",\n            "y": 95,\n            "color": "#ec40d5"\n        }\n        ]\n    }]\n};\n\nexport const PieChart = () => {\n\n    useEffect(() => {\n        GkPieChart({\n            id: "pieChartId",\n            data: pieChartData\n        })\n    }, []);\n\n    return (\n        <>\n            <div id="pieChartId" style={{width: "100%", height: "500px"}}></div>\n        </>\n    );\n}\n'}}},PieChart.parameters={...PieChart.parameters,docs:{...PieChart.parameters?.docs,source:{originalSource:'() => {\n  useEffect(() => {\n    GkPieChart({\n      id: "pieChartId",\n      data: pieChartData\n    });\n  }, []);\n  return <>\n            <PieChartContainer id="pieChartId" />\n        </>;\n}',...PieChart.parameters?.docs?.source}}};const __namedExportsOrder=["PieChart"]}}]);
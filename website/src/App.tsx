import React, { useEffect, useRef } from "react";
import { GKChart, GkLineChart } from 'gk-chart'
import {MultiLineChartComparison} from './testChart';

let datapoints = [
  {label: "January", y: 18},
  {label: "February", y: 28},
  {label: "March", y: 34},
  {label: "April", y: 42},
  {label: "May", y: 54},
  {label: "June", y: 55},
  {label: "July", y: 70},
  {label: "August", y: 60},
  {label: "September", y: 72},
  {label: "October", y: 76},
  {label: "November", y: 87},
  {label: "December", y: 92}
]

let chartline = {
  config: {
      title: "Line Chart",
      chartType: "line-chart",
      printEnable: true
  },
  yaxis : {
      min : 0,
      numOfRows : 5,
      title : "Hours"
  },
  data: [
      {
          chartColor: "#5d62b5",
          fill: false,
          dataLabel: "Data Set 1",
          datapoints: datapoints
      }
  ]
};

function App() {
  const cRef = useRef();
  useEffect(() => {
    if (cRef.current) {
      GkLineChart({
        id: "lineChartContainer",
        data: chartline
      });
    }
  }, []);

  return (
    <>
        <MultiLineChartComparison />
    </>
  );
}

export default App;

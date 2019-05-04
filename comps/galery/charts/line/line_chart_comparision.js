import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";

export default class LineChartComparision extends Component {
  componentDidMount = () => {
    console.log("componentDidMount:Chart");
    this.initialize();
  };

  initialize = () => {
    let datapoints = [
      {label: "January",y: 40},
      {label: "Feburary",y: 160},
      {label: "March",y: 80},
      {label: "April",y: 200},
      {label: "May",y: 140},
      {label: "June",y: 240},
      {label: "July",y: 120}
    ];
    let datapoints1 = [
      {label: "January",y: 20},
      {label: "Feb",y: 120},
      {label: "Mar",y: 210},
      {label: "Apr",y: 246},
      {label: "May",y: 96},
      {label: "Jun",y: 15},
      {label: "July",y: 70}
    ];

    var chartlineComparision = {
      config: {
        title: "Multi Line Comparision Chart",
        chartType: "line",
        printEnable: true
      },
      data: [
        {
          chartColor: "#00d554",
          fill: false,
          dataLabel: "Data Set 1",
          datapoints: datapoints
        },
        {
          chartColor: "#ff0000",
          fill: false,
          dataLabel: "Data Set 2",
          datapoints: datapoints1
        }
      ]
    };

    new GKChart({
      id: "chartlineComparision",
      data: chartlineComparision
    });
  };

  render() {
    return (
      <div className="">
        <div className="row">
          <div className="col-sm-12">
            <div className="chartDiv">
              <kakarChart
                id="chartlineComparision"
                style={{ height: "350px", width: "100%" }}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <Tabs defaultActiveKey={1} id="example-code">
              <Tab eventKey={1} title="HTML">
                <pre>
                  <xmp>{`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
    <kakarChart id="chartlineComparision" style="height:350px; width:100%;"></kakarChart>
    <script type="text/javascript" src="gk-chart.min.js"></script>
  </body>
</html>`}</xmp>
                </pre>
              </Tab>
              <Tab eventKey={2} title="JavaScript">
                <pre>
                  <code>{`
    let datapoints = [
      {
        label: "January",
        y: 40
      },
      {
        label: "Feburary",
        y: 180
      },
      {
        label: "March",
        y: 60
      },
      {
        label: "April",
        y: 300
      },
      {
        label: "May",
        y: 140
      },
      {
        label: "June",
        y: 240
      }
    ];
    let datapoints1 = [
      {
        label: "January",
        y: 20
      },
      {
        label: "Feb",
        y: 120
      },
      {
        label: "Mar",
        y: 210
      },
      {
        label: "Apr",
        y: 246
      },
      {
        label: "May",
        y: 96
      },
      {
        label: "Jun",
        y: 15
      }
    ];

    var chartlineComparision = {
      config: {
        title: "Multi Line Comparision Chart",
        chartType: "line",
        printEnable: true
      },
      data: [
        {
          chartColor: "#00d554",
          fill: false,
          dataLabel: "Data Set 1",
          datapoints: datapoints
        },
        {
          chartColor: "#ff0000",
          fill: false,
          dataLabel: "Data Set 2",
          datapoints: datapoints1
        }
      ]
    };

    new GKChart({
      id: "chartlineComparision",
      data: chartlineComparision
    }) ;
`}</code>
                </pre>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

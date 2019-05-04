import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";

export default class BarChart extends Component {
  componentDidMount = () => {
    console.log("componentDidMount:StepChart");
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
      {label: "July",y: 120},
      {label: "Aug",y: 80}
    ];

    var chartbar = {
      "config": {
        "title": "Bar Chart",
        "chartType": 'bar',
        "printEnable" : true
      },
      "data": [{
        "chartColor": "#00d554",
        "dataLabel" : "Data set 1",
        "datapoints": datapoints
      }]
    };

    new GKChart({id: "chartbar", data: chartbar});
  };

  render() {
    return (
      <div className="">
        <div className="row">
          <div className="col-sm-12">
            <div className="chartDiv">
              <kakarChart
                id="chartbar"
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
    <kakarChart id="chartbar" style="height:350px; width:100%;"></kakarChart>
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

    var chartbar = {
      "config": {
        "title": "Bar Chart",
        "chartType": 'bar'
      },
      "data": [{
        "chartColor": "#00d554",
        "dataLabel" : "Data set 1",
        "datapoints": datapoints
      }]
    };

    new GKChart({id: "chartbar", data: chartbar}) ;

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

import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";

export default class MeterChart extends Component {
  componentDidMount = () => {
    console.log("componentDidMount:StepChart");
    this.initialize();
  };

  initialize = () => {
    var meter = {
      "config": {
        "title": "Meter Gauge Chart",
        "chartType": "meter",
        "printEnable" : true
      },
      "data": [ /*Give as required data in given formate, syntax error with json will cause of error in charts*/ {
        "chartColor": "#ff0000",
        "datapoints": [{
          "label": "Poor",
          "y": 50,
          "color": "#ff0000"
        }, {
          "label": "Blw Avg",
          "y": 25,
          "color": "#ff0000"
        }, {
          "label": "Average",
          "y": 25,
          "color": "#00ff00"
        }, {
          "label": "Abv Avg",
          "y": 35,
          "color": "#00ff00"
        }, {
          "label": "Exceed",
          "y": 10,
          "color": "#00ff00"
        }],
        dataval: 77
      }]
    };

    new GKChart({id: "meter", data: meter}) ;
  };

  render() {
    return (
      <div className="">
        <div className="row">
          <div className="col-sm-12">
            <div className="chartDiv">
              <kakarChart
                id="meter"
                style={{ height: "500px", width: "100%" }}
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
    <kakarChart id="meter" style="height:350px; width:100%;"></kakarChart>
    <script type="text/javascript" src="gk-chart.min.js"></script>
  </body>
</html>`}</xmp>
                </pre>
              </Tab>
              <Tab eventKey={2} title="JavaScript">
                <pre>
                  <code>{`
    var meter = {
      "config": {
        "title": "Meter Gauge Chart",
        "chartType": "meter"
      },
      "data": [ /*Give as required data in given formate, syntax error with json will cause of error in charts*/ {
        "chartColor": "#ff0000",
        "datapoints": [{
          "label": "Poor",
          "y": 50,
          "color": "#ff0000"
        }, {
          "label": "Blw Avg",
          "y": 25,
          "color": "#ff0000"
        }, {
          "label": "Average",
          "y": 25,
          "color": "#00ff00"
        }, {
          "label": "Abv Avg",
          "y": 35,
          "color": "#00ff00"
        }, {
          "label": "Exceed",
          "y": 10,
          "color": "#00ff00"
        }],
        dataval: 77
      }]
    };

    new GKChart({id: "meter", data: meter}) ;
    
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

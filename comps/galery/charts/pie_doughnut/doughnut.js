import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";

export default class DoughnutChart extends Component {
  componentDidMount = () => {
    console.log("componentDidMount:StepChart");
    this.initialize();
  };

  initialize = () => {
    var doughnut = {
      "config": {
        "title": "Doughnut Chart",
        "chartType": "donut",
        "printEnable" : true
      },
      "data": [{
        "chartColor": "#ff0000",
        "datapoints": [{
          "label": "Jan",
          "y": 200,
          "color": "teal"
        }, {
          "label": "Feb",
          "y": 90,
          "color": "#b84335"
        }, {
          "label": "Mar",
          "y": 45,
          "color": "#fbbc05"
        }, {
          "label": "Apr",
          "y": 70,
          "color": "gray"
        }, {
          "label": "May",
          "y": 95,
          "color": "purple"
        }]
      }]
    };

    new GKChart({id: "doughnut", data: doughnut}) ;
  };

  render() {
    return (
      <div className="">
        <div className="row">
          <div className="col-sm-12">
            <div className="chartDiv">
              <kakarChart
                id="doughnut"
                style={{ height: "330px", width: "100%" }}
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
    <kakarChart id="doughnut" style="height:350px; width:100%;"></kakarChart>
    <script type="text/javascript" src="gk-chart.min.js"></script>
  </body>
</html>`}</xmp>
                </pre>
              </Tab>
              <Tab eventKey={2} title="JavaScript">
                <pre>
                  <code>{`
    var doughnut = {
      "config": {
        "title": "Doughnut Chart",
        "chartType": "donut"
      },
      "data": [{
        "chartColor": "#ff0000",
        "datapoints": [{
          "label": "Jan",
          "y": 200,
          "color": "teal"
        }, {
          "label": "Feb",
          "y": 90,
          "color": "#b84335"
        }, {
          "label": "Mar",
          "y": 45,
          "color": "#fbbc05"
        }, {
          "label": "Apr",
          "y": 70,
          "color": "gray"
        }, {
          "label": "May",
          "y": 95,
          "color": "purple"
        }]
      }]
    };

    new GKChart({id: "doughnut", data: doughnut}) ;

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

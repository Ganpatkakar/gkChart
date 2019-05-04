import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";

export default class PieChart extends Component {
  componentDidMount = () => {
    console.log("componentDidMount:StepChart");
    this.initialize();
  };

  initialize = () => {
    var piechart = {
      "config": {
        "title": "Pie Chart",
        "chartType": "pie",
        "printEnable" : true
      },
      "data": [{
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
        }
        ]
      }]
    };

    new GKChart({id: "piechart", data: piechart}) ;
  };

  render() {
    return (
      <div className="">
        <div className="row">
          <div className="col-sm-12">
            <div className="chartDiv">
              <kakarChart
                id="piechart"
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
    <kakarChart id="piechart" style="height:350px; width:100%;"></kakarChart>
    <script type="text/javascript" src="gk-chart.min.js"></script>
  </body>
</html>`}</xmp>
                </pre>
              </Tab>
              <Tab eventKey={2} title="JavaScript">
                <pre>
                  <code>{`
    var piechart = {
      "config": {
        "title": "Pie Chart",
        "chartType": "pie"
      },
      "data": [{
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
        }
        ]
      }]
    };

    new GKChart({id: "piechart", data: piechart}) ;

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

import Link from "next/link";
import {Tabs, Tab} from 'react-bootstrap';

export default class home extends React.Component {
  componentDidMount = () => {
    console.log("componentDidMount:Chart");
    this.initialize();
  };

  initialize = () => {
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
        y: 400
      },
      {
        label: "May",
        y: 140
      },
      {
        label: "June",
        y: 170
      }
    ];
    
    let chartSmoothLine = {
      config: {
        title: "Smooth Line Chart",
        chartType: "spline",
        printEnable: true
      },
      data: [
        {
          chartColor: "#00d554",
          fill: false,
          dataLabel: "Data Set 1",
          datapoints: datapoints
        }
      ]
    };

    new GKChart({
      id: "chartSmoothLine",
      data: chartSmoothLine
    });

    var imgDefer = document.getElementsByTagName('img');
    for (var i = 0; i < imgDefer.length; i++) {
        if (imgDefer[i].getAttribute('data-src')) {
            imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-src'));
        }
    }
    
  };

  render() {
    return (
      <div>
        <Banner />
        <Specialization />
        <Integration />
        <ChartExampleDemo />
        <div className={"ask-question"}>
          <div className={"container"}>
            <h2>Sounds Good Enough</h2>
            <p>Head towards our <Link href="/galery"><a className={"galery-link"}>Charts Galery</a></Link></p>
          </div>
        </div>
      </div>
    );
  }
}

const Banner = () => {
  return (
    <section className="container">
      <section className="row banner">
        <section className="col-md-5">
          <div className="logo-container">
            <img src="/static/images/logo.svg" />
          </div>
        </section>
        <section className="col-md-7">
          <h1>
            The Progressive
            <br />JavaScript Charts Library
          </h1>
          <button type="button" className="btn btn-why">
            <Link href="/galery"><a>SAMPLES</a></Link>
          </button>
          <button type="button" className="btn btn-download">
            <a href="/static/js/gk-chart.min.js" download>
              DOWNLOAD
            </a>
          </button>
          <button type="button" className="btn btn-git">
            <a target="blank" href="https://github.com/Ganpatkakar/Chartjs">
              <img src="/static/images/GK-Chart_Images/compressed/github.png" />GITHUB
            </a>
          </button>
        </section>
      </section>
    </section>
  );
};

const Specialization = () => {
  return (
    <div className="container-fluid specification-container">
      <div className="row specifica-advantages">
        <div className="container">
          <div className="row specification">

            <div className="col-sm-4 specification-content">
              <h1>Open Source</h1>
              <hr />
              <p>Open source code on Github. Share your technical knowledge to improve gk-charts.</p>
            </div>

            <div className="col-sm-4 specification-content">
              <h1>Live Examples</h1>
              <hr />
              <p>Easy to implement on your system with the help of live examples</p>
            </div>

            <div className="col-sm-4 specification-content">
              <h1>Compatible</h1>
              <hr />
              <p>Compatible with all the browsers. No other extrnal library is required.</p>
            </div>

            <div className="col-sm-4 specification-content">
              <h1>Responsive</h1>
              <hr />
              <p>Open source code on Github. Share your technical knowledge to improve gk-charts.</p>
            </div>

            <div className="col-sm-4 specification-content">
              <h1>HTML 5 Canvas</h1>
              <hr />
              <p>Easy to implement on your system with the help of live examples</p>
            </div>

            <div className="col-sm-4 specification-content">
              <h1>20 Plus Charts</h1>
              <hr />
              <p>Compatible with all the browsers. No other extrnal library is required.</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

const ChartExampleDemo = () => {
  return (
    <div className="container-fluid">
      <div className="row examples-container">
        <div className="container">
          <div className="heading-area">
            <h2 className="">Few Chart Examples</h2>
          </div>
          <div className="">
            <div className="row">
              <div className="col-sm-3">
                <div className="thumbnail">
                  <Link href="/galery/line-chart"><a>
                    <img
                      src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                      data-src="/static/images/GK-Chart_Images/compressed/lineChart.png"
                      alt="Lights"
                      style={{ width: "100%" }}
                    />
                    <div className="caption">
                      <p>Line Chart</p>
                    </div>
                  </a></Link>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="thumbnail">
                <Link href="/galery/bar-chart"><a>
                    <img
                    src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                      data-src="/static/images/GK-Chart_Images/compressed/barChart.png"
                      alt="Nature"
                      style={{ width: "100%" }}
                    />
                    <div className="caption">
                      <p>Bar Chart</p>
                    </div>
                  </a></Link>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="thumbnail">
                  <Link href="/galery/smooth-line-chart"><a>
                    <img
                    src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                      data-src="/static/images/GK-Chart_Images/compressed/smoothLine.png"
                      alt="Fjords"
                      style={{ width: "100%" }}
                    />
                    <div className="caption">
                      <p>Smooth Line Chart</p>
                    </div>
                  </a></Link>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="thumbnail">
                  <Link href="/galery/step-line-chart"><a>
                    <img
                    src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                      data-src="/static/images/GK-Chart_Images/compressed/stepChart.png"
                      alt="Fjords"
                      style={{ width: "100%" }}
                    />
                    <div className="caption">
                      <p>Step Line Chart</p>
                    </div>
                  </a></Link>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-3">
                <div className="thumbnail">
                  <Link href="/galery/line-chart-comparision"><a>
                    <img
                    src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                      data-src="/static/images/GK-Chart_Images/compressed/lineComparision.png"
                      alt="Lights"
                      style={{ width: "100%" }}
                    />
                    <div className="caption">
                      <p>Multi Line Comparision Chart</p>
                    </div>
                  </a></Link>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="thumbnail">
                  <Link href="/galery/bar-chart-comparision"><a>
                    <img
                    src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                      data-src="/static/images/GK-Chart_Images/compressed/barComparision.png"
                      alt="Nature"
                      style={{ width: "100%" }}
                    />
                    <div className="caption">
                      <p>Multi Bar Comparision Chart</p>
                    </div>
                  </a></Link>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="thumbnail">
                  <Link href="/galery/smooth-line-chart-comparision"><a>
                    <img
                    src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                      data-src="/static/images/GK-Chart_Images/compressed/smoothLineComparision.png"
                      alt="Fjords"
                      style={{ width: "100%" }}
                    />
                    <div className="caption">
                      <p>Multi Smooth Line Chart Comparision</p>
                    </div>
                  </a></Link>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="thumbnail">
                  <Link href="/galery/step-line-chart-comparision"><a>
                    <img
                    src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                      data-src="/static/images/GK-Chart_Images/compressed/stepComparision.png"
                      alt="Fjords"
                      style={{ width: "100%" }}
                    />
                    <div className="caption">
                      <p>Multi Step Line Chart Comparision</p>
                    </div>
                  </a></Link>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-3">
                <div className="thumbnail">
                  <Link href="/galery/line-chart-comparision-fill"><a>
                    <img
                    src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                      data-src="/static/images/GK-Chart_Images/compressed/LineFillComparision.png"
                      alt="Lights"
                      style={{ width: "100%" }}
                    />
                    <div className="caption">
                      <p>Multi Line Area Comparision Chart</p>
                    </div>
                  </a></Link>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="thumbnail">
                  <Link href="/galery/bar-smooth-chart-comparision"><a>
                    <img
                    src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                      data-src="/static/images/GK-Chart_Images/compressed/multiBarandSmoothLineComparision.png"
                      alt="Nature"
                      style={{ width: "100%" }}
                    />
                    <div className="caption">
                      <p>Multi Bar and Smooth Line Area Comparision Chart</p>
                    </div>
                  </a></Link>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="thumbnail">
                  <Link href="/galery/smooth-line-chart-comparision-fill"><a>
                    <img
                    src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                      data-src="/static/images/GK-Chart_Images/compressed/smoothLineFillComparision.png"
                      alt="Fjords"
                      style={{ width: "100%" }}
                    />
                    <div className="caption">
                      <p>Multi Smooth Line Area Chart Comparision</p>
                    </div>
                  </a></Link>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="thumbnail">
                  <Link href="/galery/step-line-chart-comparision-fill"><a>
                    <img
                    src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                      data-src="/static/images/GK-Chart_Images/compressed/stepFillComparision.png"
                      alt="Fjords"
                      style={{ width: "100%" }}
                    />
                    <div className="caption">
                      <p>Multi Step Line Area Chart Comparision</p>
                    </div>
                  </a></Link>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-3">
                <div className="thumbnail">
                  <Link href="/galery/pie-chart"><a>
                    <img
                    src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                      data-src="/static/images/GK-Chart_Images/compressed/pieChart.png"
                      alt="Lights"
                      style={{ width: "100%" }}
                    />
                    <div className="caption">
                      <p>Pie Chart</p>
                    </div>
                  </a></Link>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="thumbnail">
                  <Link href="/galery/doughnut-chart"><a>
                    <img
                    src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                      data-src="/static/images/GK-Chart_Images/compressed/doughnut.png"
                      alt="Nature"
                      style={{ width: "100%" }}
                    />
                    <div className="caption">
                      <p>Doughnut Chart</p>
                    </div>
                  </a></Link>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="thumbnail">
                  <Link href="/galery/meter-chart"><a>
                    <img
                    src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                      data-src="/static/images/GK-Chart_Images/compressed/meterChart.png"
                      alt="Fjords"
                      style={{ width: "100%" }}
                    />
                    <div className="caption">
                      <p>Meter Chart</p>
                    </div>
                  </a></Link>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="thumbnail">
                  <Link href="/galery/bar-chart-comparision"><a>
                    <img
                    src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                      data-src="/static/images/GK-Chart_Images/compressed/multiBar_LineChart.png"
                      alt="Fjords"
                      style={{ width: "100%" }}
                    />
                    <div className="caption">
                      <p>Multi Bar and Line Chart</p>
                    </div>
                  </a></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Integration = () => {
  return (
    <div className="container">
      <h2>Simple Integration</h2>
      <p>
        GK-Chart is real easy to integrate with html and Js. See below exaple
        and fell yourself the easiyness of Gk-Chart.
      </p>
      <div className="row">
        <div className="col-sm-6">

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
    <kakarChart id="chartSmoothLine" style="height:350px; width:100%;"></kakarChart>
    <script type="text/javascript" src="gk-chart.min.js"></script>
  </body>
</html>`}</xmp>
              </pre>
          </Tab>
          <Tab eventKey={2} title="JavaScript">
          <pre>
                <code>{`
let datapoints = [
  { label: "January", y: 40 },
  { label: "Feburary", y: 180 },
  { label: "March", y: 60 },
  { label: "April", y: 300 },
  { label: "May", y: 140 },
  { label: "June", y: 240 }
];

var chartSmoothLine = {
  config: {
    title: "Line Chart",
    chartType: "line",
    printEnable: true
  },
  data: [
    {
      chartColor: "#00d554",
      fill: false,
      dataLabel: "Data Set 1",
      datapoints: datapoints
    }
  ]
};

new GKChart({
  id: "chartSmoothLine",
  data: chartSmoothLine
}) ;

`}</code>
              </pre>
          </Tab>
        </Tabs>

        </div>
        <div className="col-sm-6">
          <div className="chartDiv">
            <kakarChart id="chartSmoothLine" style={{ height: "350px", width: "100%" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

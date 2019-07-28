import {
    GkLineChart,
    GkBarChart,
    GkColumnChart,
    GkDoughnutChart,
    GkMeterChart,
    GkPieChart,
    GkSmoothLineChart,
    GkStepChart,
    GkChart
} from "./index";

let datapoints = [
    {label: "January", y: 60},
    {label: "Feburary", y: 85},
    {label: "March", y: 80},
    {label: "April", y: 70},
    {label: "May", y: 65},
    {label: "June", y: 75},
    {label: "July", y: 95},
    {label: "Aug", y: 80}
];
let datapoints1 = [
    {label: "January", y: 18},
    {label: "Feb", y: 28},
    {label: "Mar", y: 34},
    {label: "Apr", y: 42},
    {label: "May", y: 54},
    {label: "Jun", y: 55},
    {label: "July", y: 70},
    {label: "Aug", y: 60}
];
let datapoints2 = [
    {label: "January", y: 20},
    {label: "Feb", y: 22},
    {label: "Mar", y: 27},
    {label: "Apr", y: 22},
    {label: "May", y: 29},
    {label: "Jun", y: 20},
    {label: "July", y: 50},
    {label: "Aug", y: 40}
];
let datapoints3 = [
    {label: "January", y: 16},
    {label: "Feb", y: 19},
    {label: "Mar", y: 21},
    {label: "Apr", y: 21},
    {label: "May", y: 24},
    {label: "Jun", y: 35},
    {label: "July", y: 40},
    {label: "Aug", y: 50}
];

(function DrawChart() {
    const lineChart = document.getElementById("line-chart");
    const chartLineFill = document.getElementById("chartLineFill");
    const lineChartComparision = document.getElementById("line-chart-comparision");
    const lineChartComparisionFill = document.getElementById("line-chart-comparision-fill");

    const barChart = document.getElementById("bar-chart");
    const barChartComparision = document.getElementById("bar-chart-comparision");
    const barChartWithSpline = document.getElementById("bar-chart-with-smooth-line-chart");


    const doughnutChart = document.getElementById("doughnut-chart");
    const meterChart = document.getElementById("meter-chart");
    const pieChartId = document.getElementById("pie-chart");

    const smoothChartId = document.getElementById("smooth-chart");
    const smoothChartComparisionId = document.getElementById("smooth-chart-comparision");
    const smoothChartFillId = document.getElementById("smooth-chart-fill");
    const smoothChartComparisionFillId = document.getElementById("smooth-chart-comparision-fill");


    const stepChartId = document.getElementById("step-chart");
    const stepChartComparisionId = document.getElementById("step-chart-comparision");
    const stepChartFillId = document.getElementById("step-chart-fill");
    const stepChartComparisionFillId = document.getElementById("step-chart-comparision-fill");

    if (lineChart) {

        let chartline = {
            config: {
                title: "Line Chart",
                chartType: "line-chart",
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

        GkChart({
            id: "line-chart",
            data: chartline
        });
    }

    if (chartLineFill) {

        let chartLineFill = {
            config: {
                title: "Line Chart Fill",
                chartType: "line-chart",
                printEnable: true
            },
            data: [
                {
                    chartColor: "#00d554",
                    fill: true,
                    dataLabel: "Data Set 1",
                    datapoints: datapoints
                }
            ]
        };

        GkChart({
            id: "chartLineFill",
            data: chartLineFill
        });
    }

    if (lineChartComparision) {

        var chartlineComparision = {
            config: {
                title: "Multi Line Comparision Chart",
                chartType: "line-chart",
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
                },
                {
                    chartColor: "#ff00dd",
                    fill: false,
                    dataLabel: "Data Set 3",
                    datapoints: datapoints2
                },
                {
                    chartColor: "#00f0dd",
                    fill: false,
                    dataLabel: "Data Set 4",
                    datapoints: datapoints3
                }
            ]
        };

        GkChart({
            id: "line-chart-comparision",
            data: chartlineComparision
        });
    }

    if (lineChartComparisionFill) {
        var chartlineComparisionFill = {
            config: {
                title: "Multi Line Comparision Chart",
                chartType: "line-chart",
                printEnable: true
            },
            data: [
                {
                    chartColor: "#00d554",
                    fill: true,
                    dataLabel: "Data Set 1",
                    datapoints: datapoints
                },
                {
                    chartColor: "#ff0000",
                    fill: true,
                    dataLabel: "Data Set 2",
                    datapoints: datapoints1
                },
                {
                    chartColor: "#ff00dd",
                    fill: true,
                    dataLabel: "Data Set 3",
                    datapoints: datapoints2
                },
                {
                    chartColor: "#00f0dd",
                    fill: true,
                    dataLabel: "Data Set 4",
                    datapoints: datapoints3
                }
            ]
        };

        GkChart({
            id: "line-chart-comparision-fill",
            data: chartlineComparisionFill
        });
    }

    if (barChart) {
        let chartbar = {
            "config": {
                "title": "Bar Chart",
                "chartType": 'bar-chart',
                "printEnable": true
            },
            "data": [{
                "chartColor": "#00d554",
                "dataLabel": "Data set 1",
                "datapoints": datapoints
            }]
        };

        GkChart({id: "bar-chart", data: chartbar});
    }

    if (barChartComparision) {
        const chartmultibar = {
            "config": {
                "title": "Multi Bar Chart Comparision",
                "chartType": 'bar-chart',
                "printEnable": true
            },
            "data": [
                {
                    chartColor: "teal",
                    dataLabel: "Data Set 1",
                    datapoints: datapoints3
                },
                {
                    chartColor: "green",
                    dataLabel: "Data Set 2",
                    datapoints: datapoints1
                },
                {
                    chartColor: "yellow",
                    dataLabel: "Data Set 3",
                    datapoints: datapoints2
                },
                {
                    chartColor: "#00f0dd",
                    dataLabel: "Data Set 4",
                    datapoints: datapoints
                }
            ]
        };

        GkChart({id: "bar-chart-comparision", data: chartmultibar});
    }

    if (barChartWithSpline) {

        var chartbar = {
            "config": {
                "title": "Bar Chart and Smooth Line Comparision",
                "chartType": 'multi-random',
                "printEnable": true
            },
            "data": [
                {
                "chartColor": "#00d554",
                "type": 'bar-chart',
                "dataLabel": "Data set 1",
                "datapoints": datapoints2
                },
                {
                    "chartColor": "teal",
                    "type": 'bar-chart',
                    "dataLabel": "Data set 2",
                    "datapoints": datapoints3
                },
                {
                    "chartColor": "blue",
                    "type": 'spline-chart',
                    "dataLabel": "Data set 3",
                    "datapoints": datapoints
                },
                {
                    "chartColor": "red",
                    "type": 'line-chart',
                    "dataLabel": "Data set 4",
                    "datapoints": datapoints1
                },
            ]
        };

        GkChart({id: "bar-chart-with-smooth-line-chart", data: chartbar});
    }

    if (doughnutChart) {
        const doughnut = {
            "config": {
                "title": "Doughnut Chart",
                "chartType": "doughnut-chart",
                "printEnable": true
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

        GkChart({id: "doughnut-chart", data: doughnut});
    }

    if (meterChart) {
        const meter = {
            "config": {
                "title": "Meter Gauge Chart",
                "chartType": "meter-chart",
                "printEnable": true
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

        GkChart({id: "meter-chart", data: meter});
    }

    if (pieChartId) {
        const pieChart = {
            "config": {
                "title": "Pie Chart",
                "chartType": "pie-chart",
                "printEnable": true
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

        GkChart({id: "pie-chart", data: pieChart});
    }

    if (smoothChartId) {

        const chartsmoothline = {
            "config": {
                "title": "Smooth Line Chart",
                "chartType": "smooth-line-chart",
                "printEnable": true
            },
            "data": [{
                "chartColor": "#00d554",
                "fill": false,
                "dataLabel": "Data Set 1",
                "datapoints": datapoints
            }]
        };

        GkChart({id: "smooth-chart", data: chartsmoothline});
    }

    if (smoothChartComparisionId) {

        const smoothLineComparision = {
            "config": {
                "title": "Multi Smooth Line Comparision Chart",
                "chartType": "smooth-line-chart",
                "printEnable": true
            },
            "data": [
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
                },
                {
                    chartColor: "#ff00dd",
                    fill: false,
                    dataLabel: "Data Set 3",
                    datapoints: datapoints2
                },
                {
                    chartColor: "#00f0dd",
                    fill: false,
                    dataLabel: "Data Set 4",
                    datapoints: datapoints3
                }
            ]
        };

        GkChart({id: "smooth-chart-comparision", data: smoothLineComparision});
    }

    if (smoothChartFillId) {

        const chartsmoothlinefill = {
            "config": {
                "title": "Smooth Line Chart",
                "chartType": "smooth-line-chart",
                "printEnable": true
            },
            "data": [{
                "chartColor": "#00d554",
                "fill": true,
                "dataLabel": "Data Set 1",
                "datapoints": datapoints
            }]
        };

        GkChart({id: "smooth-chart-fill", data: chartsmoothlinefill});
    }

    if (smoothChartComparisionFillId) {

        const smoothLineComparisionFill = {
            "config": {
                "title": "Multi Smooth Line Comparision Chart",
                "chartType": "smooth-line-chart",
                "printEnable": true
            },
            "data": [
                {
                    chartColor: "#00d554",
                    fill: true,
                    dataLabel: "Data Set 1",
                    datapoints: datapoints
                },
                {
                    chartColor: "#ff0000",
                    fill: true,
                    dataLabel: "Data Set 2",
                    datapoints: datapoints1
                },
                {
                    chartColor: "#ff00dd",
                    fill: true,
                    dataLabel: "Data Set 3",
                    datapoints: datapoints2
                },
                {
                    chartColor: "#00f0dd",
                    fill: true,
                    dataLabel: "Data Set 4",
                    datapoints: datapoints3
                }
            ]
        };

        GkChart({id: "smooth-chart-comparision-fill", data: smoothLineComparisionFill});
    }

    if(stepChartId) {

        const stepChart = {
            "config": {
                "title": "Step Chart",
                "chartType": "step-line-chart",
                "printEnable" : true
            },
            "data": [{
                "chartColor": "#00d554",
                "fill": false,
                "dataLabel" : "Data Set 1",
                "datapoints": datapoints
            }]
        };

        GkChart({
            id: "step-chart",
            data: stepChart
        });
    }

    if(stepChartComparisionId) {

        let stepChartComparision = {
            "config": {
                "title": "Multi Step Comparision Chart",
                "chartType": "step-line-chart",
                "printEnable" : true
            },
            "data": [
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
                },
                {
                    chartColor: "#ff00dd",
                    fill: false,
                    dataLabel: "Data Set 3",
                    datapoints: datapoints2
                },
                {
                    chartColor: "#00f0dd",
                    fill: false,
                    dataLabel: "Data Set 4",
                    datapoints: datapoints3
                }
            ]
        };

        GkChart({
            id: "step-chart-comparision",
            data: stepChartComparision
        }) ;
    }

    if(stepChartFillId) {

        const stepChartFill = {
            "config": {
                "title": "Step Chart",
                "chartType": "step-line-chart",
                "printEnable" : true
            },
            "data": [{
                "chartColor": "#00d554",
                "fill": true,
                "dataLabel" : "Data Set 1",
                "datapoints": datapoints
            }]
        };

        GkChart({
            id: "step-chart-fill",
            data: stepChartFill
        }) ;
    }

    if(stepChartComparisionFillId) {

        let stepChartComparisionFill = {
            "config": {
                "title": "Multi Step Comparision Chart",
                "chartType": "step-line-chart",
                "printEnable" : true
            },
            "data": [
                {
                    chartColor: "#00d554",
                    fill: true,
                    dataLabel: "Data Set 1",
                    datapoints: datapoints
                },
                {
                    chartColor: "#ff0000",
                    fill: true,
                    dataLabel: "Data Set 2",
                    datapoints: datapoints1
                },
                {
                    chartColor: "#ff00dd",
                    fill: true,
                    dataLabel: "Data Set 3",
                    datapoints: datapoints2
                },
                {
                    chartColor: "#00f0dd",
                    fill: true,
                    dataLabel: "Data Set 4",
                    datapoints: datapoints3
                }
            ]
        };

        GkChart({
            id: "step-chart-comparision-fill",
            data: stepChartComparisionFill
        }) ;
    }

})();

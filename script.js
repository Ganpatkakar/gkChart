import {GkChart} from "./index";
let datapoints = [
    {label: "January", y: 1},
    {label: "February", y: 2},
    {label: "March", y: 5},
    {label: "April", y: 7},
    {label: "May", y: 10},
    {label: "June", y: 12},
    {label: "July", y: 16},
    {label: "August", y: 12},
    {label: "September", y: 18},
    {label: "October", y: 15},
    {label: "November", y: 20},
    {label: "December", y: 22}
];
let datapoints1 = [
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
];
let datapoints2 = [
    {label: "January", y: 20},
    {label: "February", y: 22},
    {label: "March", y: 27},
    {label: "April", y: 22},
    {label: "May", y: 29},
    {label: "June", y: 20},
    {label: "July", y: 50},
    {label: "August", y: 40},
    {label: "September", y: 42},
    {label: "October", y: 46},
    {label: "November", y: 57},
    {label: "December", y: 52}
];
let datapoints3 = [
    {label: "January", y: 16},
    {label: "February", y: 19},
    {label: "March", y: 21},
    {label: "April", y: 21},
    {label: "May", y: 24},
    {label: "June", y: 35},
    {label: "July", y: 40},
    {label: "August", y: 50},
    {label: "September", y: 60},
    {label: "October", y: 70},
    {label: "November", y: 80},
    {label: "December", y: 90}
];

const dataPoint5 = [
    {label: "East", y: 1441290},
    {label: "West", y: 855912},
    {label: "South", y: 911404},
    {label: "North", y: 648136},
];
const dataPoint6 = [
    {label: "East", y: 1297430},
    {label: "West", y: 776485},
    {label: "South", y: 685352},
    {label: "North", y: 726791},
];const dataPoint7 = [
    {label: "East", y: 143860},
    {label: "West", y: 79427},
    {label: "South", y: 226052},
    {label: "North", y: 78655},
];

(function DrawChart() {
    const lineChart = document.getElementById("line-chart");
    const chartLineFill = document.getElementById("chartLineFill");
    const lineChartComparision = document.getElementById("line-chart-comparision");
    const lineChartComparisionFill = document.getElementById("line-chart-comparision-fill");

    const barChart = document.getElementById("bar-chart");
    const barChartComparision = document.getElementById("bar-chart-comparision");

    const columnChart = document.getElementById("column-chart");
    const columnChartComparision = document.getElementById("column-chart-comparision");

    const columnChartWithSpline = document.getElementById("column-chart-with-smooth-line-chart");
    const columnLineAndAriaChart = document.getElementById("column-line-and-aria-chart");
    const columnSmoothLineAndAriaChart = document.getElementById("column-smooth-line-and-aria-chart");

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
            yaxis : {
                min : 0,
                numOfRows : 5,
                title : "Hours"
            },
            data: [
                {
                    chartColor: "#5d62b5",
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
                },
                {
                    chartColor: "#29c3be",
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
                    chartColor: "#f2726f",
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
            yaxis : {
                min : 0,
                numOfRows : 5,
                title : "Hours"
            },
            data: [
                {
                    chartColor: "#5d62b5",
                    fill: true,
                    dataLabel: "Data Set 1",
                    datapoints: datapoints
                },
                {
                    chartColor: "#29c3be",
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
                    chartColor: "#f2726f",
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

    if (columnChart) {
        let chartbar = {
            "config": {
                "title": "Column Chart",
                "chartType": 'column-chart',
                "printEnable": true
            },
            yaxis : {
                min : 0,
                numOfRows : 5,
                title : "Hours"
            },
            "data": [{
                "chartColor": "#5d62b5",
                "dataLabel": "Data set 1",
                "datapoints": datapoints
            }]
        };

        GkChart({id: "column-chart", data: chartbar});
    }

    if (columnChartComparision) {
        const chartmultibar = {
            "config": {
                "title": "Multi Column Chart Comparision",
                "chartType": 'column-chart',
                "printEnable": true
            },
            yaxis : {
                min : 0,
                numOfRows : 5,
                title : "Hours"
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
                    chartColor: "#f2726f",
                    dataLabel: "Data Set 4",
                    datapoints: datapoints
                }
            ]
        };

        GkChart({id: "column-chart-comparision", data: chartmultibar});
    }

    if (barChart) {
        let chartbar = {
            "config": {
                "title": "Bar Chart",
                "chartType": 'bar-chart',
                "printEnable": true
            },
            yaxis : {
                min : 0,
                numOfRows : 5,
                title : "Hours"
            },
            xaxis : {
                min : 0,
                numOfRows : 5,
                title : "Hours"
            },
            "data": [{
                "chartColor": "#5d62b5",
                "dataLabel": "Data set 1",
                "datapoints": [
                    {
                        label: "Travel & Leisure",
                        y: "41"
                    },
                    {
                        label: "Advertising/Marketing/PR",
                        y: "39"
                    },
                    {
                        label: "Other",
                        y: "38"
                    },
                    {
                        label: "Real Estate",
                        y: "32"
                    },
                    {
                        label: "Communications/Cable/Phone",
                        y: "26"
                    },
                    {
                        label: "Construction",
                        y: "25"
                    },
                    {
                        label: "Entertainment",
                        y: "25"
                    },
                    {
                        label: "Staffing Firm/Full Time/Temporary",
                        y: "24"
                    },
                    {
                        label: "Transportation/Logistics",
                        y: "23"
                    },
                    {
                        label: "Utilities",
                        y: "22"
                    },
                    {
                        label: "Aerospace/Defense Products",
                        y: "18"
                    },
                    {
                        label: "Banking/Finance/Securities",
                        y: "16"
                    },
                    {
                        label: "Consumer Products - Non-Durables",
                        y: "15"
                    },
                    {
                        label: "Distribution",
                        y: "13"
                    }
                ]
            }]
        };

        GkChart({id: "bar-chart", data: chartbar});
    }

    if (barChartComparision) {
        const chartmultibar = {
            "config": {
                "title": "Bar Chart",
                "chartType": 'bar-chart',
                "printEnable": true
            },
            yaxis : {
                min : 0,
                numOfRows : 5,
                title : "Hours"
            },
            xaxis : {
                min : 0,
                numOfRows : 5,
                title : "Hours"
            },
            "data": [
                {
                    "chartColor": "#5d62b5",
                    "dataLabel": "Data set 1",
                    "datapoints": [
                        {
                            label: "Travel & Leisure",
                            y: "41"
                        },
                        {
                            label: "Advertising/Marketing/PR",
                            y: "39"
                        },
                        {
                            label: "Other",
                            y: "38"
                        },
                        {
                            label: "Real Estate",
                            y: "32"
                        },
                        {
                            label: "Communications/Cable/Phone",
                            y: "26"
                        },
                        {
                            label: "Construction",
                            y: "25"
                        },
                        {
                            label: "Entertainment",
                            y: "25"
                        },
                        {
                            label: "Staffing Firm/Full Time/Temporary",
                            y: "24"
                        },
                        {
                            label: "Transportation/Logistics",
                            y: "23"
                        },
                        {
                            label: "Utilities",
                            y: "22"
                        },
                        {
                            label: "Aerospace/Defense Products",
                            y: "18"
                        },
                        {
                            label: "Banking/Finance/Securities",
                            y: "16"
                        }
                    ]
                },
                {
                    "chartColor": "#29c3be",
                    "dataLabel": "Data set 1",
                    "datapoints": [
                        {
                            label: "Travel & Leisure",
                            y: "30"
                        },
                        {
                            label: "Advertising/Marketing/PR",
                            y: "20"
                        },
                        {
                            label: "Other",
                            y: "18"
                        },
                        {
                            label: "Real Estate",
                            y: "41"
                        },
                        {
                            label: "Communications/Cable/Phone",
                            y: "40"
                        },
                        {
                            label: "Construction",
                            y: "35"
                        },
                        {
                            label: "Entertainment",
                            y: "15"
                        },
                        {
                            label: "Staffing Firm/Full Time/Temporary",
                            y: "4"
                        },
                        {
                            label: "Transportation/Logistics",
                            y: "2"
                        },
                        {
                            label: "Utilities",
                            y: "28"
                        },
                        {
                            label: "Aerospace/Defense Products",
                            y: "38"
                        },
                        {
                            label: "Banking/Finance/Securities",
                            y: "36"
                        }
                    ]
                }
            ]
        };

        GkChart({id: "bar-chart-comparision", data: chartmultibar});
    }

    if (columnChartWithSpline) {

        var chartbar = {
            "config": {
                "title": "Bar Chart and Smooth Line Comparision",
                "chartType": 'combination-chart',
                "printEnable": true
            },
            yaxis : {
                min : 0,
                numOfRows : 5,
                title : "Hours"
            },
            "data": [
                {
                "chartColor": "#5d62b5",
                "type": 'column-chart',
                "dataLabel": "Data set 1",
                "datapoints": datapoints2
                },
                {
                    "chartColor": "teal",
                    "type": 'column-chart',
                    "dataLabel": "Data set 2",
                    "datapoints": datapoints3
                },
                {
                    "chartColor": "#ffc533",
                    "type": 'spline-chart',
                    "dataLabel": "Data set 3",
                    "datapoints": datapoints
                },
                {
                    "chartColor": "#29c3be",
                    "type": 'column-chart',
                    "dataLabel": "Data set 6",
                    "datapoints": datapoints
                },
                {
                    "chartColor": "#ff00dd",
                    "type": 'line-chart',
                    "dataLabel": "Data set 4",
                    "datapoints": datapoints1
                },
                {
                    "chartColor": "#f2726f",
                    "type": 'column-chart',
                    "dataLabel": "Data set 5",
                    "datapoints": datapoints1
                },
            ]
        };

        GkChart({id: "column-chart-with-smooth-line-chart", data: chartbar});
    }

    if (doughnutChart) {
        const doughnut = {
            "config": {
                "title": "Doughnut Chart",
                "chartType": "doughnut-chart",
                "printEnable": true
            },
            "data": [{
                "chartColor": "#29c3be",
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
                "chartColor": "#29c3be",
                "datapoints": [{
                    "label": "Poor",
                    "y": 50,
                    "color": "#29c3be"
                }, {
                    "label": "Blw Avg",
                    "y": 25,
                    "color": "#29c3be"
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
            yaxis : {
                min : 0,
                numOfRows : 5,
                title : "Hours"
            },
            "data": [{
                "chartColor": "#5d62b5",
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
            yaxis : {
                min : 0,
                numOfRows : 5,
                title : "Hours"
            },
            "data": [
                {
                    chartColor: "#5d62b5",
                    fill: false,
                    dataLabel: "Data Set 1",
                    datapoints: datapoints
                },
                {
                    chartColor: "#29c3be",
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
                    chartColor: "#f2726f",
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
            yaxis : {
                min : 0,
                numOfRows : 5,
                title : "Hours"
            },
            "data": [{
                "chartColor": "#5d62b5",
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
            yaxis : {
                min : 0,
                numOfRows : 5,
                title : "Hours"
            },
            "data": [
                {
                    chartColor: "#5d62b5",
                    fill: true,
                    dataLabel: "Data Set 1",
                    datapoints: datapoints
                },
                {
                    chartColor: "#29c3be",
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
                    chartColor: "#f2726f",
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
            yaxis : {
                min : 0,
                numOfRows : 5,
                title : "Hours"
            },
            "data": [{
                "chartColor": "#5d62b5",
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
            yaxis : {
                min : 0,
                numOfRows : 5,
                title : "Hours"
            },
            "data": [
                {
                    chartColor: "#5d62b5",
                    fill: false,
                    dataLabel: "Data Set 1",
                    datapoints: datapoints
                },
                {
                    chartColor: "#29c3be",
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
                    chartColor: "#f2726f",
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
            yaxis : {
                min : 0,
                numOfRows : 5,
                title : "Hours"
            },
            "data": [{
                "chartColor": "#5d62b5",
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
            yaxis : {
                min : 0,
                numOfRows : 5,
                title : "Hours"
            },
            "data": [
                {
                    chartColor: "#5d62b5",
                    fill: true,
                    dataLabel: "Data Set 1",
                    datapoints: datapoints
                },
                {
                    chartColor: "#29c3be",
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
                    chartColor: "#f2726f",
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

    if(columnLineAndAriaChart) {
        const chartbar = {
            "config": {
                "title": "Column line and aria chart",
                "chartType": 'combination-chart',
                "printEnable": true
            },
            yaxis : {
                min : 0,
                numOfRows : 5,
                title : "Hours"
            },
            "data": [
                {
                    "chartColor": "#5d62b5",
                    "type": 'column-chart',
                    "dataLabel": "Data set 1",
                    "datapoints": dataPoint5
                },
                {
                    "chartColor": "#29c3be",
                    "type": 'line-chart',
                    "dataLabel": "Data set 6",
                    "datapoints": dataPoint6
                },
                {
                    "chartColor": "#f2726f",
                    "type": 'line-chart',
                    "fill": true,
                    "dataLabel": "Data set 5",
                    "datapoints": dataPoint7
                },
            ]
        };

        GkChart({id: "column-line-and-aria-chart", data: chartbar});
    }

    if(columnSmoothLineAndAriaChart) {
        const chartbar = {
            "config": {
                "title": "Column line and aria chart",
                "chartType": 'combination-chart',
                "printEnable": true
            },
            yaxis : {
                min : 0,
                numOfRows : 5,
                title : "Hours"
            },
            "data": [
                {
                    "chartColor": "#5d62b5",
                    "type": 'column-chart',
                    "dataLabel": "Data set 1",
                    "datapoints": dataPoint5
                },
                {
                    "chartColor": "#29c3be",
                    "type": 'smooth-line-chart',
                    "dataLabel": "Data set 6",
                    "datapoints": dataPoint6
                },
                {
                    "chartColor": "#f2726f",
                    "type": 'smooth-line-chart',
                    "fill": true,
                    "dataLabel": "Data set 5",
                    "datapoints": dataPoint7
                },
            ]
        };

        GkChart({id: "column-smooth-line-and-aria-chart", data: chartbar});
    }

})();

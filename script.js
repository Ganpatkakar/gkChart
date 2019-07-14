import {
    GkLineChart,
    GkBarChart,
    GkColumnChart,
    GkDoughnutChart,
    GkMeterChart,
    GkPieChart,
    GkSmoothLineChart,
    GkStepChart
} from "./index";

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
        let datapoints = [
            {label: "January", y: 40},
            {label: "Feburary", y: 160},
            {label: "March", y: 80},
            {label: "April", y: 200},
            {label: "May", y: 140},
            {label: "June", y: 240},
            {label: "July", y: 120}
        ];

        let chartline = {
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

        GkLineChart({
            id: "line-chart",
            data: chartline
        });
    }

    if (chartLineFill) {
        let datapoints = [
            {label: "January", y: 40},
            {label: "Feburary", y: 160},
            {label: "March", y: 80},
            {label: "April", y: 200},
            {label: "May", y: 140},
            {label: "June", y: 240},
            {label: "July", y: 120}
        ];

        let chartLineFill = {
            config: {
                title: "Line Chart Fill",
                chartType: "line",
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

        GkLineChart({
            id: "chartLineFill",
            data: chartLineFill
        });
    }

    if (lineChartComparision) {
        let datapoints = [
            {label: "January", y: 40},
            {label: "Feburary", y: 160},
            {label: "March", y: 80},
            {label: "April", y: 200},
            {label: "May", y: 140},
            {label: "June", y: 240},
            {label: "July", y: 120}
        ];
        let datapoints1 = [
            {label: "January", y: 20},
            {label: "Feb", y: 120},
            {label: "Mar", y: 210},
            {label: "Apr", y: 246},
            {label: "May", y: 96},
            {label: "Jun", y: 15},
            {label: "July", y: 70}
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

        GkLineChart({
            id: "line-chart-comparision",
            data: chartlineComparision
        });
    }

    if (lineChartComparisionFill) {
        let datapoints = [
            {label: "January", y: 40},
            {label: "Feburary", y: 160},
            {label: "March", y: 80},
            {label: "April", y: 200},
            {label: "May", y: 140},
            {label: "June", y: 240},
            {label: "July", y: 120}
        ];
        let datapoints1 = [
            {label: "January", y: 20},
            {label: "Feb", y: 120},
            {label: "Mar", y: 210},
            {label: "Apr", y: 246},
            {label: "May", y: 96},
            {label: "Jun", y: 15},
            {label: "July", y: 70}
        ];
        var chartlineComparisionFill = {
            config: {
                title: "Multi Line Comparision Chart",
                chartType: "line",
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
                }
            ]
        };

        GkLineChart({
            id: "line-chart-comparision-fill",
            data: chartlineComparisionFill
        });
    }

    if (barChart) {
        let datapoints = [
            {label: "January", y: 40},
            {label: "Feburary", y: 160},
            {label: "March", y: 80},
            {label: "April", y: 200},
            {label: "May", y: 140},
            {label: "June", y: 240},
            {label: "July", y: 120},
            {label: "Aug", y: 80}
        ];

        let chartbar = {
            "config": {
                "title": "Bar Chart",
                "chartType": 'bar',
                "printEnable": true
            },
            "data": [{
                "chartColor": "#00d554",
                "dataLabel": "Data set 1",
                "datapoints": datapoints
            }]
        };

        GkBarChart({id: "bar-chart", data: chartbar});
    }

    if (barChartComparision) {
        let datapoints = [
            {label: "January", y: 40},
            {label: "Feburary", y: 160},
            {label: "March", y: 80},
            {label: "April", y: 200},
            {label: "May", y: 140},
            {label: "June", y: 240},
            {label: "July", y: 120},
            {label: "Aug", y: 80}
        ];
        let datapoints1 = [
            {label: "January", y: 20},
            {label: "Feb", y: 120},
            {label: "Mar", y: 210},
            {label: "Apr", y: 246},
            {label: "May", y: 96},
            {label: "Jun", y: 15},
            {label: "July", y: 70},
            {label: "Aug", y: 50}
        ];

        const chartmultibar = {
            "config": {
                "title": "Multi Bar Chart Comparision",
                "chartType": 'bar',
                "printEnable": true
            },
            "data": [{
                "chartColor": "#009788",
                "dataLabel": "Data set 1",
                "datapoints": datapoints
            }, {
                "chartColor": "#00d554",
                "dataLabel": "Data set 2",
                "datapoints": datapoints1
            }

            ]
        };

        GkBarChart({id: "bar-chart-comparision", data: chartmultibar});
    }

    if (barChartWithSpline) {
        let datapoints = [
            {label: "January", y: 40},
            {label: "Feburary", y: 160},
            {label: "March", y: 80},
            {label: "April", y: 200},
            {label: "May", y: 140},
            {label: "June", y: 240},
            {label: "July", y: 120},
            {label: "Aug", y: 80}
        ];
        let datapoints1 = [
            {label: "January", y: 20},
            {label: "Feb", y: 120},
            {label: "Mar", y: 210},
            {label: "Apr", y: 246},
            {label: "May", y: 96},
            {label: "Jun", y: 15},
            {label: "July", y: 70},
            {label: "Aug", y: 50}
        ];

        var chartbar = {
            "config": {
                "title": "Bar Chart and Smooth Line Comparision",
                "chartType": 'column',
                "printEnable": true
            },
            "data": [{
                "chartColor": "#00d554",
                "type": 'bar',
                "dataLabel": "Data set 1",
                "datapoints": datapoints1
            },
                {
                    "chartColor": "teal",
                    "type": 'bar',
                    "dataLabel": "Data set 2",
                    "datapoints": datapoints
                },
                {
                    "chartColor": "red",
                    "type": 'spline',
                    "fill": true,
                    "dataLabel": "Data set 3",
                    "datapoints": datapoints
                },
            ]
        };

        GkColumnChart({id: "bar-chart-with-smooth-line-chart", data: chartbar});
    }

    if (doughnutChart) {
        const doughnut = {
            "config": {
                "title": "Doughnut Chart",
                "chartType": "donut",
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

        GkDoughnutChart({id: "doughnut-chart", data: doughnut});
    }

    if (meterChart) {
        const meter = {
            "config": {
                "title": "Meter Gauge Chart",
                "chartType": "meter",
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

        GkMeterChart({id: "meter-chart", data: meter});
    }

    if (pieChartId) {
        const pieChart = {
            "config": {
                "title": "Pie Chart",
                "chartType": "pie",
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

        GkPieChart({id: "pie-chart", data: pieChart});
    }

    if (smoothChartId) {
        let datapoints = [
            {label: "January", y: 40},
            {label: "Feburary", y: 160},
            {label: "March", y: 80},
            {label: "April", y: 200},
            {label: "May", y: 140},
            {label: "June", y: 240},
            {label: "July", y: 120}
        ];

        const chartsmoothline = {
            "config": {
                "title": "Smooth Line Chart",
                "chartType": "spline",
                "printEnable": true
            },
            "data": [{
                "chartColor": "#00d554",
                "fill": false,
                "dataLabel": "Data Set 1",
                "datapoints": datapoints
            }]
        };

        GkSmoothLineChart({id: "smooth-chart", data: chartsmoothline});
    }

    if (smoothChartComparisionId) {
        let datapoints = [
            {label: "January", y: 40},
            {label: "Feburary", y: 160},
            {label: "March", y: 80},
            {label: "April", y: 200},
            {label: "May", y: 140},
            {label: "June", y: 240},
            {label: "July", y: 120}
        ];
        let datapoints1 = [
            {label: "January", y: 20},
            {label: "Feb", y: 120},
            {label: "Mar", y: 210},
            {label: "Apr", y: 246},
            {label: "May", y: 96},
            {label: "Jun", y: 15},
            {label: "July", y: 70}
        ];

        const smoothLineComparision = {
            "config": {
                "title": "Multi Smooth Line Comparision Chart",
                "chartType": "spline",
                "printEnable": true
            },
            "data": [{
                "chartColor": "#00d554",
                "dataLabel": "Data Set 1",
                "datapoints": datapoints
            }, {
                "chartColor": "#ff0000",
                "dataLabel": "Data Set 2",
                "ydataname": "Days",
                "datapoints": datapoints1
            }
            ]
        };

        GkSmoothLineChart({id: "smooth-chart-comparision", data: smoothLineComparision});
    }

    if (smoothChartFillId) {
        let datapoints = [
            {label: "January", y: 40},
            {label: "Feburary", y: 160},
            {label: "March", y: 80},
            {label: "April", y: 200},
            {label: "May", y: 140},
            {label: "June", y: 240},
            {label: "July", y: 120}
        ];

        const chartsmoothlinefill = {
            "config": {
                "title": "Smooth Line Chart",
                "chartType": "spline",
                "printEnable": true
            },
            "data": [{
                "chartColor": "#00d554",
                "fill": true,
                "dataLabel": "Data Set 1",
                "datapoints": datapoints
            }]
        };

        GkSmoothLineChart({id: "smooth-chart-fill", data: chartsmoothlinefill});
    }

    if (smoothChartComparisionFillId) {
        const datapoints = [
            {label: "January", y: 40},
            {label: "Feburary", y: 160},
            {label: "March", y: 80},
            {label: "April", y: 200},
            {label: "May", y: 140},
            {label: "June", y: 240},
            {label: "July", y: 120}
        ];
        const datapoints1 = [
            {label: "January", y: 20},
            {label: "Feb", y: 120},
            {label: "Mar", y: 210},
            {label: "Apr", y: 246},
            {label: "May", y: 96},
            {label: "Jun", y: 15},
            {label: "July", y: 70}
        ];

        const smoothLineComparisionFill = {
            "config": {
                "title": "Multi Smooth Line Comparision Chart",
                "chartType": "spline",
                "printEnable": true
            },
            "data": [{
                "chartColor": "#00d554",
                "dataLabel": "Data Set 1",
                "datapoints": datapoints,
                "fill": true
            }, {
                "chartColor": "#ff0000",
                "dataLabel": "Data Set 2",
                "ydataname": "Days",
                "datapoints": datapoints1,
                "fill": true
            }
            ]
        };

        GkSmoothLineChart({id: "smooth-chart-comparision-fill", data: smoothLineComparisionFill});
    }

    if(stepChartId) {
        let datapoints = [
            {label: "January",y: 40},
            {label: "Feburary",y: 160},
            {label: "March",y: 80},
            {label: "April",y: 200},
            {label: "May",y: 140},
            {label: "June",y: 240},
            {label: "July",y: 120}
        ];

        const stepChart = {
            "config": {
                "title": "Step Chart",
                "chartType": "step",
                "printEnable" : true
            },
            "data": [{
                "chartColor": "#00d554",
                "fill": false,
                "dataLabel" : "Data Set 1",
                "datapoints": datapoints
            }]
        };

        GkStepChart({
            id: "step-chart",
            data: stepChart
        });
    }

    if(stepChartComparisionId) {
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

        let stepChartComparision = {
            "config": {
                "title": "Multi Step Comparision Chart",
                "chartType": "step",
                "printEnable" : true
            },
            "data": [{
                "chartColor": "#00d554",
                "fill": false,
                "dataLabel" : "Data Set 1",
                "datapoints": datapoints
            }, {
                "chartColor": "#ff0000",
                "fill": false,
                "dataLabel" : "Data Set 2",
                "datapoints": datapoints1
            }]
        };

        GkStepChart({
            id: "step-chart-comparision",
            data: stepChartComparision
        }) ;
    }

    if(stepChartFillId) {
        let datapoints = [
            {label: "January",y: 40},
            {label: "Feburary",y: 160},
            {label: "March",y: 80},
            {label: "April",y: 200},
            {label: "May",y: 140},
            {label: "June",y: 240},
            {label: "July",y: 120}
        ];

        const stepChartFill = {
            "config": {
                "title": "Step Chart",
                "chartType": "step",
                "printEnable" : true
            },
            "data": [{
                "chartColor": "#00d554",
                "fill": true,
                "dataLabel" : "Data Set 1",
                "datapoints": datapoints
            }]
        };

        GkStepChart({
            id: "step-chart-fill",
            data: stepChartFill
        }) ;
    }

    if(stepChartComparisionFillId) {
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

        let stepChartComparisionFill = {
            "config": {
                "title": "Multi Step Comparision Chart",
                "chartType": "step",
                "printEnable" : true
            },
            "data": [{
                "chartColor": "#00d554",
                "fill": true,
                "dataLabel" : "Data Set 1",
                "datapoints": datapoints
            }, {
                "chartColor": "#ff0000",
                "fill": true,
                "dataLabel" : "Data Set 2",
                "datapoints": datapoints1
            }]
        };

        GkStepChart({
            id: "step-chart-comparision-fill",
            data: stepChartComparisionFill
        }) ;
    }

})();

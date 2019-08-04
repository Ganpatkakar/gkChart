// import { printOptions, printAction } from "./src/common/print_options";
const printOpts = require("./src/common/print_options");
const printOptions = printOpts.printOptions;
const printAction = printOpts.printAction;
// import ChartSurface from "./src/common/chart_surface";
const ChartSurface = require("./src/common/chart_surface");
// import { drawGrid, drawGraphicLinearYcord } from "./src/common/grid";
const Grids =  require("./src/common/grid");
const drawGrid =  Grids.drawGrid;
const drawGraphicLinearYcord =  Grids.drawGraphicLinearYcord;

const verticalGrids =  require("./src/common/vertical-grid");
const drawVerticalGrid =  verticalGrids.drawVerticalGrid;
const drawDocumentationDetails  =  verticalGrids.drawDocumentationDetails;
// import drawLineChart from "./src/common/drawChart/line_chart_canvas";
const drawLineChart = require("./src/common/drawChart/line_chart_canvas");
// import LineChartUpperCanvas from "./src/common/drawUpperChart/line_chart_upper_canvas";
const LineChartUpperCanvas =  require("./src/common/drawUpperChart/line_chart_upper_canvas");
// import ClearDetails from "./src/common/drawUpperChart/clear_upper_canvas_details";
const ClearDetails = require("./src/common/drawUpperChart/clear_upper_canvas_details");
// import DrawStepChart from "./src/common/drawChart/step_chart_canvas";
const DrawStepChart = require("./src/common/drawChart/step_chart_canvas");
// import drawSmoothLineChart from "./src/common/drawChart/smooth_line_chart_canvas";
const drawSmoothLineChart = require("./src/common/drawChart/smooth_line_chart_canvas");
// import drawBarChart from "./src/common/drawChart/bar_chart_canvas";
const drawBarChart = require("./src/common/drawChart/bar_chart_canvas");
const drawColumnChart = require("./src/common/drawChart/column_chart_canvas");
// import BarChartUpperCanvas from "./src/common/drawUpperChart/line_chart_upper_canvas";
const BarChartUpperCanvas = require("./src/common/drawUpperChart/bar_chart_upper_canvas");
const columnChartUpperCanvas = require("./src/common/drawUpperChart/column_chart_upper_canvas");
// import drawPieChart from "./src/common/drawChart/pie_chart_canvas";
const drawPieChart = require("./src/common/drawChart/pie_chart_canvas");
// import PieChartUpperCanvas from "./src/common/drawUpperChart/pie_chart_upper_canvas";
const PieChartUpperCanvas = require("./src/common/drawUpperChart/pie_chart_upper_canvas");
// import drawDoughnutChart from "./src/common/drawChart/doughnut_chart_canvas";
const drawDoughnutChart = require("./src/common/drawChart/doughnut_chart_canvas");
// import DoughnutChartUpperCanvas from "./src/common/drawUpperChart/doughnut_chart_upper_canvas";
const DoughnutChartUpperCanvas = require("./src/common/drawUpperChart/doughnut_chart_upper_canvas");
// import drawMeterChart from "./src/common/drawChart/meter_chart_canvas";
const drawMeterChart = require("./src/common/drawChart/meter_chart_canvas");

const enums = require("./src/invokeCharts/enums");

const GkLineChart = (data) => {
    try {
        // console.log("Start : lineChart");
        const chartSurface = new ChartSurface();

        let chartID = data.id;
        let chart = data.data;

        chart.container = chartID;
        chart.chartnumber = chartID;
        let ChartContainer = document.querySelector("#" + chart.container);
        chart.wid = ChartContainer.clientWidth - 10;
        chart.hei = ChartContainer.clientHeight - 33;

        let titleAndPrintButton = '';
        if (chart.config.title) {
            titleAndPrintButton += '<h2 class="chartTitle">' + chart.config.title + '</h2>';
        }
        titleAndPrintButton += printOptions(chartID, chart);
        ChartContainer.innerHTML = titleAndPrintButton;

        let ctx_base = chartSurface.preparePlot(chart.chartnumber, chart.wid, chart.hei, chart.container);
        (chart.yaxis === undefined) ? chart.yaxis = {} : null;
        if (!chart.yaxis.hasOwnProperty("max") || !chart.yaxis.hasOwnProperty("min")) {
            let max = parseInt(chart.data[0].datapoints[0].y);
            let min = parseInt(chart.data[0].datapoints[0].y);
            for (let i = 0; i < chart.data.length; i++) {
                for (let j = 0; j < chart.data[i].datapoints.length; j++) {
                    if (parseInt(chart.data[i].datapoints[j].y) < min) {
                        min = parseInt(chart.data[i].datapoints[j].y);
                    }
                    if (parseInt(chart.data[i].datapoints[j].y) > max) {
                        max = parseInt(chart.data[i].datapoints[j].y);
                    }
                }
            }
            if(!chart.yaxis.hasOwnProperty("max")) {
                const extraAddition = max < 100 ? 2 : 10;
                chart.yaxis.max = max + extraAddition;
            }
            if (!chart.yaxis.hasOwnProperty("min")) {
                chart.yaxis.min = (chart.yaxis.min >= 10) ? min -10 : min
            }
            console.log(chart.yaxis.max, chart.yaxis.min);
        }
        if (!chart.yaxis.numOfRows) {
            chart.yaxis.difference = Math.floor((chart.yaxis.max - chart.yaxis.min) / 8);
        } else {
            chart.yaxis.difference = Math.floor((chart.yaxis.max - chart.yaxis.min) / chart.yaxis.numOfRows);
        }
        let verticaldevisions = Math.floor((chart.yaxis.max - chart.yaxis.min) / chart.yaxis.difference);
        drawGrid(chart.chartnumber, verticaldevisions, ctx_base, chart.data);
        let canvas = 'canvas' + chart.chartnumber;
        let maxdata = [chart.yaxis.min, chart.yaxis.max];
        let linecord = [];
        for (let i = 0; i < chart.data.length; i++) {
            drawLineChart(canvas, ctx_base, verticaldevisions, chart.data[i], maxdata, chart.data[i].chartColor, linecord);
        }

        drawGraphicLinearYcord(canvas, ctx_base, verticaldevisions, chart);
        let ctx_upper = chartSurface.preparePlotUpper(chart.chartnumber, chart.wid, chart.hei, chart.container);
        ClearDetails(chart.chartnumber, ctx_upper, chart.container);
        LineChartUpperCanvas(chart.chartnumber, ctx_upper, linecord, chart.container, chart);
        printAction(chartID, chart);
    } catch (err) {
        console.error("Exception occurred in line chart module:  " + err.message);
    }
};

const GkStepChart = (data) => {
    try {
        // console.log("Start : stepChart");
        const chartSurface = new ChartSurface();

        let chartID = data.id;
        let chart = data.data;

        chart.container = chartID;
        chart.chartnumber = chartID;
        let ChartContainer = document.querySelector("#" + chart.container);
        chart.wid = ChartContainer.clientWidth - 10;
        chart.hei = ChartContainer.clientHeight - 33;

        let titleAndPrintButton = '';
        if (chart.config.title) {
            titleAndPrintButton += '<h2 class="chartTitle">' + chart.config.title + '</h2>';
        }
        titleAndPrintButton += printOptions(chartID, chart);
        ChartContainer.innerHTML = titleAndPrintButton;

        let ctx_base = chartSurface.preparePlot(chart.chartnumber, chart.wid, chart.hei, chart.container);
        (chart.yaxis === undefined) ? chart.yaxis = {} : null;
        if (!chart.yaxis.hasOwnProperty("max") || !chart.yaxis.hasOwnProperty("min")) {
            let max = parseInt(chart.data[0].datapoints[0].y);
            let min = parseInt(chart.data[0].datapoints[0].y);
            for (let i = 0; i < chart.data.length; i++) {
                for (let j = 0; j < chart.data[i].datapoints.length; j++) {
                    if (parseInt(chart.data[i].datapoints[j].y) < min) {
                        min = parseInt(chart.data[i].datapoints[j].y);
                    }
                    if (parseInt(chart.data[i].datapoints[j].y) > max) {
                        max = parseInt(chart.data[i].datapoints[j].y);
                    }
                }
            }
            if(!chart.yaxis.hasOwnProperty("max")) {
                const extraAddition = max < 100 ? 2 : 10;
                chart.yaxis.max = max + extraAddition;
            }
            if (!chart.yaxis.hasOwnProperty("min")) {
                chart.yaxis.min = (chart.yaxis.min >= 10) ? min -10 : min
            }
            console.log(chart.yaxis.max, chart.yaxis.min);
        }
        if (!chart.yaxis.numOfRows) {
            chart.yaxis.difference = Math.floor((chart.yaxis.max - chart.yaxis.min) / 8);
        } else {
            chart.yaxis.difference = Math.floor((chart.yaxis.max - chart.yaxis.min) / chart.yaxis.numOfRows);
        }
        let verticaldevisions = Math.floor((chart.yaxis.max - chart.yaxis.min) / chart.yaxis.difference);

        drawGrid(chart.chartnumber, verticaldevisions, ctx_base, chart.data);

        let canvas = 'canvas' + chart.chartnumber;
        drawGraphicLinearYcord(canvas, ctx_base, verticaldevisions, chart);
        let maxdata = [chart.yaxis.min, chart.yaxis.max];
        let linecord = [];
        for (let i = 0; i < chart.data.length; i++) {
            DrawStepChart(canvas, ctx_base, verticaldevisions, chart.data[i], maxdata, chart.data[i].chartColor, linecord);
        }

        let ctx_upper = chartSurface.preparePlotUpper(chart.chartnumber, chart.wid, chart.hei, chart.container);
        ClearDetails(chart.chartnumber, ctx_upper, chart.container);
        LineChartUpperCanvas(chart.chartnumber, ctx_upper, linecord, chart.container, chart);
        printAction(chartID, chart);
        // console.log("End : stepChart");
    } catch (error) {
        console.log("Error Occured while chart calling of step chart" + error.message)
    }
};

const GkSmoothLineChart = (data) => {
    try {
        // console.log("Start : splineChart");
        const chartSurface = new ChartSurface();

        let chartID = data.id;
        let chart = data.data;

        chart.container = chartID;
        chart.chartnumber = chartID;
        let ChartContainer = document.querySelector("#" + chart.container);
        chart.wid = ChartContainer.clientWidth - 10;
        chart.hei = ChartContainer.clientHeight - 33;

        let titleAndPrintButton = '';
        if (chart.config.title) {
            titleAndPrintButton += '<h2 class="chartTitle">' + chart.config.title + '</h2>';
        }
        titleAndPrintButton += printOptions(chartID, chart);
        ChartContainer.innerHTML = titleAndPrintButton;

        let ctx_base = chartSurface.preparePlot(chart.chartnumber, chart.wid, chart.hei, chart.container);

        (chart.yaxis === undefined) ? chart.yaxis = {} : null;
        if (!chart.yaxis.hasOwnProperty("max") || !chart.yaxis.hasOwnProperty("min")) {
            let max = parseInt(chart.data[0].datapoints[0].y);
            let min = parseInt(chart.data[0].datapoints[0].y);
            for (let i = 0; i < chart.data.length; i++) {
                for (let j = 0; j < chart.data[i].datapoints.length; j++) {
                    if (parseInt(chart.data[i].datapoints[j].y) < min) {
                        min = parseInt(chart.data[i].datapoints[j].y);
                    }
                    if (parseInt(chart.data[i].datapoints[j].y) > max) {
                        max = parseInt(chart.data[i].datapoints[j].y);
                    }
                }
            }
            if(!chart.yaxis.hasOwnProperty("max")) {
                const extraAddition = max < 100 ? 2 : 10;
                chart.yaxis.max = max + extraAddition;
            }
            if (!chart.yaxis.hasOwnProperty("min")) {
                chart.yaxis.min = (chart.yaxis.min >= 10) ? min -10 : min
            }
            console.log(chart.yaxis.max, chart.yaxis.min);
        }
        if (!chart.yaxis.numOfRows) {
            chart.yaxis.difference = Math.floor((chart.yaxis.max - chart.yaxis.min) / 8);
        } else {
            chart.yaxis.difference = Math.floor((chart.yaxis.max - chart.yaxis.min) / chart.yaxis.numOfRows);
        }
        let verticaldevisions = Math.floor((chart.yaxis.max - chart.yaxis.min) / chart.yaxis.difference);
        drawGrid(chart.chartnumber, verticaldevisions, ctx_base, chart.data);
        let canvas = 'canvas' + chart.chartnumber;
        drawGraphicLinearYcord(canvas, ctx_base, verticaldevisions, chart);
        let maxdata = [chart.yaxis.min, chart.yaxis.max];
        let linecord = [];
        for (let i = 0; i < chart.data.length; i++) {
            drawSmoothLineChart(canvas, ctx_base, verticaldevisions, chart.data[i], maxdata, chart.data[i].chartColor, linecord);
        }

        let ctx_upper = chartSurface.preparePlotUpper(chart.chartnumber, chart.wid, chart.hei, chart.container);
        ClearDetails(chart.chartnumber, ctx_upper, chart.container);
        LineChartUpperCanvas(chart.chartnumber, ctx_upper, linecord, chart.container, chart);
        printAction(chartID, chart);
        // console.log("End : splineChart");
    } catch (err) {
        console.error("Exception occurred in line chart module:  " + err.message);
    }
};

const GkBarChart = (data) => {
    try {
        // console.log("Start : barChart");
        const chartSurface = new ChartSurface();

        let chartID = data.id;
        let chart = data.data;

        chart.container = chartID;
        chart.chartnumber = chartID;
        let ChartContainer = document.querySelector("#" + chart.container);
        chart.wid = ChartContainer.clientWidth - 10;
        chart.hei = ChartContainer.clientHeight - 33;

        let titleAndPrintButton = '';
        if (chart.config.title) {
            titleAndPrintButton += '<h2 class="chartTitle">' + chart.config.title + '</h2>';
        }
        titleAndPrintButton += printOptions(chartID, chart);
        ChartContainer.innerHTML = titleAndPrintButton;

        let ctx_base = chartSurface.preparePlot(chart.chartnumber, chart.wid, chart.hei, chart.container);
        !chart.yaxis ? chart.yaxis = {} : null;

        if (!chart.yaxis.hasOwnProperty("max") || !chart.yaxis.hasOwnProperty("min")) {
            let max = parseInt(chart.data[0].datapoints[0].y);
            let min = parseInt(chart.data[0].datapoints[0].y);
            for (let i = 0; i < chart.data.length; i++) {
                for (let j = 0; j < chart.data[i].datapoints.length; j++) {
                    if (parseInt(chart.data[i].datapoints[j].y) < min) {
                        min = parseInt(chart.data[i].datapoints[j].y);
                    }
                    if (parseInt(chart.data[i].datapoints[j].y) > max) {
                        max = parseInt(chart.data[i].datapoints[j].y);
                    }
                }
            }
            if(!chart.yaxis.hasOwnProperty("max")) {
                const extraAddition = max < 100 ? 2 : 10;
                chart.yaxis.max = max + extraAddition;
            }
            if (!chart.yaxis.hasOwnProperty("min")) {
                chart.yaxis.min = (chart.yaxis.min >= 10) ? min -10 : min
            }
            // console.log(chart.yaxis.max, chart.yaxis.min);
        }

        let maxTextWidth = chart.data[0].datapoints.reduce((acc, value) => {
            const labelTextWidth = ctx_base.measureText(value.label).width;
            if (labelTextWidth > acc) {
                acc = labelTextWidth + 20;
            }
            return acc;
        }, 0);

        console.log(maxTextWidth);

        if (!chart.yaxis.numOfRows) {
            chart.yaxis.difference = Math.floor((chart.yaxis.max - chart.yaxis.min) / 8);
        } else {
            chart.yaxis.difference = Math.floor((chart.yaxis.max - chart.yaxis.min) / chart.yaxis.numOfRows);
        }
        // let verticaldevisions = Math.floor((chart.yaxis.max - chart.yaxis.min) / chart.yaxis.difference);
        let horizontalNr = chart.xaxis.numOfRows ? chart.xaxis.numOfRows : 8;
        let canvas = 'canvas' + chart.chartnumber;
        drawVerticalGrid(chart.chartnumber, horizontalNr, ctx_base, chart.data, maxTextWidth);
        drawDocumentationDetails(canvas, ctx_base, horizontalNr, chart, maxTextWidth);
        let rangedata = [chart.yaxis.min, chart.yaxis.max];
        let linecord = [];
        let nextcurve = 0;
        let barChartCount = chart.data.length;
        for (let i = 0; i < chart.data.length; i++) {
            const barChartProps = {
                canvas,
                ctx_base,
                horizontalNr,
                data: chart.data[i],
                rangedata,
                nextcurve,
                chartColor: chart.data[i].chartColor,
                linecord,
                barChartCount,
                chartDataLength: chart.data.length,
                maxTextWidth
            };
            const rData = drawBarChart(barChartProps);
            nextcurve += rData.barHeight + 5;
        }
        let ctx_upper = chartSurface.preparePlotUpper(chart.chartnumber, chart.wid, chart.hei, chart.container);
        ClearDetails(chart.chartnumber, ctx_upper, chart.container);
        BarChartUpperCanvas(chart.chartnumber, ctx_upper, linecord, chart.container, chart, maxTextWidth);
        printAction(chartID, chart);
        // console.log("End : barChart");
    } catch (err) {
        console.error("Exception occurred in bar chart module:  " + err.message);
    }
};

const GkColumnChart = (data) => {
    try {
        // console.log("Start : barChart");
        const chartSurface = new ChartSurface();

        let chartID = data.id;
        let chart = data.data;

        chart.container = chartID;
        chart.chartnumber = chartID;
        let ChartContainer = document.querySelector("#" + chart.container);
        chart.wid = ChartContainer.clientWidth - 10;
        chart.hei = ChartContainer.clientHeight - 33;

        let titleAndPrintButton = '';
        if (chart.config.title) {
            titleAndPrintButton += '<h2 class="chartTitle">' + chart.config.title + '</h2>';
        }
        titleAndPrintButton += printOptions(chartID, chart);
        ChartContainer.innerHTML = titleAndPrintButton;

        let ctx_base = chartSurface.preparePlot(chart.chartnumber, chart.wid, chart.hei, chart.container);
        !chart.yaxis ? chart.yaxis = {} : null;

        if (!chart.yaxis.hasOwnProperty("max") || !chart.yaxis.hasOwnProperty("min")) {
            let max = parseInt(chart.data[0].datapoints[0].y);
            let min = parseInt(chart.data[0].datapoints[0].y);
            for (let i = 0; i < chart.data.length; i++) {
                for (let j = 0; j < chart.data[i].datapoints.length; j++) {
                    if (parseInt(chart.data[i].datapoints[j].y) < min) {
                        min = parseInt(chart.data[i].datapoints[j].y);
                    }
                    if (parseInt(chart.data[i].datapoints[j].y) > max) {
                        max = parseInt(chart.data[i].datapoints[j].y);
                    }
                }
            }
            if(!chart.yaxis.hasOwnProperty("max")) {
                const extraAddition = max < 100 ? 2 : 10;
                chart.yaxis.max = max + extraAddition;
            }
            if (!chart.yaxis.hasOwnProperty("min")) {
                chart.yaxis.min = (chart.yaxis.min >= 10) ? min -10 : min
            }
            console.log(chart.yaxis.max, chart.yaxis.min);
        }
        if (!chart.yaxis.numOfRows) {
            chart.yaxis.difference = Math.floor((chart.yaxis.max - chart.yaxis.min) / 8);
        } else {
            chart.yaxis.difference = Math.floor((chart.yaxis.max - chart.yaxis.min) / chart.yaxis.numOfRows);
        }
        let verticaldevisions = Math.floor((chart.yaxis.max - chart.yaxis.min) / chart.yaxis.difference);
        drawGrid(chart.chartnumber, verticaldevisions, ctx_base, chart.data);
        let canvas = 'canvas' + chart.chartnumber;
        let range = [chart.yaxis.min, chart.yaxis.max];
        let columnCords = [];
        let nextcurve = 0;
        let barChartCount = chart.data.length;
        for (let i = 0; i < chart.data.length; i++) {
            const props = {
                canvas,
                ctx_base,
                verticaldevisions,
                data: chart.data[i],
                range,
                nextcurve,
                chartColor: chart.data[i].chartColor,
                columnCords,
                columnChartCount: barChartCount
            };
            const rData = drawColumnChart(props);
            nextcurve += rData.barwidth + 5;
        }
        drawGraphicLinearYcord(canvas, ctx_base, verticaldevisions, chart);
        let ctx_upper = chartSurface.preparePlotUpper(chart.chartnumber, chart.wid, chart.hei, chart.container);
        ClearDetails(chart.chartnumber, ctx_upper, chart.container);
        columnChartUpperCanvas(chart.chartnumber, ctx_upper, columnCords, chart.container, chart);
        printAction(chartID, chart);
        // console.log("End : barChart");
    } catch (err) {
        console.error("Exception occurred in bar chart module:  " + err.message);
    }
};

const GkPieChart = (data) => {
    try {
        // console.log("Start : pieChart");
        const chartSurface = new ChartSurface();

        let chartID = data.id;
        let chart = data.data;

        chart.container = chartID;
        var chartContainerSelector = document.querySelector("#" + chart.container);
        let ChartContainer = document.querySelector("#" + chart.container);
        chart.chartnumber = chartID;
        chart.wid = chartContainerSelector.clientWidth;
        chart.hei = chartContainerSelector.clientHeight - 33;
        let chartHeight = chart.hei;
        if (chart.hei > chart.wid) {
            chartHeight = chart.wid;
        }
        let titleAndPrintButton = '';
        if (chart.config.title) {
            titleAndPrintButton += `<h2 class="chartTitle">${chart.config.title}</h2>`;
        }
        titleAndPrintButton += printOptions(chartID, chart);
        ChartContainer.innerHTML = titleAndPrintButton;

        let ctx_base = chartSurface.preparePlot(chart.chartnumber, chart.wid, chartHeight, chart.container);
        let canvas = 'canvas' + chart.chartnumber;
        var linecord = [];
        for (var i = 0; i < chart.data.length; i++) {
            drawPieChart(canvas, ctx_base, chart.data[i], linecord);
        }
        let ctx_upper = chartSurface.preparePlotUpper(chart.chartnumber, chart.wid, chartHeight, chart.container);
        PieChartUpperCanvas(chart.chartnumber, ctx_upper, linecord, chart.container);

        let pieChartDataDisplay = '<ul style="list-style: none; width: ' + chart.wid + 'px; padding: 0px; display: inline-block; position: relative; top: ' + chart.hei + 'px">';
        for (let i = 0; i < chart.data[0].datapoints.length; i++) {
            pieChartDataDisplay +=
                `<li style="width: 50%; float: left">
                    <span style="width:20px; height: 10px; display: inline-block; margin-right: 10px;
                        background-color:${chart.data[0].datapoints[i].color};
                        border: 1px solid black; border-radius: 2px;"> </span>
                    <span>${chart.data[0].datapoints[i].label} : ${chart.data[0].datapoints[i].y}</span>
                </li>`
        }
        pieChartDataDisplay += '</ul>';
        chartContainerSelector.insertAdjacentHTML('beforeend', pieChartDataDisplay);
        printAction(chartID, chart);
        // console.log("End : pieChart");
    } catch (err) {
        console.error("Exception occurred in pie chart module:  " + err.message);
    }
};

const GkDoughnutChart = (data) => {
    try {
        // console.log("Start : donutChart");
        const chartSurface = new ChartSurface();

        let chartID = data.id;
        let chart = data.data;

        chart.container = chartID;
        let chartContainerSelector = document.querySelector("#" + chart.container);
        let ChartContainer = document.querySelector("#" + chart.container);
        chart.chartnumber = chartID;
        chart.wid = chartContainerSelector.clientWidth;
        chart.hei = chartContainerSelector.clientHeight - 33;

        let chartHeight = chart.hei;

        if (chart.hei > chart.wid) {
            chartHeight = chart.wid;
        }

        let titleAndPrintButton = '';
        if (chart.config.title) {
            titleAndPrintButton += '<h2 class="chartTitle">' + chart.config.title + '</h2>';
        }
        titleAndPrintButton += printOptions(chartID, chart);
        ChartContainer.innerHTML = titleAndPrintButton;
        let ctx_base = chartSurface.preparePlot(chart.chartnumber, chart.wid, chartHeight, chart.container);
        let canvas = 'canvas' + chart.chartnumber;
        let linecord = [];
        // let linewidth = 60;
        for (let i = 0; i < chart.data.length; i++) {
            drawDoughnutChart(canvas, ctx_base, chart.data[i], linecord, chartHeight);
        }
        let ctx_upper = chartSurface.preparePlotUpper(chart.chartnumber, chart.wid, chartHeight, chart.container);
        DoughnutChartUpperCanvas(chart.chartnumber, ctx_upper, linecord, chart.container);

        var pieChartDataDisplay = '<ul style="list-style: none; width: ' + chart.wid + 'px; padding: 0px; display: inline-block; position: relative; top: ' + chart.hei + 'px">';
        for (let i = 0; i < chart.data[0].datapoints.length; i++) {
            pieChartDataDisplay +=
                `<li style="width: 50%; float: left">
                    <span style="width:20px; height: 10px; display: inline-block; margin-right: 10px; 
                        background-color: ${chart.data[0].datapoints[i].color}; border: 1px solid black; border-radius: 2px;"> </span>
                    <span>${chart.data[0].datapoints[i].label} : ${ chart.data[0].datapoints[i].y }</span>
                </li>`
        }
        pieChartDataDisplay += '</ul>';
        chartContainerSelector.insertAdjacentHTML('beforeend', pieChartDataDisplay);
        printAction(chartID, chart);
        // console.log("End : donutChart");
    } catch (err) {
        console.error("Exception occurred in donut chart module:  " + err.message);
    }
};

const GkMeterChart = (data) => {
    try {
        // console.log("Start : meterChart");
        const chartSurface = new ChartSurface();

        let chartID = data.id;
        let chart = data.data;

        chart.container = chartID;
        chart.chartnumber = chartID;
        let ChartContainer = document.querySelector("#" + chart.container);
        chart.wid = ChartContainer.clientWidth - 10;
        chart.hei = ChartContainer.clientHeight - 33;

        let titleAndPrintButton = '';
        if (chart.config.title) {
            titleAndPrintButton += '<h2 class="chartTitle">' + chart.config.title + '</h2>';
        }
        titleAndPrintButton += printOptions(chartID, chart);
        ChartContainer.innerHTML = titleAndPrintButton;
        let ctx_base = chartSurface.preparePlot(chart.chartnumber, chart.wid, chart.hei, chart.container);
        let canvas = 'canvas' + chart.chartnumber;
        let maxdata = [];
        maxdata[0] = maxdata[1] = chart.data[0].datapoints[0].y;
        let meterTotal = 0;
        for (let j = 0; j < chart.data[0].datapoints.length; j++) {
            if (chart.data[0].datapoints[j].y < maxdata[0]) {
                maxdata[0] = chart.data[0].datapoints[j].y;
            }
            if (chart.data[0].datapoints[j].y > maxdata[1]) {
                maxdata[1] = chart.data[0].datapoints[j].y;
            }
            meterTotal += chart.data[0].datapoints[j].y;
        }
        // console.log("meterTotal " + meterTotal);
        let ChartDataToShow = chart.data[0].dataval;
        // let linewidth = 50;
        ChartDataToShow = Math.round((ChartDataToShow / meterTotal) * 100);
        //// console.log(ChartDataToShow);
        drawMeterChart(canvas, ctx_base, 10, chart.data[0], maxdata, chart.data[0].chartColor, ChartDataToShow);
        printAction(chartID, chart);
        // console.log("End : meterChart");
    } catch (err) {
        console.error("Exception occurred in  meter chart module:  " + err.message);
    }
};

const GkRandomChart = (data) => {
    try {
        // console.log("Start : barChart");
        const chartSurface = new ChartSurface();

        let chartID = data.id;
        let chart = data.data;

        chart.container = chartID;
        chart.chartnumber = chartID;
        let ChartContainer = document.querySelector("#" + chart.container);
        chart.wid = ChartContainer.clientWidth - 10;
        chart.hei = ChartContainer.clientHeight - 33;

        let titleAndPrintButton = '';
        if (chart.config.title) {
            titleAndPrintButton += '<h2 class="chartTitle">' + chart.config.title + '</h2>';
        }
        titleAndPrintButton += printOptions(chartID, chart);
        ChartContainer.innerHTML = titleAndPrintButton;
        let ctx_base = chartSurface.preparePlot(chart.chartnumber, chart.wid, chart.hei, chart.container);
        (chart.yaxis === undefined) ? chart.yaxis = {} : null;
        if (!chart.yaxis.hasOwnProperty("max") || !chart.yaxis.hasOwnProperty("min")) {
            let max = parseInt(chart.data[0].datapoints[0].y);
            let min = parseInt(chart.data[0].datapoints[0].y);
            for (let i = 0; i < chart.data.length; i++) {
                for (let j = 0; j < chart.data[i].datapoints.length; j++) {
                    if (parseInt(chart.data[i].datapoints[j].y) < min) {
                        min = parseInt(chart.data[i].datapoints[j].y);
                    }
                    if (parseInt(chart.data[i].datapoints[j].y) > max) {
                        max = parseInt(chart.data[i].datapoints[j].y);
                    }
                }
            }
            if(!chart.yaxis.hasOwnProperty("max")) {
                const extraAddition = max < 100 ? 2 : 10;
                chart.yaxis.max = max + extraAddition;
            }
            if (!chart.yaxis.hasOwnProperty("min")) {
                chart.yaxis.min = (chart.yaxis.min >= 10) ? min -10 : min
            }
            console.log(chart.yaxis.max, chart.yaxis.min);
        }
        if (!chart.yaxis.numOfRows) {
            chart.yaxis.difference = Math.floor((chart.yaxis.max - chart.yaxis.min) / 8);
        } else {
            chart.yaxis.difference = Math.floor((chart.yaxis.max - chart.yaxis.min) / chart.yaxis.numOfRows);
        }
        let verticaldevisions = Math.floor((chart.yaxis.max - chart.yaxis.min) / chart.yaxis.difference);
        //// console.log("verticaldevisions" + verticaldevisions);
        drawGrid(chart.chartnumber, verticaldevisions, ctx_base, chart.data);
        let canvas = 'canvas' + chart.chartnumber;
        let range = [chart.yaxis.min, chart.yaxis.max];
        //// console.log("maxdata:" + maxdata);
        let linecord = [];
        let columnCords = [];
        let lineLineCords = [];
        let nextcurve = 0;
        let columnChartCount = 0;
        for (let i in chart.data) {
            (chart.data[i] && chart.data[i].type === "column-chart") ? columnChartCount++ : null;
        }
        for (let i = 0; i < chart.data.length; i++) {
            if (chart.data[i] && chart.data[i].type === "column-chart") {
                const props = {
                    canvas,
                    ctx_base,
                    verticaldevisions,
                    data: chart.data[i],
                    range,
                    nextcurve,
                    chartColor: chart.data[i].chartColor,
                    columnCords,
                    columnChartCount
                };
                const rData = drawColumnChart(props);
                nextcurve += rData.barwidth + 5;
            }
            if (chart.data[i] && chart.data[i].type === "line-chart") {
                drawLineChart(canvas, ctx_base, verticaldevisions, chart.data[i], range, chart.data[i].chartColor, lineLineCords);
            }
            if (chart.data[i] && chart.data[i].type === "spline-chart") {
                drawSmoothLineChart(canvas, ctx_base, verticaldevisions, chart.data[i], range, chart.data[i].chartColor, lineLineCords);
            }
        }
        drawGraphicLinearYcord(canvas, ctx_base, verticaldevisions, chart);
        console.log("lineLineCords ", lineLineCords);
        let ctx_upper = chartSurface.preparePlotUpper(chart.chartnumber, chart.wid, chart.hei, chart.container);
        let finalCords = [...columnCords, ...lineLineCords];
        ClearDetails(chart.chartnumber, ctx_upper, chart.container);
        columnChartUpperCanvas(chart.chartnumber, ctx_upper, finalCords, chart.container, chart);
        LineChartUpperCanvas(chart.chartnumber, ctx_upper, finalCords, chart.container, chart);

        printAction(chartID, chart);
        // console.log("End : barChart");
    } catch (err) {
        console.error("Exception occurred in bar chart module:  " + err.message);
    }
};

const GkChart = (chartData) => {
    try {
        // console.info("Enter: Chart Designing initialize function");
        let chartType = chartData.data.config.chartType;

        switch(chartType){
            case enums.lineChart:
            {
                GkLineChart(chartData);
                break;
            }

            case enums.columnChart:
            {
                GkColumnChart(chartData);
                break;
            }

            case enums.barChart:
            {
                GkBarChart(chartData);
                break;
            }

            case enums.pieChart:
            {
                GkPieChart(chartData);
                break;
            }

            case enums.doughnutChart:
            {
                GkDoughnutChart(chartData);
                break;
            }

            case enums.meterChart:
            {
                GkMeterChart(chartData);
                break;
            }

            case enums.multiRandomChart:
            {
                GkRandomChart(chartData);
                break;
            }

            case enums.smoothLineChart:
            {
                GkSmoothLineChart(chartData);
                break;
            }

            case enums.stepLineChart:
            {
                GkStepChart(chartData);
                break;
            }

            default:
            {
                // console.log("Invalid choice of chart");
                break;
            }
        }
    } catch (err) {
        console.log("Error Found in GKChart Constructoru", err);
    }
};

exports.GkLineChart = GkLineChart;
exports.GkStepChart = GkStepChart;
exports.GkSmoothLineChart = GkSmoothLineChart;
exports.GkBarChart = GkBarChart;
exports.GkColumnChart = GkColumnChart;
exports.GkPieChart = GkPieChart;
exports.GkDoughnutChart = GkDoughnutChart;
exports.GkMeterChart = GkMeterChart;
exports.GkRandomChart = GkRandomChart;
exports.GkChart = GkChart;

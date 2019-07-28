// import { printOptions, printAction } from "../common/print_options";
const printOpts = require("../common/print_options");
const printOptions = printOpts.printOptions;
const printAction = printOpts.printAction;
// import ChartSurface from "../common/chart_surface";
const ChartSurface = require("../common/chart_surface");
// import { drawGrid, drawGraphicLinearYcord } from "../common/grid";
const Grid = require("../common/grid");
const drawGrid = Grid.drawGrid;
const drawGraphicLinearYcord = Grid.drawGraphicLinearYcord;
// import drawLineChart from "../common/drawChart/line_chart_canvas";
const drawLineChart = require("../common/drawChart/line_chart_canvas");
// import LineChartUpperCanvas from "../common/drawUpperChart/line_chart_upper_canvas";
const LineChartUpperCanvas = require("../common/drawUpperChart/line_chart_upper_canvas");
// import ClearDetails from "../common/drawUpperChart/clear_upper_canvas_details";
const ClearDetails = require("../common/drawUpperChart/clear_upper_canvas_details");

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
        (chart.yaxis === undefined) ? chart.yaxis = {} : null
        if (chart.yaxis.max === undefined && chart.yaxis.min === undefined) {
            chart.yaxis.max = parseInt(chart.data[0].datapoints[0].y);
            chart.yaxis.min = parseInt(chart.data[0].datapoints[0].y);
            for (let i = 0; i < chart.data.length; i++) {
                for (let j = 0; j < chart.data[i].datapoints.length; j++) {
                    if (parseInt(chart.data[i].datapoints[j].y) < chart.yaxis.min) {
                        chart.yaxis.min = parseInt(chart.data[i].datapoints[j].y);
                    }
                    if (parseInt(chart.data[i].datapoints[j].y) > chart.yaxis.max) {
                        chart.yaxis.max = parseInt(chart.data[i].datapoints[j].y);
                    }
                }
            }
            chart.yaxis.max += 10;
            (chart.yaxis.min >= 10) ? chart.yaxis.min += -10 : null
        }
        if (chart.yaxis.difference === undefined) {
            chart.yaxis.difference = Math.floor((chart.yaxis.max - chart.yaxis.min) / 8);
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

module.exports = GkLineChart;

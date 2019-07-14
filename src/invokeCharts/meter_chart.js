// import { printOptions, printAction } from "../common/print_options";
const printOpts = require("../common/print_options");
const printOptions = printOpts.printOptions;
const printAction = printOpts.printAction;
// import ChartSurface from "../common/chart_surface";
const ChartSurface = require("../common/chart_surface");
// import drawMeterChart from "../common/drawChart/meter_chart_canvas";
const drawMeterChart = require("../common/drawChart/meter_chart_canvas");

function GkMeterChart(data) {
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

        let titleAndPrintButton = ''
        if (chart.config.title != undefined) {
            titleAndPrintButton += '<h2 class="chartTitle">' + chart.config.title + '</h2>';
        }
        titleAndPrintButton += printOptions(chartID, chart);
        ChartContainer.innerHTML = titleAndPrintButton;
        let ctx_base = chartSurface.preparePlot(chart.chartnumber, chart.wid, chart.hei, chart.container);
        // drawGrid(chart.chartnumber, 10, ctx_base, chart.data);
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
        let linewidth = 50;
        ChartDataToShow = Math.round((ChartDataToShow / meterTotal) * 100);
        //// console.log(ChartDataToShow);
        drawMeterChart(canvas, ctx_base, 10, chart.data[0], maxdata, chart.data[0].chartColor, ChartDataToShow);
        printAction(chartID, chart);
        // console.log("End : meterChart");
    } catch (err) {
        console.error("Exception occurred in  meter chart module:  " + err.message);
    }
}

module.exports = GkMeterChart;

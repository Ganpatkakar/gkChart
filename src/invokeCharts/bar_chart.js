// // import { printOptions, printAction } from "../common/print_options";
// const printOpts = require("../common/print_options");
// const printOptions = printOpts.printOptions;
// const printAction = printOpts.printAction;
// // import ChartSurface from "../common/chart_surface";
// const ChartSurface = require("../common/chart_surface");
// // import { drawGrid, drawGraphicLinearYcord } from "../common/grid";
// const Grid = require("../common/grid");
// const drawGrid = Grid.drawGrid;
// const drawGraphicLinearYcord = Grid.drawGraphicLinearYcord;
// // import drawBarChart from "../common/drawChart/bar_chart_canvas";
// const drawBarChart = require("../common/drawChart/bar_chart_canvas");
// // import BarChartUpperCanvas from "../common/drawUpperChart/line_chart_upper_canvas";
// const BarChartUpperCanvas = require("../common/drawUpperChart/line_chart_upper_canvas");
// // import ClearDetails from "../common/drawUpperChart/clear_upper_canvas_details";
// const ClearDetails = require("../common/drawUpperChart/clear_upper_canvas_details");
//
// const GkBarChart = (data) => {
//     try {
//         // console.log("Start : barChart");
//         const chartSurface = new ChartSurface();
//
//         let chartID = data.id;
//         let chart = data.data;
//
//         chart.container = chartID;
//         chart.chartnumber = chartID;
//         let ChartContainer = document.querySelector("#" + chart.container);
//         chart.wid = ChartContainer.clientWidth - 10;
//         chart.hei = ChartContainer.clientHeight - 33;
//
//         let titleAndPrintButton = '';
//         if (chart.config.title) {
//             titleAndPrintButton += '<h2 class="chartTitle">' + chart.config.title + '</h2>';
//         }
//         titleAndPrintButton += printOptions(chartID, chart);
//         ChartContainer.innerHTML = titleAndPrintButton;
//
//         let ctx_base = chartSurface.preparePlot(chart.chartnumber, chart.wid, chart.hei, chart.container);
//         (chart.yaxis === undefined) ? chart.yaxis = {} : null
//
//         if (!chart.yaxis.max && !chart.yaxis.min) {
//             chart.yaxis.max = parseInt(chart.data[0].datapoints[0].y);
//             chart.yaxis.min = parseInt(chart.data[0].datapoints[0].y);
//             for (let i = 0; i < chart.data.length; i++) {
//                 for (let j = 0; j < chart.data[i].datapoints.length; j++) {
//                     if (parseInt(chart.data[i].datapoints[j].y) < chart.yaxis.min) {
//                         chart.yaxis.min = parseInt(chart.data[i].datapoints[j].y);
//                     }
//                     if (parseInt(chart.data[i].datapoints[j].y) > chart.yaxis.max) {
//                         chart.yaxis.max = parseInt(chart.data[i].datapoints[j].y);
//                     }
//                 }
//             }
//             chart.yaxis.max += 10;
//             (chart.yaxis.min >= 10) ? chart.yaxis.min += -10 : null
//         }
//         if (!chart.yaxis.difference) {
//             chart.yaxis.difference = Math.floor((chart.yaxis.max - chart.yaxis.min) / 8);
//         }
//         let verticaldevisions = Math.floor((chart.yaxis.max - chart.yaxis.min) / chart.yaxis.difference);
//         drawGrid(chart.chartnumber, verticaldevisions, ctx_base, chart.data);
//         let canvas = 'canvas' + chart.chartnumber;
//         let rangedata = [chart.yaxis.min, chart.yaxis.max];
//         let linecord = [];
//         let nextcurve = 100;
//         let barChartCount = chart.data.length;
//         for (let i = 0; i < chart.data.length; i++) {
//             const rData = drawBarChart(canvas, ctx_base, verticaldevisions, chart.data[i], rangedata, nextcurve, chart.data[i].chartColor, linecord, barChartCount, chart.data.length, chart.data.length);
//             nextcurve += rData.barwidth + 5;
//         }
//         drawGraphicLinearYcord(canvas, ctx_base, verticaldevisions, chart);
//         let ctx_upper = chartSurface.preparePlotUpper(chart.chartnumber, chart.wid, chart.hei, chart.container);
//         ClearDetails(chart.chartnumber, ctx_upper, chart.container);
//         BarChartUpperCanvas(chart.chartnumber, ctx_upper, linecord, chart.container, chart);
//         printAction(chartID, chart);
//         // console.log("End : barChart");
//     } catch (err) {
//         console.error("Exception occurred in bar chart module:  " + err.message);
//     }
// };
//
// module.exports = GkBarChart;

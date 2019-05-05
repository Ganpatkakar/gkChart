import { printOptions, printAction } from "../common/print_options";
import ChartSurface from "../common/chart_surface";
import { drawGrid, drawGraphicLinearYcord } from "../common/grid";
import DrawStepChart from "../common/drawChart/step_chart_canvas";
import LineChartUpperCanvas from "../common/drawUpperChart/line_chart_upper_canvas";
import ClearDetails from "../common/drawUpperChart/clear_upper_canvas_details";

function GkStepChart(data) {
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

        let titleAndPrintButton = ''
        if (chart.config.title != undefined) {
            titleAndPrintButton += '<h2 class="chartTitle">' + chart.config.title + '</h2>';
        }
        titleAndPrintButton += printOptions(chartID, chart);
        ChartContainer.innerHTML = titleAndPrintButton;

        let ctx_base = chartSurface.preparePlot(chart.chartnumber, chart.wid, chart.hei, chart.container);
        (chart.yaxis === undefined) ? chart.yaxis = {} : null
        if (chart.yaxis.max === undefined && chart.yaxis.min === undefined) {
            chart.yaxis.max = chart.data[0].datapoints[0].y;
            chart.yaxis.min = chart.data[0].datapoints[0].y;
            for (var i = 0; i < chart.data.length; i++) {
                for (var j = 0; j < chart.data[i].datapoints.length; j++) {
                    if (chart.data[i].datapoints[j].y < chart.yaxis.min) {
                        chart.yaxis.min = chart.data[i].datapoints[j].y;
                    }
                    if (chart.data[i].datapoints[j].y > chart.yaxis.max) {
                        chart.yaxis.max = chart.data[i].datapoints[j].y;
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
        drawGraphicLinearYcord(canvas, ctx_base, verticaldevisions, chart);
        let maxdata = [chart.yaxis.min, chart.yaxis.max];
        let linecord = [];
        for (let i = 0; i < chart.data.length; i++) {
            DrawStepChart(canvas, ctx_base, verticaldevisions, chart.data[i], maxdata, chart.data[i].chartColor, linecord);
        }

        let ctx_upper = chartSurface.preparePlotUpper(chart.chartnumber, chart.wid, chart.hei, chart.container);
        ClearDetails(chart.chartnumber, ctx_upper, chart.container);
        LineChartUpperCanvas(chart.chartnumber, ctx_upper, linecord, chart.container, chart);
        // this.drawUpperChart.lineChartUpperCanvas(chart.chartnumber, ctx_upper, chart.wid, chart.hei, linecord, chart.container, chart.type);
        printAction(chartID, chart);
        // console.log("End : stepChart");
    } catch (error) {
        console.log("Error Occured while chart calling of step chart" + error.message)
    }
}

export default GkStepChart;

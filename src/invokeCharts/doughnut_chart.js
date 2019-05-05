import { printOptions, printAction } from "../common/print_options";
import ChartSurface from "../common/chart_surface";
import drawDoughnutChart from "../common/drawChart/doughnut_chart_canvas";
import DoughnutChartUpperCanvas from "../common/drawUpperChart/doughnut_chart_upper_canvas";

function GkDoughnutChart(data) {
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

        let titleAndPrintButton = ''
        if (chart.config.title != undefined) {
            titleAndPrintButton += '<h2 class="chartTitle">' + chart.config.title + '</h2>';
        }
        titleAndPrintButton += printOptions(chartID, chart);
        ChartContainer.innerHTML = titleAndPrintButton;
        let ctx_base = chartSurface.preparePlot(chart.chartnumber, chart.wid, chartHeight, chart.container);
        // drawGrid(chart.chartnumber, 10, ctx_base, chart.data);
        let canvas = 'canvas' + chart.chartnumber;
        let linecord = [];
        let linewidth = 60;
        for (let i = 0; i < chart.data.length; i++) {
            drawDoughnutChart(canvas, ctx_base, chart.data[i], linecord, chartHeight);
        }
        //// console.log(linecord);
        let ctx_upper = chartSurface.preparePlotUpper(chart.chartnumber, chart.wid, chartHeight, chart.container);
        DoughnutChartUpperCanvas(chart.chartnumber, ctx_upper, linecord, chart.container);

        var pieChartDataDisplay = '<ul style="list-style: none; width: ' + chart.wid + 'px; padding: 0px; display: inline-block; position: relative; top: ' + chart.hei + 'px">'
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
}

export default GkDoughnutChart;
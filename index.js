import { printOptions, printAction } from "./common/print_options";
import ChartSurface from "./common/chart_surface";
import { drawGrid, drawGraphicLinearYcord } from "./common/grid";
import drawLineChart from "./common/drawChart/line_chart_canvas";
import LineChartUpperCanvas from "./common/drawUpperChart/line_chart_upper_canvas";
import ClearDetails from "./common/drawUpperChart/clear_upper_canvas_details";
import DrawStepChart from "./common/drawChart/step_chart_canvas";
import drawSmoothLineChart from "./common/drawChart/smooth_line_chart_canvas";
import drawBarChart from "./common/drawChart/bar_chart_canvas";
import BarChartUpperCanvas from "./common/drawUpperChart/line_chart_upper_canvas";
import drawPieChart from "./common/drawChart/pie_chart_canvas";
import PieChartUpperCanvas from "./common/drawUpperChart/pie_chart_upper_canvas";
import drawDoughnutChart from "./common/drawChart/doughnut_chart_canvas";
import DoughnutChartUpperCanvas from "./common/drawUpperChart/doughnut_chart_upper_canvas";
import drawMeterChart from "./common/drawChart/meter_chart_canvas";

export const GkLineChart = (data) => {
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
        if (chart.config.title != undefined) {
            titleAndPrintButton += '<h2 class="chartTitle">' + chart.config.title + '</h2>';
        }
        titleAndPrintButton += printOptions(chartID, chart);
        ChartContainer.innerHTML = titleAndPrintButton;

        let ctx_base = chartSurface.preparePlot(chart.chartnumber, chart.wid, chart.hei, chart.container);
        (chart.yaxis === undefined) ? chart.yaxis = {} : null
        if (chart.yaxis.max === undefined && chart.yaxis.min === undefined) {
            chart.yaxis.max = parseInt(chart.data[0].datapoints[0].y);
            chart.yaxis.min = parseInt(chart.data[0].datapoints[0].y);
            for (var i = 0; i < chart.data.length; i++) {
                for (var j = 0; j < chart.data[i].datapoints.length; j++) {
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

export const GkStepChart = (data) => {
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
        printAction(chartID, chart);
        // console.log("End : stepChart");
    } catch (error) {
        console.log("Error Occured while chart calling of step chart" + error.message)
    }
};

export const GkSmoothLineChart = (data) => {
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
        if (chart.config.title != undefined) {
            titleAndPrintButton += '<h2 class="chartTitle">' + chart.config.title + '</h2>';
        }
        titleAndPrintButton += printOptions(chartID, chart);
        ChartContainer.innerHTML = titleAndPrintButton;

        let ctx_base = chartSurface.preparePlot(chart.chartnumber, chart.wid, chart.hei, chart.container);

        (chart.yaxis === undefined) ? chart.yaxis = {} : null
        if (chart.yaxis.max === undefined && chart.yaxis.min === undefined) {
            chart.yaxis.max = parseInt(chart.data[0].datapoints[0].y);
            chart.yaxis.min = parseInt(chart.data[0].datapoints[0].y);
            for (var i = 0; i < chart.data.length; i++) {
                for (var j = 0; j < chart.data[i].datapoints.length; j++) {
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

export const GkBarChart = (data) => {
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
        if (chart.config.title != undefined) {
            titleAndPrintButton += '<h2 class="chartTitle">' + chart.config.title + '</h2>';
        }
        titleAndPrintButton += printOptions(chartID, chart);
        ChartContainer.innerHTML = titleAndPrintButton;

        let ctx_base = chartSurface.preparePlot(chart.chartnumber, chart.wid, chart.hei, chart.container);
        (chart.yaxis === undefined) ? chart.yaxis = {} : null

        if (chart.yaxis.max === undefined && chart.yaxis.min === undefined) {
            chart.yaxis.max = parseInt(chart.data[0].datapoints[0].y);
            chart.yaxis.min = parseInt(chart.data[0].datapoints[0].y);
            for (var i = 0; i < chart.data.length; i++) {
                for (var j = 0; j < chart.data[i].datapoints.length; j++) {
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
        let barwidth = drawGrid(chart.chartnumber, verticaldevisions, ctx_base, chart.data);
        let canvas = 'canvas' + chart.chartnumber;
        let rangedata = [chart.yaxis.min, chart.yaxis.max];
        let linecord = [];
        let nextcurve = 100;
        let barChartCount = chart.data.length;
        for (var i = 0; i < chart.data.length; i++) {
            drawBarChart(canvas, ctx_base, verticaldevisions, chart.data[i], rangedata, nextcurve, chart.data[i].chartColor, linecord, barwidth, barChartCount);
            nextcurve += barwidth + 5;
        }
        drawGraphicLinearYcord(canvas, ctx_base, verticaldevisions, chart);
        let ctx_upper = chartSurface.preparePlotUpper(chart.chartnumber, chart.wid, chart.hei, chart.container);
        ClearDetails(chart.chartnumber, ctx_upper, chart.container);
        BarChartUpperCanvas(chart.chartnumber, ctx_upper, linecord, chart.container, chart);
        printAction(chartID, chart);
        // console.log("End : barChart");
    } catch (err) {
        console.error("Exception occurred in bar chart module:  " + err.message);
    }
};

export const GkPieChart = (data) => {
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
        if (chart.config.title !== undefined) {
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

        let pieChartDataDisplay = '<ul style="list-style: none; width: ' + chart.wid + 'px; padding: 0px; display: inline-block; position: relative; top: ' + chart.hei + 'px">'
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

export const GkDoughnutChart = (data) => {
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
        let canvas = 'canvas' + chart.chartnumber;
        let linecord = [];
        let linewidth = 60;
        for (let i = 0; i < chart.data.length; i++) {
            drawDoughnutChart(canvas, ctx_base, chart.data[i], linecord, chartHeight);
        }
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
};

export const GkMeterChart = (data) => {
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
        if (chart.config.title != undefined) {
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
        let linewidth = 50;
        ChartDataToShow = Math.round((ChartDataToShow / meterTotal) * 100);
        //// console.log(ChartDataToShow);
        drawMeterChart(canvas, ctx_base, 10, chart.data[0], maxdata, chart.data[0].chartColor, ChartDataToShow);
        printAction(chartID, chart);
        // console.log("End : meterChart");
    } catch (err) {
        console.error("Exception occurred in  meter chart module:  " + err.message);
    }
};

export const GkColumnChart = (data) => {
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

        let titleAndPrintButton = ''
        if (chart.config.title != undefined) {
            titleAndPrintButton += '<h2 class="chartTitle">' + chart.config.title + '</h2>';
        }
        titleAndPrintButton += printOptions(chartID, chart);
        ChartContainer.innerHTML = titleAndPrintButton;
        let ctx_base = chartSurface.preparePlot(chart.chartnumber, chart.wid, chart.hei, chart.container);
        (chart.yaxis === undefined) ? chart.yaxis = {} : null;
        if (chart.yaxis.max === undefined && chart.yaxis.min === undefined) {
            chart.yaxis.max = parseInt(chart.data[0].datapoints[0].y);
            chart.yaxis.min = parseInt(chart.data[0].datapoints[0].y);
            for (var i = 0; i < chart.data.length; i++) {
                for (var j = 0; j < chart.data[i].datapoints.length; j++) {
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
        //// console.log("verticaldevisions" + verticaldevisions);
        let barwidth = drawGrid(chart.chartnumber, verticaldevisions, ctx_base, chart.data);
        //// console.log("barwidth:" + barwidth);
        let canvas = 'canvas' + chart.chartnumber;
        let maxdata = [chart.yaxis.min, chart.yaxis.max];
        //// console.log("maxdata:" + maxdata);
        let linecord = [];
        let barCords = [];
        let lineLineCords = [];
        let nextcurve = 100;
        let barChartCount = 0;
        for (let i in chart.data) {
            (chart.data[i].type == "bar") ? barChartCount++ : null;
        }
        for (let i = 0; i < chart.data.length; i++) {
            if (chart.data[i].type == "bar") {
                drawBarChart(canvas, ctx_base, verticaldevisions, chart.data[i], maxdata, nextcurve, chart.data[i].chartColor, barCords, barwidth, barChartCount);
                nextcurve += barwidth + 5;
            }
            if (chart.data[i].type == "line") {
                drawLineChart(canvas, ctx_base, verticaldevisions, chart.data[i], maxdata, chart.data[i].chartColor, lineLineCords);
            }
            if (chart.data[i].type == "spline") {
                drawSmoothLineChart(canvas, ctx_base, verticaldevisions, chart.data[i], maxdata, chart.data[i].chartColor, lineLineCords);
            }
        }
        drawGraphicLinearYcord(canvas, ctx_base, verticaldevisions, chart);
        console.log("lineLineCords ", lineLineCords);
        let ctx_upper = chartSurface.preparePlotUpper(chart.chartnumber, chart.wid, chart.hei, chart.container);

        ClearDetails(chart.chartnumber, ctx_upper, chart.container);
        LineChartUpperCanvas(chart.chartnumber, ctx_upper, lineLineCords, chart.container, chart);
        BarChartUpperCanvas(chart.chartnumber, ctx_upper, barCords, chart.container, chart);

        printAction(chartID, chart);
        // console.log("End : barChart");
    } catch (err) {
        console.error("Exception occurred in bar chart module:  " + err.message);
    }
};

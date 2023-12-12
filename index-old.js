const printOpts = require("./src/common/print_options");
const printOptions = printOpts.printOptions;
const printAction = printOpts.printAction;
const ChartSurface = require("./src/common/chart_surface");
const Grids =  require("./src/common/grid");
const drawGrid =  Grids.drawGrid;
const drawGraphicLinearYcord =  Grids.drawGraphicLinearYcord;

const newGrids = require("./src/common/grid_new");
const drawNewGrid = newGrids.drawGridNew;
const drawNewGraphicLinearYCord = newGrids.drawNewGraphicLinearYCord;

const verticalGrids =  require("./src/common/vertical-grid");
const drawVerticalGrid =  verticalGrids.drawVerticalGrid;
const drawDocumentationDetails  =  verticalGrids.drawDocumentationDetails;
const drawLineChart = require("./src/common/drawChart/line_chart_canvas");
const LineChartUpperCanvas =  require("./src/common/drawUpperChart/line_chart_upper_canvas");
const ClearDetails = require("./src/common/drawUpperChart/clear_upper_canvas_details");
const DrawStepChart = require("./src/common/drawChart/step_chart_canvas");
const drawSmoothLineChart = require("./src/common/drawChart/smooth_line_chart_canvas");
const drawBarChart = require("./src/common/drawChart/bar_chart_canvas");
const drawColumnChart = require("./src/common/drawChart/column_chart_canvas");
const drawStackedChart = require("./src/common/drawChart/stacked_chart_canvas");
const BarChartUpperCanvas = require("./src/common/drawUpperChart/bar_chart_upper_canvas");
const columnChartUpperCanvas = require("./src/common/drawUpperChart/column_chart_upper_canvas");
const stackedChartUpperCanvas = require("./src/common/drawUpperChart/stacked_chart_upper_canvas");
const drawPieChart = require("./src/common/drawChart/pie_chart_canvas");
const PieChartUpperCanvas = require("./src/common/drawUpperChart/pie_chart_upper_canvas");
const drawDoughnutChart = require("./src/common/drawChart/doughnut_chart_canvas");
const DoughnutChartUpperCanvas = require("./src/common/drawUpperChart/doughnut_chart_upper_canvas");
const drawMeterChart = require("./src/common/drawChart/meter_chart_canvas");
const drawStackedBarChart = require("./src/common/drawChart/stacked_bar_chart_canvas");

const calcTextWidth = require("./src/common/calc-text-width");

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

        let maxTextWidth = 30 + calcTextWidth(chart.data[0].datapoints, ctx_base, "y");

        let canvas = 'canvas' + chart.chartnumber;
        drawGrid(chart.chartnumber, verticaldevisions, ctx_base, chart.data, maxTextWidth);
        drawGraphicLinearYcord(canvas, ctx_base, verticaldevisions, chart, maxTextWidth);
        let maxdata = [chart.yaxis.min, chart.yaxis.max];
        let linecord = [];
        for (let i = 0; i < chart.data.length; i++) {
            drawLineChart(canvas, ctx_base, verticaldevisions, chart.data[i], maxdata, chart.data[i].chartColor, linecord);
        }
        let ctx_upper = chartSurface.preparePlotUpper(chart.chartnumber, chart.wid, chart.hei, chart.container);
        ClearDetails(chart.chartnumber, ctx_upper, chart.container);
        LineChartUpperCanvas(chart.chartnumber, ctx_upper, linecord, chart.container, chart, maxTextWidth);
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

        let maxTextWidth = 30 + calcTextWidth(chart.data[0].datapoints, ctx_base, "y");

        let canvas = 'canvas' + chart.chartnumber;
        drawGrid(chart.chartnumber, verticaldevisions, ctx_base, chart.data, maxTextWidth);
        drawGraphicLinearYcord(canvas, ctx_base, verticaldevisions, chart, maxTextWidth);

        let maxdata = [chart.yaxis.min, chart.yaxis.max];
        let linecord = [];
        for (let i = 0; i < chart.data.length; i++) {
            DrawStepChart(canvas, ctx_base, verticaldevisions, chart.data[i], maxdata, chart.data[i].chartColor, linecord, maxTextWidth);
        }

        let ctx_upper = chartSurface.preparePlotUpper(chart.chartnumber, chart.wid, chart.hei, chart.container);
        ClearDetails(chart.chartnumber, ctx_upper, chart.container);
        LineChartUpperCanvas(chart.chartnumber, ctx_upper, linecord, chart.container, chart, maxTextWidth);
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

        let maxTextWidth = 30 + calcTextWidth(chart.data[0].datapoints, ctx_base, "y");
        let canvas = 'canvas' + chart.chartnumber;
        drawGrid(chart.chartnumber, verticaldevisions, ctx_base, chart.data, maxTextWidth);
        drawGraphicLinearYcord(canvas, ctx_base, verticaldevisions, chart, maxTextWidth);

        let maxdata = [chart.yaxis.min, chart.yaxis.max];
        let linecord = [];
        for (let i = 0; i < chart.data.length; i++) {
            drawSmoothLineChart(canvas, ctx_base, verticaldevisions, chart.data[i], maxdata, chart.data[i].chartColor, linecord, maxTextWidth);
        }

        let ctx_upper = chartSurface.preparePlotUpper(chart.chartnumber, chart.wid, chart.hei, chart.container);
        ClearDetails(chart.chartnumber, ctx_upper, chart.container);
        LineChartUpperCanvas(chart.chartnumber, ctx_upper, linecord, chart.container, chart, maxTextWidth);
        printAction(chartID, chart);
        // console.log("End : splineChart");
    } catch (err) {
        console.error("Exception occurred in line chart module:  " + err.message);
    }
};

//Todo: MAP bar chart properly with the latest data format

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
        !chart.xAxis ? chart.xAxis = {} : null;

        if (!chart.xAxis.hasOwnProperty("max") || !chart.xAxis.hasOwnProperty("min")) {
            let max = parseInt(chart.data[0].datapoints[0].value);
            let min = max;
            for (let i = 0; i < chart.data.length; i++) {
                for (let j = 0; j < chart.data[i].datapoints.length; j++) {
                    if (parseInt(chart.data[i].datapoints[j].value) < min) {
                        min = parseInt(chart.data[i].datapoints[j].value);
                    }
                    if (parseInt(chart.data[i].datapoints[j].value) > max) {
                        max = parseInt(chart.data[i].datapoints[j].value);
                    }
                }
            }
            if(!chart.xAxis.hasOwnProperty("max")) {
                const extraAddition = max < 100 ? 2 : 10;
                chart.xAxis.max = max + extraAddition;
            }
            if (!chart.xAxis.hasOwnProperty("min")) {
                chart.xAxis.min = (chart.xAxis.min >= 10) ? min -10 : min
            }
        }

        let maxTextWidth = calcTextWidth(chart.categories, ctx_base, "label");

        if (!chart.xAxis.numOfRows) {
            chart.xAxis.difference = (chart.xAxis.max - chart.xAxis.min) / 8;
        } else {
            chart.xAxis.difference = (chart.xAxis.max - chart.xAxis.min) / chart.xAxis.numOfRows;
        }

        let horizontalNr = chart.xAxis.numOfRows ? chart.xAxis.numOfRows : 8;
        let canvas = 'canvas' + chart.chartnumber;
        drawVerticalGrid(chart.chartnumber, horizontalNr, ctx_base, chart.data, maxTextWidth);
        drawDocumentationDetails(canvas, ctx_base, horizontalNr, chart, maxTextWidth);
        let rangedata = [chart.xAxis.min, chart.xAxis.max];
        let linecord = [];
        let nextcurve = 0;
        let barChartCount = chart.data.length;
        for (let i = 0; i < chart.data.length; i++) {
            const barChartProps = {
                canvas,
                ctx_base,
                horizontalNr,
                data: chart.data[i],
                categories: chart.categories,
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

const GkStackedBarChart = (data) => {
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
        !chart.xAxis ? chart.xAxis = {} : null;

        const xAxisCount = chart.categories.length;
        let max = 0;
        const maxTextWidth = calcTextWidth(chart.categories, ctx_base, "label");
        for(const d of chart.data){
            const dataSet = d.dataSet;
            const dataSetLength = dataSet.length;
            for(let i = 0; i < xAxisCount; i++){
                let sum = 0;
                for(let j = 0; j < dataSetLength; j++) {
                    sum = sum + dataSet[j].dataPoints[i].value;
                }
                if(sum > max) {
                    max = sum;
                }
            }
        }
        max = max < 100 ? max + 5 : max + 10;
        const canvasId = 'canvas' + chart.chartnumber;
        let verticalNr = chart.xAxis.rowCount;
        chart.xAxis.max = max;
        if (!verticalNr) {
            verticalNr = 8;
        }

        // calculate the xAix difference variable
        chart.xAxis.difference = (max - chart.xAxis.min) / verticalNr;

        drawVerticalGrid(chart.chartnumber, verticalNr, ctx_base, chart, maxTextWidth);
        drawDocumentationDetails(canvasId, ctx_base, verticalNr, chart, maxTextWidth);

        let range = [chart.xAxis.min, chart.xAxis.max];
        let barCords = [];
        let nextCurve = 0;
        let barChartCount = chart.data.length;
        for (let i = 0; i < chart.data.length; i++) {
            const barChartProps = {
                canvasId,
                ctx_base,
                verticalNr,
                data: chart.data[i],
                categories: chart.categories,
                range,
                nextCurve,
                chartColor: chart.data[i].chartColor,
                barCords,
                barChartCount,
                chartDataLength: chart.data.length,
                maxTextWidth,
                chart,
                renderCount: i,
            };
            const rData = drawStackedBarChart(barChartProps);
            nextCurve += rData.barHeight + 5;
        }
        // let ctx_upper = chartSurface.preparePlotUpper(chart.chartnumber, chart.wid, chart.hei, chart.container);
        // ClearDetails(chart.chartnumber, ctx_upper, chart.container);
        // BarChartUpperCanvas(chart.chartnumber, ctx_upper, barCords, chart.container, chart, maxTextWidth);
        // printAction(chartID, chart);
        // console.log("End : barChart");
    } catch (err) {
        console.error("Exception occurred in Stacked bar chart module:  " + err.message);
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

        let maxTextWidth = 30 + calcTextWidth(chart.data[0].datapoints, ctx_base, "y");
        let canvas = 'canvas' + chart.chartnumber;
        drawGrid(chart.chartnumber, verticaldevisions, ctx_base, chart.data, maxTextWidth);
        drawGraphicLinearYcord(canvas, ctx_base, verticaldevisions, chart, maxTextWidth);

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
                columnChartCount: barChartCount,
                maxTextWidth
            };
            const rData = drawColumnChart(props);
            nextcurve += rData.barwidth + 5;
        }
        let ctx_upper = chartSurface.preparePlotUpper(chart.chartnumber, chart.wid, chart.hei, chart.container);
        ClearDetails(chart.chartnumber, ctx_upper, chart.container);
        columnChartUpperCanvas(chart.chartnumber, ctx_upper, columnCords, chart.container, chart, maxTextWidth);
        printAction(chartID, chart);
        // console.log("End : barChart");
    } catch (err) {
        console.error("Exception occurred in bar chart module:  " + err.message);
    }
};

const GkStackedChart = (data) => {
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
        !chart.yAxis ? chart.yAxis = {} : null;

        const xAxisCount = chart.categories.length;
        let max = 0;
        let maxTextWidth = 0;
        for(const d of chart.data){
            const dataSet = d.dataSet;
            const dataSetLength = dataSet.length;
            for(let i = 0; i < xAxisCount; i++){
                let sum = 0;
                for(let j = 0; j < dataSetLength; j++) {
                    sum = sum + dataSet[j].dataPoints[i].value;
                }
                if(sum > max) {
                    max = sum;
                }
                const textWidth = ctx_base.measureText(sum).width;
                maxTextWidth = textWidth > maxTextWidth ? textWidth : maxTextWidth;
            }
        }
        max = max < 100 ? max + 5 : max + 10;
        const canvasId = 'canvas' + chart.chartnumber;
        let verticalNr = chart.yAxis.rowCount;
        if (!verticalNr) {
            verticalNr = 8;
        }

        // calculate the yAix difference variable
        chart.yAxis.difference = (max - chart.yAxis.min) / verticalNr;

        drawNewGrid(chart.chartnumber, verticalNr, ctx_base, chart, maxTextWidth);
        drawNewGraphicLinearYCord(canvasId, ctx_base, verticalNr, chart, maxTextWidth);

        let range = [chart.yAxis.min, max];
        let columnCords = [];
        let nextCurve = 0;
        let columnChartCount = chart.data.length;
        for (let i = 0; i < chart.data.length; i++) {
            const props = {
                canvasId,
                ctx_base,
                verticalNr,
                chart,
                renderCount: i,
                range,
                nextCurve,
                chartColor: chart.data[i].chartColor,
                columnCords,
                columnChartCount,
                maxTextWidth
            };
            const rData = drawStackedChart(props);
            nextCurve += rData.barWidth + 5;
        }
        const ctx_upper = chartSurface.preparePlotUpper(chart.chartnumber, chart.wid, chart.hei, chart.container);
        ClearDetails(chart.chartnumber, ctx_upper, chart.container);
        stackedChartUpperCanvas(chart.chartnumber, ctx_upper, columnCords, chart.container, chart, maxTextWidth);
        printAction(chartID, chart);
        console.log("End : barChart");
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

const GkCombinationChart = (data) => {
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

        let maxTextWidth = 30 + calcTextWidth(chart.data[0].datapoints, ctx_base, "y");
        let canvas = 'canvas' + chart.chartnumber;
        drawGrid(chart.chartnumber, verticaldevisions, ctx_base, chart.data, maxTextWidth);
        drawGraphicLinearYcord(canvas, ctx_base, verticaldevisions, chart, maxTextWidth);

        let range = [chart.yaxis.min, chart.yaxis.max];
        //// console.log("maxdata:" + maxdata);
        // let linecord = [];
        let columnCords = [];
        let lineLineCords = [];
        let nextcurve = 0;
        let columnChartCount = 0;
        for (let i in chart.data) {
            (chart.data[i] && chart.data[i].type === enums.columnChart) ? columnChartCount++ : null;
        }
        const animate = false;
        for (let j = 0; j < chart.data.length; j++) {
            ((i) => {
                if (chart.data[i] && chart.data[i].type === enums.columnChart) {
                    const props = {
                        canvas,
                        ctx_base,
                        verticaldevisions,
                        data: chart.data[i],
                        range,
                        nextcurve,
                        chartColor: chart.data[i].chartColor,
                        columnCords,
                        columnChartCount,
                        animate,
                        maxTextWidth
                    };
                    const rData = drawColumnChart(props);
                    nextcurve += rData.barwidth + 5;
                }
                if (chart.data[i] && chart.data[i].type === enums.lineChart) {
                    drawLineChart(canvas, ctx_base, verticaldevisions, chart.data[i], range, chart.data[i].chartColor, lineLineCords, maxTextWidth);
                }
                if (chart.data[i] && chart.data[i].type === enums.smoothLineChart) {
                    drawSmoothLineChart(canvas, ctx_base, verticaldevisions, chart.data[i], range, chart.data[i].chartColor, lineLineCords, maxTextWidth);
                }
            })(j);
        }
        console.log("lineLineCords ", lineLineCords);
        let ctx_upper = chartSurface.preparePlotUpper(chart.chartnumber, chart.wid, chart.hei, chart.container);
        let finalCords = [...columnCords, ...lineLineCords];
        ClearDetails(chart.chartnumber, ctx_upper, chart.container);
        columnChartUpperCanvas(chart.chartnumber, ctx_upper, finalCords, chart.container, chart, maxTextWidth);
        LineChartUpperCanvas(chart.chartnumber, ctx_upper, finalCords, chart.container, chart, maxTextWidth);

        printAction(chartID, chart);
        // console.log("End : barChart");
    } catch (err) {
        console.error("Exception occurred in bar chart module:  " + err.message);
    }
};

const GkSparkChart = (chartData) => {
    console.log("Will be coming soon", chartData);
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

            case enums.combinationChart:
            {
                GkCombinationChart(chartData);
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

            case enums.sparkChart:
            {
                GkSparkChart(chartData);
                break;
            }

            case enums.stackedColumnChart:
            {
                GkStackedChart(chartData);
                break;
            }

            case enums.stackedBarChart:
            {
                GkStackedBarChart(chartData);
                break;
            }

            default:
            {
                // console.log("Invalid choice of chart");
                break;
            }
        }
    } catch (err) {
        console.log("Error Found in GKChart Constructor", err);
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
exports.GkCombinationChart = GkCombinationChart;
exports.GkChart = GkChart;
exports.GkStackedChart = GkStackedChart;
exports.GkStackedBarChart = GkStackedBarChart;

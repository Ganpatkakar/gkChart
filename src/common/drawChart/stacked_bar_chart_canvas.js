const gkChartConsts = require("../../invokeCharts/enums");

const canvasHeightSpareForDetails = gkChartConsts.canvasHeightSpareForDetails;
let canvasWidthSpareForDetails = gkChartConsts.canvasWidthSpareForDetails;

function drawStackedBarChart(props) {
    try {
        // console.log("Start : drawBar");
        // const canvasId = props.canvasId;
        // const ctx = props. ctx_base;
        // const verticalNr = props.verticalNr;
        // const data = props.data;
        // const range = props.rangedata;
        // const curx = props.nextcurve;
        // const chartColor = props.chartColor;
        // const barCords = props.barCords;
        // const barChartCount = props.barChartCount;
        // const chartDataLength = props.chartDataLength;
        // const maxTextWidth = props.maxTextWidth;
        // const categories = props.categories;
        // const chart = props.chart;

        const canvasId = props.canvasId;
        const ctx = props.ctx_base;
        const verticalNr = props.verticalNr;
        const chart = props.chart;
        const renderCount = props.renderCount;
        const range = props.range;
        const curx = props.nextCurve;
        const chartColor = props.chartColor;
        const barCords = props.barCords;
        const barChartCount = props.barChartCount;
        const maxTextWidth = props.hasOwnProperty("maxTextWidth") ? props.maxTextWidth : 0;
        const animation = props.hasOwnProperty("animate") ? props.animate : false; // Todo: mark default value again as true


        if(maxTextWidth > canvasWidthSpareForDetails) {
            canvasWidthSpareForDetails = maxTextWidth;
        }

        const canvas = document.getElementById(canvasId);
        const hei = canvas.height - canvasHeightSpareForDetails;
        const wid = canvas.width - canvasWidthSpareForDetails;
        const categoriesLength = chart.categories.length;

        const spacingVertical = hei / categoriesLength;
        const totalRange = range[1] - range[0];
        // const verticalCoefficient = hei / totalRange;
        const horizontalCoefficient = wid / totalRange;
        const barHeight = spacingVertical / barChartCount * .80;

        const calcWayPoints = (points) => {
            let wayPoints = [];
            for (let i = 0; i < points.length; i++) {
                const x1 = points[i].x;
                const y1 = points[i].y;
                // let totalHeight = hei;
                let rectWidth = points[i].wid;
                let currentWidth = 0;
                let newWayPoint = [];
                while (currentWidth <= rectWidth) {
                    newWayPoint.push({x: x1, y: y1, wid: currentWidth, hei: barHeight});
                    let difference = rectWidth - currentWidth;
                    currentWidth += (difference < 15 && difference > 0) ? difference : 15;
                }
                wayPoints.push(newWayPoint);
            }
            return (wayPoints);
        };

        const animate = (animateArr, t, cColor) => {
            ctx.beginPath();
            ctx.globalAlpha = 1;
            ctx.fillStyle = cColor;
            ctx.fillRect(animateArr[t].x, animateArr[t].y, animateArr[t].wid, animateArr[t].hei);
            ctx.closePath();
            t = t + 1;
            if (t < animateArr.length) {
                requestAnimationFrame(animate.bind(this, animateArr, t, cColor));
            }
        };

        const localBarCords = [];
        const dataSet = chart.data[renderCount].dataSet;
        const renderStackCount = dataSet.length;

        for (let i = 0; i < categoriesLength; i++) {
            // var rectHeight = barHeight;
            let startWidth = 0;
            const newObj = [];
            let fromTop = (i * spacingVertical + spacingVertical / 2 + curx) - (barHeight / 2) * barChartCount;
            for(let j = 0; j < renderStackCount; j++){
                const currentValue = dataSet[j].dataPoints[i].value;
                const currentRectWidth = (currentValue - range[0]) * horizontalCoefficient;
                let fromLeft = canvasWidthSpareForDetails + startWidth;
                startWidth += currentRectWidth;

                newObj.push({
                    x: fromLeft,
                    y: fromTop,
                    wid: currentRectWidth,
                    hei: barHeight,
                    label: chart.categories[i].label,
                    dataLabel: dataSet[j].dataLabel,
                    dataval: currentValue,
                    dataColor: dataSet[j].color,
                });
                if(!animation) {
                    ctx.beginPath();
                    ctx.globalAlpha = 1;
                    ctx.fillStyle = dataSet[j].color;
                    ctx.fillRect(newObj[j].x, newObj[j].y, newObj[j].wid, newObj[j].hei);
                    ctx.closePath();
                }
            }

            // let barChartWidth = barChartCount * barWidth + (barChartCount - 1) * 5;

            barCords.push(newObj);
            localBarCords.push(newObj);
        }
        if(animation) {
            let points = calcWayPoints(localBarCords);

            for (let i = 0; i < points.length; i++) {
                let t = 0;
                animate(points[i], t, chartColor);
            }
        }

        return {barCords, barHeight};
        // console.log("End : drawBar");
    } catch (e) {
        console.log("error occurred in drawBar : ", e);
    }
}

module.exports =  drawStackedBarChart;

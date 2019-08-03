const gkChartConsts = require("../../invokeCharts/enums");

const canvasHeightSpareForDetails = gkChartConsts.canvasHeightSpareForDetails;
const canvasWidthSpareForDetails = gkChartConsts.canvasWidthSpareForDetails;

function drawColumnChart(canvasId, ctx, verticalNr, data, range, curx, chartColor, linecord, barChartCount, chartDataLength) {
    try {
        // console.log("Start : drawBar");
        const canvas = document.getElementById(canvasId);
        const hei = canvas.height - canvasHeightSpareForDetails;
        const wid = canvas.width - canvasWidthSpareForDetails;
        const spacingHorizontal = wid / data.datapoints.length;
        const totalRange = range[1] - range[0];
        const verticalCoefficient = hei / totalRange;
        const barwidth = spacingHorizontal / chartDataLength * .60;

        const calcWayPoints = (points) => {
            let wayPoints = [];
            for (let i = 0; i < points.length; i++) {
                let x1 = points[i].x;
                let totalHeight = hei;
                let rectHeight = points[i].hei;
                let currentHeight = 0;
                let newWayPoint = [];
                while (currentHeight <= rectHeight) {
                    newWayPoint.push({x: x1, y: totalHeight - currentHeight, hei: currentHeight, wid: barwidth});
                    let difference = rectHeight - currentHeight;
                    currentHeight += (difference < 15 && difference > 0) ? difference : 15;
                }
                wayPoints.push(newWayPoint);
            }
            return (wayPoints);
        };

        const animate = (animateArr, t, cColor) => {
            ctx.beginPath();
            ctx.globalAlpha = 1;
            ctx.fillStyle = cColor;
            ctx.fillRect(animateArr[t].x, animateArr[t].y, barwidth, animateArr[t].hei);
            ctx.closePath();
            t = t + 1;
            if (t < animateArr.length) {
                requestAnimationFrame(animate.bind(this, animateArr, t, cColor));
            }
        };

        const localLinecord = [];
        for (let i = 0; i < data.datapoints.length; i++) {
            var rectHeight = (hei - (data.datapoints[i].y - range[0]) * verticalCoefficient);
            let barChartWidth = barChartCount * barwidth + (barChartCount - 1) * 5;
            let fromLeft = (i * spacingHorizontal + spacingHorizontal / 2 + canvasWidthSpareForDetails + curx) - barChartWidth / 2;
            var newobj = {
                x: fromLeft,
                y: rectHeight,
                wid: barwidth,
                hei: hei - rectHeight,
                label: data.datapoints[i].label,
                dataLabel: data.dataLabel,
                dataval: data.datapoints[i].y,
                dataColor: data.chartColor
            };
            linecord.push(newobj);
            localLinecord.push(newobj);
        }

        let points = calcWayPoints(localLinecord);

        for (let i = 0; i < points.length; i++) {
            let t = 0;
            animate(points[i], t, chartColor);
        }

        return {linecord, barwidth};
        // console.log("End : drawBar");
    } catch (e) {
        console.log("error occurred in drawBar : ", e);
    }
}

module.exports =  drawColumnChart;

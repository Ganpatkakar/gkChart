const gkChartConsts = require("../../invokeCharts/enums");

const canvasHeightSpareForDetails = gkChartConsts.canvasHeightSpareForDetails;
const canvasWidthSpareForDetails = gkChartConsts.canvasWidthSpareForDetails;

function drawColumnChart(props) {
    try {
        // console.log("Start : drawBar");
        const canvasId = props.canvas;
        const ctx = props.ctx_base;
        const verticalNr = props.verticaldevisions;
        const data = props.data;
        const range = props.range;
        const curx = props.nextcurve;
        const chartColor = props.chartColor;
        const columnCords = props.columnCords;
        const columnChartCount = props.columnChartCount;

        const canvas = document.getElementById(canvasId);
        const hei = canvas.height - canvasHeightSpareForDetails;
        const wid = canvas.width - canvasWidthSpareForDetails;
        const spacingHorizontal = wid / data.datapoints.length;
        const totalRange = range[1] - range[0];
        const verticalCoefficient = hei / totalRange;
        const barwidth = spacingHorizontal / columnChartCount * .60;

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

        const localColumnCords = [];
        for (let i = 0; i < data.datapoints.length; i++) {
            const rectHeight = (hei - (data.datapoints[i].y - range[0]) * verticalCoefficient);
            let columnChartWidth = columnChartCount * barwidth + (columnChartCount - 1) * 5;
            let fromLeft = (canvasWidthSpareForDetails + i * spacingHorizontal + spacingHorizontal / 2  + curx) - columnChartWidth / 2;
            const newobj = {
                x: fromLeft,
                y: rectHeight,
                wid: barwidth,
                hei: hei - rectHeight,
                label: data.datapoints[i].label,
                dataLabel: data.dataLabel,
                dataval: data.datapoints[i].y,
                dataColor: data.chartColor
            };
            columnCords.push(newobj);
            localColumnCords.push(newobj);
        }

        let points = calcWayPoints(localColumnCords);

        for (let i = 0; i < points.length; i++) {
            let t = 0;
            animate(points[i], t, chartColor);
        }

        return {columnCords, barwidth};
        // console.log("End : drawBar");
    } catch (e) {
        console.log("error occurred in drawBar : ", e);
    }
}

module.exports =  drawColumnChart;

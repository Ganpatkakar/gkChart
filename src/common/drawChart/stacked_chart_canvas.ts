import gkChartConsts from "../../invokeCharts/enums";

const canvasHeightSpareForDetails = gkChartConsts.canvasHeightSpareForDetails;
let canvasWidthSpareForDetails = gkChartConsts.canvasWidthSpareForDetails;

export default function drawStackedChart(props: any) {
    try {
        // console.log("Start : drawBar");
        const canvasId = props.canvasId;
        const ctx = props.ctx_base;
        // const verticalNr = props.verticalNr;
        const chart = props.chart;
        const renderCount = props.renderCount;
        const range = props.range;
        const curx = props.nextCurve;
        // const chartColor = props.chartColor;
        const columnCords = props.columnCords;
        const columnChartCount = props.columnChartCount;
        const maxTextWidth = props.hasOwnProperty("maxTextWidth") ? props.maxTextWidth : 0;
        const animation = props.hasOwnProperty("animate") ? props.animate : false; // Todo: mark default value again as true

        if(maxTextWidth > canvasWidthSpareForDetails) {
            canvasWidthSpareForDetails = maxTextWidth;
        }

        const canvas = document.getElementById(canvasId);
        const hei = canvas.height - canvasHeightSpareForDetails;
        const wid = canvas.width - canvasWidthSpareForDetails;
        const horizontalDivision = chart.categories.length;
        const spacingHorizontal = wid / horizontalDivision;
        const totalRange = range[1] - range[0];
        const verticalCoefficient = hei / totalRange;
        const barWidth = spacingHorizontal / columnChartCount * .60;

        // ctx.globalCompositeOperation='destination-over';

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
        const dataSet = chart.data[renderCount].dataSet;
        const renderStackCount = dataSet.length;

        for (let i = 0; i < horizontalDivision; i++) {
            let startHeight = 0;
            const newObj = [];
            for(let j = 0; j < renderStackCount; j++){
                const currentValue = dataSet[j].dataPoints[i].value;
                const currentRectHeight = (currentValue - range[0]) * verticalCoefficient;
                startHeight += currentRectHeight;
                const rectHeight = (hei - startHeight);
                let columnChartWidth = columnChartCount * barWidth + (columnChartCount - 1) * 5;
                let fromLeft = (canvasWidthSpareForDetails + i * spacingHorizontal + spacingHorizontal / 2  + curx) - columnChartWidth / 2;
                newObj.push({
                    x: fromLeft,
                    y: rectHeight,
                    wid: barWidth,
                    hei: currentRectHeight,
                    label: chart.categories[i].label,
                    dataLabel: dataSet[j].dataLabel,
                    dataVal: currentValue,
                    dataColor: dataSet[j].color
                });
                if(!animation) {
                    ctx.beginPath();
                    ctx.globalAlpha = 1;
                    ctx.fillStyle = dataSet[j].color;
                    ctx.fillRect(newObj[j].x, newObj[j].y, barWidth, newObj[j].hei);
                    ctx.closePath();
                }
            }
            columnCords.push(newObj);
            localColumnCords.push(newObj);
        }
        if(animation) {
            let points = calcWayPoints(localColumnCords);

            for (let i = 0; i < points.length; i++) {
                let t = 0;
                animate(points[i], t, chartColor);
            }
        }

        return {columnCords, barWidth};
        // console.log("End : drawBar");
    } catch (e) {
        console.log("error occurred in drawBar : ", e);
    }
}

module.exports =  drawStackedChart;

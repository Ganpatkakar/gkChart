import gkChartConsts from "../../invokeCharts/enums";

const canvasHeightSpareForDetails = gkChartConsts.canvasHeightSpareForDetails;
let canvasWidthSpareForDetails = gkChartConsts.canvasWidthSpareForDetails;

export default function drawBarChart(props: any) {
    try {
        // console.log("Start : drawBar");
        const canvasId = props.canvas;
        const ctx = props. ctx_base;
        const horizontalNr = props.horizontalNr;
        const data = props.data;
        const range = props.rangedata;
        const curx = props.nextcurve;
        const chartColor = props.chartColor;
        const linecord = props.linecord;
        const barChartCount = props.barChartCount;
        const chartDataLength = props.chartDataLength;
        const maxTextWidth = props.maxTextWidth;
        const categories = props.categories;

        if(maxTextWidth > canvasWidthSpareForDetails) {
            canvasWidthSpareForDetails = maxTextWidth;
        }

        const canvas = document.getElementById(canvasId);
        const hei = canvas.height - canvasHeightSpareForDetails;
        const wid = canvas.width - canvasWidthSpareForDetails;

        const spacingVertical = hei / data.datapoints.length;
        const totalRange = range[1] - range[0];
        // const verticalCoefficient = hei / totalRange;
        const horizontalCoefficient = wid / totalRange;
        const barHeight = spacingVertical / chartDataLength * .80;

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

        const localLineCord = [];
        for (let i = 0; i < data.datapoints.length; i++) {
            // var rectHeight = barHeight;
            const barChartWidth = (data.datapoints[i].value - range[0]) * horizontalCoefficient;
            // let barChartWidth = barChartCount * barWidth + (barChartCount - 1) * 5;
            let fromLeft = canvasWidthSpareForDetails;
            let fromTop = (i * spacingVertical + spacingVertical / 2 + curx) - (barHeight / 2) * barChartCount;
            const newObj = {
                x: fromLeft,
                y: fromTop,
                wid: barChartWidth,
                hei: barHeight,
                label: categories[i].label,
                dataLabel: data.dataLabel,
                dataval: data.datapoints[i].value,
                dataColor: data.chartColor
            };
            linecord.push(newObj);
            localLineCord.push(newObj);
        }

        let points = calcWayPoints(localLineCord);

        for (let i = 0; i < points.length; i++) {
            let t = 0;
            animate(points[i], t, chartColor);
        }

        return {linecord, barHeight};
        // console.log("End : drawBar");
    } catch (e) {
        console.log("error occurred in drawBar : ", e);
    }
}

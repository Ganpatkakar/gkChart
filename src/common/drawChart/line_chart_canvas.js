const gkChartConsts = require("../../invokeCharts/enums");

const canvasHeightSpareForDetails = gkChartConsts.canvasHeightSpareForDetails;
const canvasWidthSpareForDetails = gkChartConsts.canvasWidthSpareForDetails;

function drawLineChart(canvasId, ctx, verticalNr, data, range, chartColor, linecord) {
    try {
        // console.log("Start : drawGraphicLinear");
        const commonCodeCircle = () => {
            ctx.beginPath();
            ctx.fillStyle = chartColor;
            ctx.arc(points[t].x, points[t].y, 8, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        };

        const fillAreaCall = (vertices) => {
            ctx.beginPath();
            if (vertices.length) {
                ctx.moveTo(vertices[0].x, hei);
            }
            for (let points = 0; points < vertices.length; points++) {
                ctx.lineTo(vertices[points].x, vertices[points].y + 4);
            }
            if (vertices.length) {
                ctx.lineTo(vertices[vertices.length - 1].x, hei);
            }
            ctx.closePath();
            ctx.globalAlpha = 0.1;
            ctx.fillStyle = chartColor;
            ctx.fill();
        };

        const calcWayPoints = (vertices) => {
            let wayPoints = [];
            for (let i = 1; i < vertices.length; i++) {
                let pt0 = vertices[i - 1];
                let pt1 = vertices[i];
                let dx = pt1.x - pt0.x;
                let dy = pt1.y - pt0.y;
                for (let j = 0; j < differencePoints; j++) {
                    let x = pt0.x + dx * j / differencePoints;
                    let y = pt0.y + dy * j / differencePoints;
                    wayPoints.push({
                        x: x,
                        y: y
                    });
                }
            }
            return (wayPoints);
        };

        const animate = () => {
            if (t < points.length - 1) {
                requestAnimationFrame(animate);
            }
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.globalAlpha = 1;
            ctx.strokeStyle = chartColor;
            if (t === 0) {
                ctx.moveTo(points[t].x, points[t].y);
            } else {
                ctx.moveTo(points[t - 1].x, points[t - 1].y);
                ctx.lineTo(points[t].x, points[t].y);
            }
            ctx.stroke();
            // increment "t" to get the next waypoint
            if (t % differencePoints === 0 || t === points.length - 1) {
                commonCodeCircle();
            }
            if (data.fill) {
                let p = {};
                if (t) {
                    p = points.slice(t - 1, t + 1);
                }
                fillAreaCall(p);
            }
            t += 1;
        };

        var canvas = document.getElementById(canvasId);
        const hei = canvas.height - canvasHeightSpareForDetails;
        const wid = canvas.width - canvasWidthSpareForDetails;
        const spacingVertical = hei / verticalNr;
        const spacingHorizontal = wid / data.datapoints.length;

        const totalRange = range[1] - range[0];
        const verticalCoefficient = hei / totalRange;
        ctx.beginPath();
        const localLineCords = [];
        for (let i = 0; i < data.datapoints.length; i++) {
            let newObj = {
                x: i * spacingHorizontal + spacingHorizontal / 2 + canvasWidthSpareForDetails,
                y: hei - (data.datapoints[i].y - range[0]) * verticalCoefficient,
                label: data.datapoints[i].label,
                dataLabel: data.dataLabel,
                dataval: data.datapoints[i].y,
                dataColor: data.chartColor
            };
            // This linecord contains multiple charts data ponts for the visualization purpose of on hover.
            linecord.push(newObj);
            localLineCords.push(newObj);
        }
        let t = 0;
        let differencePoints = 25;
        let points = calcWayPoints(localLineCords);

        points.push(localLineCords[localLineCords.length - 1]);

        animate();

        ctx.globalAlpha = 1;
        return linecord;
    } catch (e) {
        console.log("error occured in drawGraphicLinear : ", e);
    }
}

module.exports = drawLineChart;

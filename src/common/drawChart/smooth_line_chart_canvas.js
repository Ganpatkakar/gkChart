const gkChartConsts = require("../../invokeCharts/enums");

const canvasHeightSpareForDetails = gkChartConsts.canvasHeightSpareForDetails;
let canvasWidthSpareForDetails = gkChartConsts.canvasWidthSpareForDetails;

function bezierPointsCalc(a, f) {
    for (var b = [], c, e = 0; e < a.length; e++)
        if (0 == e)
            b.push(a[0]);
        else {
            var g, h, l;
            l = e - 1;
            g = 0 === l ? 0 : l - 1;
            h = l === a.length - 1 ? l : l + 1;
            c = Math.abs((a[h].x - a[g].x) / (0 === a[h].x - a[l].x ? 0.01 : a[h].x - a[l].x)) * (f - 1) / 2 + 1;
            var t = (a[h].x - a[g].x) / c;
            c = (a[h].y - a[g].y) / c;
            b[b.length] = a[l].x > a[g].x && 0 < t || a[l].x < a[g].x && 0 > t ? {
                x: a[l].x + t / 3,
                y: a[l].y + c / 3
            } : {
                x: a[l].x,
                y: a[l].y + c / 9
            };
            l = e;
            g = 0 === l ? 0 : l - 1;
            h = l === a.length - 1 ? l : l + 1;
            c = Math.abs((a[h].x - a[g].x) / (0 === a[l].x - a[g].x ? 0.01 : a[l].x - a[g].x)) * (f - 1) / 2 + 1;
            t = (a[h].x - a[g].x) / c;
            c = (a[h].y - a[g].y) / c;
            b[b.length] = a[l].x > a[g].x && 0 < t || a[l].x < a[g].x && 0 > t ? {
                x: a[l].x - t / 3,
                y: a[l].y - c / 3
            } : {
                x: a[l].x,
                y: a[l].y - c / 9
            };
            b[b.length] = a[e]
        }
    return b
}

function drawSmoothLineChart(canvasId, ctx, verticalNr, data, range, chartColor, linecord, maxTextWidth) {
    try {
        // console.log("Start : drawGraphicLinear");
        if(maxTextWidth > canvasWidthSpareForDetails) {
            canvasWidthSpareForDetails = maxTextWidth;
        }
        const calcWayPoints = (vertices) => {
            const wayPoints = [];
            for (let i = 1; i < vertices.length; i += 3) {
                let startPt = {x: vertices[i - 1].x, y: vertices[i - 1].y}
                let ct1 = {x: vertices[i].x, y: vertices[i].y}
                let ct2 = {x: vertices[i + 1].x, y: vertices[i + 1].y}
                let endPt = {x: vertices[i + 2].x, y: vertices[i + 2].y}
                for (let t = 0; t < difference; t++) {
                    let pointers = getQuadraticBezierXYatT(startPt, ct1, ct2, endPt, t / difference);
                    wayPoints.push({
                        x: pointers.x,
                        y: pointers.y
                    });
                }
            }
            return (wayPoints);
        };

        const getQuadraticBezierXYatT = (startPt, ct1, ct2, endPt, t) => {
            let x = Math.pow(1 - t, 3) * startPt.x + 3 * Math.pow(1 - t, 2) * t * ct1.x + 3 * (1 - t) * Math.pow(t, 2) * ct2.x + Math.pow(t, 3) * endPt.x
            let y = Math.pow(1 - t, 3) * startPt.y + 3 * Math.pow(1 - t, 2) * t * ct1.y + 3 * (1 - t) * Math.pow(t, 2) * ct2.y + Math.pow(t, 3) * endPt.y
            return ({x: x, y: y});
        };

        const commonCodeCircle = () => {
            ctx.beginPath();
            ctx.fillStyle = chartColor;
            ctx.arc(points[i].x, points[i].y, 8, 0, 2 * Math.PI);
            ctx.fill();
            ctx.strokeStyle = chartColor;
            ctx.stroke();
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
            ctx.globalAlpha = 0.3;
            ctx.fillStyle = chartColor;
            ctx.fill();
        };

        const animate = (points) =>  {
            if (i < points.length - 1) {
                requestAnimationFrame(animate.bind(this, points));
            }
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.globalAlpha = 1;
            ctx.strokeStyle = chartColor;
            if (i === 0) {
                ctx.moveTo(points[i].x, points[i].y);
            } else {
                ctx.moveTo(points[i - 1].x, points[i - 1].y);
                ctx.lineTo(points[i].x, points[i].y);
            }
            ctx.stroke();

            if (i % difference === 0 || i === points.length - 1) {
                commonCodeCircle();
            }

            if (data.fill) {
                let p = {};
                if (i) {
                    p = points.slice(i - 1, i + 1);
                }
                fillAreaCall(p);
            }

            i = i + 1;
        };

        var canvas = document.getElementById(canvasId);
        const hei = canvas.height - canvasHeightSpareForDetails;
        const wid = canvas.width - +canvasWidthSpareForDetails;
        const spacingVertical = hei / verticalNr;
        var spacingHorizontal = wid / data.datapoints.length;

        const totalRange = range[1] - range[0];
        const verticalCoefficient = hei / totalRange;
        ctx.strokeStyle = chartColor;
        ctx.globalAlpha = 1;
        const localLineCords = [];

        for (let i = 0; i < data.datapoints.length; i++) {
            let newobj = {
                x: i * spacingHorizontal + spacingHorizontal / 2 + canvasWidthSpareForDetails,
                y: hei - (data.datapoints[i].y - range[0]) * verticalCoefficient,
                label: data.datapoints[i].label,
                dataLabel: data.dataLabel,
                dataval: data.datapoints[i].y,
                dataColor: data.chartColor
            };
            linecord.push(newobj);
            localLineCords.push(newobj);
        }

        ctx.closePath();
        let f = 2;
        let a = bezierPointsCalc(localLineCords, f);
        // console.log(a);

        let difference = 25;
        let points = calcWayPoints(a);

        points.push(localLineCords[localLineCords.length - 1]);

        let i = 0;

        animate(points);

        ctx.globalAlpha = 1;

        return linecord;
    } catch (e) {
        console.log("error occured in drawsplinechart : ", e);
    }
}

module.exports = drawSmoothLineChart;

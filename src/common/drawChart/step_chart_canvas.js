const gkChartConsts = require("../../invokeCharts/enums");

const canvasHeightSpareForDetails = gkChartConsts.canvasHeightSpareForDetails;
const canvasWidthSpareForDetails = gkChartConsts.canvasWidthSpareForDetails;

function DrawStepChart(canvasId, ctx, verticalNr, data, range, chartColor, linecord) {
    try {
        // console.log("Start : drawStepchart");

        const calcWayPoints = (vertices) => {
            const wayPoints = [];
            for (var i = 1; i < vertices.length; i++) {
                var pt0 = vertices[i - 1];
                var pt1 = vertices[i];
                var dx = pt1.x - pt0.x;
                var dy = pt1.y - pt0.y;
                for (var j = 0; j < differencePoints; j++) {
                    var x = pt0.x + dx * j / differencePoints;
                    var y = pt0.y + dy * j / differencePoints;
                    wayPoints.push({
                        x: x,
                        y: y
                    });
                }
            }
            return (wayPoints);
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

        const commonCodeCircle = () => {
            ctx.beginPath();
            ctx.fillStyle = chartColor;
            ctx.arc(points[t].x, points[t].y, 8, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        };

        const animate = () => {
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.globalAlpha = 1;
            ctx.strokeStyle = chartColor;
            if (t < points.length - 1) {
                requestAnimationFrame(animate);
            }
            // draw a line segment from the last waypoint
            // to the current waypoint
            ctx.beginPath();
            if (t === 0) {
                ctx.moveTo(points[t].x, points[t].y);
            } else {
                ctx.moveTo(points[t - 1].x, points[t - 1].y);
                ctx.lineTo(points[t].x, points[t].y);
            }
            ctx.stroke();
            // increment "t" to get the next waypoint
            if (t % (differencePoints * 2) === 0 || t === points.length - 1) {
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
        var hei = canvas.height - canvasHeightSpareForDetails;
        var wid = canvas.width - +canvasWidthSpareForDetails
        var spacingVertical = hei / verticalNr;
        var spacingHorizontal = wid / data.datapoints.length;

        var totalRange = range[1] - range[0];
        var verticalCoefficient = hei / totalRange;

        ctx.beginPath();
        var localLineCords = [];
        for (let i = 0; i < data.datapoints.length; i++) {
            var newobj = {
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

        ctx.beginPath();
        ctx.globalAlpha = 1;
        ctx.strokeStyle = chartColor;
        let lPoints = [];
        const lineCordsLength = localLineCords.length;
        for (let i = 0; i < lineCordsLength; i++) {
            if (i === 0) {
                lPoints.push({x: localLineCords[i].x, y: localLineCords[i].y})
            } else {
                lPoints.push({x: localLineCords[i].x, y: localLineCords[i - 1].y})
                lPoints.push({x: localLineCords[i].x, y: localLineCords[i].y})
            }
        }

        let t = 0;
        let differencePoints = 15;
        let points = calcWayPoints(lPoints);

        points.push(localLineCords[localLineCords.length - 1]);

        animate();

        ctx.globalAlpha = 1;

        return linecord;
        // console.log("End : drawStepchart");
    } catch (e) {
        console.log("error occured in drawGraphicLinear : ", e);
    }
}

module.exports = DrawStepChart;

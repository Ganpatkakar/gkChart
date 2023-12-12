import gkChartConsts from "../../invokeCharts/enums";

const canvasHeightSpareForDetails = gkChartConsts.canvasHeightSpareForDetails;
let canvasWidthSpareForDetails = gkChartConsts.canvasWidthSpareForDetails;

export default function DrawStepChart(canvasId: any, ctx: any, verticalNr: any, data: any, range: any, chartColor: any, linecord: any, maxTextWidth = 0) {
    try {
        // console.log("Start : drawStepchart");
        if(maxTextWidth > canvasWidthSpareForDetails) {
            canvasWidthSpareForDetails = maxTextWidth;
        }
        const calcWayPoints = (vertices: any) => {
            const wayPoints = [];
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

        const fillAreaCall = (vertices: any) => {
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

        let canvas: any = document.getElementById(canvasId);
        let hei: any = canvas.height - canvasHeightSpareForDetails;
        let wid: any = canvas.width - +canvasWidthSpareForDetails
        let spacingVertical = hei / verticalNr;
        let spacingHorizontal = wid / data.datapoints.length;

        let totalRange = range[1] - range[0];
        let verticalCoefficient = hei / totalRange;

        ctx.beginPath();
        let localLineCords = [];
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

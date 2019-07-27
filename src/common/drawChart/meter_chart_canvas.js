const gkChartConsts = require("../../invokeCharts/enums");

const xAxisSpacing = gkChartConsts.xAxisSpacing;
const fontLineHeight = gkChartConsts.fontLineHeight;
const blackFillStyle = gkChartConsts.blackFillStyle;
const font = gkChartConsts.font;
const white = gkChartConsts.white;

function drawMeterChart(can, ctx, verticalNr, data, range, chartColor, ChartDataToShow) {
    try {
        // console.log("Start : drawMeter");
        let linecord = [];
        const canvas = document.getElementById(can);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let linewidth = 50;
        ctx.lineWidth = 4;
        let lastend = 3.141592653589793;
        let myTotal = 0; // Automatically calculated so don't touch
        let radius = canvas.height / 2 - linewidth;
        for (let e = 0; e < data.datapoints.length; e++) {
            myTotal += data.datapoints[e].y;
        }
        for (let i = 0; i < data.datapoints.length; i++) {
            ctx.strokeStyle = white;
            ctx.fillStyle = data.datapoints[i].color;
            ctx.beginPath();
            ctx.moveTo(canvas.width / 2, canvas.height / 2);
            ctx.arc(canvas.width / 2, canvas.height / 2, radius, lastend, lastend + (Math.PI * (data.datapoints[i].y / myTotal)));
            //// console.log(canvas.width / 2, canvas.height / 2, canvas.height / 2, lastend, lastend + (Math.PI * 2 * (data.datapoints[i].y / myTotal)));
            ctx.lineTo(canvas.width / 2, canvas.height / 2);
            ctx.fill();
            ctx.stroke();
            var newobj = {
                x: canvas.width / 2,
                startangle: lastend,
                lastangle: lastend + (Math.PI * (data.datapoints[i].y / myTotal)),
                label: data.datapoints[i].label
            };
            linecord.push(newobj);
            lastend += Math.PI * (data.datapoints[i].y / myTotal);
        }
        ctx.beginPath();
        ctx.fillStyle = white;
        ctx.arc(canvas.width / 2, canvas.height / 2, radius * 0.7, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.fillStyle = blackFillStyle;
        ctx.arc(canvas.width / 2, canvas.height / 2, radius * 0.1, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        var rotateangel = Math.PI * (ChartDataToShow / 100) + 3.141592653589793;
        var headlen = 10;
        ctx.lineWidth = 6;
        ctx.lineCap = "round";
        var tox = canvas.width / 2 + (radius * .8) * Math.cos(rotateangel);
        var toy = canvas.height / 2 + (radius * .8) * Math.sin(rotateangel);
        var fromx = canvas.width / 2;
        var fromy = canvas.height / 2;
        ctx.moveTo(canvas.width / 2, canvas.height / 2);
        ctx.lineTo(tox, toy);
        ctx.strokeStyle = blackFillStyle;
        ctx.stroke();
        ctx.beginPath();
        ctx.fillStyle = white;
        ctx.arc(canvas.width / 2, canvas.height / 2, radius * 0.07, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();

        /* Draw piechart number values */
        let angle = 3.141592653589793;
        let x = Math.floor(canvas.width / 2);
        let y = Math.floor(canvas.height / 2);
        ctx.fillStyle = blackFillStyle;
        ctx.font = font;
        ctx.save();

        /*Text in data format loop*/
        var anglenew;
        for (let i = 0; i < data.datapoints.length; i++) {
            anglenew = (Math.PI * 2 * (data.datapoints[i].y / myTotal)) / 2;
            let angleMiddle = anglenew / 6;
            let fx = canvas.width / 2 + (radius * 1.01) * Math.cos(angle + angleMiddle);
            let fy = canvas.height / 2 + (radius * 1.01) * Math.sin(angle + angleMiddle);
            ctx.translate(fx, fy);
            ctx.rotate(angle + 1.8);
            ctx.fillText(data.datapoints[i].label.toString(), 0, 0);
            ctx.rotate(-(angle + 1.8));
            ctx.translate(-fx, -fy);
            angle += (Math.PI * (data.datapoints[i].y / myTotal));
        }
        ctx.restore();
        return linecord;
        // console.log("End : drawMeter");
    } catch (e) {
        console.log("error occured in drawMeter : ", e);
    }
}

module.exports = drawMeterChart;

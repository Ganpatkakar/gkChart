// import GetMousePos from "../mouse_position";
const GetMousePos = require("../mouse_position");
// import cssStyle from "../css_style";
const cssStyle = require("../css_style");
// import ratio from "../reatio";
const ratio = require("../reatio");

function BarChartUpperCanvas(nr, ctx, linecord, container, chart) {
    try {
        // console.log("Start : barChartUpperCanvas");
        let dataPointLen = chart.data[0].datapoints.length;
        let wid = document.getElementById('canvasupper' + nr).width - 100;
        var spacingHorizontal = wid / dataPointLen;
        let lineCordRepeat = linecord.length / dataPointLen;
        const canvasUpper = document.getElementById('canvasupper' + nr);
        const chartToolTip = document.querySelector('#' + container + ' .canvasjs-chart-tooltip');
        const canvasUpperHeight = canvasUpper.height;
        const canvasUpperWidth = canvasUpper.width;
        if(canvasUpper) {
            canvasUpper.addEventListener('mousemove', function (evt) {
                let mousePos = GetMousePos(canvasUpper, evt);
                let details = '';
                for (let i = 0; i < dataPointLen; i++) {
                    ctx.beginPath();
                    let x1 = i * spacingHorizontal + 100;
                    let x2 = spacingHorizontal;
                    let y1 = 0;
                    let y2 = canvasUpperHeight - 60;
                    ctx.rect(x1, y1, x2, y2);
                    if (ctx.isPointInStroke(mousePos.x, mousePos.y) || ctx.isPointInPath(mousePos.x, mousePos.y)) {
                        for (let j = 0; j < lineCordRepeat; j++) {
                            let position = j * dataPointLen + i;
                            ctx.beginPath();
                            ctx.rect(linecord[position].x, linecord[position].y, linecord[position].wid, linecord[position].hei);
                            ctx.lineWidth = .5;
                            ctx.fillStyle = 'rgba(0,0,0,.3)';
                            ctx.fill();
                            ctx.stroke();
                            if(chartToolTip) {
                                cssStyle(chartToolTip, {
                                    "left": mousePos.x / ratio(ctx) + 30 + "px",
                                    "top": mousePos.y / ratio(ctx) + "px",
                                    "display": "block"
                                });
                            }
                            details += `<div style="color: ${linecord[position].dataColor}">${linecord[position].dataLabel}  <br />  ${linecord[position].label} : ${linecord[position].dataval} <br /></div>`;
                        }
                        ctx.beginPath();
                        let lineX = x1 + (spacingHorizontal / 2);
                        ctx.setLineDash([5, 15]);
                        ctx.strokeStyle = 'rgba(0,0,0,1)';
                        ctx.lineWidth = 1;
                        ctx.moveTo(lineX, y1);
                        ctx.lineTo(lineX, y2);
                        ctx.stroke();
                        chartToolTip.innerHTML = details;
                        break;
                    }
                    ctx.closePath();
                }
            }.bind(this), false);
        }
        // console.log("End : barChartUpperCanvas");
    } catch (e) {
        console.log("error occurred in barChartUpperCanvas : ", e);
    }
}

module.exports = BarChartUpperCanvas;

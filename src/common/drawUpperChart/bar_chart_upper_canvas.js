// import GetMousePos from "../mouse_position";
const GetMousePos = require("../mouse_position");
// import cssStyle from "../css_style";
const cssStyle = require("../css_style");
// import ratio from "../reatio";
const ratio = require("../reatio");

const gkChartConsts = require("../../invokeCharts/enums");

const strokeStyle = gkChartConsts.strokeStyle;
const canvasHeightSpareForDetails = gkChartConsts.canvasHeightSpareForDetails;
let canvasWidthSpareForDetails = gkChartConsts.canvasWidthSpareForDetails;

function BarChartUpperCanvas(nr, ctx, linecord, container, chart, maxTextWidth) {
    try {
        // console.log("Start : barChartUpperCanvas");
        if(maxTextWidth > canvasWidthSpareForDetails) {
            canvasWidthSpareForDetails = maxTextWidth;
        }

        let dataPointLen = chart.data[0].datapoints.length;
        let wid = document.getElementById('canvasupper' + nr).width - canvasWidthSpareForDetails;
        let hei = document.getElementById('canvasupper' + nr).height - canvasHeightSpareForDetails;
        const spacingHorizontal = wid / dataPointLen;
        const spacingVertical = hei / dataPointLen;
        let lineCordRepeat = linecord.length / dataPointLen;
        const canvasUpper = document.getElementById('canvasupper' + nr);
        const chartToolTip = document.querySelector('#' + container + ' .canvasjs-chart-tooltip');
        const canvasUpperHeight = canvasUpper.height;
        // const barHeight = spacingVertical / lineCordRepeat * .80;
        // const canvasUpperWidth = canvasUpper.width;
        if(canvasUpper) {
            canvasUpper.addEventListener('mousemove', function (evt) {
                let mousePos = GetMousePos(canvasUpper, evt);
                let details = '';
                for (let i = 0; i < dataPointLen; i++) {
                    ctx.beginPath();
                    let x1 = canvasWidthSpareForDetails;
                    let x2 = wid;
                    let y1 = i * spacingVertical;
                    let y2 = spacingVertical;
                    ctx.rect(x1, y1, x2, y2);

                    if (ctx.isPointInStroke(mousePos.x, mousePos.y) || ctx.isPointInPath(mousePos.x, mousePos.y)) {
                        ctx.beginPath();
                        ctx.rect(x1, y1, x2, y2);
                        ctx.fillStyle = 'rgba(0,0,0,.1)';
                        ctx.fill();
                        ctx.closePath();
                        for (let j = 0; j < lineCordRepeat; j++) {
                            let position = j * dataPointLen + i;
                            // ctx.beginPath();
                            // ctx.rect(linecord[position].x, linecord[position].y, linecord[position].wid, linecord[position].hei);
                            // ctx.lineWidth = .5;
                            // ctx.fillStyle = 'rgba(0,0,0,.3)';
                            // ctx.fill();
                            // ctx.stroke();
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
                        ctx.strokeStyle = strokeStyle;
                        ctx.lineWidth = 1;
                        ctx.moveTo(lineX, y1);
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

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

function stackedChartUpperCanvas(nr, ctx, lineCord, container, chart, maxTextWidth = 0) {
    try {
        // console.log("Start : barChartUpperCanvas");
        if(maxTextWidth > canvasWidthSpareForDetails) {
            canvasWidthSpareForDetails = maxTextWidth;
        }
        console.log(lineCord);
        let dataPointLen = chart.categories.length;
        let wid = document.getElementById('canvasupper' + nr).width - canvasWidthSpareForDetails;
        const spacingHorizontal = wid / dataPointLen;
        let lineCordRepeat = lineCord.length / dataPointLen;
        const canvasUpper = document.getElementById('canvasupper' + nr);
        const chartToolTip = document.querySelector('#' + container + ' .canvasjs-chart-tooltip');
        const canvasUpperHeight = canvasUpper.height;
        // const canvasUpperWidth = canvasUpper.width;
        if(canvasUpper) {
            canvasUpper.addEventListener('mousemove', function (evt) {
                let mousePos = GetMousePos(canvasUpper, evt);
                let details = '';
                for (let i = 0; i < dataPointLen; i++) {
                    ctx.beginPath();
                    let x1 = i * spacingHorizontal + canvasWidthSpareForDetails;
                    let x2 = spacingHorizontal;
                    let y1 = 0;
                    let y2 = canvasUpperHeight - canvasHeightSpareForDetails;
                    ctx.rect(x1, y1, x2, y2);

                    if (ctx.isPointInStroke(mousePos.x, mousePos.y) || ctx.isPointInPath(mousePos.x, mousePos.y)) {
                        ctx.beginPath();
                        ctx.rect(x1, y1, x2, y2);
                        ctx.fillStyle = 'rgba(0,0,0,.05)';
                        ctx.fill();
                        ctx.closePath();
                        for (let j = 0; j < lineCordRepeat; j++) {
                            let position = j * dataPointLen + i;
                            for(let k = lineCord[position].length -1; k >= 0; k--) {
                                const dataPoint = lineCord[position][k];
                                details += `<div style="color: ${dataPoint.dataColor}">${dataPoint.dataLabel}  
                                        <br />  ${dataPoint.label} : ${dataPoint.dataVal} <br /></div>`;
                            }
                        }
                        if(chartToolTip) {
                            cssStyle(chartToolTip, {
                                "left": mousePos.x / ratio(ctx) + 30 + "px",
                                "top": mousePos.y / ratio(ctx) + "px",
                                "display": "block"
                            });
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

module.exports = stackedChartUpperCanvas;

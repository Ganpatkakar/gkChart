import GetMousePos from "../mouse_position";
import ratio from "../reatio";
import cssStyle from "../css_style";
import gkChartConsts from "../../invokeCharts/enums";

const strokeStyle = gkChartConsts.strokeStyle;
const canvasHeightSpareForDetails = gkChartConsts.canvasHeightSpareForDetails;
let canvasWidthSpareForDetails = gkChartConsts.canvasWidthSpareForDetails;

export default function columnChartUpperCanvas(nr: any, ctx: any, linecord: any, container: any, chart: any, maxTextWidth = 0) {
    try {
        // console.log("Start : barChartUpperCanvas");
        if(maxTextWidth > canvasWidthSpareForDetails) {
            canvasWidthSpareForDetails = maxTextWidth;
        }
        const canvasUpper: any = document.getElementById('canvasupper' + nr);
        let dataPointLen = chart.data[0].datapoints.length;
        let wid = canvasUpper.width - canvasWidthSpareForDetails;
        const spacingHorizontal = wid / dataPointLen;
        let lineCordRepeat = linecord.length / dataPointLen;
        const chartToolTip: any = document.querySelector('#' + container + ' .canvasjs-chart-tooltip');
        const canvasUpperHeight = canvasUpper.height;
        // const canvasUpperWidth = canvasUpper.width;
        if(canvasUpper) {
            canvasUpper.addEventListener('mousemove', function (evt: any) {
                let mousePos: any = GetMousePos(canvasUpper, evt);
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
            // @ts-ignore
            }.bind(this), false);
        }
        // console.log("End : barChartUpperCanvas");
    } catch (e) {
        console.log("error occurred in barChartUpperCanvas : ", e);
    }
}

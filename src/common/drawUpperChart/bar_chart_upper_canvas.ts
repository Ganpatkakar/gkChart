import GetMousePos from "../mouse_position";
import ratio from "../reatio";
import cssStyle from "../css_style";
import gkChartConsts from "../../invokeCharts/enums";

const strokeStyle = gkChartConsts.strokeStyle;
const canvasHeightSpareForDetails = gkChartConsts.canvasHeightSpareForDetails;
let canvasWidthSpareForDetails = gkChartConsts.canvasWidthSpareForDetails;

export default function BarChartUpperCanvas(nr: any, ctx: any, linecord: any, container: any, chart: any, maxTextWidth: any) {
    try {
        // console.log("Start : barChartUpperCanvas");
        if(maxTextWidth > canvasWidthSpareForDetails) {
            canvasWidthSpareForDetails = maxTextWidth;
        }
        const canvasUpper: any = document.getElementById('canvasupper' + nr);

        let dataPointLen = chart.data[0].datapoints.length;
        let wid = canvasUpper.width - canvasWidthSpareForDetails;
        let hei = canvasUpper.height - canvasHeightSpareForDetails;
        const spacingHorizontal = wid / dataPointLen;
        const spacingVertical = hei / dataPointLen;
        let lineCordRepeat = linecord.length / dataPointLen;
        const chartToolTip: any = document.querySelector('#' + container + ' .canvasjs-chart-tooltip');
        const canvasUpperHeight = canvasUpper.height;
        // const barHeight = spacingVertical / lineCordRepeat * .80;
        // const canvasUpperWidth = canvasUpper.width;
        if(canvasUpper) {
            canvasUpper.addEventListener('mousemove', function (evt: any) {
                let mousePos: any = GetMousePos(canvasUpper, evt);
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
                            if(chartToolTip) {
                                cssStyle(chartToolTip, {
                                    "left": mousePos.x / ratio(ctx) + 30 + "px",
                                    "top": mousePos.y / ratio(ctx) + 30 + "px",
                                    "display": "block"
                                });
                            }
                            details += `<div style="color: ${linecord[position].dataColor}">${linecord[position].dataLabel} - ${linecord[position].label} : <b>${linecord[position].dataval}</b> <br /></div>`;
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

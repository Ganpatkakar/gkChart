// import GetMousePos from "../mouse_position";
import GetMousePos from "../mouse_position";
// import cssStyle from "../css_style";
// import ratio from "../reatio";
import ratio from "../reatio";
import cssStyle from "../css_style";
import gkChartConsts from "../../invokeCharts/enums";

const strokeStyle = gkChartConsts.strokeStyle;
const canvasHeightSpareForDetails = gkChartConsts.canvasHeightSpareForDetails;
let canvasWidthSpareForDetails = gkChartConsts.canvasWidthSpareForDetails;

export default function LineChartUpperCanvas(nr: any, ctx: any, linecord: any, container: any, chart: any, maxTextWidth?: any) {
    try {
        // console.log("Start : lineChartUpperCanvas");
        if(maxTextWidth > canvasWidthSpareForDetails) {
            canvasWidthSpareForDetails = maxTextWidth;
        }
        let dataPointLen = chart.data[0].datapoints.length;
        const canvasUpper: any = document.getElementById('canvasupper' + nr);
        const chartToolTip: any = document.querySelector('#' + container + ' .canvasjs-chart-tooltip');
        let wid: any = canvasUpper.width - canvasWidthSpareForDetails
        let spacingHorizontal = wid / dataPointLen;
        let lineCordRepeat = linecord.length / dataPointLen;
        if (canvasUpper) {
            canvasUpper.addEventListener('mousemove', function (evt: any) {
                let details = '';
                let mousePos: any = GetMousePos(canvasUpper, evt);
                for (let i = 0; i < dataPointLen; i++) {
                    ctx.beginPath();
                    let x1 = i * spacingHorizontal + canvasWidthSpareForDetails;
                    let x2 = spacingHorizontal;
                    let y1 = 0;
                    let y2 = canvasUpper.height - canvasHeightSpareForDetails;
                    ctx.rect(x1, y1, x2, y2);
                    if (ctx.isPointInStroke(mousePos.x, mousePos.y) || ctx.isPointInPath(mousePos.x, mousePos.y)) {
                        for (let j = 0; j < lineCordRepeat; j++) {
                            ctx.beginPath();
                            let position = j * dataPointLen + i;
                            ctx.arc(linecord[position].x, linecord[position].y, 12, 0, 2 * Math.PI);
                            //ctx.lineWidth = 5;
                            ctx.strokeStyle = linecord[position].dataColor; //'rgba(0,0,0,.7)';
                            ctx.fillStyle = linecord[position].dataColor; //'rgba(0,0,0,.7)';
                            //ctx.stroke();
                            ctx.fill();
                            if (chartToolTip) {
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
                        ctx.strokeStyle = strokeStyle;
                        ctx.lineWidth = 1;
                        ctx.moveTo(lineX, y1);
                        ctx.lineTo(lineX, y2);
                        ctx.stroke();

                        chartToolTip.innerHTML = details;
                        break;
                    }
                    ctx.closePath();
                }
            // @ts-ignore
            }.bind(this), false);
        }
        // console.log("End : lineChartUpperCanvas");
    } catch (e) {
        console.log("error occurred in lineChartUpperCanvas : ", e);
    }
}

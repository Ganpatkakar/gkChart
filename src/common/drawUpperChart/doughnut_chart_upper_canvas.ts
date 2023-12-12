// import GetMousePos from "../mouse_position";
const GetMousePos = require("../mouse_position");
// import cssStyle from "../css_style";
const cssStyle = require("../css_style");
// import ratio from "../reatio";
const ratio = require("../reatio");

function DoughnutChartUpperCanvas(nr, ctx, linecord, container) {
    try {
        // console.log("Start : donutChartUpperCanvas");
        const canvasUpper =document.getElementById('canvasupper' + nr);
        const chartToolTip = document.querySelector('#' + container + ' .canvasjs-chart-tooltip');
        const canvasUpperHeight = canvasUpper.height;
        const canvasUpperWidth = canvasUpper.width;
        if(canvasUpper) {
            canvasUpper.addEventListener('mousemove', function (evt) {
                ctx.clearRect(0, 0, canvasUpperWidth,canvasUpperHeight);
                let linewidth = 80;
                let mousePos = GetMousePos(canvasUpper, evt);
                for (let i = 0; i < linecord.length; i++) {
                    let radius = linecord[i].hei / 2 - linewidth;
                    ctx.lineWidth = linewidth * 2;
                    ctx.beginPath();
                    ctx.arc(linecord[i].wid / 2, linecord[i].hei / 2, radius, linecord[i].startangle, linecord[i].lastangle, false);
                    if (ctx.isPointInStroke(mousePos.x, mousePos.y)) {
                        ctx.strokeStyle = "rgba(0,0,0,0.2)";
                        ctx.stroke();
                        if(chartToolTip) {
                            cssStyle(chartToolTip, {
                                'display': 'block',
                                'left': mousePos.x / ratio(ctx) + "px",
                                'top': mousePos.y / ratio(ctx) + "px"
                            });
                        }
                        chartToolTip.innerHTML = linecord[i].label + ' : ' + linecord[i].y;
                        break;
                    }
                    if (!(ctx.isPointInStroke(mousePos.x, mousePos.y))) {
                        ctx.clearRect(0, 0, canvasUpperWidth,canvasUpperHeight);
                    }
                }
            }.bind(this), false);

            canvasUpper.addEventListener('mouseout', function () {
                setTimeout(function () {
                    ctx.clearRect(0, 0, canvasUpperWidth,canvasUpperHeight);
                    if(chartToolTip) {
                        cssStyle(chartToolTip, {
                            'display': 'none'
                        });
                    }
                }, 2000);
            });
        }
        // console.log("End : donutChartUpperCanvas");
    } catch (e) {
        console.log("error occurred in donutChartUpperCanvas : ", e);
    }
}

module.exports = DoughnutChartUpperCanvas;

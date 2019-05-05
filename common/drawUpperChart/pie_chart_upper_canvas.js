import GetMousePos from "../mouse_position";
import cssStyle from "../css_style";
import ratio from "../reatio";

function PieChartUpperCanvas(nr, ctx, linecord, container) {
    try {
        // console.log("Start : pieChartUpperCanvas");
        const canvasUpper = document.getElementById('canvasupper' + nr);
        const chartToolTip = document.querySelector('#' + container + ' .canvasjs-chart-tooltip');
        const canvasUpperHeight = canvasUpper.height;
        const canvasUpperWidth = canvasUpper.width;
        if(canvasUpper) {
            canvasUpper.addEventListener('mousemove', function (evt) {
                ctx.clearRect(0, 0, canvasUpperWidth, canvasUpperHeight);
                let mousePos = GetMousePos(canvasUpper, evt);
                let lineCordLength = linecord.length;
                for (var i = 0; i < lineCordLength; i++) {
                    ctx.beginPath();
                    ctx.lineTo(linecord[i].wid / 2, linecord[i].hei / 2);
                    ctx.arc(linecord[i].wid / 2, linecord[i].hei / 2, linecord[i].hei / 2, linecord[i].startangle, linecord[i].lastangle, false);
                    ctx.lineTo(linecord[i].x, linecord[i].x);
                    if (ctx.isPointInStroke(mousePos.x, mousePos.y) || ctx.isPointInPath(mousePos.x, mousePos.y)) {
                        ctx.fillStyle = 'rgba(0,0,0,.3)';
                        ctx.fill();
                        if(chartToolTip) {
                            cssStyle(chartToolTip, {
                                'display': 'block',
                                'left': mousePos.x / ratio(ctx) + "px",
                                'top': mousePos.y / ratio(ctx) + "px"
                            });
                            chartToolTip.innerHTML = linecord[i].label + ' : ' + linecord[i].y;
                        }

                        break;
                    } else {
                        ctx.clearRect(0, 0, canvasUpperWidth, canvasUpperHeight);
                    }
                }
            }.bind(this), false);

            canvasUpper.addEventListener('mouseout', function (evt) {
                setTimeout(function () {
                    ctx.clearRect(0, 0, canvasUpperWidth, canvasUpperHeight);
                    cssStyle(chartToolTip, {
                        'display': 'none'
                    });
                }, 2000);
            });
        }
        // console.log("End : pieChartUpperCanvas");
    } catch (e) {
        console.log("error occurred in pieChartUpperCanvas : ", e);
    }
}

export default PieChartUpperCanvas;

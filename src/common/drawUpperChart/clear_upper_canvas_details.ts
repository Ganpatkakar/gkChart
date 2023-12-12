// import cssStyle from "../css_style";
const cssStyle = require("../css_style");

export default function ClearDetails(nr, ctx, container): void {
    const canvasUpperNr: any = document.getElementById('canvasupper' + nr);
    if (canvasUpperNr) {
        canvasUpperNr.addEventListener('mousemove', function (evt) {
            ctx.clearRect(0, 0, canvasUpperNr.width, canvasUpperNr.height);
        }.bind(this));

        canvasUpperNr.addEventListener('mouseout', function (evt) {
            setTimeout(function () {
                ctx.clearRect(0, 0, canvasUpperNr.width, canvasUpperNr.height);
                const chartToolTip = document.querySelector('#' + container + ' .canvasjs-chart-tooltip');
                if (chartToolTip) {
                    cssStyle(chartToolTip, {
                        'display': 'none'
                    });
                }
            }, 2000);
        }.bind(this));
    }
}

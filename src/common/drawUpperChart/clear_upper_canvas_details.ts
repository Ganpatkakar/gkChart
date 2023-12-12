// import cssStyle from "../css_style";
import cssStyle from "../css_style";

export default function ClearDetails(nr: any, ctx: any, container: any): void {
    const canvasUpperNr: any = document.getElementById('canvasupper' + nr);
    if (canvasUpperNr) {
        canvasUpperNr.addEventListener('mousemove', function (evt: any) {
            ctx.clearRect(0, 0, canvasUpperNr.width, canvasUpperNr.height);
        // @ts-ignore
        }.bind(this));

        canvasUpperNr.addEventListener('mouseout', function (evt: any) {
            setTimeout(function () {
                ctx.clearRect(0, 0, canvasUpperNr.width, canvasUpperNr.height);
                const chartToolTip = document.querySelector('#' + container + ' .canvasjs-chart-tooltip');
                if (chartToolTip) {
                    cssStyle(chartToolTip, {
                        'display': 'none'
                    });
                }
            }, 2000);
        // @ts-ignore
        }.bind(this));
    }
}

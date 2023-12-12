import { font, toolTipBgColor } from '../invokeCharts/enums';

export default class ChartSurface {

    ratio(canvasContainer?: any) {
        // let ctx = canvasContainer.getContext('2d');
        // let dpr = window.devicePixelRatio || 1;
        // let bsr = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
        // return dpr / bsr;
        return 2;
    }

    prepSurface(nr: any, width: any, height: any, containerId: any) {
        try {
            // console.log("Start : prepSurface");
            const canvas = document.createElement("CANVAS");
            canvas.id = 'canvas' + nr;
            canvas.setAttribute('class', 'canvas');
            canvas.setAttribute("style", "position:absolute");
            const container: any = document.getElementById(containerId);
            container.appendChild(canvas);

            const canvasDom: any = document.getElementById('canvas' + nr);
            canvasDom.width = width * this.ratio(canvasDom);
            canvasDom.height = height * this.ratio(canvasDom);
            canvasDom.style.width = width + "px";
            canvasDom.style.height = height + "px";

            // document.getElementById('container').append('<canvas id="canvas' + nr + '" class="canvas"' +
            //     ' style="position:absolute;" width="' + width + '" height="' + height + '"></canvas> ');
            // console.log("End : prepSurface");
        } catch (e) {
            console.log("error occurred in prepareSurface : ", e);
        }
    }

    prepUI(nr: any) {
        try {
            // console.log("Start : prepUI");
            //// console.log(nr);
            const canvas: any = document.getElementById('canvas' + nr);
            const ctx = canvas.getContext('2d');
            ctx.font = font;
            ctx.lineWidth = 1;
            // console.log("End : prepUI");
            return ctx;
        } catch (e) {
            console.log("error occurred in prepUI : ", e);
        }
    }

    preparePlot(nr: any, sizex: any, sizey: any, container: any) {
        try {
            // console.log("Start : preparePlot");
            this.prepSurface(nr, sizex, sizey, container);
            // console.log("End : preparePlot");
            return this.prepUI(nr);
        } catch (e) {
            console.log("error occurred in preparePlot : ", e);
        }
    }

    prepSurfaceupper(nr: any, width: any, height: any, containerId: any) {
        try {
            // console.log("Start : prepSurfaceupper");
            const container: any = document.getElementById(containerId);
            let innerCotent =
                `<canvas id="canvasupper${nr}" class="canvas" style="position:absolute;"
                    width="${width}" height="${height}"> </canvas>
                <div class="canvasjs-chart-tooltip" style="position:absolute;height:auto;
                    box-shadow: rgba(0, 0, 0, 0.0980392) 1px 1px 2px 2px; z-index: 1000; display: none; 
                    border-radius: 3px; transition: left 0.2s ease-out, bottom 0.2s ease-out; pointer-events: none;
                    background-color: ${toolTipBgColor}; border: 1px solid rgba(0,0,0,.5); padding: 5px;color: #fff">
                        <span style="color:#7F6084;"> </span>
                </div>`;
            container.insertAdjacentHTML('beforeend', innerCotent);

            let canvasDom: any = document.getElementById('canvasupper' + nr);
            canvasDom.width = width * this.ratio(canvasDom);
            canvasDom.height = height * this.ratio(canvasDom);
            canvasDom.style.width = width + "px";
            canvasDom.style.height = height + "px";

            // console.log("End : prepSurfaceupper");
        } catch (e) {
            console.log("error occurred in prepSurfaceupper : ", e);
        }
    }

    prepUIUpper(nr: any) {
        try {
            // console.log("Start : prepUIUpper");
            const canvas: any = document.getElementById('canvasupper' + nr);
            const ctx: any = canvas.getContext('2d');
            //ctx.font = '18px Arial';
            ctx.lineWidth = 1;
            // console.log("End : prepUIUpper");
            return ctx;
        } catch (e) {
            console.log("error occurred in prepUIUpper : ", e);
        }
    }

    preparePlotUpper(nr: any, sizex: any, sizey: any, container: any) {
        try {
            // console.log("Start : preparePlotUpper");
            this.prepSurfaceupper(nr, sizex, sizey, container);
            // console.log("End : preparePlotUpper");
            return this.prepUIUpper(nr);
        } catch (e) {
            console.log("error occurred in preparePlotUpper : ", e);
        }
    }
}

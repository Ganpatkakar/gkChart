class ChartSurface {

    ratio(canvasContainer) {
        let ctx = canvasContainer.getContext('2d');
        let dpr = window.devicePixelRatio || 1;
        let bsr = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
        // return dpr / bsr;
        return 2;
    }

    prepSurface(nr, width, height, container) {
        try {
            // console.log("Start : prepSurface");
            var canvas = document.createElement("CANVAS");
            canvas.id = 'canvas' + nr;
            canvas.setAttribute('class', 'canvas');
            canvas.setAttribute("style", "position:absolute");
            var container = document.getElementById(container);
            container.appendChild(canvas);

            var canvasDom = document.getElementById('canvas' + nr);
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

    prepUI(nr) {
        try {
            // console.log("Start : prepUI");
            //// console.log(nr);
            var canvas = document.getElementById('canvas' + nr);
            var ctx = canvas.getContext('2d');
            ctx.font = "23px arial";
            ctx.lineWidth = 1;
            // console.log("End : prepUI");
            return ctx;
        } catch (e) {
            console.log("error occurred in prepUI : ", e);
        }
    }

    preparePlot(nr, sizex, sizey, container) {
        try {
            // console.log("Start : preparePlot");
            this.prepSurface(nr, sizex, sizey, container);
            var canvasContext = this.prepUI(nr);
            // console.log("End : preparePlot");
            return canvasContext;
        } catch (e) {
            console.log("error occurred in preparePlot : ", e);
        }
    }

    prepSurfaceupper(nr, width, height, container) {
        try {
            // console.log("Start : prepSurfaceupper");
            var container = document.getElementById(container);
            var innerCotent =
                `<canvas id="canvasupper${nr}" class="canvas" style="position:absolute;"
                    width="${width}" height="${height}"> </canvas>
                <div class="canvasjs-chart-tooltip" style="position:absolute;height:auto;
                    box-shadow: rgba(0, 0, 0, 0.0980392) 1px 1px 2px 2px; z-index: 1000; display: none; 
                    border-radius: 3px; transition: left 0.2s ease-out, bottom 0.2s ease-out; pointer-events: none;
                    background-color: rgba(0,0, 0, .8); border: 1px solid rgba(0,0,0,.5); padding: 5px;color: #fff">
                        <span style="color:#7F6084;"> </span>
                </div>`;
            container.insertAdjacentHTML('beforeend', innerCotent);

            var canvasDom = document.getElementById('canvasupper' + nr);
            canvasDom.width = width * this.ratio(canvasDom);
            canvasDom.height = height * this.ratio(canvasDom);
            canvasDom.style.width = width + "px";
            canvasDom.style.height = height + "px";

            // console.log("End : prepSurfaceupper");
        } catch (e) {
            console.log("error occurred in prepSurfaceupper : ", e);
        }
    }

    prepUIUpper(nr) {
        try {
            // console.log("Start : prepUIUpper");
            var canvas = document.getElementById('canvasupper' + nr);
            var ctx = canvas.getContext('2d');
            //ctx.font = '18px Arial';
            ctx.lineWidth = 1;
            // console.log("End : prepUIUpper");
            return ctx;
        } catch (e) {
            console.log("error occurred in prepUIUpper : ", e);
        }
    }

    preparePlotUpper(nr, sizex, sizey, container) {
        try {
            // console.log("Start : preparePlotUpper");
            this.prepSurfaceupper(nr, sizex, sizey, container);
            var canvasContext = this.prepUIUpper(nr);
            // console.log("End : preparePlotUpper");
            return canvasContext;
        } catch (e) {
            console.log("error occurred in preparePlotUpper : ", e);
        }
    }
}

module.exports = ChartSurface;

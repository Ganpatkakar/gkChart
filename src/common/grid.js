const drawGrid = (nr, verticanNr, ctx, data) => {
    try {
        // console.log("Start : drawGrid");
        var canvas = document.getElementById('canvas' + nr);
        var hei = canvas.height - 60;
        //// console.log("canvas height to draw grid lines:" + hei);
        var wid = canvas.width - 100;
        //// console.log("canvas width to draw grid lines:" + wid);
        ctx.beginPath();
        ctx.fillStyle = "#000";

        var spacingVertical = hei / verticanNr;
        //// console.log("canvas vertical spacings to draw grid lines:" + spacingVertical);
        var spacingHorizontal = wid / data[0].datapoints.length;
        //// console.log("canvas horizontal spacings to draw grid lines:" + spacingHorizontal);
        /*// console.log(spacingVertical + 20);
         // console.log(wid);*/
        var barwidth = 0;
        if (data.length > 1) {
            barwidth = (spacingHorizontal - 30) / data.length;
        } else {
            barwidth = 30;
        }
        if (barwidth > 30) {
            barwidth = 30;
        }
        /*Vertical grid*/
        // Vartical first grid row
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'rgba(0,0,0,1)';
        ctx.moveTo(100, 0);
        ctx.lineTo(100, hei + 10);
        ctx.stroke();

        // vartical other grid rows
        for (var i = 0; i < data[0].datapoints.length; i++) {
            ctx.beginPath();
            ctx.moveTo(i * spacingHorizontal + spacingHorizontal / 2 + 100, hei);
            ctx.lineTo(i * spacingHorizontal + spacingHorizontal / 2 + 100, hei + 10);
            ctx.stroke();
        }
        ctx.beginPath();
        ctx.moveTo(wid + 99, hei);
        ctx.lineTo(wid + 99, hei + 10);
        ctx.stroke();

        /*Horizontal grid*/
        for (var i = 0; i < verticanNr + 1; i++) {
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(0,0,0,.2)';
            ctx.lineWidth = .4;
            if (i == verticanNr) {
                ctx.lineWidth = 2;
                ctx.strokeStyle = 'rgba(0,0,0,1)';
            }
            ctx.moveTo(90, i * spacingVertical);
            ctx.lineTo(wid + 100, i * spacingVertical);
            ctx.stroke();
            ctx.strokeStyle = 'rgba(0,0,0,.2)';
        }
        // console.log("End : drawGrid");
        return barwidth;
    } catch (e) {
        console.log("error occurred in drawGrid : ", e);
    }
};

const drawGraphicLinearYcord = (canvas, ctx, verticalNr, cdata) => {
    try {
        // console.log("Start : drawGraphicLinearYcord");
        //// console.log(cdata);
        var canvas = document.getElementById(canvas);
        var hei = canvas.height - 60;
        var wid = canvas.width - 100;
        var spacingVertical = hei / verticalNr;
        var spacingHorizontal = wid / cdata.data[0].datapoints.length;
        //// console.log(spacingHorizontal);
        ctx.beginPath();
        ctx.fillStyle = "#000";
        ctx.save();
        ctx.translate(0, canvas.height / 2);
        ctx.rotate(-Math.PI / 2);
        ctx.textAlign = "center";
        if (cdata.yaxis.title === undefined) {
            cdata.yaxis.title = "Y-Axis"
        }
        ctx.fillText(cdata.yaxis.title, 0, 20);

        ctx.restore();
        /* xaxis Horizontal Documents*/
        ctx.save();
        //ctx.font = "18px";
        var xangle;
        for (var i = 0; i < cdata.data[0].datapoints.length; i++) {
            if (ctx.measureText(cdata.data[0].datapoints[i].label).width > spacingHorizontal / 1.1) {
                xangle = 'angular';
                /*angular*/
                break;
            } else if (ctx.measureText(cdata.data[0].datapoints[i].label).width < spacingHorizontal / 2) {
                xangle = 'straight';
                /*straight*/
            }
        }
        if (xangle === 'angular') {
            for (var i = 0; i < cdata.data[0].datapoints.length; i++) {
                ctx.translate(i * spacingHorizontal + 104, hei + 8);
                ctx.rotate(Math.PI / 4);
                ctx.fillText(cdata.data[0].datapoints[i].label, 0, 0);
                //// console.log(cdata.xaxis.categories[i], i*spacingHorizontal, hei-spacingVertical);
                ctx.rotate(-Math.PI / 4);
                ctx.translate(-(i * spacingHorizontal + 104), -(hei + 8));
            }
        } else {
            for (var i = 0; i < cdata.data[0].datapoints.length; i++) {
                let textWidth = ctx.measureText(cdata.data[0].datapoints[i].label).width;
                let fromLeft = (i * spacingHorizontal + spacingHorizontal / 2 + 100) - textWidth / 2;
                ctx.fillText(cdata.data[0].datapoints[i].label, fromLeft, hei + 35);
            }
        }
        //ctx.restore();

        /* yaxis Vertical Documents*/
        ctx.save();
        for (var i = 0; i < verticalNr + 1; i++) {
            var max = cdata.yaxis.max;
            var min = cdata.yaxis.min;
            var difference = cdata.yaxis.difference;
            ctx.fillText(i * difference + min, 35, canvas.height - (i * spacingVertical + 40));
        }
        //ctx.restore();
        ctx.closePath();
        // console.log("End : drawGraphicLinearYcord");
    } catch (e) {
        console.log("error occurred in drawGraphicLinearYcord : ", e);
    }

};

exports.drawGrid = drawGrid;
exports.drawGraphicLinearYcord = drawGraphicLinearYcord;
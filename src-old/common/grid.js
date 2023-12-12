const gkChartConsts = require("../invokeCharts/enums");

const xAxisSpacing = gkChartConsts.xAxisSpacing;
const fontLineHeight = gkChartConsts.fontLineHeight;
const strokeStyle = gkChartConsts.strokeStyle;
const blackFillStyle = gkChartConsts.blackFillStyle;
const canvasHeightSpareForDetails = gkChartConsts.canvasHeightSpareForDetails;
let canvasWidthSpareForDetails = gkChartConsts.canvasWidthSpareForDetails;

const drawGrid = (nr, verticanNr, ctx, data, maxTextWidth = 0) => {
    try {
        // console.log("Start : drawGrid");
        if(maxTextWidth > canvasWidthSpareForDetails) {
            canvasWidthSpareForDetails = maxTextWidth;
        }
        const canvas = document.getElementById('canvas' + nr);
        const hei = canvas.height - canvasHeightSpareForDetails;
        //// console.log("canvas height to draw grid lines:" + hei);
        const wid = canvas.width - canvasWidthSpareForDetails;
        //// console.log("canvas width to draw grid lines:" + wid);
        ctx.beginPath();
        ctx.fillStyle = blackFillStyle;

        const spacingVertical = hei / verticanNr;
        //// console.log("canvas vertical spacings to draw grid lines:" + spacingVertical);
        const spacingHorizontal = wid / data[0].datapoints.length;
        //// console.log("canvas horizontal spacings to draw grid lines:" + spacingHorizontal);
        /*// console.log(spacingVertical + 20);
         // console.log(wid);*/
        let barwidth = 0;
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
        ctx.strokeStyle = strokeStyle;
        ctx.moveTo(canvasWidthSpareForDetails, 0);
        ctx.lineTo(canvasWidthSpareForDetails, hei + 10);
        ctx.stroke();

        // vartical other grid rows
        for (let i = 0; i < data[0].datapoints.length; i++) {
            ctx.beginPath();
            ctx.moveTo(i * spacingHorizontal + spacingHorizontal / 2 + canvasWidthSpareForDetails, hei);
            ctx.lineTo(i * spacingHorizontal + spacingHorizontal / 2 + canvasWidthSpareForDetails, hei + 10);
            ctx.stroke();
        }
        ctx.beginPath();
        ctx.moveTo(wid + canvasWidthSpareForDetails, hei);
        ctx.lineTo(wid + canvasWidthSpareForDetails, hei + 10);
        ctx.stroke();

        /*Horizontal grid*/
        for (let i = 0; i < verticanNr + 1; i++) {
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(0,0,0,.2)';
            ctx.lineWidth = .6;
            if (i === parseInt(verticanNr)) {
                ctx.lineWidth = 2;
                ctx.strokeStyle = strokeStyle;
            }
            ctx.moveTo(canvasWidthSpareForDetails - 10, i * spacingVertical + 1);
            ctx.lineTo(wid + canvasWidthSpareForDetails, i * spacingVertical + 1);
            ctx.stroke();
        }
        // console.log("End : drawGrid");
        return barwidth;
    } catch (e) {
        console.log("error occurred in drawGrid : ", e);
    }
};

const drawGraphicLinearYcord = (canvasId, ctx, verticalNr, cdata, maxTextWidth = 0) => {
    try {
        // console.log("Start : drawGraphicLinearYcord");
        if(maxTextWidth > canvasWidthSpareForDetails) {
            canvasWidthSpareForDetails = maxTextWidth;
        }
        const canvas = document.getElementById(canvasId);
        const hei = canvas.height - canvasHeightSpareForDetails;
        const wid = canvas.width - canvasWidthSpareForDetails;
        const spacingVertical = hei / verticalNr;
        const spacingHorizontal = wid / cdata.data[0].datapoints.length;
        //// console.log(spacingHorizontal);
        ctx.beginPath();
        ctx.fillStyle = blackFillStyle;
        ctx.save();
        ctx.translate(0, canvas.height / 2);
        ctx.rotate(-Math.PI / 2);
        ctx.textAlign = "center";
        if (!cdata.yaxis.title) {
            cdata.yaxis.title = "Y-Axis data"
        }
        ctx.fillText(cdata.yaxis.title, 0, 20);

        ctx.restore();
        /* xaxis Horizontal Documents*/
        ctx.save();
        let xangle;
        for (let i = 0; i < cdata.data[0].datapoints.length; i++) {
            if (ctx.measureText(cdata.data[0].datapoints[i].label).width > spacingHorizontal / 1.1) {
                xangle = 'angular';
                break;
            } else if (ctx.measureText(cdata.data[0].datapoints[i].label).width < spacingHorizontal / 2) {
                xangle = 'straight';
            }
        }
        if (xangle === 'angular') {
            const translateXWithoutSpacingHorizontal =  xAxisSpacing + spacingHorizontal/2 - fontLineHeight;
            const translateYAxis = hei + 12;
            for (let i = 0; i < cdata.data[0].datapoints.length; i++) {
                const translatexWithSpacing = i * spacingHorizontal + translateXWithoutSpacingHorizontal;
                ctx.translate(translatexWithSpacing, translateYAxis);
                ctx.rotate(Math.PI / 2);
                ctx.fillText(cdata.data[0].datapoints[i].label, 0, 0);
                //// console.log(cdata.xaxis.categories[i], i*spacingHorizontal, hei-spacingVertical);
                ctx.rotate(-Math.PI / 2);
                ctx.translate(-translatexWithSpacing, - translateYAxis);
            }
        } else {
            for (let i = 0; i < cdata.data[0].datapoints.length; i++) {
                let textWidth = ctx.measureText(cdata.data[0].datapoints[i].label).width;
                let fromLeft = (i * spacingHorizontal + spacingHorizontal / 2 + canvasWidthSpareForDetails) - textWidth / 2;
                ctx.fillText(cdata.data[0].datapoints[i].label, fromLeft, hei + 35);
            }
        }
        //ctx.restore();

        /* yaxis Vertical Documents*/
        ctx.save();
        for (let i = 0; i < verticalNr + 1; i++) {
            // const max = cdata.yaxis.max;
            const min = cdata.yaxis.min;
            const difference = cdata.yaxis.difference;
            let yAxis = canvas.height - (i * spacingVertical + canvasHeightSpareForDetails);
            yAxis = i !== verticalNr ? yAxis : yAxis + fontLineHeight;
            const text = String(Math.floor(i * difference + min));
            const xAxis = canvasWidthSpareForDetails - ctx.measureText(text).width - 20;
            ctx.fillText(text, xAxis, yAxis);
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
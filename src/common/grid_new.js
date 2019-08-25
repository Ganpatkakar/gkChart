const gkChartConsts = require("../invokeCharts/enums");

const xAxisSpacing = gkChartConsts.xAxisSpacing;
const fontLineHeight = gkChartConsts.fontLineHeight;
const strokeStyle = gkChartConsts.strokeStyle;
const blackFillStyle = gkChartConsts.blackFillStyle;
const canvasHeightSpareForDetails = gkChartConsts.canvasHeightSpareForDetails;
let canvasWidthSpareForDetails = gkChartConsts.canvasWidthSpareForDetails;

const drawGridNew = (nr, verticanNr, ctx, data, maxTextWidth = 0) => {
    try {
        // console.log("Start : drawGrid");
        if(maxTextWidth > canvasWidthSpareForDetails) {
            canvasWidthSpareForDetails = maxTextWidth;
        }
        const canvas = document.getElementById('canvas' + nr);
        const hei = canvas.height - canvasHeightSpareForDetails;
        const wid = canvas.width - canvasWidthSpareForDetails;
        ctx.beginPath();
        ctx.fillStyle = blackFillStyle;

        const spacingVertical = hei / verticanNr;
        const dataCount = data.categories.length;
        const spacingHorizontal = wid / dataCount;

        /*Vertical grid*/
        // Vartical first grid row
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = strokeStyle;
        ctx.moveTo(canvasWidthSpareForDetails, 0);
        ctx.lineTo(canvasWidthSpareForDetails, hei + 10);
        ctx.stroke();

        // vartical other grid rows
        for (let i = 0; i < dataCount; i++) {
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
            ctx.lineTo(wid + canvasWidthSpareForDetails, i * spacingVertical +1);
            ctx.stroke();
        }
        // console.log("End : drawGrid");
    } catch (e) {
        console.log("error occurred in drawGrid : ", e);
    }
};

const drawNewGraphicLinearYCord = (canvasId, ctx, verticalNr, cdata, maxTextWidth = 0) => {
    try {
        // console.log("Start : drawGraphicLinearYcord");
        if(maxTextWidth > canvasWidthSpareForDetails) {
            canvasWidthSpareForDetails = maxTextWidth;
        }
        const canvas = document.getElementById(canvasId);
        const hei = canvas.height - canvasHeightSpareForDetails;
        const wid = canvas.width - canvasWidthSpareForDetails;
        const spacingVertical = hei / verticalNr;
        const charXAxisLength = cdata.categories.length;
        const spacingHorizontal = wid / charXAxisLength;
        //// console.log(spacingHorizontal);
        ctx.beginPath();
        ctx.fillStyle = blackFillStyle;
        ctx.save();
        ctx.translate(0, canvas.height / 2);
        ctx.rotate(-Math.PI / 2);
        ctx.textAlign = "center";
        if (!cdata.yAxis.title) {
            cdata.yAxis.title = "Y-Axis data"
        }
        ctx.fillText(cdata.yAxis.title, 0, 20);

        ctx.restore();
        /* categories Horizontal Documents*/
        ctx.save();
        let xAngle;
        for (let i = 0; i < charXAxisLength; i++) {
            if (ctx.measureText(cdata.categories[i].label).width > spacingHorizontal / 1.1) {
                xAngle = 'angular';
                break;
            } else if (ctx.measureText(cdata.categories[i].label).width < spacingHorizontal / 2) {
                xAngle = 'straight';
            }
        }
        if (xAngle === 'angular') {
            const translateXWithoutSpacingHorizontal =  xAxisSpacing + spacingHorizontal/2 - fontLineHeight;
            const translateYAxis = hei + 12;
            for (let i = 0; i < charXAxisLength; i++) {
                const translatexWithSpacing = i * spacingHorizontal + translateXWithoutSpacingHorizontal;
                ctx.translate(translatexWithSpacing, translateYAxis);
                ctx.rotate(Math.PI / 2);
                ctx.fillText(cdata.categories[i].label, 0, 0);
                //// console.log(cdata.xaxis.categories[i], i*spacingHorizontal, hei-spacingVertical);
                ctx.rotate(-Math.PI / 2);
                ctx.translate(-translatexWithSpacing, - translateYAxis);
            }
        } else {
            for (let i = 0; i < charXAxisLength; i++) {
                const text = cdata.categories[i].label;
                let textWidth = ctx.measureText(text).width;
                let fromLeft = (i * spacingHorizontal + spacingHorizontal / 2 + canvasWidthSpareForDetails) - textWidth / 2;
                ctx.fillText(text, fromLeft, hei + 35);
            }
        }
        //ctx.restore();

        /* yAxis Vertical Documents*/
        ctx.save();
        const min = cdata.yAxis.min;
        const difference = cdata.yAxis.difference;
        for (let i = 0; i < verticalNr + 1; i++) {
            let yAxis = canvas.height - (i * spacingVertical + canvasHeightSpareForDetails);
            yAxis = i !== verticalNr ? yAxis : yAxis + fontLineHeight;
            const text = String(Math.ceil(i * difference + min));
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

exports.drawGridNew = drawGridNew;
exports.drawNewGraphicLinearYCord = drawNewGraphicLinearYCord;
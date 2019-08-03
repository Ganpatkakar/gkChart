const gkChartConsts = require("../invokeCharts/enums");

const xAxisSpacing = gkChartConsts.xAxisSpacing;
const fontLineHeight = gkChartConsts.fontLineHeight;
const fontSize = gkChartConsts.font;
const strokeStyle = gkChartConsts.strokeStyle;
const blackFillStyle = gkChartConsts.blackFillStyle;
let canvasHeightSpareForDetails = gkChartConsts.canvasHeightSpareForDetails;
let canvasWidthSpareForDetails = gkChartConsts.canvasWidthSpareForDetails;

const drawVerticalGrid = (nr, horizontalNr, ctx, data, maxTextWidth) => {
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

        const spacingVertical = hei / data[0].datapoints.length;
        const spacingHorizontal = wid / horizontalNr;

        /*Vertical grid*/

        // Vertical grid rows
        for (let i = 0; i < data[0].datapoints.length + 1; i++) {
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(0,0,0,.5)';
            ctx.lineWidth = .5;
            ctx.moveTo(canvasWidthSpareForDetails - 10, i * spacingVertical + 1);
            ctx.lineTo(wid + canvasWidthSpareForDetails, i * spacingVertical +1);
            // ctx.stroke();
            ctx.closePath();
        }

        /*Horizontal grid*/
        for (let i = 0; i < horizontalNr + 1; i++) {

            ctx.beginPath();
            ctx.lineWidth = .5;
            ctx.strokeStyle = 'rgba(0,0,0,.5)';
            ctx.moveTo(i * spacingHorizontal + canvasWidthSpareForDetails - 1, 0);
            ctx.lineTo(i * spacingHorizontal + canvasWidthSpareForDetails -1, hei + 10);
            ctx.stroke();
            ctx.closePath();
        }
        // console.log("End : drawGrid");
    } catch (e) {
        console.log("error occurred in drawGrid : ", e);
    }
};

const drawDocumentationDetails = (canvasId, ctx, horizontalNr, cdata, maxTextWidth) => {
    try {
        // console.log("Start : drawGraphicLinearYcord");
        if(maxTextWidth > canvasWidthSpareForDetails) {
            canvasWidthSpareForDetails = maxTextWidth;
        }
        const canvas = document.getElementById(canvasId);
        const hei = canvas.height - canvasHeightSpareForDetails;
        const wid = canvas.width - canvasWidthSpareForDetails;
        const spacingVertical = hei / cdata.data[0].datapoints.length;
        const spacingHorizontal = wid / horizontalNr;
        ctx.beginPath();
        ctx.fillStyle = blackFillStyle;

        /* yAxis data */
        const spacingTopYAxisText = spacingVertical / 2 + fontLineHeight / 2;
        for (let i = 0; i < cdata.data[0].datapoints.length; i++) {
            let textWidth = ctx.measureText(cdata.data[0].datapoints[i].label).width;
            let fromLeft = (canvasWidthSpareForDetails - textWidth - 10); // extra -10 to give more space after y axis test is written
            ctx.beginPath();
            ctx.fillText(cdata.data[0].datapoints[i].label, fromLeft, i * spacingVertical + spacingTopYAxisText);
            ctx.closePath();
        }

        /* xAxis Vertical Documents*/
        for (let i = 0; i < horizontalNr + 1; i++) {
            const min = cdata.yaxis.min;
            const difference = cdata.yaxis.difference;
            const text = i * difference + min;
            let textWidth = ctx.measureText(text).width;
            textWidth = i > 0 ? textWidth : 0;
            ctx.beginPath();
            ctx.fillText(text, i * spacingHorizontal + canvasWidthSpareForDetails - textWidth, hei + 40);
            ctx.closePath();
        }
        ctx.closePath();
        // console.log("End : drawGraphicLinearYcord");
    } catch (e) {
        console.log("error occurred in drawDocumentationDetails : ", e);
    }

};

exports.drawVerticalGrid = drawVerticalGrid;
exports.drawDocumentationDetails = drawDocumentationDetails;
const gkChartConsts = require("../invokeCharts/enums");

const xAxisSpacing = gkChartConsts.xAxisSpacing;
const fontLineHeight = gkChartConsts.fontLineHeight;
const fontSize = gkChartConsts.font;
const strokeStyle = gkChartConsts.strokeStyle;
const blackFillStyle = gkChartConsts.blackFillStyle;
let canvasHeightSpareForDetails = gkChartConsts.canvasHeightSpareForDetails;
let canvasWidthSpareForDetails = gkChartConsts.canvasWidthSpareForDetails;

export const drawVerticalGrid = (nr: any, horizontalNr: any, ctx: any, data: any, maxTextWidth: any) => {
    try {
        // console.log("Start : drawGrid");
        if(maxTextWidth > canvasWidthSpareForDetails) {
            canvasWidthSpareForDetails = maxTextWidth;
        }
        const canvas: any = document.getElementById('canvas' + nr);
        const hei = canvas.height - canvasHeightSpareForDetails;
        const wid = canvas.width - canvasWidthSpareForDetails;
        ctx.beginPath();
        ctx.fillStyle = blackFillStyle;

        const dataCount = data.categories.length;
        const spacingVertical = hei / dataCount;
        const spacingHorizontal = wid / horizontalNr;

        /*Vertical grid*/

        // Vertical grid rows
        for (let i = 0; i < dataCount + 1; i++) {
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(0,0,0,.5)';
            ctx.lineWidth = .5;
            ctx.moveTo(canvasWidthSpareForDetails - 10, i * spacingVertical + 1);
            ctx.lineTo(wid + canvasWidthSpareForDetails, i * spacingVertical +1);
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

export const drawDocumentationDetails = (canvasId: any, ctx: any, horizontalNr: any, cdata: any, maxTextWidth: any) => {
    try {
        // console.log("Start : drawGraphicLinearYcord");
        if(maxTextWidth > canvasWidthSpareForDetails) {
            canvasWidthSpareForDetails = maxTextWidth;
        }
        const canvas: any = document.getElementById(canvasId);
        const hei = canvas.height - canvasHeightSpareForDetails;
        const wid = canvas.width - canvasWidthSpareForDetails;
        const categoriesLength = cdata.categories.length;
        const spacingVertical = hei / categoriesLength;
        const spacingHorizontal = wid / horizontalNr;
        ctx.beginPath();
        ctx.fillStyle = blackFillStyle;

        /* yAxis data */
        const spacingTopYAxisText = spacingVertical / 2 + fontLineHeight / 2;
        for (let i = 0; i < categoriesLength; i++) {
            let textWidth = ctx.measureText(cdata.categories[i].label).width;
            let fromLeft = (canvasWidthSpareForDetails - textWidth - 10); // extra -10 to give more space after y axis test is written
            ctx.beginPath();
            ctx.fillText(cdata.categories[i].label, fromLeft, i * spacingVertical + spacingTopYAxisText);
            ctx.closePath();
        }

        /* xAxis Vertical Documents*/
        for (let i = 0; i < horizontalNr + 1; i++) {
            const min = cdata.xAxis.min;
            const difference = cdata.xAxis.difference;
            const text = String(Math.ceil(i * difference + min));
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


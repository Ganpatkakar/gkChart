import gkChartEnums from "../invokeCharts/enums";
const font = gkChartEnums.font;

export default class DrawChart {

    drawMeter(canvasId: any, ctx: any, verticalNr: any, data: any, range: any, chartColor: any, ChartDataToShow: any) {
        try {
            // console.log("Start : drawMeter");
            const linecord = [];
            const canvas: any = document.getElementById(canvasId);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            let linewidth = 50;
            ctx.lineWidth = 4;
            let lastend = 3.141592653589793;
            let myTotal = 0; // Automatically calculated so don't touch
            let radius = canvas.height / 2 - linewidth;
            for (let e = 0; e < data.datapoints.length; e++) {
                myTotal += data.datapoints[e].y;
            }
            for (let i = 0; i < data.datapoints.length; i++) {
                ctx.strokeStyle = "#fff";
                ctx.fillStyle = data.datapoints[i].color;
                ctx.beginPath();
                ctx.moveTo(canvas.width / 2, canvas.height / 2);
                ctx.arc(canvas.width / 2, canvas.height / 2, radius, lastend, lastend + (Math.PI * (data.datapoints[i].y / myTotal)));
                //// console.log(canvas.width / 2, canvas.height / 2, canvas.height / 2, lastend, lastend + (Math.PI * 2 * (data.datapoints[i].y / myTotal)));
                ctx.lineTo(canvas.width / 2, canvas.height / 2);
                ctx.fill();
                ctx.stroke();
                let newobj = {
                    x: canvas.width / 2,
                    startangle: lastend,
                    lastangle: lastend + (Math.PI * (data.datapoints[i].y / myTotal)),
                    label: data.datapoints[i].label
                };
                linecord.push(newobj);
                lastend += Math.PI * (data.datapoints[i].y / myTotal);
            }
            //// console.log(linecord);
            ctx.beginPath();
            ctx.fillStyle = "#fff";
            ctx.arc(canvas.width / 2, canvas.height / 2, radius * 0.7, 0, 2 * Math.PI);
            ctx.fill();
            ctx.closePath();
            ctx.beginPath();
            ctx.fillStyle = "#000";
            ctx.arc(canvas.width / 2, canvas.height / 2, radius * 0.1, 0, 2 * Math.PI);
            ctx.fill();
            ctx.closePath();
            ctx.beginPath();
            let rotateangel = Math.PI * (ChartDataToShow / 100) + 3.141592653589793;
            //// console.log(rotateangel);
            // let headlen = 10;
            ctx.lineWidth = 6;
            ctx.lineCap = "round";
            let tox = canvas.width / 2 + (radius * .8) * Math.cos(rotateangel);
            let toy = canvas.height / 2 + (radius * .8) * Math.sin(rotateangel);
            // let fromx = canvas.width / 2;
            // let fromy = canvas.height / 2;
            ctx.moveTo(canvas.width / 2, canvas.height / 2);
            ctx.lineTo(tox, toy);
            ctx.strokeStyle = "#000";
            ctx.stroke();
            ctx.beginPath();
            ctx.fillStyle = "#fff";
            ctx.arc(canvas.width / 2, canvas.height / 2, radius * 0.07, 0, 2 * Math.PI);
            ctx.fill();
            ctx.closePath();

            /* Draw piechart number values */
            let angle = 3.141592653589793;
            // let x = Math.floor(canvas.width / 2);
            // let y = Math.floor(canvas.height / 2);
            ctx.fillStyle = "#000";
            ctx.font = font;
            ctx.save();

            /*Text in data format loop*/
            let anglenew;
            for (let i = 0; i < data.datapoints.length; i++) {
                anglenew = (Math.PI * 2 * (data.datapoints[i].y / myTotal)) / 2;
                let anglemiddle = anglenew / 6;
                /*ctx.translate(x, y);
                 ctx.rotate(angle + anglemiddle);
                 ctx.translate(-x, -y);
                 ctx.fillText(data.datapoints[i].label.toString(), x + radius, y);
                 angle = (Math.PI * (data.datapoints[i].y / myTotal)) - anglemiddle;*/
                //// console.log(angle);

                let fx = canvas.width / 2 + (radius * 1.01) * Math.cos(angle + anglemiddle);
                let fy = canvas.height / 2 + (radius * 1.01) * Math.sin(angle + anglemiddle);
                ctx.translate(fx, fy);
                ctx.rotate(angle + 1.8);
                ctx.fillText(data.datapoints[i].label.toString(), 0, 0);
                ctx.rotate(-(angle + 1.8));
                ctx.translate(-fx, -fy);
                angle += (Math.PI * (data.datapoints[i].y / myTotal));
            }
            ctx.restore();
            // console.log("End : drawMeter");
            return linecord;
        } catch (e) {
            console.log("error occured in drawMeter : ", e);
        }
    }
}

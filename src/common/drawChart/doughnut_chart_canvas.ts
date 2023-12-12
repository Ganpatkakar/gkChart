export default function drawDoughnutChart(can: any, ctx: any, data: any, linecord: any, chartHeight: any) {
    try {
        // console.log("Start : drawDonut");
        const canvas: any = document.getElementById(can);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let linewidth = chartHeight / 4;
        let radius = canvas.height / 2 - linewidth;
        ctx.lineWidth = linewidth * 2;
        let lastend = 0;
        let myTotal = 0; // Automatically calculated so don't touch
        for (let e = 0; e < data.datapoints.length; e++) {
            myTotal += data.datapoints[e].y;
        }
        for (let i = 0; i < data.datapoints.length; i++) {
            if (data.datapoints[i].y === 0) {
                ctx.beginPath();
                ctx.arc(canvas.width / 2, canvas.height / 2, radius, lastend, lastend + (Math.PI * 2 * (data.datapoints[i].y / myTotal)), false);
                ctx.strokeStyle = '#fff';
                ctx.stroke()
            }
            ctx.strokeStyle = data.datapoints[i].color;
            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height / 2, radius, lastend, lastend + (Math.PI * 2 * (data.datapoints[i].y / myTotal)), false);
            var newobj = {
                hei: canvas.height,
                wid: canvas.width,
                startangle: lastend,
                lastangle: lastend + (Math.PI * 2 * (data.datapoints[i].y / myTotal)),
                label: data.datapoints[i].label,
                y: data.datapoints[i].y
            };
            linecord.push(newobj);
            lastend += Math.PI * 2 * (data.datapoints[i].y / myTotal);
            ctx.stroke();
        }
        /* Draw piechart number values */
        let angle = 0;
        let x = Math.floor(canvas.width / 2);
        let y = Math.floor(canvas.height / 2);
        ctx.fillStyle = "#fff";
        ctx.font = radius * 0.12 + "px arial";
        let anglenew;
        for (let i = 0; i < data.datapoints.length; i++) {
            if (data.datapoints[i].y != 0) {
                anglenew = (Math.PI * 2 * (data.datapoints[i].y / myTotal));
                let angleMiddle = anglenew / 3;
                let fx = (canvas.width / 2) + radius * Math.cos(angle + angleMiddle);
                let fy = (radius * 1.5) + radius * Math.sin(angle + angleMiddle);
                ctx.translate(fx, fy);
                ctx.fillText(data.datapoints[i].y.toString(), 0, 0 /*x + radius / 1.3, y*/);
                ctx.translate(-fx, -fy);
                angle += (Math.PI * 2 * (data.datapoints[i].y / myTotal));
            }
        }
        return linecord;
        // console.log("End : drawDonut");
    } catch (e) {
        console.log("error occurred in drawDonut : ", e);
    }
}

function drawPieChart(can, ctx, data, linecord) {
    try {
        // console.log("Start : drawPie");
        const canvas = document.getElementById(can);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let lastend = 0;
        let myTotal = 0; // Automatically calculated so don't touch
        let radius = canvas.height / 2;
        for (let e = 0; e < data.datapoints.length; e++) {
            myTotal += data.datapoints[e].y;
        }
        for (let i = 0; i < data.datapoints.length; i++) {
            ctx.fillStyle = data.datapoints[i].color;
            ctx.beginPath();
            ctx.moveTo(canvas.width / 2, canvas.height / 2);
            if (data.datapoints[i].y === 0) {
                ctx.arc(canvas.width / 2, canvas.height / 2, canvas.height / 2, lastend, lastend + (Math.PI * 2 * (data.datapoints[i].y / myTotal)), false);
                ctx.lineTo(canvas.width / 2, canvas.height / 2);
                ctx.strokeStyle = '1';
                ctx.strokeStyle = '#fff';
                ctx.stroke();
            }
            ctx.arc(canvas.width / 2, canvas.height / 2, canvas.height / 2, lastend, lastend + (Math.PI * 2 * (data.datapoints[i].y / myTotal)), false);
            ctx.lineTo(canvas.width / 2, canvas.height / 2);
            var newobj = {
                wid: canvas.width,
                hei: canvas.height,
                startangle: lastend,
                lastangle: lastend + (Math.PI * 2 * (data.datapoints[i].y / myTotal)),
                label: data.datapoints[i].label,
                y: data.datapoints[i].y
            };
            linecord.push(newobj);
            lastend += Math.PI * 2 * (data.datapoints[i].y / myTotal);
            ctx.fill();
        }
        /* Draw pieChart number values and numbers*/
        let angle = 0;
        let x = Math.floor(canvas.width / 2);
        let y = Math.floor(canvas.height / 2);
        ctx.fillStyle = "#fff";
        ctx.font = radius * 0.10 + "px arial";
        var anglenew;
        for (let i = 0; i < data.datapoints.length; i++) {
            if (data.datapoints[i].y !== 0) {
                anglenew = (Math.PI * 2 * (data.datapoints[i].y / myTotal));
                let angleMiddle = anglenew / 3;
                let fx = canvas.width / 2 + (radius * .7) * Math.cos(angle + angleMiddle);
                let fy = radius + (radius * .7) * Math.sin(angle + angleMiddle);
                ctx.translate(fx, fy);
                ctx.fillText(data.datapoints[i].y.toString(), 0, 0 /*x + radius / 1.3, y*/);
                ctx.translate(-fx, -fy);
                angle += (Math.PI * 2 * (data.datapoints[i].y / myTotal));
            }
        }
        return linecord;
        // console.log("End : drawPie");
    } catch (e) {
        console.log("error occurred in drawPie : ", e);
    }
}

export default drawPieChart;

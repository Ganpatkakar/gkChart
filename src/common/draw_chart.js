class DrawChart {

    drawMeter(canvas, ctx, verticalNr, data, range, chartColor, ChartDataToShow) {
        try {
            // console.log("Start : drawMeter");
            var linecord = [];
            var canvas = document.getElementById(canvas);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            var linewidth = 50;
            ctx.lineWidth = 4;
            var lastend = 3.141592653589793;
            var myTotal = 0; // Automatically calculated so don't touch
            var radius = canvas.height / 2 - linewidth;
            for (var e = 0; e < data.datapoints.length; e++) {
                myTotal += data.datapoints[e].y;
            }
            for (var i = 0; i < data.datapoints.length; i++) {
                ctx.strokeStyle = "#fff";
                ctx.fillStyle = data.datapoints[i].color;
                ctx.beginPath();
                ctx.moveTo(canvas.width / 2, canvas.height / 2);
                ctx.arc(canvas.width / 2, canvas.height / 2, radius, lastend, lastend + (Math.PI * (data.datapoints[i].y / myTotal)));
                //// console.log(canvas.width / 2, canvas.height / 2, canvas.height / 2, lastend, lastend + (Math.PI * 2 * (data.datapoints[i].y / myTotal)));
                ctx.lineTo(canvas.width / 2, canvas.height / 2);
                ctx.fill();
                ctx.stroke();
                var newobj = {
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
            var rotateangel = Math.PI * (ChartDataToShow / 100) + 3.141592653589793;
            //// console.log(rotateangel);
            var headlen = 10;
            ctx.lineWidth = 6;
            ctx.lineCap = "round";
            var tox = canvas.width / 2 + (radius * .8) * Math.cos(rotateangel);
            var toy = canvas.height / 2 + (radius * .8) * Math.sin(rotateangel);
            var fromx = canvas.width / 2;
            var fromy = canvas.height / 2;
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
            var angle = 3.141592653589793;
            var x = Math.floor(canvas.width / 2);
            var y = Math.floor(canvas.height / 2);
            ctx.fillStyle = "#000";
            ctx.font = "18px Arial";
            ctx.save();

            /*Text in data format loop*/
            var anglenew;
            for (i = 0; i < data.datapoints.length; i++) {
                anglenew = (Math.PI * 2 * (data.datapoints[i].y / myTotal)) / 2;
                var anglemiddle = anglenew / 6;
                /*ctx.translate(x, y);
                 ctx.rotate(angle + anglemiddle);
                 ctx.translate(-x, -y);
                 ctx.fillText(data.datapoints[i].label.toString(), x + radius, y);
                 angle = (Math.PI * (data.datapoints[i].y / myTotal)) - anglemiddle;*/
                //// console.log(angle);

                var fx = canvas.width / 2 + (radius * 1.01) * Math.cos(angle + anglemiddle);
                var fy = canvas.height / 2 + (radius * 1.01) * Math.sin(angle + anglemiddle);
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

module.exports = DrawChart;

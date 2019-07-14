// import GetMousePos from "../mouse_position";
const GetMousePos = require("../mouse_position");
// import cssStyle from "../css_style";
const cssStyle = require("../css_style");

class DrawChartUpperCanvas {
    constructor() {
        this.details = '';
    }

    ratio(ctx) {
        var dpr = window.devicePixelRatio || 1;
        var bsr = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
        return 2;
        //return dpr / bsr;
    }

    lineChartUpperCanvas(nr, ctx, linecord, container, chart) {
        try {
            // console.log("Start : lineChartUpperCanvas");
            let dataPointLen = chart.data[0].datapoints.length;
            let wid = document.getElementById('canvasupper' + nr).width - 100
            var spacingHorizontal = wid / dataPointLen;
            let lineCordRepeat = linecord.length / dataPointLen;
            const canvasUpper = document.getElementById('canvasupper' + nr);
            const chartToolTip = document.querySelector('#' + container + ' .canvasjs-chart-tooltip');
            if (canvasUpper) {
                canvasUpper.addEventListener('mousemove', function (evt) {
                    //ctx.clearRect(0, 0, document.getElementById('canvasupper' + nr).width, document.getElementById('canvasupper' + nr).height);
                    let mousePos = GetMousePos(canvasUpper, evt);
                    for (var i = 0; i < dataPointLen; i++) {
                        ctx.beginPath();
                        let x1 = i * spacingHorizontal + 100;
                        let x2 = spacingHorizontal;
                        let y1 = 0;
                        let y2 = canvasUpper.height - 60;
                        ctx.rect(x1, y1, x2, y2);
                        if (ctx.isPointInStroke(mousePos.x, mousePos.y) || ctx.isPointInPath(mousePos.x, mousePos.y)) {
                            //ctx.clearRect(0, 0, document.getElementById('canvasupper' + nr).width, document.getElementById('canvasupper' + nr).height);
                            for (let j = 0; j < lineCordRepeat; j++) {
                                ctx.beginPath();
                                let position = j * dataPointLen + i;
                                ctx.arc(linecord[position].x, linecord[position].y, 12, 0, 2 * Math.PI);
                                // console.log("lineChart compare mouse over on upper canvas");
                                //ctx.lineWidth = 5;
                                ctx.strokeStyle = linecord[position].dataColor //'rgba(0,0,0,.7)';
                                ctx.fillStyle = linecord[position].dataColor //'rgba(0,0,0,.7)';
                                //ctx.stroke();
                                ctx.fill();
                                if (chartToolTip) {
                                    cssStyle(chartToolTip, {
                                        "left": mousePos.x / this.ratio(ctx) + 30 + "px",
                                        "top": mousePos.y / this.ratio(ctx) + "px",
                                        "display": "block"
                                    });
                                }
                                this.details += `<div style="color: ${linecord[position].dataColor}">${linecord[position].dataLabel}  <br />  ${linecord[position].label} : ${linecord[position].dataval} <br /></div>`;
                            }

                            ctx.beginPath();
                            let lineX = x1 + (spacingHorizontal / 2)
                            ctx.setLineDash([5, 15]);
                            ctx.strokeStyle = 'rgba(0,0,0,1)';
                            ctx.lineWidth = 1;
                            ctx.moveTo(lineX, y1);
                            ctx.lineTo(lineX, y2);
                            ctx.stroke();

                            chartToolTip.innerHTML = this.details;
                            break;
                        }
                        ctx.closePath();
                    }
                }.bind(this), false);
            }
            // console.log("End : lineChartUpperCanvas");
        } catch (e) {
            console.log("error occurred in lineChartUpperCanvas : ", e);
        }
    }

    barChartUpperCanvas(nr, ctx, linecord, container, chart) {
        try {
            // console.log("Start : barChartUpperCanvas");
            let dataPointLen = chart.data[0].datapoints.length;
            let wid = document.getElementById('canvasupper' + nr).width - 100;
            var spacingHorizontal = wid / dataPointLen;
            let lineCordRepeat = linecord.length / dataPointLen;
            const canvasUpper = document.getElementById('canvasupper' + nr);
            const chartToolTip = document.querySelector('#' + container + ' .canvasjs-chart-tooltip');
            if(canvasUpper) {
                canvasUpper.addEventListener('mousemove', function (evt) {
                    var mousePos = GetMousePos(canvasUpper, evt);
                    //// console.log(mousePos);
                    /*var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
                    // console.log(message);*/
                    for (var i = 0; i < dataPointLen; i++) {
                        ctx.beginPath();
                        let x1 = i * spacingHorizontal + 100;
                        let x2 = spacingHorizontal;
                        let y1 = 0;
                        let y2 = document.getElementById('canvasupper' + nr).height - 60;
                        ctx.rect(x1, y1, x2, y2);
                        if (ctx.isPointInStroke(mousePos.x, mousePos.y) || ctx.isPointInPath(mousePos.x, mousePos.y)) {
                            //ctx.clearRect(0, 0, document.getElementById('canvasupper' + nr).width, document.getElementById('canvasupper' + nr).height);
                            for (let j = 0; j < lineCordRepeat; j++) {
                                let position = j * dataPointLen + i;
                                ctx.beginPath();
                                ctx.rect(linecord[position].x, linecord[position].y, linecord[position].wid, linecord[position].hei);
                                ctx.lineWidth = .5;
                                ctx.fillStyle = 'rgba(0,0,0,.3)';
                                ctx.fill();
                                ctx.stroke();
                                if(chartToolTip) {
                                    cssStyle(chartToolTip, {
                                        "left": mousePos.x / this.ratio(ctx) + 30 + "px",
                                        "top": mousePos.y / this.ratio(ctx) + "px",
                                        "display": "block"
                                    });
                                }
                                this.details += `<div style="color: ${linecord[position].dataColor}">${linecord[position].dataLabel}  <br />  ${linecord[position].label} : ${linecord[position].dataval} <br /></div>`;
                            }
                            ctx.beginPath();
                            let lineX = x1 + (spacingHorizontal / 2);
                            ctx.setLineDash([5, 15]);
                            ctx.strokeStyle = 'rgba(0,0,0,1)';
                            ctx.lineWidth = 1;
                            ctx.moveTo(lineX, y1);
                            ctx.lineTo(lineX, y2);
                            ctx.stroke();
                            chartToolTip.innerHTML = this.details;
                            break;
                        }
                        ctx.closePath();
                    }
                }.bind(this), false);
            }
            // console.log("End : barChartUpperCanvas");
        } catch (e) {
            console.log("error occurred in barChartUpperCanvas : ", e);
        }
    }

    clearDetails(nr, ctx, container) {
        const canvasUpperNr = document.getElementById('canvasupper' + nr);
        if (canvasUpperNr) {
            canvasUpperNr.addEventListener('mousemove', function (evt) {
                this.details = '';
                ctx.clearRect(0, 0, canvasUpperNr.width, canvasUpperNr.height);
            }.bind(this));

            canvasUpperNr.addEventListener('mouseout', function (evt) {
                setTimeout(function () {
                    ctx.clearRect(0, 0, canvasUpperNr.width, canvasUpperNr.height);
                    const chartToolTip = document.querySelector('#' + container + ' .canvasjs-chart-tooltip');
                    if (chartToolTip) {
                        cssStyle(chartToolTip, {
                            'display': 'none'
                        });
                    }
                }, 2000);
            }.bind(this));
        }
    }

    pieChartUpperCanvas(nr, ctx, linecord, container) {
        try {
            // console.log("Start : pieChartUpperCanvas");
            const canvasUpper = document.getElementById('canvasupper' + nr);
            const chartToolTip = document.querySelector('#' + container + ' .canvasjs-chart-tooltip');
            const canvasUpperHeight = canvasUpper.height;
            const canvasUpperWidth = canvasUpper.width;
            if(canvasUpper) {
                canvasUpper.addEventListener('mousemove', function (evt) {
                    ctx.clearRect(0, 0, canvasUpperWidth, canvasUpperHeight);
                    let mousePos = GetMousePos(canvasUpper, evt);
                    /*var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
                    // console.log(message);*/
                    let lineCordLength = linecord.length;
                    for (var i = 0; i < lineCordLength; i++) {
                        ctx.beginPath();
                        ctx.lineTo(linecord[i].wid / 2, linecord[i].hei / 2);
                        ctx.arc(linecord[i].wid / 2, linecord[i].hei / 2, linecord[i].hei / 2, linecord[i].startangle, linecord[i].lastangle, false);
                        ctx.lineTo(linecord[i].x, linecord[i].x);
                        if (ctx.isPointInStroke(mousePos.x, mousePos.y) || ctx.isPointInPath(mousePos.x, mousePos.y)) {
                            /*ctx.lineWidth=1;
                             ctx.stroke();*/
                            ctx.fillStyle = 'rgba(0,0,0,.3)';
                            ctx.fill();
                            cssStyle(chartToolTip, {
                                'display': 'block',
                                'left': mousePos.x / this.ratio(ctx) + "px",
                                'top': mousePos.y / this.ratio(ctx) + "px"
                            });
                            chartToolTip.innerHTML = linecord[i].label + ' : ' + linecord[i].y;

                            break;
                        } else {
                            ctx.clearRect(0, 0, canvasUpperWidth, canvasUpperHeight);
                        }
                    }
                }.bind(this), false);

                canvasUpper.addEventListener('mouseout', function (evt) {
                    setTimeout(function () {
                        ctx.clearRect(0, 0, canvasUpperWidth, canvasUpperHeight);
                        cssStyle(chartToolTip, {
                            'display': 'none'
                        });
                    }, 2000);
                });
            }
            // console.log("End : pieChartUpperCanvas");
        } catch (e) {
            console.log("error occurred in pieChartUpperCanvas : ", e);
        }
    }

    donutChartUpperCanvas(nr, ctx, linecord, container) {
        try {
            // console.log("Start : donutChartUpperCanvas");
            const canvasUpper =document.getElementById('canvasupper' + nr);
            const chartToolTip = document.querySelector('#' + container + ' .canvasjs-chart-tooltip');
            const canvasUpperHeight = canvasUpper.height;
            const canvasUpperWidth = canvasUpper.width;
            if(canvasUpper) {
                canvasUpper.addEventListener('mousemove', function (evt) {
                    ctx.clearRect(0, 0, canvasUpperWidth,canvasUpperHeight);
                    let linewidth = 80;
                    let mousePos = GetMousePos(canvasUpper, evt);
                    for (var i = 0; i < linecord.length; i++) {
                        var radius = linecord[i].hei / 2 - linewidth;
                        ctx.lineWidth = linewidth * 2;
                        ctx.beginPath();
                        ctx.arc(linecord[i].wid / 2, linecord[i].hei / 2, radius, linecord[i].startangle, linecord[i].lastangle, false);
                        if (ctx.isPointInStroke(mousePos.x, mousePos.y)) {
                            ctx.strokeStyle = "rgba(0,0,0,0.2)";
                            ctx.stroke();
                            if(chartToolTip) {
                                cssStyle(chartToolTip, {
                                    'display': 'block',
                                    'left': mousePos.x / this.ratio(ctx) + "px",
                                    'top': mousePos.y / this.ratio(ctx) + "px"
                                });
                            }
                            chartToolTip.innerHTML = linecord[i].label + ' : ' + linecord[i].y;
                            break;
                        }
                        if (!(ctx.isPointInStroke(mousePos.x, mousePos.y))) {
                            ctx.clearRect(0, 0, canvasUpperWidth,canvasUpperHeight);
                        }
                    }
                }.bind(this), false);
                canvasUpper.addEventListener('mouseout', function (evt) {
                    setTimeout(function () {
                        ctx.clearRect(0, 0, canvasUpperWidth,canvasUpperHeight);
                        if(chartToolTip) {
                            cssStyle(chartToolTip, {
                                'display': 'none'
                            });
                        }
                    }, 2000);
                });
            }
            // console.log("End : donutChartUpperCanvas");
        } catch (e) {
            console.log("error occurred in donutChartUpperCanvas : ", e);
        }
    }
}

module.exports = DrawChartUpperCanvas;

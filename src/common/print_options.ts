// import Canvas2Image from "./canvas_to_image";
import Canvas2Image from "./canvas_to_image";
// import cssStyle from "./css_style";
import cssStyle from "./css_style";
// import PrintContent from "./print_content";
import PrintContent from "./print_content";

export const printOptions = (chartID: any, chart: any): string | null => {
    try {

        if (chart.config.printEnable != undefined && chart.config.printEnable == true) {
            return `
                        <div id="print-option-menu" style="
                                        position: absolute;
                                        right: 25px;
                                        margin-top:-65px;
                                        border-radius:4px;
                                        border:1px solid #000;
                                        background: rgba(0,0,0,.3);
                                        cursor:pointer;">
                          <div style="width:30px">
                            <hr style="margin: 5px;" />
                          </div>
                          <div style="width:30px">
                            <hr style="margin: 5px;" />
                          </div>
                          <div style="width:30px">
                            <hr style="margin: 5px;" />
                          </div>
                        </div>
                        <div id="print-options" style="display:none;">
                          <div style=" padding: 3px 5px;cursor: pointer;" id="print_${chartID}">Print</div>
                          <div style=" padding: 3px 5px;cursor: pointer;" id="jpg_${chartID}">Save as JPEG</div>
                          <div style=" padding: 3px 5px;cursor: pointer;" id="png_${chartID}">Save as PNG</div>
                        </div>
                        `;
        }
        return null;
    } catch (err) {
        console.log("Error in Print Options", err);
        return null;
    }
};

export const printAction = (chartID: any, chart: any): void => {
    try {
        if (chart.config.printEnable != undefined && chart.config.printEnable == true) {
            let visible = false;
            const canvasChart: any = document.getElementById(`canvas${chartID}`)
            const canvasPrintOptions: Element | null = document.querySelector(`#${chartID} #print-options`);
            const printOptionMenu: Element | null = document.querySelector(`#${chartID} #print-option-menu`);
            printOptionMenu?.addEventListener('click', function (event) {
                cssStyle(canvasPrintOptions, {
                    "position": "absolute",
                    "right": "25px",
                    "border": "1px solid #000",
                    "background-color": "#fff",
                    "z-index": "999",
                    "margin-top": "-38px"
                });
                if (!visible) {
                    cssStyle(canvasPrintOptions, {
                        "display": "block"
                    });
                    visible = true;
                } else {
                    cssStyle(canvasPrintOptions, {
                        "display": "none"
                    });
                    visible = false;
                }
            });
            const printChartId: Element | null = document.querySelector("#" + chartID + " #print_" + chartID);
            printChartId?.addEventListener('click', function (event) {
                PrintContent(event, chart.wid, chart.hei, chartID);
                cssStyle(canvasPrintOptions, {
                    "display": "none"
                });
                visible = false;
            });


            const charJpg: Element | null = document.querySelector("#" + chartID + " #jpg_" + chartID);
            charJpg?.addEventListener('click', function (event) {
                Canvas2Image().saveAsImage(canvasChart, canvasChart?.width, canvasChart?.height);
                cssStyle(canvasPrintOptions, {
                    "display": "none"
                });
                visible = false;
            });

            const chartPng = document.querySelector("#" + chartID + " #png_" + chartID);
            chartPng?.addEventListener('click', function (event) {
                Canvas2Image().saveAsImage(canvasChart, canvasChart?.width, canvasChart?.height);
                cssStyle(canvasPrintOptions, {
                    "display": "none"
                });
                visible = false;
            });
        }
    } catch (error) {
        console.log(error);
    }
};

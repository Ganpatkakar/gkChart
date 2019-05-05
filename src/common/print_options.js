import Canvas2Image from "./canvas_to_image";
import cssStyle from "./css_style";
import PrintContent from "./print_content";

export const printOptions = (chartID, chart) => {
    try {

        if (chart.config.printEnable != undefined && chart.config.printEnable == true) {
            let content = `
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
                        `
            return content;
        }
        return null
    } catch (err) {
        console.log("Error in Print Options", err);
    }
};

export const printAction = (chartID, chart) => {
    try {
        if (chart.config.printEnable != undefined && chart.config.printEnable == true) {
            let visible = false;
            document.querySelector(`#${chartID} #print-option-menu`).addEventListener('click', function (event) {
                cssStyle(document.querySelector(`#${chartID} #print-options`), {
                    "position": "absolute",
                    "right": "25px",
                    "border": "1px solid #000",
                    "background-color": "#fff",
                    "z-index": "999",
                    "margin-top": "-38px"
                });
                if (!visible) {
                    cssStyle(document.querySelector(`#${chartID} #print-options`), {
                        "display": "block"
                    });
                    visible = true;
                } else {
                    cssStyle(document.querySelector(`#${chartID} #print-options`), {
                        "display": "none"
                    });
                    visible = false;
                }
            });
            document.querySelector("#" + chartID + " #print_" + chartID).addEventListener('click', function (event) {
                PrintContent(event, chart.wid, chart.hei, chartID);
                cssStyle(document.querySelector(`#${chartID} #print-options`), {
                    "display": "none"
                });
                visible = false;
            });
            document.querySelector("#" + chartID + " #jpg_" + chartID).addEventListener('click', function (event) {
                Canvas2Image.saveAsImage(document.getElementById(`canvas${chartID}`), document.getElementById(`canvas${chartID}`).width, document.getElementById(`canvas${chartID}`).height);
                cssStyle(document.querySelector(`#${chartID} #print-options`), {
                    "display": "none"
                });
                visible = false;
            });
            document.querySelector("#" + chartID + " #png_" + chartID).addEventListener('click', function (event) {
                Canvas2Image.saveAsImage(document.getElementById(`canvas${chartID}`), document.getElementById(`canvas${chartID}`).width, document.getElementById(`canvas${chartID}`).height);
                cssStyle(document.querySelector(`#${chartID} #print-options`), {
                    "display": "none"
                });
                visible = false;
            });
        }
    } catch (error) {
        console.log(error);
    }
};

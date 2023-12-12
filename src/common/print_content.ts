function PrintContent(event: any, canvasWidth: any, canvasHeight: any, chartID: any) {
    //// console.log(event);
    // let elem = event.target.parentNode;
    let elem = document.getElementById(chartID);
    // @ts-ignore
    let dataUrl = document.querySelector('#' + elem?.id + " canvas").toDataURL();
    let windowContent = '<!DOCTYPE html>';
    windowContent += '<html lang="">';
    windowContent += '<head><title>Print canvas</title></head>';
    windowContent += '<body>';
    windowContent += elem?.innerHTML;
    windowContent += '<img width="' + canvasWidth + '" height="' + canvasHeight + '" src="' + dataUrl + '" alt="">';
    windowContent += '</body>';
    windowContent += '</html>';

    const printWin = window.open('', '', 'width=' + screen.availWidth + ',height=' + screen.availHeight);
    if (!printWin) return;
    printWin.document.open();
    printWin.document.write(windowContent);

    printWin.document.addEventListener('load', function () {
        printWin.focus();
        printWin.print();
        printWin.document.close();
        printWin.close();
    }, true);
};

export default PrintContent;

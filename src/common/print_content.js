function PrintContent(event, canvasWidth, canvasHeight, chartID) {
    //// console.log(event);
    // let elem = event.target.parentNode;
    let elem = document.getElementById(chartID);
    let dataUrl = document.querySelector('#' + elem.id + " canvas").toDataURL();

    let windowContent = '<!DOCTYPE html>';
    windowContent += '<html>';
    windowContent += '<head><title>Print canvas</title></head>';
    windowContent += '<body>';
    windowContent += elem.innerHTML;
    windowContent += '<img width="' + canvasWidth + '" height="' + canvasHeight + '" src="' + dataUrl + '">';
    windowContent += '</body>';
    windowContent += '</html>';

    const printWin = window.open('', '', 'width=' + screen.availWidth + ',height=' + screen.availHeight);
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

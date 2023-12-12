function cssStyle(el: any, styles: any) {
    for (let property in styles) {
        el.style[property] = styles[property];
    }
}

export default cssStyle;

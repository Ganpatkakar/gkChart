function cssStyle(el, styles) {
    for (let property in styles) {
        el.style[property] = styles[property];
    }
}

export default cssStyle;

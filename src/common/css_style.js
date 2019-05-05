function cssStyle(el, styles) {
    for (var property in styles) {
        el.style[property] = styles[property];
    }
}

export default cssStyle;

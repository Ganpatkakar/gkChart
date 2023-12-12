function cssStyle(el, styles) {
    for (var property in styles) {
        el.style[property] = styles[property];
    }
}

module.exports = cssStyle;

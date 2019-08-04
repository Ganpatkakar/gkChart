const calcTextWidth = (data, ctx, calcFor) => {
    return data.reduce((acc, value) => {
        const labelTextWidth = ctx.measureText(value[calcFor]).width;
        if (labelTextWidth > acc) {
            acc = labelTextWidth + 20;
        }
        return acc;
    }, 0);
};

module.exports = calcTextWidth;
const calcTextWidth = (data: any, ctx: any, calcFor: any) => {
    return data.reduce((acc: any, value: any) => {
        const labelTextWidth = ctx.measureText(value[calcFor]).width;
        if (labelTextWidth > acc) {
            acc = labelTextWidth + 20;
        }
        return acc;
    }, 0);
};

export default calcTextWidth

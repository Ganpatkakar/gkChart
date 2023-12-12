 export default function GetMousePos (canvas, evt) {
    try {
        //// console.log("Start : getMousePos");
        var rect = canvas.getBoundingClientRect();
        return {
            x: (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width,
            y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
        };
        //// console.log("End : getMousePos");
    } catch (e) {
        console.log("error occurred in getMousePos : ", e);
    }
};

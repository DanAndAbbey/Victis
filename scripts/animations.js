//Utilities
function get(e) {
    return document.getElementById(e);
}
;
function all(e) {
    return document.querySelectorAll(e);
}
;
//builds canvas
function createCanvas() {
    var container = get("container");
    var canvas = document.createElement("canvas");
    canvas.id = "canvas";
    container.appendChild(canvas);
}
//Controls the animations
function animate() {
    var canvas = get("canvas");
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#fff";
    var timer = setInterval(draw, 5000);
    var n = 0;
    function draw() {
        count();
        ctx.beginPath();
        ctx.moveTo();
        ctx.lineTo();
        ctx.stroke();
    }
    ;
    function count() {
        n++;
        console.log(n);
        if (n === 5) {
            clearInterval(timer);
            main.removeChild(canvas);
        }
    }
    ;
}
;
createCanvas();

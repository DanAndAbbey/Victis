//Utilities
function get(e) {
    return document.getElementById(e);
}
;
function all(e) {
    return document.querySelectorAll(e);
}
;
//Controls the animations
function animate(a) {
    if (a === true) {
        var can = get("canvas");
        var width = "1200";
        var height = "600";
        get("canvas-container").style.display = "flex";
        get("canvas").setAttribute("width", width);
        get("canvas").setAttribute("height", height);
        var ctx_1 = can.getContext("2d");
        ctx_1.strokeStyle = "#FFF";
        function random() {
            return Math.floor(Math.random() * 10000);
        }
        ;
        var timer = setInterval(draw, 1000);
        function draw() {
            ctx_1.beginPath();
            ctx_1.lineTo(random(), random());
            ctx_1.stroke();
        }
        ;
    }
    else {
        console.log("");
    }
    ;
}
;

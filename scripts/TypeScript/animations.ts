//Utilities

function get(e: string): any{
    return document.getElementById(e);
};

function all(e: string): any{
    return document.querySelectorAll(e);
};

//builds canvas

function createCanvas():void{
    const container: any = get(`container`)
    const canvas: any = document.createElement(`canvas`);
    canvas.id="canvas";
    container.appendChild(canvas);
}

//Controls the animations

function animate(): void{
    const canvas: any = get(`canvas`);
    const ctx: any = canvas.getContext("2d");
    ctx.strokeStyle="#fff";

    let timer = setInterval(draw, 5000);

    let n: number = 0;

    function draw(): void{
        count()
        ctx.beginPath();
        ctx.moveTo( , );
        ctx.lineTo( , );
        ctx.stroke()
    };

    function count(): void{
        n++
        console.log(n)
        if (n === 5){
            clearInterval(timer)
            main.removeChild(canvas)
        }
    };
};

createCanvas();
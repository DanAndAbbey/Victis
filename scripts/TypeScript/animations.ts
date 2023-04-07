//Utilities

function get(e: string): any{
    return document.getElementById(e);
};

function all(e: string): any{
    return document.querySelectorAll(e);
};

//Controls the animations

function animate(a: boolean): void{
    if (a === true){
        const can: any = get("canvas");
        const width: string = "1200";
        const height: string = "600";
        get("canvas-container").style.display="flex";
        get("canvas").setAttribute(`width`,width);
        get("canvas").setAttribute(`height`,height);
        const ctx: any = can.getContext("2d");
        ctx.strokeStyle="#FFF";
    
        function random(): number{
            return Math.floor(Math.random() * 10000);
        };
    
        let timer = setInterval(draw, 1000);
    
        function draw(): void{
            ctx.beginPath();
            ctx.lineTo(random(), random());
            ctx.stroke()
        };
    }
    else{
        console.log("");
    };
};
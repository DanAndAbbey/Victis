`use strict`;

function get(e){
    return document.getElementById(e);
};

//turns on dark mode

function switchMode(){
    const body = document.querySelector("body");

    if (body.classList.contains("darkMode")){
        get("canvas").remove();
        body.id="home-body";
        body.classList.remove("darkMode");
        body.style="background-image: url(../Images/louisville.jpg)";
    }

    else {
        body.removeAttribute("id");
        body.classList.add("darkMode");
        draw();
    };
};

//creates animations

function draw(){
    get("canvas").setAttribute(`width`,`1600`);
    get("canvas").setAttribute(`height`,`800`);
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = ("#fff");
    ctx.font = "100px lato";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";

    hello();

    function hello(){
        let list=["Hello","and welcome to", "Victis Technologies"];
        let num=0
    
            let timer = setInterval(function(){
                let message=list[num];
                ctx.fillText(message, `800`, `300`); 
                num++;
                if (num === 4){
                    stopTimer();
                }
                let timeout = setTimeout(function(){
                    ctx.clearRect(0,0,1600,800);
                },950);
                },1500);
    
            function stopTimer(){
                switchMode();
                clearInterval("timer");
                clearTimeout("timeout");
                get("title").removeEventListener("click",switchMode);
            };
    };
};


//listens

get("title").addEventListener("click",switchMode);
{
let app ={
    num: 0
} 

function get(e){
    return document.getElementById(e);
};

//turns on dark mode

function darkMode(){
    const body = document.querySelector("body");

    body.removeAttribute("id");
    body.classList.add("darkMode");
    let btn = document.querySelectorAll("button");
    btn.forEach(function(button){
        button.classList.add("darkMode");
    });
};

function lightMode(){
    get("canvas").remove();
    const body = document.querySelector("body");
    body.classList.remove("darkMode");
    body.style="background-image: url(../Images/louisville.jpg)";
    let btn = document.querySelectorAll("button");
    btn.forEach(function(button){
        button.classList.remove("darkMode");
    });
}

//creates the canvas element

function newElement(type,loc,i){

    const parentLoc = get(loc);
    element = document.createElement(type);
    element.id=i;
    parentLoc.appendChild(element);
};

function makeCanvas(){
    newElement("canvas","main","canvas");
    get("canvas").setAttribute(`width`,`1600px`);
    get("canvas").setAttribute(`height`,`800px`);
};

//creates animations

function draw(){
    canvas = get("canvas");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = ("#fff");
    ctx.font = "100px lato";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";

    let list=["Hello","and welcome to", "Victis Technologies."];

    let timer = setInterval(function(){
        let message=list[app.num];
        ctx.fillText(message, canvas.width/2, canvas.height/2); 
        app.num++;
        if (app.num === 4){
            stopTimer("timer","timeout");
        }
        let timeout = setTimeout(function(){
            ctx.clearRect(0,0,1600,800);
        },1000);
    },2000);  

};

function stopTimer(timer,timeout){
    lightMode();
    title=null
    clearInterval(timer);
    clearTimeout(timeout);

};

//listens

let title = get("title");
title.addEventListener("click",function(){
    main();
},true);

function main(){
    darkMode();
    makeCanvas();
    draw();
};
};
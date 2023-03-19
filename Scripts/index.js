const app = {
    body: document.querySelector("body"),
};

function get(e){
    return document.getElementById(e)
};

//turns on dark mode

function darkMode(){
    app.body.removeAttribute("id");
    app.body.classList.add("darkMode");
    let btn = document.querySelectorAll("button")
    btn.forEach(function(button){
        button.classList.add("darkMode");
    });
};

//creates the cnavas element

function newElement(type,loc,i){

    const parentLoc = get(loc)
    element = document.createElement(type);
    element.id=i
    parentLoc.appendChild(element);

}

function makeCanvas(){
    newElement("canvas","main","canvas");
    get("canvas").setAttribute(`width`,`1500px`)
    get("canvas").setAttribute(`height`,`800px`)
}

//creates animations

function draw(){
    let ctx = get("canvas").getContext("2d");
    ctx.fillStyle = ("#fff");
    ctx.fillText("Hello", 150, 150);

}

//listens for click

let title = get("title");
title.addEventListener("click",function(){
    main();
});

function main(){
    darkMode();
    makeCanvas();
    draw();
};


function get(e){
    return document.getElementById(e)
}

let btn = get("dropbtn");
get("drop").style.display="none";
btn.addEventListener("mouseover",function(e){

    get("drop").style.display="flex";
});

btn.addEventListener("mouseout",function(e){

    get("drop").style.display="none";
});

let selectedButton = document.querySelectorAll("button[data-link]");
selectedButton.forEach(function(button){
    button.addEventListener("click",function(e){
        let button = e.currentTarget;
        let link = button.getAttribute("data-link");
        let url =(`${link}.html`);
        window.location.href=url;       
    });
});


let title = get("title")
const victis = title.textContent;
letterList=  victis.split("");
title.textContent="";

for(let i =0; i<letterList.length; i++){
    title.innerHTML += "<span>"+ letterList[i] +"</span>";
};

let color;
let colors=[`green`,`#000000`]
let i = 0;
title = setInterval(function(){
        color=colors[i]
        get("title").style.color=color
        i++;
        i = check(i);
    },10000);

function check(i){
    if (i === 2){
        return 0
    }
    else {
        return i
    }
}

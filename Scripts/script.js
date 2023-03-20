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

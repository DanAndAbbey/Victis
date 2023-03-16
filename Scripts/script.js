window,addEventListener("DOMContentLoaded", function(e){

    let btn = document.getElementById("dropbtn");
    document.getElementById("drop").style.display="none";
    btn.addEventListener("mouseover",function(e){

        document.getElementById("drop").style.display="flex";
    });

    btn.addEventListener("mouseout",function(e){

        document.getElementById("drop").style.display="none";
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

});


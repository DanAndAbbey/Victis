window,addEventListener("DOMContentLoaded", function(e){

    let title = document.getElementById("title-left");
    title.addEventListener("click",function(e){
        document.getElementById("body").style.backgroundImage="url(../Images/kentucky.jpg)"
        document.getElementById("footer").style.color="white"
    });

});


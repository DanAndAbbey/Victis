`use strict`;

//Utilities

function get(e: string): any{
    return document.getElementById(e);
};

function all(e: string): any{
    return document.querySelectorAll(e);
};

//listen for clicks

function listen(): void{
    const selectedButton: any = document.querySelectorAll(`button[class="nav-button"]`);
    selectedButton.forEach(function(button): void{
        
        button.addEventListener("click",function(e: any){
            e.preventDefault();
            const btn: any = e.currentTarget;
            let url: string = btn.id

            window.location.href = `../html/${url}.html`
        });
    });
};

listen();



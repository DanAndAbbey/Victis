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
    const selectedButton: any = all(`button[class="nav-button"]`);
    selectedButton.forEach(function(button :any): void{
        
        button.addEventListener("click",function(e: any){
            e.preventDefault();
            const btn: any = e.currentTarget;
            action(btn.id);
        });
    });
};

//Decides what to do

function action(a: string) {
    remove();
    if (a === "index") {
        animate(true);
        get("home").style.display = "flex";
        get("headTitle").textContent = "Victis Technologies";
    }
    else if (a === "about") {
        get("headTitle").textContent = "About | Victis Technologies";
        get("about-section").style.display = "flex";
    }
    else if (a === "projects") {
        get("headTitle").textContent = "Projects | Victis Technologies";
        get("projects-section").style.display = "flex";
        projectmenu();
    }
    function remove(): void{
        animate(false);
        get("home").style.display = "none";
        get("about-section").style.display = "none";
        get("projects-section").style.display = "none";
    };
};

//operates project menu

function projectmenu(): void{

    const btn: any = all(`button[class="projects"]`);
    btn.forEach(function(button: any): void{
        button.addEventListener("click",function(e: any): void{
            let project: string = button.id;
            let desc: any =  get("project-desc");
            desc.textContent = getText(project);

            desc.style.display = "flex";
        });

        function getText(a: string){
            if (a === "finance") {
                return `We're working on a large set of free tools to help you manage your finances.
                These tools will make it easier to: Budget, Track your spending, Save`
            }
            else if (a === "drones") {
                return `AI-powered drones are being built to solve problems around the world.
                    These drones can be used for a variety of purposes, such as: Inspecting infrastru`
            }
            else if (a === "ai") {
                return `We harness the power of AI to: Help us to better understand climate change and 
                other environmental challenges, improve the efficiency of transportation`
            }
        };
    });
};

//controls the color of the page

function styles(): void{
    darkMode();
    const title: any = get("title");
    title.addEventListener("click", function(){

        let e: string = title.getAttribute("data-color");

        if (e === "light") {
            darkMode();
            title.dataset.color = `dark`;
        }
        else if(e === "dark"){
            lightMode();
            title.dataset.color = `light`;
        }
    });

    function nav(newColor: string){
        const btn: any = all(`button[class="nav-button]"`);
        btn.forEach(function(e: any): void{
            e.style.color=newColor;
        });
    };

    function lightMode(): void{
        document.body.style.backgroundColor = `#FFF`;
        document.body.style.color = `#000`;

        nav(`#000`);
        get(`title`).style.color = `#000`;
        get(`footer`).style.color = `#000`;
        
        let btn: any = all(`button`);
        btn.forEach(function (e: any) {
            e.style.color = "#000";
        });

        function pageColors(): void{

        let element: any = all(`div[class="layer"]`);
        element.forEach(function (e: any) {
            e.style.color = "#FFF";
            e.style.backgroundColor = `#000`;
        });
        };

        pageColors();
    };



    function darkMode(): void{
        document.body.style.backgroundColor = `#000`;
        document.body.style.color = `#FFF`;

        nav(`#FFF`);
        get(`title`).style.color = `#FFF`;
        get(`footer`).style.color = `#FFF`;
        
        let btn: any = all(`button`);
        btn.forEach(function (e: any) {
            e.style.color = "#FFF";
        });

        function pageColors(): void{

            let element: any = all(`div[class="layer"]`);
            element.forEach(function (e: any) {
                e.style.color = "#000";
                e.style.backgroundColor = `#FFF`
            });
        }
        pageColors();
    };
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
            ctx.moveTo(random(), random());
            ctx.lineTo(random(), random());
            ctx.stroke()
        };
    }
    else{
        console.log("");
    };
};

function main(): void{

    listen();
    styles();
};

main();



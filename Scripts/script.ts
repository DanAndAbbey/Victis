`use strict`;
export{};

function get(e: string): any{
    return document.getElementById(e);
};

//drop menu

function dropMenu(): void{

    const btn: any = get("dropbtn");
    get("drop").style.display = "none";
    btn.addEventListener("mouseover",function(): void{

        get("drop").style.display="flex";
    });

    btn.addEventListener("mouseout",function(): void{

        get("drop").style.display = "none";
    });

};

//listen for clicks opens page

function listen(): void{
    const selectedButton: any = document.querySelectorAll(`button[class="nav-button"]`);
    selectedButton.forEach(function(button): void{
        
        button.addEventListener("click",function(e){
            e.preventDefault();
            const btn: any = e.currentTarget;
            action(btn.id)
        });
    });
};

function action(a: string){
    remove();

    if (a === "index"){
        document.body.style.backgroundImage = "url(../Images/louisville.jpg)";
        get("headTitle").textContent="Victis Technologies";
        const btn: any = document.querySelectorAll(`button[class="nav-button"`);
        btn.forEach(function(e: any): void{
            e.style.color="#000";
        });
        get("title").style.color="#000";
        get("footer").style.color="#000";

    }
    else if (a === "about"){
        get("headTitle").textContent="About | Victis Technologies";
        get("about-section").style.display="flex";
        document.body.style.backgroundColor="#FFC98A";
        get("title").style.color="#005454";
        get("footer").style.color="#005454";

    }
    else if (a === "projects"){
        get("headTitle").textContent="Projects | Victis Technologies";
        get("projects-section").style.display="flex";
        get("drop").style.display="flex";
        document.body.style.backgroundColor="#005454";
        get("title").style.color="#FFC98A";
        get("footer").style.color="#FFC98A";


        const btn: any = document.querySelectorAll(`button[class="nav-button"`);
        btn.forEach(function(e: any): void{
            e.style.color="#FFC98A"
        });
    }
    else if (a === "finance"){
        window.location.href="./finance.html";
    }
    else if (a === "projects-finance"){
        window.location.href="./finance.html";
    }
};

function remove(): void{
    document.body.removeAttribute("style");
    get("main").removeAttribute("style");
    get("about-section").style.display="none";
    get("projects-section").style.display="none";
    get("title").removeAttribute("style");
    const btn: any = document.querySelectorAll(`button[class="nav-button"`);
    btn.forEach(function(button: any): void{
        button.removeAttribute("style");
    });           
};

//title animations

function colorChange(): void{
    let color: string;
    const colors: string[] = [`#005454`,`#FFC98A`];
    let i: number = 0;
    let title: number = setInterval(function(): void{
            color=colors[i];
            get("title").style.color=color;
            i++;
            i = check(i);
        },8000);

    function check(i: number): number{
        if (i === 2){
            return 0;
        }
        else {
            return i;
        };
    };
};

function projectmenu(): void{

    const btn: any = document.querySelectorAll(`button[class="projects"]`);
    btn.forEach(function(button: any): void{
        button.addEventListener("click",function(e: any): void{
            let project: string = button.id;
            let desc: any =  get("project-desc");
            desc.textContent = getText(project);

            desc.style.display = "flex";
        });

    function getText(a: string){
        if (a === "finance"){
            return `We’re working on a large set of free tools to help you manage your finances.
            These tools will make it easier to: Budget, Track your spending, Save for retirement, and Pay off debt.`
        }
        else if (a === "drones"){
            return `AI-powered drones are being built to solve problems around the world. 
            These drones can be used for a variety of purposes, such as: Inspecting infrastructure, 
            Delivering goods, Providing emergency services.`
        }
        else if (a === "ai"){
            return `We harness the power of AI to: Help us to better understand climate change and 
            other environmental challenges, improve the efficiency of transportation systems,
            and develop new drugs and treatments for diseases.`
        }
    };
    });
};

//creates animations

function animate(): void{
    get("title").addEventListener("click",draw);

    const can: any = get("canvas");
    const width: string = `1200`;
    const height: string = `600`;
    const size: string = `100px`;

    function draw(): void{
        get("canvas-container").style.display="flex";
        get("canvas").setAttribute(`width`,width);
        get("canvas").setAttribute(`height`,height);
        const ctx = can.getContext("2d");
        ctx.fillStyle = ("#FFC98A");
        ctx.font = `${size} lato`;
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";

        hello();

        function hello(): void{
            let list: string[] = ["Hello","and welcome to", "Victis Technologies"];
            let num: number = 0;
        
            let timer: number = setInterval(function():void{
                let message: string = list[num];
                ctx.fillText(message, parseInt(width)/2, parseInt(height)/2); 
                num++;
                if (num === 4){
                    stopTimer("timer","timeout");
                }
                let timeout: number = setTimeout(function():void{
                    ctx.clearRect(0,0,1600,800);
                },950);
                },1500);
    
        function stopTimer(t:any,to:any):void{
            clearInterval(t);
            clearTimeout(to);
            get("canvas-container").style.display = "none";
            get("title").removeEventListener("click",draw);
        };
        };
    };
};

function main(): void{
    animate();
    action("index");
    listen();
    dropMenu();
    projectmenu();
    colorChange();
};

main();
`use strict`;

function get(e){
    return document.getElementById(e);
};

//drop menu

function dropMenu(){

    const btn = get("dropbtn");
    get("drop").style.display="none";
    btn.addEventListener("mouseover",function(e){

        get("drop").style.display="flex";
    });

    btn.addEventListener("mouseout",function(e){

        get("drop").style.display="none";
    });

};

//listen for clicks opens page

function listen(){
    const selectedButton = document.querySelectorAll(`button[class="nav-button"]`);
    selectedButton.forEach(function(button){
        
        button.addEventListener("click",function(e){
            e.preventDefault();
            button = e.currentTarget;
            action(button.id)
        });
    });
};

function action(a){
    remove();

    if (a === "index"){
        document.body.style.backgroundImage = "url(../Images/louisville.jpg)";
        get("headTitle").textContent="Victis Technologies";
        const btn = document.querySelectorAll(`button[class="nav-button"`);
        btn.forEach(function(button){
            button.style.color="#000";
        });
        get("title").style.color="#000";
        get("footer").style.color="#000";

    }
    else if (a === "about"){
        get("headTitle").textContent="About | Victis Technologies";
        get("about-section").style.display="flex";
        main.id="about-main";
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


        const btn = document.querySelectorAll(`button[class="nav-button"`);
        btn.forEach(function(button){
            button.style.color="#FFC98A"
        });
    }
    else if (a === "finance"){
        window.location.href="./finance.html";
    }
    else if (a === "projects-finance"){
        window.location.href="./finance.html";
    }
};

function remove(){
    document.body.removeAttribute("style");
    get("main").removeAttribute("style");
    get("about-section").style.display="none";
    get("projects-section").style.display="none";
    get("title").removeAttribute("style");
    const btn = document.querySelectorAll(`button[class="nav-button"`);
    btn.forEach(function(button){
        button.removeAttribute("style");
    });           
};

//title animations

function colorChange(){
    let color;
    const colors=[`#005454`,`#FFC98A`];
    let i = 0;
    title = setInterval(function(){
            color=colors[i];
            get("title").style.color=color;
            i++;
            i = check(i);
        },8000);

    function check(i){
        if (i === 2){
            return 0;
        }
        else {
            return i;
        };
    };
};

function projectmenu(){

    const btn = document.querySelectorAll(`button[class="projects"]`);
    btn.forEach(function(button){
        button.addEventListener("click",function(e){
            let project = button.id;
            let desc =  get("project-desc");
            desc.textContent=getText(project);

            desc.style.display = "flex";
        });

    function getText(a){
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

function animate(){
    get("title").addEventListener("click",draw);

    const width = 1200;
    const height = 600;
    const size = `100px`;

    function draw(){
        get("canvas-container").style.display="flex";
        get("canvas").setAttribute(`width`,width);
        get("canvas").setAttribute(`height`,height);
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = ("#FFC98A");
        ctx.font = `${size} lato`;
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";

        hello();

        function hello(){
            let list=["Hello","and welcome to", "Victis Technologies"];
            let num=0;
        
            let timer = setInterval(function(){
                let message=list[num];
                ctx.fillText(message, width/2, height/2); 
                num++;
                if (num === 4){
                    stopTimer();
                }
                let timeout = setTimeout(function(){
                    ctx.clearRect(0,0,1600,800);
                },950);
                },1500);
    
            function stopTimer(){
                clearInterval("timer");
                clearTimeout("timeout");
                get("canvas-container").style.display="none";
                get("title").removeEventListener("click",draw);
            };
        };
    };
};

function main(){
    animate();
    action("index");
    listen();
    dropMenu();
    projectmenu();
    colorChange();
};

main();
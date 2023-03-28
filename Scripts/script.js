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
    remove()

    if (a === "index"){
        get("headTitle").textContent="Victis Technologies"

        document.body.style.backgroundImage = "url(../Images/louisville.jpg)";
    }
    else if (a === "about"){
        get("headTitle").textContent="About | Victis Technologies"
        get("about-section").style.display="flex";
        main.id="about-main"
        document.body.style.backgroundColor="#FFF"


    }
    else if (a === "projects"){
        get("headTitle").textContent="Projects | Victis Technologies"
        get("projects-section").style.display="flex";
        get("drop").style.display="flex";
        document.body.style.backgroundColor="#005454"
        get("title").style.color="#FFC98A"

        const btn = document.querySelectorAll(`button[class="nav-button"`);
        btn.forEach(function(button){
            button.style.color="#FFC98A"
        });
    }
    else if (a === "finance"){
        window.location.href="./finance.html"
    }
    else if (a === "projects-finance"){
        window.location.href="./finance.html"
    }
};

function remove(){
    document.body.removeAttribute("style")
    get("main").removeAttribute("style")
    get("about-section").style.display="none"
    get("projects-section").style.display="none"
    get("title").removeAttribute("style")
    const btn = document.querySelectorAll(`button[class="nav-button"`);
    btn.forEach(function(button){
        button.removeAttribute("style")
    });           
};

//title animations

function colorChange(){
    let color;
    const colors=[`#000000`,`#FFC98A`];
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

function dropMenu2(){

    const btn = document.querySelectorAll(`button[class="projects"]`);
    btn.forEach(function(button){
        button.addEventListener("click",function(e){
            let project = button.id
            let desc =  get("project-desc")
            desc.textContent=getText(project)

            desc.style.display = "flex"
        });

    function getText(a){
        if (a === "finance"){
            return `We’re working on a large set of free tools to help you manage your finances.
            These tools will make it easier to: Budget, Track your spending, Save for retirement, and Pay off debt`
        }
        if (a === "drones"){
            return `AI-powered drones are being built to solve problems around the world. 
            These drones can be used for a variety of purposes, such as: Inspecting infrastructure, 
            Delivering goods, Providing emergency services`
        }
        if (a === "ai"){
            return `We harness the power of AI to: Help us to better understand climate change and 
            other environmental challenges, improve the efficiency of transportation systems,
            and develop new drugs and treatments for diseases.`
        }
    }
    })
};


function main(){
    action("index")
    listen();
    dropMenu();
    dropMenu2();

    colorChange();
};
remove();
main();
"use strict";
function get(e) {
    return document.getElementById(e);
}
;
//drop menu
function dropMenu() {
    var btn = get("dropbtn");
    get("drop").style.display = "none";
    btn.addEventListener("mouseover", function () {
        get("drop").style.display = "flex";
    });
    btn.addEventListener("mouseout", function () {
        get("drop").style.display = "none";
    });
}
;
//listen for clicks opens page
function listen() {
    var selectedButton = document.querySelectorAll("button[class=\"nav-button\"]");
    selectedButton.forEach(function (button) {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            var btn = e.currentTarget;
            action(btn.id);
        });
    });
}
;
function action(a) {
    remove();
    if (a === "index") {
        document.body.style.backgroundImage = "url(../Images/louisville.jpg)";
        get("headTitle").textContent = "Victis Technologies";
        var btn = document.querySelectorAll("button[class=\"nav-button\"");
        btn.forEach(function (e) {
            e.style.color = "#000";
        });
        get("title").style.color = "#000";
        get("footer").style.color = "#000";
    }
    else if (a === "about") {
        get("headTitle").textContent = "About | Victis Technologies";
        get("about-section").style.display = "flex";
        document.body.style.backgroundColor = "#FFC98A";
        get("title").style.color = "#005454";
        get("footer").style.color = "#005454";
    }
    else if (a === "projects") {
        get("headTitle").textContent = "Projects | Victis Technologies";
        get("projects-section").style.display = "flex";
        get("drop").style.display = "flex";
        document.body.style.backgroundColor = "#005454";
        get("title").style.color = "#FFC98A";
        get("footer").style.color = "#FFC98A";
        var btn = document.querySelectorAll("button[class=\"nav-button\"");
        btn.forEach(function (e) {
            e.style.color = "#FFC98A";
        });
    }
    else if (a === "finance") {
        window.location.href = "./finance.html";
    }
    else if (a === "projects-finance") {
        window.location.href = "./finance.html";
    }
}
;
function remove() {
    document.body.removeAttribute("style");
    get("main").removeAttribute("style");
    get("about-section").style.display = "none";
    get("projects-section").style.display = "none";
    get("title").removeAttribute("style");
    var btn = document.querySelectorAll("button[class=\"nav-button\"");
    btn.forEach(function (button) {
        button.removeAttribute("style");
    });
}
;
//title animations
function colorChange() {
    var color;
    var colors = ["#005454", "#FFC98A"];
    var i = 0;
    var title = setInterval(function () {
        color = colors[i];
        get("title").style.color = color;
        i++;
        i = check(i);
    }, 8000);
    function check(i) {
        if (i === 2) {
            return 0;
        }
        else {
            return i;
        }
        ;
    }
    ;
}
;
function projectmenu() {
    var btn = document.querySelectorAll("button[class=\"projects\"]");
    btn.forEach(function (button) {
        button.addEventListener("click", function (e) {
            var project = button.id;
            var desc = get("project-desc");
            desc.textContent = getText(project);
            desc.style.display = "flex";
        });
        function getText(a) {
            if (a === "finance") {
                return "We\u2019re working on a large set of free tools to help you manage your finances.\n            These tools will make it easier to: Budget, Track your spending, Save for retirement, and Pay off debt.";
            }
            else if (a === "drones") {
                return "AI-powered drones are being built to solve problems around the world. \n            These drones can be used for a variety of purposes, such as: Inspecting infrastructure, \n            Delivering goods, Providing emergency services.";
            }
            else if (a === "ai") {
                return "We harness the power of AI to: Help us to better understand climate change and \n            other environmental challenges, improve the efficiency of transportation systems,\n            and develop new drugs and treatments for diseases.";
            }
        }
        ;
    });
}
;
//creates animations
function animate() {
    get("title").addEventListener("click", draw);
    var can = get("canvas");
    var width = "1200";
    var height = "600";
    var size = "100px";
    function draw() {
        get("canvas-container").style.display = "flex";
        get("canvas").setAttribute("width", width);
        get("canvas").setAttribute("height", height);
        var ctx = can.getContext("2d");
        ctx.fillStyle = ("#FFC98A");
        ctx.font = "".concat(size, " lato");
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        hello();
        function hello() {
            var list = ["Hello", "and welcome to", "Victis Technologies"];
            var num = 0;
            var timer = setInterval(function () {
                var message = list[num];
                ctx.fillText(message, parseInt(width) / 2, parseInt(height) / 2);
                num++;
                if (num === 4) {
                    stopTimer("timer", "timeout");
                }
                var timeout = setTimeout(function () {
                    ctx.clearRect(0, 0, 1600, 800);
                }, 950);
            }, 1500);
            function stopTimer(t, to) {
                clearInterval(t);
                clearTimeout(to);
                get("canvas-container").style.display = "none";
                get("title").removeEventListener("click", draw);
            }
            ;
        }
        ;
    }
    ;
}
;
function main() {
    animate();
    action("index");
    listen();
    dropMenu();
    projectmenu();
    colorChange();
}
;
main();

"use strict";
//Utilities
function get(e) {
    return document.getElementById(e);
}
;
function all(e) {
    return document.querySelectorAll(e);
}
;
//listen for clicks
function listen() {
    var selectedButton = all("button[class=\"nav-button\"]");
    selectedButton.forEach(function (button) {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            var btn = e.currentTarget;
            action(btn.id);
        });
    });
}
;
//Decides what to do
function action(a) {
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
    function remove() {
        animate(false);
        get("home").style.display = "none";
        get("about-section").style.display = "none";
        get("projects-section").style.display = "none";
    }
    ;
}
;
//operates project menu
function projectmenu() {
    var btn = all("button[class=\"projects\"]");
    btn.forEach(function (button) {
        button.addEventListener("click", function (e) {
            var project = button.id;
            var desc = get("project-desc");
            desc.textContent = getText(project);
            desc.style.display = "flex";
        });
        function getText(a) {
            if (a === "finance") {
                return "We're working on a large set of free tools to help you manage your finances.\n                These tools will make it easier to: Budget, Track your spending, Save";
            }
            else if (a === "drones") {
                return "AI-powered drones are being built to solve problems around the world.\n                    These drones can be used for a variety of purposes, such as: Inspecting infrastru";
            }
            else if (a === "ai") {
                return "We harness the power of AI to: Help us to better understand climate change and \n                other environmental challenges, improve the efficiency of transportation";
            }
        }
        ;
    });
}
;
//controls the color of the page
function styles() {
    darkMode();
    var title = get("title");
    title.addEventListener("click", function () {
        var e = title.getAttribute("data-color");
        if (e === "light") {
            darkMode();
            title.dataset.color = "dark";
        }
        else if (e === "dark") {
            lightMode();
            title.dataset.color = "light";
        }
    });
    function nav(newColor) {
        var btn = all("button[class=\"nav-button]\"");
        btn.forEach(function (e) {
            e.style.color = newColor;
        });
    }
    ;
    function lightMode() {
        document.body.style.backgroundColor = "#FFF";
        document.body.style.color = "#000";
        nav("#000");
        get("title").style.color = "#000";
        get("footer").style.color = "#000";
        var btn = all("button");
        btn.forEach(function (e) {
            e.style.color = "#000";
        });
        function pageColors() {
            var element = all("div[class=\"layer\"]");
            element.forEach(function (e) {
                e.style.color = "#FFF";
                e.style.backgroundColor = "#000";
            });
        }
        ;
        pageColors();
    }
    ;
    function darkMode() {
        document.body.style.backgroundColor = "#000";
        document.body.style.color = "#FFF";
        nav("#FFF");
        get("title").style.color = "#FFF";
        get("footer").style.color = "#FFF";
        var btn = all("button");
        btn.forEach(function (e) {
            e.style.color = "#FFF";
        });
        function pageColors() {
            var element = all("div[class=\"layer\"]");
            element.forEach(function (e) {
                e.style.color = "#000";
                e.style.backgroundColor = "#FFF";
            });
        }
        pageColors();
    }
    ;
}
;
//Controls the animations
function animate(a) {
    if (a === true) {
        var can = get("canvas");
        var width = "1200";
        var height = "600";
        get("canvas-container").style.display = "flex";
        get("canvas").setAttribute("width", width);
        get("canvas").setAttribute("height", height);
        var ctx_1 = can.getContext("2d");
        ctx_1.strokeStyle = "#FFF";
        function random() {
            return Math.floor(Math.random() * 10000);
        }
        ;
        var timer = setInterval(draw, 1000);
        function draw() {
            ctx_1.beginPath();
            ctx_1.moveTo(random(), random());
            ctx_1.lineTo(random(), random());
            ctx_1.stroke();
        }
        ;
    }
    else {
        console.log("");
    }
    ;
}
;
function main() {
    listen();
    styles();
}
;
main();

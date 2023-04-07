//Utilities
function get(e) {
    return document.getElementById(e);
}
;
function all(e) {
    return document.querySelectorAll(e);
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
projectmenu();

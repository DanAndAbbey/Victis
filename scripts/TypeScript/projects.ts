//Utilities

function get(e: string): any{
    return document.getElementById(e);
};

function all(e: string): any{
    return document.querySelectorAll(e);
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

projectmenu()

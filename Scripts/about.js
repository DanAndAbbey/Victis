window,addEventListener("DOMContentLoaded", function(e){

    let selectedButton = document.querySelectorAll("button[data-project]");
    selectedButton.forEach(function(button){
        button.addEventListener("click",function(e){
            let button = e.currentTarget;
            let project = button.getAttribute("data-project");
            
            document.getElementById("project-desc").textContent= (retrieveMessage(project));
            let link = document.getElementById("project-link");
            link.textContent = (retrieveLinkText(project));
            link.setAttribute("href", retrieveLink(project));

            
        });


    });

    function retrieveMessage(project){
   
        if (project === "drones") {
            return ("We aim to revolutionize the use of drones in various industries by combining drone technology and artificial intelligence. The project envisions creating autonomous drones that can perform tasks such as search and rescue operations, delivery of goods, monitoring of crops and wildlife, and disaster response.")
        }
    
        else if (project === "finance") {
            return ("We are working to combine the power of artificial intelligence with finance to create innovative tools for tracking investments and managing money. The project aims to empower individuals and organizations to make informed financial decisions by providing them with real-time insights and analysis of their financial portfolios.")
        }
    
        else if (project === "webdev") {
            return ("We aim to revolutionize the world of web development by creating cutting-edge web applications and websites. The project brings together a team of experienced developers, designers, and technology experts to create innovative solutions for businesses and organizations.")
        }
    }

    function retrieveLink(project){
   
        if (project === "drones") {
        }
    
        else if (project === "finance") {
            return("finance.html")
        }
    
        else if (project === "webdev") {
        }
    }

    function retrieveLinkText(project){
   
        if (project === "finance") {
            return("See more about what we're working on in the field of finance")
        }
    
        else if (project === "drones") {
            return("Take a look at our work with drones")
        }
    
        else if (project === "webdev") {
            return("Learn more about the websites we've created")
        }
    }

});
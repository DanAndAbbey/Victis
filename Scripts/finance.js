`use strict`;

let app = {
    list:[]
};

function get(e){
    return document.getElementById(e);
};

//listens for clicks

function listen(){
    const selectedButton = document.querySelectorAll("button");
    selectedButton.forEach(function(button){
        button.addEventListener("click",function(e){
            e.preventDefault();
            button = e.currentTarget;

            const a = button.id;
            financeAction(a);
        });
    });
}

//decides what to do next

function financeAction(a){
    let add = get("add");
    let dc = get("dividend-calculator");
    let d = get("dividend");
    let f = get("form");

    if (a === "dividend-calculator"){
        d.style.display="flex";
        dc.style.display="none";
    }
    else if (a === "one"){
        d.style.display="none";
        f.style.display="flex";
    }
    else if (a === "multiple"){

        d.style.display="none";
        f.style.display="flex";
        add.style.display="flex";
    }
    else if (a === "reset-button"){
        f.reset();
    }
    else if (a === "add"){
        readStock();
        f.reset();
    }
    else if (a === "submit"){
        readStock();
        print(); 
    }
    else if (a === "back"){
        window.location.href="./index.html"
    }
};

//reads the form and does the math

function readStock(){
    const stock = {
        symbol: get("symbol").value,
        price: get("price").value,
        quantity: get("quantity").value,
        yield: get("yield").value,
        years: get("years").value,
        frequency: get("frequency").id
    };

    function findFinalValue(){
        value = parseFloat(stock.price * stock.quantity);
        const yield = (parseFloat(stock.yield) * .01)/stock.frequency;
        const distributions = parseInt(stock.years * stock.frequency);


        const newValue = value;
        for (let i = 0; i < distributions; i++){
        newValue = (yield * newValue) + newValue;
        };
        return newValue;
    };

    (app.list).push([stock.symbol,findFinalValue(),stock.years]);
};


//print results

function print(){
    get("dividend").style.display="none";
    get("form").style.display="none";
    get("end").style.display="flex";
    
    app.list.forEach(function(stock){
        const ticker = stock[0];
        let finalValue = stock[1];
        const years = stock[2];      
        let element = document.createElement("p");
        element.classList.add("result");

        const message = (`Your shares of ${ticker.toUpperCase()} will be worth $${finalValue.toFixed(2)} in ${years} years.`);

        element.textContent = message;
        get("end").appendChild(element);
    });
};

listen();

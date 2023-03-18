let app = {
    list:[],
};

listen();

function get(e){
    return document.getElementById(e)
}

function listen(){
    let selectedButton = document.querySelectorAll("button");
    selectedButton.forEach(function(button){
        button.addEventListener("click",function(e){
            e.preventDefault();
            button = e.currentTarget;

            let a = button.id;
            action(a);    
        });
    });
}

function action(a){

    if (a === "one"){
        get("intro").style.display="none";
        get("form").style.display="flex";
    }

    else if (a === "multiple"){

        get("intro").style.display="none";
        get("form").style.display="flex";
        get("add").style.display="flex";
    }

    else if (a === "reset-button"){
        get("form").reset();
    }

    else if (a === "add"){
        readStock();
        get("form").reset();
    }

    else if (a === "submit"){
        readStock();
        print(); 
    };
};


function readStock(){
    let stock = {
        symbol: get("symbol").value,
        price: get("price").value,
        quantity: get("quantity").value,
        yield: get("yield").value,
        years: get("years").value,
        frequency: get("frequency").value
    };

    function disFrequency(freq){
        if (freq === "monthly"){
            return 12;
        }
        else if (freq === "quarterly"){
            return 4;
        }
        else if (freq === "yearly"){
            return 1;
        };
    };

    function findFinalValue(value,yield,distributions){
        let newValue = value
        for (let i = 0; i < distributions; i++){
        newValue = (yield * newValue) + newValue
        };
        return newValue;
    };

    let yield = (parseFloat(stock.yield) * .01)/disFrequency(stock.frequency);
    let distributions = parseInt(stock.years * (disFrequency(stock.frequency)));
    let finalValue = findFinalValue(parseFloat(stock.price * stock.quantity),yield,distributions);

    (app.list).push([stock.symbol,finalValue,stock.years]);
};

function newElement(type,message,l){

    const parentLoc = get(l)
    const element = document.createElement(type);

    element.classList.add("result");
    element.textContent = message
    parentLoc.appendChild(element);

}

//print results

function print(){
    get("intro").style.display="none";
    get("form").style.display="none";
    get("end").style.display="flex";
    
    app.list.forEach(function(stock){
        let ticker = stock[0];
        let finalValue = stock[1];
        let years = stock[2];

        let message = (`Your shares of ${ticker.toUpperCase()} will be worth $${finalValue.toFixed(2)} in ${years} years.\n`);
        newElement("p",message,"end");
    });
};
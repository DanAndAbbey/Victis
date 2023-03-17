let app = {
    list:[],
    listen: function(){
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
};

app.listen();

function action(a){

    if (a === "one"){
        document.getElementById("intro").style.display="none";
        document.getElementById("form").style.display="flex";
    }

    else if (a === "multiple"){

        document.getElementById("intro").style.display="none";
        document.getElementById("form").style.display="flex";
        document.getElementById("done").style.display="flex";
    }

    else if (a === "done"){
        readStock();
    }

    else if (a === "submit"){
        document.getElementById("done").style.display="flex";
        readStock();
        print(); 
    };
};


function readStock(){
    let stock = {
        symbol: document.getElementById("symbol").value,
        price: document.getElementById("price").value,
        quantity: document.getElementById("quantity").value,
        yield: document.getElementById("yield").value,
        years: document.getElementById("years").value,
        frequency: document.getElementById("frequency").value
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


//print results

function print(){
    const end = document.getElementById("result");
    document.getElementById("intro").style.display="none";
    document.getElementById("form").style.display="none";
    document.getElementById("end").style.display="flex";
    
    app.list.forEach(function(stock){
        let ticker = stock[0];
        let finalValue = stock[1];
        let years = stock[2];

        let message = (`Your shares of ${ticker.toUpperCase()} will be worth $${finalValue.toFixed(2)} in ${years} years.\n`);
        end.append(message);
    });
};
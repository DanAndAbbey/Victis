`use strict`;

let finance: {
    list:any[]
    }={
    list:[]
};

function get(e:string):any{
    return document.getElementById(e);
};

//listens for clicks

function listen():void{
    const selectedButton: any  = document.querySelectorAll("button");
    selectedButton.forEach(function(button){
        button.addEventListener("click",function(e: any){
            e.preventDefault();
            const btn: any = e.currentTarget;

            const a = button.id;
            action(a);
        });
    });
}

//decides what to do next

function financeAction(a: string): void{
    const add: any = get("add");
    let dc: any = get("dividend-calculator");
    let d: any = get("dividend");
    let f: any = get("form");

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
    let stock: { 
        symbol: string,
        price: number,
        quantity:number,
        sYield: number,
        years: number,
        frequency:string,  
        //growth: number  
    }={
        symbol: get("symbol").value,
        price: parseFloat(get("price").value),
        quantity: parseFloat(get("quantity").value),
        sYield: parseFloat(get("yield").value),
        years: parseFloat(get("years").value),
        frequency: get("frequency").value,
        //growth: get("growth").value
    };

    function findFinalValue(): number{
        let endingValue: number = math();






        function math(): number{
            const a: string =stock.frequency
            let n: number;
            const theValue: number = (stock.price * stock.quantity);
            const sYield: number = (stock.sYield * .01)/frequency();
            const distributions: number = (stock.years * frequency());
    
            let newValue: number = theValue;
            for (let i = 0; i < distributions; i++){
            newValue = (sYield * newValue) + newValue;
            };

            function frequency(): number{

                if(a === "monthly"){
                    n= 12
                }
                else if(a === "quarterly"){
                    n = 4
                }
                else if(a === "yearly"){
                    n = 1
                };
                return n;
            };

            return newValue;
        }

        return endingValue;
    };

    (finance.list).push([stock.symbol,findFinalValue(),stock.years]);
};

//print results

function print(){
    get("dividend").style.display="none";
    get("form").style.display="none";
    get("end").style.display="flex";


    
    finance.list.forEach(function(stock){
        const ticker: string = stock[0];
        let finalValue: number = stock[1];
        const years: number = stock[2];      
        let element: any = document.createElement("p");
        element.classList.add("result");

        const message: string = (`Your shares of ${ticker.toUpperCase()} will be worth $${finalValue.toFixed(2)} in ${years} years.`);

        element.textContent = message;
        get("end").appendChild(element);
    });
};

listen();

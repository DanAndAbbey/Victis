let app = {
    list:[],
    amountOfTimes: ""
};

window,addEventListener("DOMContentLoaded", function(e){

    main();
    
});

//intro
    function main(){

        let selectedButton = document.querySelectorAll("button[data-amount]");
        selectedButton.forEach(function(button){
            button.addEventListener("click",function(e){
                let button = e.currentTarget;
                app.amountOfTimes = button.getAttribute("data-amount");

                document.getElementById("intro").style.display="none";
                document.getElementById("form").style.display="flex";
                e.preventDefault();

                if (app.amountOfTimes === "multiple"){
                    document.getElementById("done").style.display="flex";
                }
            });
        });
        listen()
        alert("here")
    };

    function listen(){

        let done = document.getElementById("done");
        done.addEventListener("click",function(){
            repeat();

        });
        let submit = document.getElementById("submit");
        submit.addEventListener("click",function(){
            submit();
        });

    }




    function repeat(){
        readStock();
        listen();  
    };

    function submit(){
        readStock();
        print();

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
                return 12
            }
            else if (freq === "quarterly"){
                return 4
            }
            else if (freq === "yearly"){
                return 1
            }
        };

        function findFinalValue(value,yield,distributions){
            let newValue = value
            for (let i = 0; i < distributions; i++){
            newValue = (yield * newValue) + newValue
            };
            return newValue
        }
        
        let ticker = (stock.symbol)
        let years = (stock.years)
        let yield = (parseFloat(stock.yield) * .01)/disFrequency(stock.frequency);
        let distributions = parseInt(stock.years * (disFrequency(stock.frequency)));
        let cost = parseFloat(stock.price * stock.quantity);
        let value = cost;

        let finalValue = findFinalValue(value,yield,distributions);

        

        (app.list).push([ticker,finalValue,years]);
};


//print results

    function print(){
        document.getElementById("intro").style.display="none";
        document.getElementById("form").style.display="none";
        document.getElementById("end").style.display="flex";
        
        app.list.forEach(function(e){
            ticker =e[0],
            finalValue = e[1],
            years = e[2]

        document.getElementById("result").textContent=`Your shares of ${ticker.toUpperCase()} will be worth $${finalValue.toFixed(2)} in ${years} years.`;
        });
    };
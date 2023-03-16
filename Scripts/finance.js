let app = {
    list:[],
};

let selectedButton = document.querySelectorAll("button");
selectedButton.forEach(function(button){
    button.addEventListener("click",function(e){
        e.preventDefault();
        let button = e.currentTarget;

        document.getElementById("intro").style.display="none";
        document.getElementById("form").style.display="flex";

        let action = button.id

        if (action === "one")
            listen()


        else if (action === "multiple"){
            document.getElementById("done").style.display="flex";
            listen()
        }

    });
});

//intro



    function listen(){

        let selectedButton = document.querySelectorAll("button");
        selectedButton.forEach(function(button){
            button.addEventListener("click",function(e){
                e.preventDefault();
                let button = e.currentTarget;

                let action = button.id

                if (action === "done")
                    repeat();
        
                else if (action === "submit"){
                    document.getElementById("done").style.display="flex";
                    submit();
                }

            });
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
        const end = document.getElementById("result");
        document.getElementById("intro").style.display="none";
        document.getElementById("form").style.display="none";
        document.getElementById("end").style.display="flex";
        
        app.list.forEach(function(stock){
            ticker =stock[0],
            finalValue = stock[1],
            years = stock[2]

        let message = `Your shares of ${ticker.toUpperCase()} will be worth $${finalValue.toFixed(2)} in ${years} years.`;
        end.append(message);
        });
    };
window,addEventListener("DOMContentLoaded", function(e){

    let app ={
        list:[],
        num:1
    };


//intro

    let selectedButton = document.querySelectorAll("button[data-amount]");
        selectedButton.forEach(function(button){
            button.addEventListener("click",function(e){
                let button = e.currentTarget;
                let amount = button.getAttribute("data-amount");
                e.preventDefault()

                
                switchForm(amount)
        });
    });

    function switchForm(amount){
        document.getElementById("intro").style.display="none";
        document.getElementById("form").style.display="flex";
        e.preventDefault()

        if (amount === "multiple"){
            document.getElementById("add").style.display="flex";
            e.preventDefault()
            multipleStocks()
            app.num = 2

        }

        else{
            oneStock()
        }
    };




//one

    function oneStock(){

        let submit = document.getElementById("submit");
        submit.addEventListener("click",function(e){

            e.preventDefault();

            let stock = {
                symbol: document.getElementById("symbol").value,
                price: document.getElementById("price").value,
                quantity: document.getElementById("quantity").value,
                yield: document.getElementById("yield").value,
                years: document.getElementById("years").value,
                frequency: document.getElementById("frequency").value
            };

    addToList(stock);
        
})};












function addToList(stock){
    console.log(stock) 
    document.getElementById("form").reset();
    app.list.push(stock);
     
    if (app.num===1){
        submitForm();
    }    
        
};

//multiple

    function multipleStocks(){

        let stock = {
            symbol: document.getElementById("symbol").value,
            price: document.getElementById("price").value,
            quantity: document.getElementById("quantity").value,
            yield: document.getElementById("yield").value,
            years: document.getElementById("years").value,
            frequency: document.getElementById("frequency").value
        };

        let add = document.getElementById("add");
        add.addEventListener("click",function(e){
            e.preventDefault();

        addToList(stock);  



        });

        let submit = document.getElementById("submit");
        submit.addEventListener("click",function(e){
            e.preventDefault();
            app.num=1;
            addToList(stock);
        });
    };

























//submit

    function submitForm(){        
        
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
        };
    
        app.list.forEach(function(stock){

        let ticker = (stock.symbol)
        let years = (stock.years)
        let yield = (parseFloat(stock.yield) * .01)/disFrequency(stock.frequency);
        let distributions = parseInt(stock.years * (disFrequency(stock.frequency)));
        let cost = parseFloat(stock.price * stock.quantity);
        let value = cost;

        let finalValue = findFinalValue(value,yield,distributions);

        print(ticker,finalValue,years);

        });

    };




//print results

    function print(ticker,finalValue,years){
        document.getElementById("result").textContent=`Your shares of ${ticker.toUpperCase()} will be worth $${finalValue.toFixed(2)} in ${years} years.`;
    };

});
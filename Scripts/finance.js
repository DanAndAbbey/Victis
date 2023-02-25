window,addEventListener("DOMContentLoaded", function(e){

    let form = document.getElementById("submit");
    form.addEventListener("click",function(e){

        e.preventDefault();

        let stock = {
            symbol: document.getElementById("symbol").value,
            price: document.getElementById("price").value,
            quantity: document.getElementById("quantity").value,
            yield: document.getElementById("yield").value,
            growth: document.getElementById("growth").value,
            years: document.getElementById("years").value,
            frequency: document.getElementById("frequency").value
        }

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
        }
        
        let yield = parseFloat(stock.yield) * .01;
        let distributions = parseFloat(stock.years * (disFrequency(stock.frequency)));
        let cost = parseFloat(stock.price * stock.quantity);
        let value = 0

        for (let i =0; i < 1; i++){
                value = (cost * yield) + cost
        }
        
        for (let i =1; i < distributions; i++){
            value *= yield
        }

        console.log(value)


})});
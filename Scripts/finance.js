window,addEventListener("DOMContentLoaded", function(e){

    let form = document.getElementById("submit");
    form.addEventListener("click",function(e){

        e.preventDefault();

        let stock = []
            stock.push(document.getElementById("symbol").value);
            stock.push(document.getElementById("price").value);
            stock.push(document.getElementById("quantity").value);
            stock.push(document.getElementById("yield").value);
            stock.push(document.getElementById("years").value);
            stock.push( document.getElementById("frequency").value);
        

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
        
        let yield = (parseFloat(stock[3]) * .01)/disFrequency(stock[5]);
        let distributions = parseInt(stock[4] * (disFrequency(stock[5])));
        let cost = parseFloat(stock[1] * stock[2]);
        let value = cost

        for (let i = 0; i < distributions; i++){
            value = (yield * value) + value
        }

        document.getElementById("result").textContent=`Your shares of ${stock[0].toUpperCase()} will be worth $${value.toFixed(2)} in ${stock[4]} years.`

})});
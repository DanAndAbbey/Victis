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
            if (freq === monthly){
                return 12
            }
            else if (freq === quarterly){
                return 4
            }
            else if (freq === yearly){
                return 1
            }
        }

        let cost = parseFloat(stock.price * stock.quantity)


})});
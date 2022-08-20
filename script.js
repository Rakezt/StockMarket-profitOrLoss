var costPrice = document.querySelector(".cost-price");
var stockPrice = document.querySelector(".stock-price")
var sellingPrice = document.querySelector(".selling-price")
var calculateButton = document.querySelector(".calculate-btn")
var output = document.querySelector(".output")

calculateButton.addEventListener("click", clickHandler)

function clickHandler() {
    var cp = Number(costPrice.value);
    var sp = Number(stockPrice.value);
    var sellp = Number(sellingPrice.value);

    calculateProfitAndLoss(cp, sp, sellp)
}

function calculateProfitAndLoss(cost, stock, selling) {
    if(isNaN(cost)){
        outputDisplay("Input only number")
    }else if(isNaN(stock)){
        outputDisplay("Input only number")
    }else if(isNaN(selling)){
        outputDisplay("Input only number")
    }else if(cost==null || cost==""){
        outputDisplay("Cost price can't be empty")
    }else if(stock==null || stock==""){
        outputDisplay("Stock quantity can't be empty")
    }else if(selling==null || selling==""){
        outputDisplay("Selling price can't be empty")
    } else {
 if (cost > selling) {
        var loss = (cost - selling)*stock;
        var lossPercentage = ((loss/cost)*100).toFixed(2);
        outputDisplay("So sorry 🤫 😞, you have loss Rs." + loss + "/- and the loss percentage is " + lossPercentage +"%, failure is a stepping stone to success, don't give up")
    } else if (selling > cost) {
        var profit = (selling - cost)*stock;
        var profitPercentage = ((profit/cost)*100).toFixed(2);
        outputDisplay("Congratulation 💰💰, you have gain Rs." + profit + "/- and the profit percentage is " + profitPercentage+"%")
    } else {
        outputDisplay("put more effort, only hard work pays")
    }
    }
}

function outputDisplay(message){
    output.innerText=message
}
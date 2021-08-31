const input = document.querySelectorAll(".input");
const calculate = document.querySelector("#check");
const outputArea = document.querySelector("#output-area");

calculate.addEventListener("click", calculateProfitLoss);

function calculateProfitLoss(){
    console.log("clicked");
    var purchasedPrice = Number(input[0].value);
    var stockCount = Number(input[1].value);
    var currentPrice = Number(input[2].value);
    calculateTotal(purchasedPrice, stockCount, currentPrice);
}
function calculateTotal(purchasedPrice, stockCount, currentPrice){
    var totalCostPrice = purchasedPrice*stockCount;
    var totalSellPrice = currentPrice*stockCount;
    var loss=0;
    var profit=0;
    if(totalCostPrice > totalSellPrice){
        loss = totalCostPrice - totalSellPrice;
        lossPercentage = (loss/purchasedPrice) * 100;
        showMessage(`You are having loss of ${loss} with loss percentage of ${lossPercentage}%.`);
    }
    else if(totalCostPrice < totalSellPrice){
        profit = totalSellPrice-totalCostPrice;
        profitPercentage = (profit/purchasedPrice)*100;
        showMessage(`You are having profit of ${profit} with profit percentage of ${profitPercentage}%.`);
    }
    else{
        showMessage(`You are having no profit no loss :)`);
    }
}
function showMessage(message){
    outputArea.innerHTML = message;
}
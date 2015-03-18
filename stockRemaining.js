//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date:		        18/03/2015
//File:		        stockRemaining.js


exports.stockRemaining = function(stockList, saleList){
    var stockLeft = {};

    for(var prodName in stockList) {
        for(var name in saleList) {
            if(prodName === name) {
                stockLeft[prodName] = ((parseInt(stockList[prodName] - saleList[name])) / (parseInt(stockList[prodName])) * 100).toFixed(2) + "%";
            }
        }

    }
    return stockLeft;
}
//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date:		        12/03/2015
//File:		        totalEarningsPerProduct.js
//Description:	    Method - Takes the itemMap and salesPriceArray and returns a map with the total earnings per product



exports.totalEarningsPerProduct = function(quantityList, salePriceList){
    var totalPricePerProd = {};

    for(var prodName in quantityList) {
        for(var name in salePriceList) {
            if(prodName === name) {
                totalPricePerProd[prodName] = parseFloat(quantityList[prodName] * salePriceList[name]).toFixed(2);
            }
        }

    }
    return totalPricePerProd;
}
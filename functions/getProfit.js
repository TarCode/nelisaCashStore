//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date: 	        17/03/2015
//File:		        getProfit.js

var profitMap = {};


exports.getProfit = function(salePriceArr, costPriceArr){


    for(item in salePriceArr){
        for(thing in costPriceArr) {
            if(item === thing) {
                profitMap[item] = parseFloat(salePriceArr[item].slice(1) - costPriceArr[thing].slice(1)).toFixed(2);
            }
        }
    }

        return profitMap;
	
}


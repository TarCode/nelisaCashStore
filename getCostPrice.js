//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date: 	        17/03/2015
//File:		        getCostPrice.js

var costPriceMap = {};


exports.getCostPrice = function(stockArr){
	 
         stockArr.forEach(function(item) {

                if(!costPriceMap[item.itemName]) {

                    costPriceMap[item.itemName] = item.cost;


                }
                /*else {
                        var q = costPriceMap[item.itemName];
                        costPriceMap[item.itemName] = parseInt(q) + parseInt(item.cost);
                }*/
         });
        return costPriceMap;
	
}


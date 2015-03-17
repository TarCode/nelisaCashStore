//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date: 	        11/03/2015
//File:		        getSalePrice.js

var salePriceMap = {};


exports.getSalePrice = function(itemArr){
	 
         itemArr.forEach(function(item) {

                if(!salePriceMap[item.itemName]) {

                    salePriceMap[item.itemName] = item.salePrice;


                }
                else {
                        var q = salePriceMap[item.itemName];
                        salePriceMap[item.itemName] = parseInt(q) + parseInt(item.salePrice);
                }
         });
        return salePriceMap;
	
}


//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date: 	        11/03/2015
//File:		        getSalePrice.js

var salePriceMap = {};


exports.getSalePrice = function(itemArr){
	 
         itemArr.forEach(function(item) {

                if(!salePriceMap[item.itemName]) {

                    salePriceMap[item.itemName] = item.salesPrice;


                }
                else {
                        var q = salePriceMap[item.itemName];
                        salePriceMap[item.itemName] = parseInt(q) + parseInt(item.salesPrice);
                }
         });
        return salePriceMap;
	
}


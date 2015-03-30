//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date: 	        30/03/2015
//File:		        supplyPopProduct.js

var costPriceMap = {};


exports.supplyPopProduct = function(stockArr, popProd){
	 
        for(var i = 0; i < stockArr.length; i++){

                if(stockArr[i].itemName === popProd.name) {

                    costPriceMap = {Supplier:stockArr[i].shop,
                                    Product: stockArr[i].itemName};


                }

         }
        return costPriceMap;
	
}


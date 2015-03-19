//Author:	Taariq Isaacs and Pholisa Fatyela
//Date: 	18/03/2015
//File:		getSaleList.js


var saleMap = {};
exports.getSaleList = function(itemArr){
	 
         itemArr.forEach(function(item) {

                if(!saleMap[item.itemName]) {
                        saleMap[item.itemName] = item.noSold;
                }
                else {
                        var q = saleMap[item.itemName];
                        saleMap[item.itemName] = parseInt(q) + parseInt(item.noSold);
                }
         });
        return saleMap;
	
}


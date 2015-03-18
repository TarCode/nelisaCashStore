//Author:	Taariq Isaacs and Pholisa Fatyela
//Date: 	18/03/2015
//File:		getStockList.js


var stockMap = {};
exports.getStockList = function(stockArr){
	 
         stockArr.forEach(function(item) {

                if(!stockMap[item.itemName]) {
                        stockMap[item.itemName] = item.qty;
                }
                else {
                        var q = stockMap[item.itemName];
                        stockMap[item.itemName] = parseInt(q) + parseInt(item.qty);
                }
         });
        return stockMap;
	
}


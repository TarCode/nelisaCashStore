//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date: 	        18/03/2015
//File:		        getProfitPerCat.js
//Description:		Method - Takes the itemMap and salesPriceArray and returns a map with the total earnings per category


exports.getProfitPerCat = function(categ, totProfit){
    var totalProfitPerCat = {};
    var moola = 0;

        for (var items in categ){
            for (var x = 0; x < categ[items].length; x++) {
                for(var product in totProfit) {

                    if (categ[items][x].product === product) {
                        moola += parseFloat(totProfit[product]) * categ[items][x].qty;
                        totalProfitPerCat[items] = moola.toFixed(2);;

                    }

                }

            }
            moola = 0;
        }

    return totalProfitPerCat;
}



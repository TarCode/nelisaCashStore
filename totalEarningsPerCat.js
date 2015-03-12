//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date: 	        12/03/2015
//File:		        EarningsPerCat.js
//Description:		Method - Takes the itemMap and salesPriceArray and returns a map with the total earnings per category


exports.totalEarningsPerCat = function(categ, totEarnings){
    var totalPricePerCat = {};

    for(var item in categ) {
        for(var x =0; x<categ[item].length; x++){
            for (var product in totEarnings) {
                if(categ[item][x] === product) {
                    totalPricePerCat[product] = categ[item][x].qty * totEarnings[product];
                }
            }
        }
    }
    return totalPricePerCat;
}



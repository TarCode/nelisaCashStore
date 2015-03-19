//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date: 	        12/03/2015
//File:		        EarningsPerCat.js
//Description:		Method - Takes the itemMap and salesPriceArray and returns a map with the total earnings per category


exports.totalEarningsPerCat = function(categ, totEarnings){
    var totalPricePerCat = {};
    var moola = 0;

        for (var items in categ){
            for (var x = 0; x < categ[items].length; x++) {
                for(var product in totEarnings) {

                    if (categ[items][x].product === product) {
                        moola += parseFloat(totEarnings[product]);
                        totalPricePerCat[items] = moola.toFixed(2);;

                    }

                }

            }
            moola = 0;
        }

    return totalPricePerCat;
}



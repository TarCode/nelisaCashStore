//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date:		        10/03/2015
//File:		        avgDailySalesPerProduct.js
//Description:	    Method - Takes the Category Map created in makeCat.js and returns a map with the total quantity
//                  for each category.
var SaleTot = {};
var moola = 0;
exports.DailySalesPerProduct = function(saleArr) {


   for (var date in saleArr){
       if (!SaleTot[saleArr[date]]) {
            for(var i = 0; i < saleArr[date].length; i++) {
                    moola += parseFloat(saleArr[date][i].sale);

                }

            SaleTot[date] = moola;
           moola = 0;
            }

           }


    return SaleTot;

};
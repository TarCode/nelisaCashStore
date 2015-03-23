//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date:		        23/03/2015
//File:		        avgDailySalesPerProduct.js

var weeklyTot = {};
var dayCount = 0;
var weekCount = 0;

exports.avgWeeklySalesPerProduct = function(saleArr) {


   for (var date in saleArr) {
       for (var i = 0; i < saleArr[date].length; i++) {
           if (!weeklyTot[saleArr[date][i].product]) {
               weeklyTot[saleArr[date][i].product] = parseFloat(saleArr[date][i].sale);

           }

            else {
                 weeklyTot[saleArr[date][i].product] += parseFloat(saleArr[date][i].sale);



           }

       }
    dayCount++;
       if(dayCount === 7){
           weekCount++;
           dayCount = 0;
       }
   }
    for(prod in weeklyTot){
        weeklyTot[prod] = (weeklyTot[prod]/weekCount).toFixed(2);
    }

    return weeklyTot;

};
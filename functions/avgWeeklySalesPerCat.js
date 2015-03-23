//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date:		        23/03/2015
//File:		        avgDailySalesPerProduct.js

var avPerCat = {};
var dayCount = 0;
var weekCount = 0;

exports.avgWeeklySalesPerCat = function(catTotal,dayTotal) {


   for (var day in dayTotal) {
        dayCount++;
       if(dayCount === 7) {
           weekCount++;
           dayCount = 0;
       }
   }

    for(var cat in catTotal){

        avPerCat[cat] = (parseFloat(catTotal[cat])/weekCount);
    }

    return avPerCat;

};
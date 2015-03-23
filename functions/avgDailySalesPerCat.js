//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date:		        23/03/2015
//File:		        avgDailySalesPerProduct.js

var avPerCat = {};
var dayCount = 0;

exports.avgDailySalesPerCat = function(catTotal,dayTotal) {


   for (var day in dayTotal) {
        dayCount++;
   }

    for(var cat in catTotal){

        avPerCat[cat] = (parseFloat(catTotal[cat])/dayCount).toFixed(2);
    }

    return avPerCat;

};
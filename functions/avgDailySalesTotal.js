//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date:		        23/03/2015
//File:		        avgDailySalesTotal.js

var avg = 0;
var count = 0;
exports.avgDailySalesTotal = function(dayTot) {


   for (var date in dayTot){

       avg += parseFloat(dayTot[date]);
       count++;

   }

    avg = avg/count;


    return avg;

};
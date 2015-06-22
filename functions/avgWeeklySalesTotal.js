//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date:		        23/03/2015
//File:		        avgWeeklySalesTotal.js

var weekCount = 0;
var weekTotal = 0;

exports.avgWeeklySalesTotal = function(weekTot) {


   for (var week in weekTot){
        weekCount++;
        weekTotal = weekTotal + weekTot[week];

   }
    weekTotal = weekTotal/weekCount;



    return weekTotal;

};
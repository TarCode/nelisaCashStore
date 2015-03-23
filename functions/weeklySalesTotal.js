//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date:		        23/03/2015
//File:		        weeklySalesTotal.js

var weekArr = {};
var avg = 0;
var count = 0;
weekCount = 1;
var week = "";
exports.weeklySalesTotal = function(dayTot) {


   for (var date in dayTot){

       avg += parseFloat(dayTot[date]);
       count++;

       if(count === 7){
           week = 'week'+weekCount.toString();
           weekArr[week]= avg;
           avg = 0;
           count = 0;
           weekCount++;
       }

   }



    return weekArr;

};
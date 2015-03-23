//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date:		        23/03/2015
//File:		        avgDailySalesPerProduct.js

var SaleTot = {};
var count = 0;

exports.avgDailySalesPerProduct = function(saleArr) {


   for (var date in saleArr) {
       for (var i = 0; i < saleArr[date].length; i++) {
           if (!SaleTot[saleArr[date][i].product]) {
               SaleTot[saleArr[date][i].product] = parseFloat(saleArr[date][i].sale);

           }

            else {
                 SaleTot[saleArr[date][i].product] += parseFloat(saleArr[date][i].sale);



           }

       }
    count++;
   }
    for(prod in SaleTot){
        SaleTot[prod] = (SaleTot[prod]/count).toFixed(2);
    }

    return SaleTot;

};
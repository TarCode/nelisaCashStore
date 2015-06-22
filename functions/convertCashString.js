//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date:		        12/03/2015
//File:		        convertCashString.js
//Description:	    Method - Takes the salesPriceArray and returns a map with the total earnings converted to a float

var totalEarnings = {};
var cashString = '';
var cashArr = [];
var rands = '';
var cents = '';
var randInt = '';
var cashFormat = '';

exports.convertCashString = function(salePriceArr){

    String.prototype.replaceAt = function (index, char) {
        return this.substr(0, index) + char + this.substr(index + char.length);
    };



    for(var prodName in salePriceArr) {
        cashString = salePriceArr[prodName];

        cashArr = cashString.split(',');
        rands = cashArr[0];
        cents = cashArr[1];

        randInt = rands.replaceAt(0,' ');

        cashFormat = randInt + '.' + cents;

        totalEarnings[prodName] = parseFloat(cashFormat);
        }

    return totalEarnings;
}


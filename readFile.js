//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date:		        5/03/2015
//File:		        readFile.js
//Description:	    Main file- Reads in CSV file and outputs the product names and amount sold as well as most and least sold products.

var totEarnCat = require('./totalEarningsPerCat');
var totEarn = require('./totalEarningsPerProduct');
var convertCash = require('./convertCashString');
var salePriceList = require('./getSalePrice');
var catTotal = require('./catTotal');
var mCat = require('./makeCat');
var mSold = require('./mostSold');
var lSold = require('./leastSold');
var filter = require('./filter');
var csv = require('fast-csv');
var fs = require('fs');
var stream = fs.createReadStream("salesHistory.csv");

var itemArr = [];

csv
 .fromStream(stream,{delimiter: ';'}, {headers : ["Day", "Date", "stockItem", "NoSold", "Sales", "Price"]})
 .on("data", function(data){
	
	itemArr.push({
		itemName : data[2],
		qty : data[3],
        salesPrice: data[4]
	});

 })
 .on("end", function(){
        console.log("done");
	   //console.log(itemArr);

	    var itemMap = filter.sortData(itemArr);

        console.log("\nPRODUCTS AND QUANTITY SOLD:")
	    console.log(itemMap);

	    var most = mSold.mostSold(itemMap);
	    console.log("\nMOST SOLD PRODUCT: " );
        console.log(most);


	    var least = lSold.leastSold(itemMap);
	    console.log("\nLEAST SOLD PRODUCT: ");
        console.log(least);

        var cat = mCat.makeCat(itemMap);



        console.log("\nCATEGORIES: ");
        console.log(cat);



        var totalPerCat = catTotal.catTotal(cat);
        console.log("\nTOTAL QUANTITY SOLD PER CATEGORY: ")
        console.log(totalPerCat);

        var mostPopularCat =  mSold.mostSold(totalPerCat);

        console.log("\nMOST POPULAR CATEGORY: ")
        console.log(mostPopularCat);

        var leastPopularCat =  lSold.leastSold(totalPerCat);

        console.log("\nLEAST POPULAR CATEGORY: ")
        console.log(leastPopularCat);

        var salePriceArr = salePriceList.getSalePrice(itemArr);

        console.log("\nPRODUCT SELLING PRICE: ");
        console.log(salePriceArr);

        var convertedCash = convertCash.convertCashString(salePriceArr);

        console.log("\nTOTAL EARNINGS PER PRODUCT: ");
        var totEarnings = totEarn.totalEarningsPerProduct(itemMap, convertedCash);
        console.log(totEarnings);

        var totCatCash = totEarnCat.totalEarningsPerCat(cat, totEarnings);
        console.log("\nTOTAL EARNINGS PER CATEGORY: ");
        console.log(totCatCash);

    });

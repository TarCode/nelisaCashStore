//Author:	 Taariq Isacs
//Date:		 5/03/2015
//File:		 readFile.js
//Description:	 Main file- Reads in CSV file and outputs the product names and amount sold as well as most and least sold products.

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
		qty : data[3]
	});
	//console.log();

 })
 .on("end", function(){
     console.log("done");
	 //console.log(itemArr);

	var map = filter.sortData(itemArr);
	console.log(map);

	var most = mSold.mostSold(map);
	console.log("\nMost Sold Product: " );
    console.log(most);


	var least = lSold.leastSold(map);
	console.log("\nLeast Sold Product: ");
        console.log(least);
    });
 

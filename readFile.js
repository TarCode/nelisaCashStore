//Author: Taariq Isacs
//date: 5 march 2015
// This code reads the csv and extracts the stock item and quantity of that item that was sold.
// It displays the total item that were sold for a specific item 
var stats = require('./stats');
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
	var most = stats.mostSold(map);
	console.log(most);
	var least = stats.leastSold(map);
	console.log(least);
 });
 

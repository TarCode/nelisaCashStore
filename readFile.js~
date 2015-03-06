//Author: pholisa fatyela
//date: 5 march 2015
// This code reads the csv and extracts the stock item and quantity of that item that was sold.
// It displays the total item that were sold for a specific item 

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

	 var itemMap = {};
	 itemArr.forEach(function(item) {
	 	//console.log(item.itemName);
	 	//itemMap[item.itemName] = item.qty;

	 	if(!itemMap[item.itemName]) {
	 		itemMap[item.itemName] = item.qty;
	 	}
	 	else {
	 		var q = itemMap[item.itemName];
	 		itemMap[item.itemName] = parseInt(q) + parseInt(item.qty);
	 	}
	 });
	console.log(itemMap);
 });
 

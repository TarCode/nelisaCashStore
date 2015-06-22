//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date:		        5/03/2015
//File:		        readCSV.js
//Description:	    Reads in CSV file and outputs the product names and amount sold as well as most and least sold products.

var fs = require('fs');

exports.readCSV = function(fileName) {
    var stream = fs.readFileSync(fileName);

   var list = stream.toString().replace( /,/gi, '.');
    var rows = list.split('\r');

    var purchList = rows.map(function(row){
        var fields = row.split(';');
        if(fileName === "salesHistory.csv") {
            return {
                day: fields[0],
                date: fields[1],
                itemName: fields[2],
                noSold: fields[3],
                salePrice: fields[4]
            }
        }
        else{
            return{
                shop: fields[0],
                date: fields[1],
                itemName: fields[2],
                qty: fields[3],
                cost: fields[4],
                totCost: fields[5]
            }
        }
    });

    return purchList;

}
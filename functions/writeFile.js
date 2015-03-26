//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date:		        5/03/2015
//File:		        readCSV.js
//Description:	    Reads in CSV file and outputs the product names and amount sold as well as most and least sold products.

var fs = require('fs');

exports.writeToFile = function(data, fileName) {
    fs.writeFile(fileName, JSON.stringify(data));

}
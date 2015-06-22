//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date:		        5/03/2015
//File:		        appendFile.js

var fs = require('fs');

exports.appendToFile = function(data, fileName) {
    fs.appendFile(fileName, JSON.stringify(data));

}
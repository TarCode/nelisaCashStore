//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date:		        10/03/2015
//File:		        getFrequency.js
//Description:	    Method - Takes the Category Map created in makeCat.js and returns a map with the total quantity
//                  for each category.
var freqMap = {};
exports.getFrequency = function(dateArr) {


   for (var date in dateArr){
            for(var i = 1; i < dateArr[date].length; i++) {
                if (!freqMap[dateArr[date][i].product]) {
                    freqMap[dateArr[date][i].product] = 1;
                }
                else{
                    freqMap[dateArr[date][i].product] += 1;
                }
            }

           }


    return freqMap;

}
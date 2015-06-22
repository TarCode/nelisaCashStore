//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date:		        10/03/2015
//File:		        catTotal.js
//Description:	    Method - Takes the Category Map created in makeCat.js and returns a map with the total quantity
//                  for each category.

exports.catTotal = function(cat) {
    var tot = 0;
    var totalCat = {};
   for (var categories in cat){


           if (!totalCat[categories]){
               totalCat[categories] = [];
           }

            for (var items in cat[categories]) {
                for (var x = 0; x < cat[categories].length; x++){
                    tot += parseInt(cat[categories][x]["qty"]);
                    totalCat[categories] =  tot;

                }
                tot = 0;
            }

   }
    return totalCat;

}
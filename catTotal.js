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
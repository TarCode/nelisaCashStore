//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date: 	        19/03/2015
//File:		        getDailySales.js

var dateMap = {};


exports.getDailySales= function(itemArr){

    for(var x=0;x < itemArr.length; x++){

        if(itemArr[x].itemName !== 'stockItem' && itemArr[x].date !== 'Date' ) {
            if (!dateMap[itemArr[x].date]){
                dateMap[itemArr[x].date] = [];
            }

            if( itemArr[x].noSold !== "0"){
                dateMap[itemArr[x].date].push({
                    product: itemArr[x].itemName,
                    sale: itemArr[x].noSold

                });
            }
        }


        /*
         for (var itemNameInMapping in catList){

         if(itemName === itemNameInMapping) {
         catMap[catList[itemName]] += itemNameInMapping+", ";
         }

         }*/
    }
        return dateMap;
	
}


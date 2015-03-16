//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date: 	        16/03/2015
//File:		        getDate.js

var dateMap = {};


exports.getDate = function(itemArr){

    for(var x=0;x < itemArr.length; x++){

        if(itemArr[x].itemName !== 'stockItem' && itemArr[x].date !== 'Date' ) {
            if (!dateMap[itemArr[x].date]){
                dateMap[itemArr[x].date] = [];
            }

            if( itemArr[x].qty !== '0'){
                dateMap[itemArr[x].date].push({
                    product: itemArr[x].itemName

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


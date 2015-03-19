//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date: 	        09/03/2015
//File:		        leastSold.js

exports.leastSold = function(map){
        var min = Number.MAX_VALUE;
        var key = "";
        for(var m in map){
                var val = map[m];
                if(parseFloat(map[m]) < min){
                        min = map[m];
                        key = m;
                }
        }
        var least = {
            name: key,
            amt: min
        }

        return (least);
}


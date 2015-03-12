//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date: 	        09/03/2015
//File:		        mostSold.js

exports.mostSold = function(map){
	var max = 0;
	var key = "";
	for(var m in map){
		var val = map[m];
		if(map[m] > max){
			max = map[m];
			key = m;
		}
	}

    var most = {
        name: key,
        noSold: max
    }

    return (most);
}




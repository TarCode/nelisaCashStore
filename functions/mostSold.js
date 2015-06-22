//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date: 	        09/03/2015
//File:		        mostSold.js

exports.mostSold = function(map){



	var max = 0;
	var key = "";

	for(var m in map){
		var val = parseFloat(map[m]);

		if(parseFloat(map[m]) > max){
			max = map[m];
			key = m;
		}
	}




    var most = {
        name: key,
        amt: max
    }

    return (most);






}




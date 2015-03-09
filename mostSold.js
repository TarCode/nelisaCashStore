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
        stockItem: key,
        noSold: max
    }

    return (most);
}




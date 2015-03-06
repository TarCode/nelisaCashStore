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
	return ("Most sold product: " + key + "\nAmount Sold: " + max);
}

module.exports.leastSold = function(map){
        var min = 172;
        var key = "";
        for(var m in map){
                var val = map[m];
                if(map[m] < min){
                        min = map[m];
                        key = m;
                }
        }
        return ("Least sold product: " + key + "\nAmount Sold: " + min);
}



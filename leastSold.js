exports.leastSold = function(map){
        var min = Number.MAX_VALUE;
        var key = "";
        for(var m in map){
                var val = map[m];
                if(map[m] < min){
                        min = map[m];
                        key = m;
                }
        }
        var least = {
            stockItem: key,
            noSold: min
        }

        return (least);
}


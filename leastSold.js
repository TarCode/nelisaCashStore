exports.leastSold = function(map){
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


var itemMap = {};
exports.sortData = function(itemArr){ 
	 
         itemArr.forEach(function(item) {

                if(!itemMap[item.itemName]) {
                        itemMap[item.itemName] = item.qty;
                }
                else {
                        var q = itemMap[item.itemName];
                        itemMap[item.itemName] = parseInt(q) + parseInt(item.qty);
                }
         });
        return itemMap;
	
}


exports.milkList = function(itemArr){ 
	var milkArr = [];
        for (var i = 0; i < itemArr.length; i++){
                if(itemArr[i][2] === 'Milk 1l'){
                        milkArr.push(itemArr[i]);
                }
        }

        return milkArr;
}

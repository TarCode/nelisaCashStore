exports.refactorOutput = function(list){
    var newList = Object.keys(list).map(function(key){
        return {
            name: key,
            amt: list[key]
        };
    });
    return newList;
}
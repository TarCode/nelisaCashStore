var CSV = require("a-csv");
var file = "salesHistory.csv";

var catArr = [];
var itemArr = [];

var options = {
    delimiter: ";",
    charset: "utf-8"
};

CSV.parse(file, options, function (err, row, next) {

    if (err) {
        return console.log(err);
    }

    if (row !== null) {
        itemArr.push(row);
        return next();
    }

    console.log(itemArr);

	for(var x = 0; x < itemArr.length; x++){
		for(var y = 0; y < itemArr.length; y++){
			if(itemArr[x][2] == itemArr[y][2]){
				catArr.push(itemArr[y]);
			}
		}
	}
	
    console.log(catArr);
});


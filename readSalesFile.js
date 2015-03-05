var milk = require("./milkList");
var CSV = require("a-csv");
var file = "salesHistory.csv";

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

	var milky = milk.milkList(itemArr);
console.log(milky);
		
});


//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date:		        09/03/2015
//File:		        makeCat.js
//Description:	    Method - Takes the itemMap and returns a map with the categorized products

var catList = {
    'Milk 1l': 'shortLife',
    'Imasi': 'shortLife',
    'Bread': 'shortLife',
    'Chakalaka Can': 'cannedGoods',
    'Gold Dish Vegetable Curry Can': 'cannedGoods',
    'Fanta 500ml': 'cooldrinks',
    'Coke 500ml': 'cooldrinks',
    'Cream Soda 500ml': 'cooldrinks',
    'Iwisa Pap 5kg': 'longLife',
    'Top Class Soy Mince': 'longLife',
    'Shampoo 1 litre': 'toiletries',
    'Soap Bar': 'toiletries',
    'Bananas - loose': 'fruit',
    'Apples - loose': 'fruit',
    'Mixed Sweets 5s': 'sweets',
    'Heart Chocolates': 'sweets',
    'Rose (plastic)': 'gifts',
    'Valentine Cards': 'gifts'
}

exports.makeCat = function(itemMap){

    var catMap = {};

    for(var itemName in itemMap){
        //var val = itemMap[m];

        var category = catList[itemName];
        if(itemMap[itemName] !== 'NoSold' && itemMap !== undefined) {
            if (!catMap[category]){
            catMap[category] = [];
            }


            catMap[category].push({
                product: itemName,
                qty: itemMap[itemName]
            });
        }


        /*
        for (var itemNameInMapping in catList){

            if(itemName === itemNameInMapping) {
                catMap[catList[itemName]] += itemNameInMapping+", ";
            }

        }*/
    }
    return catMap;

}
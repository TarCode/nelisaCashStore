//Author:	        Taariq Isaacs
//Date: 	        09/03/2015
//File:		        filter_test.js

var mkCat = require('../makeCat');

var list = { shortLife:
    [ { product: 'Milk 1l', qty: 142 },
        { product: 'Imasi', qty: 125 },
        { product: 'Bread', qty: 130 } ],
    cannedGoods:
        [ { product: 'Chakalaka Can', qty: 94 },
            { product: 'Gold Dish Vegetable Curry Can', qty: 86 } ],
    cooldrinks:
        [ { product: 'Fanta 500ml', qty: 94 },
            { product: 'Coke 500ml', qty: 159 },
            { product: 'Cream Soda 500ml', qty: 75 } ],
    longLife:
        [ { product: 'Iwisa Pap 5kg', qty: 47 },
            { product: 'Top Class Soy Mince', qty: 98 } ],
    toiletries:
        [ { product: 'Shampoo 1 litre', qty: 26 },
            { product: 'Soap Bar', qty: 50 } ],
    fruit:
        [ { product: 'Bananas - loose', qty: 114 },
            { product: 'Apples - loose', qty: 114 } ],
    sweets:
        [ { product: 'Mixed Sweets 5s', qty: 172 },
            { product: 'Heart Chocolates', qty: 20 } ],
    gifts:
        [ { product: 'Rose (plastic)', qty: 14 },
            { product: 'Valentine Cards', qty: 14 } ] }

var arr ={ stockItem: 'NoSold',
    'Milk 1l': 142,
    Imasi: 125,
    Bread: 130,
    'Chakalaka Can': 94,
    'Gold Dish Vegetable Curry Can': 86,
    'Fanta 500ml': 94,
    'Coke 500ml': 159,
    'Cream Soda 500ml': 75,
    'Iwisa Pap 5kg': 47,
    'Top Class Soy Mince': 98,
    'Shampoo 1 litre': 26,
    'Soap Bar': 50,
    'Bananas - loose': 114,
    'Apples - loose': 114,
    'Mixed Sweets 5s': 172,
    'Heart Chocolates': 20,
    'Rose (plastic)': 14,
    'Valentine Cards': 14 };

test('makeCat.makeCat()', function() {
    deepEqual(mkCat.makeCat(arr), list);
    
})

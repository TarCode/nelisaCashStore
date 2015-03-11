//Author:	        Taariq Isaacs
//Date: 	        09/03/2015
//File:		        filter_test.js

var totCat = require('../catTotal');

var arr = { shortLife:
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

var list ={ shortLife: 397,
    cannedGoods: 180,
    cooldrinks: 328,
    longLife: 145,
    toiletries: 76,
    fruit: 228,
    sweets: 192,
    gifts: 28 };

test('makeCat.makeCat()', function() {
    deepEqual(totCat.catTotal(arr), list);
    
})

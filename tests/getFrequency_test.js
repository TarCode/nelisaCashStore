//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date: 	        11/03/2015
//File:		        getSalePrice_test.js

var gtFreq = require('../getFrequency');

var list ={ 'Milk 1l': 2,
        Imasi: 2,
        Bread: 2,
        'Chakalaka Can': 2,
        'Gold Dish Vegetable Curry Can': 2,
        'Fanta 500ml': 2,
        'Coke 500ml': 2,
        'Cream Soda 500ml': 2,
        'Iwisa Pap 5kg': 2,
        'Top Class Soy Mince': 2,
        'Shampoo 1 litre': 2,
        'Soap Bar': 2,
        'Bananas - loose': 2,
        'Apples - loose': 2,
        'Mixed Sweets 5s': 2 };

var arr = {'17-Feb':
        [ { product: 'Milk 1l' },
            { product: 'Imasi' },
            { product: 'Bread' },
            { product: 'Chakalaka Can' },
            { product: 'Gold Dish Vegetable Curry Can' },
            { product: 'Fanta 500ml' },
            { product: 'Coke 500ml' },
            { product: 'Cream Soda 500ml' },
            { product: 'Iwisa Pap 5kg' },
            { product: 'Top Class Soy Mince' },
            { product: 'Shampoo 1 litre' },
            { product: 'Soap Bar' },
            { product: 'Bananas - loose' },
            { product: 'Apples - loose' },
            { product: 'Mixed Sweets 5s' } ],
    '18-Feb':
        [ { product: 'Milk 1l' },
        { product: 'Imasi' },
        { product: 'Bread' },
        { product: 'Chakalaka Can' },
        { product: 'Gold Dish Vegetable Curry Can' },
        { product: 'Fanta 500ml' },
        { product: 'Coke 500ml' },
        { product: 'Cream Soda 500ml' },
        { product: 'Iwisa Pap 5kg' },
        { product: 'Top Class Soy Mince' },
        { product: 'Shampoo 1 litre' },
        { product: 'Soap Bar' },
        { product: 'Bananas - loose' },
        { product: 'Apples - loose' },
        { product: 'Mixed Sweets 5s' } ]};

test('getFreq.getFrequency()', function() {
    deepEqual(gtFreq.getFrequency(arr), list);
    
})

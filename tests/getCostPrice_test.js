//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date: 	        11/03/2015
//File:		        getSalePrice_test.js

var gtCostPrice = require('../getCostPrice.js');

var list = {
    'Chakalaka Can': 'R7.00',
    'Coke 500ml': 'R3.50'
}

var arr = [ { shop: 'Makro',
    date: '23-Jan',
    itemName: 'Chakalaka Can',
    qty: '3',
    cost: 'R7.00',
    totCost: 'R21.00' },
    { shop: 'Makro',
        date: '23-Jan',
        itemName: 'Coke 500ml',
        qty: '3',
        cost: 'R3.50',
        totCost: 'R10.50' }];

test('gtCostPrice.getSalePrice()', function() {
    deepEqual(gtCostPrice.getCostPrice(arr), list);
    
})

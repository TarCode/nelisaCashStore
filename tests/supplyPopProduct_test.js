//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date: 	       30/03/2015
//File:		       supplyPopProduct_test.js

var supplyPopProduct = require('../functions/supplyPopProduct.js');

var list = {
    'Supplier': 'Makro',
    'Product': 'Coke 500ml'
}

var popularProduct = {name:'Coke 500ml'}

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

test('supplyPopProduct.supplyPopProduct()', function() {
    deepEqual(supplyPopProduct.supplyPopProduct(arr,popularProduct), list);
    
})

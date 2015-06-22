//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date: 	        11/03/2015
//File:		        getSalePrice_test.js

var gtSalePrice = require('../functions/getSalePrice.js');

var list = {
    'Milk 1l': 'R10,00',
    Imasi: 'R25,00',
    Bread: 'R12,00'
}

var arr = [ { itemName: 'Milk 1l', qty: '3', salesPrice: 'R10,00' },
    { itemName: 'Imasi', qty: '1', salesPrice: 'R25,00' },
    { itemName: 'Bread', qty: '2', salesPrice: 'R12,00' }];

test('getSalePrice.getSalePrice()', function() {
    deepEqual(gtSalePrice.getSalePrice(arr), list);
    
})

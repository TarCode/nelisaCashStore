//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date: 	        11/03/2015
//File:		        getSalePrice_test.js

var gtDate = require('../getDate.js');

var list ={ '1-Feb':
    [ { product: 'Milk 1l' },
        { product: 'Imasi' },
        { product: 'Bread' }]};

var arr = [ { date: '1-Feb', itemName: 'Milk 1l', qty: '3', salesPrice: 'R10,00' },
    {date: '1-Feb', itemName: 'Imasi', qty: '1', salesPrice: 'R25,00' },
    {date: '1-Feb', itemName: 'Bread', qty: '2', salesPrice: 'R12,00' }];

test('gtDate.getDate()', function() {
    deepEqual(gtDate.getDate(arr), list);
    
})

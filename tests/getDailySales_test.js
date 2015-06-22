//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date: 	        19/03/2015
//File:		        getDailySales_test.js

var gtDailySale = require('../functions/getDailySales.js');

var list = { '1-Feb':
        [ { product: 'Milk 1l', sale: '3' },
            { product: 'Imasi', sale: '1' },
            { product: 'Bread', sale: '2' } ] }

    ;

var arr = [ { date: '1-Feb', itemName: 'Milk 1l', noSold: '3', salesPrice: 'R10,00' },
    {date: '1-Feb', itemName: 'Imasi', noSold: '1', salesPrice: 'R25,00' },
    {date: '1-Feb', itemName: 'Bread', noSold: '2', salesPrice: 'R12,00' }];

test('gtDailySale.getDailySales()', function() {
    deepEqual(gtDailySale.getDailySales(arr), list);
    
})

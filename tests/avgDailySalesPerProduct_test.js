//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date: 	        23/03/2015
//File:		        avgDailySalesPerProduct_test.js

var DailyProduct = require('../functions/avgDailySalesPerProduct');

var list ={ 'Milk 1l': '3.50', Imasi: '2.50', Bread: '3.50' };


var arr = { '1-Feb':
    [ { day: 'Sunday', product: 'Milk 1l', sale: '3' },
        { day: 'Sunday', product: 'Imasi', sale: '1' },
        { day: 'Sunday', product: 'Bread', sale: '2' },
    ],
    '2-Feb':
        [ { day: 'Monday', product: 'Milk 1l', sale: '4' },
            { day: 'Monday', product: 'Imasi', sale: '4' },
            { day: 'Monday', product: 'Bread', sale: '5' },
        ]
};

test('DailyProduct.avgDailySalesPerProduct()', function() {
    deepEqual(DailyProduct.avgDailySalesPerProduct(arr), list);
    
})

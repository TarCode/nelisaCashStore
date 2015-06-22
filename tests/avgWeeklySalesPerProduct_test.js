//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date: 	        23/03/2015
//File:		        avgDailySalesPerProduct_test.js

var weeklyProduct = require('../functions/avgWeeklySalesPerProduct');

var list ={ 'Milk 1l': '39.00', Imasi: '30.00', Bread: '45.00' };


var arr = { '1-Feb':
    [ { day: 'Sunday', product: 'Milk 1l', sale: '3' },
        { day: 'Sunday', product: 'Imasi', sale: '1' },
        { day: 'Sunday', product: 'Bread', sale: '2' },
    ],
    '2-Feb':
        [ { day: 'Monday', product: 'Milk 1l', sale: '4' },
            { day: 'Monday', product: 'Imasi', sale: '4' },
            { day: 'Monday', product: 'Bread', sale: '5' },
        ],
    '3-Feb':
        [ { day: 'Tuesday', product: 'Milk 1l', sale: '7' },
            { day: 'Tuesday', product: 'Imasi', sale: '4' },
            { day: 'Tuesday', product: 'Bread', sale: '7' }
        ],
    '4-Feb':
        [ { day: 'Wednesday', product: 'Milk 1l', sale: '5' },
            { day: 'Wednesday', product: 'Imasi', sale: '8' },
            { day: 'Wednesday', product: 'Bread', sale: '8' }
        ],
    '5-Feb':
        [ { day: 'Thursday', product: 'Milk 1l', sale: '10' },
            { day: 'Thursday', product: 'Imasi', sale: '3' },
            { day: 'Thursday', product: 'Bread', sale: '12' }
        ],
    '6-Feb':
        [ { day: 'Friday', product: 'Milk 1l', sale: '6' },
            { day: 'Friday', product: 'Imasi', sale: '4' },
            { day: 'Friday', product: 'Bread', sale: '7' }
        ],
    '7-Feb':
        [ { day: 'Saturday', product: 'Milk 1l', sale: '4' },
            { day: 'Saturday', product: 'Imasi', sale: '6' },
            { day: 'Saturday', product: 'Bread', sale: '4' }
        ]
};

test('weeklyProduct.avgWeeklySalesPerProduct()', function() {
    deepEqual(weeklyProduct.avgWeeklySalesPerProduct(arr), list);
    
})

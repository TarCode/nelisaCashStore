//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date: 	        20/03/2015
//File:		        DailySalesTotal_test.js

var DailyTot = require('../functions/DailySalesTotal');

var list ={ '23-Feb': 18};

var arr = {'23-Feb':[ { day: 'Monday', product: 'Milk 1l', sale: '8' },
    { day: 'Monday', product: 'Imasi', sale: '6' },
    { day: 'Monday', product: 'Bread', sale: '2' },
    { day: 'Monday', product: 'Chakalaka Can', sale: '2' }]};

test('DailyTot.DailySalesTotal()', function() {
    deepEqual(avgDailyTot.avgDailySalesTotal(arr), list);
    
})

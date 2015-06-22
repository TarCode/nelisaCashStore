//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date: 	        20/03/2015
//File:		        DailySalesTotal_test.js

var avgDailyTot = require('../functions/avgDailySalesTotal');

var avg =57.5;

var arr = { '1-Feb': 38,
            '2-Feb': 49,
            '3-Feb': 81,
            '4-Feb': 89,
            '5-Feb': 83,
            '6-Feb': 67,
            '7-Feb': 42,
            '8-Feb': 34,
            '9-Feb': 54,
            '10-Feb': 38};

test('avgDailyTot.avgDailySalesTotal()', function() {
    deepEqual(avgDailyTot.avgDailySalesTotal(arr), avg);
    
})

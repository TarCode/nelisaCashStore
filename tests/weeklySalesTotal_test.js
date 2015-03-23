//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date: 	        23/03/2015
//File:		        weeklySalesTotal_test.js

var weeklyTot = require('../functions/weeklySalesTotal');

var weeklyTotals ={ week1: 449, week2: 420 };

var arr = { '1-Feb': 38,
    '2-Feb': 49,
    '3-Feb': 81,
    '4-Feb': 89,
    '5-Feb': 83,
    '6-Feb': 67,
    '7-Feb': 42,
    '8-Feb': 34,
    '9-Feb': 54,
    '10-Feb': 38,
    '11-Feb': 47,
    '12-Feb': 43,
    '13-Feb': 104,
    '14-Feb': 100};

test('weeklyTot.weeklySalesTotal()', function() {
    deepEqual(weeklyTot.weeklySalesTotal(arr), weeklyTotals);
    
})

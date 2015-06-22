//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date: 	        23/03/2015
//File:		        avgWeeklySalesTotal_test.js

var avgWeeklyTot = require('../functions/avgWeeklySalesTotal');

var avgWeeklyTotals = 434.5;

var arr = { week1: 449, week2: 420 };

test('avPerCat.weeklySalesTotal()', function() {
    deepEqual(avgWeeklyTot.avgWeeklySalesTotal(arr), avgWeeklyTotals);
    
})

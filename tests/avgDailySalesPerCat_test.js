//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date: 	        23/03/2015
//File:		        avgDailySalesPerCat_test.js

var dailyCat = require('../functions/avgDailySalesPerCat');

var list = { shortLife: '39.70',
    cannedGoods: '18.00',
    cooldrinks: '32.80',
    longLife: '14.50',
    toiletries: '7.60',
    fruit: '22.80',
    sweets: '19.20',
    gifts: '2.80' };

var arr = { shortLife: 397,
    cannedGoods: 180,
    cooldrinks: 328,
    longLife: 145,
    toiletries: 76,
    fruit: 228,
    sweets: 192,
    gifts: 28 };

var arr2 = { '1-Feb': 38,
    '2-Feb': 49,
    '3-Feb': 81,
    '4-Feb': 89,
    '5-Feb': 83,
    '6-Feb': 67,
    '7-Feb': 42,
    '8-Feb': 34,
    '9-Feb': 54,
    '10-Feb': 38};


test('dailyCat.avgDailySalesPerCat()', function() {
    deepEqual(dailyCat.avgDailySalesPerCat(arr,arr2), list);
    
})

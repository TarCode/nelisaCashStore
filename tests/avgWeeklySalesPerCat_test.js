//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date: 	        23/03/2015
//File:		        avgWeeklySalesPerCat_test.js

var weeklyCat = require('../functions/avgWeeklySalesPerCat');

var list = { shortLife: 397,
    cannedGoods: 180,
    cooldrinks: 328,
    longLife: 145,
    toiletries: 76,
    fruit: 228,
    sweets: 192,
    gifts: 28 };

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
    '7-Feb': 42 };


test('weeklyCat.avgWeeklySalesPerCat()', function() {
    deepEqual(weeklyCat.avgWeeklySalesPerCat(arr,arr2), list);
    
})

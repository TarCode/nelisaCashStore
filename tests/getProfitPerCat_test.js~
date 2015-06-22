//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date: 	        18/03/2015
//File:		        getProfitPerCat_test.js

var totProfit = require('../getProfitPerCat');

var CatList = { shortLife:
    [ { product: 'Milk 1l', qty: 142 },
        { product: 'Imasi', qty: 125 },
        { product: 'Bread', qty: 130 } ]
}

var profitList = {
    'Milk 1l': 3.00,
    Imasi: 8.00,
    Bread: 3.00 };

var profit = { shortLife: '1816.00' }


test('totProfit.getProfitPerCat()', function() {
    deepEqual(totProfit.getProfitPerCat(CatList,profitList), profit);

})
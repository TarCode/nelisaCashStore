var totCat = require('../functions/catTotal');

var arr = { shortLife:
    [ { product: 'Milk 1l', qty: 142 },
        { product: 'Imasi', qty: 125 },
        { product: 'Bread', qty: 130 } ],
    cannedGoods:
        [ { product: 'Chakalaka Can', qty: 94 },
            { product: 'Gold Dish Vegetable Curry Can', qty: 86 } ],
    cooldrinks:
        [ { product: 'Fanta 500ml', qty: 94 },
            { product: 'Coke 500ml', qty: 159 },
            { product: 'Cream Soda 500ml', qty: 75 } ],
    longLife:
        [ { product: 'Iwisa Pap 5kg', qty: 47 },
            { product: 'Top Class Soy Mince', qty: 98 } ],
    toiletries:
        [ { product: 'Shampoo 1 litre', qty: 26 },
            { product: 'Soap Bar', qty: 50 } ],
    fruit:
        [ { product: 'Bananas - loose', qty: 114 },
            { product: 'Apples - loose', qty: 114 } ],
    sweets:
        [ { product: 'Mixed Sweets 5s', qty: 172 },
            { product: 'Heart Chocolates', qty: 20 } ],
    gifts:
        [ { product: 'Rose (plastic)', qty: 14 },
            { product: 'Valentine Cards', qty: 14 } ] }

var list ={ shortLife: 397,
    cannedGoods: 180,
    cooldrinks: 328,
    longLife: 145,
    toiletries: 76,
    fruit: 228,
    sweets: 192,
    gifts: 28 };

test('makeCat.makeCat()', function() {
    deepEqual(totCat.catTotal(arr), list);
    
})

var convertCash = require('../functions/convertCashString');

var list = { 'Milk 1l': 10.00,
    Imasi: 25.00,
    Bread: 12.55 };

var arr =  { 'Milk 1l': 'R10,00',
    Imasi: 'R25,00',
    Bread: 'R12,55' };

test('convertCash.convertCashString()', function() {
    deepEqual(convertCash.convertCashString(arr), list);
    
})

var fil = require('../filter.js');

var list = {
    'Milk': 3,
    'Imasi': 1,
    'Bread': 2
}

var arr = [ { itemName: 'Milk', qty: 3 },
    { itemName: 'Imasi', qty: 1 },
    { itemName: 'Bread', qty: 2 },];

test('filter.sortData()', function() {
    deepEqual(fil.sortData(arr), list);
    
})

var gtCostPrice = require('../functions/getCostPrice.js');

var list = {
    'Chakalaka Can': 'R7.00',
    'Coke 500ml': 'R3.50'
}

var arr = [ { shop: 'Makro',
    date: '23-Jan',
    itemName: 'Chakalaka Can',
    qty: '3',
    cost: 'R7.00',
    totCost: 'R21.00' },
    { shop: 'Makro',
        date: '23-Jan',
        itemName: 'Coke 500ml',
        qty: '3',
        cost: 'R3.50',
        totCost: 'R10.50' }];

test('gtCostPrice.getSalePrice()', function() {
    deepEqual(gtCostPrice.getCostPrice(arr), list);
    
})

var gtDate = require('../functions/getDate.js');

var list ={ '1-Feb':
    [ { product: 'Milk 1l' },
        { product: 'Imasi' },
        { product: 'Bread' }]};

var arr = [ { date: '1-Feb', itemName: 'Milk 1l', qty: '3', salesPrice: 'R10,00' },
    {date: '1-Feb', itemName: 'Imasi', qty: '1', salesPrice: 'R25,00' },
    {date: '1-Feb', itemName: 'Bread', qty: '2', salesPrice: 'R12,00' }];

test('gtDate.getDate()', function() {
    deepEqual(gtDate.getDate(arr), list);
    
})

var gtFreq = require('../functions/getFrequency');

var list ={ Imasi: 2,
    Bread: 2,
    'Chakalaka Can': 2,
    'Gold Dish Vegetable Curry Can': 2,
    'Fanta 500ml': 2,
    'Coke 500ml': 2,
    'Cream Soda 500ml': 2,
    'Iwisa Pap 5kg': 2,
    'Top Class Soy Mince': 2,
    'Shampoo 1 litre': 2,
    'Soap Bar': 2,
    'Bananas - loose': 2,
    'Apples - loose': 2,
    'Mixed Sweets 5s': 2 };


var arr = {'17-Feb':
        [ { product: 'Milk 1l' },
            { product: 'Imasi' },
            { product: 'Bread' },
            { product: 'Chakalaka Can' },
            { product: 'Gold Dish Vegetable Curry Can' },
            { product: 'Fanta 500ml' },
            { product: 'Coke 500ml' },
            { product: 'Cream Soda 500ml' },
            { product: 'Iwisa Pap 5kg' },
            { product: 'Top Class Soy Mince' },
            { product: 'Shampoo 1 litre' },
            { product: 'Soap Bar' },
            { product: 'Bananas - loose' },
            { product: 'Apples - loose' },
            { product: 'Mixed Sweets 5s' } ],
    '18-Feb':
        [ { product: 'Milk 1l' },
        { product: 'Imasi' },
        { product: 'Bread' },
        { product: 'Chakalaka Can' },
        { product: 'Gold Dish Vegetable Curry Can' },
        { product: 'Fanta 500ml' },
        { product: 'Coke 500ml' },
        { product: 'Cream Soda 500ml' },
        { product: 'Iwisa Pap 5kg' },
        { product: 'Top Class Soy Mince' },
        { product: 'Shampoo 1 litre' },
        { product: 'Soap Bar' },
        { product: 'Bananas - loose' },
        { product: 'Apples - loose' },
        { product: 'Mixed Sweets 5s' } ]};

test('getFreq.getFrequency()', function() {
    deepEqual(gtFreq.getFrequency(arr), list);
    
})

var totProfit = require('../functions/getProfitPerCat');

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

var gtProf = require('../functions/getProfit');

var list ={ 'Milk 1l': '3.00',
    Imasi: '8.00',
    Bread: '3.00' };


var arrCost = { Imasi: 'R17.00',
            Bread: 'R9.00',
            'Milk 1l': 'R7.00'};

var arrSales =  {   Imasi: 'R25.00',
                    Bread: 'R12.00',
                    'Milk 1l': 'R10.00'};

test('gtProf.getProfit()', function() {
    deepEqual(gtProf.getProfit(arrSales, arrCost), list);

    
})

var saleList = require('../functions/getSaleList.js');

var list = {
    'Milk': 3,
    'Imasi': 1,
    'Bread': 2
}

var arr = [ { itemName: 'Milk', noSold: 3 },
    { itemName: 'Imasi', noSold: 1 },
    { itemName: 'Bread', noSold: 2 },];

test('getSaleList.getSaleList()', function() {
    deepEqual(saleList.getSaleList(arr), list);
    
})

var gtSalePrice = require('../functions/getSalePrice.js');

var list = {
    'Milk 1l': 'R10,00',
    Imasi: 'R25,00',
    Bread: 'R12,00'
}

var arr = [ { itemName: 'Milk 1l', qty: '3', salesPrice: 'R10,00' },
    { itemName: 'Imasi', qty: '1', salesPrice: 'R25,00' },
    { itemName: 'Bread', qty: '2', salesPrice: 'R12,00' }];

test('getSalePrice.getSalePrice()', function() {
    deepEqual(gtSalePrice.getSalePrice(arr), list);
    
})

var stockList = require('../functions/getStockList.js');

var list = {
    'Milk': 3,
    'Imasi': 1,
    'Bread': 2
}

var arr = [ { itemName: 'Milk', qty: 3 },
    { itemName: 'Imasi', qty: 1 },
    { itemName: 'Bread', qty: 2 },];

test('getStockList.getStockList()', function() {
    deepEqual(stockList.getStockList(arr), list);
    
})

var lSold = require('../functions/leastSold.js');

var list = {
    'Rose (plastic)': 14,
    'Bread': 50,
    'Milk': 20
}

var least = {
    name: 'Rose (plastic)',
    amt: 14
}

test('leastSold()', function() {
    deepEqual(lSold.leastSold(list), least);
    
})

var mkCat = require('../functions/makeCat');

var list = { shortLife:
    [ { product: 'Milk 1l', qty: 142 },
        { product: 'Imasi', qty: 125 },
        { product: 'Bread', qty: 130 } ],
    cannedGoods:
        [ { product: 'Chakalaka Can', qty: 94 },
            { product: 'Gold Dish Vegetable Curry Can', qty: 86 } ],
    cooldrinks:
        [ { product: 'Fanta 500ml', qty: 94 },
            { product: 'Coke 500ml', qty: 159 },
            { product: 'Cream Soda 500ml', qty: 75 } ],
    longLife:
        [ { product: 'Iwisa Pap 5kg', qty: 47 },
            { product: 'Top Class Soy Mince', qty: 98 } ],
    toiletries:
        [ { product: 'Shampoo 1 litre', qty: 26 },
            { product: 'Soap Bar', qty: 50 } ],
    fruit:
        [ { product: 'Bananas - loose', qty: 114 },
            { product: 'Apples - loose', qty: 114 } ],
    sweets:
        [ { product: 'Mixed Sweets 5s', qty: 172 },
            { product: 'Heart Chocolates', qty: 20 } ],
    gifts:
        [ { product: 'Rose (plastic)', qty: 14 },
            { product: 'Valentine Cards', qty: 14 } ] }

var arr ={ stockItem: 'NoSold',
    'Milk 1l': 142,
    Imasi: 125,
    Bread: 130,
    'Chakalaka Can': 94,
    'Gold Dish Vegetable Curry Can': 86,
    'Fanta 500ml': 94,
    'Coke 500ml': 159,
    'Cream Soda 500ml': 75,
    'Iwisa Pap 5kg': 47,
    'Top Class Soy Mince': 98,
    'Shampoo 1 litre': 26,
    'Soap Bar': 50,
    'Bananas - loose': 114,
    'Apples - loose': 114,
    'Mixed Sweets 5s': 172,
    'Heart Chocolates': 20,
    'Rose (plastic)': 14,
    'Valentine Cards': 14 };

test('makeCat.makeCat()', function() {
    deepEqual(mkCat.makeCat(arr), list);
    
})

var mSold = require('../functions/mostSold.js');

var list = {
    'Rose (plastic)': 14,
    'Bread': 50,
    'Milk': 20
}

var most = { name: 'Bread', amt: 50 }

test('mostSold()', function() {
    deepEqual(mSold.mostSold(list), most);
    
})

var stockRem = require('../functions/stockRemaining');

var stockList = {
    'Milk 1l': 142,
    'Imasi': 125,
    'Bread': 130
}

var saleList = {  'Milk 1l': 10,
    Imasi: 25,
    Bread: 12 };

var stockLeft = { 'Milk 1l': '92.96%', Imasi: '80.00%', Bread: '90.77%' };

test('stockRem.stockRemaining()', function() {
    deepEqual(stockRem.stockRemaining(stockList,saleList), stockLeft);

})

var totEarn = require('../functions/totalEarningsPerCat');

var CatList = { shortLife: 
   			        [ { product: 'Milk 1l', qty: 142 },
     			      { product: 'Imasi', qty: 125 },
     			      { product: 'Bread', qty: 130 } ]
}

var salePriceList = {
    'Milk 1l': 1420.00,
    Imasi: 3125.00,
    Bread: 1560.00 };

var sPriceTot = { shortLife: '6105.00' }


test('totEarn.totalEarningsPerCat()', function() {
    deepEqual(totEarn.totalEarningsPerCat(CatList,salePriceList), sPriceTot);

})

var totEarn = require('../functions/totalEarningsPerProduct');

var quantityList = {
    'Milk 1l': 142,
    'Imasi': 125,
    'Bread': 130
}

var salePriceList = {  'Milk 1l': 10,
    Imasi: 25,
    Bread: 12 };

var sPriceTot = {'Milk 1l': 1420, Imasi: 3125, Bread: 1560};

test('totEarn.totalEarningsPerProduct()', function() {
    deepEqual(totEarn.totalEarningsPerProduct(quantityList,salePriceList), sPriceTot);

})

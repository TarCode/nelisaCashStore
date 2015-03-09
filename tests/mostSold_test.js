var mSold = require('../mostSold.js');

var list = {
    'Rose (plastic)': 14,
    'Bread': 50,
    'Milk': 20
}

var most = {
    stockItem: 'Bread',
    noSold: 50
}

test('mostSold()', function() {
    deepEqual(mSold.mostSold(list), most);
    
})

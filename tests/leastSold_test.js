var lSold = require('../leastSold.js');

var list = {
    'Rose (plastic)': 14,
    'Bread': 50,
    'Milk': 20
}

var least = {
    stockItem: 'Rose (plastic)',
    noSold: 14
}

test('leastSold()', function() {
    deepEqual(lSold.leastSold(list), least);
    
})

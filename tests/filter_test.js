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

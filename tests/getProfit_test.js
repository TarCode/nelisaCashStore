//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date: 	        17/03/2015
//File:		        getProfit_test.js

var gtProf = require('../getProfit');

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

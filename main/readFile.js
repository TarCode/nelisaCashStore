//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date:		        5/03/2015
//File:		        readFile.js
//Description:	    Main file- Reads in CSV file and outputs the product names and amount sold as well as most and least sold products.
var avgWeeklyTot = require('../functions/avgWeeklySalesTotal');
var weeklyTot = require('../functions/weeklySalesTotal');
var avgDailyTot = require('../functions/avgDailySalesTotal');
var DailyTot = require('../functions/DailySalesTotal');
var dailySales = require('../functions/getDailySales');
var stockRem = require('../functions/stockRemaining');
var getSaleList = require('../functions/getSaleList');
var getStockList = require('../functions/getStockList');
var getProfitPerCat = require('../functions/getProfitPerCat');
var getProf = require('../functions/getProfit');
var getFreq = require('../functions/getFrequency');
var gtDate = require('../functions/getDate');
var totEarnCat = require('../functions/totalEarningsPerCat');
var totEarn = require('../functions/totalEarningsPerProduct');
var convertCash = require('../functions/convertCashString');
var salePriceList = require('../functions/getSalePrice');
var costPriceList = require('../functions/getCostPrice');
var catTotal = require('../functions/catTotal');
var mCat = require('../functions/makeCat');
var mSold = require('../functions/mostSold');
var lSold = require('../functions/leastSold');
var filter = require('../functions/filter');
var rdCSV = require('../functions/readCSV');
var fileName = "salesHistory.csv";
var fileName2 = "NelisaPurchases.csv";

var itemArr = rdCSV.readCSV(fileName);
var stockArr = rdCSV.readCSV(fileName2);

    //console.log(stockArr);
    console.log(itemArr);

    var itemMap = filter.sortData(itemArr);

    //console.log("\nPRODUCTS AND QUANTITY SOLD:")
    //console.log(itemMap);

    var most = mSold.mostSold(itemMap);
    console.log("\nMOST SOLD PRODUCT: ");
    console.log(most);


    var least = lSold.leastSold(itemMap);
    console.log("\nLEAST SOLD PRODUCT: ");
    console.log(least);

    var cat = mCat.makeCat(itemMap);


    console.log("\nCATEGORIES: ");
    console.log(cat);


    var totalPerCat = catTotal.catTotal(cat);
   // console.log("\nTOTAL QUANTITY SOLD PER CATEGORY: ")
   // console.log(totalPerCat);

    var mostPopularCat = mSold.mostSold(totalPerCat);

    console.log("\nMOST POPULAR CATEGORY: ")
    console.log(mostPopularCat);

    var leastPopularCat = lSold.leastSold(totalPerCat);

    console.log("\nLEAST POPULAR CATEGORY: ")
    console.log(leastPopularCat);

    var salePriceArr = salePriceList.getSalePrice(itemArr);

    //console.log("\nPRODUCT SELLING PRICE: ");
    //console.log(salePriceArr);

    var convertedCash = convertCash.convertCashString(salePriceArr);

    console.log("\nTOTAL EARNINGS PER PRODUCT: ");
    var totEarnings = totEarn.totalEarningsPerProduct(itemMap, convertedCash);
    console.log(totEarnings);

    var totCatCash = totEarnCat.totalEarningsPerCat(cat, totEarnings);
    console.log("\nTOTAL EARNINGS PER CATEGORY: ");
    console.log(totCatCash);


    var mostEarningCat = mSold.mostSold(totCatCash);

    console.log("\nHIGHEST EARNING CATEGORY: ")
    console.log(mostEarningCat);

    var leastEarningCat = lSold.leastSold(totCatCash);

    console.log("\nLOWEST EARNING CATEGORY: ")
    console.log(leastEarningCat);

    var dateArr = gtDate.getDate(itemArr);

    //console.log("\nPRODUCT DATES: ");
    //console.log(dateArr);

    var frequency = getFreq.getFrequency(dateArr);

    console.log("\nMOST REGULAR SALES: ");
    console.log(frequency);

    var costPriceArr = costPriceList.getCostPrice(stockArr);

    //console.log("\nPRODUCT COST PRICE: ");
    //console.log(costPriceArr);


    var profit = getProf.getProfit(salePriceArr, costPriceArr);
    //console.log("\nPROFIT: ");
    //console.log(profit);

    var mostProfitIem = mSold.mostSold(profit);
    console.log('\nMOST PROFITABLE ITEM: ');
    console.log(mostProfitIem);

    var leastProfitItem = lSold.leastSold(profit);
    console.log('\nLEAST PROFITABLE ITEM: ');
    console.log(leastProfitItem);

    var totProfPerCat = getProfitPerCat.getProfitPerCat(cat,profit);
    //console.log("\nTOTAL PROFIT PER CATEGORY: ");
    //console.log(totProfPerCat);

    var mostProfCat = mSold.mostSold(totProfPerCat);
    console.log("\nMOST PROFITABLE CATEGORY: ");
    console.log(mostProfCat);

    var leastProfCat = lSold.leastSold(totProfPerCat);
    console.log("\nLEAST PROFITABLE CATEGORY: ");
    console.log(leastProfCat);

    var stockList = getStockList.getStockList(stockArr);
    console.log("\nSTOCK LIST: ");
    console.log(stockList);

    var saleList = getSaleList.getSaleList(itemArr);
    console.log("\nSALE LIST: ");
    console.log(saleList);

    var stockLeft = stockRem.stockRemaining(stockList,saleList);
    console.log("\nSTOCK REMAINING: ");
    console.log(stockLeft);

    var sales = dailySales.getDailySales(itemArr);
    console.log("\nDAILY SALES: ");
    console.log(sales);

    var DayTot = DailyTot.DailySalesTotal(sales);
    console.log('\nTOTAL SALES PER DAY: ');
    console.log(DayTot);

    var avgDayTot = avgDailyTot.avgDailySalesTotal(DayTot);
    console.log('AVERAGE TOTAL SALES PER DAY: ');
    console.log(avgDayTot.toFixed(2));

    var weekTot = weeklyTot.weeklySalesTotal(DayTot);
    console.log('TOTAL SALES PER WEEK: ');
    console.log(weekTot);

    var avgWeekTot = avgWeeklyTot.avgWeeklySalesTotal(weekTot);
    console.log('AVERAGE TOTAL SALES PER WEEK: ');
    console.log(avgWeekTot);
//Author:	        Taariq Isaacs/Pholisa Fatyela
//Date:		        5/03/2015 - 24/03/15
//File:		        readFile.js
//Description:	    Main file- Reads in CSV file and outputs the product names and amount sold as well as most and least sold products.
var supplyPopProduct = require('../functions/supplyPopProduct');
var refactor = require('../functions/refactorOutput');
var write = require('../functions/writeFile');
var avPerCatWeek =require('../functions/avgWeeklySalesPerCat');
var avPerCat = require('../functions/avgDailySalesPerCat');
var aWeekSaleProd = require('../functions/avgWeeklySalesPerProduct');
var dSales = require('../functions/avgDailySalesPerProduct');
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

    console.log(stockArr);
    //console.log(itemArr);

    var itemMap = filter.sortData(itemArr);
    //console.log("\nPRODUCTS AND QUANTITY SOLD:")
    //console.log(itemMap);


    var most = mSold.mostSold(itemMap);
    console.log("\nMOST SOLD PRODUCT: ");
    console.log(most);
    var writ = write.writeToFile(most,"../data/most.json");


    var least = lSold.leastSold(itemMap);
    console.log("\nLEAST SOLD PRODUCT: ");
    console.log(least);
    var writ = write.writeToFile(least,"../data/least.json");

    var cat = mCat.makeCat(itemMap);
    //console.log("\nCATEGORIES: ");
    //console.log(cat);



    var totalPerCat = catTotal.catTotal(cat);
    var refTotalPerCat = refactor.refactorOutput(totalPerCat);
    console.log("\nTOTAL QUANTITY SOLD PER CATEGORY: ")
    console.log(refTotalPerCat);
    var writ = write.writeToFile(refTotalPerCat,"../data/totPerCat.json");

    var mostPopularCat = mSold.mostSold(totalPerCat);
    console.log("\nMOST POPULAR CATEGORY: ")
    console.log(mostPopularCat);
    var writ= write.writeToFile(mostPopularCat,"../data/mostPopCat.json");

    var leastPopularCat = lSold.leastSold(totalPerCat);
    console.log("\nLEAST POPULAR CATEGORY: ")
    console.log(leastPopularCat);
    var writ = write.writeToFile(leastPopularCat,"../data/leastPopCat.json");

    var salePriceArr = salePriceList.getSalePrice(itemArr);
    //console.log("\nPRODUCT SELLING PRICE: ");
    //console.log(salePriceArr);

    var convertedCash = convertCash.convertCashString(salePriceArr);
    var totEarnings = totEarn.totalEarningsPerProduct(itemMap, convertedCash);
    var refTotEarnings = refactor.refactorOutput(totEarnings);
    console.log("\nTOTAL EARNINGS PER PRODUCT: ");
    console.log(refTotEarnings);
    //var writ = write.writeToFile(refTotEarnings,"../data/totEarningsPerProd.json");

    var totCatCash = totEarnCat.totalEarningsPerCat(cat, totEarnings);
    var refTotCatCash = refactor.refactorOutput(totCatCash);
    console.log("\nTOTAL EARNINGS PER CATEGORY: ");
    console.log(refTotCatCash);
    var writ = write.writeToFile(refTotCatCash,"../data/totEarningsPerCat.json");


    var mostEarningCat = mSold.mostSold(totCatCash);
    console.log("\nHIGHEST EARNING CATEGORY: ")
    console.log(mostEarningCat);
    var writ = write.writeToFile(mostEarningCat,"../data/mostEarningCat.json");

    var leastEarningCat = lSold.leastSold(totCatCash);
    console.log("\nLOWEST EARNING CATEGORY: ")
    console.log(leastEarningCat);
    var writ = write.writeToFile(leastEarningCat,"../data/leastEarningCat.json");

    var dateArr = gtDate.getDate(itemArr);
    //console.log("\nPRODUCT DATES: ");
    //console.log(dateArr);

    var frequency = getFreq.getFrequency(dateArr);
    var refFrequency = refactor.refactorOutput(frequency);
    console.log("\nMOST REGULAR SALES: ");
    console.log(refFrequency);
    var writ = write.writeToFile(refFrequency,"../data/mostRegSales.json");

    var costPriceArr = costPriceList.getCostPrice(stockArr);
    //console.log("\nPRODUCT COST PRICE: ");
    //console.log(costPriceArr);


    var profit = getProf.getProfit(salePriceArr, costPriceArr);
    //console.log("\nPROFIT: ");
    //console.log(profit);

    var mostProfitIem = mSold.mostSold(profit);
    console.log('\nMOST PROFITABLE ITEM: ');
    console.log(mostProfitIem);
    var writ = write.writeToFile(mostProfitIem,"../data/mostEarningProd.json");

    var leastProfitItem = lSold.leastSold(profit);
    console.log('\nLEAST PROFITABLE ITEM: ');
    console.log(leastProfitItem);
    var writ = write.writeToFile(leastProfitItem,"../data/leastEarningProd.json");

    var totProfPerCat = getProfitPerCat.getProfitPerCat(cat,profit);
    //console.log("\nTOTAL PROFIT PER CATEGORY: ");
    //console.log(totProfPerCat);

    var mostProfCat = mSold.mostSold(totProfPerCat);
    console.log("\nMOST PROFITABLE CATEGORY: ");
    console.log(mostProfCat);
    var writ = write.writeToFile(mostProfCat,"../data/mostProfitCat.json");

    var leastProfCat = lSold.leastSold(totProfPerCat);
    console.log("\nLEAST PROFITABLE CATEGORY: ");
    console.log(leastProfCat);
    var writ = write.writeToFile(leastProfCat,"../data/leastProfitCat.json");

    var stockList = getStockList.getStockList(stockArr);
    //console.log("\nSTOCK LIST: ");
    //console.log(stockList);


    var saleList = getSaleList.getSaleList(itemArr);
    //console.log("\nSALE LIST: ");
    //console.log(saleList);

    var stockLeft = stockRem.stockRemaining(stockList,saleList);
    var refStockLeft = refactor.refactorOutput(stockLeft);
    console.log("\nSTOCK REMAINING: ");
    console.log(refStockLeft);
    var writ = write.writeToFile(refStockLeft,"../data/stockRemaining.json");

    var sales = dailySales.getDailySales(itemArr);
    //console.log("\nDAILY SALES: ");
    //console.log(sales);

    var DayTot = DailyTot.DailySalesPerProduct(sales);
    var refDayTot = refactor.refactorOutput(DayTot);
    console.log('\nTOTAL SALES PER DAY: ');
    console.log(refDayTot);
    var writ = write.writeToFile(refDayTot,"../data/totalDailySales.json");


    var avgDayTot = avgDailyTot.avgDailySalesTotal(DayTot);
    console.log('\nAVERAGE TOTAL SALES PER DAY: ');
    console.log(avgDayTot.toFixed(2));
    //var writ = write.writeToFile(avgDayTot,"../data/avgTotDailySales.json");


var weekTot = weeklyTot.weeklySalesTotal(DayTot);
    console.log('\nTOTAL SALES PER WEEK: ');
    var refWeeklySaleTot = refactor.refactorOutput(weekTot);
    console.log(refWeeklySaleTot);
    var writ = write.writeToFile(refWeeklySaleTot,"../data/totalWeeklySales.json");


    var avgWeekTot = avgWeeklyTot.avgWeeklySalesTotal(weekTot);
    console.log('\nAVERAGE TOTAL SALES PER WEEK: ');
    console.log(avgWeekTot);
    //var writ = write.writeToFile(avgWeekTot,"../data/avgTotWeeklySales.json");


    var dailySalesPerProd = dSales.avgDailySalesPerProduct(sales);
    console.log('\nAVERAGE TOTAL DAILY SALES PER PRODUCT: ');
    //console.log(dailySalesPerProd);
    var refDailySalesPerProd = refactor.refactorOutput(dailySalesPerProd);
    console.log(refDailySalesPerProd);
    var writ = write.writeToFile(refDailySalesPerProd,"../data/avgTotDailySalesPerProd.json");

    var weeklySalesPerProd = aWeekSaleProd.avgWeeklySalesPerProduct(sales);
    var refWeeklySalesPerProd = refactor.refactorOutput(weeklySalesPerProd);
    console.log('\nAVERAGE TOTAL WEEKLY SALES PER PRODUCT: ');
    console.log(refWeeklySalesPerProd);
    var writ = write.writeToFile(refWeeklySalesPerProd,"../data/avgTotWeeklySalesPerProd.json");


    var avDayCat = avPerCat.avgDailySalesPerCat(totalPerCat,DayTot);
    var refAvDayCat = refactor.refactorOutput(avDayCat);
    console.log('\nAVERAGE TOTAL DAILY SALES PER CATEGORY: ');
    console.log(refAvDayCat);
    var writ = write.writeToFile(refAvDayCat,"../data/avgTotDailySalesPerCat.json");


    var avWeekCat = avPerCatWeek.avgWeeklySalesPerCat(totalPerCat,DayTot);
    var refAvWeekCat = refactor.refactorOutput(avWeekCat);
    console.log('\nAVERAGE TOTAL WEEKLY SALES PER CATEGORY: ');
    console.log(refAvWeekCat);
    var writ = write.writeToFile(refAvWeekCat,"../data/avgTotWeeklySalesPerCat.json");


    var supplyPopProd = supplyPopProduct.supplyPopProduct(stockArr, most);
    console.log("\nSUPPLIER SUPPLYING THE MOST POPULAR PRODUCT: ");
    console.log(supplyPopProd);
    //var writ = write.writeToFile(supplyPopProd,"../data/supplyPopProduct.json");

    var supplyProfProd = supplyPopProduct.supplyPopProduct(stockArr, mostProfitIem);
    console.log("\nSUPPLIER SUPPLYING THE MOST PROFITABLE PRODUCT: ");
    console.log(supplyProfProd);
    //var writ = write.writeToFile(supplyProfProd,"../data/supplyProfProduct.json");
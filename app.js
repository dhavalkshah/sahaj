const config = require('./config.json');
const val = require('./val');
const dbHandler = require('./dbHandler');
const tranHandler = require('./tran');
var moment = require('moment');

var dbConn = {};

var appCtx = {
    config: config,
    dbConn: dbConn
}

/**
 * Records when the card was tapped in and on which type of zone station
 * @param {String} cardId - Unique card identifier for the traveller
 * @param {String} inDateTime - Date & time when the card was tapped on IN terminal, in YYYY-MM-DD hh:mm:ss format
 * @param {String} fromStationType - a valid zone - list available in config.json
 * @returns {String} - 0000 -> Success; <xxxx> -> err code
 */
function tapIn(cardId, inDateTime, fromStationType) {
    try {
        //console.log('Card tapped in:', cardId, inDateTime, fromStationType);
        let msgCtx = {}
        let valStatus = val.valInMsg(appCtx, msgCtx, cardId, inDateTime, fromStationType);
        if (!valStatus.status) {
            console.log('Failed to validate the tapIn message', valStatus.errCode);
            return valStatus.errCode;
        }
        dbHandler.recordTapIn(appCtx, msgCtx);
        //console.log(JSON.stringify(appCtx.dbConn));
        return "0000";
    }
    catch (e) {
        console.log('Unhandled exception ', e);
        return "9999";
    }
}

/**
 * Records when the card was tapped on out terminal and calculates the fare for the transaction based on travelled zone, time of travel, daily and weekly capping
 * @param {String} cardId - Unique card identifier for the traveller
 * @param {String} outDateTime - Date & time when the card was tapped on out terminal, in YYYY-MM-DD hh:mm:ss format
 * @param {String} toStationType - a valid zone - list available in config.json
 * @returns {Object} - 0000 -> Success; <xxxx> -> err code
 */
function tapOut(cardId, outDateTime, toStationType) {
    try {
        //console.log('Card tapped out:', cardId, outDateTime, toStationType);
        let msgCtx = {};
        let valStatus = val.valOutMsg(appCtx, msgCtx, cardId, outDateTime, toStationType);
        if (!valStatus.status) {
            console.log('Failed to validate the tapOut message', valStatus.errCode);
            return valStatus.errCode;
        }
        tranHandler.calcFareForTran(appCtx, msgCtx);
        //console.log('Tap out Msg Ctx is', JSON.stringify(msgCtx));
        dbHandler.recordTapOut(appCtx, msgCtx);
        dbHandler.updateActualFareToAgg(appCtx, msgCtx);
        return "0000";
    }
    catch (e) {
        console.log('Unhandled exception ', e);
        return "9999";
    }
}

function calcTotalCost(cardId, fromDateStr, toDateStr){
    let totCost = 0;
    let frmDate = (fromDateStr)?moment(fromDateStr, 'YYYY-MM-DD'): moment('1900-01-01','YYYY-MM-DD');
    let toDate = (toDateStr)?moment(toDateStr, 'YYYY-MM-DD'):moment('9999-12-31','YYYY-MM-DD');
    appCtx.dbConn.tran.forEach(element => {
        if(element.inDateTime.dt.isSameOrAfter(frmDate, 'day') && element.inDateTime.dt.isSameOrBefore(toDate, 'day')){
            totCost = totCost + element.actualFare;
        }
    });
    console.log('Total Cost is: ', totCost);
}

module.exports = {
    tapIn: tapIn,
    tapOut: tapOut,
    calcTotalCost: calcTotalCost
}
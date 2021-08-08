const app = require('./app');
const dbHandler = require('./dbHandler');

/**
 * Returns true if either the start or end time falls in peak hour for the given date
 * @param {*} appCtx 
 * @param {*} msgCtx 
 * @returns 
 */
function isTravelDuringPeak(appCtx, msgCtx){
    for (let index = 0; index < appCtx.config.peak[msgCtx.inDateTime.day].length; index++) {
        const element = appCtx.config.peak[msgCtx.inDateTime.day][index];   
        if ( ((element.start <= msgCtx.inDateTime.time) && 
            (msgCtx.inDateTime.time <= element.end)) || 
            ((element.start <= msgCtx.outDateTime.time) && 
            (msgCtx.outDateTime.time <= element.end)) ){
                return true;
            }
    }
    return false;
}

/**
 * Calculate the fare as if there were no capping
 * @param {*} appCtx 
 * @param {*} msgCtx 
 * @returns 
 */
function calcIntendedFare(appCtx, msgCtx){
    if(msgCtx.isPeak){
        return appCtx.config.fare[msgCtx.fromZone][msgCtx.toZone]['peak'];
    }
    else{
        return appCtx.config.fare[msgCtx.fromZone][msgCtx.toZone]['offpeak'];
    }
}

/**
 * Calculate/update daily cap for the given card
 * @param {*} appCtx 
 * @param {*} msgCtx 
 */
function calcDailyCap(appCtx, msgCtx){
    let dailyRec = dbHandler.getCardsDateRecord(appCtx, msgCtx.cardId, msgCtx.inDateTime.dtStr);
    if(dailyRec.maxCapAllowed < appCtx.config.fare[msgCtx.fromZone][msgCtx.toZone].dailyCap){
        dailyRec.maxCapAllowed = appCtx.config.fare[msgCtx.fromZone][msgCtx.toZone].dailyCap;
    }
}

/**
 * Calculate/update weekly cap for the given card
 * @param {*} appCtx 
 * @param {*} msgCtx 
 */
function calcWeeklyCap(appCtx, msgCtx){
    let weeklyRec = dbHandler.getCardsWeeksRecord(appCtx, msgCtx.cardId, msgCtx.inDateTime.week);
    if(weeklyRec.maxCapAllowed < appCtx.config.fare[msgCtx.fromZone][msgCtx.toZone].weeklyCap){
        weeklyRec.maxCapAllowed = appCtx.config.fare[msgCtx.fromZone][msgCtx.toZone].weeklyCap;
    }
}

/**
 * Apply weekly logic to see if the weekly cap has been reached
 * @param {*} appCtx 
 * @param {*} msgCtx 
 * @param {*} intendedFare 
 * @returns 
 */
function calcFareBasedonWeekly(appCtx, msgCtx, intendedFare){
    let weeklyRec = dbHandler.getCardsWeeksRecord(appCtx, msgCtx.cardId, msgCtx.inDateTime.week);
    if((weeklyRec.totActualFare + intendedFare) > weeklyRec.maxCapAllowed){
        return weeklyRec.maxCapAllowed - weeklyRec.totActualFare;
    }
    return intendedFare;
}

/**
 * Apply daily logic to see if the daily cap has been reached
 * @param {*} appCtx 
 * @param {*} msgCtx 
 * @param {*} intendedFare 
 * @returns 
 */
function calcFareBasedonDaily(appCtx, msgCtx, intendedFare){
    let dailyRec = dbHandler.getCardsDateRecord(appCtx, msgCtx.cardId, msgCtx.inDateTime.dtStr);
    if( (dailyRec.totActualFare + intendedFare) > dailyRec.maxCapAllowed){
        return dailyRec.maxCapAllowed - dailyRec.totActualFare;
    }
    return intendedFare;
}

/**
 * Calculate the fare for the transaction
 * @param {*} appCtx 
 * @param {*} msgCtx 
 */
function calcFareForTran(appCtx, msgCtx){
    msgCtx.isPeak = isTravelDuringPeak(appCtx, msgCtx);
    msgCtx.intendedFare = calcIntendedFare(appCtx, msgCtx);
    calcWeeklyCap(appCtx, msgCtx);
    calcDailyCap(appCtx, msgCtx);
    let weeklyIntendedFare = calcFareBasedonWeekly(appCtx, msgCtx, msgCtx.intendedFare);
    msgCtx.actualFare = calcFareBasedonDaily(appCtx, msgCtx, weeklyIntendedFare);
}



module.exports = {
    calcFareForTran : calcFareForTran
}
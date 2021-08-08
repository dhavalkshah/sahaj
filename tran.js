const app = require('./app');
const dbHandler = require('./dbHandler');

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

function calcIntendedFare(appCtx, msgCtx){
    if(msgCtx.isPeak){
        return appCtx.config.fare[msgCtx.fromZone][msgCtx.toZone]['peak'];
    }
    else{
        return appCtx.config.fare[msgCtx.fromZone][msgCtx.toZone]['offpeak'];
    }
}

function calcDailyCap(appCtx, msgCtx){
    let dailyRec = dbHandler.getCardsDateRecord(appCtx, msgCtx.cardId, msgCtx.inDateTime.dtStr);
    if(dailyRec.maxCapAllowed < appCtx.config.fare[msgCtx.fromZone][msgCtx.toZone].dailyCap){
        dailyRec.maxCapAllowed = appCtx.config.fare[msgCtx.fromZone][msgCtx.toZone].dailyCap;
    }
}

function calcWeeklyCap(appCtx, msgCtx){
    let weeklyRec = dbHandler.getCardsWeeksRecord(appCtx, msgCtx.cardId, msgCtx.inDateTime.week);
    if(weeklyRec.maxCapAllowed < appCtx.config.fare[msgCtx.fromZone][msgCtx.toZone].weeklyCap){
        weeklyRec.maxCapAllowed = appCtx.config.fare[msgCtx.fromZone][msgCtx.toZone].weeklyCap;
    }
}

function calcFareBasedonWeekly(appCtx, msgCtx, intendedFare){
    let weeklyRec = dbHandler.getCardsWeeksRecord(appCtx, msgCtx.cardId, msgCtx.inDateTime.week);
    if((weeklyRec.totActualFare + intendedFare) > weeklyRec.maxCapAllowed){
        return weeklyRec.maxCapAllowed - weeklyRec.totActualFare;
    }
    return intendedFare;
}

function calcFareBasedonDaily(appCtx, msgCtx, intendedFare){
    let dailyRec = dbHandler.getCardsDateRecord(appCtx, msgCtx.cardId, msgCtx.inDateTime.dtStr);
    if( (dailyRec.totActualFare + intendedFare) > dailyRec.maxCapAllowed){
        return dailyRec.maxCapAllowed - dailyRec.totActualFare;
    }
    return intendedFare;
}

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
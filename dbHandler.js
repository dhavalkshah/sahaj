function recordTapIn(appCtx, msgCtx){
    if(!appCtx.dbConn[msgCtx.cardId] || !appCtx.dbConn[msgCtx.cardId]['openTran']){
        appCtx.dbConn[msgCtx.cardId] = {
            'openTran' : []
        };
    } 
    appCtx.dbConn[msgCtx.cardId]['openTran'].push(msgCtx)
}

function recordTapOut(appCtx, msgCtx){
    if(!appCtx.dbConn.tran){
        appCtx.dbConn.tran = [];
    }
    appCtx.dbConn.tran.push(msgCtx);
}

function getCardsDateRecord(appCtx, cardId, dtStr){
    appCtx.dbConn[cardId].daily = appCtx.dbConn[cardId].daily || {};
    appCtx.dbConn[cardId].daily[dtStr] = appCtx.dbConn[cardId].daily[dtStr] || {};
    appCtx.dbConn[cardId].daily[dtStr].maxCapAllowed = appCtx.dbConn[cardId].daily[dtStr].maxCapAllowed || 0;
    appCtx.dbConn[cardId].daily[dtStr].totIntendedFare = appCtx.dbConn[cardId].daily[dtStr].totIntendedFare || 0;
    appCtx.dbConn[cardId].daily[dtStr].totActualFare = appCtx.dbConn[cardId].daily[dtStr].totActualFare || 0;
    return appCtx.dbConn[cardId].daily[dtStr];
}

function getCardsWeeksRecord(appCtx, cardId, weekNumber){
    appCtx.dbConn[cardId].weekly = appCtx.dbConn[cardId].weekly || {};
    appCtx.dbConn[cardId].weekly[weekNumber] = appCtx.dbConn[cardId].weekly[weekNumber] || {};
    appCtx.dbConn[cardId].weekly[weekNumber].maxCapAllowed = appCtx.dbConn[cardId].weekly[weekNumber].maxCapAllowed || 0;
    appCtx.dbConn[cardId].weekly[weekNumber].totIntendedFare = appCtx.dbConn[cardId].weekly[weekNumber].totIntendedFare || 0;
    appCtx.dbConn[cardId].weekly[weekNumber].totActualFare = appCtx.dbConn[cardId].weekly[weekNumber].totActualFare || 0;
    return appCtx.dbConn[cardId].weekly[weekNumber];
}

function updWeeklyFare(appCtx, msgCtx, actualFare){
    let weeklyRec = getCardsWeeksRecord(appCtx, msgCtx.cardId, msgCtx.inDateTime.week);
    weeklyRec.totActualFare = weeklyRec.totActualFare + actualFare;
}

function updDailyFare(appCtx, msgCtx, actualFare){
    let dailyRec = getCardsDateRecord(appCtx, msgCtx.cardId, msgCtx.inDateTime.dtStr);
    dailyRec.totActualFare = dailyRec.totActualFare + actualFare;
}

function updateActualFareToAgg(appCtx, msgCtx){
    updWeeklyFare(appCtx, msgCtx, msgCtx.actualFare);
    updDailyFare(appCtx, msgCtx, msgCtx.actualFare);
}

module.exports = {
    recordTapIn : recordTapIn,
    recordTapOut : recordTapOut,
    getCardsDateRecord : getCardsDateRecord,
    getCardsWeeksRecord : getCardsWeeksRecord,
    updateActualFareToAgg: updateActualFareToAgg
}
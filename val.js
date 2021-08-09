var moment = require('moment');

function padZero(ipNum){
    return String(ipNum).padStart(2,'0');
}

/**
 * Returns Weeknumber of the year - If its start of year and 31-Dec is a monday, 1-6 Jan has to be counted in previous year's week
 * Similarly if it is a Sunday (day == 0), it is to be counted in previous week
 * @param {moment} dt - Input date
 * @returns {Number} weekNumber - 
 */
function getWeek(dt){
    if(dt.month() === 0 && dt.week() === 1 && dt.day() !== 1 && dt.date() < 7){
        let lastYearEnd = moment(dt.year()-1+'-12-31', 'YYYY-MM-DD');
        let yr = dt.year()-1
        return ''+yr+lastYearEnd.week();
    }
    else if(dt.day() === 0){
        return getWeek(dt.subtract(1, 'days'));
    }
    return ''+dt.year()+dt.week();
}

function setErr(status, errCode, errMessage){
    return {
        status: status, 
        errCode: errCode,
        errMessage: errMessage
    }
}

/**
 * Validates the TAP-IN message
 * @param {*} appCtx  - Application Context
 * @param {*} msgCtx - Current Message Context
 * @param {*} cardId - Unique Card Identifier
 * @param {*} inDateTimeStr - Tapin Date and Time
 * @param {*} fromStationType  - Zone type where tap in was done
 * @returns 
 */
function valInMsg(appCtx, msgCtx, cardId, inDateTimeStr, fromStationType){
    let dt = moment(inDateTimeStr, 'YYYY-MM-DD hh:mm:ss');
    if(!dt.isValid()){
        return setErr(false, '0001', 'Invalid input date');
    }
    msgCtx.inDateTime = {
        dt: dt,
        dtStr: ""+dt.year()+padZero(dt.month())+padZero(dt.date()),
        day: dt.day(),
        week: getWeek(dt),
        time: Number(padZero(dt.hour())+padZero(dt.minute()))
    };

    if(!appCtx.config.zones.includes(fromStationType)){
        return setErr(false, '0002', 'Invalid Zone');
    }

    msgCtx.fromZone = fromStationType;
    msgCtx.cardId = cardId;

    return setErr(true,'0000','Success');
}

/**
 * Validates the Tap-Out message
 * @param {*} appCtx - Application Context
 * @param {*} msgCtx - Message Context
 * @param {*} cardId - Unique Card Identifier
 * @param {*} outDateTimeStr - TapOut date and time
 * @param {*} toStationType - Zone/station-type where the tap-out was done
 * @returns 
 */
function valOutMsg(appCtx, msgCtx, cardId, outDateTimeStr, toStationType){
    let dt = moment(outDateTimeStr, 'YYYY-MM-DD hh:mm:ss');
    if(!dt.isValid()){
        return setErr(false, '0001', 'Invalid input date');
    }
    msgCtx.outDateTime = {
        dt: dt,
        dtStr: ""+dt.year()+padZero(dt.month())+padZero(dt.date()),
        day: dt.day(),
        week: getWeek(dt),
        time: Number(padZero(dt.hour())+padZero(dt.minute()))
    };

    if(!appCtx.config.zones.includes(toStationType)){
        return setErr(false, '0002', 'Invalid Zone');
    }
    msgCtx.toZone = toStationType;
    msgCtx.cardId = cardId;

    if( !appCtx.dbConn[msgCtx.cardId] || !appCtx.dbConn[msgCtx.cardId]['openTran'] ){
        return setErr(false, '0003', 'No Open Transaction for the tapout');
    }

    let latestOpenTran = appCtx.dbConn[msgCtx.cardId]['openTran'].shift();

    msgCtx.inDateTime = latestOpenTran.inDateTime;
    msgCtx.fromZone = latestOpenTran.fromZone;

    return setErr(true,'0000','Success');
}

exports.valInMsg = valInMsg;
exports.valOutMsg = valOutMsg;
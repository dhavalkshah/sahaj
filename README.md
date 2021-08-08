# Prerequisite

Node - Tested on node v12.18.3

# Installation
Clone this repo and run the following command
```
cd sahaj
npm install
```

# Configurations
- zones - Contains the valid list of zones
- fare - Contains the following for a combination of zone
    - peak - Peak hour charges
    - offpeak - Off-peak hour charges
    - dailyCap - Max daily cap allowed
    - weeklyCap - Max weekly cap allowed
- peak - Contains the start and end hours for each of the day of the week. 0 represents Sunday, 6 represents Saturday.
    - start - Integer form of HHMI format for start of peak time. e.g. 7:05 AM will be 705
    - end - Integer form of HHMI format for end of peak time

# Assumptions
- Dedup check of the incoming message is assumed to be handled prior to calling these methods
- I have used app-memory as in-memory DB

# Objects

## Weekly Data for a given card
```
"weekly" : { --> Weekly Data
    "<weekNumber>" : { --> YYYY+WeekNumber of the year
        "maxCapAllowed" : xx --> Max cap allowed for the week,
        "totIntendedFare" : yy --> Total intended fare for the week,
        "totActualFare" :zz --> Total actual fare for the week
    }
}
```

## Daily data for a given card
```
"daily" : {
    "<date>" :{ --> YYYYMMDD
        "maxCapAllowed" : xx --> Max cap allowed for the day,
        "totIntendedFare" : yy --> Total intended fare for the day,
        "totActualFare" :zz --> Total actual fare for the day
    }
}
```
## Transaction Data 
It represents array of transaction. Each element of the array can be represented as
```
{
    "cardId": "abc",
    "fromZone": "Z2",
    "inDateTime": {
        "dt": "2021-08-09T04:48:00.000Z",
        "dtStr": "20210709",
        "day": 1,
        "week": 33,
        "time": 1018
    },
    "toZone": "Z1",
    "outDateTime": {
        "dt": "2021-08-09T04:58:00.000Z",
        "dtStr": "20210709",
        "day": 1,
        "week": 33,
        "time": 1028
    },
    "isPeak": true,
    "intendedFare": 35,
    "actualFare": 35
}
```

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
- Assuming that there will be a separate clean-up job which will clean previous week's data
- I have used app-memory as in-memory DB

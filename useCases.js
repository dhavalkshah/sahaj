const app = require('./app');
//Sahaj equivalent test cases
app.tapIn('abc', '2021-08-09 10:18:00', 'Z2');
app.tapOut('abc', '2021-08-09 10:28:00', 'Z1');
app.tapIn('abc', '2021-08-09 10:45:00', 'Z1');
app.tapOut('abc', '2021-08-09 10:46:00', 'Z1');
app.tapIn('abc', '2021-08-09 16:15:00', 'Z1');
app.tapOut('abc', '2021-08-09 16:16:00', 'Z1');
app.tapIn('abc', '2021-08-09 18:15:00', 'Z1');
app.tapOut('abc', '2021-08-09 18:16:00', 'Z1');
app.tapIn('abc', '2021-08-09 19:00:00', 'Z1');
app.tapOut('abc', '2021-08-09 19:01:00', 'Z2');

app.tapIn('abc', '2021-08-10 10:18:00', 'Z2');
app.tapOut('abc', '2021-08-10 10:28:00', 'Z1');
app.tapIn('abc', '2021-08-10 10:45:00', 'Z1');
app.tapOut('abc', '2021-08-10 10:46:00', 'Z1');
app.tapIn('abc', '2021-08-10 16:15:00', 'Z1');
app.tapOut('abc', '2021-08-10 16:16:00', 'Z1');
app.tapIn('abc', '2021-08-10 18:15:00', 'Z1');
app.tapOut('abc', '2021-08-10 18:16:00', 'Z1');
app.tapIn('abc', '2021-08-10 19:00:00', 'Z1');
app.tapOut('abc', '2021-08-10 19:01:00', 'Z2');

app.tapIn('abc', '2021-08-11 10:18:00', 'Z2');
app.tapOut('abc', '2021-08-11 10:28:00', 'Z1');
app.tapIn('abc', '2021-08-11 10:45:00', 'Z1');
app.tapOut('abc', '2021-08-11 10:46:00', 'Z1');
app.tapIn('abc', '2021-08-11 16:15:00', 'Z1');
app.tapOut('abc', '2021-08-11 16:16:00', 'Z1');
app.tapIn('abc', '2021-08-11 18:15:00', 'Z1');
app.tapOut('abc', '2021-08-11 18:16:00', 'Z1');
app.tapIn('abc', '2021-08-11 19:00:00', 'Z1');
app.tapOut('abc', '2021-08-11 19:01:00', 'Z2');

app.tapIn('abc', '2021-08-12 10:18:00', 'Z2');
app.tapOut('abc', '2021-08-12 10:28:00', 'Z1');
app.tapIn('abc', '2021-08-12 10:45:00', 'Z1');
app.tapOut('abc', '2021-08-12 10:46:00', 'Z1');
app.tapIn('abc', '2021-08-12 16:15:00', 'Z1');
app.tapOut('abc', '2021-08-12 16:16:00', 'Z1');
app.tapIn('abc', '2021-08-12 18:15:00', 'Z1');
app.tapOut('abc', '2021-08-12 18:16:00', 'Z1');
app.tapIn('abc', '2021-08-12 19:00:00', 'Z1');
app.tapOut('abc', '2021-08-12 19:01:00', 'Z2');

app.tapIn('abc', '2021-08-13 11:18:00', 'Z1');
app.tapOut('abc', '2021-08-13 11:28:00', 'Z1');
app.tapIn('abc', '2021-08-13 11:45:00', 'Z1');
app.tapOut('abc', '2021-08-13 11:46:00', 'Z1');
app.tapIn('abc', '2021-08-13 17:15:00', 'Z1');
app.tapOut('abc', '2021-08-13 17:16:00', 'Z1');

app.tapIn('abc', '2021-08-14 16:15:00', 'Z1');
app.tapOut('abc', '2021-08-14 16:16:00', 'Z1');
app.tapIn('abc', '2021-08-14 18:15:00', 'Z1');
app.tapOut('abc', '2021-08-14 18:16:00', 'Z1');
app.tapIn('abc', '2021-08-14 19:00:00', 'Z1');
app.tapOut('abc', '2021-08-14 19:01:00', 'Z2');

app.tapIn('abc', '2021-08-15 19:00:00', 'Z1');
app.tapOut('abc', '2021-08-15 19:01:00', 'Z2');

app.tapIn('abc', '2021-08-16 10:00:00', 'Z1');
app.tapOut('abc', '2021-08-16 10:15:00', 'Z1');
app.tapIn('abc', '2021-08-16 10:18:00', 'Z2');
app.tapOut('abc', '2021-08-16 10:28:00', 'Z1');
app.tapIn('abc', '2021-08-16 10:30:00', 'Z2');
app.tapOut('abc', '2021-08-16 10:32:00', 'Z1');


app.calcTotalCost('abc','2021-08-09','2021-08-09');
app.calcTotalCost('abc','2021-08-10','2021-08-10');
app.calcTotalCost('abc','2021-08-11','2021-08-11');
app.calcTotalCost('abc','2021-08-12','2021-08-12');
app.calcTotalCost('abc','2021-08-13','2021-08-13');
app.calcTotalCost('abc','2021-08-14','2021-08-14');
app.calcTotalCost('abc','2021-08-15','2021-08-15');
app.calcTotalCost('abc','2021-08-16','2021-08-16');
app.calcTotalCost('abc','2021-08-09','2021-08-16');

//Year-End Testing
app.tapIn('yrend', '2010-12-26 10:18:00', 'Z2');
app.tapOut('yrend', '2010-12-26 10:28:00', 'Z1');
app.tapIn('yrend', '2010-12-26 10:45:00', 'Z1');
app.tapOut('yrend', '2010-12-26 10:46:00', 'Z1');
app.tapIn('yrend', '2010-12-26 16:15:00', 'Z1');
app.tapOut('yrend', '2010-12-26 16:16:00', 'Z1');
app.tapIn('yrend', '2010-12-26 18:15:00', 'Z1');
app.tapOut('yrend', '2010-12-26 18:16:00', 'Z1');
app.tapIn('yrend', '2010-12-26 19:00:00', 'Z1');
app.tapOut('yrend', '2010-12-26 19:01:00', 'Z2');

app.tapIn('yrend', '2010-12-27 10:18:00', 'Z2');
app.tapOut('yrend', '2010-12-27 10:28:00', 'Z1');
app.tapIn('yrend', '2010-12-27 10:45:00', 'Z1');
app.tapOut('yrend', '2010-12-27 10:46:00', 'Z1');
app.tapIn('yrend', '2010-12-27 16:15:00', 'Z1');
app.tapOut('yrend', '2010-12-27 16:16:00', 'Z1');
app.tapIn('yrend', '2010-12-27 18:15:00', 'Z1');
app.tapOut('yrend', '2010-12-27 18:16:00', 'Z1');
app.tapIn('yrend', '2010-12-27 19:00:00', 'Z1');
app.tapOut('yrend', '2010-12-27 19:01:00', 'Z2');

app.tapIn('yrend', '2010-12-28 10:18:00', 'Z2');
app.tapOut('yrend', '2010-12-28 10:28:00', 'Z1');
app.tapIn('yrend', '2010-12-28 10:45:00', 'Z1');
app.tapOut('yrend', '2010-12-28 10:46:00', 'Z1');
app.tapIn('yrend', '2010-12-28 16:15:00', 'Z1');
app.tapOut('yrend', '2010-12-28 16:16:00', 'Z1');
app.tapIn('yrend', '2010-12-28 18:15:00', 'Z1');
app.tapOut('yrend', '2010-12-28 18:16:00', 'Z1');
app.tapIn('yrend', '2010-12-28 19:00:00', 'Z1');
app.tapOut('yrend', '2010-12-28 19:01:00', 'Z2');

app.tapIn('yrend', '2010-12-29 10:18:00', 'Z2');
app.tapOut('yrend', '2010-12-29 10:28:00', 'Z1');
app.tapIn('yrend', '2010-12-29 10:45:00', 'Z1');
app.tapOut('yrend', '2010-12-29 10:46:00', 'Z1');
app.tapIn('yrend', '2010-12-29 16:15:00', 'Z1');
app.tapOut('yrend', '2010-12-29 16:16:00', 'Z1');
app.tapIn('yrend', '2010-12-29 18:15:00', 'Z1');
app.tapOut('yrend', '2010-12-29 18:16:00', 'Z1');
app.tapIn('yrend', '2010-12-29 19:00:00', 'Z1');
app.tapOut('yrend', '2010-12-29 19:01:00', 'Z2');

app.tapIn('yrend', '2010-12-30 10:18:00', 'Z2');
app.tapOut('yrend', '2010-12-30 10:28:00', 'Z1');
app.tapIn('yrend', '2010-12-30 10:45:00', 'Z1');
app.tapOut('yrend', '2010-12-30 10:46:00', 'Z1');
app.tapIn('yrend', '2010-12-30 16:15:00', 'Z1');
app.tapOut('yrend', '2010-12-30 16:16:00', 'Z1');
app.tapIn('yrend', '2010-12-30 18:15:00', 'Z1');
app.tapOut('yrend', '2010-12-30 18:16:00', 'Z1');
app.tapIn('yrend', '2010-12-30 19:00:00', 'Z1');
app.tapOut('yrend', '2010-12-30 19:01:00', 'Z2');

app.tapIn('yrend', '2010-12-31 10:18:00', 'Z2');
app.tapOut('yrend', '2010-12-31 10:28:00', 'Z1');
app.tapIn('yrend', '2010-12-31 10:45:00', 'Z1');
app.tapOut('yrend', '2010-12-31 10:46:00', 'Z1');
app.tapIn('yrend', '2010-12-31 16:15:00', 'Z1');
app.tapOut('yrend', '2010-12-31 16:16:00', 'Z1');
app.tapIn('yrend', '2010-12-31 18:15:00', 'Z1');
app.tapOut('yrend', '2010-12-31 18:16:00', 'Z1');
app.tapIn('yrend', '2010-12-31 19:00:00', 'Z1');
app.tapOut('yrend', '2010-12-31 19:01:00', 'Z2');

app.tapIn('yrend', '2011-01-01 18:15:00', 'Z1');
app.tapOut('yrend', '2011-01-01 18:16:00', 'Z1');
app.tapIn('yrend', '2011-01-01 19:00:00', 'Z1');
app.tapOut('yrend', '2011-01-01 19:01:00', 'Z2');

app.tapIn('yrend', '2011-01-02 18:15:00', 'Z1');
app.tapOut('yrend', '2011-01-02 18:16:00', 'Z1');
app.tapIn('yrend', '2011-01-02 19:00:00', 'Z1');
app.tapOut('yrend', '2011-01-02 19:01:00', 'Z2');

app.tapIn('yrend', '2011-01-03 18:15:00', 'Z1');
app.tapOut('yrend', '2011-01-03 18:16:00', 'Z1');
app.tapIn('yrend', '2011-01-03 19:00:00', 'Z1');
app.tapOut('yrend', '2011-01-03 19:01:00', 'Z2');

app.calcTotalCost('yrend','2010-12-20','2011-01-10');
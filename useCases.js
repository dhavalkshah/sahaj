const app = require('./app');
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

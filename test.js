const app = require('./app');
var assert = require('assert');
assert(app.tapIn('abc', '2021-31-08 08:18:00', 'Z1') == "0001");
assert(app.tapIn('abc', '2021-08-08 08:18:00', 'xx') == "0002");

assert(app.tapOut('abc', '2021-31-08 08:18:00', 'Z1') == "0001");
assert(app.tapOut('abc', '2021-08-08 08:18:00', 'xx') == "0002");
assert(app.tapOut('xyz', '2021-08-08 08:18:00', 'Z1') == "0003");

assert(app.tapIn('test', '2021-08-08 08:08:00', 'Z1') == "0000");
assert(app.tapOut('test', '2021-08-08 10:48:00', 'Z2') == "0000");
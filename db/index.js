let mongoose = require('mongoose');
let festival = require('./Festival');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/festivals');

module.exports.Festival = festival;
